// Google Maps
function initialize_map() {

    var place = {lat: 52.622463, lng: 1.222868};

    var map = new google.maps.Map(document.getElementById("map-holder"), {
        center: place,
        zoom: 16,
        scrollwheel: false,
        draggable: true,
        scaleControl: true,
        navigationControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: place,
        icon: {
            url: "img/pin.png",
            scaledSize: new google.maps.Size(52, 52)
        },
        map: map
    });

    // Keep it centered on resize
    window.onresize = function () {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(place);
    };

}

function initialize_stellar() {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
}

$(window).load(function () {
    initialize_map();

    initialize_stellar();
});
