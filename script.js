function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent ('on' + eventType, handler); 
}


function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

function updateCodeElements(previewElementSelector) {
    var previewElementsList = document.querySelectorAll(previewElementSelector);
    forEach(previewElementsList, function (index, value) {
        this.innerHTML = this.dataset.code;
    });
}
addEventHandler(document, 'DOMContentLoaded', function() {
    addEventHandler(document, 'mavo:load.mavo', function() {
      updateCodeElements('.preview')
    });
    addEventHandler(document, 'mavo:datachange.mavo', function() {
      updateCodeElements('.preview')
    });
});
