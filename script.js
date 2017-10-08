var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

function updateAllPreviewElements() {
  var iframes = document.querySelectorAll("iframe");
  forEach(iframes, function (index, value) {
    iframes[index].addEventListener("load", function() {
    // I add a little bit of space so the preview space isn't too cramped
      iframes[index].height = iframes[index].contentWindow.document.body.scrollHeight + (16 * 2);
    });

  });
}


document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mavo:load', function() {
    console.log("mavo:load");
    updateAllPreviewElements();
  });
  document.addEventListener('mavo:save', function() {
    console.log("mavo:save");
    updateAllPreviewElements();
  });
  document.addEventListener('mavo:datachange', function() {
    console.log("mavo:datachange");
    updateAllPreviewElements();
  });
});
