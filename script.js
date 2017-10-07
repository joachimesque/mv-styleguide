function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent ('on' + eventType, handler); 
}

addEventHandler(document, 'DOMContentLoaded', function() {
    addEventHandler(document.getElementById('code'), 'change', function() {
        document.getElementById('codePreview').innerHTML = document.getElementById('codePreview').dataset.code;
    });
});
