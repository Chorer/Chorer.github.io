// build time:Thu Mar 28 2019 13:03:37 GMT+0800 (GMT+08:00)
var myNav=document.getElementsByClassName("menu")[0].getElementsByClassName("menu-item-link");var myURL=document.location.href;for(var i=1;i<myNav.length;i++){var links=myNav[i].getAttribute("href");if(myURL.indexOf(links)!=-1){myNav[i].className="menu-item-link2"}}var home_link="https://chorer.github.io";if(1){myNav[0].className="menu-item-link2"}
//rebuild by neat 