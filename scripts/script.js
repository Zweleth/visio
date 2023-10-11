$(".slider > div:gt(0)").hide();

setInterval(function () {
  $(".slider > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slider");
}, 7000);




$(".dot1").click(function () {
  $(".slider > div:first").hide();
  $(".slider > .obj1").fadeIn(1000);


});
$(".dot2").click(function () {
  $(".slider > div:first").hide();
  $(".slider > .obj2").fadeIn(1000);
  

});
$(".dot3").click(function () {
  $(".slider > div:first").hide();
  $(".slider > .obj3").fadeIn(1000);


});
$(".dot4").click(function () {
  $(".slider > div:first").hide();
  $(".slider > .obj4").fadeIn(1000);

});


$(".next").click(function () {
  // action goes here!!

  $(".slider > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slider");
});
