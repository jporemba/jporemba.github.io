// Photo pop-ups.
//
// To add another pop-up:
//   1. Put a <dialog class="lightbox" id="some-id"> … </dialog> at the bottom of the page
//      (copy the birding one in index.html).
//   2. Give the thing people click data-lightbox="some-id".
// Clicking the ×, pressing Esc, or clicking outside the photo closes it.

document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
  var dialog = document.getElementById(trigger.dataset.lightbox);
  if (!dialog || typeof dialog.showModal !== 'function') return;

  trigger.addEventListener('click', function () { dialog.showModal(); });

  dialog.addEventListener('click', function (event) {
    var clickedBackdrop = event.target === dialog;
    var clickedClose = event.target.closest('[data-lightbox-close]');
    if (clickedBackdrop || clickedClose) dialog.close();
  });
});
