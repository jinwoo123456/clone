$(" ul > li").mouseenter(function () {
  $(this).children(".list1").stop().slideDown(400);
});
$(" ul > li").mouseleave(function () {
  $(this).children(".list1").stop().slideUp(100);
});
AOS.init();
