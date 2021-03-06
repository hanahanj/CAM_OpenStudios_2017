function initMap() {



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
['Mariana Parisca', 38.600638, -90.241044],
['Martin Lang', 38.590642, -90.218778],
['The Millitzer Studio & Gallery', 38.603474, -90.232971],

['Intersect Arts Center', 38.589101, -90.227202],
['Craft Alliance Center of Art + Design (Grand Center)', 38.638540, -90.232284],

['Soulard Art Gallery', 38.607793, -90.209319],

['Andy Leicht', 38.598918, -90.247756],

['City Museum', 38.633575, -90.200425], 
['Brandon Anschultz', 38.617371, -90.210680],
['Bridget McDermott Flood & Michael Flood', 38.556266, -90.257799],
['Cailin Metz', 38.633048, -90.201454],

['3409 Longfellow Blvd', 38.611740, -90.235909],

['Metropolitan Artist Lofts', 38.638298, -90.231810],
['Conor Murphy', 38.594721, -90.237542],
// ['Damia Smith', 38.638540, -90.232284], Craft Alice Gadel

['Damien Johnson', 38.582988, -90.235988],

['T-REX', 38.631421, -90.192996],

// ['Edo Rosenblith', 38.633575, -90.200425],
// ['Elaine Unell ', 38.631421, -90.192996],
// ['Emma Vidal', 38.603474, -90.232971],


['Film Base STL', 38.634728, -90.215866],
// ['Garrett Roberts', 38.607793, -90.209319],
['Artica', 38.631112, -90.199019],
['Gregg Louis', 38.600391, -90.222389],

['Viola Textile Studio', 38.609411, -90.224579],

['Jacob Francois', 38.625305,-90.214607199999991],
['3163 S Grand Boulevard', 38.600775, -90.242878],
['Jeff Kapfer', 38.625280, -90.214468],

// ['Jessica Bayer', 38.589101, -90.227202],
['Joe Chesla', 38.636645, -90.225135],
// ['John Sarra', 38.611732, -90.235943],
['Karen Ann Jones', 38.634701, -90.215316],

// ['Kathy Gomric', 38.607793, -90.209319],
// ['Kelsey Viola Wiskirchen', 38.609411, -90.224579],
// ['Ken Wood', 38.633575, -90.200425], CITY MUSEUM, Blake Sanders
['The Luminary', 38.593804, -90.227849],
// ['Leah deMatta', 38.638540, -90.232284],

['LeRoy Lottmann', 38.608107, -90.278481],
['Lowell Daniels', 38.6282846,-90.19291249999998],
// ['Maggie Zografakis', 38.588886, -90.227545],
['Margaret Keller', 38.607142, -90.206864],
['Marina Peng', 38.585768, -90.225642],

['Mark Swain', 38.570884, -90.239701],
// ['Maxine Joie du Maine', 38.638298, -90.231810],
// ['Melody Evans', 38.638540, -90.232284],
// ['Michael Martinez', 38.638298, -90.231810],
// ['Michael Parrett', 38.638540, -90.232284],

// ['Nanette Boileau', 38.600754, -90.242863],
// ['Norleen Nosri', 38.638540, -90.232284],
// ['Olivia Lahs-Gonzales', 38.600754, -90.242863],
// ['Pat Toenjes', 38.607794, -90.209320],
// ['Patrick L. Bellmann', 38.607793, -90.209319],

// ['Paul Kafalenos', 38.633575, -90.200425],CITY MUSEUM, Blake Sanders
['Perennial: Community Workshop + Store', 38.586302, -90.226035],
// ['Rachel Youn', 38.633666, -90.199920], CITY MUSEUM, Blake Sanders
// ['Rich Brooks', 38.607793, -90.209319],
['Robert Michelmann', 38.607256, -90.206833],

['Robin Lewis-Heagler', 38.634321, -90.213246],
// ['Ruth Kolker', 38.589101, -90.227202],
// ['Ruth Reese', 38.638540, -90.232284],
// ['Sage Dawson', 38.633575, -90.200425], CITY MUSEUM, Blake Sanders
// ['Sandra Fischetti', 38.638298, -90.231810],

// ['Sarah Bernhardt', 38.589101, -90.227202],
// ['Sarah Paulsen', 38.638540, -90.232284],
// ['Scott Allison', 38.638298, -90.231810],
// ['Soulard Art Gallery', 38.607793, -90.209319],
// ['Steve Ingraham', 38.631112, -90.199019],

['The Collab', 38.548527, -90.257013],
// ['Tiffany J. Sutton', 38.638298, -90.231810],
// ['WORK/PLAY', 38.593802, -90.227840],
['Wyndi Antoinette DeSouza', 38.606312],
];



// SUNDAY CONTENT
var content_sunday = [
['<div id=content>'+'<a href="projects/Parisca"><h1>Mariana <br>Parisca</h1></a>'],
['<div id=content>'+'<a href="projects/Lang"><h1>Martin <br>Lang</h1></a>'],
['<div id=content>'+'<h3>The Millitzer Studio & Gallery</h3>'
+'<a href="projects/Cox"><h1>Adrian<br>Cox</h1></a>'
+'<a href="projects/Vidal"><h1>Emma<br>Vidal</h1></a>'
],


['<div id=content>'+'<h3>Intersect Arts Center</h3>'
+'<a href="projects/Kuo"><h1>Albert<br> Yowshien <br>Kuo</h1></a>'
+'<a href="projects/Bayer"><h1>Jessica Bayer</h1></a>'
+'<a href="projects/Zografakis"><h1>Maggie Zografakis</h1></a>'
+'<a href="projects/Kolker"><h1>Ruth Kolker</h1></a>'
+'<a href="projects/Bernhardt"><h1>Sarah Bernhardt</h1></a>'],

['<div id=content>'+'<h3>Craft Alliance Center of Art + Design (Grand Center)</h3>'
+'<a href="projects/Gadel"><h1>Alice <br>Gadel</h1></a>'
+'<a href="projects/Smith"><h1>Damia <br>Smith</h1></a>'
+'<a href="projects/deMatta"><h1>Leah <br>deMatta</h1></a>'
+'<a href="projects/Evans"><h1>Melody <br>Evans</h1></a>'
+'<a href="projects/Parrett"><h1>Michael <br>Parrett</h1></a>'
+'<a href="projects/Nosri"><h1>Norleen <br>Nosri</h1></a>'
+'<a href="projects/Reese"><h1>Ruth <br>Reese</h1></a>'
+'<a href="projects/Paulsen"><h1>Sarah <br>Paulsen</h1></a>'
],
['<div id=content>'+'<h3>Soulard Art Gallery</h3>'
+'<a href="projects/Anabun"><h1>Anabun <br>Pottery</h1></a>'
+'<a href="projects/Roberts"><h1>Garrett<br> Roberts</h1></a>'
+'<a href="projects/Gomric"><h1>Kathy <br>Gomric</h1></a>'
+'<a href="projects/Bellmann"><h1>Patrick L <br>Bellman</h1></a>'
+'<a href="projects/Toenjes"><h1>Pat <br>Toenjes</h1></a>'
+'<a href="projects/Brooks"><h1>Rich <br>Brooks</h1></a>'],

['<div id=content>'+'<a href="projects/Leicht"><h1>Andy <br>Leicht</h1></a>'],


['<div id=content>'+'<h3>City Museum</h3>'
+'<a href="projects/Sanders"><h1>Blake<br>Sanders</h1></a>'
+'<a href="projects/Wood"><h1>Ken <br>Wood</h1></a>'
+'<a href="projects/Kafalenos"><h1>Paul <br>Kafalenos</h1></a>'
+'<a href="projects/Youn"><h1>Rachel <br>Youn</h1></a>'
+'<a href="projects/Dawson_Sage"><h1>Sage<br> Dawson</h1></a>'
],
['<div id=content>'+'<a href="projects/Anschultz"><h1>Brandon<br>Anschultz</h1></a>'],
['<div id=content>'+'<a href="projects/Flood"><h1>Bridget McDermott Flood <br> & Michael Flood</h1></a>'],
['<div id=content>'+'<a href="projects/Metz"><h1>Cailin<br>Metz</h1></a>'],


['<div id=content>'+'<h3>3409 Longfellow Blvd</h3>'
+'<a href="projects/Zavaglia"><h1>Cayce<br>Zavaglia</h1></a>'
+'<a href="projects/Sarra"><h1>John<br>Sarra</h1></a>'
],

['<div id=content>'+'<h3>Metropolitan Artist Lofts</h3>'
+'<a href="projects/Davidson"><h1>Cecelia M.<br>Davidson</h1></a>'
+'<a href="projects/Maine"><h1>Maxine du Maine</h1></a>'
+'<a href="projects/Martinez"><h1>Michael Martinez</h1></a>'
+'<a href="projects/Fischetti"><h1>Sandra Fischetti</h1></a>'
+'<a href="projects/Allison"><h1>Scott Allison</h1></a>'
+'<a href="projects/Sutton"><h1>Tiffany J. Sutton</h1></a>'
],
['<div id=content>'+'<a href="projects/Murphy"><h1>Conor <br>Murphy</h1></a>'],
// ['<div id=content>'+'<a href="projects/Smith"><h1>Damia <br>Smith</h1></a>'], Craft

['<div id=content>'+'<a href="projects/Johnson_Damien"><h1>Damien <br>Johnson</h1></a>'],

['<div id=content>'+'<h3>T-REX</h3>'
+'<a href="projects/Coblitz"><h1>David <br>Coblitz</h1></a>'
+'<a href="projects/Unell"><h1>Elaine<br> Unell</h1></a>'
],
// ['<div id=content>'+'<a href="projects/Rosenblith"><h1>Edo <br>Rosenblith</h1></a>'],
// ['<div id=content>'+'<a href="projects/Unell"><h1>Elaine <br>Unell</h1></a>'],
// ['<div id=content>'+'<a href="projects/Vidal"><h1>Emma <br>Vidal</h1></a>'],


['<div id=content>'+'<a href="projects/FilmBaseSTL"><h1>Film Base<br>STL</h1></a>'],
// ['<div id=content>'+'<a href="projects/Roberts"><h1>Garrett <br>Roberts</h1></a>'],

['<div id=content>'+'<h3>Artica</h3>'
+'<a href="projects/GINJU-AN"><h1>GINJU-AN</h1></a>'
+'<a href="projects/Ingraham"><h1>Steve Ingraham</h1></a>'
],
['<div id=content>'+'<a href="projects/Louis"><h1>Gregg <br>Louis</h1></a>'],

['<div id=content>'+'<h3>Viola Textile Studio</h3>'
+'<a href="projects/Montford"><h1>Hannah <br>Montford</h1></a>'
+'<a href="projects/Wiskirchen"><h1>Kelsey <br>Viola <br>Wiskirchen</h1></a>'
],

['<div id=content>'+'<a href="projects/Francois"><h1>Jacob <br>Francois</h1></a>'],

['<div id=content>'+'<h3>3163 S Grand Boulevard</h3>'
+'<a href="projects/Stanley"><h1>Jacob <br>Stanley</h1></a>'
+'<a href="projects/Boileau"><h1>Nanette Boileau</h1></a>'
+'<a href="projects/Lahs-Gonzales"><h1>Olivia Lahs-Gonzales</h1></a>'],

['<div id=content>'+'<a href="projects/Kapfer"><h1>Jeff<br>Kapfer</h1></a>'],

// ['<div id=content>'+'<a href="projects/Bayer"><h1>Jessica <br>Bayer</h1></a>'],
['<div id=content>'+'<a href="projects/Chesla"><h1>Joe <br>Chesla</h1></a>'],
// ['<div id=content>'+'<a href="projects/Sarra"><h1>John <br>Sarra</h1></a>'],
['<div id=content>'+'<a href="projects/Jones"><h1>Karen <br>Ann <br>Jones</h1></a>'],

// ['<div id=content>'+'<a href="projects/Gomric"><h1>Kathy <br>Gomric</h1></a>'],
// ['<div id=content>'+'<a href="projects/Wiskirchen"><h1>Kelsey <br>Viola <br>Wiskirchen</h1></a>'],
// ['<div id=content>'+'<a href="projects/Wood"><h1>Ken <br>Wood</h1></a>'], CITY MUSEUM, Blake Sanders
['<div id=content>'+'<h3>The Luminary</h3>'
+'<a href="projects/Cassidy"><h1>Kristin <br>Cassidy</h1></a>'
+'<a href="projects/McCoy_Danielle"><h1>Danielle McCoy (WORK/PLAY)</h1></a>'
],
// ['<div id=content>'+'<a href="projects/deMatta"><h1>Leah <br>deMatta</h1></a>'], Craft

['<div id=content>'+'<a href="projects/Lottmann"><h1>LeRoy <br>Lottmann</h1></a>'],
['<div id=content>'+'<a href="projects/Daniels"><h1>Lowell <br>Daniels</h1></a>'],
// ['<div id=content>'+'<a href="projects/Zografakis"><h1>Maggie <br>Zografakis</h1></a>'],
['<div id=content>'+'<a href="projects/Keller"><h1>Margaret <br>Keller</h1></a>'],
['<div id=content>'+'<a href="projects/Peng"><h1>Marina <br>Peng</h1></a>'],

['<div id=content>'+'<a href="projects/Swain"><h1>Mark <br>Swain</h1></a>'],
// ['<div id=content>'+'<a href="projects/Maine"><h1>Maxine Joie <br>du Maine</h1></a>'],
// ['<div id=content>'+'<a href="projects/Evans"><h1>Melody <br>Evans</h1></a>'],
// ['<div id=content>'+'<a href="projects/Martinez"><h1>Michael <br>Martinez</h1></a>'],
// ['<div id=content>'+'<a href="projects/Parrett"><h1>Michael <br>Parrett</h1></a>'],

// ['<div id=content>'+'<a href="projects/Boileau"><h1>Nanette <br>Boileau</h1></a>'],
// ['<div id=content>'+'<a href="projects/Nosri"><h1>Norleen <br>Nosri</h1></a>'],
// ['<div id=content>'+'<a href="projects/Gonzales"><h1>Olivia <br>Lahs-Gonzales</h1></a>'],
// ['<div id=content>'+'<a href="projects/Toenjes"><h1>Pat <br>Toenjes</h1></a>'],
// ['<div id=content>'+'<a href="projects/Bellmann"><h1>Patrick L. <br>Bellmann</h1></a>'],

// ['<div id=content>'+'<a href="projects/Kafalenos"><h1>Paul <br>Kafalenos</h1></a>'], CITY MUSEUM, Blake Sanders
['<div id=content>'+'<a href="projects/Perennial"><h1>Perennial: Community Workshop + <br>Store</h1></a>'],
// ['<div id=content>'+'<a href="projects/Youn"><h1>Rachel <br>Youn</h1></a>'], CITY MUSEUM, Blake Sanders
// ['<div id=content>'+'<a href="projects/Brooks"><h1>Rich <br>Brooks</h1></a>'],
['<div id=content>'+'<a href="projects/Michelmann"><h1>Robert <br>Michelmann</h1></a>'],

['<div id=content>'+'<a href="projects/Lewis-Heagler"><h1>Robin <br>Lewis-Heagler</h1></a>'],
// ['<div id=content>'+'<a href="projects/Kolker"><h1>Ruth <br>Kolker</h1></a>'],
// ['<div id=content>'+'<a href="projects/Reese"><h1>Ruth <br>Reese</h1></a>'],
// ['<div id=content>'+'<a href="projects/Dawson"><h1>Sage <br>Dawson</h1></a>'], CITY MUSEUM, Blake Sanders
// ['<div id=content>'+'<a href="projects/Fischetti"><h1>Sandra <br>Fischetti</h1></a>'],

// ['<div id=content>'+'<a href="projects/Bernhardt"><h1>Sarah <br>Bernhardt</h1></a>'],
// ['<div id=content>'+'<a href="projects/Paulsen"><h1>Sarah <br>Paulsen</h1></a>'],
// ['<div id=content>'+'<a href="projects/Allison"><h1>Scott <br>Allison</h1></a>'],
// ['<div id=content>'+'<a href="projects/Soulard"><h1>Soulard <br>Art <br>Gallery</h1></a>'],
// ['<div id=content>'+'<a href="projects/Ingraham"><h1>Steve <br>Ingraham</h1></a>'],

['<div id=content>'+'<a href="projects/Collab"><h1>The <br>Collab</h1></a>'],
// ['<div id=content>'+'<a href="projects/Paulsen"><h1>Tiffany J. <br>Sutton</h1></a>'],
// ['<div id=content>'+'<a href="projects/Allison"><h1>WORK/PLAY</h1></a>'],
['<div id=content>'+'<a href="projects/DeSouz"><h1>Wyndi <br>Antoinette <br>DeSouz</h1></a>'],


]

// Saturday locations
var locations_saturday= [
['Ingrum Studio', 38.650577, -90.262091],
['Erica Popp', 38.59868160000001,-90.2533881],
['Brush and Hammer Studio', 38.621003, -90.321418],
['Phi Academy of Art', 38.589379, -90.259234],
['Ann Wimsatt', 38.647720, -90.255015],
['Anne Molasky', 38.659365, -90.303871],


['Arny Nadler', 38.678928, -90.307658],
['Jules Unique Studios', 38.617724, -90.305782],
['Artists First', 38.614399, -90.312905],
['Pierce Arrow Building', 38.649891, -90.259954],
['5736 West Park Avenue', 38.625655, -90.282949],

// ['Bruce Wulff', 38.589379, -90.259234],
['Bruno David Gallery', 38.650086, -90.330819],
// ['Carla Dawson', 38.650069, -90.259975],
['Charles Houska', 38.647901, -90.260276],
// ['Clarinda Lauren', 38.589379, -90.259234],

['Colorbridge Arts Collective', 38.578075, -90.285583],
['Cory Sever', 38.6405036,-90.23487840000001],
['Focal Point', 38.611683, -90.319753],
['David A. N. Jackson', 38.663533, -90.278767],
['Dexter Silvers', 38.628840, -90.252050],

// ['Enola Lynn', 38.611683, -90.319753],
['Fine Line Studios, RHD', 38.749300, -90.426858],
['4032 Botanical Ave', 38.60937029999999,-90.25017170000001],
// ['Genevieve Esson', 38.611724, -90.319742],

['Gina Grafos Print Showcase', 38.634644, -90.251345],
['The Lewis Center', 38.658284, -90.309255],
// ['Julius Gutierrez', 38.617724, -90.305793],
// ['Justin Cissell', 38.589379, -90.259234],
['Kay Rye Leather Artisan', 38.613047, -90.317621],

// ['Ken Botnick', 38.650069, -90.259975],
['Webster University', 38.588424, -90.346928],
['Craft Alliance Center of Art + Design (Delmar)', 38.655957, -90.307439],
['Knox Gallery of Fine Art', 38.620574, -90.321420],
['LeRoy Lottmann', 38.608107, -90.278481],

// ['Marcia Pandolfi', 38.600569, -90.245485],
['Mark Witzling', 38.710706, -90.461845],
// ['Marlene Lewis', 38.650069, -90.259975],
['Garage Studios', 38.598754, -90.332356],
['Martin Goebel', 38.613064, -90.319967],

// ['Mary Lou Ryan', 38.655857, -90.307339],
['The St Louis Artists Guild', 38.649850, -90.329524],
['STLCC Forest Park', 38.627654, -90.274971],
// ['Nancy Exarhu', 38.650069, -90.259975],
['Nate Bonner, Bladesmith', 38.612780, -90.318293],

// ['Nicholas Coulter Photography', 38.617708, -90.305793],
['Nick Schleicher', 38.592245, -90.276261],
// ['Nicole Cooper', 38.621003, -90.321318],
// ['Pamela Devine', 38.611733, -90.319752],
['Paul Artspace', 38.822984, -90.272551],

// ['Patricia Clark', 38.588424, -90.346928],
// ['Phi Academy of Art', 38.589379, -90.259234],
['3840 Washington Blvd', 38.641419, -90.236853],
['Saint Louis Story Stitchers Artists Collective', 38.655887, -90.299445],
['Sam Fentress', 38.648083, -90.319748],

// ['Samantha Hunerlach', 38.625647, -90.282938],
// ['Sandra Marchewa', 38.641285, -90.236719],
['Sarah Harford', 38.589000, -90.292937],
// ['Sheldon Johnson', 38.650069, -90.259975],
// ['Stephanie Ellis Schlaifer', 38.678928, -90.307658],

// ['Sue Wuest', 38.655857, -90.307539],
['Tate Foley', 38.681673, -90.457882],
['Theresa Hopkins / April Morrison', 38.597684, -90.255815],
// ['Timothy Michael Burns', 38.627654, -90.274971],
// ['Yuko Suga', 38.655757, -90.307439],

['UMSL', 38.712122, -90.302745],
// ['University of Missouri-St Louis (student studios)', 38.712122, -90.302745],
['Vaughn Davis', 38.714340, -90.246435],
// ['Washington University Graduate Art Studios', 38.658284, -90.309255],
// ['Webster University', 38.588424, -90.346928],

['Saint Louis Community College Forest Park', 38.627654, -90.274971],


];

             // Saturday CONTENT
             var content_saturday = [
             ['<div id=content>'+'<a href="projects/IngrumStudios"><h1>Ingrum <br>Studio</h1></a>'],
             ['<div id=content>'+'<a href="projects/Popp"><h1>Erica Popp</h1></p>'],
             ['<div id=content>'+'<h3>Brush and Hammer Studio</h3>'
             +'<a href="projects/Bruenger"><h1>Allison L Norfleet Bruenger</h1></p>'
             +'<a href="projects/Bruenger"><h1>Allison L Norfleet Bruenger</h1></p>'],
             ['<div id=content>'+'<h3>Phi Academy of Art</h3>'
             +'<a href="projects/Travis"><h1>Amy Travis</h1>'
             +'<a href="projects/Lauren"><h1>Clarinda Lauren</h1>'
             +'<a href="projects/Cissell"><h1>Justin Cissell</h1>'
             +'<a href="projects/Phi"><h1>Phi Academy of Art</h1>'
             +'<a href="projects/Wulff"><h1>Bruce Wulff</h1>'],
             ['<div id=content>'+'<a href="projects/Wimsatt"><h1>Ann Wimsatt</h1></p>'],
             ['<div id=content>'+'<a href="projects/Molasky"><h1>Anne Molasky</h1></p>'],
            

             ['<div id=content>'+'<h3>1376 Ferguson Ave</h3>'
             +'<a href="projects/Nadler"><h1>Arny Nadler</h1></p>'
             +'<a href="projects/Schlaifer"><h1>Stephanie Ellis Schlaifer</h1></p>'
             +'<a href="projects/Stouffer"><h1>Lindsey Stouffer</h1></p>'
             ],
             ['<div id=content>'+'<h3>Jules Unique Studios</h3>'
             +'<a href="projects/ArtDoll"><h1>Art Doll</h1>'
             +'<a href="projects/Coulter"><h1>Nicholas Coulter Photography</h1>'
             +'<a href="projects/Gutierrez"><h1>Julius Gutierrez</h1>'],
             ['<div id=content>'+'<a href="projects/ArtistsFirst"><h1>Artists First</h1></p>'],
             ['<div id=content>'+'<h3>Pierce Arrow Building</h3>'
             +'<a href="projects/Holtz"><h1>Barbara Holtz</h1>'
             +'<a href="projects/Dawson_Carla"><h1>Carla Dawson</h1>'
             +'<a href="projects/Botnick"><h1>Ken Botnick</h1>'
             +'<a href="projects/Lewis"><h1>Marlene Lewis</h1>'
             +'<a href="projects/Exarhu"><h1>Nancy Exarhu</h1>'
             +'<a href="projects/Johnson_Sheldon"><h1>Sheldon Johnson</h1>'],

             ['<div id=content>'+'<h3>5736 West Park Avenue</h3>'
             +'<a href="projects/DePauli"><h1>Brian DePauli</h1></p>'
              +'<a href="projects/Hunerlach"><h1>Samantha Hunerlach</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Wulff"><h1>Bruce Wulff</h1></p>'],
             ['<div id=content>'+'<a href="projects/BrunoDavidGallery"><h1>Bruno David Gallery</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Dawson"><h1>Carla Dawson</h1></p>'],
             ['<div id=content>'+'<a href="projects/Houska"><h1>Charles Houska</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Lauren"><h1>Clarinda Lauren</h1></p>'],

             ['<div id=content>'+'<a href="projects/ColorbridgeArtsCollective"><h1>Colorbridge Arts Collective</h1></p>'],
             ['<div id=content>'+'<a href="projects/Sever"><h1>Cory Sever</h1></p>'],
             ['<div id=content>'+'<h3>Focal Point</h3>'
             +'<a href="projects/Correll"><h1>Danielle Correll</h1>'
             +'<a href="projects/Devine"><h1>Pamela Devine</h1>'
             +'<a href="projects/Esson"><h1>Genevieve Esson</h1>'
             +'<a href="projects/Lynn"><h1>Enola <br>Lynn</h1>'
             +'<a href="projects/Peterson"><h1>Lori Peterson</h1>'
             ],
             ['<div id=content>'+'<a href="projects/Jackson"><h1>David A. N. Jackson</h1></p>'],
             ['<div id=content>'+'<a href="projects/Silvers"><h1>Dexter Silvers</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Lynn"><h1>Enola Lynn</h1></p>'],
             ['<div id=content>'+'<a href="projects/FineLineStudios"><h1>Fine Line Studios, RHD</h1></p>'],

             ['<div id=content>'+'<h3>4032 Botanical Ave</h3>'
             +'<a href="projects/Brady"><h1>Gena Brady</h1>'
             +'<a href="projects/Pandolfi"><h1>Marcia Pandolfi</h1>'
             ],
             // ['<div id=content>'+'<a href="projects/Esson"><h1>Genevieve Esson</h1></p>'],

             ['<div id=content>'+'<a href="projects/Grafos"><h1>Gina Grafos Print Showcase</h1></p>'],
             ['<div id=content>'+'<h3>The Lewis Center</h3>'+'<a href="projects/Everett"><h1>Jen Everett</h1></p>'+'<a href="projects/McCoy_Kevin"><h1>Kevin McCoy (WORK/PLAY)</h1>'+'<a href="projects/wustl"><h1>Washington University Graduates</h1>'],
             // ['<div id=content>'+'<a href="projects/Gutierrez"><h1>Julius Gutierrez</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Cissell"><h1>Justin Cissell</h1></p>'],
             ['<div id=content>'+'<a href="projects/Rye"><h1>Kay Rye Leather Artisan</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Botnick"><h1>Ken Botnick</h1></p>'],
             
             ['<div id=content>'+'<h3>Webster University</h3>'
             +'<a href="projects/Valdez"><h1>Krista Valdez</h1>'
             +'<a href="projects/Clark"><h1>Patricia Clark</h1>'
             +'<a href="projects/Webster"><h1>Webster University</h1>'],

             ['<div id=content>'+'<h3>Craft Alliance Center of Art + Design (Delmar)</h3>'
             +'<a href="projects/Heard"><h1>Kevin Heard</h1>'
             +'<a href="projects/Suga"><h1>Yuko Suga</h1>'
             +'<a href="projects/Ryan"><h1>Mary Lou Ryan</h1>'
             +'<a href="projects/West"><h1>Sue West</h1>'],
             ['<div id=content>'+'<a href="projects/Knox"><h1>Knox Gallery of Fine Art</h1></p>'],
             ['<div id=content>'+'<a href="projects/Lottmann"><h1>LeRoy Lottmann</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Pandolfi"><h1>Marcia Pandolfi</h1></p>'],
             ['<div id=content>'+'<a href="projects/Witzling"><h1>Mark Witzling</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Lewis"><h1>Marlene Lewis</h1></p>'],
             ['<div id=content>'+'<a href="projects/GarageStudios"><h1>Garage Studios</h1></p>'],
             ['<div id=content>'+'<a href="projects/Goebel"><h1>Martin Goebel</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Ryan"><h1>Mary Lou Ryan</h1></p>'],
             ['<div id=content>'+'<a href="projects/Guild"><h1>The St Louis Artists Guild</h1></p>'],
             ['<div id=content>'+'<h3>STLCC Forest Park</h3>'
             +'<a href="projects/Fetté"><h1>Mirka M Fetté</h1></p>'
             +'<a href="projects/Burns"><h1>Timothy Michael Burns</h1></p>'
             +'<a href="projects/STLCC"><h1>STLCC Forest Park</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Exarhu"><h1>Nancy Exarhu</h1></p>'],
             ['<div id=content>'+'<a href="projects/Bonner"><h1>Nate Bonner, Bladesmith</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Coulter"><h1>Nicholas Coulter Photography</h1></p>'],
             ['<div id=content>'+'<a href="projects/Schleicher"><h1>Nick Schleicher</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Cooper"><h1>Nicole Cooper</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Devine"><h1>Pamela Devine</h1></p>'],
             ['<div id=content>'+'<a href="projects/Paul"><h1>Paul Artspace</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Clark"><h1>Patricia Clark</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Phi"><h1>Phi Academy of Art</h1></p>'],
             ['<div id=content>'+'<h3>3840 Washington Blvd</h3>'+'<a href="projects/Page"><h1>Preston Page Photography</h1>'+'<a href="projects/Marchewa"><h1>Sandra Marchewa</h1></p>'],
             ['<div id=content>'+'<a href="projects/StoryStitchers"><h1>Saint Louis Story Stitchers Artists Collective</h1></p>'],
             ['<div id=content>'+'<a href="projects/Fentress"><h1>Sam Fentress</h1></p>'],


             // ['<div id=content>'+'<a href="projects/Hunerlach"><h1>Samantha Hunerlach</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Marchewa"><h1>Sandra Marchewa</h1></p>'],
             ['<div id=content>'+'<a href="projects/Harford"><h1>Sarah Harford</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Johnson"><h1>Sheldon Johnson</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Schlaifer"><h1>Stephanie Ellis Schlaifer</h1></p>'],

             // ['<div id=content>'+'<a href="projects/Wuest"><h1>Sue Wuest</h1></p>'],
             ['<div id=content>'+'<a href="projects/Foley"><h1>Tate Foley</h1></p>'],
             ['<div id=content>'+'<a href="projects/Hopkins"><h1>Theresa Hopkins / April Morrison</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Burns"><h1>Timothy Michael Burns</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Suga"><h1>Yuko Suga</h1></p>'],

             ['<div id=content>'+'<h3>University of Missouri-St Louis</h3>'
             +'<a href="projects/umsl_fac"><h1>Faculty</h1>'
             +'<a href="projects/umsl_stu"><h1>Students</h1>'],
             // ['<div id=content>'+'<a href="projects/umsl_stu"><h1>University of Missouri-St Louis (student studios)</h1></p>'],
             ['<div id=content>'+'<a href="projects/Davis"><h1>Vaughn Davis</h1></p>'],
             // ['<div id=content>'+'<a href="projects/wustl"><h1>Washington University Graduate Art Studios</h1></p>'],
             // ['<div id=content>'+'<a href="projects/Webster"><h1>Webster University</h1></p>'],

             ['<div id=content>'+'<h3>Saint Louis Community College</h3>'
             +'<a href="projects/stlcc"><h1>Saint Louis Community College Forest Park</h1></p>'
             +'<a href="projects/Fette"><h1>Mirka M. Fette</h1></p>'
             ],

             ]



             var map = new google.maps.Map(document.getElementById('mapCanvas'), {
               zoom: 12,
               center: new google.maps.LatLng(38.635, -90.285),
               styles: styles,
               zoomControl: true,
            //    zoomControlOptions: {
            //     position: google.maps.ControlPosition.RIGHT_CENTER
            // },
            mapTypeControl: false

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
