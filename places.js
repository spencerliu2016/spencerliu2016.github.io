// This code runs when the page loads
$(function() {

  $(".state").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().remove();
  })

})