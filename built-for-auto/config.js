let titleDiv = '<img src="../images/MAS-Full-BY.png" alt="MAS Logo" height=45px width=auto><br><br>'
+'<h1>Greener Corridors for a More Resilient City</h1>';

let subtitleDiv = '<h2>Issues & Opportunities</h2><br>';

let bylineDiv = '<p><em><a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">Greener Corridors</a> examines New York City’s largest arterial thoroughfares as an opportunity to create more livable, efficient, and green public spaces. These “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” are frequently criticized for road designs that prioritize moving large volumes of through-traffic at the expense of pedestrian and cyclist safety, public health, and walkable street environments that foster a sense of place and belonging. This storymap series takes a deeper look at the spatial relationship between these thoroughfares and mobility, sustainability, and land use issues to better understand where and how these corridors might be improved.</em></p><br><h1><mark><a href="https://mas-org.github.io/greener-corridors/built-for-auto/" target="_blank">PART 1</a></mark>&emsp;</h1><br><br><hr>'
+'<div class="container"><img src="../images/cover02.jpg" alt="Cars parked on sidewalk in front of autorepair shop" width=100%><div class="top-left"><h1 style="color:white">Part 1</h1><h2 style="color:white;font-size:1.7em">Built for the Automobile</h2></div>'
+'<div class="imageCredit">Atlantic Avenue in Brooklyn. Photo: Kade Van Meeteren.</div>';

let footerDiv = '<p>Published July 22, 2024 by <a href="https://www.mas.org/initiatives/greener-corridors/" target="_blank">The Municipal Art Society of New York</a>. Storymap built by <a href="https://github.com/rnzee">@rnzee</a> and <a href="https://github.com/stalbonesi">@salbonesi</a> using <a href="https://github.com/mapbox/storytelling/tree/main" target="_blank">these</a> <a href="https://pointsunknown.nyc" target="_blank">resources</a>. The datasets used in this project are <a href="https://github.com/mas-org/greener-corridors/blob/main/README.md" target="_blank">listed here</a>.</p>';

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
      chapterDiv: "<p><strong>New York City’s largest stroads</strong>, formally called “arterials,” crisscross some of the most densely populated neighborhoods in the nation. Principal among them are environmental justice (EJ) communities that have long contended with compounding  environmental, socioeconomic, and racial inequities. Nearly the same number of people live within the city's EJ areas (6.4 million) as the combined populations of Los Angeles and Chicago, the second and third most populous cities in the United States.</p><br>"
      + '<p style="font-size:small"><span class="ej">&#9632;</span>&ensp;Environmental Justice (EJ) Areas<br><span class="stroad">&mdash;</span>&thinsp;Arterials ("stroads") in EJ Study Area</p><br>'
      + "<p style='text-align:center;font-size:smaller'><em>Scroll to continue</em> ▼</p>",
      location: {
        center: [-74, 40.725],
        zoom: 10,
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
          opacity: .95,
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
      chapterDiv: '<p style="margin-right:10%">For too long, these corridors have been viewed by planners with one primary motive: to move as much vehicle traffic as quickly as possible through these communities.</p><br>'
      +'<img src="./images/atlantic-ave-1.jpg" alt="Person leaning against traffic light pole on median as cars pass in either direction" width=100%>'
      +'<p style="font-size:smaller;margin-right: 10%">Much of Atlantic Avenue consists of six vehicle lanes and 800-foot distances between crosswalks, which leads pedestrians to walk along dangerous medians not intended for such travel. Photo: Kade Van Meeteren.</p>',
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .95,
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
      chapterDiv: '<p style="margin-right:10%">That includes more than 120,000 trucks that enter and exit the city daily, primarily along the city’s arterials because most are designated as truck routes and connect to distribution centers and industrial areas.</p><br>'
      +'<img src="./images/atlantic-ave-6.jpg" alt="Two trucks waiting at a stoplight" width=100%>'
      +'</p><p style="margin-right:10%;font-size:smaller">“[D]own on the ten-lane surface road beneath the [Gowanus] parkway, rumbled (from before dawn until after dark after the opening of the Brooklyn-Battery Tunnel flooded the area with freight traffic) regiments, brigades, divisions of huge tractor-trailer trucks, engines gunning and backfiring, horns blasting, brakes screeching...” &mdash;From Robert Caro’s <em>The Power Broker</em> on the impacts of Moses-era highway development on Brooklyn’s Third Avenue, which evokes similar impressions today. Photo: Kade Van Meeteran.</p>',
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .95,
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
      chapterDiv: '<p>While these corridors play an important role in moving local and regional through-traffic, the way nearby residents navigate these roads adds more nuance.</p>',
      location: {
        center: [-74, 40.725],
        zoom: 10,
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
      chapterDiv: '<p>Approximately 42% of households within walking distance of the largest roadways in our study area own a vehicle, slightly less than the citywide rate of 45%.</p><br>'
      +'<p style="font-size:small"><span style="color:#b9c7c6">&#9632;</span>&ensp;Less than 25% of households in census tract own vehicle(s)<br><span style="color:#98a8b6">&#9632;</span>&ensp;25% to 40%<br><span style="color:#7587a6">&#9632;</span>&ensp;41% to 58%<br><span style="color:#526697">&#9632;</span>&ensp;59% to 75%<br><span style="color:#2d4387">&#9632;</span>&ensp;More than 75%<br><span class="stroad">&mdash;</span>&thinsp;Stroads in EJ Study Area</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
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
      chapterDiv: '<p>Unsurprisingly, residents along corridors in outlying areas (such as North Conduit Avenue, Springfield Boulevard, and Utopia Parkway in eastern Queens and Baychester Avenue in the northeast Bronx) have higher vehicle ownership rates.</p><br>'
      +'<p style="font-size:small"><span style="color:#7587a6">&#9632;</span>&ensp;41% to 58% of households in census tract own vehicle<br><span style="color:#526697">&#9632;</span>&ensp;59% to 75%<br><span style="color:#2d4387">&#9632;</span>&ensp;More than 75%<br><span class="stroad">&mdash;</span>&thinsp;Stroads in areas with higher vehicle ownership</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
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
      chapterDiv: '<p>But there are entire multi-lane corridors in dense areas of the Bronx, Brooklyn, and Upper Manhattan (such as 161st Street, Dekalb Avenue, and Frederick Douglas Boulevard, respectively) along which car ownership is relatively low...</p><br>'
      +'<p style="font-size:small"><span style="color:#b9c7c6">&#9632;</span>&ensp;Less than 25% of households in census tract own vehicle(s)<br><span style="color:#98a8b6">&#9632;</span>&ensp;25% to 40%<br><span class="stroad">&mdash;</span>&thinsp;Stroads in areas with low vehicle ownership</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '07-stroads-car-low',
          opacity: .95,
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
      chapterDiv: '<p>...and public transportation usage among commuters is exceptionally high. Among commuting residents who live within walking distance of stroads, about 62% walk, bike, or take public transportation to work, about three percent higher than the citywide average and far higher than any other U.S. city (in Boston, the U.S. city with the next highest average, about 40% of commuting residents walk, bike, or take public transportation to work).</p><br>'
      +'<p style="font-size:small"><span style="color:#b5caed">&#9632;</span>&ensp;Less than 20% of population in census tract takes public transportation to work<br><span style="color:#a0a9d7">&#9632;</span>&ensp;20% to 47%<br><span style="color:#8c87c1">&#9632;</span>&ensp;48% to 58%<br><span style="color:#7b6baf">&#9632;</span>&ensp;59% to 67%<br><span style="color:#684b9b">&#9632;</span>&ensp;68% to 80%<br><span style="color:#561b84">&#9632;</span>&ensp;More than 80%<br><span class="stroad">&mdash;</span>&thinsp;Stroads in EJ Study Area</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .95,
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
      chapterDiv: '<p style="margin-right:10%">Many stroads, however, remain unsettling spaces where drivers own the right-of-way, speeding and weaving their way through traffic and creating dangerous conditions for pedestrians, cyclists, and other drivers. Over the years, several of these thoroughfares, including Queens Boulevard and Atlantic Avenue, have been dubbed a <a href="https://gothamist.com/news/after-10-years-of-vision-zero-nyc-has-a-new-boulevard-of-death" target="_blank">“boulevard of death”</a> due to their high number of traffic fatalities.</p><br>'
      +'<img src="./images/utica-ave-1.jpg" alt="Flickering NYPD traffic sign displays text:  Vision Zero" width=100%>'
      +'<p style="font-size:smaller;margin-right:10%">In 2014, New York City introduced Vision Zero with the goal of eliminating traffic-related deaths. A decade later, traffic fatalities have declined significantly in wealthier, whiter areas but not in many lower-income communities of color <em>(source: <a href="https://transalt.org/press-releases/transportation-alternatives-and-families-for-safe-streets-analyze-data-from-first-10-years-of-vision-zero" target="_blank">Transportation Alternatives</a>)</em>. Photo: Stephen Albonesi.</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
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
      chapterDiv: '<p>The issue is especially pronounced in EJ areas. According to <a href="https://climate.cityofnewyork.us/ejnyc-report/the-state-of-environmental-justice-in-nyc/access-to-resources/" target="_blank">the Mayor’s Office of Climate & Environmental Justice</a>, 59% of crash-related fatalities and severe injuries citywide occurred in EJ areas in 2022 despite EJ areas making up only 44% of New York City census tracts and 49% of the population. Moreover, an analysis of crashes in the same year showed that the rate of people killed or severely injured per mile of roadway in EJ areas was 1.2 times the citywide average and 1.4 times the rate in non-EJ areas.</p>'
      +'<p>The Department of Transportation (DOT) has designated a number of stroads as <a href="https://www.nyc.gov/html/dot/html/pr2023/vision-zero-borough-pedestrian-safety-action-plan.shtml" target="_blank">Vision Zero Priority Corridors</a> because they have exceptionally high rates of pedestrians killed or severely injured on a per-mile basis.</p><br>'
      +'<p style="font-size:small"><span class="stroad">&mdash;</span>&thinsp;Stroads in EJ Study Area that are DOT Priority Corridors</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '10-dot-priority',
          opacity: .95,
        }
      ],
      onChapterExit: [],
    },
    
    { id: 'auto-11',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p style="margin:5%">Stroad design and function that gives automobile drivers significant space and latitude also creates glaring inefficiencies that affect drivers and non-drivers alike.</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
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
          opacity: .95,
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
      chapterDiv: '<p>Arterials lined with alternate side parking forces taxis and delivery drivers to double park in spaces intended for vehicle movement or pedestrian use in order to complete pickups and deliveries.</p><br>'
      +'<img src="./images/google-street-view/streetview-northern-blvd.png" alt="Truck parked on chicane" width=100%>' 
      +'<p style="font-size:smaller">Northern Boulevard, Queens. Image: Google Street View, 2022.</p>',
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
      chapterDiv: '<p>The rightmost travel lane along numerous corridors is rendered virtually useless as a result.</p><br>'
      +'<img src="./images/google-street-view/streetview-boston-rd.png" alt="Cars on travel lane" width=100%>'
      + '<p style="font-size:smaller">Boston Road, The Bronx. Image: Google Street View, 2022.</p>',
      location: {
        center: [-73.85233657704273, 40.87433615619272],
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
      chapterDiv: '<p>Where they have been installed, clearly delineated bus and bike lanes have improved multi-modal traffic flow, but they too are regularly blocked and unusable when appropriate lane use is not enforced.</p><br>'
      +'<img src="./images/google-street-view/streetview-utica-ave.png" alt="Truck on bus lane ahead of a bus circumventing on the travel lane" width=100%>'
      +'<p style="font-size:smaller">Utica Avenue, Brooklyn. Image: Google Street View, 2022.</p>',
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
      chapterDiv: '<p style:"margin:5%">And even on the sidewalk, pedestrians must routinely meander around large vehicles, automobile-related equipment, and daunting access roads to suburban-style shopping plazas, drive-throughs, and other neighboring properties that prevent safe passage. It leads to neighborhood spaces that people seek to avoid altogether and is at odds with how the City views many of these corridors in terms of function and experience.</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
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
      chapterDiv: '<p>For example, the Department of Transportation’s (DOT) <a href="https://www.nyc.gov/html/dot/html/pedestrians/pedestrian-mobility.shtml" target="_blank">Pedestrian Mobility Plan</a> categorizes every street segment citywide into one of five types that reflect different levels of pedestrian need on the city’s sidewalks. According to the plan, 42% of our study’s stroads are at least “Neighborhood Corridors.” That is, they have consistent pedestrian destinations that should ideally accommodate small groups of people passing each other on foot. The reality can feel very different.</p><br>'
      +'<p style="font-size:smaller"><span style="color:#432371">&#9632;</span>&ensp;<strong>Global Corridors</strong> have large crowds of people and high concentration of global destinations<br><br><span style="color:#714674">&#9632;</span>&ensp;<strong>Regional Corridors</strong> have crowds of people and attractions that draw people from the region<br><br><span style="color:#9F6976">&#9632;</span>&ensp;<strong>Neighborhood Corridors</strong> have small groups of people and destinations like business districts, schools, or parks<br><br><span style="color:#CC8B79">&#9632;</span>&ensp;<strong>Community Connectors</strong> are residential streets with small groups and local destinations like small parks or schools<br><br><span style="color:#FAAE7B">&#9632;</span>&ensp;<strong>Baseline Streets</strong> are residential streets with low pedestrian volumes</p>',
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.25,
        zoomSmall: 7.25,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: .95,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-17',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p>Like this stretch of Atlantic Avenue in Crown Heights, which is a Neighborhood Corridor because it is intended to serve consistent pedestrian destinations.</p><br>'
      +'<img src="./images/atlantic-ave-4.JPG" alt="Person walking past cars parked on sidewalk" width=100%>'
      +'<p style="font-size:smaller">Photo: Kade Van Meeteren.</p>',
      location: {
        center: [-73.95471785602062, 40.678797076834485],
        zoom: 13,
        zoomSmall: 10,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: .95,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-18',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p>And this section of Utica Avenue in East Flatbush also has the demand factors that characterize a Neighborhood Corridor.</p><br>'
      +'<img src="./images/utica-ave-2.jpg" alt="Multiple cars parked on sidewalk" width=100%>'
      +'<p style="font-size:smaller">Photo: Stephen Albonesi.</p>',
      location: {
        center: [-73.9303791954553, 40.649747020907185],
        zoom: 13,
        zoomSmall: 10,
      },
      onChapterEnter: [
        { layer: '11-dot-demand',
          opacity: .95,
        },
      ],
      onChapterExit: [],
    },

    { id: 'auto-19',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p>Or in the Allerton neighborhood of the Bronx, where portions of Boston Road designated as Community Connectors can feel like taking your life into your hands.</p><br>'
      +'<img src="./images/boston-rd-3.jpg" alt="Low and mid-rise buildings near moderately busy road" width=100%>'
      +'<p style="font-size:smaller">Photo: Kade Van Meeteren.</p>',
      location: {
        center: [-73.8630203165104, 40.86528602675465],
        zoom: 13,
        zoomSmall: 10,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: 0,
        },
        { layer: '03-eja',
          opacity: 0,
        },
        { layer: '11-dot-demand',
          opacity: .95,
        }
      ],
      onChapterExit: [
        { layer: '11-dot-demand',
          opacity: 0,
        }
      ],
    },
    
    { id: 'auto-20',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p style="margin: 5%">Of course, even with available public transit, cities as dense as New York still need streets that can accommodate heavy amounts of vehicle traffic and their array of destinations. It is also important to acknowledge that the City is taking steps to address a number of the issues that plague these thoroughfares.</p>'
      +'<p style="margin: 5%">In addition to DOT’s Priority Corridors,  many stroads have been designated as <a href="https://www.nyc.gov/html/visionzero/pages/initiatives/street-design.shtml" target="_blank">Vision Zero Arterial Slow Zones</a>, and <a href="https://www.nyc.gov/content/visionzero/pages/engineering" target="_blank">Great Streets</a> program investments along stroads like Queens Boulevard have made them significantly safer and more pleasant. The City has also piloted busways and curb management programs, is redesigning its truck route network, passed a City of Yes text amendment to reduce pedestrian-automobile conflicts, and has completed a number of other projects and studies that will be featured in a future <em>Greener Corridors</em> post.</p>',
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .95,
        },
        { layer: '03-eja',
          opacity: .45,
        },
        { layer: '11-dot-demand',
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },

    { id: 'auto-21',
      alignment: 'centered',
      hidden: false,
      chapterDiv: '<p style="margin-right: 10%">Yet even with ongoing and proposed improvements, these corridors are not being optimized to their full potential, with mobility being just one opportunity area. The need to leverage them is all the more urgent given the climate crisis and transportation’s role as the largest contributor to greenhouse gas emissions in the country. For those who have the choice of how to travel, dangerous, unpleasant, and car-oriented street conditions reinforce a vicious cycle where driving becomes the preferred option. In Part 2 of this storymap, we will explore issues of heat and flooding and  opportunities to make these corridors more climate resilient.</p><br>'
      +'<img src="./images/boston-rd-1.jpg" alt="Scooters left astride a sidewalk in front of an automotive business" width=100%>'
      +'<p style="font-size:smaller">The one-year East Bronx Shared E-Scooter Pilot expanded mobility options to East Bronx residents beginning in the summer 2021. Since then, more than 3.4 million trips have been taken. Boston Road was one of several thoroughfares that reported high scooter traffic volumes, suggesting the need for safer, designated lanes for micromobility users.</p>',
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        { layer: '02-studyArea',
          opacity: .95,
        },
        { layer: '03-eja',
          opacity: .45,
        }
      ],
      onChapterExit: [],
    },
    
  ]
};