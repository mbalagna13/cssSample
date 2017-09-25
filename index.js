$(appReady);

function appReady() {
  $('.btn').click(function() {
    $('#red').toggleClass("blue")
  });


  $('.red').on("mouseover", function() {
    console.log("You hovered over stuff in red");
  })

  $('.addStuff').click(function() {
      $('.red').append("<p>Stuff</p>")
  })
}
