let list1 = document.querySelector(".list1");

let hd = () => {
  $(".list1").hide();
};

$(" ul > li").mouseenter(function () {
  $(this).children(".list1").stop().slideDown(400);
  $(this).children(".list1").show();
});
$(" ul > li").mouseleave(function () {
  $(this).children(".list1").stop().slideUp(100);
});

hd();
AOS.init();
