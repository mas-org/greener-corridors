let titleDiv = 
'<img src="../images/MAS-Full-BY.png" alt="MAS Logo" height=75px width=auto><br><br>'
+'<h1>Greener Corridors for a More Resilient City</h1>';

let subtitleDiv = 
'<h2>Issues & Opportunities</h2><p></p>';

let bylineDiv = 
'<p class="p-header"><a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">Greener Corridors</a> examines New York City’s largest arterial thoroughfares as an opportunity to create more livable, efficient, and green public spaces. As a mix of urban street (where people live and shop) and road (designed to quickly move large volumes of through-traffic), such corridors are sometimes referred to as “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” in urban planning circles. This street-road mix is often incompatible, and stroads are frequently criticized for being inefficient, unappealing, dangerous, and too focused on through-movement at the expense of walkable environments that foster a sense of place. This storymap series takes a deeper look at the spatial relationship between these thoroughfares and mobility, sustainability, and land use issues to better understand where and how these corridors might be improved.</p><br>'
+'<div class="row">' 
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/built-for-auto/">PART 1</a></h1></div>'
  +'<div class="column"><h1><mark>PART 2</mark></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/policy-map/">Policy Map</a></h1></div>'
  +'</div><br><hr>'
+'<div class="container">'
  +'<img src="../images/cover03.jpg" alt="Person standing under the shade of a small street tree" width=100%>'
  +'<div class="top-left"><h1 style="color:black">Part 2</h1><h2 style="color:black">Islands of Heat</h2></div>'
+'<figcaption>Boston Road in the Bronx. Photo: Kade Van Meeteren.</figcaption>';

let footerDiv = 
'<p class="p-footer">Published September 23, 2024 by <a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">The Municipal Art Society of New York</a>. Storymap built by <a href="https://github.com/rnzee">@rnzee</a> and <a href="https://github.com/stalbonesi">@salbonesi</a> using <a href="https://github.com/mapbox/storytelling/tree/main" target="_blank">these</a> <a href="https://pointsunknown.nyc" target="_blank">resources</a>. The datasets used in this project are <a href="https://github.com/mas-org/greener-corridors/blob/main/README.md" target="_blank">listed here</a>.</p>';

var config = {
  style: 'mapbox://styles/mas-nyc/clyhq3ezb01kh01qrf3jmgr0l',
  accessToken: 'pk.eyJ1IjoibWFzLW55YyIsImEiOiJjbHgyMjRvamUwaXNpMmpvcmNoZ3JncTJ3In0.HHJQQ_T7pLEX4Gzy1jdeKQ',
  showMarkers: false,
  theme: 'light',
  title: titleDiv,
  subtitle: subtitleDiv,
  byline: bylineDiv,
  footer: footerDiv,
  chapters: [
    { id: "env-01",
      alignment: "centered",
      hidden: false,
      chapterDiv: 
      '<p>More and more frequently, cities are encountering a phenomenon called the “urban heat island” effect, in which an urban area experiences warmer temperatures than its outlying, often rural areas. The difference is due in large part to the concentration of manmade surfaces in cities, like concrete, asphalt, and brick, that absorb and retain heat. This trapped heat contributes to higher air temperatures.</p>'
      +'<p>According to a 2023 <a href="https://www.climatecentral.org/climate-matters/urban-heat-islands-2023" target="_blank">report by  Climate Central</a>, New York City has the greatest urban heat island effect of any major U.S. city, with temperatures nearly 10 degrees hotter for the average resident than they would otherwise be. Given the city’s already hot and humid climate, the result is that <a href="https://a816-dohbesp.nyc.gov/IndicatorPublic/data-stories/urban-heat-island/" target="_blank">more people die from extreme heat</a> in New York City than from all other natural disasters combined.</p>'
      +'<p>As we’ll explore in this post, New York City’s stroads have the potential to be a major component of the city’s climate solution.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-3.jpg" alt="Person walking down wide sidewalk between parking lot and empty road with no street furnishings except pole and hydrant" width=100%>'
        +'<figcaption>Looking south on a warm summer day, one might mistake Utica Avenue’s single-story, treeless horizon for an arterial in the desert. Photo: Kade Van Meeteren.</figcaption></figure>'
      +'<br><p style="text-align:center;font-size:smaller"><em>Scroll to continue</em> ▼</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
        pitch: 0,
        bearing: 0,
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [        
        { layer: '12-heat-map',
          opacity: 0,
        },
      ]
    },

    { id: "env-02",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>The New York City Council Data Team’s <a href="<a href="https://council.nyc.gov/data/heat/" target="_blank">2023 Heat Map</a> of surface temperatures (reproduced here) reveals that the city’s airports and industrial areas like East Williamsburg, Hunts Point, Sunnyside Yard, and the Newtown Creek area, which are mostly impervious surfaces with few trees or other vegetation, tend to have higher relative surface temperatures than the rest of the city.</p>'
      +'<br><br><dl><dt><strong>Legend</strong></dt>'
        +'<dd>Relative Average Temperature* [-8&deg;F to +8&deg;F]:<br><svg height="14" width="50%"><defs><linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#B2A7D2" /><stop offset="50%" stop-color="#D4FED6" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad1)"/></svg><br><br>*For example, the surface temperatures of areas colored red on the map were approximately 8&deg;F hotter than the citywide average.</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '12-heat-map',
          opacity: .75,
        },
        { layer: '13-hot',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '12-heat-map',
          opacity: 0,
        },
      ]
    },

    { id: "env-03",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>Surface temperature, which may be affected by nearby buildings and access to shade (or lack thereof), is just one indicator. When it comes to social resilience in the face of climate change, socioeconomic conditions and health outcomes, which vary widely across the city, play an outsized role. Residents of New York City’s environmental justice (EJ) areas, the focus of our study, are more susceptible to extreme heat due to lack of access to green space, racial disparity, and even limited access to air conditioning. According to the <a href="https://climate.cityofnewyork.us/topic/environmental-justice/" target="_blank">Mayor’s Office of Climate & Environmental Justice</a>, nine of the top ten neighborhoods in New York with the lowest rates of air conditioning at home are EJ neighborhoods.</p>'
      +'<br><br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd>Relative Average Temperature [+3&deg;F to +8&deg;F]:<br><svg height="14" width="50%"><defs><linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#F8FAAB" /><stop offset="50%" stop-color="#FCDCAA" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad2)"/></svg></dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '13-hot',
          opacity: 1,
        },
        { layer: '14-stroads-hot',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    { id: "env-04",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>A 2024 <a href="https://projects.transalt.org/new-york-city-bus-urban-heat" target="_blank">study by Transportation Alternatives</a> identified 100 of the hottest bus stops in the city, where average temperatures are up to 14.5 degrees hotter than the coolest bus stops. A quarter of them are located along eleven stroads within the city’s EJ areas: Springfield Boulevard in Queens; Kings Highway, Norstrand Avenue, and Utica Avenue in Brooklyn; and Edgewater Road, East 138th Street, 233rd Street, Eastchester Road, Grand Concourse, Webster Avenue, and Westchester Avenue in the Bronx.</p>'
      +'<p>A single corridor may, across its full length, support a host of uses, from shops and apartments to manufacturing areas. In fact, most stroads are also truck routes, and many of them go through and connect to manufacturing areas, which are among the city’s hottest&mdash;and greyest&mdash;areas.</p>'
      +'<br><br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#630330;stroke-width:2" /></svg>Stroads with hottest bus stops per Trans Alt study</dd>'
        +'<dd>Relative Average Temperature [+3&deg;F to +8&deg;F]:<br><svg height="14" width="50%"><defs><linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#F8FAAB" /><stop offset="50%" stop-color="#FCDCAA" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad2)"/></svg></dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '14-stroads-hot',
          opacity: 1,
        },
        { layer: '12-oti-canopy',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '13-hot',
          opacity: 0,
        },
        { layer: '14-stroads-hot',
          opacity: 0,
        }
      ],
    },

    { id: "env-05",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>Trees and other plants alleviate heat through transpiration and shade, on top of other environmental benefits to biodiversity, air quality, and stormwater mitigation. In total, the New York City <a href=""https://www.nyc.gov/html/mancb3/downloads/resources/NYC Street Tree Overview.pdf" target="_blank">Department of Parks and Recreation estimates</a> that trees provide $5.60 in benefits for every dollar spent on tree planting and care.</p>'
      +'<p>Just 15% of the city’s tree canopy is located within walking distance of stroads that cut through EJ neighborhoods. Street trees in particular have a significant effect on the pedestrian experience, especially amid ever increasing high temperature days.</p>'
      +'<br><br><dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#008000" /></svg>Tree Canopy within 500 ft of Study Area</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '12-oti-canopy',
          opacity: 1,
        },
      ],
      onChapterExit: [
        { layer: '12-oti-canopy',
          opacity: 0,
        },
      ],
    },

    { id: "env-06",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>[Zoom in to a corridor w/ limited tree coverage + text.]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    { id: "env-07",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>[Zoom in to a second corridor w/ limited tree coverage + text.]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: "env-08",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>[Zoom into a tree-rich corridor for comparison + text.]</p>'
      +'<p>The “sidewalk furnishing zone,” a portion of the sidewalk where most street trees are planted, only contains sporadic trees, even though they are mandated by zoning. <mark>The same is true of the corridor’s medians, whose total concrete width spans more than [width] feet in some sections.</mark></p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-09',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The need to work around restrictive siting constraints undoubtedly explains the lack of vegetation in some areas. For example, the New York City Department of Parks and Recreation stipulates that street trees must be planted a certain distance from building entrances, curb cuts, bus stops, streetlights, traffic signs, and water mains, ruling out much of the sidewalk space on many blocks. There are also maintenance, tree species, and soil type and depth considerations.</p>'
      +'<figure>'
        +'<img src="./images/atlantic-ave-7.jpg" alt="Road torn up for construction along what will be a median" width=100%>'
        +'<figcaption>Underutilized medians beg for creative greening and programming strategies to enliven them. Green infrastructure could be pervasive but is limited and piecemeal due largely to the challenge of maintaining it and siting constraints. Photo: Kade Van Meeteren.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-10',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p class="p-wide">Yet New York City has less than one tree for each of its 8.3 million residents, according to a recent <a href="https://www.nature.org/content/dam/tnc/nature/en/documents/State-of-the-Urban-Forest-NYC.pdf">report by The Nature Conservancy</a>. Just 22 percent of New York City’s land area is covered by tree canopy (<a href="https://storymaps.arcgis.com/stories/5353de3dea91420faaa7faff0b32206b">NYC Parks</a>) and 25 percent of it is along streets, which New Yorkers use more regularly than any other type of public space.</p>'
      +'<p class="p-wide">The city’s most recent street tree census (2015) notes that there is an opportunity to plant approximately 250,000 additional street trees citywide, an almost 40 percent increase from the total that was counted. The census suggests that siting constraints alone do not explain why wide swaths of these corridors are devoid of anything green. Policy priorities, interagency coordination, and budget issues are also at play.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-11',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>Like heat, nuisance and storm-related flooding are becoming more frequent and intense in New York City. According to the New York City Panel on Climate Change, average precipitation is expected to increase by four to 11 percent between now and 2050. Hurricane Sandy was a wakeup call to protect the city’s coasts from storm surge, but recent and unprecedented cloudburst events have laid bare just how much the entire city’s infrastructure needs to adapt to a changing reality. Some parts of the city have sewers only designed to manage 1.5 inches of rain, or less, per hour. During Hurricane Ida, some areas received 3.75 inches per hour – more than twice the maximum sewer capacity. While shoring up sewer capacity is critical, the city must greatly accelerate converting its more than 70 percent impervious landcover to more absorbent surfaces that can reduce the burden on sewers.</p>'
      +'<p>IMAGE</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-12',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>[Flooding overview]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    
    { id: 'env-13',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>[Add where DEP green infrastructure is to map]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-14',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>[Example]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-15',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>[Example]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    
    { id: 'env-16',
      alignment: 'center',
      hidden: false,
      chapterDiv: 
      '<p>Highly trafficked streets and large surface parking areas also generate significant amounts of pollutants (such as metals, hydrocarbons, bacteria, and excess sediments) that run off and pollute the region’s water bodies because they are unable to be absorbed into the ground. The impact is amplified in New York City, where the right-of-way comprises roughly 28 percent of all combined sewer overflow drainage areas, more area than any other type of City-managed land.</p>'
      +'<p>IMAGE</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-17',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>[Map highlighting worst corridor segments/opportunity corridors based on safety, heat, and flooding]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-18',
      alignment: 'center',
      hidden: false,
      chapterDiv: 
      '<p>[Other policies]</p>'
      +'<p>[Concluding statement referring to policy map]</p>'
      +'<h1 style="text-align:right"><a href="https://mas-org.github.io/greener-corridors/policy-map/">Go to Policy Map</a></h1><br>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

  ]
};