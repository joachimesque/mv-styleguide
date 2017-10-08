function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent ('on' + eventType, handler); 
}


var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

function updateAllPreviewElements(previewElementSelector) {
    var previewElementsList = document.querySelectorAll(previewElementSelector);
    forEach(previewElementsList, function (index, value) {
      console.log(this);
        previewElementsList[index].innerHTML = previewElementsList[index].dataset.code;
    });
}
addEventHandler(document, 'DOMContentLoaded', function() {
    addEventHandler(document, 'mavo:load.mavo', function() {
      updateAllPreviewElements('.preview');
    });
    addEventHandler(document, 'mavo:datachange', function() {
      updateAllPreviewElements('.preview');
    });
});
