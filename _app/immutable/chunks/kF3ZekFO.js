import{D as e,G as t,J as n,L as r,R as i,S as a,X as o,Y as s,Z as c,b as l,ct as u,dt as d,ft as f,it as p,lt as ee,n as m,nt as h,ot as g,st as _,tt as te,w as v,x as y,z as ne}from"./B1My1T8J.js";import"./CEzhzwSo.js";import"./CZmotNGM.js";function re(e,t,n){return(t=ae(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?b(Object(n),!0).forEach(function(t){re(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ie(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ae(e){var t=ie(e,`string`);return typeof t==`symbol`?t:t+``}var S=()=>{},C={},w={},T=null,E={mark:S,measure:S};try{typeof window<`u`&&(C=window),typeof document<`u`&&(w=document),typeof MutationObserver<`u`&&(T=MutationObserver),typeof performance<`u`&&(E=performance)}catch{}var{userAgent:D=``}=C.navigator||{},O=C,k=w,oe=T,A=E;O.document;var j=!!k.documentElement&&!!k.head&&typeof k.addEventListener==`function`&&typeof k.createElement==`function`,se=~D.indexOf(`MSIE`)||~D.indexOf(`Trident/`),ce=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,le=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ue={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},de={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},fe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],M=`classic`,N=`duotone`,pe=[M,N,`sharp`,`sharp-duotone`],me={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},he={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},ge=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),_e={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},ve=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ye={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},be=[`kit`],xe={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Se=[`fak`,`fakd`],Ce={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},we={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Te={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ee=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],De=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Oe={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ke={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Ae={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},je={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Me=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Ne=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...Ee,...Me],Pe=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Fe=[1,2,3,4,5,6,7,8,9,10],Ie=Fe.concat([11,12,13,14,15,16,17,18,19,20]),Le=[...Object.keys(Ae),...Pe,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY].concat(Fe.map(e=>`${e}x`),Ie.map(e=>`w-${e}`)),Re={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},P=`___FONT_AWESOME___`,ze=16,Be=`fa`,Ve=`svg-inline--fa`,F=`data-fa-i2svg`,He=`data-fa-pseudo-element`,Ue=`data-fa-pseudo-element-pending`,We=`data-prefix`,Ge=`data-icon`,Ke=`fontawesome-i2svg`,qe=`async`,Je=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ye=(()=>{try{return!0}catch{return!1}})();function I(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[M]}})}var Xe=x({},ue);Xe[M]=x(x(x(x({},{"fa-duotone":`duotone`}),ue[M]),ye.kit),ye[`kit-duotone`]);var Ze=I(Xe),Qe=x({},_e);Qe[M]=x(x(x(x({},{duotone:`fad`}),Qe[M]),we.kit),we[`kit-duotone`]);var $e=I(Qe),et=x({},je);et[M]=x(x({},et[M]),Ce.kit);var tt=I(et),nt=x({},ke);nt[M]=x(x({},nt[M]),xe.kit),I(nt);var rt=ce,it=`fa-layers-text`,at=le;I(x({},me));var ot=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],st=de,ct=[...be,...Le],L=O.FontAwesomeConfig||{};function lt(e){var t=k.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ut(e){return e===``?!0:e===`false`?!1:e===`true`||e}k&&typeof k.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=ut(lt(t));r!=null&&(L[n]=r)});var dt={styleDefault:`solid`,familyDefault:M,cssPrefix:Be,replacementClass:Ve,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};L.familyPrefix&&(L.cssPrefix=L.familyPrefix);var R=x(x({},dt),L);R.autoReplaceSvg||(R.observeMutations=!1);var z={};Object.keys(dt).forEach(e=>{Object.defineProperty(z,e,{enumerable:!0,set:function(t){R[e]=t,B.forEach(e=>e(z))},get:function(){return R[e]}})}),Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){R.cssPrefix=e,B.forEach(e=>e(z))},get:function(){return R.cssPrefix}}),O.FontAwesomeConfig=z;var B=[];function ft(e){return B.push(e),()=>{B.splice(B.indexOf(e),1)}}var V=ze,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pt(e){if(!e||!j)return;let t=k.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=k.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return k.head.insertBefore(t,r),e}var mt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function U(){let e=12,t=``;for(;e-->0;)t+=mt[Math.random()*62|0];return t}function W(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ht(e){return e.classList?W(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function gt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function _t(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${gt(e[n])}" `,``).trim()}function vt(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function yt(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function bt(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function xt(e){let{transform:t,width:n=ze,height:r=ze,startCentered:i=!1}=e,a=``;return a+=i&&se?`translate(${t.x/V-n/2}em, ${t.y/V-r/2}em) `:i?`translate(calc(-50% + ${t.x/V}em), calc(-50% + ${t.y/V}em)) `:`translate(${t.x/V}em, ${t.y/V}em) `,a+=`scale(${t.size/V*(t.flipX?-1:1)}, ${t.size/V*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var St=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ct(){let e=Be,t=Ve,n=z.cssPrefix,r=z.replacementClass,i=St;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var wt=!1;function Tt(){z.autoAddCss&&!wt&&(pt(Ct()),wt=!0)}var Et={mixout(){return{dom:{css:Ct,insertCss:Tt}}},hooks(){return{beforeDOMElementCreation(){Tt()},beforeI2svg(){Tt()}}}},G=O||{};G[P]||(G[P]={}),G[P].styles||(G[P].styles={}),G[P].hooks||(G[P].hooks={}),G[P].shims||(G[P].shims=[]);var K=G[P],Dt=[],Ot=function(){k.removeEventListener(`DOMContentLoaded`,Ot),kt=1,Dt.map(e=>e())},kt=!1;j&&(kt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),kt||k.addEventListener(`DOMContentLoaded`,Ot));function At(e){j&&(kt?setTimeout(e,0):Dt.push(e))}function jt(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?gt(e):`<${t} ${_t(n)}>${r.map(jt).join(``)}</${t}>`}function Mt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Nt=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Pt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Nt(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Ft(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function It(e){let t=Ft(e);return t.length===1?t[0].toString(16):null}function Lt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rt(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function zt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Rt(t);typeof K.hooks.addPack==`function`&&!n?K.hooks.addPack(e,Rt(t)):K.styles[e]=x(x({},K.styles[e]||{}),r),e===`fas`&&zt(`fa`,t)}var{styles:Bt,shims:Vt}=K,Ht=Object.keys(tt),Ut=Ht.reduce((e,t)=>(e[t]=Object.keys(tt[t]),e),{}),Wt=null,Gt={},Kt={},qt={},Jt={},Yt={};function Xt(e){return~ct.indexOf(e)}function Zt(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Xt(i)?i:null}var Qt=()=>{let e=e=>Pt(Bt,(t,n,r)=>(t[r]=Pt(n,e,{}),t),{});Gt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Kt=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Yt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in Bt||z.autoFetchSvg,n=Pt(Vt,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});qt=n.names,Jt=n.unicodes,Wt=on(z.styleDefault,{family:z.familyDefault})};ft(e=>{Wt=on(e.styleDefault,{family:z.familyDefault})}),Qt();function $t(e,t){return(Gt[e]||{})[t]}function en(e,t){return(Kt[e]||{})[t]}function q(e,t){return(Yt[e]||{})[t]}function tn(e){return qt[e]||{prefix:null,iconName:null}}function nn(e){let t=Jt[e],n=$t(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Wt}var rn=()=>({prefix:null,iconName:null,rest:[]});function an(e){let t=M,n=Ht.reduce((e,t)=>(e[t]=`${z.cssPrefix}-${t}`,e),{});return pe.forEach(r=>{(e.includes(n[r])||e.some(e=>Ut[r].includes(e)))&&(t=r)}),t}function on(e){let{family:t=M}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ze[t][e];if(t===N&&!e)return`fad`;let r=$e[t][e]||$e[t][n],i=e in K.styles?e:null;return r||i||null}function sn(e){let t=[],n=null;return e.forEach(e=>{let r=Zt(z.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function cn(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function ln(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Ne.concat(De),i=cn(e.filter(e=>r.includes(e))),a=cn(e.filter(e=>!Ne.includes(e))),[o=null]=i.filter(e=>(n=e,!fe.includes(e))),s=an(i),c=x(x({},sn(a)),{},{prefix:on(o,{family:s})});return x(x(x({},c),pn({values:e,family:s,styles:Bt,config:z,canonical:c,givenPrefix:n})),un(t,n,c))}function un(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?tn(i):{},o=q(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Bt.far&&Bt.fas&&!z.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var dn=pe.filter(e=>e!==M||e!==N),fn=Object.keys(je).filter(e=>e!==M).map(e=>Object.keys(je[e])).flat();function pn(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===N,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&dn.includes(n)&&(Object.keys(a).find(e=>fn.includes(e))||o.autoFetchSvg)&&(r.prefix=ge.get(n).defaultShortPrefixId,r.iconName=q(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=J()||`fas`),r}var mn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=x(x({},this.definitions[t]||{}),e[t]),zt(t,e[t]);let n=tt[M][t];n&&zt(n,e[t]),Qt()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},hn=[],Y={},X={},gn=Object.keys(X);function _n(e,t){let{mixoutsTo:n}=t;return hn=e,Y={},Object.keys(X).forEach(e=>{gn.indexOf(e)===-1&&delete X[e]}),hn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{Y[e]||(Y[e]=[]),Y[e].push(t[e])})}e.provides&&e.provides(X)}),n}function vn(e,t){var n=[...arguments].slice(2);return(Y[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function Z(e){var t=[...arguments].slice(1);(Y[e]||[]).forEach(e=>{e.apply(null,t)})}function Q(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function yn(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||J();if(t)return t=q(n,t)||t,Mt(bn.definitions,n,t)||Mt(K.styles,n,t)}var bn=new mn,$={noAuto:()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,Z(`noAuto`)},config:z,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Z(`beforeI2svg`,e),Q(`pseudoElements2svg`,e),Q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,At(()=>{xn({autoReplaceSvgRoot:t}),Z(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=on(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${z.cssPrefix}-`)>-1||e.match(rt))){let t=ln(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||J(),iconName:q(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=J();return{prefix:t,iconName:q(t,e)||e}}}},library:bn,findIconDefinition:yn,toHtml:jt},xn=function(){let{autoReplaceSvgRoot:e=k}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(K.styles).length>0||z.autoFetchSvg)&&j&&z.autoReplaceSvg&&$.dom.i2svg({node:e})};function Sn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>jt(e))}}),Object.defineProperty(e,"node",{get:function(){if(!j)return;let t=k.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function Cn(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(yt(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=vt(x(x({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function wn(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${z.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:x(x({},i),{},{id:o}),children:r}]}]}function Tn(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,ee=Se.includes(r),m=[z.replacementClass,i?`${z.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),h={children:[],attributes:x(x({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:m,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`})},g=ee&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(h.attributes[F]=``),s&&(h.children.push({tag:`title`,attributes:{id:h.attributes[`aria-labelledby`]||`title-${l||U()}`},children:[s]}),delete h.attributes.title);let _=x(x({},h),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:x(x({},g),u.styles)}),{children:te,attributes:v}=n.found&&t.found?Q(`generateAbstractMask`,_)||{children:[],attributes:{}}:Q(`generateAbstractIcon`,_)||{children:[],attributes:{}};return _.children=te,_.attributes=v,o?wn(_):Cn(_)}function En(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(c[F]=``);let l=x({},o.styles);yt(i)&&(l.transform=xt({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=vt(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function Dn(e){let{content:t,title:n,extra:r}=e,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=vt(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:On}=K;function kn(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${z.cssPrefix}-${st.GROUP}`},children:[{tag:`path`,attributes:{class:`${z.cssPrefix}-${st.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${z.cssPrefix}-${st.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var An={found:!1,width:512,height:512};function jn(e,t){!Ye&&!z.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Mn(e,t){let n=t;return t===`fa`&&z.styleDefault!==null&&(t=J()),new Promise((r,i)=>{if(n===`fa`){let n=tn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&On[t]&&On[t][e]){let n=On[t][e];return r(kn(n))}jn(e,t),r(x(x({},An),{},{icon:z.showMissingIcons&&e&&Q(`missingIconAbstract`)||{}}))})}var Nn=()=>{},Pn=z.measurePerformance&&A&&A.mark&&A.measure?A:{mark:Nn,measure:Nn},Fn=`FA "6.7.2"`,In=e=>(Pn.mark(`${Fn} ${e} begins`),()=>Ln(e)),Ln=e=>{Pn.mark(`${Fn} ${e} ends`),Pn.measure(`${Fn} ${e}`,`${Fn} ${e} begins`,`${Fn} ${e} ends`)},Rn={begin:In,end:Ln},zn=()=>{};function Bn(e){return typeof(e.getAttribute?e.getAttribute(F):null)==`string`}function Vn(e){let t=e.getAttribute?e.getAttribute(We):null,n=e.getAttribute?e.getAttribute(Ge):null;return t&&n}function Hn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Un(){return z.autoReplaceSvg===!0?Jn.replace:Jn[z.autoReplaceSvg]||Jn.replace}function Wn(e){return k.createElementNS(`http://www.w3.org/2000/svg`,e)}function Gn(e){return k.createElement(e)}function Kn(e){let{ceFn:t=e.tag===`svg`?Wn:Gn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return k.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Kn(e,{ceFn:t}))}),n}function qn(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Jn={replace:function(e){let t=e[0];if(t.parentNode){if(e[1].forEach(e=>{t.parentNode.insertBefore(Kn(e),t)}),t.getAttribute(F)===null&&z.keepOriginalSource){let e=k.createComment(qn(t));t.parentNode.replaceChild(e,t)}else t.remove()}},nest:function(e){let t=e[0],n=e[1];if(~ht(t).indexOf(z.replacementClass))return Jn.replace(e);let r=RegExp(`${z.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===z.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>jt(e)).join(`
`);t.setAttribute(F,``),t.innerHTML=i}};function Yn(e){e()}function Xn(e,t){let n=typeof t==`function`?t:zn;if(e.length===0)n();else{let t=Yn;z.mutateApproach===qe&&(t=O.requestAnimationFrame||Yn),t(()=>{let t=Un(),r=Rn.begin(`mutate`);e.map(t),r(),n()})}}var Zn=!1;function Qn(){Zn=!0}function $n(){Zn=!1}var er=null;function tr(e){if(!oe||!z.observeMutations)return;let{treeCallback:t=zn,nodeCallback:n=zn,pseudoElementsCallback:r=zn,observeMutationsRoot:i=k}=e;er=new oe(e=>{if(Zn)return;let i=J();W(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Bn(e.addedNodes[0])&&(z.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&z.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Bn(e.target)&&~ot.indexOf(e.attributeName)){if(e.attributeName===`class`&&Vn(e.target)){let{prefix:t,iconName:n}=ln(ht(e.target));e.target.setAttribute(We,t||i),n&&e.target.setAttribute(Ge,n)}else Hn(e.target)&&n(e.target)}})}),j&&er.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function nr(){er&&er.disconnect()}function rr(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ir(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=ln(ht(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=en(i.prefix,e.innerText)||$t(i.prefix,It(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ar(e){let t=W(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return z.autoA11y&&(n?t[`aria-labelledby`]=`${z.replacementClass}-title-${r||U()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function or(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=ir(e),a=ar(e),o=vn(`parseNodeAttributes`,{},e),s=t.styleParser?rr(e):[];return x({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:cr}=K;function lr(e){let t=z.autoReplaceSvg===`nest`?sr(e,{styleParser:!1}):sr(e);return~t.extra.classes.indexOf(it)?Q(`generateLayersText`,e,t):Q(`generateSvgReplacementMutation`,e,t)}function ur(){return[...ve,...Ne]}function dr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let n=k.documentElement.classList,r=e=>n.add(`${Ke}-${e}`),i=e=>n.remove(`${Ke}-${e}`),a=z.autoFetchSvg?ur():fe.concat(Object.keys(cr));a.includes(`fa`)||a.push(`fa`);let o=[`.${it}:not([${F}])`].concat(a.map(e=>`.${e}:not([${F}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=W(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Rn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=lr(t);n&&e.push(n)}catch(e){Ye||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Xn(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function fr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lr(e).then(e=>{e&&Xn([e],t)})}function pr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:yn(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:yn(i||{}),e(r,x(x({},n),{},{mask:i}))}}var mr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=H,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return Sn(x({type:`icon`},e),()=>(Z(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),z.autoA11y&&(o?l[`aria-labelledby`]=`${z.replacementClass}-title-${s||U()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),Tn({icons:{main:kn(p),mask:i?kn(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:x(x({},H),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},hr={mixout(){return{icon:pr(mr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=dr,e.nodeCallback=fr,e}}},provides(e){e.i2svg=function(e){let{node:t=k,callback:n=()=>{}}=e;return dr(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Mn(n,a),c.iconName?Mn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,Tn({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=vt(a);o.length>0&&(n.style=o);let s;return yt(i)&&(s=Q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},gr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Sn({type:`layer`},()=>{Z(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${z.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},_r={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Sn({type:`counter`,content:e},()=>(Z(`beforeDOMElementCreation`,{content:e,params:t}),Dn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${z.cssPrefix}-layers-counter`,...r]}})))}}}},vr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=H,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Sn({type:`text`,content:e},()=>(Z(`beforeDOMElementCreation`,{content:e,params:t}),En({content:e,transform:x(x({},H),n),title:r,extra:{attributes:a,styles:o,classes:[`${z.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(se){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return z.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,En({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},yr=RegExp(`"`,`ug`),br=[1105920,1112319],xr=x(x(x(x({},{FontAwesome:{normal:`fas`,400:`fas`}}),he),Re),Oe),Sr=Object.keys(xr).reduce((e,t)=>(e[t.toLowerCase()]=xr[t],e),{}),Cr=Object.keys(Sr).reduce((e,t)=>{let n=Sr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function wr(e){let t=e.replace(yr,``),n=Lt(t,0),r=n>=br[0]&&n<=br[1],i=t.length===2&&t[0]===t[1];return{value:It(i?t[0]:t),isSecondary:r||i}}function Tr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Sr[n]||{})[i]||Cr[n]}function Er(e,t){let n=`${Ue}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=W(e.children).filter(e=>e.getAttribute(He)===t)[0],o=O.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(at),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=Tr(s,l),{value:f,isSecondary:p}=wr(u),ee=c[0].startsWith(`FontAwesome`),m=$t(d,f),h=m;if(ee){let e=nn(f);e.iconName&&e.prefix&&(m=e.iconName,d=e.prefix)}if(m&&!p&&(!a||a.getAttribute(We)!==d||a.getAttribute(Ge)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);let o=or(),{extra:s}=o;s.attributes[He]=t,Mn(m,d).then(i=>{let a=Tn(x(x({},o),{},{icons:{main:i,mask:rn()},prefix:d,iconName:h,extra:s,watchable:!0})),c=k.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>jt(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Dr(e){return Promise.all([Er(e,`::before`),Er(e,`::after`)])}function Or(e){return e.parentNode!==document.head&&!~Je.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(He)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function kr(e){if(j)return new Promise((t,n)=>{let r=W(e.querySelectorAll(`*`)).filter(Or).map(Dr),i=Rn.begin(`searchPseudoElements`);Qn(),Promise.all(r).then(()=>{i(),$n(),t()}).catch(()=>{i(),$n(),n()})})}var Ar={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=kr,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=k}=e;z.searchPseudoElements&&kr(t)}}},jr=!1,Mr={mixout(){return{dom:{unwatch(){Qn(),jr=!0}}}},hooks(){return{bootstrap(){tr(vn(`mutationObserverCallbacks`,{}))},noAuto(){nr()},watch(e){let{observeMutationsRoot:t}=e;jr?$n():tr(vn(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Nr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Pr={mixout(){return{parse:{transform:e=>Nr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Nr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:x({},a.outer),children:[{tag:`g`,attributes:x({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:x(x({},t.icon.attributes),a.path)}]}]}}}},Fr={x:0,y:0,width:`100%`,height:`100%`};function Ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Lr(e){return e.tag===`g`?e.children:[e]}_n([Et,hr,gr,_r,vr,Ar,Mr,Pr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?ln(n.split(` `).map(e=>e.trim())):rn();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=bt({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:x(x({},Fr),{},{fill:`white`})},p=c.children?{children:c.children.map(Ir)}:{},ee={tag:`g`,attributes:x({},d.inner),children:[Ir(x({tag:c.tag,attributes:x(x({},c.attributes),d.path)},p))]},m={tag:`g`,attributes:x({},d.outer),children:[ee]},h=`mask-${a||U()}`,g=`clip-${a||U()}`,_={tag:`mask`,attributes:x(x({},Fr),{},{id:h,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,m]},te={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:g},children:Lr(u)},_]};return t.push(te,{tag:`rect`,attributes:x({fill:`currentColor`,"clip-path":`url(#${g})`,mask:`url(#${h})`},Fr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;O.matchMedia&&(t=O.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:x(x({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=x(x({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:x(x({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:x(x({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:x(x({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:x(x({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:x(x({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:x(x({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:x(x({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:$}),$.noAuto,$.config;var Rr=$.library;$.dom;var zr=$.parse,Br=$.findIconDefinition;$.toHtml;var Vr=$.icon;$.layer,$.text,$.counter;var Hr={prefix:`fas`,iconName:`angle-left`,icon:[256,512,[8249],`f104`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`]},Ur={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},Wr={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]};function Gr(e){if(e||e===``){if(Array.isArray(e)&&e.length===2){let[t,n]=e;return{prefix:t,iconName:n}}if(typeof e==`object`&&e.prefix&&e.iconName)return e;if(typeof e==`string`)return{prefix:`fas`,iconName:e}}}function Kr(n,a){u(a,!0);let o=y(a,`border`,7,!1),l=y(a,`fixedWidth`,7,!1),d=y(a,`flip`,7),f=y(a,`icon`,7),m=y(a,`mask`,7),v=y(a,`listItem`,7,!1),ne=y(a,`pull`,7),re=y(a,`pulse`,7,!1),b=y(a,`rotation`,7),x=y(a,`swapOpacity`,7,!1),ie=y(a,`size`,7),ae=y(a,`spin`,7,!1),S=y(a,`transform`,23,()=>({})),C=y(a,`symbol`,7,!1),w=y(a,`title`,7),T=y(a,`inverse`,7,!1),E=y(a,`bounce`,7,!1),D=y(a,`shake`,7,!1),O=y(a,`beat`,7,!1),k=y(a,`fade`,7,!1),oe=y(a,`beatFade`,7,!1),A=y(a,`flash`,7,!1),j=y(a,`spinPulse`,7,!1),se=y(a,`spinReverse`,7,!1),ce=y(a,`style`,7,``),le=y(a,`class`,7,``),ue=h(``),de=g(()=>({"fa-spin":ae(),"fa-pulse":re(),"fa-fw":l(),"fa-border":o(),"fa-li":v(),"fa-inverse":T(),"fa-flip":d()===!0,"fa-flip-horizontal":[`both`,`horizontal`].includes(d()),"fa-flip-vertical":[`both`,`vertical`].includes(d()),[`fa-${ie()}`]:!!ie(),[`fa-rotate-${b()}`]:!!b(),[`fa-pull-${ne()}`]:!!ne(),"fa-swap-opacity":x(),"fa-bounce":E(),"fa-shake":D(),"fa-beat":O(),"fa-fade":k(),"fa-beat-fade":oe(),"fa-flash":A(),"fa-spin-pulse":j(),"fa-spin-reverse":se()})),fe=g(()=>(ce()||``).split(`;`).filter(e=>!!e).map(e=>e.split(`:`).map(e=>e.trim())).reduce((e,t)=>{let[n,r]=t;return e[n]=r,e},{}));function M(){let e=Gr(f());if(!e)return;let n=Br(e),r=Vr(n||f(),{symbol:C(),title:w(),styles:ce()?t(fe):{},classes:[...Object.keys(t(de)).map(e=>t(de)[e]?e:``).filter(e=>!!e),...(le()||``).split(` `)],transform:{...typeof S()==`string`?zr.transform(S()):S()},mask:Gr(m())});r?te(ue,r.html.join(),!0):console.warn(`Could not find one or more icon(s)`,n||ee(f()),ee(m()))}s(()=>{M()}),M();var N={get border(){return o()},set border(e=!1){o(e),p()},get fixedWidth(){return l()},set fixedWidth(e=!1){l(e),p()},get flip(){return d()},set flip(e){d(e),p()},get icon(){return f()},set icon(e){f(e),p()},get mask(){return m()},set mask(e){m(e),p()},get listItem(){return v()},set listItem(e=!1){v(e),p()},get pull(){return ne()},set pull(e){ne(e),p()},get pulse(){return re()},set pulse(e=!1){re(e),p()},get rotation(){return b()},set rotation(e){b(e),p()},get swapOpacity(){return x()},set swapOpacity(e=!1){x(e),p()},get size(){return ie()},set size(e){ie(e),p()},get spin(){return ae()},set spin(e=!1){ae(e),p()},get transform(){return S()},set transform(e={}){S(e),p()},get symbol(){return C()},set symbol(e=!1){C(e),p()},get title(){return w()},set title(e){w(e),p()},get inverse(){return T()},set inverse(e=!1){T(e),p()},get bounce(){return E()},set bounce(e=!1){E(e),p()},get shake(){return D()},set shake(e=!1){D(e),p()},get beat(){return O()},set beat(e=!1){O(e),p()},get fade(){return k()},set fade(e=!1){k(e),p()},get beatFade(){return oe()},set beatFade(e=!1){oe(e),p()},get flash(){return A()},set flash(e=!1){A(e),p()},get spinPulse(){return j()},set spinPulse(e=!1){j(e),p()},get spinReverse(){return se()},set spinReverse(e=!1){se(e),p()},get style(){return ce()},set style(e=``){ce(e),p()},get class(){return le()},set class(e=``){le(e),p()}},pe=i(),me=c(pe);return e(me,()=>t(ue)),r(n,pe),_(N)}customElements.define(`fontawesome-icon`,l(Kr,{border:{},fixedWidth:{},flip:{},icon:{},mask:{},listItem:{},pull:{},pulse:{},rotation:{},swapOpacity:{},size:{},spin:{},transform:{},symbol:{},title:{},inverse:{},bounce:{},shake:{},beat:{},fade:{},beatFade:{},flash:{},spinPulse:{},spinReverse:{},style:{},class:{}},[],[],{mode:`open`}));var qr=ne(`<a aria-label="Home" class="svelte-1m6f89s"><!> <i class="fa-solid fa-angle-left"></i></a>`);function Jr(e,t){u(t,!1),Rr.add(Hr),a();var i=qr();Kr(o(i),{get icon(){return Hr}}),d(2),f(i),n(e=>v(i,`href`,e),[()=>m(`/`)]),r(e,i),_()}export{Rr as a,Ur as i,Kr as n,Wr as r,Jr as t};