(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(546);var r=h(n(14)),i=n(36);n(591);var o=h(n(597));n(75);var s=h(n(21)),a=h(n(1)),l=n(129),c=n(98),u=h(n(0)),f=h(n(666)),d=n(330),p=n(948);function h(e){return e&&e.__esModule?e:{default:e}}const g=e=>`${d.ACC_API}/login/${e}?next=${window.location.origin}`,m=({user:e})=>e.data?a.default.createElement(c.Redirect,{to:"/"}):a.default.createElement("section",{className:p.container},a.default.createElement(f.default,{width:200}),a.default.createElement(o.default,{className:p.card,bordered:!1},a.default.createElement("h2",null,"Sign in to get started"),a.default.createElement(s.default,{href:g("github"),icon:"github",className:p.githubBtn,size:"large",block:!0},"Sign in via GitHub"),a.default.createElement(s.default,{href:g("google"),icon:"google",className:p.googleBtn,size:"large",block:!0},"Sign in via Google"),a.default.createElement(s.default,{href:g("gitlab"),icon:"gitlab",className:p.gitlabBtn,size:"small",block:!0},"Sign in via Gitlab")),a.default.createElement(c.Link,{to:"/signup"},a.default.createElement(s.default,{size:"large",ghost:!0,className:(0,i.css)({border:0,boxShadow:"none",color:"#424242",margin:"20px 0",fontSize:18,letterSpacing:"0.02rem"})},"New to appbase?   Signup here",a.default.createElement(r.default,{type:"arrow-right"}))));m.propTypes={user:u.default.object.isRequired};var b=(0,l.connect)(({user:e})=>({user:e}),null)(m);t.default=b},535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1150)).default;t.default=r},546:function(e,t,n){"use strict";n.r(t);n(29),n(680)},577:function(e,t,n){"use strict";n.r(t);var r=n(939);t.default=r.a},579:function(e,t,n){"use strict";n.r(t);var r=n(940);t.default=r.a},666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(667)).default;t.default=r},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(0);const o=({type:e,width:t})=>{switch(e){case"white":return r.default.createElement("img",{src:"/static/images/appbase_white.svg",width:t,alt:"appbase.io"});case"small":return r.default.createElement("img",{src:"/static/images/appbase_small.svg",width:t,alt:"appbase.io"});default:return r.default.createElement("img",{src:"/static/images/appbase.svg",width:t,alt:"appbase.io"})}};o.defaultProps={width:140},o.propTypes={width:i.number};var s=o;t.default=s},680:function(e,t,n){var r=n(681);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insertAt:"top",hmr:!0,transform:void 0,insertInto:void 0};n(25)(r,i);r.locals&&(e.exports=r.locals)},681:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n",""])},682:function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},758:function(e,t,n){var r=n(759);e.exports=new r},759:function(e,t,n){var r=n(760),i=n(682),o=i.each,s=i.isFunction,a=i.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[e]||(i[e]=new r(e,l)),s(t)&&(t={match:t}),a(t)||(t=[t]),o(t,function(t){s(t)&&(t={match:t}),i[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},760:function(e,t,n){var r=n(761),i=n(682).each;function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,function(t){t[e]()})}},e.exports=o},761:function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n},939:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(3),s=n.n(o),a=n(52),l=n.n(a),c=n(6),u=n.n(c),f=n(11),d=n.n(f),p=n(5),h=n.n(p),g=n(7),m=n.n(g),b=n(1),v=n(9),y=n.n(v),x=n(0),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},O=void 0;if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}},O=n(758)}var j=["xxl","xl","lg","md","sm","xs"],_={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},k=function(e){function t(){u()(this,t);var e=h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={screens:{}},e}return m()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this;Object.keys(_).map(function(t){return O.register(_[t],{match:function(){"object"===l()(e.props.gutter)&&e.setState(function(e){return{screens:s()({},e.screens,i()({},t,!0))}})},unmatch:function(){"object"===l()(e.props.gutter)&&e.setState(function(e){return{screens:s()({},e.screens,i()({},t,!1))}})},destroy:function(){}})})}},{key:"componentWillUnmount",value:function(){Object.keys(_).map(function(e){return O.unregister(_[e])})}},{key:"getGutter",value:function(){var e=this.props.gutter;if("object"===(void 0===e?"undefined":l()(e)))for(var t=0;t<=j.length;t++){var n=j[t];if(this.state.screens[n]&&void 0!==e[n])return e[n]}return e}},{key:"render",value:function(){var e,t=this.props,n=t.type,r=t.justify,o=t.align,a=t.className,l=t.style,c=t.children,u=t.prefixCls,f=void 0===u?"ant-row":u,d=w(t,["type","justify","align","className","style","children","prefixCls"]),p=this.getGutter(),h=y()((e={},i()(e,f,!n),i()(e,f+"-"+n,n),i()(e,f+"-"+n+"-"+r,n&&r),i()(e,f+"-"+n+"-"+o,n&&o),e),a),g=p>0?s()({marginLeft:p/-2,marginRight:p/-2},l):l,m=b.Children.map(c,function(e){return e?e.props&&p>0?Object(b.cloneElement)(e,{style:s()({paddingLeft:p/2,paddingRight:p/2},e.props.style)}):e:null}),v=s()({},d);return delete v.gutter,b.createElement("div",s()({},v,{className:h,style:g}),m)}}]),t}(b.Component);t.a=k,k.defaultProps={gutter:0},k.propTypes={type:x.string,align:x.string,justify:x.string,className:x.string,children:x.node,gutter:x.oneOfType([x.object,x.number]),prefixCls:x.string}},940:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(3),s=n.n(o),a=n(52),l=n.n(a),c=n(6),u=n.n(c),f=n(11),d=n.n(f),p=n(5),h=n.n(p),g=n(7),m=n.n(g),b=n(1),v=n(0),y=n(9),x=n.n(y),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},O=v.oneOfType([v.string,v.number]),j=v.oneOfType([v.object,v.number]),_=function(e){function t(){return u()(this,t),h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"render",value:function(){var e,t=this.props,n=t.span,r=t.order,o=t.offset,a=t.push,c=t.pull,u=t.className,f=t.children,d=t.prefixCls,p=void 0===d?"ant-col":d,h=w(t,["span","order","offset","push","pull","className","children","prefixCls"]),g={};["xs","sm","md","lg","xl","xxl"].forEach(function(e){var n,r={};"number"==typeof t[e]?r.span=t[e]:"object"===l()(t[e])&&(r=t[e]||{}),delete h[e],g=s()({},g,(n={},i()(n,p+"-"+e+"-"+r.span,void 0!==r.span),i()(n,p+"-"+e+"-order-"+r.order,r.order||0===r.order),i()(n,p+"-"+e+"-offset-"+r.offset,r.offset||0===r.offset),i()(n,p+"-"+e+"-push-"+r.push,r.push||0===r.push),i()(n,p+"-"+e+"-pull-"+r.pull,r.pull||0===r.pull),n))});var m=x()((e={},i()(e,p+"-"+n,void 0!==n),i()(e,p+"-order-"+r,r),i()(e,p+"-offset-"+o,o),i()(e,p+"-push-"+a,a),i()(e,p+"-pull-"+c,c),e),u,g);return b.createElement("div",s()({},h,{className:m}),f)}}]),t}(b.Component);t.a=_,_.propTypes={span:O,order:O,offset:O,push:O,pull:O,className:v.string,children:v.node,xs:j,sm:j,md:j,lg:j,xl:j,xxl:j}},948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gitlabBtn=t.googleBtn=t.githubBtn=t.card=t.container=void 0;var r=n(96);const i=(0,r.css)("display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background-image:linear-gradient(120deg,#eef5ff 0%,#c2e9fb 100%);");t.container=i;const o=(0,r.css)("width:90%;max-width:450px;display:flex;flex-direction:column;text-align:center;border-radius:4px;margin-top:25px;padding:20px;box-shadow:0 2px 10px 0 rgba(0,0,0,0.15);h2{font-weight:400;color:#424242;font-size:24px;margin-bottom:25px;}a{margin:4px 0;display:flex;flex-direction:row;align-items:center;justify-content:center;letter-spacing:0.02rem;font-size:15px;font-weight:700;cursor:pointer;line-height:2.45;height:50px;border-radius:6px;i{font-size:18px;position:relative;top:1px;}}");t.card=o;const s=(0,r.css)("color:#fff;background:rgb(22,23,26);&:hover,&:focus{background-color:#333;color:#fff;border-color:#666;}");t.githubBtn=s;const a=(0,r.css)("color:#fff;background-color:rgb(234,67,53);&:hover,&:focus{background-color:rgb(245,106,94);color:#fff;border-color:#f7d2cf;}");t.googleBtn=a;const l=(0,r.css)("color:#fff;background-color:rgb(85,68,136);&:hover,&:focus{background-color:rgb(64,51,104);color:#fff;border-color:#473281;}");t.gitlabBtn=l}}]);