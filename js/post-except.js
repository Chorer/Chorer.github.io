// build time:Tue Mar 17 2020 17:01:28 GMT+0800 (GMT+08:00)
var cards=document.querySelectorAll(".post-content");for(var j=0;j<cards.length;j++){if(cards[j].querySelectorAll("img").length>0){cards[j].classList.add("post-content-padding")}else{cards[j].classList.add("post-content-noimg")}if(cards[j].querySelectorAll("blockquote").length>0){cards[j].classList.add("post-content-quote")}if(!cards[j].querySelectorAll("p").length){if(cards[j].children[0].children[0]){cards[j].children[0].children[0].style.display="block"}}}
//rebuild by neat 