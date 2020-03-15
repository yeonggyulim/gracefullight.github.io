HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={wrapImageWithFancyBox:function(){document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(e=>{var t=$(e),a=t.attr("data-src")||t.attr("src"),o=t.wrap(`<a class="fancybox fancybox.image" href="${a}" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`).parent("a");t.is(".post-gallery img")?o.attr("data-fancybox","gallery").attr("rel","gallery"):t.is(".group-picture img")?o.attr("data-fancybox","group").attr("rel","group"):o.attr("data-fancybox","default").attr("rel","default");var n=t.attr("title")||t.attr("alt");n&&(o.append(`<p class="image-caption">${n}</p>`),o.attr("title",n).attr("data-caption",n))}),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){document.querySelectorAll(".exturl").forEach(e=>{let t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})},registerCopyCode:function(){document.querySelectorAll("figure.highlight").forEach(e=>{const t=document.createElement("div");e.wrap(t),t.classList.add("highlight-container"),t.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-clipboard"></i></div>');var a=e.parentNode.querySelector(".copy-btn");a.addEventListener("click",e=>{var t=e.currentTarget,a=[...t.parentNode.querySelectorAll(".code .line")].map(e=>e.innerText).join("\n"),o=document.createElement("textarea");o.style.top=window.scrollY+"px",o.style.position="absolute",o.style.opacity="0",o.readOnly=!0,o.value=a,document.body.append(o);const n=document.getSelection(),r=n.rangeCount>0&&n.getRangeAt(0);o.select(),o.setSelectionRange(0,a.length),o.readOnly=!1;var i=document.execCommand("copy");CONFIG.copycode.show_result&&(t.querySelector("i").className=i?"fa fa-check":"fa fa-times"),o.blur(),t.blur(),r&&(n.removeAllRanges(),n.addRange(r)),document.body.removeChild(o)}),a.addEventListener("mouseleave",e=>{setTimeout(()=>{e.target.querySelector("i").className="fa fa-clipboard"},300)})})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.wrap(t)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(e=>{if(["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(t=>e.src.includes(t))&&!e.parentNode.matches(".video-container")){const t=document.createElement("div");t.className="video-container",e.wrap(t);let a=Number(e.width),o=Number(e.height);a&&o&&(e.parentNode.style.paddingTop=o/a*100+"%")}})},registerScrollPercent:function(){var e=document.querySelector(".back-to-top"),t=document.querySelector(".reading-progress-bar");window.addEventListener("scroll",()=>{if(e||t){var a=document.querySelector(".container").offsetHeight,o=window.innerHeight,n=a>o?a-o:document.body.scrollHeight-o,r=Math.min(100*window.scrollY/n,100);e&&(e.classList.toggle("back-to-top-on",window.scrollY>50),e.querySelector("span").innerText=Math.round(r)+"%"),t&&(t.style.width=r.toFixed(2)+"%")}}),e&&e.addEventListener("click",()=>{window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:0})})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();var t=e.currentTarget;if(!t.classList.contains("active")){[...t.parentNode.children].forEach(e=>{e.classList.remove("active")}),t.classList.add("active");var a=document.getElementById(t.querySelector("a").getAttribute("href").replace("#",""));[...a.parentNode.children].forEach(e=>{e.classList.remove("active")}),a.classList.add("active"),a.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",({data:e})=>{if("string"==typeof e&&e.includes("ciu_embed")){var t=e.split(":")[1],a=e.split(":")[2];document.querySelector(`iframe[data-feature=${t}]`).style.height=parseInt(a,10)+5+"px"}},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item").forEach(e=>{var t=e.querySelector("a[href]");if(t){var a=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),o=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname);e.classList.toggle("menu-item-active",t.hostname===location.hostname&&(a||o))}})},registerSidebarTOC:function(){const e=document.querySelectorAll(".post-toc li"),t=[...e].map(e=>{var t=e.querySelector("a.nav-link");return t.addEventListener("click",e=>{e.preventDefault();var t=document.getElementById(e.currentTarget.getAttribute("href").replace("#","")).getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:t+10})}),document.getElementById(t.getAttribute("href").replace("#",""))});var a=document.querySelector(".post-toc-wrap");!function o(n){n=Math.floor(n+1e4);let r=new IntersectionObserver((r,i)=>{let c=document.documentElement.scrollHeight+100;if(c>n)return i.disconnect(),void o(c);let l=function(e){let a=0,o=e[a];if(o.boundingClientRect.top>0)return 0===(a=t.indexOf(o.target))?0:a-1;for(;a<e.length;a++){if(!(e[a].boundingClientRect.top<=0))return t.indexOf(o.target);o=e[a]}return t.indexOf(o.target)}(r);!function(e){if(!e.classList.contains("active-current")){document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current");for(var t=e.parentNode;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;window.anime({targets:a,duration:200,easing:"linear",scrollTop:a.scrollTop-a.offsetHeight/2+e.getBoundingClientRect().top-a.getBoundingClientRect().top})}}(e[l])},{rootMargin:n+"px 0px -100% 0px",threshold:0});t.forEach(e=>{e&&r.observe(e)})}(document.documentElement.scrollHeight)},hasMobileUA:function(){let e=navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},supportsPDFs:function(){let e=navigator.userAgent,t=e.includes("irefox")&&parseInt(e.split("rv:")[1].split(".")[0],10)>18,a=void 0!==navigator.mimeTypes["application/pdf"],o=/iphone|ipad|ipod/i.test(e.toLowerCase());return t||a&&!o},initSidebarDimension:function(){var e=document.querySelector(".sidebar-nav"),t="none"!==e.style.display?e.offsetHeight:0,a=CONFIG.sidebar.offset||12,o=CONFIG.back2top.enable&&CONFIG.back2top.sidebar?document.querySelector(".back-to-top").offsetHeight:0,n=2*CONFIG.sidebar.padding+t+o;"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||(n+=2*a-22);var r=document.body.offsetHeight-n+"px";document.querySelector(".site-overview-wrap").style.maxHeight=r,document.querySelector(".post-toc-wrap").style.maxHeight=r},updateSidebarPosition:function(){var e=document.querySelector(".sidebar-nav"),t=document.querySelector(".post-toc");if(t?(e.style.display="",e.classList.add("motion-element"),document.querySelector(".sidebar-nav-toc").click()):(e.style.display="none",e.classList.remove("motion-element"),document.querySelector(".sidebar-nav-overview").click()),NexT.utils.initSidebarDimension(),this.isDesktop()&&"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme){var a=CONFIG.page.sidebar;"boolean"!=typeof a&&(a="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&t),a&&window.dispatchEvent(new Event("sidebar:show"))}},getScript:function(e,t,a){if(a)t();else{var o=document.createElement("script");o.onload=o.onreadystatechange=function(e,a){(a||!o.readyState||/loaded|complete/.test(o.readyState))&&(o.onload=o.onreadystatechange=null,o=void 0,!a&&t&&setTimeout(t,0))},o.src=e,document.head.appendChild(o)}},loadComments:function(e,t){if(!CONFIG.comments.lazyload||!e)return void t();let a=new IntersectionObserver((e,a)=>{e[0].isIntersecting&&(t(),a.disconnect())});return a.observe(e),a}};