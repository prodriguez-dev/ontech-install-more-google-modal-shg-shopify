window.onload = function () {

  // Get DOM Elements

  var ontInstMorGoogBtn = document.querySelector('#ont-in-mr-gl-launch-btn');
  var ontInstMorGoogCloseBtn = document.querySelector('#ont-in-mr-gl-modal-close');
  var ontInstMorGoogModal = document.querySelector('.ont-in-mr-gl-modal-overlay');
  var stickyZfix = document.querySelector('.sticky');

  // Events
  ontInstMorGoogBtn.addEventListener('click', ontOpenInstMorGoogModal);
  ontInstMorGoogCloseBtn.addEventListener('click', ontCloseInstMorGoogModal);
  window.addEventListener('click', outsideClick);

  // Open
  function ontOpenInstMorGoogModal(e) {
    e.preventDefault();
    ontInstMorGoogModal.style.display = 'block';
    var body = document.body;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.height = '100vh';
    stickyZfix.style.zIndex = '1';
  }

  // Close
  function ontCloseInstMorGoogModal() {
    var body = document.body;
    var scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    ontInstMorGoogModal.style.display = 'none';
    stickyZfix.style.zIndex = '5';
  }

  // Close If Outside Click
  function outsideClick(e) {
    if (e.target == ontInstMorGoogModal) {
      var body = document.body;
      var scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      ontInstMorGoogModal.style.display = 'none';
      stickyZfix.style.zIndex = '5';
    }
  }

  window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', '${window.scrollY}px');
  });

};