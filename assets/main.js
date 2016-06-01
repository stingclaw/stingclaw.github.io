$('#nav a').hover(function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: '#BE8046',
  }, 200);
}, function() {
  $(this).animate({
    backgroundColor: '#ddd',
    color: 'black'
  }, 200);
});
$('.project').hover(function() {
  $(this).animate({
    backgroundColor: '#BE8046',
    color: 'white',
  }, 200);
}, function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: '#794311',
  }, 200);
});
function random(array) {
  if(typeof(array) == 'Object') {
    var rn = Math.floor(Math.random(0) * array.length);
  } else {
    console.log('Invalid type - random()');
  }
}
