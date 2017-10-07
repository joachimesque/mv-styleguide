function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent ('on' + eventType, handler); 
}

addEventHandler(document, 'DOMContentLoaded', function() {
    addEventHandler(document.querySelector('.code__input'), 'change', function() {
        document.querySelector('.preview').innerHTML = document.querySelector('.preview').dataset.code;
    });
});
