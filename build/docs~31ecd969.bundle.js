(window.webpackJsonp=window.webpackJsonp||[]).push([[6,39,41],{"0VRR":function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-docs{display:flex;background-color:white}#route-docs .container{display:flex}\n",""]),e.exports=t},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n("cDcd"),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),s=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||r;return n?l.a.createElement(d,i(i({ref:t},u),{},{components:n})):l.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},D1xp:function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),l=n.n(a),r=n("Kvkj"),o=n("oncg"),i=(n("ZNy1"),function(){var e=Object(o.useRouteMatch)();return l.a.createElement("nav",{id:"sidebar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"title"},"Introduction"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/installation")},"Installation")))),l.a.createElement("li",null,l.a.createElement("div",{className:"title"},"Components"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Collapsible"),l.a.createElement("ul",null,l.a.createElement("li",{className:"active"},l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"API")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Examples")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Playground")))),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Movable")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Pannable")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Poppable")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Resizable")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Stackable")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/movable")},"Zoomable")))),l.a.createElement("li",null,l.a.createElement("div",{className:"title"},"Hooks"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/installation")},"useBoolean")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"".concat(e.url,"/installation")},"useBoolean"))))))}),c=n("7ljp"),u=n("w0S+"),s=n("V0Qw"),p=(n("PCiq"),{pre:function(e){return l.a.createElement(l.a.Fragment,e)},code:function(e){var t=e.children,n=e.className.replace(/language-/,"");return l.a.createElement(r.g,{code:t.trim(),language:n})},inlineCode:function(e){return l.a.createElement(r.g,{code:e.children.trim(),inline:!0})}}),m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement(u.a,{words:120})),l.a.createElement("p",null,l.a.createElement(u.a,{words:120})),l.a.createElement("p",null,l.a.createElement(u.a,{words:120})))},b=function(e){var t=e.children,n=Object(o.useRouteMatch)();return l.a.createElement("article",{id:n.url.replace(/\//g,"-").slice(1)},t)},d=function(){var e=Object(o.useRouteMatch)();return l.a.createElement(c.a,{components:p},l.a.createElement(o.Switch,null,l.a.createElement(o.Redirect,{from:e.url,to:"".concat(e.url,"/installation"),exact:!0}),l.a.createElement(o.Route,{path:e.url+"/installation",component:function(){return l.a.createElement(b,null,l.a.createElement(m,null))}}),l.a.createElement(o.Route,{path:e.url+"/movable",component:function(){return l.a.createElement(b,null,l.a.createElement(s.default,null))}})))};n("z1/Z"),t.default=function(){return l.a.createElement(r.b,null,l.a.createElement(i,null),l.a.createElement(d,null))}},Jn0D:function(e,t,n){var a=n("LboF"),l=n("Xgdj");"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};a(l,r);e.exports=l.locals||{}},PCiq:function(e,t,n){var a=n("LboF"),l=n("yKOD");"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};a(l,r);e.exports=l.locals||{}},V0Qw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("pVnL"),l=n.n(a),r=n("QILm"),o=n.n(r),i=(n("cDcd"),n("7ljp")),c=n("Kvkj"),u=(n("Jn0D"),{});function s(e){var t=e.components,n=o()(e,["components"]);return Object(i.b)("wrapper",l()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Movable/>")," component can be used to create items that can be move around. As opposed to a draggable element,\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"<Movable/>")," component does not require a source/target configuration. All it does it trigger an event when the user\nmoves it around, passing the mouse position (",Object(i.b)("inlineCode",{parentName:"p"},"x/y"),"), the difference in the coordinates since the beginning of the event\n(",Object(i.b)("inlineCode",{parentName:"p"},"dx/dy"),"), and the difference in the coordinates since the last event (",Object(i.b)("inlineCode",{parentName:"p"},"cx/cy"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",l()({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",l()({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",l()({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",l()({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onBeginMove")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"() => null")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"Specifies a callback to be called when the user begins to move the element")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onMove")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"() => null")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"Specifies a callback to be continuously called as the user moves the element around. Receives ",Object(i.b)("inlineCode",{parentName:"td"},"x/y/dx/dy/cx/cy")," as arguments (see description above for more info)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onEndMove")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",l()({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"() => null")),Object(i.b)("td",l()({parentName:"tr"},{align:null}),"Specifies a callback to be called when the user stops moving the element")))),Object(i.b)("h1",null,"Basic Example"),Object(i.b)(c.d,{file:"components/Movable/BasicExample",mdxType:"Example"}),Object(i.b)("p",null,"In this example you can see how, using the ",Object(i.b)("inlineCode",{parentName:"p"},"onMove"),", we can change the element coordinates based on ",Object(i.b)("inlineCode",{parentName:"p"},"cx/cy"),"."),Object(i.b)("p",null,"Notice that we are using a function to set the state, instead of passing an object directly.\nThis is because the ",Object(i.b)("a",l()({parentName:"p"},{href:"https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous"}),"state may be updated asynchronously"),",\nso we cannot rely on the state value for calculating the next position."),Object(i.b)("p",null,"Using a function will give us the previous state as an argument, and we can use that to accurately calculate the\nnext position."),Object(i.b)("h1",null,"Constraint Movement"),Object(i.b)(c.d,{file:"components/Movable/ConstraintMovement",mdxType:"Example"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Movable/>")," component gives you complete control over the positioning of the element by only passing information\nthrough the event without actually manipulating the element itself.\nThis way you are free to add your own logic and constraints."),Object(i.b)("p",null,"In this example, we ignore the movement of the mouse on the ",Object(i.b)("inlineCode",{parentName:"p"},"x")," axis to constraint the element to the ",Object(i.b)("inlineCode",{parentName:"p"},"y"),"\naxis."),Object(i.b)("h1",null,"Snapping"),Object(i.b)(c.d,{file:"components/Movable/Snapping",mdxType:"Example"}),Object(i.b)("p",null,"Similarly to the previous example, more complex constraints can be applied, like snapping.\nThis can be achieved by applying the following formula to the coordinates of the element:"),Object(i.b)("pre",null,Object(i.b)("code",l()({parentName:"pre"},{className:"language-jsx"}),"const GRID_SIZE = 20;\nMath.round(x / GRID_SIZE) * GRID_SIZE;\n")),Object(i.b)("p",null,"The main difference is that we are no longer updating the state for every event (the user can move\nthe mouse without the object moving with it until it snaps to the next grid line).\nBecause of that, we need to maintain the initial position of the element, and use ",Object(i.b)("inlineCode",{parentName:"p"},"dx/dy"),"\ninstead to get the next position."))}s.isMDXComponent=!0},Xgdj:function(e,t,n){(t=n("JPst")(!1)).push([e.i,'[id*="components-movable"]{height:200px;display:flex;align-items:center;justify-content:center}[id*="components-movable"] .movable-object{user-select:none;background-color:#E43F5A;width:100px;height:100px;cursor:move;position:relative;color:#fff;padding:10px;display:flex;align-items:center;justify-content:center;text-align:center}\n',""]),e.exports=t},YA4K:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#sidebar{position:relative;background-color:#f6fbff;border-right:1px solid #d9e6f1;margin-right:20px;margin-bottom:-15px;margin-top:-15px}#sidebar::before{content:'';position:absolute;top:0;bottom:0;right:100%;left:-999px;background-color:#f6fbff}#sidebar>ul{padding:30px 0;position:sticky;top:60px}#sidebar>ul>li{position:relative;margin:5px 30px}#sidebar>ul>li:not(:last-child)::after{content:'';height:1px;background-image:linear-gradient(90deg, transparent, #d9e6f1 30%);position:absolute;right:-30px;left:-30px;bottom:-15px}#sidebar>ul>li .title{text-transform:uppercase;font-weight:bold;font-size:0.8em;color:#9094A6;letter-spacing:2px}#sidebar>ul>li>ul{margin:10px 0 30px 10px}#sidebar>ul>li>ul li.active{position:relative;color:#E43F5A}#sidebar>ul>li>ul li.active::after{content:'';position:absolute;right:-30px;width:3px;height:100%;background-color:#E43F5A}#sidebar>ul>li>ul>li{color:#1B1B2F;margin:5px 0;font-size:0.9em}#sidebar>ul>li>ul>li>ul{margin:0 0 15px 10px}\n",""]),e.exports=t},ZNy1:function(e,t,n){var a=n("LboF"),l=n("YA4K");"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};a(l,r);e.exports=l.locals||{}},"w0S+":function(e,t,n){"use strict";n("cDcd");var a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",l=a.split(" ");t.a=function(e){for(var t=e.words,n="",r=0;r<t/l.length-1;r++)n+=a+" ";return n+=l.slice(0,t%l.length).join(" ")}},yKOD:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-docs article{flex:1;margin:25px 10px;overflow:hidden}#route-docs article h1{margin:3em 0 1em;color:#E43F5A}\n",""]),e.exports=t},"z1/Z":function(e,t,n){var a=n("LboF"),l=n("0VRR");"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};a(l,r);e.exports=l.locals||{}}}]);