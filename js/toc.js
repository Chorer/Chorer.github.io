// build time:Sat Mar 30 2019 17:03:25 GMT+0800 (GMT+08:00)
var oDiv=document.getElementsByClassName("toc")[0],H=0,Y=oDiv;while(Y){H+=Y.offsetTop;Y=Y.offsetParent}window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;if(e>H){oDiv.style="position:fixed;top:-18px;"}else{oDiv.style=""}};var txt=document.createElement("li");oDiv.insertBefore(txt,oDiv.children[0]);txt.className="list_title";txt.innerHTML="目录";var topper=document.createElement("li");topper.className="toTop";topper.innerHTML="To the Top";oDiv.appendChild(topper);
//rebuild by neat 