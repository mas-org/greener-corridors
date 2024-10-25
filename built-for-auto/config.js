let titleDiv = 
'<img src="../images/MAS-Full-BY.png" alt="MAS Logo" height=75px width=auto><br><br>'
+'<h1>Greener Corridors for a More Resilient City</h1>';

let subtitleDiv = 
'<h2>Issues & Opportunities</h2><p></p>';

let bylineDiv = 
'<p class="p-header"><a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">Greener Corridors</a> examines New York City’s largest arterial thoroughfares as opportunities to create more livable, efficient, and green public spaces. These corridors are sometimes referred to as “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” in urban planning circles because they contain features commonly associated with streets (such as places where people live and shop) as well as roads (such as high-speed traffic lanes designed to quickly move large volumes of through-traffic. This street-road mix is often incompatible, and stroads are frequently criticized for being inefficient, unappealing, dangerously designed, and too focused on through-movement at the expense of walkable environments that foster a sense of place. This storymap series takes a deeper look at the spatial relationship between these thoroughfares and mobility, sustainability, and land use issues to better understand where and how these corridors might be improved.</p><br>'
+'<div class="row">' 
  +'<div class="column"><h1><a href="https://www.mas.org/news/introducing-greener-corridors/">1. Introduction</a></h1></div>'
  +'<div class="column"><h1><mark>2. Mobility</mark></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/climate/">3. Climate</a></h1></div>'
  +'<div class="column"><h1><a href="https://mas-org.github.io/greener-corridors/policy-map/">4. Policy Map</a></h1></div>'
  +'</div><br><hr>'
+'<div class="container">'
  +'<img src="../images/cover02.jpg" alt="Cars parked on sidewalk in front of autorepair shop" width=100%>'
  +'<div class="top-left"><h1 style="color:white">2. Mobility</h1><h2 style="color:white">Built for the Automobile</h2></div>'
+'<figcaption>Atlantic Avenue in Brooklyn. Photo: Kade Van Meeteren.</figcaption>';

let footerDiv = 
'<p class="p-footer">Published July 24, 2024 by <a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">The Municipal Art Society of New York</a>. Storymap built by <a href="https://github.com/rnzee">@rnzee</a> and <a href="https://github.com/stalbonesi">@salbonesi</a> using <a href="https://github.com/mapbox/storytelling/tree/main" target="_blank">these</a> <a href="https://pointsunknown.nyc" target="_blank">resources</a>. The datasets used in this project are <a href="https://github.com/mas-org/greener-corridors/blob/main/README.md" target="_blank">listed here</a>.</p>';

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
    { id: "auto-01",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      "<p><strong>New York City’s largest stroads</strong>, formally called “arterials,” crisscross some of the most densely populated neighborhoods in the nation. Principal among them are environmental justice (EJ) communities that have long contended with compounding  environmental, socioeconomic, and racial inequities. Nearly the same number of people live within the city's EJ areas (6.4 million) as the combined populations of Los Angeles and Chicago, the second and third most populous cities in the United States.</p><br>"
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="1" y="1" style="fill:#eab696" /></svg>Environmental Justice (EJ) Areas</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Arterials ("stroads") in EJ Study Area</dd></dl><br>'
      + "<p style='text-align:center;font-size:smaller'><em>Scroll to continue</em> ▼</p>",
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
        { layer: '01-stroads',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '02-studyArea',
          opacity: 0,
        }
      ],
      onChapterExit: [
        { layer: '01-stroads',
          opacity: 0,
        }
      ]
    },

    { id: "auto-02",
      alignment: "centered",
      hidden: false,
      chapterDiv: 
      '<p>For too long, these corridors have been viewed by planners with one primary motive: to move as much vehicle traffic as quickly as possible through these communities.</p>'
      +'<figure>'
        +'<img src="./images/atlantic-ave-1.jpg" alt="Person leaning against traffic light pole on median as cars pass in either direction" width=100%>'
        +'<figcaption>Much of Atlantic Avenue consists of six vehicle lanes and 800-foot distances between crosswalks, which leads pedestrians to walk along dangerous medians not intended for such travel. Photo: Kade Van Meeteren.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: .45,
        }
      ],
      onChapterExit: []
    },

    { id: "auto-03",
      alignment: "centered",
      hidden: false,
      chapterDiv: 
      '<p>That includes more than 120,000 trucks that enter and exit the city daily, primarily along the city’s arterials because most are designated as truck routes and connect to distribution centers and industrial areas. With the demand for goods only growing, freight in its many forms—such as package deliveries, construction services, and sanitation—will continue to coexist with other users of the street. In fact, <a href="https://nycdotprojects.info/project/1848/overview" target="_blank">53% of all parcels</a> along truck routes are strictly residential in use.</p>'
      +'<figure>'
        +'<img src="./images/atlantic-ave-6.jpg" alt="Two trucks waiting at a stoplight" width=100%>'
        +'<figcaption>“[D]own on the ten-lane surface road beneath the [Gowanus] parkway, rumbled (from before dawn until after dark after the opening of the Brooklyn-Battery Tunnel flooded the area with freight traffic) regiments, brigades, divisions of huge tractor-trailer trucks, engines gunning and backfiring, horns blasting, brakes screeching...” &mdash;From Robert Caro’s <em>The Power Broker</em> on the impacts of Moses-era highway development on Brooklyn’s Third Avenue, which evokes similar impressions today. Photo: Kade Van Meeteran.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.2,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '04-acs-car',
          opacity: 0,
        }
      ],
      onChapterExit: [
        { layer: '03-eja',
          opacity: 0,
        }
      ]
    },

    { id: "auto-04",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      '<p>While these corridors play an important role in moving local and regional through-traffic, the way nearby residents navigate these roads adds more nuance.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: 0,
        },
        { layer: '04-acs-car',
          opacity: 1,
        }
      ],
      onChapterExit: [],
    },

    { id: 'auto-05',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>Approximately 42% of households within walking distance of the largest roadways in our study area own a vehicle, slightly less than the citywide rate of 45%.</p><br>'
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#b9c7c6" /></svg>Less than 25% of households in census tract own vehicle(s)</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#98a4b6" /></svg>25% to 40%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#7882a7" /></svg>41% to 58%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#556197" /></svg>59% to 75%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#2d4387" /></svg>More than 75%</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in EJ Study Area</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '04-acs-car',
          opacity: 1,
        },
        { layer: '05-acs-car-high',
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },

    { id: 'auto-06',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>Unsurprisingly, residents along corridors in outlying areas (such as North Conduit Avenue, Springfield Boulevard, and Utopia Parkway in eastern Queens and Baychester Avenue in the northeast Bronx) have higher vehicle ownership rates.</p><br>'
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#7882a7" /></svg>41% to 58% of households in census tract own vehicle(s)</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#556197" /></svg>59% to 75%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#2d4387" /></svg>More than 75%</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in areas with higher vehicle ownership</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '04-acs-car',
          opacity: 0,
        },
        { layer: '05-stroads-car-high',
          opacity: .95,
        },
        { layer: '06-acs-car-high',
          opacity: 1,
        },
        { layer: '07-stroads-car-low',
          opacity: 0,
        },
        { layer: '08-acs-car-low',
          opacity: 0,
        }
      ],
      onChapterExit: [
        { layer: '05-stroads-car-high',
          opacity: 0,
        },
        { layer: '06-acs-car-high',
          opacity: 0,
        }
      ],
    },

    { id: 'auto-07',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>But there are entire multi-lane corridors in dense areas of the Bronx, Brooklyn, and Upper Manhattan (such as 161st Street, Dekalb Avenue, and Frederick Douglas Boulevard, respectively) along which car ownership is relatively low. These largely vehicle-free households must bear the noise, safety, and pollution impacts associated with heavy vehicle and truck through-traffic.</p><br>'
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#b9c7c6" /></svg>Less than 25% of households in census tract own vehicle(s)</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#98a4b6" /></svg>25% to 40%</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in areas with low vehicle ownership</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '07-stroads-car-low',
          opacity: 1,
        },
        { layer: '08-acs-car-low',
          opacity: 1,
        },
        { layer: '09-acs-transit',
          opacity: 0,
        }
      ],
      onChapterExit: [
        { layer: '07-stroads-car-low',
          opacity: 0,
        },
        { layer: '08-acs-car-low',
          opacity: 0,
        }
      ],
    },

    { id: 'auto-08',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>While public transportation usage is expectedly high among commuters in denser areas, it is also utilized in more far-flung neighborhoods of New York City with greater vehicle ownership. Among commuting residents who live within walking distance of stroads in EJ areas, about 62% walk, bike, or take public transportation to work, about three percent higher than the citywide average and far higher than any other U.S. city (in Boston, the U.S. city with the next highest average, about 40% of commuting residents walk, bike, or take public transportation to work).</p><br>'
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#b5caed" /></svg>Less than 20% of population in census tract walks, bikes, or takes public transit to work</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#a4a7d8" /></svg>20% to 47%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#9284c2" /></svg>48% to 58%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#7f62ad" /></svg>59% to 67%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#6b4099" /></svg>68% to 80%</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#561b84" /></svg>More than 80%</dd>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in EJ Study Area</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: 0,
        },
        { layer: '09-acs-transit',
          opacity: 1,
        }
      ],
      onChapterExit: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '09-acs-transit',
          opacity: 0,
        }
      ],
    },

    { id: 'auto-09',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p>Many stroads, however, remain unsettling spaces where drivers own the right-of-way, speeding and weaving their way through traffic and creating dangerous conditions for pedestrians, cyclists, and other drivers. Over the years, several of these thoroughfares, including Queens Boulevard and Atlantic Avenue, have been dubbed a <a href="https://gothamist.com/news/after-10-years-of-vision-zero-nyc-has-a-new-boulevard-of-death" target="_blank">“boulevard of death”</a> due to their high number of traffic fatalities.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-1.jpg" alt="Flickering NYPD traffic sign displays text:  Vision Zero" width=100%>'
        +'<figcaption>In 2014, New York City introduced Vision Zero with the goal of eliminating traffic-related deaths. A decade later, traffic fatalities have declined significantly in wealthier, whiter areas but not in many lower-income communities of color <em>(source: <a href="https://transalt.org/press-releases/transportation-alternatives-and-families-for-safe-streets-analyze-data-from-first-10-years-of-vision-zero" target="_blank">Transportation Alternatives</a>)</em>. Photo: Stephen Albonesi.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '10-dot-priority',
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },
    
    { id: 'auto-10',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>The issue is especially pronounced in EJ areas. According to <a href="https://climate.cityofnewyork.us/ejnyc-report/the-state-of-environmental-justice-in-nyc/access-to-resources/" target="_blank">the Mayor’s Office of Climate & Environmental Justice</a>, 59% of crash-related fatalities and severe injuries citywide occurred in EJ areas in 2022 despite EJ areas making up only 44% of New York City census tracts and 49% of the population. Moreover, an analysis of crashes in the same year showed that the rate of people killed or severely injured per mile of roadway in EJ areas was 1.2 times the citywide average and 1.4 times the rate in non-EJ areas. The disparity can likely be attributed in part to the fact that a disproportionate share of arterials – the most unsafe type of street due to their widths and vehicle speeds – go through EJ areas.</p>'
      +'<p>The Department of Transportation (DOT) has designated a number of stroads as <a href="https://www.nyc.gov/html/dot/html/pr2023/vision-zero-borough-pedestrian-safety-action-plan.shtml" target="_blank">Vision Zero Priority Corridors</a> because they have exceptionally high rates of pedestrians killed or severely injured on a per-mile basis.</p><br>'
      +'<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><line x1="2" y1="0" x2="10" y2="10" style="stroke:#f35d17;stroke-width:2" /></svg>Stroads in EJ Study Area that are DOT Vision Zero Priority Corridors</dd></dl><br>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '10-dot-priority',
          opacity: 1,
        }
      ],
      onChapterExit: [],
    },
    
    { id: 'auto-11',
      alignment: 'centered',
      hidden: false,
      chapterDiv:
      '<p class="p-wide">Stroad design and function that gives automobile drivers significant space and latitude also creates glaring inefficiencies that affect drivers and non-drivers alike.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '10-dot-priority',
          opacity: 1,
        }
      ],
      onChapterExit: [
        { layer: '03-eja',
          opacity: 0,
        },
        { layer: '10-dot-priority',
          opacity: 0,
        }
      ],
    },
    
    { id: 'auto-12',
      alignment: 'full',
      hidden: false,
      chapterDiv:
      '<p>Stroads lined with poorly managed curb space leads taxis and delivery drivers to double park in lanes intended for vehicle movement or pedestrian use in order to complete pickups and deliveries.</p>'
      +'<figure>'
        +'<img src="./images/google-street-view/streetview-northern-blvd.png" alt="Truck parked on chicane" width=100%>'
        +'<figcaption>Northern Boulevard, Queens. Image: Google Street View, 2022.</figcaption></figure>',
      location: {
        center: [-73.8587686971721, 40.75791406470332],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .35,
        }
      ],
      onChapterExit: [],
    },

    { id: 'auto-13',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>The rightmost travel lane along numerous corridors is rendered virtually useless as a result, both demonstrating the inefficiencies of the system and raising questions about the appropriate number and types of vehicle lanes.</p>'
      +'<figure>'
        +'<img src="./images/google-street-view/streetview-boston-rd.png" alt="Cars on travel lane" width=100%>'
        +'<figcaption>Boston Road, The Bronx. Image: Google Street View, 2022.</figcaption></figure>',
      location: {
        center: [-73.85272, 40.87401],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .35,
        }
      ],
      onChapterExit: [],
    },
    
    { id: 'auto-14',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>Where they have been installed, clearly delineated bus and bike lanes have improved multi-modal traffic flow, but they too are regularly blocked and unusable when appropriate lane use is not enforced.</p>'
      +'<p>One widely accepted strategy for managing the safety and flow of right-of-way users is a <a href="https://smartgrowthamerica.org/what-are-complete-streets/">complete streets policy</a>. However, a 2019 report by researchers at the City College of New York and the Department of Transportation (DOT) observed that inclusion of freight challenges in complete streets models has been limited, even in New York City. By incorporating freight needs into such models, conflicts like large vehicles encroaching on sidewalks and blind spots that endanger cyclists may be tackled more effectively.</p>'
      +'<figure>'
        +'<img src="./images/google-street-view/streetview-utica-ave.png" alt="Truck on bus lane ahead of a bus circumventing on the travel lane" width=100%>'
        +'<figcaption>Utica Avenue, Brooklyn. Image: Google Street View, 2022.</figcaption></figure>',
      location: {
        center: [-73.9286647, 40.6356477],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .35,
        }
      ],
      onChapterExit: [
        { layer: '02-studyArea',
          opacity: 0,
        }
      ],
    },

    { id: 'auto-15',
      alignment: 'centered',
      hidden: false,
      chapterDiv: 
      '<p class="p-wide">Even on the sidewalk, pedestrians must routinely meander around large vehicles, automobile-related equipment, and daunting access roads to suburban-style shopping plazas, drive-throughs, and other neighboring properties that prevent safe passage. It leads to neighborhood spaces that people seek to avoid altogether and is at odds with how the City views many of these corridors in terms of function and experience.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-16',
      alignment: 'left',
      hidden: false,
      chapterDiv: 
      '<p>For example, the Department of Transportation’s (DOT) <a href="https://www.nyc.gov/html/dot/html/pedestrians/pedestrian-mobility.shtml" target="_blank">Pedestrian Mobility Plan</a> categorizes every street segment citywide into one of five types (listed below) that reflect different levels of pedestrian need on the city’s sidewalks. According to the plan, 42% of our study’s stroads are at least “Neighborhood Corridors.” That is, they have consistent pedestrian destinations that should ideally accommodate small groups of people passing each other on foot. The reality can feel very different.</p><br>'
      + '<dl><dt><strong>Legend</strong></dt>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#432371" /></svg><strong>Global Corridors</strong> have large crowds of people and high concentration of global destinations</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#754276" /></svg><strong>Regional Corridors</strong> have crowds of people and attractions that draw people from the region</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#a26479" /></svg><strong>Neighborhood Corridors</strong> have small groups of people and destinations like business districts, schools, or parks</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#ce887b" /></svg><strong>Community Connectors</strong> are residential streets with small groups and local destinations like small parks or schools</dd>'
        +'<dd><svg width="17" height="12"><rect width="10" height="10" x="1" y="1" style="fill:#FAAE7B" /></svg><strong>Baseline Streets</strong> are residential streets with low pedestrian volumes</dd></dl>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: 1,
        },
      ],
      onChapterExit: [
        { layer: '11-dot-demand',
          opacity: 0,
        },
      ],
    },

    { id: 'auto-17',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>Like this stretch of Atlantic Avenue in Crown Heights, which is a Neighborhood Corridor because it is intended to serve consistent pedestrian destinations.</p>'
      +'<figure>'
        +'<img src="./images/atlantic-ave-4.JPG" alt="Person walking past cars parked on sidewalk" width=100%>'
        +'<figcaption>Photo: Kade Van Meeteren.</figcaption></figure>',
      location: {
        center: [-73.95471785602062, 40.678797076834485],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-18',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>And this section of Utica Avenue in East Flatbush also has the demand factors that characterize a Neighborhood Corridor.</p>'
      +'<figure>'
        +'<img src="./images/utica-ave-2.jpg" alt="Multiple cars parked on sidewalk" width=100%>'
        +'<figcaption>Photo: Stephen Albonesi.</figcaption></figure>',
      location: {
        center: [-73.9303791954553, 40.649747020907185],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    { id: 'auto-19',
      alignment: 'full',
      hidden: false,
      chapterDiv: 
      '<p>Or in the Allerton neighborhood of the Bronx, where portions of Boston Road designated as Community Connectors can feel like taking your life into your hands.</p>'
      +'<figure>'
        +'<img src="./images/boston-rd-3.jpg" alt="Low and mid-rise buildings near moderately busy road" width=100%>'
        +'<figcaption>Photo: Kade Van Meeteren.</figcaption></figure>',
      location: {
        center: [-73.8630203165104, 40.86528602675465],
        zoom: 18,
        zoomSmall: 17,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '03-eja',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    
    { id: 'auto-20',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p class="p-wide">Of course, even with available public transit, cities as dense as New York still need streets that can accommodate heavy amounts of vehicle traffic and their array of destinations. It is also important to acknowledge that the City is taking steps to address a number of the issues that plague these thoroughfares.</p>'
      +'<p class="p-wide">In addition to DOT’s Priority Corridors, many stroads have been designated as <a href="https://www.nyc.gov/html/visionzero/pages/initiatives/street-design.shtml" target="_blank">Vision Zero Arterial Slow Zones</a>, and <a href="https://www.nyc.gov/content/visionzero/pages/engineering" target="_blank">Great Streets</a> program investments along stroads like Queens Boulevard have made them significantly safer and more pleasant. Other City-led initiatives include new busway and curb management pilot programs, a provision in the City of Yes for Economic Opportunity text amendment to reduce pedestrian-automobile conflicts, and ongoing efforts to overhaul its truck route network and last-mile delivery system.</p>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: .45,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-21',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p>Yet even with ongoing and proposed improvements, these corridors are not being optimized to their full potential, with mobility being just one focus area. There is an opportunity to make stroads significantly greener in terms of trees and vegetation and to encourage more sustainable development. The need to leverage them is all the more urgent given the climate crisis and transportation’s role as the largest contributor to greenhouse gas emissions in the country. For those who have the choice of how to travel, dangerous, unpleasant, and car-oriented street conditions reinforce a vicious cycle where driving becomes the preferred option. In Part 2 of this storymap, we explore issues of heat and flooding and opportunities to make these corridors more climate resilient.</p>'
      +'<h1 style="text-align:right"><a href="https://mas-org.github.io/greener-corridors/climate/">Go to Part 2</a></h1><br>'
      +'<figure>'
        +'<img src="./images/boston-rd-1.jpg" alt="Scooters left astride a sidewalk in front of an automotive business" width=100%>'
        +'<figcaption>The one-year East Bronx Shared E-Scooter Pilot expanded mobility options to East Bronx residents beginning in the summer 2021. Since then, more than 3.4 million trips have been taken. Boston Road was one of several thoroughfares that reported high scooter traffic volumes, suggesting the need for safer, designated lanes for micromobility users.</figcaption></figure>',
      location: {
        center: [-74, 40.73800],
        zoom: 10.3,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 1,
        },
        { layer: '03-eja',
          opacity: .45,
        }
      ],
      onChapterExit: [],
    },
    
  ]
};