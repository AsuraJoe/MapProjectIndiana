$description = $(".description");


  $('.enabled').hover(function() {
    $(this).attr("class", "enabled heyo");
    $description.addClass('active');
    $description.html($(this).attr('title'));
  }, function() {
    $description.removeClass('active');
  });
  $('.enabled').click(function() {
      $("#countyName").html($(this).attr('title'));
  })

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
  
});