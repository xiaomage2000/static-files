//Xiaomage's Blog自定义JS代码

//回顶部
$.material.init();
$.scrollUp({
  scrollImg: true,
  scrollText: "回顶部"
});
$('#scrollUp').addClass('btn btn-info btn-fab btn-raised mdi-navigation-expand-less');

//显示CF CDN地理位置
$(document).ready($.get("/cdn-cgi/trace",
  function (data) {
    $("#cdn").text(data.match(/(colo=?)(\S*)/)[2]);
  }))

//鼠标滚轮向下 导航栏隐藏 性能问题 已废弃   
// $(document).scroll(function () {
//   var before = $(document).scrollTop();
//   var window_width = $(window).width();
//   $(document).scroll(function () {
//     var after = $(document).scrollTop();
//     if (before < after - 100) {
//       if (window_width > 991) {
//         $('.navbar').css({
//           "transform": 'translateY(-71px)',
//           "transition": 'all 0.25s',
//         });
//       } else if (window_width <= 991 && window_width >= 762) {
//         $('.navbar').css({
//           "transform": 'translateY(-109px)',
//           "transition": 'all 0.25s',
//         });
//       } else {
//         $('.navbar').css({
//           "transform": 'translateY(-60px)',
//           "transition": 'all 0.25s',
//         });
//       }
//       before = after;
//     };
//     if (before - 100 > after) {
//       $('.navbar').css({
//         "transform": 'translateY(0px)',
//         "transition": 'all 0.25s',
//       });
//       before = after;
//     };
//   });
// });

//向下滚动导航栏隐藏
function nav_display() {
  var window_width = $(window).width();
  var nav_marks = document.getElementsByName("nav-mark");
  if (window_width > 762) {
    for (var i = 0; i < (nav_marks.length - 1); i++) {
      nav_marks[i].setAttribute("data-toggle", "");
    }
  } else {
    for (var i = 0; i < (nav_marks.length - 1); i++) {
      nav_marks[i].setAttribute("data-toggle", "collapse");
    }
  }
}
window.onresize = nav_display;
window.onload = nav_display;

//fancybox灯箱
$(document).ready(function () {
  $(".fancybox").fancybox();
  $.fancybox.defaults.hash = false;
});

//socialshare分享
var $config = {
  url: window.location.href, // 网址，默认使用 
  source: 'Xiaomage\'s Blog',
  title: document.title, // 标题，默认读取  或者 <meta name="title" content="share.js" />
  origin: location.origin, // 分享 @ 相关 twitter 账号
  description: document.title, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
  image: (document.images[0] || 0).src || '', // 图片, 默认取网页中第一个img标签
  disabled: ['google', 'tencent', 'linkedin', 'diandian', 'douban'], // 禁用的站点
  wechatQrcodeTitle: '微信扫一扫', // 微信二维码提示文字
  wechatQrcodeHelper: '<p>扫一扫二维码，在手机上阅读~<br>点击右上角三个点，分享到朋友圈</p>'
};
socialShare('.social-share-cs', $config);


//Pjax定义函数
var pjax = new Pjax({
  elements: "a:not(.fancybox)",
  selectors: [
    ".col-md-9",
    ".billboard",
    ".title",
    ".placeholder",
    ".google_an1",
    ".google_an2",
    ".header-main",
    ".footer-nav",
  ],
  cacheBust: false,
  timeout: 20000,
});

//Pjax重载函数或加载完成执行的函数
document.addEventListener('pjax:complete', function () {
  var $config = {
    url: window.location.href, // 网址，默认使用 
    source: 'Xiaomage\'s Blog',
    title: document.title, // 标题，默认读取  或者 <meta name="title" content="share.js" />
    origin: location.origin, // 分享 @ 相关 twitter 账号
    description: document.title, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
    image: (document.images[0] || 0).src || '', // 图片, 默认取网页中第一个img标签
    disabled: ['google', 'tencent', 'linkedin', 'diandian', 'douban'], // 禁用的站点
    wechatQrcodeTitle: '微信扫一扫', // 微信二维码提示文字
    wechatQrcodeHelper: '<p>扫一扫二维码，在手机上阅读~<br>点击右上角三个点，分享到朋友圈</p>'
  };
  socialShare('.social-share-cs', $config);

  loadMeting();

  if (typeof Prism !== 'undefined') {
    Prism.highlightAll(true, null);
  }

  $.get("/cdn-cgi/trace",
    function (data) {
      $("#cdn").text(data.match(/(colo=?)(\S*)/)[2]);
    });
});

// 开始 PJAX请求 执行的函数
//显示加载中提示 
document.addEventListener('pjax:send', function () {
  document.getElementById('loading-status').innerHTML = "正在加载，请稍后...",
    $('.loading-status').css({
      "transform": 'translateY(100px)',
      "transition": 'all 0.25s',
    });
  NProgress.start();
  NProgress.set(0.3);
});

//Pjax请求成功执行的函数
document.addEventListener('pjax:success', function () {
  document.getElementById('loading-status').innerHTML = "页面加载完成~",
    $('.loading-status').css({
      "transform": 'translateY(-48px)',
      "transition": 'all 0.25s 1.5s',
    });
  NProgress.done();
});

//Pjax失败执行的函数
document.addEventListener('pjax:error', function () {
  document.getElementById('loading-status').innerHTML = "加载失败，请稍后再试~",

    $('.loading-status').css({
      "transform": 'translateY(-48px)',
      "transition": 'all 0.25s 1.5s',
    });

  NProgress.done();
});

//华为温馨提示
// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   var expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + "; " + expires;
// }
// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i].trim();
//     if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//   }
//   return "";
// }
// window.onload = function () {
//   var isOKnull = false;
//   var isHuawei = false;
//   var isOK = false;
//   if(getCookie("isHuaWeichecked")=="") {
//     isOKnull = true;
//   } else if(getCookie("isHuaWeichecked")=="true") {
//     isOK = true;
//   } else {
//     isOK = false;
//   }
//   var userAgentString = navigator.userAgent;
//   if(userAgentString.indexOf("HUAWEI")!=-1||userAgentString.indexOf("HONOR")!=-1) {
//     isHuawei = true;
//   }
//   if(isHuawei==true&isOK==false) {
//     $('#huaweiShow').modal('show');
//     console.log("展示提示");
//   }
//   if(isOKnull==true) {
//     setCookie("isHuaWeichecked","true",30);
//     console.log("设置cookies");
//   } 
// }
