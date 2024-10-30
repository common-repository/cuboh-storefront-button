(()=>{var e,t={840:(e,t,r)=>{"use strict";const n=window.wp.blocks;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i=window.wp.element;var a=r(184),s=r.n(a);const l=window.wp.i18n,c=window.wp.components,u=window.wp.blockEditor,f=window.wp.keycodes,p=window.wp.primitives,d=(0,i.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(p.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),m=(0,i.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(p.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));var v,h=r(296),b=r.n(h),y=new Uint8Array(16);function w(){if(!v&&!(v="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(y)}const g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_=function(e){return"string"==typeof e&&g.test(e)};for(var k=[],x=0;x<256;++x)k.push((x+256).toString(16).substr(1));const E=function(e,t,r){var n=(e=e||{}).random||(e.rng||w)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(k[e[t+0]]+k[e[t+1]]+k[e[t+2]]+k[e[t+3]]+"-"+k[e[t+4]]+k[e[t+5]]+"-"+k[e[t+6]]+k[e[t+7]]+"-"+k[e[t+8]]+k[e[t+9]]+"-"+k[e[t+10]]+k[e[t+11]]+k[e[t+12]]+k[e[t+13]]+k[e[t+14]]+k[e[t+15]]).toLowerCase();if(!_(r))throw TypeError("Stringified UUID is invalid");return r}(n)},C=async e=>{try{const t={method:"GET",redirect:"follow"};return(await fetch(`https://assets.cuboh.net/company-storefronts/${e}.json?v=${E()}`,t)).ok}catch(e){return!1}},S="noreferrer noopener";function O(e){let{selectedWidth:t,setAttributes:r}=e;return(0,i.createElement)(c.PanelBody,{title:(0,l.__)("Width settings")},(0,i.createElement)(c.ButtonGroup,{"aria-label":(0,l.__)("Button width")},["25%","50%","75%","100%"].map((e=>(0,i.createElement)(c.Button,{key:e,isSmall:!0,variant:e===t?"primary":void 0,onClick:()=>{var n;r({width:t===(n=e)?void 0:n})}},e)))))}const T=JSON.parse('{"u2":"cuboh-storefront-button/cuboh-storefront-button"}');(0,n.registerBlockType)(T.u2,{edit:function(e){const{attributes:t,setAttributes:r,className:n,isSelected:a,onReplace:p,mergeBlocks:v}=e,{linkTarget:h,placeholder:y,rel:w,style:g,text:_,url:k,width:x,storeID:E,isValid:T}=t,j=(0,i.useCallback)((e=>{r({rel:e})}),[r]),N=(0,i.useCallback)((async e=>{r({isValid:await C(e)})}),[]),B=(0,i.useMemo)((()=>b()(N,500)),[]),H=(0,i.useCallback)((e=>{r({storeID:e}),B(e)}),[B]),I=(0,u.__experimentalUseBorderProps)(t),R=(0,u.__experimentalUseColorProps)(t),V=(0,u.__experimentalGetSpacingClassesAndStyles)(t),A=(0,i.useRef)(),P=(0,i.useRef)(),$=(0,u.useBlockProps)({ref:A,onKeyDown:function(e){f.isKeyboardEvent.primary(e,"k")?U(e):f.isKeyboardEvent.primaryShift(e,"k")&&(L(),P.current?.focus())}}),[z,D]=(0,i.useState)(!1),G=!!k,M="_blank"===h;function U(e){e.preventDefault(),D(!0)}function L(){r({url:void 0,linkTarget:void 0,rel:void 0}),D(!1)}return(0,i.useEffect)((()=>{a||D(!1)}),[a]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",o({},$,{className:s()($.className,{[`has-custom-width wp-block-button__width-${x}`]:x,"has-custom-font-size":$.style.fontSize})}),(0,i.createElement)(u.RichText,{ref:P,"aria-label":(0,l.__)("Button text"),placeholder:y||(0,l.__)("Add text…"),value:_,onChange:e=>{r({text:e.replace(/<\/?a[^>]*>/g,"")})},withoutInteractiveFormatting:!0,className:s()(n,"wp-block-button__link",R.className,I.className,{"no-border-radius":0===g?.border?.radius}),style:{...I.style,...R.style,...V.style,width:x},onReplace:p,onMerge:v,identifier:"text"})),!T&&(0,i.createElement)("p",{style:{color:"red"}},"StoreID is missing or invalid"),(0,i.createElement)(u.BlockControls,{group:"block"},!G&&(0,i.createElement)(c.ToolbarButton,{name:"link",icon:d,title:(0,l.__)("Link"),shortcut:f.displayShortcut.primary("k"),onClick:U}),G&&(0,i.createElement)(c.ToolbarButton,{name:"link",icon:m,title:(0,l.__)("Unlink"),shortcut:f.displayShortcut.primaryShift("k"),onClick:L,isActive:!0})),a&&(z||G)&&(0,i.createElement)(c.Popover,{position:"bottom center",onClose:()=>{D(!1),P.current?.focus()},anchorRef:A?.current,focusOnMount:!!z&&"firstElement",__unstableSlotName:"__unstable-block-tools-after"},(0,i.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:k,opensInNewTab:M},onChange:e=>{let{url:t="",opensInNewTab:n}=e;r({url:t}),M!==n&&function(e){const t=e?"_blank":void 0;let n=w;t&&!w?n=S:t||w!==S||(n=void 0),r({linkTarget:t,rel:n})}(n)},onRemove:()=>{L(),P.current?.focus()},forceIsEditingLink:z})),(0,i.createElement)(u.InspectorControls,null,(0,i.createElement)(O,{selectedWidth:x,setAttributes:r})),(0,i.createElement)(u.InspectorControls,{__experimentalGroup:"advanced"},(0,i.createElement)(c.TextControl,{label:"Store ID",value:E||null,onChange:H}),(0,i.createElement)(c.TextControl,{label:(0,l.__)("Link rel"),value:w||"",onChange:j})))},save:function(e){let{attributes:t,className:r}=e;const{fontSize:n,linkTarget:o,rel:a,style:l,text:c,title:f,width:p,storeID:d,isValid:m}=t,v=(0,u.__experimentalGetBorderClassesAndStyles)(t),h=(0,u.__experimentalGetColorClassesAndStyles)(t),b=(0,u.__experimentalGetSpacingClassesAndStyles)(t),y=s()("wp-block-button__link",h.className,v.className,{"no-border-radius":0===l?.border?.radius}),w={...v.style,...h.style,...b.style,width:p},g=s()(r,{[`has-custom-width wp-block-button__width-${p}`]:p,"has-custom-font-size":n||l?.typography?.fontSize});return(0,i.createElement)("div",u.useBlockProps.save({className:g}),(0,i.createElement)(u.RichText.Content,{isValid:m,tagName:"a",className:y,href:`https://order.cuboh.com/store/${d}`,title:f,style:w,value:c,target:o,rel:a}))}})},184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},296:(e,t,r)=>{var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,m=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?s(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function w(e){return c=e,s=setTimeout(_,t),u?y(e):a}function g(e){var r=e-l;return void 0===l||r>=t||r<0||f&&e-c>=i}function _(){var e=m();if(g(e))return k(e);s=setTimeout(_,function(e){var r=t-(e-l);return f?d(r,i-(e-c)):r}(e))}function k(e){return s=void 0,b&&n?y(e):(n=o=void 0,a)}function x(){var e=m(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return w(l);if(f)return s=setTimeout(_,t),y(l)}return void 0===s&&(s=setTimeout(_,t)),a}return t=h(t)||0,v(r)&&(u=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,b="trailing"in r?!!r.trailing:b),x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},x.flush=function(){return void 0===s?a:k(m())},x}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,s,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=globalThis.webpackChunkcuboh_storefront_button=globalThis.webpackChunkcuboh_storefront_button||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(840)));o=n.O(o)})();