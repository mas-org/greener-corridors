let titleDiv = 
'<img src="../images/MAS-Full-BY.png" alt="MAS Logo" height=75px width=auto><br><br>'
+'<h1>Greener Corridors for a More Resilient City</h1>';

let subtitleDiv = 
'<h2>Issues & Opportunities</h2><p></p>';

let bylineDiv = 
'<p class="p-header"><a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">Greener Corridors</a> examines New York City’s largest arterial thoroughfares as opportunities to create more livable, efficient, and green public spaces. These corridors are sometimes referred to as “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” in urban planning circles because they contain features commonly associated with streets (such as places where people live and shop) as well as roads with high-speed traffic lanes designed to quickly move large volumes of through-traffic. This street-road mix is often incompatible, and stroads are frequently criticized for being inefficient, unappealing, dangerously designed, and too focused on through-movement at the expense of walkable environments that foster a sense of place. <b>This storymap series takes a deeper look at the spatial relationship between these thoroughfares and mobility, sustainability, and land use issues to better understand where and how these corridors might be improved.</b></p><br>'
+'<div class="row">' 
  +'<div class="column"><h1><a href="https://www.mas.org/news/introducing-greener-corridors/" target="_blank">1. Introduction</a></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/built-for-auto/">2. Mobility</a></h1></div>'
  +'<div class="column"><h1><mark>3. Climate</mark></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/policy-map/">4. Policy Map</a></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/lessons/">5. Case Studies</a></h1></div>'
  +'</div><br><hr>'
+'<div class="container">'
  +'<img src="../images/cover03.jpg" alt="Person standing under the shade of a small street tree">'
  +'<div class="top-left"><h1 style="color:black">3. Climate</h1><h2 style="color:black">Islands of Heat</h2></div>'
+'<figcaption>Boston Road in the Bronx. Photo: Kade Van Meeteren.</figcaption>';

let footerDiv = 
'<p class="p-footer">Published September 30, 2024/Updated October 23, 2024 by <a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">The Municipal Art Society of New York</a>. Storymap built by <a href="https://github.com/rnzee">@rnzee</a> and <a href="https://github.com/stalbonesi">@salbonesi</a> using <a href="https://github.com/mapbox/storytelling/tree/main" target="_blank">these</a> <a href="https://pointsunknown.nyc" target="_blank">resources</a>. The datasets used in this project are <a href="https://github.com/mas-org/greener-corridors/blob/main/README.md" target="_blank">listed here</a>.</p>';

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
      '<p>As the effects of climate change intensify, cities are confronting the “urban heat island effect” with greater frequency and severity, wherein the urban environment experiences hotter temperatures than outlying areas. The difference largely stems from the concentration of manmade surfaces in cities, like concrete, asphalt, and brick, that absorb and retain heat.</p>'
      +'<p>According to a 2023 <a href="https://www.climatecentral.org/climate-matters/urban-heat-islands-2023" target="_blank">report by  Climate Central</a>, New York City has the greatest urban heat island effect of any major U.S. city, with temperatures nearly 10 degrees hotter for the average resident than they would otherwise be. Residents of New York City’s environmental justice (EJ) areas, the focus of our study, are more likely to experience socioeconomic, health, and environmental disparities, including limited access to green space and climate-controlled spaces, that make them more vulnerable to extreme heat. According to the <a href="https://climate.cityofnewyork.us/ht/ejnyc-report/the-state-of-environmental-justice-in-nyc/exposure-to-climate-change/" target="_blank">Mayor’s Office of Climate & Environmental Justice (MOCEJ)</a>, for example, nine of the top 10 neighborhoods in New York with the lowest rates of home air conditioning are EJ neighborhoods. The result is that <a href="https://a816-dohbesp.nyc.gov/IndicatorPublic/data-features/heat-report/" target="_blank">more people die from extreme heat</a> (about 350 annually) in New York City than from all other natural disasters combined.</p>'
      +'<p>As we will explore in this post, New York City’s stroads (especially those in EJ areas) have the potential to be a major component of the city’s climate strategy, including heat mitigation.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-3.jpg" alt="Person walking down wide sidewalk between parking lot and empty road with no street furnishings except pole and hydrant">'
        +'<figcaption>Looking south on a warm summer day, one might mistake Utica Avenue’s near treeless landscape for a road through the desert. Photo: Kade Van Meeteren.</figcaption></figure>'
      +'<br><p style="text-align:center;font-size:smaller"><em>Scroll to continue</em> ▼</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
        pitch: 0,
        bearing: 0,
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
      '<p>The New York City Council Data Team’s <a href="https://council.nyc.gov/data/heat/" target="_blank">2023 Heat Map</a> (reproduced here) underscores the outsized influence that land use can have on surface temperatures. New York City’s vast airports and industrial areas of East Williamsburg, Hunts Point, Long Island City, Sunset Park, and other neighborhoods have relatively hotter surface temperatures than the rest of the city. These areas generate and retain significant heat because they are heavily impervious and have fewer trees and other vegetation, which are not required by manufacturing zoning. On the other hand, parks and other open spaces that have significant vegetation and tree canopy coverage are physically cooler.</p>'
      +'<br><dl><dt><strong>Legend: Relative Surface Temperature Compared with the Citywide Average</strong></dt>'
        +'<dd><svg height="14" width="50%"><defs><linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#B2A7D2" /><stop offset="50%" stop-color="#D4FED6" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad1)"/></svg><br>[-8&deg;F to +8&deg;F]</dd></dl>',
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
        { layer: '13-hot-map',
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
      '<p>Virtually all of the more than 100 stroads we examined go through areas that were found to be hotter than the citywide average surface temperature. While many of these areas are industrial, most arterial corridors support many adjacent land uses that may be just as heat-intensive, from shops and apartments to parking lots and "big box" stores.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in Environmental Justice (EJ) Study Area</dd>'
        +'<dd>Relative Average Surface Temperature [+1&deg;F to +8&deg;F]:<br><svg height="14" width="50%"><defs><linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-color="#E3FEC6" /><stop offset="50%" stop-color="#FBECAB" /><stop offset="100%" stop-color="#FCACAA" /></linearGradient></defs><rect width="100%" height="100%" clip-path="url(#clip)" fill="url(#grad2)"/></svg></dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '13-hot-map',
          opacity: .75,
        },
      ],
      onChapterExit: [],
    },

    { id: 'env-04',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/jamaica-1.jpg" alt="Roadway at intersection of 173rd Street and Jamaica Avenue, a commerical corridor with three lanes each way">'
        +'<figcaption>Jamaica Avenue goes through one of the hottest areas of the city. There are few trees, partly because of siting constraints. Photo: Rawnak Zaman.</figcaption></figure>'
      +'<p>Perhaps nowhere is this more apparent than in Jamaica, where Jamaica Avenue, Liberty Avenue, Merrick Boulevard, and several other stroads go through an area that is more than five degrees hotter on average than the rest of the city. The stroads cluster around Downtown Jamaica, a dense commercial center that is New York City’s busiest bus hub and the convergence of subway, Long Island Rail Road, and JFK Air Trains. Whereas Jamaica Avenue is primarily a commercial corridor with one and two-story shops and the occasional office tower, Liberty Avenue is home to single-story warehouses, auto repair businesses, parking lots, and vacant land. Merrick Boulevard is more of a mix of the two.</p>'
      +'<p>There is only one substantial park in the vicinity (Rufus King Park), and the community district ranks <a href="https://www.ny4p.org/client-uploads/pdf/District-Profiles-2021/NY4P-Profiles_QN12.pdf" target="_blank">49th out of 59 community districts</a> citywide in terms of available park space, with just 1.1 acres per thousand residents compared with the median citywide ratio of 1.5. Each corridor also lacks mature and consistent tree canopy, a topic we will explore later in greater detail.</p>',
      location: {
        center: [-73.80246, 40.69182],
        zoom: 13,
        zoomSmall: 12,
      },
      onChapterEnter: [
        { layer: '13-hot-map',
          opacity: .75,
        },
      ],
      onChapterExit: [
        { layer: '13-hot-map',
          opacity: 0,
        },
      ],
    },

    { id: 'env-06',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/northern-blvd-1.jpg" alt="Road with three lanes each way and car dealerships on either side."><br><br>'
        +'<img src="./images/northern-blvd-2.jpg" alt="Road with three lanes each way, with one bus lane, and buildings on either side.">'
        +'<figcaption>Located just two miles apart along Northern Boulevard, these images of the same 95-foot right-of-way demonstrate the difference that trees, road diets, building densities, and land uses play in terms of the arterial experience. Photos: Kade Van Meeteren.</figcaption></figure>'
      +'<p>As Jane Jacobs observed in <i>The Death and Life of Great American Cities</i>, the scale of buildings and the types of uses on a block have a major impact on the pedestrian experience. She noted that single use areas became “border vacuums,” deadened places that form barriers and create "blighted" zones in surrounding blocks. Automobile-centric land uses are the epitome, though their microclimates (like physical heat and pollution) can have the same deleterious effect in terms of street avoidance.</p>',
      location: {
        center: [-73.92362, 40.75391],
        zoom: 13.2,
        zoomSmall: 12,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0.35,
        },
      ],
      onChapterExit: [],
    },

    { id: "env-07",
      alignment: "centered",
      hidden: false,
      chapterDiv:
      '<p>Unfortunately, most people must encounter stroads because they are major transportation corridors and local and big box shopping destinations. A 2024 <a href="https://projects.transalt.org/new-york-city-bus-urban-heat" target="_blank">study by Transportation Alternatives</a> identified 100 of New York City’s hottest bus stops, where average temperatures are up to 14.5 degrees warmer than the coolest bus stops. A quarter of them are located along 11 stroads within the city’s EJ areas: Springfield Boulevard in Queens; Kings Highway, Norstrand Avenue, and Utica Avenue in Brooklyn; and Edgewater Road, East 138th Street, 233rd Street, Eastchester Road, Grand Concourse, Webster Avenue, and Westchester Avenue in the Bronx.</p>'
      +'<p>Heat then, has a major impact on people’s lived experiences when it comes to these spaces. In places like Jamaica, where the City is leading an effort with the community to rezone several arterial corridors, it is imperative to utilize the neighborhood’s tangle of stroads as a key solution to urban heat.</p>'
      +'<figure>'
        +'<img src="./images/jamaica-2.jpg" alt="Archer Avenue bus lanes">'
        +'<figcaption>Downtown Jamaica has more than 45 different bus routes along corridors like Archer Avenue where heat is omnipresent. Photo: Rawnak Zaman.</figcaption></figure>',
      location: {
        center: [-73.97480, 40.6511985],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-09',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>Like heat, nuisance and stormwater-related flooding are becoming more frequent and intense in New York City. According to the <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.15116" target="_blank">New York City Panel on Climate Change</a>, average precipitation is expected to increase by four to 11 percent between now and 2050.</p>'
      +'<p>Hurricane Sandy was a wakeup call to protect the city’s coasts from storm surge, but recent and unprecedented cloudburst events have revealed the flooding vulnerability of the entire city, <a href="https://www.nyc.gov/site/dep/whats-new/resilient-nyc-partners.page" target="_blank">more than 70 percent of which</a> is impervious. During Hurricane Ida in 2021, some areas of the city received 3.75 inches per hour&mdash;more than twice the maximum sewer capacity.</p>'
      +'<p>Stormwater flooding projections physically align with the city’s stroads and other streets. Every borough has a stroad where more than 20% of the right-of-way would be underwater in an extreme stormwater flooding event on the magnitude of Hurricane Ida. They include corridors like Flatlands Avenue in southeast Brooklyn, Bartow Avenue in Co-op City, and Targee Street in Staten Island. Unsurprisingly, stroads in low-lying coastal areas like Coney Island and the Rockaways are vastly more flood prone than other corridors when tidal flooding is factored in.</p>',
      location: {
        center: [-73.97480, 40.6511985],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '18-flood-prospect',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    
    { id: 'env-10',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>The stakes are particularly high for stroads because they are such important transportation corridors. Highly trafficked stroads and large surface parking areas generate significant amounts of pollutants (such as metals, hydrocarbons, bacteria, and excess sediments) that run off and pollute the region’s water bodies because they are unable to be absorbed into impermeable ground. The impact is amplified in New York City, where the right-of-way comprises roughly 28 percent of all combined sewer overflow drainage areas, more area than any other type of City-managed land.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#73DFFF" /></svg>Nuisance flooding (4" to 1 foot) in an extreme stormwater flooding scenario (<a href="https://experience.arcgis.com/experience/e83a49daef8a472da4a7e34dc25ac445/" target="_blank">NYC DEP</a>)</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#00A9E6" /></svg>Deep and contiguous flooding (&ge; 1 foot)</dd><dl>'
      +'<br><figure>'
        +'<img src="./images/wikimedia-flatbush-ave.jpg" alt="Cars navigate completely flooded road near Prospect Park.">'
        +'<figcaption>The intersection of Coney Island and Parkside Avenues was inundated with flooding caused by Tropical Storm Ophelia in 2023. Photo: Wikimedia Commons, Wil540 art.</figcaption></figure>',
      location: {
        center: [-73.97410, 40.65044],
        zoom: 14.5,
        zoomSmall: 14.5,
      },
      onChapterEnter: [
        { layer: '18-flood-prospect',
          opacity: .75,
        },
        { layer: '20-flood-rockaways',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '18-flood-prospect',
          opacity: 0,
        },
      ],
    },

    { id: 'env-11',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/beach-108.jpg" alt="Beach 108th Street in Rockaway, Queens.">'
        +'<figcaption>Beach 108th Street in Rockaway, Queens, whose transportation and stormwater infrastructure was rebuilt as part of an interagency effort. Photo: New York City Department of Design and Construction.</figcaption></figure>'
      +'<p>The City has been installing cloudburst infrastructure in areas that are within priority sewer sheds, socially vulnerable neighborhoods, and where interagency infrastructure projects and ecological connectivity priorities align. According to the Department of Environmental Protection (DEP), about 90 percent of green infrastructure has been installed in environmental justice neighborhoods.</p>'
      +'<p>There are several places where the City has taken a corridor approach to green infrastructure investment. Last year, for example, DEP, along with the Department of Transportation, Department of Design and Construction, MOCEJ, Councilmember Joann Ariola, and the New York State Office of Resilient Homes and Communities, completed a $16.6 million infrastructure project that rebuilt Beach 108th Street in Rockaway, Queens. While Beach 108th Street is not a major arterial corridor, the project nonetheless demonstrates the potential for wholesale improvement when interagency priorities and resources align. Beach 108th Street now has new trees, sidewalks, benches, bike lanes, storm sewers, catch basins, and porous pavement that can absorb nearly 1.3 million gallons of stormwater into the ground each year.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'        
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#73DFFF" /></svg>Nuisance flooding (4" to 1 foot) in an extreme stormwater flooding scenario</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#00A9E6" /></svg>Deep and contiguous flooding (&ge; 1 foot)</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#004C73" /></svg>Future high tides with 2080 Sea Level Rise</dd></dl>',
      location: {
        center: [-73.83463, 40.5835498],
        zoom: 14,
        zoomSmall: 14,
      },
      onChapterEnter: [
        { layer: '20-flood-rockaways',
          opacity: .5,
        },
      ],
      onChapterExit: [
        { layer: '20-flood-rockaways',
          opacity: 0,
        },
      ],
    },

    { id: 'env-12',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>Addressing heat and flooding along New York City’s stroads can only be accomplished by taking a literal approach to the word “greener.” That is, rapidly increasing the volume of trees and other plants that soak up stormwater and alleviate heat through transpiration and shade. In total, the New York City <a href=""https://www.nyc.gov/html/mancb3/downloads/resources/NYC Street Tree Overview.pdf" target="_blank">Department of Parks and Recreation estimates</a> that trees provide $5.60 in value for every dollar spent on tree planting and care in the form of improved public health, higher business activity, reduced crime, and other environmental, economic, and public health benefits.</p>'
      +'<p>Yet New York City has less than one tree for each of its 8.3 million residents, according to a recent <a href="https://www.nature.org/content/dam/tnc/nature/en/documents/State-of-the-Urban-Forest-NYC.pdf" target="_blank">Nature Conservancy report</a>. Only <a href="https://storymaps.arcgis.com/stories/5353de3dea91420faaa7faff0b32206b" target="_blank">22 percent</a> of New York City’s land area is covered by tree canopy and 15 percent of it is located within walking distance of stroads that cut through EJ neighborhoods.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-4.jpg" alt="Vegetated space with self storage facility in background">'
        +'<figcaption>A greenstreet installation at the intersection of Empire Boulevard and Utica Avenue. Photo: Stephen Albonesi.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '14-canopy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    { id: "env-13",
      alignment: "left",
      hidden: false,
      chapterDiv:
      '<p>There are dozens of stroads that extend for miles in each borough with little tree canopy, such as Boston Road, Queens Boulevard, and Utica Avenue. In areas like East Flatbush, which lacks tree canopy compared with other neighborhoods, the absence of vegetation along streets like Utica Avenue has a greater local impact. Taking a closer look at two examples helps illustrate these disparities.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'
      +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#008000" /></svg>Tree Canopy within 100 ft of Stroad</dd></dl>',
      location: {
        center: [-73.93707, 40.66732],
        zoom: 12.5,
        zoomSmall: 12.5,
      },
      onChapterEnter: [
        { layer: '14-canopy',
          opacity: 1,
        },
        { layer: '15-canopy-linden',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '14-canopy',
          opacity: 0,
        },
      ],
    },

    { id: "env-14",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/linden-blvd.png" alt="Three lane road sandwiched by plain medians with no furnishing">'
        +'<figcaption>Linden Boulevard. Photo: Google Street View, 2022.</figcaption></figure>'
      +'<p>The busiest portion of Linden Boulevard stretches about six miles between Ozone Park, Queens and Flatbush, Brooklyn, near the southeast corner of Prospect Park. The highly trafficked thoroughfare primarily goes through lower-income residential areas, and while the westernmost portion narrows to two-lane traffic, the bulk of the thoroughfare consists of 10 combined travel and parking lanes separated by three medians. Where it cuts through East New York, one of the city’s poorest neighborhoods, the corridor experiences significantly higher than average surface temperatures and flooding issues.</p>'
      +'<p>Yet Linden Boulevard’s “sidewalk furnishing zone,” a portion of the sidewalk where most street trees are planted, only contains sporadic trees. The same is true of the corridor’s bare medians, whose total concrete width spans nearly 30 feet in some sections.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#008000" /></svg>Tree Canopy within 100 ft of Stroad</dd></dl>',
      location: {
        center: [-73.91998, 40.65444],
        zoom: 12.9,
        zoomSmall: 12.5,
      },
      onChapterEnter: [
        { layer: '15-canopy-linden',
          opacity: 1,
        },
        { layer: '16-canopy-eastern',
          opacity: 0,
        },
      ],
      onChapterExit: [
        { layer: '15-canopy-linden',
          opacity: 0,
        },
      ],
    },

    { id: "env-15",
      alignment: "full",
      hidden: false,
      chapterDiv: 
      '<figure>'
        +'<img src="./images/eastern-pkwy-1.jpg" alt="Verdant roadway"><br><br>'
        +'<img src="./images/eastern-pkwy-2.jpg" alt="Verdant roadway">'
        +'<figcaption>Eastern Parkway between Bedford and Franklin Avenues. In 2024, the block was named second greenest in Brooklyn by the Brooklyn Botanic Garden. Photos: Stephen Albonesi.</figcaption></figure>'
      +'<p>Eastern Parkway, located just one mile north, is a completely different story despite handling a similar amount of traffic as Linden Boulevard. Designed by Frederick Law Olmstead and Calvert Vaux in the late-1800’s to connect Brooklyn neighborhoods (including Crown Heights and East New York, both EJ areas today) to Prospect Park, most of the four-mile, primarily residential corridor features lush tree-lined medians, bike paths, and benches. While the right of way is up to 40 feet wider than Linden Boulevard, the street and its adjacent land have twice as much tree canopy coverage and much lower surface temperatures. And all of this rests above two of the busiest subway lines in the city.</p>'
      +'<br><dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#008000" /></svg>Tree Canopy within 100 ft of Stroad</dd></dl>',
      location: {
        center: [-73.9562715, 40.6700859],
        zoom: 12.9,
        zoomSmall: 12.5,
      },
      onChapterEnter: [
        { layer: '16-canopy-eastern',
          opacity: 1,
        },
      ],
      onChapterExit: [
        { layer: '16-canopy-eastern',
          opacity: 0,
        },
      ],
    },

    { id: 'env-16',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The need to work around restrictive siting constraints undoubtedly explains the lack of vegetation in some areas. For example, the New York City Department of Parks and Recreation stipulates that street trees must be planted a certain distance from building entrances, curb cuts, bus stops, streetlights, traffic signs, and water mains, ruling out much of the sidewalk space on many blocks, especially in commercial areas. There are also maintenance, tree species, and soil considerations as well as disturbances and stressors (such as storms, pollution, and pests) that make it difficult for trees to survive.</p>'
      +'<figure>'
        +'<img src="./images/dot-landscape-clearance-diagram.png" alt="Diagram">'
        +'<figcaption>Landscape clearance diagram from the NYC Department of Transportation’s <a href="https://www.nycstreetdesign.info/" target="_blank">Street Design Manual</a> (2020).</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'env-17',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>The city’s most recent street tree census (in 2015) notes that there is an opportunity to plant approximately 250,000 additional street trees citywide, an almost 40 percent increase from the total that was counted. To its credit, the city has been making strides, with citywide street tree canopy <a href="https://storymaps.arcgis.com/stories/63010002df2c40deab071abe68157131" target="_blank">increasing 3.5%</a> between 2010 and 2017.</p>'
      +'<p>However, the census also suggests that siting constraints alone do not explain why wide swaths of these corridors are devoid of anything green. Policy priorities, interagency coordination, and budget issues are also at play.</p>'
      +'<figure>' 
          +'<img src="./images/boston-rd-4.jpg" alt="Underutilized sidewalk"><br><br>'
          +'<img src="./images/atlantic-ave-8.jpg" alt="Underutilized space under elevated tracks">'
          +'<figcaption>Expansive concrete sidewalks and medians beg for creative greening and programming strategies to enliven them. Vegetation could be pervasive but is limited and piecemeal due to maintenance challenges and siting constraints. Photos: Kade Van Meeteren and Stephen Albonesi.</figcaption></figure>'
      +'<p>In our next post, we will inventory pertinent plans, pilots, legislation, and visions by governmental and non-governmental actors to understand where and how they can be leveraged for greater impact. While expanding the urban forest is critical, these strategies must also be utilized for creative solutions where street tree planting is not possible.</p>'
      +'<h1 style="text-align:right"><a href="https://mas-org.github.io/greener-corridors/policy-map/">Go to Part 4</a></h1><br>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

  ]
};