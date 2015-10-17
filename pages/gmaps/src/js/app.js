var map;
window.smappObj = {};
$(document).ready(function(){
  map = new GMaps({
    div: '#map',
    lat: 35.658313,
    lng: 139.6993071,
    zoom: 16
  });
  map.addMarker({
    lat: 35.658313,
    lng: 139.6993071,
    title: 'Lima',
    details: {
      database_id: 42,
      author: 'HPNeo'
    },
    /*click: function(e){
      if(console.log)
        console.log(e);
      alert('You clicked in this marker');
    }*/
    infoWindow: {
      content: '<p>喫煙所</p>'
    }
  });
  map.addMarker({
    lat: 35.6605218,
    lng: 139.6985379,
    title: 'Marker with InfoWindow',
    infoWindow: {
      content: '<p>BLUE WINDY LOUNGE</p>'
    }
  });
  
  $('#start_travel').click(function(e){
    e.preventDefault();
    map.travelRoute({
      origin: [window.smappObj.latitude, window.smappObj.longitude],
      destination: [35.6605218, 139.6985379],
      travelMode: 'walking',
      step: function(e){
        $('#instructions').append('<li>'+e.instructions+'</li>');
        $('#instructions li:eq('+e.step_number+')').delay(450*e.step_number).fadeIn(200, function(){
          map.setCenter(e.end_location.lat(), e.end_location.lng());
          map.drawPolyline({
            path: e.path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
          });
        });
      }
    });
  });
  
  GMaps.geolocate({
	  success: function(position) {
	    map.setCenter(position.coords.latitude, position.coords.longitude);
	  	map.addMarker({
		    lat: position.coords.latitude,
		    lng: position.coords.longitude,
		    title: 'Marker with InfoWindow',
		    icon: 'src/img/spin.gif',
		    infoWindow: {
		      content: '<p>You\'re here!</p>'
		    }
		});
		window.smappObj.latitude = position.coords.latitude;
		window.smappObj.longitude = position.coords.longitude;
	  },
	  error: function(error) {
	    alert('エラーしてるよ '+error.message);
	  },
	  not_supported: function() {
	    alert("ジオロケーションサポートしてないで。");
	  },
  });
});
  