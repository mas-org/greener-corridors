let titleDiv = "<img src='./images/MAS-Full-BY.png' alt='MAS Logo' height=45px width=auto><br><br><h1>Greener Corridors for a More Resilient City</h1>";
let subtitleDiv = "<h2>Issues & Opportunities</h2>";
let bylineDiv = '<br><p><em>Greener Corridors, our latest <a href="https://www.mas.org/news/introducing-greener-corridors/" target="_blank">research initiative</a>, examines New York City’s largest arterial thoroughfares as an opportunity to create more livable, efficient, and green public spaces. These “<a href="https://www.planetizen.com/news/2024/05/129032-stroads-worst-both-worlds" target="_blank">stroads</a>” are frequently criticized for road designs that prioritize moving large volumes of through-traffic at the expense of pedestrian and cyclist safety, public health, and walkable street environments that foster a sense of place and belonging. This storymap series takes a deeper look at the spatial relationship between these thoroughfares and other issues in order to more fully understand where and how they might be improved.</em></p><br><h1><mark>PART 1</mark>&emsp;</h1><br><br><hr>' +
'<div class="container"><img src="./images/cover02.jpg" alt="Cars parked on the sidewalk in front of an autorepair shop" width=100%><div class="top-left"><h1 style="color:white">Part 1</h1><h2 style="color:white;font-size:1.7em">Built for the Automobile</h2></div>';
let footerDiv = "<p>Published July 22, 2024 by The Municipal Art Society of New York. This page is a part of the <em><a href='https://www.mas.org/initiatives/greener-corridors/' target='_blank'>Greener Corridors</a></em> research initiative. Storymap built using <a href='https://github.com/mapbox/storytelling/tree/main' target='_blank'>these</a> <a href='https://pointsunknown.nyc' target='_blank'>resources</a>. A complete list of the datasets used can be found here[link].</p>";

let divChapter1 =
  "<p><strong>New York City’s largest stroads</strong> crisscross some of the most densely populated neighborhoods in the United States, including environmental justice (EJ) communities, identified as such because of their compounding environmental, socioeconomic, and racial inequities. The same number of people live within the city's EJ areas (6.4 million) as the combined populations of Los Angeles and Chicago, the second and third most populous cities in the U.S.</p><br>" +  
  '<p style="font-size:small"><span class="ej">&#9632;</span> Environmental Justice (EJ) Areas<br><span class="stroad">&mdash;</span> Roads ("stroads") in Study Area</p><br>' + 
  "<p style='text-align:center;font-size:smaller'><em>Scroll to continue</em> ▼</p>";

let divChapter2 =
  '<p>For too long, these corridors have been viewed by planners with one primary motive: to move as much vehicle traffic as quickly as possible through these communities.</p><br>' + 
  "<img src='./images/mobility/atlantic-ave-1.jpg' alt='Man walking along a median on Atlantic Avenue in Brooklyn' width=100%>" +
  '<p style="font-size:smaller">Atlantic Avenue’s six vehicle traffic lanes and 800-foot distances between crosswalks incentivize pedestrians to walk along dangerous medians not intended for human travel. To provide pedestrians with more opportunities to cross the street, the Department of Transportation recently installed mid-block crossings on the westernmost portion of the avenue.</p>';

let divChapter3 =
  "<p>That includes more than 120,000 trucks that enter and exit the city daily, primarily along the city’s arterials because most are designated as either local or through-truck routes and connect to distribution centers and industrial areas.</p>" +
  '<p><small>"[D]own on the ten-lane surface road beneath the [Gowanus] parkway, rumbled (from before dawn until after dark after the opening of the Brooklyn-Battery Tunnel flooded the area with freight traffic) regiments, brigades, divisions of huge tractor-trailer trucks, engines gunning and backfiring, horns blasting, brakes screeching..."</p>' +
  '<p style="text-align:right">&mdash;From Robert Caro’s <em>The Power Broker</em> on the impacts of Moses-era highway development on Brooklyn’s Third Avenue</small></p>';

let divChapter4 =
  '<p>The next section examines the perspective of residents who live near these corridors and experience them daily with the broader regional context in mind.</p>';

let divChapter5 =
  '<p>Approximately 42 percent of households within walking distance of the roads in our study area own a vehicle (nearly matching the citywide rate of 45 percent).</p><br>' +
  '<p style="font-size:small"><span class="vehicle1">&#9632;</span> Less than 25% of households in census tract own vehicle(s)<br><span class="vehicle2">&#9632;</span> 26% to 40% of households<br><span class="vehicle3">&#9632;</span> 41% to 58% of households<br><span class="vehicle4">&#9632;</span> 59% to 76% of households<br><span class="vehicle5">&#9632;</span> More than 76% of households in census tract own vehicle(s)</p>';

let divChapter6 =
  '<p>Some areas, like southeast Queens, have higher vehicle ownership rates.</p>';

let divChapter7 =
  '<p>But there are entire corridors in the Bronx along which car ownership is relatively low...</p>';

let divChapter8 =
  '<p>...and public transportation usage among commuters is exceptionally high&mdash;far higher than the average in any other major U.S. city.</p>' +
  '<p>This can be partly attributed to the fact that just about every stroad is served by public transportation.</p><br>' +
  '<p style="font-size:small"><span class="transit1">&#9632;</span> Less than 20% of population in census tract takes public transportation to work<br><span class="vehicle2">&#9632;</span> 21% to 47% of households<br><span class="vehicle3">&#9632;</span> 48% to 58% of households<br><span class="vehicle4">&#9632;</span> 59% to 67% of households<br><span class="vehicle5">&#9632;</span> 68% to 77%<br><span class="vehicle5">&#9632;</span> More than 77%</p>';

let divChapter9 =
  '<p>Many stroads, however, remain unsettling spaces where drivers own the right-of-way, speeding and weaving their way through traffic and creating dangerous conditions for pedestrians, cyclists, and other drivers. Over the years, several of these thoroughfares, including Queens Boulevard and Atlantic Avenue, have been dubbed a “boulevard of death” due to their high number of traffic fatalities. Many of those killed or injured are residents of surrounding neighborhoods, like [give an example + add data layer].</p>';

let divChapter10 =
  '<p>There are many examples of how prioritizing car travel affects the efficiency of public transportation along these corridors. Where they have been installed, clearly delineated bus and bike lanes have improved multi-modal traffic flow, but they are regularly blocked and unusable when appropriate lane use is not enforced. Part of the problem is inadequate curb lane space for pickups and deliveries because so much of it is reserved for longer-term parking, so drivers double park in lanes meant for vehicle movement. The rightmost travel lane of entire corridors is frequently rendered useless because of a handful of double-parked vehicles.</p>';
  
 let divChapter11 =
  '<img src="./images/mobility/atlantic-ave-2.jpg" alt="Man walking along a median on Atlantic Avenue in Brooklyn" width=100%>' +
  '<img src="./images/mobility/atlantic-ave-5.jpg" alt="Man walking along a median on Atlantic Avenue in Brooklyn" width=100%>' +
  '<img src="./images/mobility/atlantic-ave-3.jpg" alt="Man walking along a median on Atlantic Avenue in Brooklyn" width=100%>' +
  '<img src="./images/mobility/atlantic-ave-4.jpg" alt="Man walking along a median on Atlantic Avenue in Brooklyn" width=100%>' +
  '<p style="font-size:smaller">Even on the sidewalk, pedestrians must routinely meander around large vehicles, automobile-related equipment, and daunting access roads to suburban-style shopping plazas, drive-throughs, and other neighboring properties that prevent safe passage. The effect is neighborhood spaces that people seek to avoid altogether.</p>';

let divChapter12 = 
  '<p>It is worth acknowledging the efforts of recent administrations and advocates to address the harm caused by the construction of arterials and the need to rethink them. [Will briefly mention DOT programs like Vision Zero, busways, and City of Yes for Economic Opportunity, and the progress that still needs to be made.]</p>';

let divChapter13 =  
  '<p>Of course, even with available public transit, cities as dense as New York still need streets that can accommodate heavy amounts of vehicle traffic and their array of destinations. Yet given the mobility preferences of residents near many stroads and ambitious climate-related mobility goals from the City and State, it begs the question of who we should be designing these critical spaces for. For those who have the choice of how to travel, dangerous, unpleasant, and car-oriented street conditions reinforce a vicious cycle where driving becomes the preferred option.</p>';

var config = {
  style: 'mapbox://styles/mas-nyc/clikilw6r00xz01p78dss424t',
  accessToken: 'pk.eyJ1IjoibWFzLW55YyIsImEiOiJjbHgyMjRvamUwaXNpMmpvcmNoZ3JncTJ3In0.HHJQQ_T7pLEX4Gzy1jdeKQ',
  showMarkers: false,
  theme: 'dark',
  title: titleDiv,
  subtitle: subtitleDiv,
  byline: bylineDiv,
  footer: footerDiv,
  chapters: [
    { id: "c01",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
        pitch: 0,
        bearing: 0,
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      onChapterEnter: [
        {
          layer: 'stroads',
          opacity: 1,
        },
        {
          layer: 'ej',
          opacity: .35,
        },
        {
          layer: 'vehicle',
          opacity: 0,
        },
        {
          layer: 'transit',
          opacity: 0,
        },
      ],
    },
    { id: "c02",
      alignment: "centered",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-73.75160, 40.67468],
        zoom: 10.75,
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      }
    },
    { id: "c03",
      alignment: "centered",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
    },
    {
      id: "c04",
      alignment: "centered",
      hidden: false,
      chapterDiv: divChapter4,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        {
          layer: 'ej',
          opacity: 0,
        },
        {
          layer: 'vehicle',
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: 'ej',
          opacity: 0,
        }
      ],
    },
    {
      id: 'c05',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter5,
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.5,
        zoomSmall: 7.5,
      },
      onChapterEnter: [
        {
          layer: 'ej',
          opacity: 0,
        },
        {
          layer: 'vehicle',
          opacity: 1,
        }
      ],
    },
    {
      id: 'c06',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter6,
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.5,
        zoomSmall: 7.5,
      },
      onChapterEnter: [
        {
          layer: 'vehicle',
          opacity: 1,
        }
      ],
    },
    {
      id: 'c07',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter7,
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.5,
        zoomSmall: 7.5,
      },
      onChapterEnter: [
        {
          layer: 'stroads',
          opacity: 0.5,
        },
        {
          layer: 'vehicle',
          opacity: 1,
        },
        {
          layer: 'transit',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'vehicle',
          opacity: 0,
        }
      ],
    },
    {
      id: 'c08',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter8,
      location: {
        center: [-73.96478, 40.73163],
        zoom: 10.5,
        zoomSmall: 7.5,
      },
      onChapterEnter: [
        {
          layer: 'stroads',
          opacity: 0.5,
        },
        {
          layer: 'transit',
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: 'transit',
          opacity: 0,
        }
      ],
    },
    {
      id: 'c09',
      alignment: 'centered',
      hidden: false,
      chapterDiv: divChapter9,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'c10',
      alignment: 'centered',
      hidden: false,
      chapterDiv: divChapter10,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
      onChapterEnter: [
        {
          layer: 'stroads',
          opacity: 0.5,
        }
      ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'c11',
      alignment: 'full',
      hidden: false,
      chapterDiv: divChapter11,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
    },
    {
      id: 'c12',
      alignment: 'centered',
      hidden: false,
      chapterDiv: divChapter12,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
    },
    {
      id: 'c13',
      alignment: 'centered',
      hidden: false,
      chapterDiv: divChapter13,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 7,
      },
    },
  ]
};