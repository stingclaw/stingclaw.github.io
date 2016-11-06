$('#nav a').hover(function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: '#00a6ff',
  }, 200);
}, function() {
  $(this).animate({
    backgroundColor: '#ddd',
    color: 'black'
  }, 200);
});
$('.project').hover(function() {
  $(this).animate({
    backgroundColor: '#00a6ff',
    color: 'white',
  }, 200);
}, function() {
  $(this).animate({
    backgroundColor: '#f5f5f5',
    color: 'darker',
  }, 200);
});
function random(array) {
  if(typeof(array) == 'Object') {
    var rn = Math.floor(Math.random(0) * array.length);
  } else {
    console.log('Invalid type - random()');
  }
}
