// build time:Tue Jan 19 2021 23:57:53 GMT+0800 (GMT+08:00)
var post_toc=document.getElementsByClassName("post-toc")[0],toc=document.getElementsByClassName("toc")[0],H=0,Y=post_toc;while(Y){H+=Y.offsetTop;Y=Y.offsetParent}window.onscroll=function(){var t=document.body.scrollTop||document.documentElement.scrollTop;if(t>H){post_toc.style="position:fixed;top:5px;right:100px";toc.scrollTop=(t-H)/60}else{post_toc.style=""}};var $ol=$(".toc");var titleList=$(".post-content").find("h1,h2,h3,h4,h5,h6");$(window).scroll(function(t){var o=$(document).scrollTop();var e="";titleList.each(function(){var t=$(this);var s=t.offset().top;if(o>s-300){e="#"+t.attr("id")}else{return false}});var s=$ol.find(".actived");if(e&&s.attr("href")!==e){s.removeClass("actived");var l=$ol.find("[href='"+e+"']");l.addClass("actived")}});
//rebuild by neat 