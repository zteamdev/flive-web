$(document).ready(function(){
	$.ajax({
		url: "http://localhost/flive-web/data/flights.json",
	    async : false
	}).fail(function(xhr, status, error) {
		alert(xhr.responseText);
	}).done(function( data ) {
		var flights = data["flights"];
	    $.each(flights, function(index) {
	    	//iterate over route
	    	$.each(flights[index].route, function(y){
	    		console.log(flights[index].route[y]);
	    	})
		});
	});
})

function setFlightPath(flightRoute){
	var arrFlightRoutes = new Array();
	for (i = 0; i < flightRoute.length; i++) {  
		arrFlightRoutes[i] = new google.maps.LatLng(flightRoute[i].latitude, flightRoute[i].longitude);
    }

    var flightPath = new google.maps.Polyline({
							path: arrFlightRoutes,
			                strokeColor: "#FF0000",
			                strokeOpacity: 1.0,
			                strokeWeight: 2
	});

	flightPath.setMap(map);
}