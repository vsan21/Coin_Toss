$(document).ready(function() {
  $('#flipBtn').click(function() {
    //generate random number from 0 to 100
    var num = Math.floor(Math.random() * 100);
    console.log(num);

    //if random number < 50, show heads (otherwise tails)
    if(num < 50) {
      $('#heads').show();
      $('#tails').hide();
    } else {
      $('#tails').show();
      $('#heads').hide();
    }
  })
});
