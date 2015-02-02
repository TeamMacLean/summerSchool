// Google Maps
function init_map() {

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

function init_stellar() {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
}

function init_hello() {
    var hero = $('#hello');
    var winHeight = $(window).height();
    hero.css({height: winHeight + "px"});
}

function init_sticky() {
    var $nav = $('.sticky-nav');
    $nav.waypoint({
        handler: function(direction) {
            $nav.toggleClass('navbar-fixed-top');
        }
    });
}

$(window).load(function () {
    init_map();
    init_stellar();
    init_hello();
    init_sticky();
});

$(window).on("resize", function () {
    init_hello();
});
