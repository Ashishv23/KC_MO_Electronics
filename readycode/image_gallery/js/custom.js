
$(function() {
   $("#projects_cats li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});


$(function() {
		var selectedClass = "";
		$("#projects_cats li a").click(function(e){
        e.preventDefault();
		selectedClass = $(this).attr("data-rel");
     $("#projects_images").fadeTo(100, 0.1);
		$("#projects_images img").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#projects_images").fadeTo(300, 1);
    }, 300);

	});
});
