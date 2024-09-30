var smallMedia = window.matchMedia('(max-width: 500px)').matches;

var layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
  heatmap: ['heatmap-opacity'],
};

var alignments = {
  'left': 'lefty',
  'center': 'centered',
  'right': 'righty',
  'full': 'fully'
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function(prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { "duration": layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById('story');
var features = document.createElement('div');
var header = document.createElement('div');
var footer = document.createElement('div');
var scroller = scrollama();

features.setAttribute('id', 'features');

if (config.title) {
  var titleText = document.createElement('h1');
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement('h2');
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement('div');
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement('div');
  var chapter = document.createElement('div');
  chapter.innerHTML = record.chapterDiv;
  container.setAttribute('id', record.id);
  container.classList.add('step');
  if (idx === 0) {
    container.classList.add('active');
  }
  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || 'centered');
  if (record.hidden) {
    container.classList.add('hidden');
  }
    features.appendChild(container);
});

story.appendChild(features);

mapboxgl.accessToken = config.accessToken;

if (config.footer) {
  var footerText = document.createElement('p');
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute('id', 'footer');
  story.appendChild(footer);
}

const transformRequest = (url) => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery ? '&pluginName=scrollytellingV3' : '?pluginName=scrollytellingV3';
  return {
    url: url + suffix
  }
}

var startingZoom;
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

var map = new mapboxgl.Map({
  container: 'map',
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

map.on('load', function () {
  map.addLayer(
    { id: '01-stroads',
      source: {
        type: 'geojson',
        data: '../data/stroads.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'maj_ej'],
          0, '#d8d8d8', 
          1, '#f35d17'],
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '02-studyArea',
      source: {
        type: 'geojson',
        data: '../data/stroads.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'maj_ej'],
          0, 'transparent', 
          1, '#f35d17'],
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '03-eja',
      source: {
        type: 'geojson',
        data: '../data/ej_2010.geojson'},
      type: 'fill',
      paint: {
        'fill-color': '#eab696',
        'fill-opacity': 0}
    });

  map.addLayer(
    { id: '04-acs-car',
      source: {
        type: 'geojson',
        data: './data/acs_vehicleOwn.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'Score'],
          1, '#b9c7c6', 
          2, '#98a4b6',
          3, '#7882a7',
          4, '#556197',
          5, '#2d4387'],
        'fill-opacity': 0}
    }, '02-studyArea');  
  map.addLayer(
    { id: '05-stroads-car-high',
      source: {
        type: 'geojson',
        data: '../data/stroads.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'case',
          ['==', ['get', 'pct_high'], null],
          'transparent',
          ['step', ['get', 'pct_high'], 'transparent', .75, '#f35d17']],
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '06-acs-car-high',
      source: {
        type: 'geojson',
        data: './data/acs_vehicleOwn.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'Score'],
          1, 'transparent', 
          2, 'transparent',
          3, '#7882a7',
          4, '#556197',
          5, '#2d4387'],
        'fill-opacity': 0}
    }, '05-stroads-car-high');
  map.addLayer(
    { id: '07-stroads-car-low',
      source: {
        type: 'geojson',
        data: '../data/stroads.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'case',
          ['==', ['get', 'pct_low'], null],
          'transparent',
          ['step', ['get', 'pct_low'], 'transparent', .75, '#f35d17']],
        'fill-opacity': 0}
    }); 
  map.addLayer(
    { id: '08-acs-car-low',
      source: {
        type: 'geojson',
        data: './data/acs_vehicleOwn.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'Score'],
          1, '#b9c7c6', 
          2, '#98a4b6',
          3, 'transparent',
          4, 'transparent',
          5, 'transparent'],
        'fill-opacity': 0}
    }, '07-stroads-car-low');
  map.addLayer(
    { id: '09-acs-transit',
      source: {
        type: 'geojson',
        data: './data/acs_publicTranspo.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'Score'],
          1, '#b5caed', 
          2, '#a4a7d8',
          3, '#9284c2',
          4, '#7f62ad',
          5, '#6b4099',
          6, '#561b84'],
        'fill-opacity': 0}
    }, '02-studyArea'); 

  map.addLayer(
    { id: '10-dot-priority',
      source: {
        type: 'geojson',
        data: './data/dot_priority_studyArea.geojson'},
      type: 'fill',
      paint: {
        'fill-color': '#f35d17',
        'fill-opacity': 0}
    }); 
  map.addLayer(
    { id: '11-dot-demand',
      source: {
        type: 'geojson',
        data: './data/dot_demand_studyArea.geojson'},
      type: 'line',
      paint: {
        'line-color': [
          'interpolate',
          ['linear'],
          ['get', 'rank'],
          1, '#432371',
          2, '#754276',
          3, '#a26479',
          4, '#ce887b',
          5, '#FAAE7B'],
        'line-width': 3.5,
        'line-opacity': 0}
    });

  map.addLayer(
    { id: '12-heat-map',
      source:  {
        type: 'geojson',
        data: './data/nycc_heatmap.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'gridcode'],
          -8, '#B2A7D2', 
          -7, '#B5BAFC',
          -6, '#B3C9FD',
          -5, '#B0DAFD',
          -4, '#ACEAFE',
          -3, '#A7F9FD',
          -2, '#B2FCF6', 
          -1, '#C4FDE6',
          0, '#D4FED6',
          1, '#E3FEC6',
          2, '#EEFEB5',
          3, '#F8FAAB',
          4, '#FBECAB',
          5, '#FCDCAA',
          6, '#FCCDAA',
          7, '#FCBCAA',
          8, '#FCACAA'],
        'fill-opacity': 0}
    }, '02-studyArea');  
  map.addLayer(
    { id: '13-hot-map',
      source:  {
        type: 'geojson',
        data: './data/nycc_heatmap.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'gridcode'],
          -8, 'transparent', 
          -7, 'transparent',
          -6, 'transparent',
          -5, 'transparent',
          -4, 'transparent',
          -3, 'transparent',
          -2, 'transparent', 
          -1, 'transparent',
          0, 'transparent',
          1, '#E3FEC6',
          2, '#EEFEB5',
          3, '#F8FAAB',
          4, '#FBECAB',
          5, '#FCDCAA',
          6, '#FCCDAA',
          7, '#FCBCAA',
          8, '#FCACAA'],
        'fill-opacity': 0}
    }, '02-studyArea');

  map.addLayer(
    { id: '14-canopy',
      source: {
        type: 'geojson',
        data: './data/oti_treeCanopy.geojson'},
      type: 'fill',
      paint: {
        'fill-color': '#008000',
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '15-canopy-linden',
      source: {
        type: 'geojson',
        data: './data/oti_treeCanopy.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'OBJECTID'],
          1, 'transparent', 
          2, 'transparent',
          3, '#008000',
          4, 'transparent'],
        'fill-opacity': 0}
     });  
  map.addLayer(
    { id: '16-canopy-eastern',
      source: {
        type: 'geojson',
        data: './data/oti_treeCanopy.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'OBJECTID'],
          1, 'transparent', 
          2, '#008000',
          3, 'transparent',
          4, 'transparent'],
        'fill-opacity': 0}
    });

  map.addLayer(
    { id: '17-flood1',
      source: {
        type: 'geojson',
        data: './data/high-tide-deep-flood.geojson'},
      buffer: 0,
      minzoom: 7,
      maxzoom: 14,
      type: 'fill',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'OBJECTID'],
          2, '#00A9E6',
          3, '#004C73'],
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '18-flood2',
      source: {
        type: 'geojson',
        data: './data/nuisance-flood.geojson'},
      buffer: 0,
      minzoom: 7,
      maxzoom: 14,
      type: 'fill',
      paint: {
        'fill-color': '#73DFFF',
        'fill-opacity': 0}
    });
  map.addLayer(
    { id: '19-stroads-flood',
      source: {
        type: 'geojson',
        data: '../data/stroads.geojson'},
      type: 'fill',
      paint: {
        'fill-color': [
          'case',
          ['==', ['get', 'pct_flood_20'], null],
          'transparent',
          ['step', ['get', 'pct_flood_20'], 'transparent', 1, '#f35d17']],
        'fill-opacity': 0}
    });

  scroller
    .setup({
      step: '.step',
      offset: 0.75,
      progress: true,
    })
    .onStepEnter(response => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add('active');
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || 'flyTo'](chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once('moveend', () => {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
        });
      });
    }
  })
  .onStepExit(response => {
    var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
    );
    response.element.classList.remove('active');
    if (chapter.onChapterExit.length > 0) {
      chapter.onChapterExit.forEach(setLayerOpacity);
    }
  });
  
});

window.addEventListener('resize', scroller.resize);