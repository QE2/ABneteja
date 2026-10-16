document.addEventListener('DOMContentLoaded', function () {
  var dec = function (s) { return atob(s).split('').reverse().join(''); };
  document.querySelectorAll('.js-contacte').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.dataset.revelat) return;
      e.preventDefault();
      el.textContent = dec(el.dataset.t);
      el.href = (el.dataset.tipus === 'tel' ? 'tel:' : 'mailto:') + dec(el.dataset.v);
      el.dataset.revelat = '1';
    });
  });
});
