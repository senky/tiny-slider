var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=P.style.overflow,e.style.background="",e.style.overflow=P.style.overflow="hidden",P.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),P.style.overflow=t,P.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t,n){for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i)}function v(e,t){return e.className.indexOf(t)>=0}function h(e,t){v(e,t)||(e.className+=" "+t)}function p(e,t){v(e,t)&&(e.className=e.className.replace(t,""))}function m(e,t){return e.hasAttribute(t)}function y(e,t){return e.getAttribute(t)}function g(e){return void 0!==e.item}function x(e,t){if(e=g(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function b(e,t){e=g(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function T(e){e.style.cssText=""}function A(e){m(e,"hidden")||x(e,{hidden:""})}function E(e){m(e,"hidden")&&b(e,"hidden")}function w(e){return e.offsetWidth>0&&e.offsetHeight>0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function O(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function N(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&W;e.addEventListener(n,t[n],i)}}function D(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&W;e.removeEventListener(n,t[n],i)}}function k(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function M(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var P=document.documentElement,I=!1;try{var S=Object.defineProperty({},"passive",{get:function(){I=!0}});window.addEventListener("test",null,S)}catch(e){}var W=!!I&&{passive:!0},L=navigator.userAgent,H=!0,B={};try{B=localStorage,B.tnsApp&&B.tnsApp!==L&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){B.removeItem(e)}),B.tnsApp=L}catch(e){H=!1}H&&!localStorage&&(B={});var z=document,R=window,j={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},G=t(B.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),H),q=t(B.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),H),F=t(B.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),H),U=t(B.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),H),Q=t(B.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),H),X=t(B.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),H),V=t(B.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),H),Y=t(B.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),H),K=t(B.tTE)||n("tTE",O(Q,"Transition"),H),J=t(B.tAE)||n("tAE",O(V,"Animation"),H);F||(q=!1);var Z=function(t){function n(){return R.innerWidth||z.documentElement.clientWidth||z.body.clientWidth}function a(e){var t=e.clientWidth;return t?t:a(e.parentNode)}function r(e){var n=t[e];return!n&&At&&Tt.indexOf(e)>=0&&At.forEach(function(t){bt[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:wt;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!ot&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(Ct/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===St)i=!0;else if(i=t[e],At&&Tt.indexOf(e)>=0)for(var r=0,s=At.length;r<s;r++){var l=At[r];if(!(n>=l))break;e in bt[l]&&(i=bt[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function g(e){return G?G+"("+100*e+"% / "+Xt+")":100*e/Xt+"%"}function C(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(Ct%(n+t)+t)/2+"px":vt?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=vt?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function O(e,t,n){return e?(e+t)*Xt+"px":G?G+"("+100*Xt+"% / "+n+")":100*Xt/n+"%"}function P(e,t,n){var i="";if(vt){if(i="width:",e)i+=e+t+"px";else{var a=ot?Xt:n;i+=G?G+"(100% / "+a+")":100/a+"%"}i+=pn+";"}return i}function I(e){var t="";if(e!==!1){t=(vt?"padding-":"margin-")+(vt?"right":"bottom")+": "+e+"px;"}return t}function S(e){e=e||R.event,clearTimeout(Dt),Dt=setTimeout(function(){if(dt){var t=n();wt!==t&&(wt=t,W(),"outer"===St&&ln.emit("outerResized",Je(e)))}},100)}function W(){var e=Et,t=_t,n=Pt,i=hn;if(Ht&&(Ct=a(ht)),ft=a(pt),At&&L(),e!==Et||Ht){var r=Bt,s=Gt,u=Ht,f=Lt,d=Wt,v=dn;if(Pt=o("items"),It=o("slideBy"),dn=o("disable"),hn=!!dn||!!vn&&xt<=Pt,Pt!==n&&(nn=Xt-Pt,vi()),dn!==v&&$(dn),hn!==i&&(hn&&(_t=ot?Qt:0),H()),e!==Et&&(zt=o("speed"),Lt=o("edgePadding"),Wt=o("gutter"),Ht=o("fixedWidth"),dn||Ht===u||me(),(Gt=o("autoHeight"))!==s&&(Gt||(pt.style.height=""))),Bt=!hn&&o("arrowKeys"),Bt!==r&&(Bt?N(z,bn):D(z,bn)),En){var h=Wn,p=Ln;Wn=!hn&&o("controls"),Ln=o("controlsText"),Wn!==h&&(Wn?E(Hn):A(Hn)),Ln!==p&&(Mn.innerHTML=Ln[0],Pn.innerHTML=Ln[1])}if(wn){var m=zn;zn=!hn&&o("nav"),zn!==m&&(zn?(E(Rn),Ke()):A(Rn))}if(Nn){var y=li;li=!hn&&o("touch"),li!==y&&ot&&(li?N(mt,Tn):D(mt,Tn))}if(Dn){var g=fi;fi=!hn&&o("mouseDrag"),fi!==g&&ot&&(fi?N(mt,An):D(mt,An))}if(On){var x=Zn,b=ti,T=ii,w=ei;if(hn?Zn=ti=ii=!1:(Zn=o("autoplay"),Zn?(ti=o("autoplayHoverPause"),ii=o("autoplayResetOnVisibility")):ti=ii=!1),ei=o("autoplayText"),$n=o("autoplayTimeout"),Zn!==x&&(Zn?(ni&&E(ni),Vn||Kn||De()):(ni&&A(ni),Vn&&ke())),ti!==b&&(ti?N(mt,gn):D(mt,gn)),ii!==T&&(ii?N(z,xn):D(z,xn)),ni&&ei!==w){var k=Zn?1:0,M=ni.innerHTML,S=M.length-w[k].length;M.substring(S)===w[k]&&(ni.innerHTML=M.substring(0,S)+ei[k])}}if(!F){if(hn||Lt===f&&Wt===d||(pt.style.cssText=C(Lt,Wt,Ht)),ot&&vt&&(Ht!==u||Wt!==d||Pt!==n)&&(mt.style.width=O(Ht,Wt,Pt)),vt&&(Pt!==n||Wt!==d||Ht!=u)){var W=P(Ht,Wt,Pt)+I(Wt);qt.removeRule(c(qt)-1),l(qt,"#"+fn+" > .tns-item",W,c(qt))}Ht||_t!==t||ge(0)}_t!==t&&(ln.emit("indexChanged",Je()),ge(0),en=_t),Pt!==n&&(ne(),se(),ee(),navigator.msMaxTouchPoints&&re())}vt||dn||(ae(),Ve(),me()),B(!0),ee()}function L(){Et=0,At.forEach(function(e,t){wt>=e&&(Et=t+1)})}function H(){var e="tns-transparent";if(hn){if(!Mt){if(Lt&&(pt.style.margin="0px"),Qt)for(var t=Qt;t--;)ot&&h(gt[t],e),h(gt[Xt-t-1],e);Mt=!0}}else if(Mt){if(Lt&&!Ht&&F&&(pt.style.margin=""),Qt)for(var t=Qt;t--;)ot&&p(gt[t],e),p(gt[Xt-t-1],e);Mt=!1}}function B(e){Ht&&Lt&&(hn||Ct<=Ht+Wt?"0px"!==pt.style.margin&&(pt.style.margin="0px"):e&&(pt.style.cssText=C(Lt,Wt,Ht)))}function $(e){var t=gt.length;if(e){if(qt.disabled=!0,mt.className=mt.className.replace(un.substring(1),""),T(mt),jt)for(var n=Qt;n--;)ot&&A(gt[n]),A(gt[t-n-1]);if(vt&&ot||T(pt),!ot)for(var i=_t,a=_t+xt;i<a;i++){var r=gt[i];T(r),p(r,st),p(r,ut)}}else{if(qt.disabled=!1,mt.className+=un,vt||ae(),me(),jt)for(var n=Qt;n--;)ot&&E(gt[n]),E(gt[t-n-1]);if(!ot)for(var i=_t,a=_t+xt;i<a;i++){var r=gt[i],o=i<_t+Pt?st:ut;r.style.left=100*(i-_t)/Pt+"%",h(r,o)}}}function _(){if(Ft&&!dn){var e=_t,t=_t+Pt;for(Lt&&(e-=1,t+=1);e<t;e++)d(gt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},N(e,t),v(e,"loaded")||(e.src=y(e,"data-src"),h(e,"loaded"))})}}function ee(){if(Gt&&!dn){for(var e=[],t=[],n=[],i=_t,a=_t+Pt;i<a;i++)d(gt[i].querySelectorAll("img"),function(i){i.addEventListener("load",function e(){t.push(i),i.removeEventListener("load",e)}),i.addEventListener("error",function e(){n.push(i),i.removeEventListener("error",e)});var a=i.src;i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i.src=a,e.push(i)});if(!e.length)return void ie();te(e,t,n)}}function te(e,t,n){if(e.forEach(function(i,a){(t.indexOf(i)>=0||n.indexOf(i)>=0)&&e.splice(a,1)}),!e.length)return void ie();setTimeout(function(){te(e,t,n)},16)}function ne(){_(),oe(),ve(),Ke(),le()}function ie(){if(Gt){for(var e,t=[],n=_t,i=_t+Pt;n<i;n++)t.push(gt[n].offsetHeight);e=Math.max.apply(null,t),pt.style.height!==e&&(Q&&he(zt),pt.style.height=e+"px")}}function ae(){Nt=[0];for(var e,t=gt[0].getBoundingClientRect().top,n=1;n<Xt;n++)e=gt[n].getBoundingClientRect().top,Nt.push(e-t)}function re(){ht.style.msScrollSnapPointsX="snapInterval(0%, "+100/Pt+"%)"}function oe(){for(var e=_t+Math.min(xt,Pt),t=Xt;t--;){var n=gt[t];t>=_t&&t<e?m(n,"tabindex")&&(x(n,{"aria-hidden":"false"}),b(n,["tabindex"]),h(n,kn)):(m(n,"tabindex")||x(n,{"aria-hidden":"true",tabindex:"-1"}),v(n,kn)&&p(n,kn))}}function se(){if(!ot){for(var e=_t+Math.min(xt,Pt),t=Xt;t--;){var n=gt[t];t>=_t&&t<e?(h(n,"tns-moving"),n.style.left=100*(t-_t)/Pt+"%",h(n,st),p(n,ut)):n.style.left&&(n.style.left="",h(n,ut),p(n,st)),p(n,lt)}setTimeout(function(){d(gt,function(e){p(e,"tns-moving")})},300)}}function le(){if(zn&&(Fn=qn!==-1?qn:_t%xt,qn=-1,Fn!==Un)){var e=Bn[Un],t=Bn[Fn];x(e,{tabindex:"-1","aria-selected":"false"}),x(t,{tabindex:"0","aria-selected":"true"}),p(e,Qn),h(t,Qn)}}function ce(e){return e.nodeName.toLowerCase()}function ue(e){return"button"===ce(e)}function fe(e){return"true"===e.getAttribute("aria-disabled")}function de(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function ve(){if(Wn&&!Rt&&!jt){var e=In?Mn.disabled:fe(Mn),t=Sn?Pn.disabled:fe(Pn),n=_t===tn,i=!Rt&&_t===nn;n&&!e&&de(In,Mn,!0),!n&&e&&de(In,Mn,!1),i&&!t&&de(Sn,Pn,!0),!i&&t&&de(Sn,Pn,!1)}}function he(e,t){e=e?e/1e3+"s":"",t=t||mt,t.style[Q]=e,ot||(t.style[V]=e),vt||(pt.style[Q]=e)}function pe(){var e;if(vt)if(Ht)e=-(Ht+Wt)*_t+"px";else{var t=U?Xt:Pt;e=100*-_t/t+"%"}else e=-Nt[_t]+"px";return e}function me(e){e||(e=pe()),mt.style[Kt]=Jt+e+Zt}function ye(e,t,n,i){for(var a=e,r=e+Pt;a<r;a++){var o=gt[a];i||(o.style.left=100*(a-_t)/Pt+"%"),Q&&he(zt,o),ct&&X&&(o.style[X]=o.style[Y]=ct*(a-e)/1e3+"s"),p(o,t),h(o,n),i&&Ut.push(o)}}function ge(e,t){isNaN(e)&&(e=zt),Vn&&!w(mt)&&(e=0),Q&&he(e),hi(e,t)}function xe(e,t){Yt&&vi(),(_t!==en||t)&&(ln.emit("indexChanged",Je()),ln.emit("transitionStart",Je()),Vn&&e&&["click","keydown"].indexOf(e.type)>=0&&ke(),on=!0,ge())}function be(e){return e.toLowerCase().replace(/-/g,"")}function Te(e){if(ot||on){if(ln.emit("transitionEnd",Je(e)),!ot&&Ut.length>0)for(var t=0;t<Pt;t++){var n=Ut[t];n.style.left="",Q&&he(0,n),ct&&X&&(n.style[X]=n.style[Y]=""),p(n,lt),h(n,ut)}if(!e||!ot&&e.target.parentNode===mt||e.target===mt&&be(e.propertyName)===be(Kt)){if(!Yt){var i=_t;vi(),_t!==i&&(ln.emit("indexChanged",Je()),Q&&he(0),me())}ee(),"inner"===St&&ln.emit("innerLoaded",Je()),on=!1,Un=Fn,en=_t}}}function Ae(e,t){if(!hn)if("prev"===e)Ee(t,-1);else if("next"===e)Ee(t,1);else if(!on){var n=_t%xt,i=0;if(n<0&&(n+=xt),"first"===e)i=-n;else if("last"===e)i=xt-Pt-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%xt;a<0&&(a+=xt),i=a-n}_t+=i,_t%xt!=en%xt&&xe(t)}}function Ee(e,t){if(!on){var n;if(!t){e=e||R.event;for(var i=e.target||e.srcElement;i!==Hn&&[Mn,Pn].indexOf(i)<0;)i=i.parentNode;var a=[Mn,Pn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(Rt){if(_t===tn&&t===-1)return void Ae("last",e);if(_t===nn&&1===t)return void Ae(0,e)}t&&(_t+=It*t,xe(n||e&&"keydown"===e.type?e:null))}}function we(e){if(!on){e=e||R.event;for(var t,n=e.target||e.srcElement;n!==Rn&&!m(n,"data-nav");)n=n.parentNode;m(n,"data-nav")&&(t=qn=[].indexOf.call(Bn,n),Ae(t,e))}}function Ce(){Xn=setInterval(function(){Ee(null,_n)},$n),Vn=!0}function Oe(){clearInterval(Xn),Vn=!1}function Ne(e,t){x(ni,{"data-action":e}),ni.innerHTML=ai[0]+e+ai[1]+t}function De(){Ce(),ni&&Ne("stop",ei[1])}function ke(){Oe(),ni&&Ne("start",ei[0])}function Me(){Zn&&!Vn&&(De(),Kn=!1)}function Pe(){Vn&&(ke(),Kn=!0)}function Ie(){Vn?(ke(),Kn=!0):(De(),Kn=!1)}function Se(){z.hidden?Vn&&(Oe(),Jn=!0):Jn&&(Ce(),Jn=!1)}function We(){Vn&&(Oe(),Yn=!0)}function Le(){Yn&&(Ce(),Yn=!1)}function He(e){switch(e=e||R.event,e.keyCode){case j.LEFT:Ee(e,-1);break;case j.RIGHT:Ee(e,1)}}function Be(e){switch(e=e||R.event,e.keyCode){case j.LEFT:case j.UP:case j.PAGEUP:Mn.disabled||Ee(e,-1);break;case j.RIGHT:case j.DOWN:case j.PAGEDOWN:Pn.disabled||Ee(e,1);break;case j.HOME:Ae(0,e);break;case j.END:Ae(xt-1,e)}}function ze(e){e.focus()}function Re(e){function n(e){return t.navContainer?e:jn[e]}var i=z.activeElement;if(m(i,"data-nav")){e=e||R.event;var a=e.keyCode,r=[].indexOf.call(Bn,i),o=jn.length,s=jn.indexOf(r);switch(t.navContainer&&(o=xt,s=r),a){case j.LEFT:case j.PAGEUP:s>0&&ze(Bn[n(s-1)]);break;case j.UP:case j.HOME:s>0&&ze(Bn[n(0)]);break;case j.RIGHT:case j.PAGEDOWN:s<o-1&&ze(Bn[n(s+1)]);break;case j.DOWN:case j.END:s<o-1&&ze(Bn[n(o-1)]);break;case j.ENTER:case j.SPACE:qn=r,Ae(r,e)}}}function je(){ge(0,mt.scrollLeft()),en=_t}function Ge(e){return e.target||e.srcElement}function qe(e){return e.type.indexOf("touch")>=0}function Fe(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ue(e){if(!on){e=e||R.event;var t;qe(e)?(t=e.changedTouches[0],ln.emit("touchStart",Je(e))):(t=e,["img","a"].indexOf(ce(Ge(t)))>=0&&Fe(t),ln.emit("dragStart",Je(e))),ci=parseInt(t.clientX),ui=parseInt(t.clientY),ri=parseFloat(mt.style[Kt].replace(Jt,"").replace(Zt,""))}}function Qe(e){if(!on&&null!==ci){e=e||R.event;var n=qe(e)?e.changedTouches[0]:e;if(oi=parseInt(n.clientX)-ci,si=parseInt(n.clientY)-ui,"?"===rn&&(rn=f(u(si,oi),an)===t.axis),rn&&(Math.abs(oi)>5||Math.abs(si)>5)){qe(e)?ln.emit("touchMove",Je(e)):(di||(di=!0),ln.emit("dragMove",Je(e))),kt||(kt=!0);var i=ri;if(vt)if(Ht)i+=oi,i+="px";else{var a=U?oi*Pt*100/(ft*Xt):100*oi/ft;i+=a,i+="%"}else i+=si,i+="px";U&&he(0),mt.style[Kt]=Jt+i+Zt}}}function Xe(e){if(an&&(rn="?"),!on)if(kt){kt=!1,e=e||R.event;var t;qe(e)?(t=e.changedTouches[0],ln.emit("touchEnd",Je(e))):(t=e,ln.emit("dragEnd",Je(e))),oi=parseInt(t.clientX)-ci,si=parseInt(t.clientY)-ui,ci=ui=null;var n=Boolean(vt?oi:si);if(vt){var i=-oi*Pt/ft;i=oi>0?Math.floor(i):Math.ceil(i),_t+=i}else{var a=-(ri+si);if(a<=0)_t=tn;else if(a>=Nt[Nt.length-1])_t=nn;else{var r=0;do{r++,_t=si<0?r+1:r}while(r<Xt&&a>=Nt[r+1])}}if(xe(e,n),di){di=!1;var o=Ge(e);N(o,{click:function e(t){Fe(t),D(o,{click:e})}})}}else ci=ui=null}function Ve(){pt.style.height=Nt[_t+Pt]-Nt[_t]+"px"}function Ye(){jn=[];for(var e=_t%xt%Pt;e<xt;)!jt&&e+Pt>xt&&(e=xt-Pt),jn.push(e),e+=Pt;(jt&&jn.length*Pt<xt||!jt&&jn[0]>0)&&jn.unshift(0)}function Ke(){zn&&!Cn&&(Ye(),jn!==Gn&&(d(Bn,function(e,t){jn.indexOf(t)<0?A(e):E(e)}),Gn=jn))}function Je(e){return{container:mt,slideItems:gt,navContainer:Rn,navItems:Bn,controlsContainer:Hn,hasControls:En,prevButton:Mn,nextButton:Pn,items:Pt,slideBy:It,cloneCount:Qt,slideCount:xt,slideCountNew:Xt,index:_t,indexCached:en,navCurrentIndex:Fn,navCurrentIndexCached:Un,visibleNavIndexes:jn,visibleNavIndexesCached:Gn,sheet:qt,event:e||{}}}t=e({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},t||{});for(var Ze=R.console&&"function"==typeof R.console.warn,$e=["container","controlsContainer","navContainer","autoplayButton"],_e=$e.length;_e--;){var et=$e[_e];if("string"==typeof t[et]){var tt=z.querySelector(t[et]);if(!tt||!tt.nodeName)return void(Ze&&console.warn("Can't find",t[et]));t[et]=tt}}if(t.container.children&&t.container.children.length<1)return void(Ze&&console.warn("No slides found in",t.container));if(t.responsive){var nt={},it=t.responsive;for(var at in it){var rt=it[at];nt[at]="number"==typeof rt?{items:rt}:rt}t.responsive=nt,nt=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var ot="carousel"===t.mode;if(!ot){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var st="tns-fadeIn",lt="tns-fadeOut",ct=!1,ut=t.animateNormal||"tns-normal";K&&J&&(st=t.animateIn||st,lt=t.animateOut||lt,ct=t.animateDelay||ct)}var ft,dt,vt="horizontal"===t.axis,ht=z.createElement("div"),pt=z.createElement("div"),mt=t.container,yt=mt.parentNode,gt=mt.children,xt=gt.length,bt=t.responsive,Tt=[],At=!1,Et=0,wt=n();if(t.fixedWidth)var Ct=a(yt);if(bt){At=Object.keys(bt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),At.forEach(function(e){Tt=Tt.concat(Object.keys(bt[e]))});var Ot=[];Tt.forEach(function(e){Ot.indexOf(e)<0&&Ot.push(e)}),Tt=Ot,L()}var Nt,Dt,kt,Mt,Pt=o("items"),It="page"===o("slideBy")?Pt:o("slideBy"),St=t.nested,Wt=o("gutter"),Lt=o("edgePadding"),Ht=o("fixedWidth"),Bt=o("arrowKeys"),zt=o("speed"),Rt=t.rewind,jt=!Rt&&t.loop,Gt=o("autoHeight"),qt=s(),Ft=t.lazyload,Ut=[],Qt=jt?2*xt:0,Xt=ot?xt+2*Qt:xt+Qt,Vt=!(!Ht||jt||Lt),Yt=!ot||!jt,Kt=vt?"left":"top",Jt="",Zt="",$t=o("startIndex"),_t=$t?function(e){return e%=xt,e<0&&(e+=xt),e=Math.min(e,Xt-Pt)}($t):ot?Qt:0,en=_t,tn=0,nn=Xt-Pt,an=t.swipeAngle,rn=!an||"?",on=!1,sn=t.onInit,ln=new k,cn=mt.id,un=" tns-slider tns-"+t.mode,fn=mt.id||i(),dn=o("disable"),vn=t.freezable,hn=!!dn||!!vn&&xt<=Pt,pn="inner"===St?" !important":"",mn={click:Ee,keydown:Be},yn={click:we,keydown:Re},gn={mouseover:We,mouseout:Le},xn={visibilitychange:Se},bn={keydown:He},Tn={touchstart:Ue,touchmove:Qe,touchend:Xe,touchcancel:Xe},An={mousedown:Ue,mousemove:Qe,mouseup:Xe,mouseleave:Xe},En=r("controls"),wn=r("nav"),Cn=t.navAsThumbnails,On=r("autoplay"),Nn=r("touch"),Dn=r("mouseDrag"),kn="tns-slide-active";if(En)var Mn,Pn,In,Sn,Wn=o("controls"),Ln=o("controlsText"),Hn=t.controlsContainer;if(wn)var Bn,zn=o("nav"),Rn=t.navContainer,jn=[],Gn=jn,qn=-1,Fn=_t%xt,Un=Fn,Qn="tns-nav-active";if(On)var Xn,Vn,Yn,Kn,Jn,Zn=o("autoplay"),$n=o("autoplayTimeout"),_n="forward"===t.autoplayDirection?1:-1,ei=o("autoplayText"),ti=o("autoplayHoverPause"),ni=t.autoplayButton,ii=o("autoplayResetOnVisibility"),ai=["<span class='tns-visually-hidden'>"," animation</span>"];if(Nn)var ri,oi,si,li=o("touch"),ci=null,ui=null;if(Dn)var fi=o("mouseDrag"),di=!1;hn&&(Wn=zn=li=fi=Bt=Zn=ti=ii=!1),U&&(Kt=U,Jt="translate",Jt+=vt?"X(":"Y(",Zt=")"),function(){ht.appendChild(pt),yt.insertBefore(ht,mt),pt.appendChild(mt),ft=a(pt);var e="tns-outer",n="tns-inner",i=r("gutter");if(ot?vt&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),ht.className=e,pt.className=n,pt.id=fn+"-iw",Gt&&(pt.className+=" tns-ah",pt.style[Q]=zt/1e3+"s"),""===mt.id&&(mt.id=fn),un+=q?" tns-subpixel":" tns-no-subpixel",un+=G?" tns-calc":" tns-no-calc",ot&&(un+=" tns-"+t.axis),mt.className+=un,ot&&K){var s={};s[K]=Te,N(mt,s)}e=n=null;for(var u=0;u<xt;u++){var f=gt[u];f.id||(f.id=fn+"-item"+u),h(f,"tns-item"),!ot&&ut&&h(f,ut),x(f,{"aria-hidden":"true",tabindex:"-1"})}if(jt||Lt){for(var v=z.createDocumentFragment(),m=z.createDocumentFragment(),y=Qt;y--;){var T=y%xt,E=gt[T].cloneNode(!0);if(b(E,"id"),m.insertBefore(E,m.firstChild),ot){var w=gt[xt-1-T].cloneNode(!0);b(w,"id"),v.appendChild(w)}}mt.insertBefore(v,mt.firstChild),mt.appendChild(m),gt=mt.children}for(var D=_t,k=_t+Math.min(xt,Pt);D<k;D++){var f=gt[D];x(f,{"aria-hidden":"false"}),b(f,["tabindex"]),h(f,kn),ot||(f.style.left=100*(D-_t)/Pt+"%",h(f,st),p(f,ut))}if(ot&&vt&&(q?(l(qt,"#"+fn+" > .tns-item","font-size:"+R.getComputedStyle(gt[0]).fontSize+";",c(qt)),l(qt,"#"+fn,"font-size:0;",c(qt))):d(gt,function(e,t){e.style.marginLeft=g(t)})),F){var M=C(t.edgePadding,t.gutter,t.fixedWidth);l(qt,"#"+fn+"-iw",M,c(qt)),ot&&vt&&(M="width:"+O(t.fixedWidth,t.gutter,t.items),l(qt,"#"+fn,M,c(qt))),(vt||t.gutter)&&(M=P(t.fixedWidth,t.gutter,t.items)+I(t.gutter),l(qt,"#"+fn+" > .tns-item",M,c(qt)))}else if(pt.style.cssText=C(Lt,Wt,Ht),ot&&vt&&(mt.style.width=O(Ht,Wt,Pt)),vt||Wt){var M=P(Ht,Wt,Pt)+I(Wt);l(qt,"#"+fn+" > .tns-item",M,c(qt))}if(vt||dn||(ae(),Ve()),bt&&F&&At.forEach(function(e){var t=bt[e],n="",i="",a="",s="",l=o("items",e),c=o("fixedWidth",e),u=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+fn+"-iw{"+C(u,f,c)+"}"),ot&&vt&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+fn+"{width:"+O(c,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!ot&&"items"in t)&&(s+=P(c,f,l)),"gutter"in t&&(s+=I(f)),s.length>0&&(s="#"+fn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&qt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",qt.cssRules.length)}),ot&&!dn&&me(),navigator.msMaxTouchPoints&&(h(ht,"ms-touch"),N(ht,{scroll:je}),re()),wn){var L=ot?Qt:0;if(Rn)x(Rn,{"aria-label":"Carousel Pagination"}),Bn=Rn.children,d(Bn,function(e,t){x(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":gt[L+t].id})});else{for(var j="",U=Cn?"":" hidden",D=0;D<xt;D++)j+='<button data-nav="'+D+'" tabindex="-1" aria-selected="false" aria-controls="'+gt[L+D].id+U+'" type="button"></button>';j='<div class="tns-nav" aria-label="Carousel Pagination">'+j+"</div>",ht.insertAdjacentHTML("afterbegin",j),Rn=ht.querySelector(".tns-nav"),Bn=Rn.children}if(Ke(),Q){var X=Q.substring(0,Q.length-18).toLowerCase(),M="transition: all "+zt/1e3+"s";X&&(M="-"+X+"-"+M),l(qt,"[aria-controls^="+fn+"-item]",M,c(qt))}x(Bn[Fn],{tabindex:"0","aria-selected":"true"}),h(Bn[Fn],Qn),N(Rn,yn),zn||A(Rn)}if(On){var V=Zn?"stop":"start";ni?x(ni,{"data-action":V}):t.autoplayButtonOutput&&(pt.insertAdjacentHTML("beforebegin",'<button data-action="'+V+'" type="button">'+ai[0]+V+ai[1]+ei[0]+"</button>"),ni=ht.querySelector("[data-action]")),ni&&N(ni,{click:Ie}),Zn?(De(),ti&&N(mt,gn),ii&&N(mt,xn)):ni&&A(ni)}En&&(Hn?(Mn=Hn.children[0],Pn=Hn.children[1],x(Hn,{"aria-label":"Carousel Navigation",tabindex:"0"}),x(Mn,{"data-controls":"prev"}),x(Pn,{"data-controls":"next"}),x(Hn.children,{"aria-controls":fn,tabindex:"-1"})):(ht.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+fn+'" type="button">'+Ln[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+fn+'" type="button">'+Ln[1]+"</button></div>"),Hn=ht.querySelector(".tns-controls"),Mn=Hn.children[0],Pn=Hn.children[1]),In=ue(Mn),Sn=ue(Pn),ve(),N(Hn,mn),Wn||A(Hn)),li&&N(mt,Tn),fi&&N(mt,An),Bt&&N(z,bn),"inner"===St?ln.on("outerResized",function(){W(),ln.emit("innerLoaded",Je())}):(N(R,{resize:S}),"outer"===St&&ln.on("innerLoaded",ee)),_(),ee(),H(),B(),ln.on("indexChanged",ne),"function"==typeof sn&&sn(Je()),"inner"===St&&ln.emit("innerLoaded",Je()),dn&&$(!0),dt=!0}();var vi=function(){return jt?function(){var e=tn,t=nn;if(ot)if(e+=It,t-=It,Lt)e+=1,t-=1;else if(Ht){var n=Wt?Wt:0;Ct%(Ht+n)>n&&(t-=1)}if(_t>t)for(;_t>=e+xt;)_t-=xt;else if(_t<e)for(;_t<=t-xt;)_t+=xt}:function(){_t=Math.max(tn,Math.min(nn,_t))}}(),hi=function(){return ot?function(e,t){t||(t=pe()),Vt&&_t===nn&&(t=-((Ht+Wt)*Xt-ft)+"px"),Q||!e?(me(t),e&&w(mt)||Te()):M(mt,Kt,Jt,Zt,t,zt,Te),vt||Ve()}:function(e){Ut=[];var t={};t[K]=t[J]=Te,D(gt[en],t),N(gt[_t],t),ye(en,st,lt,!0),ye(_t,ut,st),K&&J&&e||Te()}}();return{getInfo:Je,events:ln,goTo:Ae,play:Me,pause:Pe,isOn:dt,updateSliderHeight:ie,rebuild:function(){return Z(t)},destroy:function(){if(D(R,{resize:S}),D(z,bn),qt.disabled=!0,jt)for(var e=Qt;e--;)ot&&gt[0].remove(),gt[gt.length-1].remove();var n=["tns-item",kn];ot||(n=n.concat("tns-normal",st));for(var i=xt;i--;){var a=gt[i];a.id.indexOf(fn+"-item")>=0&&(a.id=""),n.forEach(function(e){p(a,e)})}if(b(gt,["style","aria-hidden","tabindex"]),gt=fn=xt=Xt=Qt=null,Wn&&(D(Hn,mn),t.controlsContainer&&(b(Hn,["aria-label","tabindex"]),b(Hn.children,["aria-controls","aria-disabled","tabindex"])),Hn=Mn=Pn=null),zn&&(D(Rn,yn),t.navContainer&&(b(Rn,["aria-label"]),b(Bn,["aria-selected","aria-controls","tabindex"])),Rn=Bn=null),Zn&&(clearInterval(Xn),ni&&D(ni,{click:Ie}),D(mt,gn),D(mt,xn),t.autoplayButton&&b(ni,["data-action"])),mt.id=cn||"",mt.className=mt.className.replace(un,""),T(mt),ot&&K){var r={};r[K]=Te,D(mt,r)}D(mt,Tn),D(mt,An),yt.insertBefore(mt,ht),ht.remove(),ht=pt=mt=_t=en=Pt=It=Fn=Un=En=jn=Gn=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=dt=!1}}};return Z}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
