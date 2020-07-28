// Get DOM Elements
var ontModalMembBtn = document.querySelector('#ont-modal-mem-btn');
var ontCloselMembBtn = document.querySelector('.ont-close-mem');
var ontModalMemb = document.querySelector('#ont-modal-mem');
var stickyZfix = document.querySelector('.sticky');

// Events
ontModalMembBtn.addEventListener('click', ontOpenModalMem);
ontCloselMembBtn.addEventListener('click', ontCloselMembModal);
window.addEventListener('click', outsideClick);

// Open
function ontOpenModalMem() {
  ontModalMemb.style.display = 'block';
  var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  var body = document.body;
  body.style.position = 'fixed';
  body.style.width = '100%';
  body.style.top = '-${scrollY}';
  stickyZfix.style.zIndex = '1'
}

// Close
function ontCloselMembModal() {
  var body = document.body;
  var scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  ontModalMemb.style.display = 'none';
  stickyZfix.style.zIndex = '5'
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == ontModalMemb) {
    var body = document.body;
    var scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    ontModalMemb.style.display = 'none';
    stickyZfix.style.zIndex = '5'
  }
}

window.addEventListener('scroll', function () {
  document.documentElement.style.setProperty('--scroll-y', '${window.scrollY}px');
});

