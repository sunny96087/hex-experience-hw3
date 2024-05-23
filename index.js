$(document).ready(function(){
    // 當銀幕小於768px時 將導覽列class加入none 按下按鈕toggle
    function checkScreenSize() {
      if ($(window).width() < 768) {
         $(".nav-bar-list").addClass("close"); 
      } else {
        $(".nav-bar-list").removeClass("close"); 
      }
    }

    checkScreenSize();
    
    // 当窗口大小发生变化时检测屏幕大小
    $(window).resize(function() {
      checkScreenSize();
    });

    $(".navbar-btn").click(function(){
        $(".nav-bar-list").toggleClass("close");
      });

 });