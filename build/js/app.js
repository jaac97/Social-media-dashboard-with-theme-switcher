(function () {
  /*
    Toggle
    1.- Dark
    2.- Light
    */
  const btnToggle = document.querySelector('#btn--toggle');
  changeColor(btnToggle.value);

  btnToggle.addEventListener('change', e => {
    changeColor(e.target.value)
  });

  function changeColor(value) {
    const html = document.querySelector('html');
    if (parseInt(value) === 1) {
      html
        .classList
        .remove('light');
      html
        .classList
        .add('dark');
      return;
    } else if (parseInt(value) === 2) {
      html
        .classList
        .remove('dark');
      html
        .classList
        .add('light');
    }
  }
})();
