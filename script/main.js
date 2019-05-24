$(document).ready(function(){
  $(".side_nav_profile").mouseover(function(){
    if($(".side_nav_tray_news").css('width') == '600px')
    {
      $(".side_nav_tray_news").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_profile").css("width", "600px");
    }
    else if($(".side_nav_tray_categories").css('width') == '600px')
    {
      $(".side_nav_tray_categories").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_profile").css("width", "600px");
    }
    else{
      $(".side_nav_tray_profile").css("width", "600px");
      $(".side_nav_tray_profile").css("transition", "0.7s all");
    }
  });
  $(".side_nav_tray_backButtonIconHolder").click(function(){
    $(".side_nav_tray_profile").css({
      "width": "0px"
    });
  });


  $(".side_nav_news").mouseover(function(){
    if($(".side_nav_tray_profile").css('width') == '600px')
    {
      $(".side_nav_tray_profile").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_news").css("width", "600px");
    }
    else if($(".side_nav_tray_categories").css('width') == '600px')
    {
      $(".side_nav_tray_categories").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_news").css("width", "600px");
    }
    else{
      $(".side_nav_tray_news").css("width", "600px");
      $(".side_nav_tray_news").css("transition", "0.7s all");
    }
  });
  $(".side_nav_tray_backButtonIconHolder").click(function(){
    $(".side_nav_tray_news").css("width", "0px");
    $(".side_nav_tray_news").css("transition", "0.7s all");
  });


  $(".side_nav_catagories").mouseover(function(){
    if($(".side_nav_tray_profile").css('width') == '600px')
    {
      $(".side_nav_tray_profile").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_categories").css("width", "600px");
    }
    else if($(".side_nav_tray_news").css('width') == '600px'){
      $(".side_nav_tray_news").css({
        "width": "0px",
        "transition": "0.01s all"
      });
      $(".side_nav_tray_categories").css("width", "600px");
    }
    else{
      $(".side_nav_tray_categories").css("width", "600px");
      $(".side_nav_tray_categories").css("transition", "0.7s all");
    }
  });
  $(".side_nav_tray_backButtonIconHolder").click(function(){
    $(".side_nav_tray_categories").css("width", "0px");
    $(".side_nav_tray_categories").css("transition", "0.7s all");
  });
});
