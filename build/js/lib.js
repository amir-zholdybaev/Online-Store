var img=document.getElementById("img"),title=document.querySelectorAll("#title"),old=document.querySelectorAll("#old"),newP=document.querySelectorAll("#new"),buy=document.querySelectorAll("#buy"),comp=document.querySelectorAll("#comp"),elWidth=263,perTitle=1500/elWidth,perOld=1600/elWidth,perNew=2e3/elWidth,perBuy=1500/elWidth,perComp=1400/elWidth;function responsiveFont(e,t,o){var i=e.offsetWidth*o/100;t.forEach(function(e){e.style="font-size: "+i.toFixed(2)+"px;"})}function responsiveFonts(){responsiveFont(img,title,perTitle),responsiveFont(img,old,perOld),responsiveFont(img,newP,perNew),responsiveFont(img,buy,perBuy),responsiveFont(img,comp,perComp)}function pagination(t){(t=document.querySelectorAll(t)).forEach(function(e){e.addEventListener("click",function(){t.forEach(function(e){e.classList.remove("active")}),this.classList.add("active")})})}function tab(e,o){var i,e=document.querySelectorAll(e),o=document.querySelectorAll(o);function t(){var t;e.forEach(function(e){e.classList.remove("active")}),this.classList.add("active"),i=this.getAttribute("data-tab-name"),t=i,o.forEach(function(e){e.classList.contains(t)?e.classList.add("active"):e.classList.remove("active")})}e.forEach(function(e){e.addEventListener("click",t)})}