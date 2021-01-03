var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var s=document.documentElement;function l(t){var e="";return t.fake&&(e=s.style.overflow,t.style.background="",t.style.overflow=s.style.overflow="hidden",s.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),s.style.overflow=e,s.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),m=p?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},h=p?function(t,e){m(t,e)||t.classList.add(e)}:function(t,e){m(t,e)||(t.className+=" "+e)},y=p?function(t,e){m(t,e)&&t.classList.remove(e)}:function(t,e){m(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function C(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function w(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function N(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function B(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var L=!1;try{var S=Object.defineProperty({},"passive",{get:function(){L=!0}});window.addEventListener("test",null,S)}catch(t){}var k=!!L&&{passive:!0};function D(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&k;t.addEventListener(i,e[i],a)}}function O(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&k;t.removeEventListener(n,e[n],i)}}function H(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var n=document,s=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},L=t.useLocalStorage;if(L){var S=navigator.userAgent,k=new Date;try{(b=s.localStorage)?(b.setItem(k,k),L=b.getItem(k)==k,b.removeItem(k)):L=!1,L||(b={})}catch(S){L=!1}L&&(b.tnsApp&&b.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=S)}var P,I,z,W,F,$,q,j=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=l(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=s[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),L),V=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=l(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),L),X=b.tMQ?r(b.tMQ):o(b,"tMQ",(I=document,W=l(z=u()),F=I.createElement("div"),q="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",($=I.createElement("style")).type="text/css",F.className="tns-mq-test",z.appendChild($),z.appendChild(F),$.styleSheet?$.styleSheet.cssText=q:$.appendChild(I.createTextNode(q)),P=window.getComputedStyle?window.getComputedStyle(F).position:F.currentStyle.position,z.fake?c(z,W):F.remove(),"absolute"===P),L),G=b.tTf?r(b.tTf):o(b,"tTf",N("transform"),L),Q=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=l(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(G),L),Y=b.tTDu?r(b.tTDu):o(b,"tTDu",N("transitionDuration"),L),K=b.tTDe?r(b.tTDe):o(b,"tTDe",N("transitionDelay"),L),J=b.tADu?r(b.tADu):o(b,"tADu",N("animationDuration"),L),U=b.tADe?r(b.tADe):o(b,"tADe",N("animationDelay"),L),_=b.tTE?r(b.tTE):o(b,"tTE",B(Y,"Transition"),L),Z=b.tAE?r(b.tAE):o(b,"tAE",B(J,"Animation"),L),tt=s.console&&"function"==typeof s.console.warn,et=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],nt={};if(et.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(nt[e]=i,!a||!a.nodeName)return void(tt&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var it=t.responsive,at=t.nested,rt="carousel"===t.mode;if(it){0 in it&&(t=a(t,it[0]),delete it[0]);var ot={};for(var ut in it){var st=it[ut];st="number"==typeof st?{items:st}:st,ot[ut]=st}it=ot,ot=null}if(rt||function t(e){for(var n in e)rt||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!rt){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var lt=t.animateIn,ct=t.animateOut,ft=t.animateDelay,dt=t.animateNormal}var vt,pt,mt="horizontal"===t.axis,ht=n.createElement("div"),yt=n.createElement("div"),gt=t.container,xt=gt.parentNode,bt=gt.outerHTML,Ct=gt.children,wt=Ct.length,Mt=Pn(),Tt=!1;it&&ni(),rt&&(gt.className+=" tns-vpfix");var Et,At,Nt,Bt,Lt,St,kt,Dt=t.autoWidth,Ot=Fn("fixedWidth"),Ht=Fn("edgePadding"),Rt=Fn("gutter"),Pt=zn(),It=Fn("center"),zt=Dt?1:Math.floor(Fn("items")),Wt=Fn("slideBy"),Ft=t.viewportMax||t.fixedWidthViewportWidth,$t=Fn("arrowKeys"),qt=Fn("speed"),jt=t.rewind,Vt=!jt&&t.loop,Xt=Fn("autoHeight"),Gt=Fn("controls"),Qt=Fn("controlsText"),Yt=Fn("nav"),Kt=Fn("touch"),Jt=Fn("mouseDrag"),Ut=Fn("autoplay"),_t=Fn("autoplayTimeout"),Zt=Fn("autoplayText"),te=Fn("autoplayHoverPause"),ee=Fn("autoplayResetOnVisibility"),ne=(kt=document.createElement("style"),document.querySelector("head").appendChild(kt),kt.sheet?kt.sheet:kt.styleSheet),ie=t.lazyload,ae=(t.lazyloadSelector,[]),re=Vt?(Lt=function(){if(Dt||Ot&&!Ft)return wt-1;var e=Ot?"fixedWidth":"items",n=[];if((Ot||t[e]<wt)&&n.push(t[e]),it)for(var i in it){var a=it[i][e];a&&(Ot||a<wt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Ot?Ft/Math.min.apply(null,n):Math.max.apply(null,n))}(),St=rt?Math.ceil((5*Lt-wt)/2):4*Lt-wt,St=Math.max(Lt,St),Wn("edgePadding")?St+1:St):0,oe=rt?wt+2*re:wt+re,ue=!(!Ot&&!Dt||Vt),se=Ot?Li():null,le=!rt||!Vt,ce=mt?"left":"top",fe="",de="",ve=Ot?function(){return It&&!Vt?wt-1:Math.ceil(-se/(Ot+Rt))}:Dt?function(){for(var t=oe;t--;)if(Et[t]>-se)return t}:function(){return It&&rt&&!Vt?wt-1:Vt||rt?Math.max(0,oe-Math.ceil(zt)):oe-1},pe=On(Fn("startIndex")),me=pe,he=(Dn(),0),ye=Dt?null:ve(),ge=t.preventActionWhenRunning,xe=t.swipeAngle,be=!xe||"?",Ce=!1,we=t.onInit,Me=new H,Te=" tns-slider tns-"+t.mode,Ee=gt.id||(Bt=window.tnsId,window.tnsId=Bt?Bt+1:1,"tns"+window.tnsId),Ae=Fn("disable"),Ne=!1,Be=t.freezable,Le=!(!Be||Dt)&&ei(),Se=!1,ke={click:zi,keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?_e.disabled||zi(t,-1):Ze.disabled||zi(t,1))}},De={click:function(t){if(Ce){if(ge)return;Pi()}for(var e=Qi(t=Gi(t));e!==an&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=sn=Number(x(e,"data-nav")),i=Ot||Dt?n*wt/on:n*zt;Ii(Fe?n:Math.min(Math.ceil(i),wt-1),t),ln===n&&(mn&&ji(),sn=-1)}},keydown:function(t){t=Gi(t);var e=n.activeElement;if(g(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));0<=i&&(0===i?0<a&&Xi(nn[a-1]):1===i?a<on-1&&Xi(nn[a+1]):Ii(sn=a,t))}}},Oe={mouseover:function(){mn&&(Fi(),hn=!0)},mouseout:function(){hn&&(Wi(),hn=!1)}},He={visibilitychange:function(){n.hidden?mn&&(Fi(),gn=!0):gn&&(Wi(),gn=!1)}},Re={keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);0<=e&&zi(t,0===e?-1:1)}},Pe={touchstart:Ui,touchmove:_i,touchend:Zi,touchcancel:Zi},Ie={mousedown:Ui,mousemove:_i,mouseup:Zi,mouseleave:Zi},ze=Wn("controls"),We=Wn("nav"),Fe=!!Dt||t.navAsThumbnails,$e=Wn("autoplay"),qe=Wn("touch"),je=Wn("mouseDrag"),Ve="tns-slide-active",Xe="tns-complete",Ge={load:function(t){fi(Qi(t))},error:function(t){var e;e=Qi(t),h(e,"failed"),di(e)}},Qe="force"===t.preventScrollOnTouch;if(ze)var Ye,Ke,Je=t.controlsContainer,Ue=t.controlsContainer?t.controlsContainer.outerHTML:"",_e=t.prevButton,Ze=t.nextButton,tn=t.prevButton?t.prevButton.outerHTML:"",en=t.nextButton?t.nextButton.outerHTML:"";if(We)var nn,an=t.navContainer,rn=t.navContainer?t.navContainer.outerHTML:"",on=Dt?wt:ea(),un=0,sn=-1,ln=Rn(),cn=ln,fn="tns-nav-active",dn="Carousel Page ",vn=" (Current Slide)";if($e)var pn,mn,hn,yn,gn,xn="forward"===t.autoplayDirection?1:-1,bn=t.autoplayButton,Cn=t.autoplayButton?t.autoplayButton.outerHTML:"",wn=["<span class='tns-visually-hidden'>"," animation</span>"];if(qe||je)var Mn,Tn,En={},An={},Nn=!1,Bn=mt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Dt||kn(Ae||Le),G&&(ce=G,fe="translate",Q?(fe+=mt?"3d(":"3d(0px, ",de=mt?", 0px, 0px)":", 0px)"):(fe+=mt?"X(":"Y(",de=")")),rt&&(gt.className=gt.className.replace("tns-vpfix","")),function(){(Wn("gutter"),ht.className="tns-outer",yt.className="tns-inner",ht.id=Ee+"-ow",yt.id=Ee+"-iw",""===gt.id&&(gt.id=Ee),Te+=V||Dt?" tns-subpixel":" tns-no-subpixel",Te+=j?" tns-calc":" tns-no-calc",Dt&&(Te+=" tns-autowidth"),Te+=" tns-"+t.axis,gt.className+=Te,rt?((vt=n.createElement("div")).id=Ee+"-mw",vt.className="tns-ovh",ht.appendChild(vt),vt.appendChild(yt)):ht.appendChild(yt),Xt)&&((vt||yt).className+=" tns-ah");if(xt.insertBefore(ht,gt),yt.appendChild(gt),v(Ct,(function(t,e){h(t,"tns-item"),t.id||(t.id=Ee+"-item"+e),!rt&&dt&&h(t,dt),C(t,{"aria-hidden":"true",tabindex:"-1"})})),re){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=re;a--;){var r=a%wt,o=Ct[r].cloneNode(!0);if(w(o,"id"),i.insertBefore(o,i.firstChild),rt){var u=Ct[wt-1-r].cloneNode(!0);w(u,"id"),e.appendChild(u)}}gt.insertBefore(e,gt.firstChild),gt.appendChild(i),Ct=gt.children}}(),function(){if(!rt)for(var e=pe,n=pe+Math.min(wt,zt);e<n;e++){var i=Ct[e];i.style.left=100*(e-pe)/zt+"%",h(i,lt),y(i,dt)}if(mt&&(V||Dt?(f(ne,"#"+Ee+" > .tns-item","font-size:"+s.getComputedStyle(Ct[0]).fontSize+";",d(ne)),f(ne,"#"+Ee,"font-size:0;",d(ne))):rt&&v(Ct,(function(t,e){var n;t.style.marginLeft=(n=e,j?j+"("+100*n+"% / "+oe+")":100*n/oe+"%")}))),X){if(Y){var a=vt&&t.autoHeight?Gn(t.speed):"";f(ne,"#"+Ee+"-mw",a,d(ne))}a=$n(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(ne,"#"+Ee+"-iw",a,d(ne)),rt&&(a=mt&&!Dt?"width:"+qn(t.fixedWidth,t.gutter,t.items)+";":"",Y&&(a+=Gn(qt)),f(ne,"#"+Ee,a,d(ne))),a=mt&&!Dt?jn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Vn(t.gutter)),rt||(Y&&(a+=Gn(qt)),J&&(a+=Qn(qt))),a&&f(ne,"#"+Ee+" > .tns-item",a,d(ne))}else{yi(),yt.style.cssText=$n(Ht,Rt,Ot,Xt),rt&&mt&&!Dt&&(gt.style.width=qn(Ot,Rt,zt));a=mt&&!Dt?jn(Ot,Rt,zt):"";Rt&&(a+=Vn(Rt)),a&&f(ne,"#"+Ee+" > .tns-item",a,d(ne))}if(it&&X)for(var r in it){r=parseInt(r);var o=it[r],u=(a="",""),l="",c="",p="",m=Dt?null:Fn("items",r),g=Fn("fixedWidth",r),x=Fn("speed",r),b=Fn("edgePadding",r),C=Fn("autoHeight",r),w=Fn("gutter",r);Y&&vt&&Fn("autoHeight",r)&&"speed"in o&&(u="#"+Ee+"-mw{"+Gn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(l="#"+Ee+"-iw{"+$n(b,w,g,x,C)+"}"),rt&&mt&&!Dt&&("fixedWidth"in o||"items"in o||Ot&&"gutter"in o)&&(c="width:"+qn(g,w,m)+";"),Y&&"speed"in o&&(c+=Gn(x)),c&&(c="#"+Ee+"{"+c+"}"),("fixedWidth"in o||Ot&&"gutter"in o||!rt&&"items"in o)&&(p+=jn(g,w,m)),"gutter"in o&&(p+=Vn(w)),!rt&&"speed"in o&&(Y&&(p+=Gn(x)),J&&(p+=Qn(x))),p&&(p="#"+Ee+" > .tns-item{"+p+"}"),(a=u+l+c+p)&&ne.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",ne.cssRules.length)}}(),Yn();var Ln=Vt?rt?function(){var t=he,e=ye;t+=Wt,e-=Wt,Ht?(t+=1,e-=1):Ot&&(Pt+Rt)%(Ot+Rt)&&(e-=1),re&&(e<pe?pe-=wt:pe<t&&(pe+=wt))}:function(){if(ye<pe)for(;he+wt<=pe;)pe-=wt;else if(pe<he)for(;pe<=ye-wt;)pe+=wt}:function(){pe=Math.max(he,Math.min(ye,pe))},Sn=rt?function(){var t,e,n,i,a,r,o,u,s,l,c;Ni(gt,""),Y||!qt?(Di(),qt&&A(gt)||Pi()):(t=gt,e=ce,n=fe,i=de,a=Si(),r=qt,o=Pi,u=Math.min(r,10),s=0<=a.indexOf("%")?"%":"px",a=a.replace(s,""),l=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),c=(a-l)/r*u,setTimeout((function a(){r-=u,l+=c,t.style[e]=n+l+s+i,0<r?setTimeout(a,u):o()}),u)),mt||ta()}:function(){ae=[];var t={};t[_]=t[Z]=Pi,O(Ct[me],t),D(Ct[pe],t),Oi(me,lt,ct,!0),Oi(pe,dt,lt),_&&Z&&qt&&A(gt)||Pi()};return{version:"2.9.1",getInfo:ia,events:Me,goTo:Ii,play:function(){Ut&&!mn&&(qi(),yn=!1)},pause:function(){mn&&(ji(),yn=!0)},isOn:Tt,updateSliderHeight:xi,refresh:Yn,destroy:function(){if(ne.disabled=!0,ne.ownerNode&&ne.ownerNode.remove(),O(s,{resize:Zn}),$t&&O(n,Re),Je&&O(Je,ke),an&&O(an,De),O(gt,Oe),O(gt,He),bn&&O(bn,{click:Vi}),Ut&&clearInterval(pn),rt&&_){var e={};e[_]=Pi,O(gt,e)}Kt&&O(gt,Pe),Jt&&O(gt,Ie);var i=[bt,Ue,tn,en,rn,Cn];for(var a in et.forEach((function(e,n){var a="container"===e?ht:t[e];if("object"==typeof a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),et=lt=ct=ft=dt=mt=ht=yt=gt=xt=bt=Ct=wt=pt=Mt=Dt=Ot=Ht=Rt=Pt=zt=Wt=Ft=$t=qt=jt=Vt=Xt=ne=ie=Et=ae=re=oe=ue=se=le=ce=fe=de=ve=pe=me=he=ye=xe=be=Ce=we=Me=Te=Ee=Ae=Ne=Be=Le=Se=ke=De=Oe=He=Re=Pe=Ie=ze=We=Fe=$e=qe=je=Ve=Xe=Ge=At=Gt=Qt=Je=Ue=_e=Ze=Ye=Ke=Yt=an=rn=nn=on=un=sn=ln=cn=fn=dn=vn=Ut=_t=xn=Zt=te=bn=Cn=ee=wn=pn=mn=hn=yn=gn=En=An=Mn=Nn=Tn=Bn=Kt=Jt=null,this)"rebuild"!==a&&(this[a]=null);Tt=!1},rebuild:function(){return R(a(t,nt))}}}function kn(t){t&&(Gt=Yt=Kt=Jt=$t=Ut=te=ee=!1)}function Dn(){for(var t=rt?pe-re:pe;t<0;)t+=wt;return t%wt+1}function On(t){return t=t?Math.max(0,Math.min(Vt?wt-1:wt-zt,t)):0,rt?t+re:t}function Hn(t){for(null==t&&(t=pe),rt&&(t-=re);t<0;)t+=wt;return Math.floor(t%wt)}function Rn(){var t,e=Hn();return t=Fe?e:Ot||Dt?Math.ceil((e+1)*on/wt-1):Math.floor(e/zt),!Vt&&rt&&pe===ye&&(t=on-1),t}function Pn(){return s.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function In(t){return"top"===t?"afterbegin":"beforeend"}function zn(){var t=Ht?2*Ht-Rt:0;return function t(e){var i,a,r=n.createElement("div");return e.appendChild(r),a=(i=r.getBoundingClientRect()).right-i.left,r.remove(),a||t(e.parentNode)}(xt)-t}function Wn(e){if(t[e])return!0;if(it)for(var n in it)if(it[n][e])return!0;return!1}function Fn(e,n){if(null==n&&(n=Mt),"items"===e&&Ot)return Math.floor((Pt+Rt)/(Ot+Rt))||1;var i=t[e];if(it)for(var a in it)n>=parseInt(a)&&e in it[a]&&(i=it[a][e]);return"slideBy"===e&&"page"===i&&(i=Fn("items")),rt||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function $n(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=mt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(mt?u+" 0 0":"0 "+u+" 0")+";"}return!rt&&a&&Y&&i&&(r+=Gn(i)),r}function qn(t,e,n){return t?(t+e)*oe+"px":j?j+"("+100*oe+"% / "+n+")":100*oe/n+"%"}function jn(t,e,n){var i;if(t)i=t+e+"px";else{rt||(n=Math.floor(n));var a=rt?oe:n;i=j?j+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==at?i+";":i+" !important;"}function Vn(t){var e="";return!1!==t&&(e=(mt?"padding-":"margin-")+(mt?"right":"bottom")+": "+t+"px;"),e}function Xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Gn(t){return Xn(Y,18)+"transition-duration:"+t/1e3+"s;"}function Qn(t){return Xn(J,17)+"animation-duration:"+t/1e3+"s;"}function Yn(){if(Wn("autoHeight")||Dt||!mt){var t=gt.querySelectorAll("img");v(t,(function(t){var e=t.src;e&&e.indexOf("data:image")<0?(D(t,Ge),t.src="",t.src=e,h(t,"loading")):ie||fi(t)})),e((function(){mi(M(t),(function(){At=!0}))})),!Dt&&mt&&(t=vi(pe,Math.min(pe+zt-1,oe-1))),ie?Kn():e((function(){mi(M(t),Kn)}))}else rt&&ki(),Un(),_n()}function Kn(){if(Dt){var t=Vt?pe:wt-1;!function e(){Ct[t-1].getBoundingClientRect().right.toFixed(2)===Ct[t].getBoundingClientRect().left.toFixed(2)?Jn():setTimeout((function(){e()}),16)}()}else Jn()}function Jn(){mt&&!Dt||(bi(),Dt?(se=Li(),Be&&(Le=ei()),ye=ve(),kn(Ae||Le)):ta()),rt&&ki(),Un(),_n()}function Un(){if(Ci(),ht.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+si()+"</span>  of "+wt+"</div>"),Nt=ht.querySelector(".tns-liveregion .current"),$e){var e=Ut?"stop":"start";bn?C(bn,{"data-action":e}):t.autoplayButtonOutput&&(ht.insertAdjacentHTML(In(t.autoplayPosition),'<button data-action="'+e+'">'+wn[0]+e+wn[1]+Zt[0]+"</button>"),bn=ht.querySelector("[data-action]")),bn&&D(bn,{click:Vi}),Ut&&(qi(),te&&D(gt,Oe),ee&&D(gt,He))}if(We){if(an)C(an,{"aria-label":"Carousel Pagination"}),v(nn=an.children,(function(t,e){C(t,{"data-nav":e,tabindex:"-1","aria-label":dn+(e+1),"aria-controls":Ee})}));else{for(var n="",i=Fe?"":'style="display:none"',a=0;a<wt;a++)n+='<button data-nav="'+a+'" tabindex="-1" aria-controls="'+Ee+'" '+i+' aria-label="'+dn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ht.insertAdjacentHTML(In(t.navPosition),n),an=ht.querySelector(".tns-nav"),nn=an.children}if(na(),Y){var r=Y.substring(0,Y.length-18).toLowerCase(),o="transition: all "+qt/1e3+"s";r&&(o="-"+r+"-"+o),f(ne,"[aria-controls^="+Ee+"-item]",o,d(ne))}C(nn[ln],{"aria-label":dn+(ln+1)+vn}),w(nn[ln],"tabindex"),h(nn[ln],fn),D(an,De)}ze&&(Je||_e&&Ze||(ht.insertAdjacentHTML(In(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ee+'">'+Qt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ee+'">'+Qt[1]+"</button></div>"),Je=ht.querySelector(".tns-controls")),_e&&Ze||(_e=Je.children[0],Ze=Je.children[1]),t.controlsContainer&&C(Je,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&C([_e,Ze],{"aria-controls":Ee,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(C(_e,{"data-controls":"prev"}),C(Ze,{"data-controls":"next"})),Ye=Mi(_e),Ke=Mi(Ze),Ai(),Je?D(Je,ke):(D(_e,ke),D(Ze,ke))),ii()}function _n(){if(rt&&_){var e={};e[_]=Pi,D(gt,e)}Kt&&D(gt,Pe,t.preventScrollOnTouch),Jt&&D(gt,Ie),$t&&D(n,Re),"inner"===at?Me.on("outerResized",(function(){ti(),Me.emit("innerLoaded",ia())})):(it||Ot||Dt||Xt||!mt)&&D(s,{resize:Zn}),Xt&&("outer"===at?Me.on("innerLoaded",pi):Ae||pi()),ci(),Ae?oi():Le&&ri(),Me.on("indexChanged",hi),"inner"===at&&Me.emit("innerLoaded",ia()),"function"==typeof we&&we(ia()),Tt=!0}function Zn(t){e((function(){ti(Gi(t))}))}function ti(e){if(Tt){"outer"===at&&Me.emit("outerResized",ia(e)),Mt=Pn();var i,a=pt,r=!1;it&&(ni(),(i=a!==pt)&&Me.emit("newBreakpointStart",ia(e)));var o,u,s,l,c=zt,p=Ae,m=Le,g=$t,x=Gt,b=Yt,C=Kt,w=Jt,M=Ut,A=te,N=ee,B=pe;if(i){var L=Ot,S=Xt,k=Qt,H=It,R=Zt;if(!X)var P=Rt,I=Ht}if($t=Fn("arrowKeys"),Gt=Fn("controls"),Yt=Fn("nav"),Kt=Fn("touch"),It=Fn("center"),Jt=Fn("mouseDrag"),Ut=Fn("autoplay"),te=Fn("autoplayHoverPause"),ee=Fn("autoplayResetOnVisibility"),i&&(Ae=Fn("disable"),Ot=Fn("fixedWidth"),qt=Fn("speed"),Xt=Fn("autoHeight"),Qt=Fn("controlsText"),Zt=Fn("autoplayText"),_t=Fn("autoplayTimeout"),X||(Ht=Fn("edgePadding"),Rt=Fn("gutter"))),kn(Ae),Pt=zn(),mt&&!Dt||Ae||(bi(),mt||(ta(),r=!0)),(Ot||Dt)&&(se=Li(),ye=ve()),(i||Ot)&&(zt=Fn("items"),Wt=Fn("slideBy"),(u=zt!==c)&&(Ot||Dt||(ye=ve()),Ln())),i&&Ae!==p&&(Ae?oi():function(){if(Ne){if(ne.disabled=!1,gt.className+=Te,ki(),Vt)for(var t=re;t--;)rt&&E(Ct[t]),E(Ct[oe-t-1]);if(!rt)for(var e=pe,n=pe+wt;e<n;e++){var i=Ct[e],a=e<pe+zt?lt:dt;i.style.left=100*(e-pe)/zt+"%",h(i,a)}ai(),Ne=!1}}()),Be&&(i||Ot||Dt)&&(Le=ei())!==m&&(Le?(Di(Si(On(0))),ri()):(function(){if(Se){if(Ht&&X&&(yt.style.margin=""),re)for(var t="tns-transparent",e=re;e--;)rt&&y(Ct[e],t),y(Ct[oe-e-1],t);ai(),Se=!1}}(),r=!0)),kn(Ae||Le),Ut||(te=ee=!1),$t!==g&&($t?D(n,Re):O(n,Re)),Gt!==x&&(Gt?Je?E(Je):(_e&&E(_e),Ze&&E(Ze)):Je?T(Je):(_e&&T(_e),Ze&&T(Ze))),Yt!==b&&(Yt?E(an):T(an)),Kt!==C&&(Kt?D(gt,Pe,t.preventScrollOnTouch):O(gt,Pe)),Jt!==w&&(Jt?D(gt,Ie):O(gt,Ie)),Ut!==M&&(Ut?(bn&&E(bn),mn||yn||qi()):(bn&&T(bn),mn&&ji())),te!==A&&(te?D(gt,Oe):O(gt,Oe)),ee!==N&&(ee?D(n,He):O(n,He)),i){if(Ot===L&&It===H||(r=!0),Xt!==S&&(Xt||(yt.style.height="")),Gt&&Qt!==k&&(_e.innerHTML=Qt[0],Ze.innerHTML=Qt[1]),bn&&Zt!==R){var z=Ut?1:0,W=bn.innerHTML,F=W.length-R[z].length;W.substring(F)===R[z]&&(bn.innerHTML=W.substring(0,F)+Zt[z])}}else It&&(Ot||Dt)&&(r=!0);if((u||Ot&&!Dt)&&(on=ea(),na()),(o=pe!==B)?(Me.emit("indexChanged",ia()),r=!0):u?o||hi():(Ot||Dt)&&(ci(),Ci(),ui()),!u&&rt||function(){for(var t=pe+Math.min(wt,zt),e=oe;e--;){var n=Ct[e];pe<=e&&e<t?(h(n,"tns-moving"),n.style.left=100*(e-pe)/zt+"%",h(n,lt),y(n,dt)):n.style.left&&(n.style.left="",h(n,dt),y(n,lt)),y(n,ct)}setTimeout((function(){v(Ct,(function(t){y(t,"tns-moving")}))}),300)}(),!Ae&&!Le){if(i&&!X&&(Xt===autoheightTem&&qt===speedTem||yi(),Ht===I&&Rt===P||(yt.style.cssText=$n(Ht,Rt,Ot,qt,Xt)),mt)){rt&&(gt.style.width=qn(Ot,Rt,zt));var $=jn(Ot,Rt,zt)+Vn(Rt);l=d(s=ne)-1,"deleteRule"in s?s.deleteRule(l):s.removeRule(l),f(ne,"#"+Ee+" > .tns-item",$,d(ne))}Xt&&pi(),r&&(ki(),me=pe)}i&&Me.emit("newBreakpointEnd",ia(e))}}function ei(){if(!Ot&&!Dt)return wt<=(It?zt-(zt-1)/2:zt);var t=Ot?(Ot+Rt)*wt:Et[wt],e=Ht?Pt+2*Ht:Pt+Rt;return It&&(e-=Ot?(Pt-Ot)/2:(Pt-(Et[pe+1]-Et[pe]-Rt))/2),t<=e}function ni(){for(var t in pt=0,it)(t=parseInt(t))<=Mt&&(pt=t)}function ii(){!Ut&&bn&&T(bn),!Yt&&an&&T(an),Gt||(Je?T(Je):(_e&&T(_e),Ze&&T(Ze)))}function ai(){Ut&&bn&&E(bn),Yt&&an&&E(an),Gt&&(Je?E(Je):(_e&&E(_e),Ze&&E(Ze)))}function ri(){if(!Se){if(Ht&&(yt.style.margin="0px"),re)for(var t="tns-transparent",e=re;e--;)rt&&h(Ct[e],t),h(Ct[oe-e-1],t);ii(),Se=!0}}function oi(){if(!Ne){if(ne.disabled=!0,gt.className=gt.className.replace(Te.substring(1),""),w(gt,["style"]),Vt)for(var t=re;t--;)rt&&T(Ct[t]),T(Ct[oe-t-1]);if(mt&&rt||w(yt,["style"]),!rt)for(var e=pe,n=pe+wt;e<n;e++){var i=Ct[e];w(i,["style"]),y(i,lt),y(i,dt)}ii(),Ne=!0}}function ui(){var t=si();Nt.innerHTML!==t&&(Nt.innerHTML=t)}function si(){var t=li(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function li(t){null==t&&(t=Si());var e,n,i,a=pe;if(It||Ht?(Dt||Ot)&&(n=-(parseFloat(t)+Ht),i=n+Pt+2*Ht):Dt&&(n=Et[pe],i=n+Pt),Dt)Et.forEach((function(t,r){r<oe&&((It||Ht)&&t<=n+.5&&(a=r),.5<=i-t&&(e=r))}));else{if(Ot){var r=Ot+Rt;It||Ht?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Pt/r)-1}else if(It||Ht){var o=zt-1;if(It?(a-=o/2,e=pe+o/2):e=pe+o,Ht){var u=Ht*zt/Pt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+zt-1;a=Math.max(a,0),e=Math.min(e,oe-1)}return[a,e]}function ci(){ie&&!Ae&&vi.apply(null,li()).forEach((function(t){if(!m(t,Xe)){var e={};e[_]=function(t){t.stopPropagation()},D(t,e),D(t,Ge),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),h(t,"loading")}}))}function fi(t){h(t,"loaded"),di(t)}function di(t){h(t,"tns-complete"),y(t,"loading"),O(t,Ge)}function vi(t,e){for(var n=[];t<=e;)v(Ct[t].querySelectorAll("img"),(function(t){n.push(t)})),t++;return n}function pi(){var t=vi.apply(null,li());e((function(){mi(t,xi)}))}function mi(t,n){return At?n():(t.forEach((function(e,n){m(e,Xe)&&t.splice(n,1)})),t.length?void e((function(){mi(t,n)})):n())}function hi(){ci(),Ci(),ui(),Ai(),function(){if(Yt&&(ln=0<=sn?sn:Rn(),sn=-1,ln!==cn)){var t=nn[cn],e=nn[ln];C(t,{tabindex:"-1","aria-label":dn+(cn+1)}),y(t,fn),C(e,{"aria-label":dn+(ln+1)+vn}),w(e,"tabindex"),h(e,fn),cn=ln}}()}function yi(){rt&&Xt&&(vt.style[Y]=qt/1e3+"s")}function gi(t,e){for(var n=[],i=t,a=Math.min(t+e,oe);i<a;i++)n.push(Ct[i].offsetHeight);return Math.max.apply(null,n)}function xi(){var t=Xt?gi(pe,zt):gi(re,wt),e=vt||yt;e.style.height!==t&&(e.style.height=t+"px")}function bi(){Et=[0];var t=mt?"left":"top",e=mt?"right":"bottom",n=Ct[0].getBoundingClientRect()[t];v(Ct,(function(i,a){a&&Et.push(i.getBoundingClientRect()[t]-n),a===oe-1&&Et.push(i.getBoundingClientRect()[e]-n)}))}function Ci(){var t=li(),e=t[0],n=t[1];v(Ct,(function(t,i){e<=i&&i<=n?g(t,"aria-hidden")&&(w(t,["aria-hidden","tabindex"]),h(t,Ve)):g(t,"aria-hidden")||(C(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,Ve))}))}function wi(t){return t.nodeName.toLowerCase()}function Mi(t){return"button"===wi(t)}function Ti(t){return"true"===t.getAttribute("aria-disabled")}function Ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ai(){if(Gt&&!jt&&!Vt){var t=Ye?_e.disabled:Ti(_e),e=Ke?Ze.disabled:Ti(Ze),n=pe<=he,i=!jt&&ye<=pe;n&&!t&&Ei(Ye,_e,!0),!n&&t&&Ei(Ye,_e,!1),i&&!e&&Ei(Ke,Ze,!0),!i&&e&&Ei(Ke,Ze,!1)}}function Ni(t,e){Y&&(t.style[Y]=e)}function Bi(t){return null==t&&(t=pe),Dt?(Pt-(Ht?Rt:0)-(Et[t+1]-Et[t]-Rt))/2:Ot?(Pt-Ot)/2:(zt-1)/2}function Li(){var t=Pt+(Ht?Rt:0)-(Ot?(Ot+Rt)*oe:Et[oe]);return It&&!Vt&&(t=Ot?-(Ot+Rt)*(oe-1)-Bi():Bi(oe-1)-Et[oe-1]),0<t&&(t=0),t}function Si(t){var e;if(null==t&&(t=pe),mt&&!Dt)if(Ot)e=-(Ot+Rt)*t,It&&(e+=Bi());else{var n=G?oe:zt;It&&(t-=Bi()),e=100*-t/n}else e=-Et[t],It&&Dt&&(e+=Bi());return ue&&(e=Math.max(e,se)),e+(!mt||Dt||Ot?"px":"%")}function ki(t){Ni(gt,"0s"),Di(t)}function Di(t){null==t&&(t=Si()),gt.style[ce]=fe+t+de}function Oi(t,e,n,i){var a=t+zt;Vt||(a=Math.min(a,oe));for(var r=t;r<a;r++){var o=Ct[r];i||(o.style.left=100*(r-pe)/zt+"%"),ft&&K&&(o.style[K]=o.style[U]=ft*(r-t)/1e3+"s"),y(o,e),h(o,n),i&&ae.push(o)}}function Hi(t,e){le&&Ln(),(pe!==me||e)&&(Me.emit("indexChanged",ia()),Me.emit("transitionStart",ia()),Xt&&pi(),mn&&t&&0<=["click","keydown"].indexOf(t.type)&&ji(),Ce=!0,Sn())}function Ri(t){return t.toLowerCase().replace(/-/g,"")}function Pi(t){if(rt||Ce){if(Me.emit("transitionEnd",ia(t)),!rt&&0<ae.length)for(var e=0;e<ae.length;e++){var n=ae[e];n.style.left="",U&&K&&(n.style[U]="",n.style[K]=""),y(n,ct),h(n,dt)}if(!t||!rt&&t.target.parentNode===gt||t.target===gt&&Ri(t.propertyName)===Ri(ce)){if(!le){var i=pe;Ln(),pe!==i&&(Me.emit("indexChanged",ia()),ki())}"inner"===at&&Me.emit("innerLoaded",ia()),Ce=!1,me=pe}}}function Ii(t,e){if(!Le)if("prev"===t)zi(e,-1);else if("next"===t)zi(e,1);else{if(Ce){if(ge)return;Pi()}var n=Hn(),i=0;if("first"===t?i=-n:"last"===t?i=rt?wt-zt-n:wt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(wt-1,t))),i=t-n)),!rt&&i&&Math.abs(i)<zt){var a=0<i?1:-1;i+=he<=pe+i-wt?wt*a:2*wt*a*-1}pe+=i,rt&&Vt&&(pe<he&&(pe+=wt),ye<pe&&(pe-=wt)),Hn(pe)!==Hn(me)&&Hi(e)}}function zi(t,e){if(Ce){if(ge)return;Pi()}var n;if(!e){for(var i=Qi(t=Gi(t));i!==Je&&[_e,Ze].indexOf(i)<0;)i=i.parentNode;var a=[_e,Ze].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(jt){if(pe===he&&-1===e)return void Ii("last",t);if(pe===ye&&1===e)return void Ii("first",t)}e&&(pe+=Wt*e,Dt&&(pe=Math.floor(pe)),Hi(n||t&&"keydown"===t.type?t:null))}function Wi(){pn=setInterval((function(){zi(null,xn)}),_t),mn=!0}function Fi(){clearInterval(pn),mn=!1}function $i(t,e){C(bn,{"data-action":t}),bn.innerHTML=wn[0]+t+wn[1]+e}function qi(){Wi(),bn&&$i("stop",Zt[1])}function ji(){Fi(),bn&&$i("start",Zt[0])}function Vi(){mn?(ji(),yn=!0):(qi(),yn=!1)}function Xi(t){t.focus()}function Gi(t){return Yi(t=t||s.event)?t.changedTouches[0]:t}function Qi(t){return t.target||s.event.srcElement}function Yi(t){return 0<=t.type.indexOf("touch")}function Ki(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ji(){return r=An.y-En.y,o=An.x-En.x,e=Math.atan2(r,o)*(180/Math.PI),i=!1,90-(n=xe)<=(a=Math.abs(90-Math.abs(e)))?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Ui(t){if(Ce){if(ge)return;Pi()}Ut&&mn&&Fi(),Nn=!0,Tn&&(i(Tn),Tn=null);var e=Gi(t);Me.emit(Yi(t)?"touchStart":"dragStart",ia(t)),!Yi(t)&&0<=["img","a"].indexOf(wi(Qi(t)))&&Ki(t),An.x=En.x=e.clientX,An.y=En.y=e.clientY,rt&&(Mn=parseFloat(gt.style[ce].replace(fe,"")),Ni(gt,"0s"))}function _i(t){if(Nn){var n=Gi(t);An.x=n.clientX,An.y=n.clientY,rt?Tn||(Tn=e((function(){!function t(n){if(be){if(i(Tn),Nn&&(Tn=e((function(){t(n)}))),"?"===be&&(be=Ji()),be){!Qe&&Yi(n)&&(Qe=!0);try{n.type&&Me.emit(Yi(n)?"touchMove":"dragMove",ia(n))}catch(t){}var a=Mn,r=Bn(An,En);if(!mt||Ot||Dt)a+=r,a+="px";else a+=G?r*zt*100/((Pt+Rt)*oe):100*r/(Pt+Rt),a+="%";gt.style[ce]=fe+a+de}}else Nn=!1}(t)}))):("?"===be&&(be=Ji()),be&&(Qe=!0)),Qe&&t.preventDefault()}}function Zi(n){if(Nn){Tn&&(i(Tn),Tn=null),rt&&Ni(gt,""),Nn=!1;var a=Gi(n);An.x=a.clientX,An.y=a.clientY;var r=Bn(An,En);if(Math.abs(r)){if(!Yi(n)){var o=Qi(n);D(o,{click:function t(e){Ki(e),O(o,{click:t})}})}rt?Tn=e((function(){if(mt&&!Dt){var t=-r*zt/(Pt+Rt);t=0<r?Math.floor(t):Math.ceil(t),pe+=t}else{var e=-(Mn+r);if(e<=0)pe=he;else if(e>=Et[oe-1])pe=ye;else for(var i=0;i<oe&&e>=Et[i];)e>Et[pe=i]&&r<0&&(pe+=1),i++}Hi(n,r),Me.emit(Yi(n)?"touchEnd":"dragEnd",ia(n))})):be&&zi(n,0<r?-1:1)}}"auto"===t.preventScrollOnTouch&&(Qe=!1),xe&&(be="?"),Ut&&!mn&&Wi()}function ta(){(vt||yt).style.height=Et[pe+zt]-Et[pe]+"px"}function ea(){var t=Ot?(Ot+Rt)*wt/Pt:wt/zt;return Math.min(Math.ceil(t),wt)}function na(){if(Yt&&!Fe&&on!==un){var t=un,e=on,n=E;for(on<un&&(t=on,e=un,n=T);t<e;)n(nn[t]),t++;un=on}}function ia(t){return{container:gt,slideItems:Ct,navContainer:an,navItems:nn,controlsContainer:Je,hasControls:ze,prevButton:_e,nextButton:Ze,items:zt,slideBy:Wt,cloneCount:re,slideCount:wt,slideCountNew:oe,index:pe,indexCached:me,displayIndex:Dn(),navCurrentIndex:ln,navCurrentIndexCached:cn,pages:on,pagesCached:un,sheet:ne,isOn:Tt,event:t||{}}}tt&&console.warn("No slides found in",t.container)};return R}();$(document).ready((function(){$(".bg-img").each((function(){var t=$(this).find("img")[0];void 0!==t&&void 0!==t.getAttribute("src")&&($(this).css({
"background-image":"url("+t.getAttribute("src")+")"}),t.parentNode.removeChild(t))}));tns({autoplay:!0,container:".hero-slider",items:1,animateDelay:"10000",speed:"1000",slideBy:"page",mode:"gallery",nav:"true",gutter:0,mouseDrag:!1,controlsText:["&#XF053;","&#XF054;"],controlsPosition:"bottom",nav:!0,loop:!0,autoplayButtonOutput:!1});$(".sticky-header button.hamburger").on("click",(function(){$(this).addClass("active"),$(".body-overlay, #sidecar, #sidecar .close").addClass("active"),$("body").addClass("locked")})),$("#sidecar .close, .body-overlay").on("click",(function(){$(this).removeClass("active"),$(".body-overlay, #sidecar, #sidecar .close").removeClass("active"),$("body").removeClass("locked")})),$(window).on("resize load",(function(){$(window).width(),$("#sidecar").css("margin-left","calc(-"+$("#sidecar").outerWidth()+"px/2)")}))}));