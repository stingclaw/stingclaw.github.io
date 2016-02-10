function init() {
  $('.projects').show();
  $('.blog').hide();
  $('.bacon').hide();
}

$('#item-1').click(function() {
  $('.projects').show();
  $('.blog').hide();
  $('.bacon').hide();
});

$('#item-2').click(function() {
  $('.projects').hide();
  $('.blog').show();
  $('.bacon').hide();
});

$('#item-3').click(function() {
  window.location.href = 'http://www.baconteam.com/';
  // $('.projects').hide();
  // $('.blog').hide();
  // $('.bacon').show();
});

$(document).ready(init);
