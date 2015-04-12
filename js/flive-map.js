
     
        // The latitude and longitude of your business / place
        var position = [-9.2435385, -75.0195145];

        var flightRoute = [
                        ['foo',33.9425003,-118.4080736],
                        ['foo',33.9456389,-118.4649722],
                        ['foo',33.9427778,-118.5013889],
                        ['foo',33.9316667,-118.6438889],
                        ['foo',33.8027778,-118.6833333],
                        ['foo',33.6972222,-118.5208333],
                        ['foo',33.5536111,-118.3127778],
                        ['foo',33.5105556,-118.1722222],
                        ['foo',33.5091667,-117.6866667],
                        ['foo',33.5083333,-117.3183333],
                        ['foo',32.7703889,-116.4685833],
                        ['foo',32.7488611,-115.5085833],
                        ['foo',32.7488667,-115.5085819],
                        ['foo',32.7603278,-115.0077306],
                        ['foo',32.7681075,-114.6029464],
                        ['foo',32.7748611,-114.0692],
                        ['foo',32.7758444,-113.9720972],
                        ['foo',32.8165028,-113.6883944],
                        ['foo',32.9562583,-112.6742717],
                        ['foo',32.38355,-111.4947583],
                        ['foo',32.0952039,-110.9148556],
                        ['foo',32.0626917,-110.1897389],
                        ['foo',31.9212833,-107.7789194],
                        ['foo',31.8159111,-106.2818822],
                        ['foo',31.8159111,-106.2818822],
                        ['foo',31.5907694,-105.3818722],
                        ['foo',30.9521069,-102.9757114],
                        ['foo',30.7203444,-100.8318],
                        ['foo',30.5980211,-99.8174811],
                        ['foo',30.5980211,-99.8174811],
                        ['foo',30.4052917,-98.3496028],
                        ['foo',30.2240222,-97.0755806],
                        ['foo',30.0706472,-96.0633528],
                        ['foo',29.9569172,-95.3457192],
                        ['foo',29.8413,-94.468125],
                        ['foo',29.6230222,-92.9239917],
                        ['foo',29.1752294,-90.1040192],
                        ['foo',29.1752294,-90.1040192],
                        ['foo',28.382275,-88.0341611],
                        ['foo',28.0096972,-86.7626444],
                        ['foo',27.5918139,-85.3443333],
                        ['foo',27.4935028,-84.7831972],
                        ['foo',27.1342444,-82.8408889],
                        ['foo',27.13425,-82.8408889],
                        ['foo',26.5833333,-82.2333333],
                        ['foo',26.1534167,-81.7781111],
                        ['foo',25.9778611,-81.2332222],
                        ['foo',25.8904167,-80.9655556],
                        ['foo',25.85,-80.8463889],
                        ['foo',25.8639444,-80.6084167],
                        ['foo',25.7103889,-80.3214444],
                        ['foo',25.7953611,-80.2901111]
        ];
        
        function showGoogleMaps() {

         
            var latLng = new google.maps.LatLng(48.9727093,-35.2929521);  
            var mapOptions = {
                zoom: 3, // initialize zoom level - the max value is 21
                streetViewControl: false, // hide the yellow Street View pegman
                scaleControl: true, // allow users to zoom the Google Map
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                center: latLng
            };
           var image = 'img/green_dot.png';
            map = new google.maps.Map(document.getElementById('googlemaps'),
                mapOptions);

                        $.ajax
                ({
                  url: "http://flive.zdev.io/data/airports.json",
                  async : false
                }).fail(function(xhr, status, error) {
                    alert(xhr.responseText);
                }).done(function( data ) {
                    $.each(data["airports"], function(index) {
                       //  //console.log(data["airports"][index]);
                       // var markerPosition = new google.maps.LatLng(data["airports"][index].latitude, data["airports"][index].longitude);
                       
                       //  var marker = new google.maps.Marker({
                       //      position: markerPosition,
                       //      title: data["airports"][index].name,
                       //      icon : image
                       //  });

                       //  marker.setMap(map);
                    });
            });
                
            var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.9425003,-118.4080736),
                            title: "Los Angeles",
                            icon : image
            });

            marker.setMap(map);

            var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.7953611,-80.2901111),
                            title: "Miami",
                            icon : image
            });
            marker.setMap(map);

            image = 'img/red_dot.png';

            var currentMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(29.9569172,-95.3457192),
                            title: "Vuelo 208 de American Airlines",
                            map : map,
                            url : "http://flive.zdev.io/channel.html"
                            // icon : image
            });

            google.maps.event.addListener(currentMarker, 'click', function() {
                window.location.href = currentMarker.url;
            });

            var arrFlightRoutes = new Array();
            //console.log(flightRoute.length);
            for (i = 0; i < flightRoute.length; i++) {  
                // console.log(i);
                // console.log(flightRoute[i-1]);
                // console.log(flightRoute[i]);
                arrFlightRoutes[i] = new google.maps.LatLng(flightRoute[i][1], flightRoute[i][2]);
            }
              var flightPath = new google.maps.Polyline({
                path: arrFlightRoutes,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2
              });

              flightPath.setMap(map);
        }
         
        google.maps.event.addDomListener(window, 'load', showGoogleMaps);