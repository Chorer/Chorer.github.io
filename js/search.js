// build time:Mon Nov 04 2019 18:02:28 GMT+0800 (GMT+08:00)
var searchFunc=function(e,t,r){var a="<i id='local-search-close'>x</i>";$.ajax({url:e,dataType:"xml",success:function(e){var l=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var i=document.getElementById(t);var n=document.getElementById(r);i.addEventListener("input",function(){var e='<ul class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="";if(this.value.trim().length<=0){return}l.forEach(function(r){var a=true;var l=[];if(!r.title||r.title.trim()===""){r.title="Untitled"}var i=r.title.trim().toLowerCase();var n=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var s=r.url;var c=-1;var u=-1;var o=-1;if(n!==""){t.forEach(function(e,t){c=i.indexOf(e);u=n.indexOf(e);if(c<0&&u<0){a=false}else{if(u<0){u=0}if(t==0){o=u}}})}else{a=false}if(a){e+="<li><a href='"+s+"' class='search-result-title'>"+i+"</a>";var f=r.content.trim().replace(/<[^>]+>/g,"");if(o>=0){var h=o-20;var v=o+80;if(h<0){h=0}if(h==0){v=100}if(v>f.length){v=f.length}var m=f.substr(h,v);t.forEach(function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<em class="search-keyword">'+e+"</em>")});e+='<p class="search-result">'+m+"...</p>"}e+="</li>"}});e+="</ul>";if(e.indexOf("<li>")===-1){return n.innerHTML=a+"<ul><span class='local-search-empty'>No search results<span></ul>"}n.innerHTML=a+e})}});$(document).on("click","#local-search-close",function(){$("#local-search-input").val("");$("#local-search-result").html("")})};
//rebuild by neat 