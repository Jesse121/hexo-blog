function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s+|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function gotoTop(e,t){e=e||.1,t=t||10;var n=(document.getElementById("totop"),document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||0),o=1+e;if(window.scrollTo(0,Math.floor(n/o)),n>0){var s="gotoTop("+e+", "+t+")";window.setTimeout(s,t)}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s+|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function gotoTop(e,t){e=e||.1,t=t||10;var n=(document.getElementById("totop"),document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||0),o=1+e;if(window.scrollTo(0,Math.floor(n/o)),n>0){var s="gotoTop("+e+", "+t+")";window.setTimeout(s,t)}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s+|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function gotoTop(e,t){e=e||.1,t=t||10;var n=(document.getElementById("totop"),document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||0),o=1+e;if(window.scrollTo(0,Math.floor(n/o)),n>0){var s="gotoTop("+e+", "+t+")";window.setTimeout(s,t)}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s+|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function gotoTop(e,t){e=e||.1,t=t||10;var n=(document.getElementById("totop"),document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||0),o=1+e;if(window.scrollTo(0,Math.floor(n/o)),n>0){var s="gotoTop("+e+", "+t+")";window.setTimeout(s,t)}}!function(){var e=document.querySelectorAll("a");[].slice.call(e).map(function(e){e.setAttribute("target","_blank")})}()(function(){function e(e){if(u)e(u);else{var t=new XMLHttpRequest;t.open("GET","/blog/content.json",!0),t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response||this.responseText);u=t instanceof Array?t:t.posts,e(u)}else console.error(this.statusText)},t.onerror=function(){console.error(this.statusText)},t.send()}}function t(e,t){return n(e.title,t)||e.tags.some(function(e){return n(e.name,t)})||n(e.text,t)}function n(e,t){return t.lastIndex=0,t.test(e)}function o(e){var t="";t=e.length?e.map(function(e){return s(g,{title:e.title,path:e.path,date:new Date(e.date).toLocaleDateString(),tags:e.tags.map(function(e){return"<span>"+e.name+"</span>"}).join("")})}).join(""):'<div class="tips"><i class="fa fa-empty"></i><p>Results not found!</p></div>',p.innerHTML=t}function s(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}function c(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function a(e,t){c(e,t)||(e.className+=" "+t)}function l(e,t){if(c(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function d(n){var s=this.value.trim();if(s){var c=new RegExp(s.replace(/[ ]/g,"|"),"gmi");e(function(e){o(e.filter(function(e){return t(e,c)}))}),n.preventDefault(),l(f,"hide"),l(h,"hide"),m.onfocus=function(){l(f,"hide"),l(h,"hide")}}}var i,r,u,m=document.getElementById("search-key"),f=(document.getElementById("search-form"),document.getElementById("result-wrap")),h=document.getElementById("result-mask"),p=document.getElementById("search-result"),g=document.getElementById("search-tpl").innerHTML;window.innerWidth?i=parseInt(window.innerWidth):document.body&&document.body.clientWidth&&(i=parseInt(document.body.clientWidth)),window.innerHeight?r=parseInt(window.innerHeight):document.body&&document.body.clientHeight&&(r=parseInt(document.body.clientHeight)),h.style.width=i+"px",h.style.height=r+"px",m.onfocus=function(){m.addEventListener("input",d)},h.onclick=function(){a(f,"hide"),a(h,"hide")}})(),function(){if("standalone"in window.navigator&&window.navigator.standalone){var e;document.addEventListener("click",function(t){for(e=t.target;"A"!==e.nodeName&&"HTML"!==e.nodeName;)e=e.parentNode;"href"in e&&-1!==e.href.indexOf("http")&&(e.href.indexOf(document.location.host),!0)&&(t.preventDefault(),document.location.href=e.href)},!1)}}(),totop.onclick=function(){var e=document.getElementById("totop");return gotoTop(.1,20),addClass(e,"launch"),!1},window.onscroll=function(){var e,t=document.getElementById("totop"),n=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY,o=document.getElementById("toc"),s=document.getElementById("header").offsetHeight+document.getElementById("sidebar").offsetHeight;n>=300?addClass(t,"show"):(removeClass(t,"show"),removeClass(t,"launch")),n>=s?addClass(o,"fixed"):removeClass(o,"fixed"),hasClass(o,"fixed")&&(o.style.width=document.getElementById("sidebar").offsetWidth+"px"),document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(e=document.documentElement.clientHeight),o.offsetHeight>e&&addClass(o,"scroll")},window.onscroll=function(){var e=document.getElementById("totop");(document.documentElement.scrollTop||document.body.scrollTop||window.scrollY)>=300?addClass(e,"show"):(removeClass(e,"show"),removeClass(e,"launch"))},totop.onclick=function(){var e=document.getElementById("totop");return gotoTop(.1,20),addClass(e,"launch"),!1},function(){var e=document.querySelectorAll("a");[].slice.call(e).map(function(e){e.setAttribute("target","_blank")})}()(function(){function e(e){if(u)e(u);else{var t=new XMLHttpRequest;t.open("GET","/blog/content.json",!0),t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response||this.responseText);u=t instanceof Array?t:t.posts,e(u)}else console.error(this.statusText)},t.onerror=function(){console.error(this.statusText)},t.send()}}function t(e,t){return n(e.title,t)||e.tags.some(function(e){return n(e.name,t)})||n(e.text,t)}function n(e,t){return t.lastIndex=0,t.test(e)}function o(e){var t="";t=e.length?e.map(function(e){return s(g,{title:e.title,path:e.path,date:new Date(e.date).toLocaleDateString(),tags:e.tags.map(function(e){return"<span>"+e.name+"</span>"}).join("")})}).join(""):'<div class="tips"><i class="fa fa-empty"></i><p>Results not found!</p></div>',p.innerHTML=t}function s(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}function c(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function a(e,t){c(e,t)||(e.className+=" "+t)}function l(e,t){if(c(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function d(n){var s=this.value.trim();if(s){var c=new RegExp(s.replace(/[ ]/g,"|"),"gmi");e(function(e){o(e.filter(function(e){return t(e,c)}))}),n.preventDefault(),l(f,"hide"),l(h,"hide"),m.onfocus=function(){l(f,"hide"),l(h,"hide")}}}var i,r,u,m=document.getElementById("search-key"),f=(document.getElementById("search-form"),document.getElementById("result-wrap")),h=document.getElementById("result-mask"),p=document.getElementById("search-result"),g=document.getElementById("search-tpl").innerHTML;window.innerWidth?i=parseInt(window.innerWidth):document.body&&document.body.clientWidth&&(i=parseInt(document.body.clientWidth)),window.innerHeight?r=parseInt(window.innerHeight):document.body&&document.body.clientHeight&&(r=parseInt(document.body.clientHeight)),h.style.width=i+"px",h.style.height=r+"px",m.onfocus=function(){m.addEventListener("input",d)},h.onclick=function(){a(f,"hide"),a(h,"hide")}})(),function(){if("standalone"in window.navigator&&window.navigator.standalone){var e;document.addEventListener("click",function(t){for(e=t.target;"A"!==e.nodeName&&"HTML"!==e.nodeName;)e=e.parentNode;"href"in e&&-1!==e.href.indexOf("http")&&(e.href.indexOf(document.location.host),!0)&&(t.preventDefault(),document.location.href=e.href)},!1)}}(),totop.onclick=function(){var e=document.getElementById("totop");return gotoTop(.1,20),addClass(e,"launch"),!1},window.onscroll=function(){var e,t=document.getElementById("totop"),n=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY,o=document.getElementById("toc"),s=document.getElementById("header").offsetHeight+document.getElementById("sidebar").offsetHeight;n>=300?addClass(t,"show"):(removeClass(t,"show"),removeClass(t,"launch")),n>=s?addClass(o,"fixed"):removeClass(o,"fixed"),hasClass(o,"fixed")&&(o.style.width=document.getElementById("sidebar").offsetWidth+"px"),document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(e=document.documentElement.clientHeight),o.offsetHeight>e&&addClass(o,"scroll")},window.onscroll=function(){var e=document.getElementById("totop");(document.documentElement.scrollTop||document.body.scrollTop||window.scrollY)>=300?addClass(e,"show"):(removeClass(e,"show"),removeClass(e,"launch"))},totop.onclick=function(){var e=document.getElementById("totop");return gotoTop(.1,20),addClass(e,"launch"),!1};