$('#nav a').hover(function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: '#00a6ff',
  }, 100);
}, function() {
  $(this).animate({
    backgroundColor: '#ddd',
    color: 'black'
  }, 50);
});
$('.project').hover(function() {
  $(this).animate({
    backgroundColor: '#00a6ff',
    color: 'white',
  }, 100);
}, function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: '#0053b3',
  }, 50);
});
function random(array) {
  if(typeof(array) == 'Object') {
    var rn = Math.floor(Math.random(0) * array.length);
  } else {
    console.log('Invalid type - random()');
  }
}
