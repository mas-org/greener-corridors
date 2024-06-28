var smallMedia = window.matchMedia("(max-width: 600px)").matches;

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
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
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}

if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement('div');
  var chapter = document.createElement('div');
  chapter.classList.add("br3");
  chapter.innerHTML = record.chapterDiv;
  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }
  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

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

mapboxgl.accessToken = config.accessToken;

/* idk */
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
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

var scroller = scrollama();

map.on("load", function () {
  map.addLayer(
    {
      id: "stroads",
      source: {
        type: "geojson",
        data: "data/stroads.geojson",
      },
      type: "fill",
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'maj_ej'],
          0, '#c0bebd', 
          1, '#f35d17'],
      }
    });
  map.addLayer(
    {
      id: 'ej',
      source: {
        type: 'geojson',
        data: 'data/ej_2010.geojson'
      },
      type: 'fill',
      paint: {
        'fill-color': '#eab696',
        'fill-opacity': 0.35,
      }
    });  
  map.addLayer(
    {
      id: "vehicle",
      source: {
        type: "geojson",
        data: "data/acs_vehicleownership.geojson",
      },
      type: "fill",
      paint: {
        'fill-color': [
          'interpolate', ['linear'], 
          ['get', 'Score'],
          1, '#b9c7c6', 
          2, '#98a8b6',
          3, '#7587a6',
          4, '#526697',
          5, '#2d4387'
        ],
      }
    });
    map.addLayer(
      {
        id: "transit",
        source: {
          type: "geojson",
          data: "data/acs_publictransport.geojson",
        },
        type: "fill",
        paint: {
          'fill-color': [
            'interpolate', ['linear'], 
            ['get', 'Score'],
            1, '#b5caed', 
            2, '#a0a9d7',
            3, '#8c87c1',
            4, '#7b6baf',
            5, '#684b9b',
            6, '#561b84'
          ],
        }
      }); 

  map.moveLayer('transit', 'vehicle', 'ej', 'stroads');

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