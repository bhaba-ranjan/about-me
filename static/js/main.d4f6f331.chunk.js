(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(9),c=s.n(i),n=(s(14),s(2)),r=s(3),o=s(5),l=s(4),d=s(8),h=(s(17),s(18),s(0)),j=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))})),setTimeout((function(){document.getElementById("aboutId").click()}),2e3)},e}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e="Bhabaranjan",t=(this.props.data.occupation,this.props.data.address.city,this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)})));return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{id:"aboutId",className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsxs)("h1",{className:"responsive-headline",children:["Hi! I'm ",e,"."]}),Object(h.jsx)("ul",{className:"social",children:t})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsxs)("ul",{className:"copyright",children:[Object(h.jsx)("li",{children:"\xa9 Copyright 2017 Tim Baker"}),Object(h.jsxs)("li",{children:["Design by ",Object(h.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),b=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,t=this.props.data.bio,s=this.props.data.bio2,a=this.props.data.address.street,i=this.props.data.address.city,c=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,o=this.props.data.email;this.props.data.resumedownload}return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:"https://assets.leetcode.com/users/bhabaranjan/avatar_1624277531.png",alt:"Tim Baker Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsxs)("p",{children:[t,Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[a,Object(h.jsx)("br",{}),i," ",c,", ",n]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:o})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:"https://drive.google.com/u/2/uc?id=1KaFwIG-zANgSbnsI08rhkqndBwM1XTdb&export=download",download:"resume",className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:e.level},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,i=this.props.data.address.zip,c=this.props.data.phone,n=(this.props.data.email,this.props.data.contactmessage);return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch."})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:n})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"eight columns",children:[Object(h.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"submit",children:"Submit"}),Object(h.jsx)("span",{id:"image-loader",children:Object(h.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(h.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(h.jsxs)("div",{id:"message-success",children:[Object(h.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(h.jsx)("br",{})]})]}),Object(h.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(h.jsxs)("div",{className:"widget widget_contact",children:[Object(h.jsx)("h4",{children:"Address and Phone"}),Object(h.jsxs)("p",{className:"address",children:[e,Object(h.jsx)("br",{}),t," ",Object(h.jsx)("br",{}),s,", ",a," ",i,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:c})]})]}),Object(h.jsxs)("div",{className:"widget widget_tweets",children:[Object(h.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(h.jsxs)("ul",{id:"twitter",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(h.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:"#",children:"2 Days Ago"})})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(h.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:"#",children:"3 Days Ago"})})]})]})]})]})]})]})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("blockquote",{children:[Object(h.jsx)("p",{children:e.text}),Object(h.jsx)("cite",{children:e.user})]})},e.user)}));return Object(h.jsx)("section",{id:"testimonials",children:Object(h.jsx)("div",{className:"text-container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Client Testimonials"})})}),Object(h.jsx)("div",{className:"ten columns flex-container",children:Object(h.jsx)("ul",{className:"slides",children:e})})]})})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,title:e.title,children:[Object(h.jsx)("img",{alt:e.title,src:t}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsx)("p",{children:e.category})]})}),Object(h.jsx)("div",{className:"link-icon",children:Object(h.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.setState({resumeData:JSON.parse(JSON.stringify({main:{name:"Bhabaranjan Panigrahi",occupation:"(Your Occupation Here)",description:"Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",image:"profilepic.jpg",bio:"I am a Computer Science graduate student Specializing in Machine Learning. Before starting my master's I was working as a Senior Software Developer. During this time, I worked closely with Data Science and Analytics teams. Being a tech geek, I got super fascinated after seeing the unparallel capabilities of ML/AI in action. During my time at the second company, I got an opportunity to work in a data ingestion project and collaborated directly with the Insight Management Team. This was the time I decided to make a career in ML and AI.",bio2:"I am curretly seeking Internship opportunities in the field of Machine Leanring and AI. I want to work on challenging projects which will provide me a scope to Apply and Grow my skills at the same time.",contactmessage:"Here is where you should write your message to readers to have them get in contact with you.",email:"youremailhere@gmail.com",phone:"555-555-5555",address:{street:"(Your Street)",city:"(Your City)",state:"(Your State)",zip:"(Your Zip/Postal Code)"},website:"http://www.timbakerdev.com",resumedownload:"http://timbakerdev.com",social:[{name:"facebook",url:"http://facebook.com/tim.baker.906",className:"fa fa-facebook"},{name:"twitter",url:"http://twitter.com",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/tim-baker-8420009a/",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/tbaker_x",className:"fa fa-instagram"},{name:"github",url:"http://github.com/tbakerx",className:"fa fa-github"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"University?",degree:"Masters in Beer tasting",graduated:"April 2007",description:"Describe your experience at school, what you learned, what useful skills you have acquired etc."},{school:"School #1 Maybe College?",degree:"What did you study 101",graduated:"March 2003",description:"Describe your experience at school, what you learned, what useful skills you have acquired etc."}],work:[{company:"Awesome Design Studio",title:"Senior UX God ",years:"March 2010 - Present",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."},{company:"Super Cool Studio",title:"Junior bug fixer",years:"March 2007 - February 2010",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."}],skills:[{name:"Git",level:"60%"},{name:"Illustrator",level:"55%"},{name:"ReactJs",level:"50%"},{name:"CSS",level:"90%"},{name:"HTML5",level:"80%"},{name:"VueJs",level:"50%"},{name:"MongoDB",level:"80%"}]},portfolio:{projects:[{title:"Canadian Wanderlust",category:"My Travel Blog for my post-university travels",image:"canadian-wanderlust.jpg",url:"https://www.canadianwanderlust.com"},{title:"Fury Fighting Gear",category:"(offline now) A fighting gear company I started",image:"fury-fighting-gear.jpg",url:"http://www.timbakerdev.com"},{title:"Original Thai Food",category:"Website I built for a restaurant I like in Thailand",image:"original-thai-food.jpg",url:"http://www.timbakerdev.com/originalthaifood.github.io"},{title:"Resume Website",category:"A React based resume website template",image:"resume-website.jpg",url:"http://www.timbakerdev.com"},{title:"Smirkspace",category:"(MVP Only) A React and Meteor based chat University project.",image:"smirkspace.jpg",url:"http://www.smirkspace.com"}]},testimonials:{testimonials:[{text:"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",user:"Kareem Abdul Jabbar"},{text:"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",user:"Steve Wozniak... impersonator"}]}}))})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{data:this.state.resumeData.main}),Object(h.jsx)(b,{data:this.state.resumeData.main}),Object(h.jsx)(u,{data:this.state.resumeData.resume}),Object(h.jsx)(x,{data:this.state.resumeData.portfolio}),Object(h.jsx)(O,{data:this.state.resumeData.testimonials}),Object(h.jsx)(p,{data:this.state.resumeData.main}),Object(h.jsx)(m,{data:this.state.resumeData.main})]})}}]),s}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/about-me",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/about-me","/service-worker.js");v?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.d4f6f331.chunk.js.map