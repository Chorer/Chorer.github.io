// build time:Mon Mar 25 2019 22:59:24 GMT+0800 (GMT+08:00)
(function(o){"use strict";o.fn.toTop=function(t){var i=this;var e=o(window);var s=o("html, body");var n=o.extend({autohide:true,offset:420,speed:500,position:true,right:15,bottom:30},t);i.css({cursor:"pointer"});if(n.autohide){i.css("display","none")}if(n.position){i.css({position:"fixed",right:n.right,bottom:n.bottom})}i.click(function(){s.animate({scrollTop:0},n.speed)});e.scroll(function(){var o=e.scrollTop();if(n.autohide){if(o>n.offset){i.fadeIn(n.speed)}else i.fadeOut(n.speed)}})}})(jQuery);$(".to-top").toTop({offset:100,right:2,bottom:202});
//rebuild by neat 