$(document).ready(function(){
    // 當銀幕小於768px時 將導覽列class加入close 按下按鈕toggle
    function checkScreenSize() {
      if ($(window).width() < 768) {
         $(".nav-bar-list").addClass("close");
         $(".hamburger").removeClass("close"); 
         $(".closure").addClass("close");
      } else {
        $(".nav-bar-list").removeClass("close"); 
      }
    }

    checkScreenSize();
    
    // 當銀幕大小發生變化時檢測大小
    $(window).resize(function() {
      checkScreenSize();
    });

    $(".navbar-btn").click(function(){
        $(".nav-bar-list").toggleClass("close");
        $(".hamburger").toggleClass("close");
        $(".closure").toggleClass("close");
      });

 });