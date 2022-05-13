$(".obj1").hide();
$(".obj2").hide();
$(".start2").hide();
$(".one").hide();
$(".strawberrybush1").hide();
$(".strawberrypng").hide();
$(".questcompelted").css("display", "none");
$(".compelted").hide();
$(".potion").hide();
$(".nobuttonoutput").hide();
$(".picking").hide();
$(".comp").hide();

$(".start").dblclick(function() {
    $(".wannaplay").slideToggle();
    $(".end").fadeOut();
    $(".start").fadeOut();
    $(".obj1").slideDown();
    $(".start2").fadeIn();
});

$(".start2").dblclick(function() {
    $(".obj2").toggle();
    $(".obj1").hide();
    $(".start2").hide();
    $(".one").show();
});

$(".one").dblclick(function() {
    $(".strawberrybush1").show();
    $(".obj2").slideUp();
    $(".start2").fadeOut();
    $(".one").fadeOut();
    $(".picking").fadeIn();
});

$(".picking").dblclick(function() {
    $(".strawberrypng").show();
    $(".picking").hide();
    $(".strawberrybush1").hide();
    $(".comp").show();
});

$(".comp").click(function() {
    $("questcom").show();
    $(".strawberrypng").hide();
    $(".compelted").fadeIn();
    $(".comp").hide();
    $(".potion").fadeIn();
});

$(".end").dblclick(function() {
    $(".wannaplay").slideToggle();
    $(".start").fadeOut();
    $(".end").fadeOut();
    $(".nobuttonoutput").slideDown();

});