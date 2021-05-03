const locations = [
  { lat: 30.263742748365676, lng: -97.76290793084273 },
  { lat: 30.26840491513334, lng: -97.74749071770732 },
  { lat: 30.260692794701704, lng: -97.73890765399524},
  { lat: 30.259296595755643, lng: -97.73905267486347 },
  { lat: 30.284121158091136, lng: -97.71773392818389 },
  { lat: 30.26234065088033, lng: -97.72443320200708},
  { lat: 30.26966498650132, lng: -97.73623607486833 },
  { lat: 30.37407453137377, lng: -97.69054461543664 },
  { lat: 30.26896764418892, lng: -97.72754291729086},
  { lat: 30.321327667460572, lng: -97.73946109824139 },
  { lat: 30.264736046108503, lng: -97.72823558660184 },
  { lat: 30.206383651142847, lng: -97.77488647496418 },
  { lat: 30.28640475302215, lng: -97.74253055952516 },
  { lat: 30.153245954528696 , lng: -97.83381556000528 },
  { lat: 30.23179273281709 , lng: -97.78772982893139 },
  { lat: 30.273548591000782 , lng: -97.7535433019467 },
  { lat: 30.283274378178607 , lng: -97.74062054612679 },
  { lat: 30.290681371779456 , lng: -97.74478706147056 },
  { lat: 30.290802092160884 , lng: -97.74484428845449 },
  { lat: 30.290753992260722 , lng: -97.7446195442743 },
  { lat: 30.25939995491632 , lng: -97.73902834427496 },
  { lat: 30.258555723347914 , lng: -97.73863870379925 },
  { lat: 30.258799458637675 , lng: -97.73861505961911 },
  { lat: 30.260723501107776 , lng: -97.73836573653183 },
  { lat: 30.25955349241919 , lng: -97.7390088884551 },
  { lat: 30.25969987847982 , lng: -97.73873671904845 },
  { lat: 30.258627026150844 , lng: -97.73870037496317 },
  { lat: 30.259423823184147 , lng: -97.73914870565135 },
  { lat: 30.25964845924027 , lng: -97.73834006147119 },
  { lat: 30.25943702315929 , lng: -97.73910344612709 },
  { lat: 30.260381734547153 , lng: -97.73800262893089 },
  { lat: 30.258719664617203 , lng: -97.73863638845505 },
  { lat: 30.258540689056918 , lng: -97.73854415591471 },
  { lat: 30.258687861778593 , lng: -97.73871807496315 },
  { lat: 30.261026020943454 , lng: -97.73826524612707 },
  { lat: 30.260999887932222 , lng: -97.73807844242273 },
  { lat: 30.263521138782057 , lng: -97.725560853441 },
  { lat: 30.26873550897293 , lng: -97.72556871463875 },
  { lat: 30.26421614778486 , lng: -97.7635767136506 },
  { lat: 30.304161814675762 , lng: -97.73942860000001 }  
  ];

function initMap() {
  var center = new google.maps.LatLng( 30.26715 , -97.74306);

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    mapTypeId: 'roadmap'
  });


  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">The Picnic</h1>' +
    '<div id="bodyContent">' +
    "<p> Outdoor eating destination featuring a wide variety of food trucks and retail vendors.</p>" +
    '<p>Website: <a href="https://www.thepicnicaustin.com/"> The Picnic </a>' +
    '<p>Address: 1720 Barton Springs Rd Austin TX 78704' +
    "</div>" +
    "</div>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 30.263742748365676, lng: -97.76290793084273 },
    map,
    title: "The Picnic",
  });
  marker1.addListener("click", () => {
    infowindow.open(map, marker1);
  });


  var markers = []; 
  for (var i = 1; i < 40; i++) {
    var latLng = new google.maps.LatLng(
      locations[i]
    );
    var marker = new google.maps.Marker({
      position: latLng,
    });
    
    markers.push(marker);
  }
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
google.maps.event.addDomListener(window, "load", initMap());