function initMap() {

    var markerGroups = {
        "parking": [],
        "trail": [],
        "shelter": []
    };
    var customIcons = {
        shelter: {
            icon: 'http://backpackingconnecticut.com/images/shelter_picnic.png'
        },
        parking: {
            icon: 'http://backpackingconnecticut.com/images/parking.png'
        }
    };

    var styles = [
    {
     stylers: [ 
     { "color": "#f5f5f5" },
     { saturation: -100 }
     ]
 },{
     featureType: "road", 
     elementType: "geometry",
     stylers: [
     { color: "#8ee5ee" },

     { visibility: "simplified" }
     ]
 },

 { "elementType": "labels",
 "stylers": [
 {
     "visibility": "off"
 }
 ]
},

{
  featureType: "water", 
  elementType: "geometry",
  stylers: [
  { color: "#c9c9c9" },
               // { lightness: 250 },
               { visibility: "simplified" }
               ]
           },

           ];


// SUNDAY locations
var locations_sunday = [
['Adrian Cox', 38.603474, -90.232971],
['Albert Yowshien Kuo', 38.589101, -90.227202],
['Alice Gadel', 38.638540, -90.232284],
['Anabun Pottery', 38.607793, -90.209319],
['Andy Leicht', 38.598918, -90.247756],

['Blake Sanders', 38.633575, -90.200425],
['Brandon Anschultz', 38.617371, -90.210680],
['Brandon Barnes', 38.589101, -90.227202],
['Bridget McDermott Flood & Michael Flood', 38.556266, -90.257799],
['Cailin Metz', 38.633048, -90.201454],

['Cayce Zavaglia', 38.611740, -90.235909],
['Cecelia M. Davidson', 38.638298, -90.231810],
['Collin Garrity', 38.585801, -90.225617],
['Conor Murphy', 38.594721, -90.237542],
['Damia Smith', 38.638540, -90.232284],

             ['Damien Johnson', 38.582988, -90.235988],
             ['David Coblitz', 38.631421, -90.192996],
             ['Edo Rosenblith', 38.633575, -90.200425],
             ['Elaine Unell ', 38.631421, -90.192996],
             ['Emma Vidal', 38.603474, -90.232971],

             ['Erica Popp', 38.589346, -90.227666],
             ['Film Base STL', 38.634728, -90.215866],
             ['Garrett Roberts', 38.607793, -90.209319],
             ['GINJU-AN ', 38.631112, -90.199019],
             ['Gregg Louis', 38.600391, -90.222389],

             ['Hannah Montford', 38.609411, -90.224579],
             ['Ingrum Studio', 38.650577, -90.262091],
             ['Jacob Francois', 38.650576, -90.262091],
             ['Jacob Stanley', 38.600775, -90.242878],
             ['Jeff Kapfer', 38.625280, -90.214468],

             ['Jessica Bayer', 38.589101, -90.227202],
             ['Joe Chesla', 38.636645, -90.225135],
             ['John Joseph Hunn', 38.584649, -90.234668],
             ['John Sarra', 38.611732, -90.235943],
             ['Karen Ann Jones', 38.634701, -90.215316],

             ['Kathy Gomric', 38.607793, -90.209319],
             ['Kelsey Viola Wiskirchen', 38.609411, -90.224579],
             ['Ken Wood', 38.633575, -90.200425],
             ['Kristin Cassidy', 38.593804, -90.227849],
             ['Leah deMatta', 38.638540, -90.232284],

             ['LeRoy Lottmann', 38.607793, -90.209319],
             ['Lowell Daniels', 38.609411, -90.224579],
             ['Maggie Zografakis', 38.633575, -90.200425],
             ['Margaret Keller', 38.593804, -90.227849],
             ['Marina Peng', 38.638540, -90.232284],

             ['Mark Swain', 38.570884, -90.239701],
             ['Maxine Joie du Maine', 38.638298, -90.231810],
             ['Melody Evans', 38.638540, -90.232284],
             ['Michael Martinez', 38.638298, -90.231810],
             ['Michael Parrett', 38.638540, -90.232284],

             ['Nanette Boileau', 38.600754, -90.242863],
             ['Norleen Nosri', 38.638540, -90.232284],
             ['Olivia Lahs-Gonzales', 38.600754, -90.242863],
             ['Pat Toenjes', 38.607794, -90.209320],
             ['Patrick L. Bellmann', 38.607793, -90.209319],

             ['Paul Kafalenos', 38.633575, -90.200425],
             ['Perennial: Community Workshop + Store', 38.586302, -90.226035],
             ['Rachel Youn', 38.633666, -90.199920],
             ['Rich Brooks', 38.607793, -90.209319],
             ['Robert Michelmann', 38.607256, -90.206833],

             ['Robin Lewis-Heagler', 38.634321, -90.213246],
             ['Ruth Kolker', 38.589101, -90.227202],
             ['Ruth Reese', 38.638540, -90.232284],
             ['Sage Dawson', 38.633575, -90.200425],
             ['Sandra Fischetti', 38.638298, -90.231810],

             ['Sarah Bernhardt', 38.589101, -90.227202],
             ['Sarah Paulsen', 38.638540, -90.232284],
             ['Scott Allison', 38.638298, -90.231810],
             ['Soulard Art Gallery', 38.607793, -90.209319],
             ['Steve Ingraham', 38.631112, -90.199019],

             ['The Collab', 38.548527, -90.257013],
             ['Tiffany J. Sutton', 38.638298, -90.231810],
             ['WORK/PLAY', 38.593802, -90.227840],
             ['Wyndi Antoinette DeSouza', 38.606312],
];



// SUNDAY CONTENT
var content_sunday = [
['<div id=content>'+'<a href="projects/cox"><h1>Adrian<br>Cox</h1></a>'+'<p>3103 Pestalozzi St<br>St. Louis, MO  63118</p>'],
['<div id=content>'+'<h1>Albert<br> Yowshien <br>Kuo</h1>'+'<p>3636 Texas Ave<br>St. Louis, MO  63118</p>'],
['<div id=content>'+'<h1>Alice <br>Gadel</h1>'+'<p>501 N Grand Blvd<br>St. Louis, MO  63108</p>'],
['<div id=content>'+'<h1>Anabun <br>Pottery</h1>'+'<p>2028 S 12th St<br>St. Louis, MO  63104</p>'],
['<div id=content>'+'<h1>Andy <br>Leicht</h1>'+'<p>3827 Humprey St<br>St. Louis, MO  63116</p>'],


['<div id=bodyContent>'+'<h1>Blake Sanders</h1>'],
['<div id=bodyContent>'+'<h1>Brandon Anschultz</h1>'],
['<div id=bodyContent>'+'<h1>Brandon Barnes</h1>'],
['<div id=bodyContent>'+'<h1>Bridget McDermott Flood & Michael Flood</h1>'],
['<div id=bodyContent>'+'<h1>Cailin Metz</h1>'],

['<div id=bodyContent>'+'<h1>Cayce Zavaglia</h1>'],
['<div id=bodyContent>'+'<h1>Cecelia M. Davidson</h1>'],
['<div id=bodyContent>'+'<h1>Collin Garrity</h1>'],
['<div id=bodyContent>'+'<h1>Conor Murphy</h1>'],
['<div id=bodyContent>'+'<h1>Damia Smith</h1>'],

['<div id=bodyContent>'+'<h1>Damien Johnson</h1>'],
['<div id=bodyContent>'+'<h1>David Coblitz</h1>'],
['<div id=bodyContent>'+'<h1>Edo Rosenblith</h1>'],
['<div id=bodyContent>'+'<h1>Elaine Unell </h1>'],
['<div id=bodyContent>'+'<h1>Emma Vidal</h1>'],

['<div id=bodyContent>'+'<h1>Erica Popp</h1>'],
['<div id=bodyContent>'+'<h1>Film Base STL</h1>'],
['<div id=bodyContent>'+'<h1>Garrett Roberts</h1>'],
['<div id=bodyContent>'+'<h1>GINJU-AN </h1>'],
['<div id=bodyContent>'+'<h1>Gregg Louis</h1>'],

['<div id=bodyContent>'+'<h1>Hannah Montford</h1>'],
['<div id=bodyContent>'+'<h1>Ingrum Studio</h1>'],
['<div id=bodyContent>'+'<h1>Jacob Francois</h1>'],
['<div id=bodyContent>'+'<h1>Jacob Stanley</h1>'],
['<div id=bodyContent>'+'<h1>Jeff Kapfer</h1>'],

['<div id=bodyContent>'+'<h1>Jessica Bayer</h1>'],
['<div id=bodyContent>'+'<h1>Joe Chesla</h1>'],
['<div id=bodyContent>'+'<h1>John Joseph Hunn</h1>'],
['<div id=bodyContent>'+'<h1>John Sarra</h1>'],
['<div id=bodyContent>'+'<h1>Karen Ann Jones</h1>'],

['<div id=bodyContent>'+'<h1>Kathy Gomric</h1>'],
['<div id=bodyContent>'+'<h1>Kelsey Viola Wiskirchen</h1>'],
['<div id=bodyContent>'+'<h1>Ken Wood</h1>'],
['<div id=bodyContent>'+'<h1>Kristin Cassidy</h1>'],
['<div id=bodyContent>'+'<h1>Leah deMatta</h1>'],

['<div id=bodyContent>'+'<h1>LeRoy Lottmann</h1>'],
['<div id=bodyContent>'+'<h1>Lowell Daniels</h1>'],
['<div id=bodyContent>'+'<h1>Maggie Zografakis</h1>'],
['<div id=bodyContent>'+'<h1>Margaret Keller</h1>'],
['<div id=bodyContent>'+'<h1>Marina Peng</h1>'],

['<div id=bodyContent>'+'<h1>Mark Swain</h1>'],
['<div id=bodyContent>'+'<h1>Maxine Joie du Maine</h1>'],
['<div id=bodyContent>'+'<h1>Melody Evans</h1>'],
['<div id=bodyContent>'+'<h1>Michael Martinez</h1>'],
['<div id=bodyContent>'+'<h1>Michael Parrett</h1>'],

['<div id=bodyContent>'+'<h1>Nanette Boileau</h1>'],
['<div id=bodyContent>'+'<h1>Norleen Nosri</h1>'],
['<div id=bodyContent>'+'<h1>Olivia Lahs-Gonzales</h1>'],
['<div id=bodyContent>'+'<h1>Pat Toenjes</h1>'],
['<div id=bodyContent>'+'<h1>Patrick L. Bellmann</h1>'],

['<div id=bodyContent>'+'<h1>Paul Kafalenos</h1>'],
['<div id=bodyContent>'+'<h1>Perennial: Community Workshop + Store</h1>'],
['<div id=bodyContent>'+'<h1>Rachel Youn</h1>'],
['<div id=bodyContent>'+'<h1>Rich Brooks</h1>'],
['<div id=bodyContent>'+'<h1>Robert Michelmann</h1>'],

['<div id=bodyContent>'+'<h1>Robin Lewis-Heagler</h1>'],
['<div id=bodyContent>'+'<h1>Ruth Kolker</h1>'],
['<div id=bodyContent>'+'<h1>Ruth Reese</h1>'],
['<div id=bodyContent>'+'<h1>Sage Dawson</h1>'],
['<div id=bodyContent>'+'<h1>Sandra Fischetti</h1>'],

['<div id=bodyContent>'+'<h1>Sarah Bernhardt</h1>'],
['<div id=bodyContent>'+'<h1>Sarah Paulsen</h1>'],
['<div id=bodyContent>'+'<h1>Scott Allison</h1>'],
['<div id=bodyContent>'+'<h1>Soulard Art Gallery</h1>'],
['<div id=bodyContent>'+'<h1>Steve Ingraham</h1>'],

['<div id=bodyContent>'+'<h1>The Collab</h1>'],
['<div id=bodyContent>'+'<h1>Tiffany J. Sutton</h1>'],
['<div id=bodyContent>'+'<h1>WORK/PLAY</h1>'],
['<div id=bodyContent>'+'<h1>Wyndi Antoinette DeSouza</h1>']

]

// Saturday locations
var locations_saturday= [
['Brush and Hammer Studio', 38.621003, -90.321318],
];

             // Saturday CONTENT
             var content_saturday = [
             ['<div id=content>'+'<a href="projects/cox"><h1>Brush and Hammer Studio</h1></p>'],

             ]



             var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                 zoom: 13,
                 center: new google.maps.LatLng(38.605, -90.3),
                 styles: styles,
                 mapTypeControl: true

             });

             var infowindow = new google.maps.InfoWindow({
              maxWidth:300

          }
          );

             var marker, i;


// SUN Markers
for (i = 0; i < locations_sunday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_sunday[i][1], locations_sunday[i][2]),
    icon: 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
    map: map,

});


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_sunday[i][0]);
      infowindow.open(map, marker);
  }
})(marker, i));
}

// SAT Markers

for (i = 0; i < locations_saturday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_saturday[i][1], locations_saturday[i][2]),
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    map: map,

});


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_saturday[i][0]);
      infowindow.open(map, marker);
  }
})(marker, i));
}

}
