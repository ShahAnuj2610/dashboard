(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1125:function(e,t,n){"use strict";t.__esModule=!0,t.media=t.mediaKey=t.breakpoints=t.hexToRgb=t.getStylesFromProps=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(139),l=function(e){return e&&e.__esModule?e:{default:e}}(n(1600));t.getStylesFromProps=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).reduce(function(t,n){var r;return e[n]?a({},t,((r={})[n]=e[n],r)):t},{})},t.hexToRgb=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(0,l.default)(e);return"rgba("+n.red+", "+n.green+", "+n.blue+", "+t+")"};var o=t.breakpoints={xsmall:420,small:576,ipad:767,medium:768,large:992,ipadPro:1024,xlarge:1200,tallPhone:"(max-width: 360px) and (min-height: 740px)"},i=(t.mediaKey=Object.keys(o).reduce(function(e,t){var n;return a({},e,((n={})[t]="@media (max-width: "+o[t]+"px)",n))},{}),t.media=Object.keys(o).reduce(function(e,t){var n="string"==typeof o[t]?"":"max-width:",a="string"==typeof o[t]?"":"px",l=e;return l[t]=function(e){return(0,r.css)("@media (",n+o[t]+a,"){",e,";}")},l},{}));t.default=i},1285:function(e,t,n){"use strict";t.__esModule=!0;var a=n(139),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),o=g(l),i=n(370),u=g(i),c=n(1124),s=g(n(1551)),d=g(n(1563)),p=g(n(1598)),f=g(n(1599)),m=g(n(1602)),h=n(1125);function g(e){return e&&e.__esModule?e:{default:e}}var b={marginRight:"6px",fontWeight:"strong"},E=function(e){return e.list.map(function(e){return o.default.createElement("li",{key:e},o.default.createElement(c.Check,{className:(0,a.css)(b),width:"15",height:"15"})," ",e)})},y=(0,i.css)(h.media.ipadPro((0,i.css)("display:none;")),";margin:50px auto;user-select:none;"),x=(0,i.css)("display:none;",h.media.ipadPro((0,i.css)("display:flex;")),";user-select:none;"),v=(0,u.default)("div",{target:"ez0ir0g0"})("font-size:20px;font-weight:bold;line-height:27px;text-align:center;margin-bottom:25px;"),C=(0,u.default)("div",{target:"ez0ir0g1"})("height:54px;font-family:'Open Sans';font-size:36px;line-height:26px;text-align:center;margin:0 auto 20px auto;> small{font-family:'Open Sans';font-size:12px;font-weight:600;line-height:22px;text-align:center;padding-left:4rem;}"),w=(0,u.default)("table",{target:"ez0ir0g2"})("text-align:center;border-collapse:separate;border-spacing:16px 0px;> thead > tr{&:nth-child(1){> td{padding-top:30px;vertical-align:top;}}}> thead > tr > td,> tbody > tr > td{width:205px;border:1.5px solid #f4f4f4;border-bottom:0;padding:11px 2px;font-size:18px;font-weight:600;line-height:22px;text-align:center;&:nth-child(1){min-width:240px;border-color:transparent;text-align:left;font-size:20px;font-weight:600;line-height:27px;> span{padding-bottom:0px;border-bottom-style:dashed;border-bottom-width:3px;a{text-decoration:none;color:inherit;}}}&:nth-child(3){border-color:",m.default.badge.blue,";background:",m.default.badge.blue,";color:#ffffff;}&:nth-child(4){border-color:",m.default.badge.darkBlue,";background:",m.default.badge.darkBlue,";color:#ffffff;}&:nth-child(5){border-color:",m.default.badge.red,";background:",m.default.badge.red,";color:#ffffff;}}> tbody > tr{text-align:left;&:hover{td{&:nth-child(1){border-color:",(0,h.hexToRgb)("#ECECEC",.21),";background:",(0,h.hexToRgb)("#ECECEC",.21),";}&:nth-child(2){border-color:",(0,h.hexToRgb)("#ECECEC",.21),";background:",(0,h.hexToRgb)("#ECECEC",.21),";}&:nth-child(3){border-color:",(0,h.hexToRgb)(m.default.badge.blue,.79),";background:",(0,h.hexToRgb)(m.default.badge.blue,.79),";}&:nth-child(4){border-color:",(0,h.hexToRgb)(m.default.badge.darkBlue,.79),";background:",(0,h.hexToRgb)(m.default.badge.darkBlue,.79),";}&:nth-child(5){border-color:",(0,h.hexToRgb)(m.default.badge.red,.79),";background:",(0,h.hexToRgb)(m.default.badge.red,.79),";}}}> td{border-top:0;}> td:nth-child(1){border-top:1.5px;}&:last-child{> td{&:nth-child(2){border-bottom:1.5px #f4f4f4 solid;}}}}"),k=(0,u.default)("div",{target:"ez0ir0g3"})("color:",(0,h.hexToRgb)("#232e44",.6),";font-size:12px;font-weight:600;line-height:17px;text-align:center;text-decoration:none !important;"),P=(0,u.default)("div",{target:"ez0ir0g4"})("margin-top:13px;color:",(0,h.hexToRgb)("#FFFFFF",.8),";font-size:0.875rem;font-weight:600;line-height:17px;text-align:left;text-decoration:none !important;text-transform:uppercase;margin-left:3px;"),S=(0,i.css)("height:100px;&:hover{td{&:nth-child(1){border-color:",(0,h.hexToRgb)("#FFFFFF",1)," !important;background:",(0,h.hexToRgb)("#FFFFFF",1)," !important;}&:nth-child(2){border-color:",(0,h.hexToRgb)("#f4f4f4",1)," !important;background:",(0,h.hexToRgb)("#FFFFFF",1)," !important;}&:nth-child(3){border-color:",(0,h.hexToRgb)(m.default.badge.blue,1)," !important;background:",(0,h.hexToRgb)(m.default.badge.blue,1)," !important;}&:nth-child(4){border-color:",(0,h.hexToRgb)(m.default.badge.darkBlue,1)," !important;background:",(0,h.hexToRgb)(m.default.badge.darkBlue,1)," !important;}&:nth-child(5){border-color:",(0,h.hexToRgb)(m.default.badge.red,1)," !important;background:",(0,h.hexToRgb)(m.default.badge.red,1)," !important;}}}td{color:",(0,h.hexToRgb)("#232e44",.5),";font-size:16px !important;font-weight:600 !important;line-height:28px !important;text-transform:uppercase;text-decoration:none !important;padding-bottom:20px !important;> small{display:block;clear:both;color:#232e44;font-size:12px;line-height:17px;text-transform:none;font-weight:600;a{color:inherit;}}}"),T={marginTop:40},F={marginTop:40},_={marginTop:40},O={display:"flex",flexWrap:"wrap",justifyContent:"center",maxWidth:"95%",marginRight:"auto",marginLeft:"auto"},A=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n)),r={records:[],apiCalls:[],basePrice:29},l={records:[],apiCalls:[],basePrice:89},o=1;o<=20;o+=1){var i=50*o;r.records.push(1e3===i?"1M":i+"K"),r.apiCalls.push(o+"M"),l.records.push(o+"M"),l.apiCalls.push(10*o+"M")}return a.plans={bootstrap:r,growth:l},a.state={bootstrap:{record:0,apiCall:0},growth:{record:0,apiCall:0},active:void 0,plans:a.plans},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.calcPrice=function(e){var t=this.state.plans[e].basePrice,n=this.state[e],a=n.record,r=n.apiCall,l=5,o=5;return"growth"===e&&(l=50,o=50),t+a*l+r*o},t.prototype.render=function(){var e=this,t=this.state,n=t.plans,r=t.bootstrap,l=t.growth,i=this.props.onClickButton;return o.default.createElement(o.default.Fragment,null,o.default.createElement(w,{className:y},o.default.createElement("thead",null,o.default.createElement("tr",{colSpan:"1"},o.default.createElement("td",null,o.default.createElement(s.default,{place:"right",effect:"solid",multiline:!0})),o.default.createElement("td",null,o.default.createElement(v,null,"FREE"),o.default.createElement(C,null,"$0",o.default.createElement("br",null),o.default.createElement("small",null,"/month")),o.default.createElement(k,null,o.default.createElement("a",{href:"https://appbase.io/static/poweredby_logo_placement.zip"},"Requires appbase.io logo placement"))),o.default.createElement("td",null,o.default.createElement(v,null,"BOOTSTRAP"),o.default.createElement(C,null,"$",this.calcPrice("bootstrap"),o.default.createElement("br",null),o.default.createElement("small",null,"/month"))),o.default.createElement("td",null,o.default.createElement(v,null,"GROWTH"),o.default.createElement(C,null,"$",this.calcPrice("growth"),o.default.createElement("br",null),o.default.createElement("small",null,"/month"))))),o.default.createElement("tbody",null,o.default.createElement("tr",{className:S},o.default.createElement("td",null,"Core Platform"),o.default.createElement("td",null),o.default.createElement("td",null,"bootstrap"===this.state.active&&this.getText),o.default.createElement("td",null,"growth"===this.state.active&&this.getText)),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"A record (aka document) holds one object<br/> stored as a JSON into the database."},"Records")),o.default.createElement("td",null,"10K"),o.default.createElement("td",null,o.default.createElement(p.default,{values:n.bootstrap.records,onChange:function(t,n){e.setState({active:"bootstrap",bootstrap:Object.assign(r,{record:n})})}})),o.default.createElement("td",null,o.default.createElement(p.default,{values:n.growth.records,onChange:function(t,n){e.setState({active:"growth",growth:Object.assign(l,{record:n})})}}))),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"One API call is a read, write, update, <br/> search or a streaming response."},"API Calls")),o.default.createElement("td",null,"100K"),o.default.createElement("td",null,o.default.createElement(p.default,{values:n.bootstrap.apiCalls,onChange:function(t,n){e.setState({bootstrap:Object.assign(r,{apiCall:n}),active:"bootstrap"})}})),o.default.createElement("td",null,o.default.createElement(p.default,{values:n.growth.apiCalls,onChange:function(t,n){e.setState({growth:Object.assign(l,{apiCall:n}),active:"growth"})}}))),o.default.createElement("tr",{className:S},o.default.createElement("td",null,"FEATURES"),o.default.createElement("td",null),o.default.createElement("td",null),o.default.createElement("td",null)),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Invite team members and collaborate <br/> together on your app."},"Team Access")),o.default.createElement("td",null,"-"),o.default.createElement("td",null,o.default.createElement(c.Check,null)),o.default.createElement("td",null,o.default.createElement(c.Check,null))),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Set fine-grained access control policies per API key. <br/>Secure using HTTP Referers, IP sources and more."},o.default.createElement("a",{href:"https://appbase.io/pricing#features",target:"_blank",rel:"noopener noreferrer"},"ACLs & Security"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"Basic"),o.default.createElement("td",null,"Included")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Edit your app schema on the fly <br/> without worrying about data loss."},o.default.createElement("a",{href:"https://appbase.io/pricing#features",target:"_blank",rel:"noopener noreferrer"},"Editable Mappings"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,o.default.createElement(c.Check,null)),o.default.createElement("td",null,o.default.createElement(c.Check,null))),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Test-drive and tune your search relevancy<br/> without breaking a sweat."},o.default.createElement("a",{href:"https://appbase.io/pricing#features",target:"_blank",rel:"noopener noreferrer"},"Search Sandbox"))),o.default.createElement("td",null,"Basic"),o.default.createElement("td",null,"1 Profile"),o.default.createElement("td",null,"3 Profiles")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Get actionable analytics on popular searches,<br/> no result searches and clicks and conversions."},o.default.createElement("a",{href:"https://appbase.io/pricing#features",target:"_blank",rel:"noopener noreferrer"},"Analytics"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"7 days Retention"),o.default.createElement("td",null,"30 days Retention")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Create app, API keys, edit mappings <br/> and get analytics and insights via API."},"Accounts API")),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"-"),o.default.createElement("td",null,o.default.createElement(c.Check,null))),o.default.createElement("tr",{className:S},o.default.createElement("td",null,"Support and Guidance",o.default.createElement("small",null,o.default.createElement("a",{href:"https://appbase.io/pricing#support",target:"_blank",rel:"noopener noreferrer"},"Get premium support and business SLAs"))),o.default.createElement("td",null),o.default.createElement("td",null),o.default.createElement("td",null)),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Support on core platform features."},"Platform Support")),o.default.createElement("td",null,"Community"),o.default.createElement("td",null,"Email"),o.default.createElement("td",null,"Email")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Support on non-core libraries, tools <br/> and open-source projects."},"Tools Support")),o.default.createElement("td",null,"Community"),o.default.createElement("td",null,"Basic"),o.default.createElement("td",null,"Priority")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"One time support on getting started, <br/> migrations and setup."},o.default.createElement("a",{href:"https://appbase.io/pricing#support",target:"_blank",rel:"noopener noreferrer"},"Onboarding Support"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"Can be added"),o.default.createElement("td",null,"Can be added")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"1:1 reviews with an engineer on data modeling, <br/> best practices and scaling."},o.default.createElement("a",{href:"https://appbase.io/pricing#support",target:"_blank",rel:"noopener noreferrer"},"Architecture Reviews"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"Can be added"),o.default.createElement("td",null,"Can be added")),o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement("span",{"data-tip":"Get dedicated onsite support with 1-day SLAs."},o.default.createElement("a",{href:"https://appbase.io/pricing#support",target:"_blank",rel:"noopener noreferrer"},"Premium Support"))),o.default.createElement("td",null,"-"),o.default.createElement("td",null,"Can be added"),o.default.createElement("td",null,"Can be added"))),o.default.createElement("tfoot",null,o.default.createElement("tr",null,o.default.createElement("td",null),o.default.createElement("td",null,o.default.createElement(d.default,{uppercase:!0,big:!0,bold:!0,shadow:!0,color:m.default.colors.accentText,backgroundColor:m.default.colors.accent,className:(0,a.css)(T),onClick:function(){return i("free",0)}},"Subscribe")),o.default.createElement("td",null,o.default.createElement(d.default,{uppercase:!0,big:!0,bold:!0,shadow:!0,color:"#FFFFFF",backgroundColor:m.default.badge.blue,className:(0,a.css)(F),onClick:function(){return i("bootstrap",29)}},"Subscribe")),o.default.createElement("td",null,o.default.createElement(d.default,{uppercase:!0,big:!0,bold:!0,shadow:!0,color:"#FFFFFF",backgroundColor:m.default.badge.darkBlue,className:(0,a.css)(_),onClick:function(){return i("growth",89)}},"Subscribe"))))),o.default.createElement("div",{className:(0,a.merge)((0,a.css)(O)+" "+x)},o.default.createElement(f.default,{className:(0,a.css)({color:m.default.colors.accentText}),name:"Free",price:"$0",onClickLink:function(){return i("free",0)},pricingList:["10K Records","100K API Calls"]},o.default.createElement(E,{list:["Weekly analytics e-mail","Community support"]})),o.default.createElement(f.default,{className:(0,a.css)({backgroundColor:m.default.badge.blue}),name:"Bootstrap",price:"$29",onClickLink:function(){return i("bootstrap",29)},linkColor:"inherit",pricingList:["50K Records","1M API Calls"]},o.default.createElement(P,null,"Features"),o.default.createElement(E,{list:["Team access","ACLs & enhanced security","Editable mappings","1 Search Sandbox profile","7-days analytics retention"]}),o.default.createElement(P,null,"Support and Guidance"),o.default.createElement(E,{list:["Email support","Basic tooling support","Premium support can be added"]})),o.default.createElement(f.default,{className:(0,a.css)({backgroundColor:m.default.badge.darkBlue}),name:"Growth",price:"$99",onClickLink:function(){return i("growth",89)},linkColor:"inherit",pricingList:["1M Records","10M API Calls"]},o.default.createElement(P,null,"Features"),o.default.createElement(E,{list:["Team access","ACLs & enhanced security","Editable mappings","3 Search Sandbox profiles","30-days analytics retention","Accounts & Analytics API access"]}),o.default.createElement(P,null,"Support and Guidance"),o.default.createElement(E,{list:["Email support","Priority tooling support","Premium support can be added"]}))))},r(t,[{key:"getText",get:function(){if(this.state.active)return"bootstrap"===this.state.active&&this.calcPrice("bootstrap")>this.calcPrice("growth")?"Growth plan will be cheaper.":"Plan scales as usage."}}]),t}(l.Component);t.default=A},1563:function(e,t,n){"use strict";t.__esModule=!0;var a=n(139),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(370),i=n(1564),u=n(498),c=n(0);var s=function(e){var t=e.className,n=e.color,c=e.backgroundColor,s=e.children,d=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["className","color","backgroundColor","children"]);return l.default.createElement(i.Button,r({},d,{className:(0,a.css)((0,o.cx)(function(e,t){return(0,o.css)(t&&{backgroundColor:t,"&:hover, &:focus":{backgroundColor:(0,u.shade)(t,-.1),color:e}},e&&{color:e},{whiteSpace:"nowrap"})}(n,c),t))}),s)};s.propTypes={children:c.node.isRequired,color:c.string,backgroundColor:c.string,className:c.string},t.default=s},1598:function(e,t,n){"use strict";t.__esModule=!0;var a=n(139),r=n(1),l=c(r),o=n(0),i=c(n(370)),u=n(1124);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(0,i.default)("div",{target:"ee0hpa40"})("display:flex;margin:0 auto;padding:10px;max-width:126px;justify-content:space-between;align-items:center;background:#ffffff;border-radius:25px;text-align:center;color:#232e44;"),p={cursor:"pointer"},f={cursor:"pointer"},m=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=s(this,e.call.apply(e,[this].concat(l))),a.state={values:a.props.values,selectedValueIndex:0},a.handleRecordsMinus=function(){var e=a.props,t=e.handleMinus,n=e.selected,r=e.onChange,l=a.state.selectedValueIndex,o=void 0===l?n:l,i=o<=0?o:o-1;a.setState({selectedValueIndex:i}),t&&t(a.state.values[i],i),r&&r(a.state.values[i],i,"minus")},a.handleRecordsPlus=function(){var e=a.props,t=e.handlePlus,n=e.onChange,r=a.state.selectedValueIndex,l=r>=a.state.values.length-1?r:r+1;t&&t(a.state.values[l],l),n&&n(a.state.values[l],l,"plus"),a.setState({selectedValueIndex:l})},s(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){this.setState(function(t){return{values:e.values,selectedValueIndex:e.selected||t.selectedValueIndex}})},t.getDerivedStateFromProps=function(e,t){var n=t.selectedValueIndex;return{values:e.values,selectedValueIndex:e.selected||n}},t.prototype.render=function(){var e=this.state,t=e.values,n=e.selectedValueIndex;return l.default.createElement(d,null,l.default.createElement(u.MinusCircle,{color:"#FFFFFF",fill:"#1A74FF",className:(0,a.css)(p),onClick:this.handleRecordsMinus}),l.default.createElement("span",null,t[n]),l.default.createElement(u.PlusCircle,{color:"#FFFFFF",fill:"#1A74FF",className:(0,a.css)(f),onClick:this.handleRecordsPlus}))},t}(r.Component);t.default=m,m.propTypes={handleMinus:o.func,handlePlus:o.func,selected:o.number,onChange:o.func}},1599:function(e,t,n){"use strict";t.__esModule=!0;var a=n(139),r=n(1),l=d(r),o=n(0),i=n(370),u=d(i),c=n(1125),s=d(n(1601));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(0,u.default)("div",{target:"e1v2unkx0"})("border-radius:14px;width:100%;max-width:400px;margin:30px auto;text-align:left;padding:20px;background-color:#ffffff;color:#ffffff;box-shadow:1px 2px 5px 0 rgba(0,0,0,0.05);",c.media.ipadPro((0,i.css)("max-width:45%;")),";",c.media.small((0,i.css)("max-width:80%;")),";"),m=(0,u.default)("div",{target:"e1v2unkx1"})(),h=(0,u.default)("div",{target:"e1v2unkx2"})("font-size:1rem;font-weight:600;line-height:28px;text-transform:uppercase;"),g=(0,u.default)("div",{target:"e1v2unkx3"})("display:flex;align-items:center;font-size:2rem;font-weight:600;margin-bottom:20px;> div{font-size:0.875rem;opacity:0.8;margin-left:10px;}"),b=(0,u.default)("a",{target:"e1v2unkx4"})("font-size:1rem;text-transform:uppercase;text-decoration:none;font-weight:600;font-weight:700;border-bottom-width:2px;border-bottom-style:dashed;"),E=(0,u.default)("ul",{target:"e1v2unkx5"})("list-style:none;padding:0;> li{display:flex;align-items:center;margin:3px;}"),y={fontWeight:700},x={fontSize:"0.875rem",fontWeight:600},v=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=p(this,e.call.apply(e,[this].concat(l))),a.state={},p(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.price,n=e.pricingList,r=void 0===n?[]:n,o=e.name,i=e.onClickLink,u=e.children,c=e.linkColor,d=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["price","pricingList","name","onClickLink","children","linkColor"]);return l.default.createElement(f,d,l.default.createElement(m,null,l.default.createElement(h,null,o),l.default.createElement(g,null,t,l.default.createElement("div",null,"/month")),l.default.createElement(b,{onClick:i,className:(0,a.css)({color:c})},"Subscribe")),l.default.createElement(E,{className:(0,a.css)(y)},r.map(function(e){return l.default.createElement("li",{key:e},e)})),u&&l.default.createElement(s.default,null,l.default.createElement(E,{className:(0,a.css)(x)},u)))},t}(r.Component);t.default=v,v.propTypes={price:o.string,linkColor:o.string,pricingList:o.array,name:o.string,onClickLink:o.func,children:o.node}},1601:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),r=s(a),l=n(370),o=s(l),i=n(0),u=n(1124),c=n(1125);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(0,o.default)("a",{target:"e1arhm3d0"})("display:flex;align-items:center;color:inherit;font-size:0.9rem;font-weight:600;line-height:19px;text-align:center;margin:0 31px;text-decoration:none;cursor:pointer;",c.media.ipadPro((0,l.css)("margin: 25px 3px;")),";"),f=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=d(this,e.call.apply(e,[this].concat(l))),a.state={visible:!1},d(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.label,l=void 0===a?"All Features":a,o=t.hideLabel,i=void 0===o?"Hide Features":o;return this.state.visible?r.default.createElement(r.default.Fragment,null," ",n," ",r.default.createElement(p,{onClick:function(){e.setState({visible:!1})}},i," ",r.default.createElement(u.ChevronUp,{width:"18",height:"18"}))," "):r.default.createElement(p,{onClick:function(){e.setState({visible:!0})}},l," ",r.default.createElement(u.ChevronDown,{width:"18",height:"18"}))},t}(a.Component);t.default=f,f.propTypes={children:i.node,label:i.string,hideLabel:i.string}},1602:function(e,t,n){"use strict";t.__esModule=!0;t.default={primaryColor:"#232E44",textDark:"#232E44",accentColor:"#00F68E",colors:{lightBlue:"#C7F4FF",darkBlue:"#232E44",purple:"#5A3AE7",pink:"#FF307A",accent:"#00F68E",accentText:"#00472C",footer:"#1A2233",alert:"#d9534f",lightGray:"rgba(237, 241, 242, 0.2)",allBatteries:"#225DD4",developerSupport:"#01C8AF",businessSupport:"#3D68F7",enterpriseSupport:"#66A1FF",supportCheck:"#78E58C",supportGray:"#EBECF1",pricingBootstrap:"#9BEFFC",pricingGrowth:"#4FDBFE",pricingDedicated:"#44B7FF",faqBackground:"#9BEFFC",subText:"#232E44",clusterBackground:"#C7F4FF",clusterSubText:"#545761",cardBackground:"#193244",pricingClients:"#1A74FF"},badge:{blue:"#1AA3FF",darkBlue:"#3A0BF1",red:"#FF307A"}}},1603:function(e,t,n){"use strict";var a=n(500);var r=function(){function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handler=StripeCheckout.configure({key:t,image:"../../../assets/images/pricing/stripeLogo.png",locale:"auto",token:function(e){n(e)}}),$(window).on("popstate",function(){a.handler.close()})}return e.prototype.checkoutOpen=function(e,t){var n=e||"charged monthly";this.handler.open({name:"appbase.io "+t+" plan",description:n,amount:100*a.billingService.prices.monthly[t],opened:function(){},closed:function(){}})},e.prototype.getAmount=function(e,t){var n="annual"===e?12:1;return 100*a.billingService.prices[e][t]*n},e}();e.exports={StripeSetup:r,checkoutCb:function(e,t,n){return e.stripeKey?function(n){var r={email:t.email,customerId:e.stripeKey,stripeToken:n.id};return a.billingService.updateStripeCustomer(r)}.call(this,n):function(e){var n={email:t.email,stripeKey:e.id};return a.billingService.stripeConnect(n)}.call(this,n)}}},1604:function(e,t,n){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(507),i=n(99),u=n(39);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.renderBody=function(){var e=null;return this.props.billingText&&(e=l.default.createElement(o.Modal.Body,null,l.default.createElement("div",{className:"final-amount"},this.props.billingText.finalMode," $",this.props.billingText.finalAmount,"."),l.default.createElement("div",{className:"breakdown"},l.default.createElement("h4",null,"Breakdown:"),this.props.billingText.payment.amount?l.default.createElement("div",{className:"payment"},l.default.createElement("h5",null,"Price for ",this.props.customer.plan," plan: $",this.props.billingText.payment.amount),l.default.createElement("p",{className:"description"},"(",this.props.billingText.payment.explain,")")):null,this.props.billingText.refund.amount?l.default.createElement("div",{className:"refund"},l.default.createElement("h5",null,"Refund from ",this.props.activePlan," plan: $",this.props.billingText.refund.amount),l.default.createElement("p",{className:"description"},"(",this.props.billingText.refund.explain,")")):null))),e},t.prototype.render=function(){var e=this;return l.default.createElement(o.Modal,{id:"paymentModal",show:this.props.showPlanChange,onHide:function(){return e.props.closeModal()}},l.default.createElement(o.Modal.Header,{closeButton:!0},l.default.createElement("div",{className:"Header-logo"},l.default.createElement("div",{className:"Header-logoWrap"},l.default.createElement("div",{className:"Header-logoBevel"}),l.default.createElement("div",{className:"Header-logoBorder"}),l.default.createElement("div",{className:"Header-logoImage",style:{backgroundImage:"url('../../../assets/images/pricing/stripeLogo.png')"},alt:"Logo"}))),l.default.createElement(o.Modal.Title,null,"appbase.io ",this.props.plan," plan"),l.default.createElement("span",{className:"bottomline"},"charged ","annual"===this.props.mode?"annually":"monthly")),l.default.createElement("div",{className:"seprator-container"},l.default.createElement("div",{className:"seprator"})),this.renderBody(),l.default.createElement(o.Modal.Footer,null,l.default.createElement("button",a({},u.common.isDisabled(this.props.loadingModal),{type:"button",className:"btn btn-primary col-xs-12 saveBtn",onClick:this.props.confirmPlan}),this.props.loadingModal?l.default.createElement(i.Loading,null):null,"Confirm plan change")))},t}(r.Component);t.default=c,c.propTypes={},c.defaultProps={}},335:function(e,t,n){"use strict";t.__esModule=!0;var a=p(n(455)),r=n(139);n(442);var l=p(n(1)),o=p(n(1285)),i=n(500),u=n(16),c=n(1603),s=p(n(1604)),d=p(n(443));function p(e){return e&&e.__esModule?e:{default:e}}var f=(0,r.css)("color:rgb(35,46,68);font-size:2rem;font-weight:300;padding:30px 0px;"),m=function(){return"Your old plan amount will be adjust in new plan."},h=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.checkCustomer=function(){var e={c_id:a.userProfile.c_id};a.count+=1,i.billingService.getCustomer(e).then(function(e){var t=e,n=a.allowedPlan.indexOf(e.plan)>-1?e.plan:"free";a.stripeExists="stripeKey"in e,a.stripeExists&&e.subscriptionId||(a.stripeSetup=new c.StripeSetup(a.stripeKey,a.stripeCb.bind(a))),a.setState({customer:t,plan:n})}).catch(function(e){e&&"NOTEXISTS"===e.message?a.createCustomer():"Error fetching client from mssql"===e.message&&a.checkCustomer()})},a.createCustomer=function(){var e={email:a.userProfile.email,userInfo:a.userProfile};i.billingService.createCustomer(e).then(function(){a.checkCustomer()}).catch(function(){})},a.checkoutInit=function(e,t){a.checkoutPlan=e,a.checkoutMode=a.state.mode,a.stripeSetup||(a.stripeSetup=new c.StripeSetup(a.stripeKey,a.stripeCb.bind(a))),a.stripeSetup.checkoutOpen(t,e)},a.subscribePlan=function(e,t){a.price=t,a.customerCopy=JSON.parse(JSON.stringify(a.state.customer)),"free"===e?a.updateCustomer(e):a.customerCopy.stripeKey&&a.customerCopy.stripeKey?a.customerCopy.subscriptionId?a.updateCustomer(e):a.checkoutInit(e,m()):a.checkoutInit(e)},a.stripeCb=function(e){a.setState({loadingModal:!0}),(0,c.checkoutCb)(a.state.customer,a.userProfile,e).then(function(){a.setState({customerCopy:a.state.customer,tempPlan:a.checkoutPlan,mode:a.checkoutMode},a.confirmPlan.bind(a))}).catch(function(){a.setState({loadingModal:!1})})},a.closeModal=function(){a.setState({showPlanChange:!1})},a.confirmPlan=function(){a.customerCopy=a.state.customerCopy,a.customerCopy.plan=a.state.tempPlan,a.customerCopy.mode=a.state.mode,a.pricingError={show:!1,text:""},a.setState({loadingModal:!0}),i.billingService.updateCustomer(a.customerCopy,"planChange").then(function(e){a.customer=e,a.plan=e.plan,a.setState({customer:a.customer,plan:e.plan,mode:e.mode,loadingModal:!1}),a.closeModal()}).catch(function(){a.setState({loadingModal:!1})})},a.setRefund=function(e){var t={amount:0,explain:null};return e.current_prorations.forEach(function(e){e.plan.id===a.state.plan+"-"+a.state.mode&&(t.amount=e.amount/100,t.amount=t.amount<0?-t.amount:t.amount,t.explain=e.description)}),t},a.setPayment=function(e){var t={amount:0,explain:null};if("free"!==a.customerCopy.plan){var n=!1;e.invoice.lines.data.forEach(function(e){n||e.plan.id!==a.customerCopy.plan+"-"+a.customerCopy.mode||(n=!0,t.amount=e.amount/100,t.explain="The charge for "+("annual"===a.customerCopy.mode?"annual":"month")+" "+a.customerCopy.plan+" plan is $"+("annual"===a.customerCopy.mode?(t.amount/12).toFixed(2)+" x12":t.amount))})}return t},a.state={loadingModal:!1,showPlanChange:!1,billingText:null,plan:"free",mode:"monthly",customer:void 0,customerCopy:void 0,tempPlan:void 0},a.stripeKey="pk_live_ihb1fzO4h1ykymhpZsA3GaQR",a.userProfile=u.appbaseService.userInfo.body,a.allowedPlan=["free","bootstrap","growth","dedicated"],a.count=0,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.checkCustomer()},t.prototype.updateCustomer=function(e){var t=this;this.customerCopy.plan=e,this.customerCopy.mode=this.state.mode,i.billingService.paymentInfo(this.customerCopy).then(function(n){var a=n.message;a.invoice.total/=100,a.invoice.total=a.invoice.total.toFixed(2),t.billingText={finalMode:a.invoice.total<0?"Your net refund amount will be ":"Your net payment due will be ",refund:t.setRefund(a),payment:t.setPayment(a)};var r=t.billingText.payment.amount-t.billingText.refund.amount;t.billingText.finalAmount=r<0?-r:r,t.billingText.finalAmount=t.billingText.finalAmount.toFixed(2),t.changePlanModal(t.billingText,t.customerCopy,e)}).catch(function(e){console.log(e)})},t.prototype.changePlanModal=function(e,t,n){this.setState({showPlanChange:!0,billingText:e,customerCopy:t,tempPlan:n})},t.prototype.render=function(){var e=this;return l.default.createElement(l.default.Fragment,null,l.default.createElement(a.default,null,l.default.createElement(d.default,{alignItems:"center",justifyContent:"center"},l.default.createElement("div",{className:(0,r.css)(f)},"Your current plan is: ",this.state.plan.toUpperCase()," ",this.state.mode))),l.default.createElement(o.default,{onClickButton:this.subscribePlan}),l.default.createElement(s.default,{billingText:this.state.billingText,showPlanChange:this.state.showPlanChange,customer:this.state.customerCopy,tempPlan:this.state.tempPlan,mode:"montly",closeModal:function(){return e.closeModal()},activePlan:this.state.plan,confirmPlan:this.confirmPlan,loadingModal:this.state.loadingModal}))},t}(l.default.Component);t.default=h},443:function(e,t,n){"use strict";t.__esModule=!0;var a=n(370);var r=(0,function(e){return e&&e.__esModule?e:{default:e}}(a).default)("div",{target:"e1tnvnpn0"})("display:flex;flex-direction:",function(e){return e.flexDirection||"row"},";",function(e){var t=e.alignItems;return t&&(0,a.css)("align-items:",t,";")},";",function(e){var t=e.justifyContent;return t&&(0,a.css)("justify-content:",t,";")},";");t.default=r},500:function(e,t,n){"use strict";t.__esModule=!0,t.billingService=void 0;var a=n(39),r=n(96);var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.address=r.ACC_API,this.billingAddress="https://transactions.appbase.io",this.planLimits={free:{action:1e5,records:1e4},bootstrap:{action:1e6,records:5e4},growth:{action:1e7,records:1e6}},this.prices={monthly:{bootstrap:29,growth:99,dedicated:499},annual:{bootstrap:19,growth:69,dedicated:299}}}return e.prototype.getCustomer=function(e){return a.$http.start({url:this.billingAddress+"/api/me",data:e,method:"POST"})},e.prototype.createCustomer=function(e){return a.$http.start({url:this.billingAddress+"/api/createCustomer",data:e,method:"POST"})},e.prototype.stripeConnect=function(e){return a.$http.start({url:this.billingAddress+"/api/stripeConnect",data:e,method:"POST"})},e.prototype.updateStripeCustomer=function(e){return a.$http.start({url:this.billingAddress+"/api/updateStripeCustomer",data:e,method:"POST"})},e.prototype.updateCustomer=function(e,t){return a.$http.start({url:this.billingAddress+"/api/updateCustomer/"+t,data:e,method:"POST"})},e.prototype.paymentInfo=function(e,t){return a.$http.start({url:this.billingAddress+"/api/paymentInfo",data:e,method:"POST"})},e.prototype.updateSubscribe=function(e){return a.$http.start({url:this.billingAddress+"/billing/subscribe",data:e,method:"PUT"})},e.prototype.cancelSubscription=function(e){return a.$http.start({url:this.billingAddress+"/billing/cancelSubscription",data:e,method:"POST"})},e.prototype.usage=function(e,t){var n=this.billingAddress+"/usage";return e&&t&&(n=this.billingAddress+"/usage?start="+e+"&end="+t),a.$http.start({url:n,method:"GET"})},e.prototype.calculator=function(){return a.$http.start({url:this.billingAddress+"/calculator",method:"GET"})},e}();t.billingService=new l}}]);