// build time:Mon May 13 2019 22:28:44 GMT+0800 (GMT+08:00)
$(document).ready(function(){FancyBoxStart()});function FancyBoxStart(){$("img").each(function(){var a=$(this);var t=a.parent("a");if(t.length==0){var e=a.attr("src");var r=e.lastIndexOf("?");if(r!=-1){e=e.substring(0,r)}t=a.wrap('<a href="'+e+'"></a>').parent("a")}t.attr("data-fancybox","images")});$().fancybox({selector:'[data-fancybox="images"]',thumbs:false,hash:true,loop:false,fullScreen:false,slideShow:false,protect:true})}
//rebuild by neat 