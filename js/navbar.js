// build time:Wed Jun 05 2019 16:27:39 GMT+0800 (GMT+08:00)
var myNav=document.getElementsByClassName("menu")[0].getElementsByClassName("menu-item-link");var myURL=document.location.href;var home_link_text=document.getElementById("homelink").getAttribute("data-link");if(myURL==home_link_text||myURL.indexOf("page")!=-1){myNav[0].className="menu-item-link2"}else{myNav[0].className="menu-item-link";for(var i=1;i<myNav.length;i++){var links=myNav[i].getAttribute("href");if(myURL.indexOf(links)!=-1){myNav[i].className="menu-item-link2"}}}
//rebuild by neat 