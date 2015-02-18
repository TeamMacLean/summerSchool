// Google Maps
function init_map() {

    var place = {lat: 52.622463, lng: 1.222868};


    var map = new google.maps.Map(document.getElementById("map-holder"), {
        center: place,
        zoom: 14,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: false,
        scaleControl: false,
        navigationControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    new google.maps.Marker({
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

function init_hello() {
    var hero = $('#hello');
    var winHeight = $(window).height();
    hero.css({height: winHeight + "px"});
}

function init_sticky() {
    var $nav = $('#sticky-nav');

    $nav.affix({
        offset: {
            top: $('#hello').height()-$nav.height()
        }
    });
    $('body').scrollspy({ target: '#sticky-nav' });


}


function init_animations() {
    $('.animated').appear(function () {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            setTimeout(function () {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
                if (element.hasClass('counter')) {
                    element.find('.value').countTo();
                }
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            element.removeClass('hiding');
            if (element.hasClass('counter')) {
                element.find('.value').countTo();
            }
        }
    }, {accY: -150});
}

$(window).load(function () {
    init_hello();
//    init_animations();
    init_sticky();
//    init_stellar();
    init_map();
});

$(window).on("resize", function () {
    init_hello();
});
