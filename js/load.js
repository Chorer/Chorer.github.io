// build time:Wed Jul 03 2019 17:12:49 GMT+0800 (GMT+08:00)
var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if($(".local-search").length&&!isMobile.any()){$.getScript("/js/search.js",function(){searchFunc("/search.xml","local-search-input","local-search-result")})}
//rebuild by neat 