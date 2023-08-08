window.addEventListener('beforeunload', function() {
    document.querySelector('.page-transition').classList.add('fade-out');
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.page-transition').classList.add('fade-in');
  });
  