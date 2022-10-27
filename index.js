var rating = 0;

$(".rating .circle").click(function() {
  $(".rating .circle").removeClass("active");
  $(this).addClass("active");

  rating = $(this).text();
});

$("button").click(function() {
  $(".ratingSection").css("display", "none");
  $(".thankYouSection").css("display", "block");
  $(".selectedRating").text(rating);
})
