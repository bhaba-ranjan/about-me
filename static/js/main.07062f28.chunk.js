(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(9),n=s.n(c),i=(s(14),s(2)),r=s(3),o=s(5),l=s(4),d=s(8),j=(s(17),s(18),s(0)),h=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){setTimeout((function(){document.getElementById("aboutId").click()}),50)},e}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e="Bhabaranjan",t=(this.props.data.occupation,this.props.data.address.city,this.props.data.social.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("i",{className:e.className})})},e.name)})));return Object(j.jsxs)("header",{id:"home",children:[Object(j.jsxs)("nav",{id:"nav-wrap",children:[Object(j.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(j.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(j.jsxs)("ul",{id:"nav",className:"nav",children:[Object(j.jsx)("li",{className:"current",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{id:"aboutId",className:"smoothscroll",href:"#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})})]})]}),Object(j.jsx)("div",{className:"row banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsxs)("h1",{className:"responsive-headline",children:["Hi! I'm ",e,"."]}),Object(j.jsx)("ul",{className:"social",children:t})]})}),Object(j.jsx)("p",{className:"scrolldown",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(j.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),b=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("i",{className:e.className})})},e.name)}));return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("ul",{className:"social-links",children:e}),Object(j.jsx)("ul",{className:"copyright",children:Object(j.jsx)("li",{children:"\xa9 Copyright 2022 Bhabaranjan Panigrahi"})})]}),Object(j.jsx)("div",{id:"go-top",children:Object(j.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(j.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,t=this.props.data.bio,s=this.props.data.bio2,a=this.props.data.address.street,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,o=this.props.data.email;this.props.data.resumedownload}return Object(j.jsx)("section",{id:"about",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"three columns",children:Object(j.jsx)("img",{className:"profile-pic",src:"https://assets.leetcode.com/users/bhabaranjan/avatar_1624277531.png",alt:"Tim Baker Profile Pic"})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsxs)("p",{children:[t,Object(j.jsx)("p",{children:" "}),Object(j.jsxs)("p",{children:[" ",s]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"columns contact-details",children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("p",{className:"address",children:[Object(j.jsx)("span",{children:e}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[a,Object(j.jsx)("br",{}),c," ",n,", ",i]}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:r}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:o})]})]}),Object(j.jsx)("div",{className:"columns download",children:Object(j.jsx)("p",{children:Object(j.jsxs)("a",{href:"https://drive.google.com/u/2/uc?id=1KaFwIG-zANgSbnsI08rhkqndBwM1XTdb&export=download",download:"resume",className:"button",children:[Object(j.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(a.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.school}),Object(j.jsxs)("p",{className:"info",children:[e.degree," ",Object(j.jsx)("span",{children:"\u2022"}),Object(j.jsx)("em",{className:"date",children:e.graduated})]}),Object(j.jsx)("p",{children:e.description.map((function(e){return Object(j.jsx)("li",{children:e})}))})]},e.school)}));this.props.data.work.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:e.company})},e.company)})),this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{style:{width:e.level},className:t}),Object(j.jsx)("em",{children:e.name})]},e.name)}))}return Object(j.jsx)("section",{id:"resume",children:Object(j.jsxs)("div",{className:"row education",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Education"})})}),Object(j.jsx)("div",{className:"nine columns main-col",children:Object(j.jsx)("div",{className:"row item",children:Object(j.jsx)("div",{className:"twelve columns",children:e})})})]})})}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.contactmessage;return Object(j.jsx)("section",{id:"contact"})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("blockquote",{children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("cite",{children:e.user})]})},e.user)}));return Object(j.jsx)("section",{id:"testimonials",children:Object(j.jsx)("div",{className:"text-container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"two columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Client Testimonials"})})}),Object(j.jsx)("div",{className:"ten columns flex-container",children:Object(j.jsx)("ul",{className:"slides",children:e})})]})})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(j.jsx)("div",{className:"columns portfolio-item",children:Object(j.jsx)("div",{className:"item-wrap",children:Object(j.jsxs)("a",{href:e.url,title:e.title,children:[Object(j.jsx)("img",{alt:e.title,src:t}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"portfolio-item-meta",children:[Object(j.jsx)("h5",{children:e.title}),Object(j.jsx)("p",{children:e.category})]})}),Object(j.jsx)("div",{className:"link-icon",children:Object(j.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(j.jsx)("section",{id:"portfolio",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"twelve columns collapsed",children:[Object(j.jsx)("h1",{children:"Check Out Some of My Works."}),Object(j.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then((function(e){return e.text()})).then((function(t){console.log(JSON.parse(t)),e.setState({resumeData:JSON.parse(t)})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{data:this.state.resumeData.main}),Object(j.jsx)(p,{data:this.state.resumeData.main}),Object(j.jsx)(m,{data:this.state.resumeData.resume}),Object(j.jsx)(x,{data:this.state.resumeData.portfolio}),Object(j.jsx)(O,{data:this.state.resumeData.testimonials}),Object(j.jsx)(u,{data:this.state.resumeData.main}),Object(j.jsx)(b,{data:this.state.resumeData.main})]})}}]),s}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(j.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");v?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.07062f28.chunk.js.map