// build time:Sun Jun 02 2019 11:17:31 GMT+0800 (GMT+08:00)
var oDiv=document.getElementsByClassName("toc")[0],H=0,Y=oDiv;while(Y){H+=Y.offsetTop;Y=Y.offsetParent}window.onscroll=function(){var t=document.body.scrollTop||document.documentElement.scrollTop;if(t>H){oDiv.style="position:fixed;top:-18px;"}else{oDiv.style=""}};var catalog=document.getElementById("post-catalog-text");var txt=document.createElement("li");txt.className="real-catalog-text";txt.innerHTML='<i class="fa fa-list"></i>'+catalog.getAttribute("data-catalog");oDiv.insertBefore(txt,oDiv.children[0]);var toTop=document.getElementById("post-toTop-text");var topper=document.createElement("li");topper.className="real-toTop-text";topper.innerHTML='<i class="fa fa-chevron-circle-up"></i>'+toTop.getAttribute("data-toTop");oDiv.appendChild(topper);var $ol=$(".toc");var titleList=$(".post-content").find("h1,h2,h3,h4,h5,h6");$(window).scroll(function(t){var e=$(document).scrollTop();var o="";titleList.each(function(){var t=$(this);var a=t.offset().top;if(e>a-300){o="#"+t.attr("id")}else{return false}});var a=$ol.find(".actived");if(o&&a.attr("href")!==o){a.removeClass("actived");var l=$ol.find("[href='"+o+"']");l.children(".toc-text").addClass("actived")}});
//rebuild by neat 