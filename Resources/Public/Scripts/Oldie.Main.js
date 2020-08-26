// Oldie.Main.js from Carbon.Image
// For license information please see Oldie.Main.js.license
!function(){"use strict";function e(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&i.path)}},i.exports),i.exports}var t=e((function(e){!function(t,i){var n=function(e,t,i){var n,a;if(function(){var t,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},i)t in a||(a[t]=i[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],v={},h=Array.prototype.forEach,p=function(e,t){return v[t]||(v[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),v[t].test(e[l]("class")||"")&&v[t]},y=function(e,t){p(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},z=function(e,t){var i;(i=p(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(i," "))},b=function(e,t,i){var n=i?s:"removeEventListener";i&&b(e,t),g.forEach((function(i){e[n](i,t)}))},A=function(e,i,a,r,o){var s=t.createEvent("Event");return a||(a={}),a.instance=n,s.initEvent(i,!r,!o),s.detail=a,e.dispatchEvent(s),s},E=function(t,i){var n;!o&&(n=e.picturefill||a.pf)?(i&&i.src&&!t[l]("srcset")&&t.setAttribute("srcset",i.src),n({reevaluate:!0,elements:[t]})):i&&i.src&&(t.src=i.src)},L=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,i){for(i=i||e.offsetWidth;i<a.minSize&&t&&!e._lazysizesWidth;)i=t.offsetWidth,t=t.parentNode;return i},w=(ye=[],ze=[],be=ye,Ae=function(){var e=be;for(be=ye.length?ze:ye,he=!0,pe=!1;e.length;)e.shift()();he=!1},Ee=function(e,i){he&&!i?e.apply(this,arguments):(be.push(e),pe||(pe=!0,(t.hidden?d:u)(Ae)))},Ee._lsFlush=Ae,Ee),M=function(e,t){return t?function(){w(e)}:function(){var t=this,i=arguments;w((function(){e.apply(t,i)}))}},_=function(e){var t,n=0,r=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,n=i.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:M((function(){d(s)}),!0);return function(e){var a;(e=!0===e)&&(o=33),t||(t=!0,(a=r-(i.now()-n))<0&&(a=0),e||a<9?l():d(l,a))}},S=function(e){var t,n,a=99,r=function(){t=null,e()},o=function(){var e=i.now()-n;e<a?d(o,a-e):(f||r)(r)};return function(){n=i.now(),t||(t=d(o,a))}},N=(G=/^img$/i,J=/^iframe$/i,K="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),V=0,X=0,Y=0,ee=-1,te=function(e){Y--,(!e||Y<0||!e.target)&&(Y=0)},ie=function(e){return null==Z&&(Z="hidden"==L(t.body,"visibility")),Z||!("hidden"==L(e.parentNode,"visibility")&&"hidden"==L(e,"visibility"))},ne=function(e,i){var n,a=e,o=ie(e);for(D-=i,Q+=i,O-=i,U+=i;o&&(a=a.offsetParent)&&a!=t.body&&a!=r;)(o=(L(a,"opacity")||1)>0)&&"visible"!=L(a,"overflow")&&(n=a.getBoundingClientRect(),o=U>n.left&&O<n.right&&Q>n.top-1&&D<n.bottom+1);return o},ae=function(){var e,i,o,s,c,d,u,f,m,g,v,h,p=n.elements;if((B=a.loadMode)&&Y<8&&(e=p.length)){for(i=0,ee++;i<e;i++)if(p[i]&&!p[i]._lazyRace)if(!K||n.prematureUnveil&&n.prematureUnveil(p[i]))fe(p[i]);else if((f=p[i][l]("data-expand"))&&(d=1*f)||(d=X),g||(g=!a.expand||a.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:a.expand,n._defEx=g,v=g*a.expFactor,h=a.hFac,Z=null,X<v&&Y<1&&ee>2&&B>2&&!t.hidden?(X=v,ee=0):X=B>1&&ee>1&&Y<6?g:V),m!==d&&($=innerWidth+d*h,q=innerHeight+d,u=-1*d,m=d),o=p[i].getBoundingClientRect(),(Q=o.bottom)>=u&&(D=o.top)<=q&&(U=o.right)>=u*h&&(O=o.left)<=$&&(Q||U||O||D)&&(a.loadHidden||ie(p[i]))&&(I&&Y<3&&!f&&(B<3||ee<4)||ne(p[i],d))){if(fe(p[i]),c=!0,Y>9)break}else!c&&I&&!s&&Y<4&&ee<4&&B>2&&(k[0]||a.preloadAfterLoad)&&(k[0]||!f&&(Q||U||O||D||"auto"!=p[i][l](a.sizesAttr)))&&(s=k[0]||p[i]);s&&!c&&fe(s)}},re=_(ae),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),y(t,a.loadedClass),z(t,a.loadingClass),b(t,le),A(t,"lazyloaded"))},se=M(oe),le=function(e){se({target:e.target})},ce=function(e,t){try{e.contentWindow.location.replace(t)}catch(i){e.src=t}},de=function(e){var t,i=e[l](a.srcsetAttr);(t=a.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i)},ue=M((function(e,t,i,n,r){var o,s,c,u,f,g;(f=A(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(i?y(e,a.autosizesClass):e.setAttribute("sizes",n)),s=e[l](a.srcsetAttr),o=e[l](a.srcAttr),r&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),g=t.firesLoad||"src"in e&&(s||o||u),f={target:e},y(e,a.loadingClass),g&&(clearTimeout(j),j=d(te,2500),b(e,le,!0)),u&&h.call(c.getElementsByTagName("source"),de),s?e.setAttribute("srcset",s):o&&!u&&(J.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||u)&&E(e,{src:o})),e._lazyRace&&delete e._lazyRace,z(e,a.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&y(e,"ls-is-cached"),oe(f),e._lazyCache=!0,d((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Y--}),!0)})),fe=function(e){if(!e._lazyRace){var t,i=G.test(e.nodeName),n=i&&(e[l](a.sizesAttr)||e[l]("sizes")),r="auto"==n;(!r&&I||!i||!e[l]("src")&&!e.srcset||e.complete||p(e,a.errorClass)||!p(e,a.lazyClass))&&(t=A(e,"lazyunveilread").detail,r&&R.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Y++,ue(e,t,r,n,i))}},me=S((function(){a.loadMode=3,re()})),ge=function(){3==a.loadMode&&(a.loadMode=2),me()},ve=function(){I||(i.now()-H<999?d(ve,999):(I=!0,a.loadMode=3,re(),c("scroll",ge,!0)))},{_:function(){H=i.now(),n.elements=t.getElementsByClassName(a.lazyClass),k=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var i=t.querySelectorAll("."+a.loadingClass);i.length&&i.forEach&&u((function(){i.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?ve():(c("load",ve),t[s]("DOMContentLoaded",re),d(ve,2e4)),n.elements.length?(ae(),w._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:ge}),R=(T=M((function(e,t,i,n){var a,r,o;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),m.test(t.nodeName||""))for(r=0,o=(a=t.getElementsByTagName("source")).length;r<o;r++)a[r].setAttribute("sizes",n);i.detail.dataAttr||E(e,i.detail)})),P=function(e,t,i){var n,a=e.parentNode;a&&(i=C(e,a,i),(n=A(e,"lazybeforesizes",{width:i,dataAttr:!!t})).defaultPrevented||(i=n.detail.width)&&i!==e._lazysizesWidth&&T(e,a,n,i))},W=S((function(){var e,t=F.length;if(t)for(e=0;e<t;e++)P(F[e])})),{_:function(){F=t.getElementsByClassName(a.autosizesClass),c("resize",W)},checkElems:W,updateElem:P}),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,R._(),N._())};var F,T,P,W;var k,I,j,B,H,$,q,D,O,U,Q,Z,G,J,K,V,X,Y,ee,te,ie,ne,ae,re,oe,se,le,ce,de,ue,fe,me,ge,ve;var he,pe,ye,ze,be,Ae,Ee;return d((function(){a.init&&x()})),n={cfg:a,autoSizer:R,loader:N,init:x,uP:E,aC:y,rC:z,hC:p,fire:A,gW:C,rAF:w}}(t,t.document,Date);t.lazySizes=n,e.exports&&(e.exports=n)}("undefined"!=typeof window?window:{})}));e((function(e){!function(i,n){if(i){var a=function(){n(i.lazySizes),i.removeEventListener("lazyunveilread",a,!0)};n=n.bind(null,i,i.document),e.exports?n(t):i.lazySizes?a():i.addEventListener("lazyunveilread",a,!0)}}("undefined"!=typeof window?window:0,(function(e,t,i){if(e.addEventListener){var n=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,r=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,s=i.cfg,l={getParent:function(t,i){var n=t,a=t.parentNode;return i&&"prev"!=i||!a||!o.test(a.nodeName||"")||(a=a.parentNode),"self"!=i&&(n="prev"==i?t.previousElementSibling:i&&(a.closest||e.jQuery)&&(a.closest?a.closest(i):jQuery(a).closest(i)[0])||a),n},getFit:function(e){var t,i,n=getComputedStyle(e,null)||{},o=n.content||n.fontFamily,s={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!s.fit&&o&&(t=o.match(a))&&(s.fit=t[1]),s.fit?(!(i=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&o&&(t=o.match(r))&&(i=t[1]),s.parent=l.getParent(e,i)):s.fit=n.objectFit,s},getImageRatio:function(t){var i,a,r,l,c,d,u,f=t.parentNode,m=f&&o.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(i=0;i<m.length;i++)if(a=(t=m[i]).getAttribute(s.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",r=t._lsMedia||t.getAttribute("media"),r=s.customMedia[t.getAttribute("data-media")||r]||r,a&&(!r||(e.matchMedia&&matchMedia(r)||{}).matches)){(l=parseFloat(t.getAttribute("data-aspectratio")))||((c=a.match(n))?"w"==c[2]?(d=c[1],u=c[3]):(d=c[3],u=c[1]):(d=t.getAttribute("width"),u=t.getAttribute("height")),l=d/u);break}return l},calculateSize:function(e,t){var i,n,a,r=this.getFit(e),o=r.fit,s=r.parent;return"width"==o||("contain"==o||"cover"==o)&&(n=this.getImageRatio(e))?(s?t=s.clientWidth:s=e,a=t,"width"==o?a=t:(i=t/s.clientHeight)&&("cover"==o&&i<n||"contain"==o&&i>n)&&(a=t*(n/i)),a):t}};i.parentFit=l,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==i){var t=e.target;e.detail.width=l.calculateSize(t,e.detail.width)}}))}}))})),e((function(e){!function(i,n){var a=function(){n(i.lazySizes),i.removeEventListener("lazyunveilread",a,!0)};n=n.bind(null,i,i.document),e.exports?n(t):i.lazySizes?a():i.addEventListener("lazyunveilread",a,!0)}(window,(function(t,i,n){if(t.addEventListener){var a,r,o,s,l,c=Array.prototype.forEach,d=/^picture$/i,u="data-aspectratio",f="img[data-aspectratio]",m=function(e){return t.matchMedia?(m=function(e){return!e||(matchMedia(e)||{}).matches})(e):t.Modernizr&&Modernizr.mq?!e||Modernizr.mq(e):!e},g=n.aC,v=n.rC,h=n.cfg;p.prototype={_setupEvents:function(){var e,t,n=this,a=function(e){e.naturalWidth<36?n.addAspectRatio(e,!0):n.removeAspectRatio(e,!0)},r=function(){n.processImages()};i.addEventListener("load",(function(e){e.target.getAttribute&&e.target.getAttribute(u)&&a(e.target)}),!0),addEventListener("resize",(t=function(){c.call(n.ratioElems,a)},function(){clearTimeout(e),e=setTimeout(t,99)})),i.addEventListener("DOMContentLoaded",r),addEventListener("load",r)},processImages:function(e){var t,n;e||(e=i),t="length"in e&&!e.nodeName?e:e.querySelectorAll(f);for(n=0;n<t.length;n++)t[n].naturalWidth>36?this.removeAspectRatio(t[n]):this.addAspectRatio(t[n])},getSelectedRatio:function(e){var t,i,n,a,r,o=e.parentNode;if(o&&d.test(o.nodeName||""))for(t=0,i=(n=o.getElementsByTagName("source")).length;t<i;t++)if(a=n[t].getAttribute("data-media")||n[t].getAttribute("media"),h.customMedia[a]&&(a=h.customMedia[a]),m(a)){r=n[t].getAttribute(u);break}return r||e.getAttribute(u)||""},parseRatio:(s=/^\s*([+\d\.]+)(\s*[\/x]\s*([+\d\.]+))?\s*$/,l={},function(e){var t;return!l[e]&&(t=e.match(s))&&(t[3]?l[e]=t[1]/t[3]:l[e]=1*t[1]),l[e]}),addAspectRatio:function(e,i){var n,a=e.offsetWidth,r=e.offsetHeight;i||g(e,"lazyaspectratio"),a<36&&r<=0?(a||r&&t.console)&&console.log("Define width or height of image, so we can calculate the other dimension"):(n=this.getSelectedRatio(e),(n=this.parseRatio(n))&&(a?e.style.height=a/n+"px":e.style.width=r*n+"px"))},removeAspectRatio:function(e){v(e,"lazyaspectratio"),e.style.height="",e.style.width="",e.removeAttribute(u)}},(r=function(){(o=t.jQuery||t.Zepto||t.shoestring||t.$)&&o.fn&&!o.fn.imageRatio&&o.fn.filter&&o.fn.add&&o.fn.find?o.fn.imageRatio=function(){return a.processImages(this.find(f).add(this.filter(f))),this}:o=!1})(),setTimeout(r),a=new p,t.imageRatio=a,e.exports&&(e.exports=a)}function p(){this.ratioElems=i.getElementsByClassName("lazyaspectratio"),this._setupEvents(),this.processImages()}}))})),e((function(e){!function(i,n){var a=function(){n(i.lazySizes),i.removeEventListener("lazyunveilread",a,!0)};n=n.bind(null,i,i.document),e.exports?n(t):i.lazySizes?a():i.addEventListener("lazyunveilread",a,!0)}(window,(function(e,t,i){var n="loading"in HTMLImageElement.prototype,a="loading"in HTMLIFrameElement.prototype,r=!1,o=i.prematureUnveil,s=i.cfg,l={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};function c(){var o,c,d,u;r||(r=!0,n&&a&&s.nativeLoading.disableListeners&&(!0===s.nativeLoading.disableListeners&&(s.nativeLoading.setLoadingAttribute=!0),o=i.loader,c=o.checkElems,d=function(){setTimeout((function(){e.removeEventListener("scroll",o._aLSL,!0)}),1e3)},(u="object"==typeof s.nativeLoading.disableListeners?s.nativeLoading.disableListeners:l).scroll&&(e.addEventListener("load",d),d(),e.removeEventListener("scroll",c,!0)),u.resize&&e.removeEventListener("resize",c,!0),Object.keys(u).forEach((function(e){u[e]&&t.removeEventListener(e,c,!0)}))),s.nativeLoading.setLoadingAttribute&&e.addEventListener("lazybeforeunveil",(function(e){var t=e.target;"loading"in t&&!t.getAttribute("loading")&&t.setAttribute("loading","lazy")}),!0))}s.nativeLoading||(s.nativeLoading={}),e.addEventListener&&e.MutationObserver&&(n||a)&&(i.prematureUnveil=function(e){return r||c(),!(!("loading"in e)||!s.nativeLoading.setLoadingAttribute&&!e.getAttribute("loading")||"auto"==e.getAttribute("data-sizes")&&!e.offsetWidth)||(o?o(e):void 0)})}))}));function i(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}"objectFit"in document.documentElement.style==!1&&i("/_Resources/Static/Packages/Carbon.Image/Scripts/Pollyfill.ObjectFit.js"),window.HTMLPictureElement||(document.createElement("picture"),i("/_Resources/Static/Packages/Carbon.Image/Scripts/Pollyfill.Picture.js")),t.cfg.nativeLoading={setLoadingAttribute:!0,disableListeners:{focus:!0,mouseover:!0,click:!0,transitionend:!0,animationend:!0,scroll:!0}}}();
//# sourceMappingURL=Oldie.Main.js.map
