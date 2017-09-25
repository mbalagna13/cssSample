$(appReady);

function appReady() {
  $('.btn').click(function() {
    $('#red').toggleClass("blue")
  })
}
