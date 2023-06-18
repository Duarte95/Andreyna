const options = document.querySelectorAll('.departamentos');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (option.classList.contains('selected')) {
      option.classList.remove('selected');
    } else {
      options.forEach(option => {
        option.classList.remove('selected');
      });
      option.classList.add('selected');
    }
  });
});