function initMap() {
    
    let centerLatLng = new google.maps.LatLng(49.5488615, 25.5919183);
    
    let mapOptions = {
		center: centerLatLng,
		zoom: 17
	};
    
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker = new google.maps.Marker({
		position: centerLatLng,
		map: map,
		title: "Selfie Model Group"
	});
}
    google.maps.event.addDomListener(window, "load", initMap);