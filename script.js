// UTILS
// 
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

function updateAllCopyBtns() {
  // this neat piece of code comes from : https://alligator.io/js/copying-to-clipboard/
  
  const copyBtns = document.querySelectorAll('button.code__copybtn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(btn.previousElementSibling);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        selection.removeAllRanges();

        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('success');

        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('success');
        }, 2400);
      } catch(e) {
        btn.textContent = 'Couldn\'t copy. Try Ctrl+C instead.';
        btn.classList.add('fail');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mavo:load', function() {
    console.log("mavo:load");
    updateAllPreviewElements();
    updateAllCopyBtns();
  });
  document.addEventListener('mavo:save', function() {
    console.log("mavo:save");
    updateAllPreviewElements();
    updateAllCopyBtns();
  });
  document.addEventListener('mavo:datachange', function() {
    console.log("mavo:datachange");
    updateAllPreviewElements();
  });
});
