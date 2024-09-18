let titleDiv = 
'<img src="../images/MAS-Full-BY.png" alt="MAS Logo" height=75px width=auto><br><br>'
+'<h1>Greener Corridors for a More Resilient City</h1>';

let subtitleDiv = 
'<h2>Issues & Opportunities</h2><p></p>';

let bylineDiv = 
'<p class="p-header"><a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">Greener Corridors</a> examines New York City’s largest arterial thoroughfares as an opportunity to create more livable, efficient, and green public spaces. As a mix of urban street (where people live and shop) and road (designed to quickly move large volumes of through-traffic), such corridors are sometimes referred to as “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” in urban planning circles. This street-road mix is often incompatible, and stroads are frequently criticized for being inefficient, unappealing, dangerous, and too focused on through-movement at the expense of walkable environments that foster a sense of place. This storymap series takes a deeper look at the spatial relationship between these thoroughfares and mobility, sustainability, and land use issues to better understand where and how these corridors might be improved.</p><br>'
+'<div class="row">' 
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/built-for-auto/">1. Mobility</a></h1></div>'
  +'<div class="column"><h1><mark>2. Climate</mark></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/policy-map/">3. Policy Map</a></h1></div>'
  +'</div><br><hr>'
+'<div class="container">'
  +'<img src="../images/cover03.jpg" alt="Person standing under the shade of a small street tree">'
  +'<div class="top-left"><h1 style="color:black">2. Climate</h1><h2 style="color:black">Islands of Heat</h2></div>'
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
      '<p>With climate change, cities are encountering a phenomenon called the “urban heat island” effect with greater intensity, wherein the urban environment experiences hotter temperatures than outlying areas. The difference largely stems from the concentration of manmade surfaces in cities, like concrete, asphalt, and brick, that absorb and retain heat.</p>'
      +'<p>According to a 2023 <a href="https://www.climatecentral.org/climate-matters/urban-heat-islands-2023" target="_blank">report by  Climate Central</a>, New York City has the greatest urban heat island effect of any major U.S. city, with temperatures nearly 10 degrees hotter for the average resident than they would otherwise be. Residents of New York City’s environmental justice (EJ) areas, the focus of our study, are more likely to experience socioeconomic, health, and environmental disparities, including limited access to green space and climate-controlled spaces, that make them more vulnerable to extreme heat. According to the <a href="https://climate.cityofnewyork.us/topic/environmental-justice/" target="_blank">Mayor’s Office of Climate & Environmental Justice</a>, for example, nine of the top ten neighborhoods in New York with the lowest rates of air conditioning at home are EJ neighborhoods. The result is that <a href="https://a816-dohbesp.nyc.gov/IndicatorPublic/data-stories/urban-heat-island/" target="_blank">more people die from extreme heat</a> in New York City than from all other natural disasters combined.</p>'
      +'<p>As we will explore in this post, New York City’s stroads (especially those in EJ areas) have the potential to be a major component of the city’s climate strategy, including heat mitigation.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-3.jpg" alt="Person walking down wide sidewalk between parking lot and empty road with no street furnishings except pole and hydrant">'
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
      '<p>The New York City Council Data Team’s <a href="<a href="https://council.nyc.gov/data/heat/" target="_blank">2023 Heat Map</a> (reproduced here) underscores the outsized influence that land use can have on surface temperatures. New York City’s vast airports and industrial areas of East Williamsburg, Hunts Point, Long Island City, Sunset Park, and other neighborhoods have relatively hotter surface temperatures than the rest of the city. These areas generate and retain significant heat because they are heavily impervious and have fewer trees and other vegetation, which are not required by manufacturing zoning. On the other hand, parks and other open spaces that have significant vegetation and tree canopy coverage are physically cooler.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'
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
        { layer: '13-heat-map',
          opacity: .75,
        },
        { layer: '14-hot',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '13-heat-map',
          opacity: 0,
        },
      ]
    },

    { id: "env-03",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>Virtually all of the more than 100 stroads we examined go through areas that were found to be hotter than the citywide average surface temperature. While many of these areas are industrial, most arterial corridors support many adjacent land uses that may be just as heat-intensive, from shops and apartments to parking lots and "big box" stores.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd>Relative Average Temperature [+1&deg;F to +8&deg;F]:<br><svg height="14" width="50%"><defs><linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#E3FEC6" /><stop offset="50%" stop-color="#FBECAB" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad2)"/></svg></dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '14-hot',
          opacity: .75,
        },
      ],
      onChapterExit: [],
    },

    { id: 'env-04',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>[IMAGE]</p>'
      +'<p>Perhaps nowhere is this more apparent than in Jamaica, where Jamaica Avenue, Liberty Avenue, Merrick Boulevard, and several other stroads go through an area that is more than five degrees hotter on average than the rest of the city. The stroads cluster around Downtown Jamaica, a dense commercial center that is New York City’s busiest bus hub and the convergence of subway, Long Island Rail Road, and JFK Air Trains. Whereas Jamaica Avenue is primarily a commercial corridor with one and two-story shops and the occasional office tower, Liberty Boulevard is home to single-story warehouses, auto repair businesses, parking lots, and vacant land. Merrick Boulevard is more of a mix of the two.</p>',
      location: {
        center: [-73.80246, 40.69182],
        zoom: 13,
        zoomSmall: 12,
      },
      onChapterEnter: [
        { layer: '14-hot',
          opacity: .75,
        },
      ],
      onChapterExit: [
        { layer: '14-hot',
          opacity: 0,
        },
      ],
    },

    { id: 'env-05',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/jamaica-1.jpg" alt="Roadway at intersection of 173rd Street and Jamaica Avenue, a commerical corridor with three lanes each way">'
        +'<figcaption>Jamaica Avenue goes through one of the hottest areas of the city. There are few trees, partly because of siting constraints. Photo: Rawnak Zaman.</figcaption></figure>'
      +'<p>There is only one substantial park in the vicinity (Rufus King Park), and the area ranks <a href="https://www.ny4p.org/client-uploads/pdf/District-Profiles-2021/NY4P-Profiles_QN12.pdf" target="_blank">49th out of 59 community districts</a> in terms of available park space. Each corridor also lacks mature and consistent tree canopy, a topic we will explore later in greater detail.</p>',
      location: {
        center: [-73.80366, 40.70373],
        zoom: 16,
        zoomSmall: 15,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },

    { id: "env-06",
      alignment: "centered",
      hidden: false,
      chapterDiv:
      '<p>As Jane Jacobs observed in The Death and Life of Great American Cities, the scale of buildings and the types of uses on a block have a major impact on the pedestrian experience. She noted that single use areas became “border vacuums,” deadened places that form barriers and create "blighted" zones in surrounding blocks. Automobile-centric land uses are the epitome, though their microclimates (like physical heat and pollution) can have the same deleterious effect in terms of individual street avoidance.</p>'
      +'<p>Unfortunately, most people must encounter stroads because they are major transportation corridors and local and big box shopping destinations. A 2024 <a href="https://projects.transalt.org/new-york-city-bus-urban-heat" target="_blank">study by Transportation Alternatives</a> identified 100 of New York City’s hottest bus stops, where average temperatures are up to 14.5 degrees warmer than the coolest bus stops. A quarter of them are located along 11 stroads within the city’s EJ areas: Springfield Boulevard in Queens; Kings Highway, Norstrand Avenue, and Utica Avenue in Brooklyn; and Edgewater Road, East 138th Street, 233rd Street, Eastchester Road, Grand Concourse, Webster Avenue, and Westchester Avenue in the Bronx.</p>'
      +'<p>Heat then, has a major impact on people’s lived experiences when it comes to these spaces. In places like Jamaica, where the City is leading an effort with the community to rezone several arterial corridors, there is an imperative to utilize the neighborhood’s tangle of stroads as a key solution to urban heat.</p>'
      +'<figure>'
        +'<img src="./images/jamaica-2.jpg" alt="Archer Avenue bus lanes">'
        +'<figcaption>Downtown Jamaica has more than 45 different bus routes along corridors like Archer Avenue. Photo: Rawnak Zaman.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '15-high-tide',
          opacity: 0,
        },
        { layer: '16-deep',
          opacity: 0,
        },
        { layer: '17-nuisance1',
          opacity: 0,
        },
        { layer: '18-nuisance2',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '02-studyArea',
          opacity: 0,
        },
      ],
    },

    { id: 'env-07',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>Like heat, nuisance and stormwater-related flooding are becoming more frequent and intense in New York City. According to the <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.15116" target="_blank">New York City Panel on Climate Change</a>, average precipitation is expected to increase by four to 11 percent between now and 2050.</p>'
      +'<p>Hurricane Sandy was a wakeup call to protect the city’s coasts from storm surge, but recent and unprecedented cloudburst events have revealed the flooding vulnerability of the entire city, <a href="https://www.nyc.gov/site/dep/whats-new/resilient-nyc-partners.page" target="_blank">more than 70 percent of which</a> is impervious. During Hurricane Ida in 2021, some areas of the city received 3.75 inches per hour&mdash;more than twice the maximum sewer capacity.</p>'
      +'<br><dl><dt><strong>Legend: Extreme Stormwater Flooding Scenario with 2080s Sea Level Rise (<a href="https://experience.arcgis.com/experience/e83a49daef8a472da4a7e34dc25ac445/" target="_blank">NYC DEP</a>)</strong></dt>'        
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#73DFFF" /></svg>Nuisance Flooding</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#00A9E6" /></svg>Deep & Contiguous Flooding</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#004C73" /></svg>Future High Tides</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '15-high-tide',
          opacity: 1,
        },
        { layer: '16-deep',
          opacity: 1,
        },
        { layer: '17-nuisance1',
          opacity: 1,
        },
        { layer: '18-nuisance2',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },

    { id: 'env-08',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>Projections of where stormwater flooding will occur aligns with the city’s stroads and other streets. Every borough has a stroad where more than 20% of the right-of-way would be underwater in an extreme stormwater flooding event on the magnitude of Hurricane Ida. They include corridors like Flatlands Avenue in southeast Brooklyn, Bartow Avenue in Co-op City, and Targee Street in Staten Island. Unsurprisingly, stroads in low-lying coastal areas like Coney Island and the Rockaways are vastly more flood prone than other corridors. Roughly 80% of Neptune and Surf Avenues would be underwater in an extreme stormwater flood, for example.</p>'
      +'<br><dl><dt><strong>Legend: Extreme Stormwater Flooding Scenario with 2080s Sea Level Rise (<a href="https://experience.arcgis.com/experience/e83a49daef8a472da4a7e34dc25ac445/" target="_blank">NYC DEP</a>)</strong></dt>'        
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#73DFFF" /></svg>Nuisance Flooding</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#00A9E6" /></svg>Deep & Contiguous Flooding</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#004C73" /></svg>Future High Tides</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads where at least 20% of right of way is affected in extreme scenarios</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '15-high-tide',
          opacity: 1,
        },
        { layer: '16-deep',
          opacity: 1,
        },
        { layer: '17-nuisance1',
          opacity: 1,
        },
        { layer: '18-nuisance2',
          opacity: 1,
        },
        { layer: '21-stroads-flood',
          opacity: 1,
        },
      ],
      onChapterExit: [
        { layer: '21-stroads-flood',
          opacity: 0,
        },
      ],
    },
    
    { id: 'env-09',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The City has been installing cloudburst infrastructure in areas that are within priority sewer sheds, socially vulnerable neighborhoods, and where interagency infrastructure projects and ecological connectivity priorities align. Green infrastructure tends to be clustered in certain geographic areas rather than equally dispersed throughout the city or along certain corridors. According to the Department of Environmental Protection, about 90 percent of green infrastructure has been installed in environmental justice neighborhoods.</p>'
      +'<p>[IMAGE]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '15-high-tide',
          opacity: 0,
        },
        { layer: '16-deep',
          opacity: 0,
        },
        { layer: '17-nuisance1',
          opacity: 0,
        },
        { layer: '18-nuisance2',
          opacity: 0,
        },
      ],
    },

    { id: 'env-10',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>Highly trafficked streets and large surface parking areas also generate significant amounts of pollutants (such as metals, hydrocarbons, bacteria, and excess sediments) that run off and pollute the region’s water bodies because they are unable to be absorbed into the ground. The impact is amplified in New York City, where the right-of-way comprises roughly 28 percent of all combined sewer overflow drainage areas, more area than any other type of City-managed land.</p>',
      location: {
        center: [-73.74489, 40.69316],
        zoom: 15,
        zoomSmall: 13,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '16-deep',
          opacity: .65,
        },
        { layer: '17-nuisance1',
          opacity: .65,
        },
      ],
      onChapterExit: [
        { layer: '16-deep',
          opacity: 0,
        },
        { layer: '17-nuisance1',
          opacity: 0,
        },
      ],
    },

    { id: 'env-11',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>Addressing heat and flooding along New York City’s stroads can only be accomplished by taking a literal approach to the word “greener.” That is, rapidly increasing the volume of trees and other plants that soak up stormwater, alleviate heat through transpiration and shade, and provide a host of other environmental, economic, and public health benefits. In total, the New York City <a href=""https://www.nyc.gov/html/mancb3/downloads/resources/NYC Street Tree Overview.pdf" target="_blank">Department of Parks and Recreation estimates</a> that trees provide $5.60 in benefits for every dollar spent on tree planting and care.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: "env-12",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>Yet New York City has less than one tree for each of its 8.3 million residents, according to a recent <a href="https://www.nature.org/content/dam/tnc/nature/en/documents/State-of-the-Urban-Forest-NYC.pdf" target="_blank">Nature Conservancy report</a>. Only <a href="https://storymaps.arcgis.com/stories/5353de3dea91420faaa7faff0b32206b" target="_blank">22 percent</a> of New York City’s land area is covered by tree canopy and 15 percent of it is located within walking distance of stroads that cut through EJ neighborhoods.</p>'
      +'<br><br><dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#008000" /></svg>Tree Canopy within 100 ft of Study Area</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '19-canopy1',
          opacity: 1,
        },
        { layer: '20-canopy2',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },

    { id: "env-13",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>[Zoom in]</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    { id: "env-14",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>The “sidewalk furnishing zone,” a portion of the sidewalk where most street trees are planted, only contains sporadic trees, even in residential and commercial areas where they are mandated by zoning. <mark>The same is true of the corridor’s medians, whose total concrete width spans more than [width] feet in some sections.</mark></p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: "env-15",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<p>[Zoom in]</p>'
      +'<p></p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-16',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The need to work around restrictive siting constraints undoubtedly explains the lack of vegetation in some areas. For example, the New York City Department of Parks and Recreation stipulates that street trees must be planted a certain distance from building entrances, curb cuts, bus stops, streetlights, traffic signs, and water mains, ruling out much of the sidewalk space on many blocks. There are also maintenance, tree species, and soil considerations as well as disturbances and stressors (such as storms, pollution, and pests) that make it difficult for trees to survive.</p>'
      +'<figure>'
        +'<img src="./images/dot-landscape-clearance-diagram.png" alt="Road torn up for construction along what will be a median">'
        +'<figcaption>From NYC Department of Transportation’s <a href="https://www.nycstreetdesign.info/" target="_blank">Street Design Manual</a> (2020).</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-17',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The city’s most recent street tree census (2015) notes that there is an opportunity to plant approximately 250,000 additional street trees citywide, an almost 40 percent increase from the total that was counted. To its credit, the city has been making strides, with citywide street tree canopy increasing 3.5% between 2010 and 2017.</p>'
      +'<p>However, the census also suggests that siting constraints alone do not explain why wide swaths of these corridors are devoid of anything green. Policy priorities, interagency coordination, and budget issues are also at play.</p>'
      +'<figure>'
        +'<div class="row">' 
          +'<div class="column-grid"><img src="./images/boston-rd-4.jpg" alt="Underutilized sidewalk"></div>'
          +'<div class="column-grid"><img src="./images/atlantic-ave-8.jpg" alt="Underutilized space under elevated tracks"></div></div>'
          +'<figcaption>Underutilized concrete sidewalks and medians beg for creative greening and programming strategies to enliven them. Vegetation could be pervasive but is limited and piecemeal due to maintenance challenges and siting constraints. Photos: Kade Van Meeteren and Stephen Albonesi.</figcaption></figure>',
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
      '<p>In our next post, we dive more deeply into pertinent plans, pilots, legislation, and visions by governmental and non-governmental actors to understand where and how they can be leveraged for greater impact. Included are City of Yes, Cool Corridors, and other plans and pilots that should be utilized for creative greening solutions where street tree planting is not possible.</p>'
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