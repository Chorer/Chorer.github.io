// build time:Sun Jun 02 2019 10:17:57 GMT+0800 (GMT+08:00)
$(document).ready(function(){var a=CONFIG.algolia;var e=a.applicationID&&a.apiKey&&a.indexName;if(!e){window.console.error("Algolia Settings are invalid.");return}var t=instantsearch({appId:a.applicationID,apiKey:a.apiKey,indexName:a.indexName,searchFunction:function(a){var e=$("#algolia-search-input").find("input");if(e.val()){a.search()}}});[instantsearch.widgets.searchBox({container:"#algolia-search-input",placeholder:a.labels.input_placeholder}),instantsearch.widgets.hits({container:"#algolia-hits",hitsPerPage:a.hits.per_page||10,templates:{item:function(a){return'<a href="'+CONFIG.root+a.path+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="algolia-hits-empty">'+a.labels.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}),instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(e){var t=a.labels.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered">'+'  <img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia" />'+"</span>"+"<hr />"}}}),instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})].forEach(t.addWidget,t);t.start();$(".popup-trigger").on("click",function(a){a.stopPropagation();$("body").append('<div class="popoverlay">').css("overflow","hidden");$(".popup").toggle();$("#algolia-search-input").find("input").focus()});$(".popup-btn-close").click(function(){$(".popup").hide();$(".popoverlay").remove();$("body").css("overflow","")})});$(document).ready(function(){if($("#local-search-input").length===0){return}var a=false;var e="search.xml";if(e.length==0){e="search.xml"}var t="/"+e;function i(){$("body").append('<div class="popoverlay">').css("overflow","hidden");$(".popup").toggle()}var s=function(e,t,s){"use strict";$.ajax({url:e,dataType:"xml",async:true,success:function(e){a=true;$(".popup").detach().appendTo(".header-inner");var r=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var n=document.getElementById(t);var l=document.getElementById(s);n.addEventListener("input",function(){var a=0;var e='<ul class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s\-]+/);l.innerHTML="";if(this.value.trim().length>1){r.forEach(function(i){var s=true;var r=[];var n=i.title.trim().toLowerCase();var l=i.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var o=i.url;var c=-1;var p=-1;var u=-1;if(n!=""&&l!=""){t.forEach(function(a,e){c=n.indexOf(a);p=l.indexOf(a);if(c<0&&p<0){s=false}else{if(p<0){p=0}if(e==0){u=p}}})}if(s){a+=1;e+="<li><a href='"+o+"' class='search-result-title'>"+n+"</a>";var f=i.content.trim().replace(/<[^>]+>/g,"");if(u>=0){var d=u-20;var g=u+80;if(d<0){d=0}if(d==0){g=50}if(g>f.length){g=f.length}var h=f.substring(d,g);t.forEach(function(a){var e=new RegExp(a,"gi");h=h.replace(e,'<b class="search-keyword">'+a+"</b>")});e+='<p class="search-result">'+h+"...</p>"}e+="</li>"}})}e+="</ul>";if(a==0){e='<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>'}if(t==""){e='<div id="no-result"><i class="fa fa-search fa-5x" /></div>'}l.innerHTML=e});i()}})};$(".popup-trigger").mousedown(function(e){e.stopPropagation();if(a==false){s(t,"local-search-input","local-search-result")}else{i()}});$(".popup-btn-close").click(function(a){$(".popup").hide();$(".popoverlay").remove();$("body").css("overflow","")});$(".popup").click(function(a){a.stopPropagation()})});
//rebuild by neat 