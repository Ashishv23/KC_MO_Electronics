
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
jQuery(document).ready(function($) {
  var slideCount = $('.slider ul li').length;
  var slideWidth = $('.slider ul li').width() + 0;
  var slideHeight = $('.slider ul li').height() + 0;
  var sliderUlWidth = slideCount * slideWidth;
  
  $('.slider').css( {width: slideWidth, height: slideHeight });
  
  $('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth});
  
  function moveLeft() {
    $('.slider ul').animate({
        left: + slideWidth
    }, 1000, function () {
        $('.slider ul li:last-child').prependTo('.slider ul');
        $('.slider ul').css('left', '');
    });
  };
  
  function moveRight() {
    $('.slider ul').animate({
        left: - slideWidth
    }, 1000, function () {
        $('.slider ul li:first-child').appendTo('.slider ul');
        $('.slider ul').css('left', '');
    });
  };
  
  $('.left').click(function () {
    moveLeft();
  });

  $('.right').click(function () {
    moveRight();
  });
  
  setInterval(function () {
    moveRight();
  }, 10000);
});

var $item = $('.carousel .item');
var $wHeight = $(window).height();

$item.height($wHeight); 
$item.addClass('full-screen');

var $numberofSlides = $('.item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

