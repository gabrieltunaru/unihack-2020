(this["webpackJsonpunihack-frontend-app"]=this["webpackJsonpunihack-frontend-app"]||[]).push([[0],{111:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),i=a(9),r=a.n(i),l=a(145),o=a(149),d=a(150),j=a(151),u=a(152);a(89);function h(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("div",{className:"container-fluid d-flex justify-content-between",children:[Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("h5",{children:"About Us"}),Object(n.jsx)("p",{children:"Platforma pentru monitorizarea pacientilor cu simptome de SarsCov2 de la domiciliu."})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("h5",{children:"Contact Us"}),Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(l.a,{style:{fill:"whitesmoke"}})}),Object(n.jsx)("td",{children:" +90 9999 999 999"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(o.a,{style:{fill:"whitesmoke"}})}),Object(n.jsx)("td",{children:" covid@contact.com"})]})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("h5",{children:"Informations"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"Medics"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"Covid Simptoms"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"World status"})})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("h5",{children:"Helpful Links"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"Supports"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"Terms & Condition"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("a",{href:"#",children:"Privacy Policy"})})]})]})]}),Object(n.jsxs)("div",{className:"icons container-fluid d-flex justify-content-between align-items-center",children:[Object(n.jsx)("a",{href:"#",children:Object(n.jsx)(d.a,{style:{fill:"whitesmoke"}})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)(j.a,{style:{fill:"whitesmoke"}})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)(u.a,{style:{fill:"whitesmoke"}})})]})]})}var b=a(11),O=a(14),x=a.n(O),m=a(22),f=a(17),p=a(159),v=a(155),g=a(153),y=a(154),N=(a(52),a(48)),w=a.n(N),C=a(18),k=Object(C.a)(),S="https://34.68.55.0:5010/";function F(e){localStorage.setItem("token",JSON.stringify(e))}function W(){return JSON.parse(localStorage.getItem("token")+"").token}var P=function(){function e(){return(e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post(S+"api/Auth/Register",t,{headers:{"Content-Type":"application/json"}}).then((function(e){F(e.data),k.push("/completeprofile")})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post(S+"api/Auth/Login",t,{headers:{"Content-Type":"application/json"}}).then((function(e){F(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post(S+"Create",t,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+W()}}).then((function(e){k.push("/")})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{register:function(t){return e.apply(this,arguments)},saveProfile:function(e){return a.apply(this,arguments)},login:function(e){return t.apply(this,arguments)}}};function I(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),l=r[0],o=r[1],d=P().login;function j(){return(j=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:l,password:a},n=JSON.stringify(t),d(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid loginregisterform",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Login form"})}),Object(n.jsxs)("div",{className:"container field",children:[Object(n.jsx)(g.a,{}),Object(n.jsx)(p.a,{required:!0,fullWidth:!0,id:"userEmail",label:"User Email",name:"userEmail",autoComplete:"userEmail",autoFocus:!0,value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsxs)("div",{className:"container field",children:[Object(n.jsx)(y.a,{}),Object(n.jsx)(p.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(v.a,{className:"button",children:"Cancel"}),Object(n.jsx)(v.a,{onClick:function(){return function(){return j.apply(this,arguments)}()},className:"button",children:"Login"})]})]})})}a(53);function B(){return Object(n.jsxs)("div",{className:"login-register-page",children:[Object(n.jsx)("div",{}),Object(n.jsx)(I,{}),Object(n.jsx)("div",{})]})}var q=a(117),L=(a(70),function(e){return Object(n.jsx)("div",{className:"container ",children:Object(n.jsxs)("div",{className:"row d-flex",style:{margin:"160px 0px 100px 0px"},children:[Object(n.jsxs)("div",{className:"col-12 col-lg-6 d-flex flex-column ",children:[Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"1000",id:e.id,children:Object(n.jsx)(q.a,{variant:"h1",gutterBottom:!0,style:{fontWeight:"bold"},children:e.title})}),Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"1000",children:Object(n.jsx)(q.a,{variant:"h5",gutterBottom:!0,children:e.subtitle})})]}),Object(n.jsx)("div",{className:"col-12 col-lg-6 d-flex align-items-center my-5","data-aos":"fade-up","data-aos-delay":"500","data-aos-duration":"1000",children:Object(n.jsx)("img",{src:e.imagePath,style:{width:"100%"}})})]})})}),A=function(e){return Object(n.jsx)("div",{className:"container-fluid d-flex align-items-center p-5",style:{backgroundColor:"#f5f186",backgroundImage:"linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)"},id:null===e||void 0===e?void 0:e.id,children:Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"1000",className:"container ",children:Object(n.jsx)("div",{className:"row",children:e.children})})})};function J(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{title:"Monitoring COVID-19 Sympthoms",subtitle:"we're here to prevent new COVID-19 cases",imagePath:"assets/images/bg-image1.jpg"}),Object(n.jsxs)(A,{id:"staySafe",children:[Object(n.jsx)(q.a,{variant:"h2",gutterBottom:!0,style:{fontWeight:"bold"},className:"my-5",children:"What our doctors recommend"}),Object(n.jsx)("div",{className:"col-12 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"500",children:Object(n.jsx)("img",{src:"assets/images/stay_safe.svg",width:"100%"})}),Object(n.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"1000",className:"col-12 col-md-6 d-flex flex-column justify-content-around",children:[Object(n.jsx)(q.a,{variant:"h5",gutterBottom:!0,children:"People age 2 and older should wear masks in public settings and when around people who don\u2019t live in their household."}),Object(n.jsx)(q.a,{variant:"h5",gutterBottom:!0,children:"Masks offer some protection to you and are also meant to protect those around you, in case you are unknowingly infected with the virus that causes COVID-19."}),Object(n.jsx)(q.a,{variant:"h5",gutterBottom:!0,children:"A mask is NOT a substitute for social distancing. Masks should still be worn in addition to staying at least 6 feet apart."})]})]}),Object(n.jsx)(L,{title:"How many people have COVID-19?",subtitle:"It has spread so rapidly and to so many countries that the World Health Organization has declared it a pandemic",imagePath:"assets/images/fever.gif",id:"stats"}),Object(n.jsx)(A,{children:Object(n.jsx)("p",{children:"Hello World!"})}),Object(n.jsx)(A,{children:Object(n.jsx)("p",{children:"Hello World!"})})]})}function T(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),l=r[0],o=r[1],d=P().register;function j(){return(j=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:l,password:a},console.log("const: "+t.email+" "+t.password),n=JSON.stringify(t),console.log("json: "+n),d(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid loginregisterform",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Register"})}),Object(n.jsxs)("div",{className:"container field",children:[Object(n.jsx)(g.a,{}),Object(n.jsx)(p.a,{required:!0,fullWidth:!0,id:"email",label:"User Email",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsxs)("div",{className:"container field",children:[Object(n.jsx)(y.a,{}),Object(n.jsx)(p.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(v.a,{onClick:function(){return k.push("/")},className:"button",children:"Cancel"}),Object(n.jsx)(v.a,{onClick:function(){return function(){return j.apply(this,arguments)}()},className:"button",children:"Register"})]})]})})}function E(){return Object(n.jsx)("div",{className:"login-register-page",children:Object(n.jsx)(T,{})})}var H=a(161),M=a(156),D=a(160);function V(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),l=r[0],o=r[1],d=Object(c.useState)(""),j=Object(f.a)(d,2),u=j[0],h=j[1],b=Object(c.useState)(18),O=Object(f.a)(b,2),g=O[0],y=O[1],N=Object(c.useState)(!1),w=Object(f.a)(N,2),C=w[0],k=w[1],S=P().saveProfile;function F(){return(F=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={name:a,adress:l,gender:u,age:g,contact:C},n=JSON.stringify(t),console.log(n),S(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid loginregisterform",style:{width:"700px",height:"560px"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Complete your profile"})}),Object(n.jsx)("div",{className:"container field",children:Object(n.jsx)(p.a,{required:!0,fullWidth:!0,id:"name",label:"Nume si prenume",name:"name",autoComplete:"name",autoFocus:!0,value:a,onChange:function(e){return s(e.target.value)}})}),Object(n.jsx)("div",{className:"container field",children:Object(n.jsx)(p.a,{required:!0,fullWidth:!0,id:"adress",label:"Adresa",name:"adress",autoComplete:"adress",autoFocus:!0,value:l,onChange:function(e){return o(e.target.value)}})}),Object(n.jsx)("div",{className:"container field",children:Object(n.jsxs)(p.a,{required:!0,fullWidth:!0,select:!0,id:"gender",label:"Genul",name:"gender",autoComplete:"gender",autoFocus:!0,value:u,onChange:function(e){return h(e.target.value)},children:[Object(n.jsx)(H.a,{value:"f",children:"Feminin"},"f"),Object(n.jsx)(H.a,{value:"m",children:"Masculin"},"m"),Object(n.jsx)(H.a,{value:"n",children:"Nu mentionez"},"n")]})}),Object(n.jsx)("div",{className:"container field",children:Object(n.jsx)(p.a,{required:!0,fullWidth:!0,id:"age",label:"Varsta",name:"age",autoComplete:"age",autoFocus:!0,type:"number",onChange:function(e){return y(parseInt(e.target.value,10))}})}),Object(n.jsx)("div",{className:"container field",children:Object(n.jsx)(M.a,{id:"contact",control:Object(n.jsx)(D.a,{checked:C,onChange:function(e){return k(!C)},name:"contact",color:"primary"}),label:"Am intrat in contact cu alte persoane."})}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(v.a,{className:"button",children:"Cancel"}),Object(n.jsx)(v.a,{onClick:function(){return function(){return F.apply(this,arguments)}()},className:"button",children:"Save"})]})]})})}function z(){return Object(n.jsx)("div",{className:"login-register-page",children:Object(n.jsx)(V,{})})}var R=a(157),U=a(158),_=(a(111),a(74)),G=a.n(_),Y=a(75),K=a.n(Y),Q=a(76),X=a.n(Q),Z=a(46),$=function(){var e=s.a.useState(0),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("nav",{className:"container-fluid d-flex justify-content-between align-items-center",children:[Object(n.jsx)("img",{src:"assets/images/stay_safe.svg",height:"100px"}),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)(Z.a,{exact:!0,activeClassName:"active-link",to:"/",children:Object(n.jsx)("div",{className:"nav-item d-lg-flex d-none",children:Object(n.jsx)(v.a,{variant:"contained",children:"Home"})})}),Object(n.jsx)("a",{href:"#staySafe",children:Object(n.jsx)("div",{className:"nav-item d-lg-flex d-none",children:Object(n.jsx)(v.a,{variant:"contained",color:"inherit",children:"Protect Yourself"})})}),Object(n.jsx)("a",{href:"/#stats",children:Object(n.jsx)("div",{className:"nav-item d-lg-flex d-none",children:Object(n.jsx)(v.a,{variant:"contained",color:"inherit",children:"Covid Statistics"})})}),Object(n.jsx)("a",{href:"/#sympthoms",children:Object(n.jsx)("div",{className:"nav-item d-lg-flex d-none",children:Object(n.jsx)(v.a,{variant:"contained",color:"inherit",children:"Check your Sympthoms"})})}),Object(n.jsx)(Z.a,{exact:!0,activeClassName:"active-link",to:"/login",children:Object(n.jsx)("div",{className:"nav-item",children:Object(n.jsx)(v.a,{variant:"contained",color:"inherit",children:"Login"})})})]})]}),Object(n.jsxs)("nav",{className:"d-lg-none",children:[Object(n.jsxs)(R.a,{value:a,onChange:function(e,t){c(t)},showLabels:!0,className:"bottom-nav",children:[Object(n.jsx)(U.a,{label:"Recents",icon:Object(n.jsx)(G.a,{})}),Object(n.jsx)(U.a,{label:"Favorites",icon:Object(n.jsx)(K.a,{})}),Object(n.jsx)(U.a,{label:"Nearby",icon:Object(n.jsx)(X.a,{})})]}),");"]})]})};function ee(){return Object(n.jsx)("div",{children:Object(n.jsxs)(b.b,{history:k,children:[Object(n.jsx)($,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:J}),Object(n.jsx)(b.a,{path:"/login",component:B}),Object(n.jsx)(b.a,{path:"/register",component:E}),Object(n.jsx)(b.a,{path:"/completeprofile",component:z}),Object(n.jsx)(b.a,{path:"/doctor"}),Object(n.jsx)(b.a,{component:J})]})]})})}var te=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ee,{}),Object(n.jsx)(h,{})]})},ae=(a(115),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))}),ne=a(58),ce=a.n(ne);ce.a.init(),r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(te,{})}),document.getElementById("root")),ce.a.init({duration:1e3}),ae()},52:function(e,t,a){},53:function(e,t,a){},70:function(e,t,a){},89:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.8bfe3628.chunk.js.map