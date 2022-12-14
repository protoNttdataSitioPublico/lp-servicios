var dataLayer = window.dataLayer || [];
var mode = 'dataLayer';

function sendEvent(mode, eventName, eventCategory, eventAction, eventLabel) {
    var params;
    params = {
        event: eventName,
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel
    }

    if (mode === 'dataLayer') {
        dataLayer.push(params);
    }
}

$('.slider-service-fijos li a').click(function () {
    var id = $(this).attr('id');
    var position = $(this).attr('position');
    sendEvent(mode, 'eventInteraction', 'serviciosFijos', 'card-' + id, 'card-' + position);
});

$('.banner .banner-button .banner-servicios-moviles').click(function () {
    sendEvent(mode, 'eventInteraction', 'serviciosFijos', 'banner-serviciosMoviles', 'banner');
});

$('.slider-service-aditional li .card-button .button').click(function () {
    var id = $(this).attr('id');
    var position = $(this).attr('position');
    sendEvent(mode, 'eventInteraction', 'serviciosFijos', 'serviciosAdicionales-' + id, 'servicios-' + position);
});

$('.banner .banner-button .banner-tes').click(function () {
    sendEvent(mode, 'eventInteraction', 'serviciosFijos', 'banner-TES', 'banner');
});

