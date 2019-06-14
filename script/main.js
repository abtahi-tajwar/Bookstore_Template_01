var featured_books_margin = 0;
var general_books_margin = 0;

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

  $(".featured_books_left_move_button").click(function(){
    if(featured_books_margin < 0)
    {
      console.log("Second "+featured_books_margin);
      featured_books_margin += 211;
      $(".featured_books").css("marginLeft", featured_books_margin+"px");
    }
  });
  $(".featured_books_right_move_button").click(function(){
    if(featured_books_margin <= -633)
    {
      console.log("First "+featured_books_margin);
      featured_books_margin = 0;
      $(".featured_books").css("marginLeft", featured_books_margin+"px");
    }
    else{
      console.log("Second "+featured_books_margin);
      featured_books_margin -= 211;
      $(".featured_books").css("marginLeft", featured_books_margin+"px");
    }
  });

  $("#general_Books_move_button_left").click(function(){
    if(general_books_margin < 0)
    {
      console.log("Second "+featured_books_margin);
      general_books_margin += 178;
      $(".general_Books_bookslider_tray").css("marginLeft", general_books_margin+"px");
    }
  });
  $("#general_Books_move_button_right").click(function(){
    if(general_books_margin <= -534)
    {
      console.log("First "+featured_books_margin);
      general_books_margin = 0;
      $(".general_Books_bookslider_tray").css("marginLeft", general_books_margin+"px");
    }
    else{
      console.log("Second "+featured_books_margin);
      general_books_margin -= 178;
      $(".general_Books_bookslider_tray").css("marginLeft", general_books_margin+"px");
    }
  });
});
