(this["webpackJsonpshopping-ract"]=this["webpackJsonpshopping-ract"]||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(16),l=a.n(i),n=(a(21),a(2)),r=a(0),d=Object(s.createContext)(),o=function(e){var t=Object(s.useState)([]),a=Object(n.a)(t,2),c=a[0],i=a[1];Object(s.useEffect)((function(){l()}),[]);var l=function(){i([])};return Object(r.jsx)(d.Provider,{value:[c,i],children:e.children})},b=function(){var e=Object(s.useContext)(d),t=Object(n.a)(e,1)[0];console.log(t);var a=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=a.current;t.length?e.classList.add("cartshake"):e.classList.remove("cartshake"),setTimeout((function(){e.classList.remove("cartshake"),console.log("timout working!!")}),800),console.log("cartshake added!!")}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("a",{ref:a,className:"nav-link dropdown-toggle px-2 d-flex justify-content-center","data-bs-toggle":"dropdown",id:"dropdown1","aria-expanded":"false",style:{padding:"4px 8px"},href:"#",children:[Object(r.jsx)("i",{className:"bi bi-cart3 ",style:{fontSize:"21px",paddingRight:"5px",WebkitBoxPack:"start",WebkitJustifyContent:"flex-start",msFlexPack:"start",justifyContent:"flex-start"}}),Object(r.jsx)("span",{className:t.length?"bage bg-primary rounded-pill cart":"bage bg-danger rounded-pill cart",id:"cartPill",children:t.length})]}),Object(r.jsx)("ul",{className:"dropdown-menu",style:{right:"0",left:"auto",padding:"5px 0 28px 0"},"aria-labelledby":"dropdown1",children:Object(r.jsx)("li",{id:!0,children:t.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"dropdown-item",id:"cartDropDown",children:"You have ".concat(t.length," items in your cart.")}),Object(r.jsx)("div",{className:"cartdrop",children:t.map((function(e){return Object(r.jsx)("h4",{children:e.name},e.id)}))}),Object(r.jsx)("a",{href:"./cart.html",style:{paddingBottom:"10px"},id:"cartLink",children:"\u0995\u09cd\u09b0\u09df \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4 \u0995\u09b0\u09c1\u09a8 >>"})]}):Object(r.jsx)("p",{className:"dropdown-item",id:"cartDropDown",children:"Your cart is empty! Please add some items to cart to procced."})})})]})},j=(a(23),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"ps-0 pe-0 container-fluid sticky-top",children:Object(r.jsxs)("div",{className:"header navbar navbar-expand-sm w-100 pt-2 pb-2 ps-2 pe-2",id:"header",children:[Object(r.jsx)("div",{className:"navbar-brand navbarbrand",children:Object(r.jsxs)("h2",{align:"left",className:"h2 ",children:["\u0987\u099c\u09bf\u09b6\u09aa\u09bf\u0982.\u0995\u09ae ",Object(r.jsx)("span",{className:"h3",children:"-\u0985\u09a8\u09b2\u09be\u0987\u09a8\u09c7 \u0995\u09c7\u09a8\u09be\u0995\u09be\u099f\u09be \u0995\u09b0\u09c1\u09a8 \u09b8\u09b9\u099c\u09c7\u0987 "})]})}),Object(r.jsx)("form",{className:"form-inline float-right me-auto searchform",id:"searchform",action:!0,children:Object(r.jsxs)("div",{className:"input-group",style:{WebkitFlexWrap:"nowrap",msFlexWrap:"nowrap",flexWrap:"nowrap"},children:[Object(r.jsxs)("div",{className:"form-floating",children:[Object(r.jsx)("input",{className:"form-control",type:"search",id:"searchfloating",name:"search",placeholder:"Search for your products",required:!0,title:"hi",style:{height:"43px"}}),Object(r.jsx)("label",{htmlFor:"searchfloating",className:"searchlabel",style:{top:"-7px"},children:"Search"})]}),Object(r.jsxs)("span",{className:"input-group-text",style:{padding:"0",backgroundColor:"#198754",borderTopRightRadius:"5px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"5px"},id:"inputGroupPrepend",children:[Object(r.jsx)("input",{type:"submit",name:"Search",className:"btn btn-md",placeholder:"Search",value:""}),Object(r.jsx)("span",{className:"bi bi-search text-white",style:{margin:"0 12px 0 -12px"}})]})]})}),Object(r.jsx)("button",{className:"navbar-toggler navbar-light btntoggle",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar","aria-controls":"collapsibleNavbar","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsxs)("div",{className:!0,style:{display:"inline-block",cursor:"pointer"},children:[Object(r.jsx)("div",{className:"bar1"}),Object(r.jsx)("div",{className:"bar2"}),Object(r.jsx)("div",{className:"bar3"})]})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",style:{WebkitBoxPack:"end",WebkitJustifyContent:"flex-end",msFlexPack:"end",justifyContent:"flex-end","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center",alingnItems:"center"},children:Object(r.jsxs)("ul",{className:"navbar-nav navul",children:[Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsx)("a",{className:"nav-link px-2",href:!0,children:"About Us"})}),Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsx)("a",{className:"nav-link px-2",href:!0,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsx)("a",{className:"nav-link px-2",href:"#","data-bs-target":"#lcontainer2","data-bs-toggle":"modal",children:"Register"})}),Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsx)("a",{className:"nav-link px-2",href:"#","data-bs-target":"#mContainer","data-bs-toggle":"modal",children:"Login"})}),Object(r.jsx)("li",{className:"nav-item navitem dropdown mcart",id:"mcart",children:Object(r.jsx)(b,{})})]})})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"header container-fluid navbar w-100 fixed-bottom",id:"mobilenav",children:Object(r.jsxs)("ul",{className:"navbar-nav navul2",children:[Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsxs)("a",{className:"nav-link px-2",href:!0,children:[Object(r.jsx)("span",{className:"bi bi-house-door"})," Home"]})}),Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsxs)("a",{className:"nav-link px-2",href:"#",children:[Object(r.jsx)("span",{className:"bi bi-search"})," Search"]})}),Object(r.jsx)("li",{className:"nav-item navitem dropdown",children:Object(r.jsxs)("a",{className:"nav-link dropdown-toggle px-2 d-flex justify-content-center show","data-bs-toggle":"dropdown",id:"dropdown2","aria-expanded":"true",style:{padding:"4px 8px"},href:"#",children:[Object(r.jsx)("span",{className:"bi bi-cart4",style:{"font-size":"21px","padding-right":"5px","-webkit-box-pack":"start","-webkit-justify-content":"flex-start","-ms-flex-pack":"start","justify-content":"flex-start",position:"relative"},children:Object(r.jsx)("span",{className:"bage bg-danger rounded-pill cart",style:{position:"absolute",top:"0",right:"0"},id:"cartPill2",children:"0"})}),Object(r.jsx)("span",{style:{"margin-top":"-8px"},children:"Cart"})]})}),Object(r.jsx)("li",{className:"nav-item navitem",children:Object(r.jsxs)("a",{className:"nav-link px-2",href:"#",children:[Object(r.jsx)("span",{className:"bi bi-person-circle"})," Profile"]})}),Object(r.jsxs)("div",{id:"profile",className:"d-none justify-content-between",style:{width:"100%",position:"absolute",bottom:"-45px",left:"0",padding:"5px 35px 3px 35px","-webkit-transition":"bottom .6s ease",transition:"bottom .6s ease"},children:[Object(r.jsx)("div",{className:"shadow bg-light",style:{height:"45px","padding-top":"10px",width:"40%","-webkit-text-align":"center","text-align":"center"},children:Object(r.jsx)("a",{style:{"-webkit-text-decoration":"none","text-decoration":"none","-webkit-text-align":"center","text-align":"center",padding:"10px 12px 10px 12px",width:"100%"},href:"#","data-bs-target":"#mContainer","data-bs-toggle":"modal",children:"Login"})}),Object(r.jsx)("div",{className:"shadow bg-light",style:{height:"45px","padding-top":"10px",width:"40%","-webkit-text-align":"center","text-align":"center"},children:Object(r.jsx)("a",{style:{"-webkit-text-decoration":"none","text-decoration":"none","-webkit-text-align":"center","text-align":"center",padding:"10px 12px 10px 12px",width:"100%"},href:"#","data-bs-target":"#lcontainer2","data-bs-toggle":"modal",children:"Register"})})]}),Object(r.jsx)("li",{className:"nav-item navitem",id:"btnnav",children:Object(r.jsx)("button",{className:"navbar-toggler navbar-light btntoggles",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar","aria-controls":"collapsibleNavbar","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsxs)("div",{className:!0,style:{display:"inline-block",cursor:"pointer"},onclick:"myFunction(this)",children:[Object(r.jsx)("div",{className:"bar1"}),Object(r.jsx)("div",{className:"bar2"}),Object(r.jsx)("div",{className:"bar3"})]})})})]})}),Object(r.jsx)("div",{className:"modal fade",id:"mContainer",tabIndex:-1,"data-bs-backdrop":"static","data-bs-keyboard":"false","aria-labelledby":"mContainerLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title text-center",children:"Login to your Account."}),Object(r.jsx)("button",{className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsxs)("form",{method:"GET",action:!0,className:"needs-validation p-3",id:"lform",noValidate:!0,children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"cols-12",children:[Object(r.jsx)("label",{htmlFor:"username",className:"form-label",children:"User Name:"}),Object(r.jsx)("input",{className:"form-control",form:"lform",type:"text",name:"username",id:"username",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Username can't be empty!"})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password:"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{className:"form-control",form:"lform",type:"password",name:"password",id:"password",defaultValue:!0,required:!0}),Object(r.jsx)("span",{className:"input-group-text bi bi-eye-fill",style:{cursor:"pointer"},title:"show password",id:"showPass",onclick:"showPass();"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Password required!"})]}),Object(r.jsxs)("div",{id:"passmsg",children:[Object(r.jsx)("div",{className:"passprog",children:Object(r.jsx)("div",{className:"progbar",id:"progbar"})}),Object(r.jsx)("h3",{children:"Password must contain the following:"}),Object(r.jsxs)("p",{id:"letter",className:"invalid",children:["A ",Object(r.jsx)("b",{children:"lowercase"})," letter"]}),Object(r.jsxs)("p",{id:"capital",className:"invalid",children:["A ",Object(r.jsx)("b",{children:"capital (uppercase)"})," letter"]}),Object(r.jsxs)("p",{id:"number",className:"invalid",children:["A ",Object(r.jsx)("b",{children:"number"})]}),Object(r.jsxs)("p",{id:"length",className:"invalid",children:["Minimum ",Object(r.jsx)("b",{children:"8 characters"})]})]})]})]}),Object(r.jsx)("input",{type:"checkbox",form:"lform",className:"form-check-input",name:"remember",id:"remember"}),Object(r.jsx)("label",{htmlFor:"remember",className:"form-check-label",children:"Remember Me"}),Object(r.jsx)("div",{className:"text-center mt-3",children:Object(r.jsx)("input",{type:"submit",form:"lform",className:"btn btn-md btn-info m-auto w-100",defaultValue:"Log in"})})]}),Object(r.jsx)("div",{className:"text-center mt-2",children:Object(r.jsxs)("p",{children:["forgot password? ",Object(r.jsx)("a",{href:!0,style:{"-webkit-text-decoration":"none","text-decoration":"none"},children:"Click Here"})," to reset!"]})})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsxs)("p",{children:["Not registered yet? ",Object(r.jsx)("a",{href:"#","data-bs-target":"#lcontainer2","data-bs-toggle":"modal","data-bs-dismiss":"modal","aria-label":"Close",children:"Register Now!"})]})})]})})}),Object(r.jsx)("div",{className:"modal fade",id:"lcontainer2",tabIndex:-1,"data-bs-backdrop":"static","data-bs-keyboard":"false","aria-labelledby":"lcontainerLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",children:"Create your Account."}),Object(r.jsx)("button",{className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsxs)("form",{method:"GET",action:!0,className:"needs-validation p-3",id:"regform",noValidate:!0,children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-6",children:[Object(r.jsx)("label",{htmlFor:"Fname",className:"form-label",children:"First Name:"}),Object(r.jsx)("input",{className:"form-control",form:"regform",type:"text",name:"Fname",id:"Fname",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Write your first Name!"})]}),Object(r.jsxs)("div",{className:"col-6",children:[Object(r.jsx)("label",{htmlFor:"Lname",className:"form-label",children:"Last Name:"}),Object(r.jsx)("input",{className:"form-control",form:"regform",type:"text",name:"Lname",id:"Lname",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Last name is required!"})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"username",className:"form-label",children:"User Name:"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("span",{className:"input-group-text",children:"@"}),Object(r.jsx)("input",{className:"form-control",form:"regform",type:"text",name:"username",id:"username",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Username can't be empty!"})]})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email :"}),Object(r.jsx)("input",{className:"form-control",form:"regform",type:"email",name:"Email",id:"Email",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"email address is required!"})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password:"}),Object(r.jsx)("input",{className:"form-control",form:"regform",type:"password",name:"password",id:"password",defaultValue:!0,required:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Password required!"})]})]}),Object(r.jsx)("input",{type:"checkbox",form:"regform",className:"form-check-input",name:"remember",id:"remember2"}),Object(r.jsx)("label",{htmlFor:"remember2",className:"form-check-label",children:"Remember Me"}),Object(r.jsx)("div",{className:"text-center mt-3",children:Object(r.jsx)("input",{type:"submit",form:"regform",className:"btn btn-md btn-info m-auto w-100",defaultValue:"Register"})})]})}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsxs)("p",{children:["Already registered? ",Object(r.jsx)("a",{href:"#","data-bs-target":"#mContainer","data-bs-toggle":"modal","data-bs-dismiss":"modal","aria-label":"Close",children:"Login Now!"})]})})]})})})]})]})}),m=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{className:"App bg-light my-3 py-4",children:e.title})})},x=a(6),h=a.n(x),p=a(11),O=Object(s.createContext)(),u=function(e){Object(s.useEffect)((function(){t()}),[]);var t=function(){var e=Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./items.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(s.useState)([]),c=Object(n.a)(a,2),i=c[0],l=c[1];return Object(r.jsx)(O.Provider,{value:[i,l],children:e.children})},f=function(e){Object(s.useEffect)((function(){t()}),[]);var t=function(){var e=Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./trending.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(s.useState)([]),c=Object(n.a)(a,2),i=c[0],l=c[1];return Object(r.jsx)(O.Provider,{value:[i,l],children:e.children})},N=a(3),g=function(e){var t=Object(s.useContext)(d),a=Object(n.a)(t,2),c=a[0],i=a[1],l=function(e){console.log(e.target.dataset),i([].concat(Object(N.a)(c),[{name:e.target.dataset.name,id:e.target.id}]))};return Object(r.jsxs)("div",{className:"col pb-2",id:"top",children:[Object(r.jsx)("div",{className:"itemimg",children:Object(r.jsx)("img",{className:"pimg",src:e.profileURL,alt:"",height:"80%",width:"100%"})}),Object(r.jsxs)("div",{className:"pname",children:[Object(r.jsx)("p",{className:"p-0 m-0",id:"itemName",children:e.itemName}),Object(r.jsx)("p",{className:"text-muted pt-2",children:e.author})]}),Object(r.jsxs)("div",{className:"pbody",children:[Object(r.jsx)("img",{className:"pimg",id:"lgimg",src:e.profileURL,alt:"",height:"80%",width:"100%"}),Object(r.jsx)("div",{className:"itemHover",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"./product.html",title:"See Product in detail",children:Object(r.jsx)("button",{className:"btn btn-info",id:"cartButton1",children:"Details"})}),Object(r.jsx)("button",{className:"btn btn-warning",id:"cartButton"+e.pid,"data-name":e.itemName,"data-bs-pid":e.pid,onClick:l,children:"Add to cart"},e.pid)]})})]}),Object(r.jsxs)("div",{className:"card-body ",children:[Object(r.jsxs)("div",{className:"m-0 ps-2",children:[Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.firststar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.secondtstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.thirdstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.fourthstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.fifthstar)})]}),Object(r.jsx)("div",{className:"card-text m-0",children:Object(r.jsxs)("p",{className:"d-flex justify-content-between px-1 my-0",children:[Object(r.jsxs)("span",{className:"",children:["Tk.",e.price," only"]}),Object(r.jsx)("span",{className:"bi bi-heart fav"})]})}),Object(r.jsx)("a",{href:"./product.html",title:"See Product in detail",children:Object(r.jsx)("button",{className:"btn btn-info Mbutton",id:"cartButton1",children:"Details"})}),Object(r.jsx)("button",{className:"btn btn-warning Mbutton",id:"cartButton"+e.pid,"data-name":e.itemName,onClick:l,children:"Add to cart"})]})]})},v=function(){var e=Object(s.useContext)(O),t=Object(n.a)(e,1)[0];return console.log(t),Object(r.jsxs)("div",{className:"container electronics my-4 pe-0",id:"",children:[Object(r.jsx)("h2",{className:"pb-0 text-center text-bold",style:{"border-bottom":"1px solid green",display:"inline"},children:" MOBILE PHONE AND ELECTRONICS"}),Object(r.jsx)("hr",{className:"w-100"}),Object(r.jsx)("div",{className:"row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden rr ",id:"rr",children:t.map((function(e){return Object(r.jsx)(g,{itemName:e.itemName,pid:e.pid,profileURL:e.profileURL,price:e.price,firststar:e.firststar,secondtstar:e.secondstar,thirdstar:e.thirdstar,fourthstar:e.fourthstar,fifthstar:e.fifthstar},e.pid)}))})]})},y=a(9),w=a.n(y),k=(a(14),a(15),function(e){var t=e.onClick;return Object(r.jsxs)("button",{className:"slick-arrow carousel-control-prev",type:"button",onClick:t,children:[Object(r.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Previous"})]})}),C=function(e){var t=e.onClick;return Object(r.jsxs)("button",{className:"slick-arrow carousel-control-next",type:"button",onClick:t,children:[Object(r.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Next"})]})},S=function(){return Object(r.jsx)("div",{className:"my-5 ms-4",children:Object(r.jsxs)(w.a,{infinite:!0,autoplay:!0,dots:!0,nextArrow:Object(r.jsx)(C,{}),prevArrow:Object(r.jsx)(k,{}),customPaging:function(e){return Object(r.jsx)("div",{className:"carousel-indicators",children:Object(r.jsx)("button",{type:"button","data-bs-target":!0,children:e})})},children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)("img",{className:"",width:"100%",height:"170px",src:"./img/ad1.jpg","aria-hidden":"true",focusable:"false",alt:""})}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("img",{className:"",width:"100%",height:"170px",src:"./img/ad2.jpg","aria-hidden":"true",focusable:"false",alt:""})}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("img",{className:"",width:"100%",height:"170px",src:"D:\\dcmnt\\Web development\\projects\\React\\shopping-react\\public\\img\\ad3.jpg","aria-hidden":"true",focusable:"false",alt:""})})]})})},P=(a(40),function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"row px-4 py-4 me-0 justify-content-start w-100",children:[Object(r.jsxs)("div",{className:"col-3 text-left fcol",children:[Object(r.jsx)("h5",{style:{color:"#4e4e4e"},children:"ABOUT"}),Object(r.jsx)("hr",{className:"text-success"}),Object(r.jsxs)("ul",{className:"flist ps-0",style:{listStyleType:"none"},children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"",style:{color:"rgb(126, 126, 126)"},href:"",children:"About Us"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"",style:{color:"rgb(126, 126, 126)"},href:"",children:"Privacy Policy"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"",style:{color:"rgb(126, 126, 126)"},href:"",children:"Terms & Conditions"})})]})]}),Object(r.jsxs)("div",{className:"col-4 text-left fcol",children:[Object(r.jsx)("h5",{style:{color:"#4e4e4e"},children:"Contact"}),Object(r.jsx)("hr",{className:"text-success"}),Object(r.jsx)("ul",{className:"flist ps-0",style:{listStyleType:"none"},children:Object(r.jsx)("li",{children:Object(r.jsxs)("p",{className:"ps-0 pe-5",children:[Object(r.jsx)("span",{className:"bi bi-house-door"}),"House 10, Road 12 Block F, Niketan, Gulshan 1, Dhaka - 1212, Bangladesh ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"bi bi-telephone"})," +8809000000000"]})})})]}),Object(r.jsxs)("div",{className:"col-4 text-left fcol",children:[Object(r.jsx)("h5",{style:{color:"#4e4e4e"},children:"WE ACCEPT"}),Object(r.jsx)("hr",{className:"text-success"}),Object(r.jsx)("ul",{className:"flist ps-0",style:{listStyleType:"none"},children:Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:"./img/weaccept.png",width:"80%",alt:""})})}),Object(r.jsx)("h5",{style:{color:"#4e4e4e"},children:"DOWNLOAD OUR APP"}),Object(r.jsx)("hr",{className:"text-success"}),Object(r.jsxs)("div",{className:"d-flex justify-content-between flist ps-0",style:{listStyleType:"none"},children:[Object(r.jsx)("a",{href:"",children:Object(r.jsx)("img",{src:"./img/google-play-badge-pickaboo.png",width:"40%",alt:""})}),Object(r.jsx)("a",{href:"",children:Object(r.jsx)("img",{src:"./img/App-store-badge-pickaboo.png",width:"40%",alt:""})})]})]})]}),Object(r.jsx)("div",{className:"border-top m-3 pb-4",children:Object(r.jsx)("p",{className:"text-center p-4",children:"2021 - All rights reserved by Syed Mahbub"})})]})}),T=function(){var e=Object(s.useContext)(O),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(""),l=Object(n.a)(i,2),d=l[0],o=l[1],b=Object(s.useState)(""),j=Object(n.a)(b,2),m=j[0],x=j[1],h=Object(s.useState)(""),p=Object(n.a)(h,2),u=p[0],f=p[1],g=Object(s.useState)(""),v=Object(n.a)(g,2),y=v[0],w=v[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c([].concat(Object(N.a)(a),[{itemName:d,pid:m,profileURL:u,price:y}])),o(""),x(""),f(""),w(""),console.log(a)},children:[Object(r.jsx)("input",{type:"text",name:"itemName",id:"",value:d,onChange:function(e){o(e.target.value)},placeholder:"item name"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"itemName",id:"",value:u,onChange:function(e){f(e.target.value)},placeholder:"image url"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"itemName",id:"",value:y,onChange:function(e){w(e.target.value)},placeholder:"price"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"pid",id:"",value:m,onChange:function(e){x(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})})},L=(a(41),function(){var e=Object(s.useContext)(O),t=Object(n.a)(e,1)[0],a=Object(s.useContext)(d),c=Object(n.a)(a,2),i=c[0],l=c[1],o=function(e){console.log(e.target.id),l([].concat(Object(N.a)(i),[{name:e.target.dataset.name,id:e.target.id}]))};Object(s.useEffect)((function(){console.log(t)}),[t]);var b=function(e){var t=e.onClick;return Object(r.jsx)("button",{className:"slick-arrow btn btn-outline-primary prevbtn",type:"button",onClick:t,children:Object(r.jsx)("span",{className:"bi bi-chevron-left"})})},j=function(e){var t=e.onClick;return Object(r.jsx)("button",{className:"slick-arrow btn btn-outline-primary nextbtn",type:"button",onClick:t,children:Object(r.jsx)("span",{className:"bi bi-chevron-right"})})};return Object(r.jsxs)("div",{className:"container  marketing my-4 pe-0",children:[Object(r.jsx)("div",{className:"d-flex justify-content-between align-items-center",style:{borderBottom:"1px solid rgb(149, 153, 149)"},children:Object(r.jsx)("h2",{className:"pb-0 text-bold ",children:Object(r.jsx)("span",{children:" TRENDING ON EASYSHOPPING.COM"})})}),Object(r.jsx)(w.a,{className:"py-4 trending",autoplay:!0,infinite:!0,nextArrow:Object(r.jsx)(j,{}),prevArrow:Object(r.jsx)(b,{}),slidesToShow:5,slidesToScroll:3,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0}},{breakpoint:992,settings:{slidesToScroll:1,slidesToShow:4}},{breakpoint:768,settings:{slidesToScroll:1,slidesToShow:3}},{breakpoint:576,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:285,settings:{slidesToScroll:1,slidesToShow:1}}],children:t.map((function(e){return Object(r.jsxs)("div",{className:"col pb-2",id:"top",children:[Object(r.jsx)("div",{className:"itemimg",children:Object(r.jsx)("img",{className:"pimg",src:e.profileURL,alt:"",height:"80%",width:"100%"})}),Object(r.jsxs)("div",{className:"pname",children:[Object(r.jsx)("p",{className:"p-0 m-0",id:"itemName",children:e.itemName}),Object(r.jsx)("p",{className:"text-muted pt-2",children:e.author})]}),Object(r.jsxs)("div",{className:"pbody",children:[Object(r.jsx)("img",{className:"pimg",id:"lgimg",src:e.profileURL,alt:"",height:"80%",width:"100%"}),Object(r.jsx)("div",{className:"itemHover",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"./product.html",title:"See Product in detail",children:Object(r.jsx)("button",{className:"btn btn-info",id:"cartButton1",children:"Details"})}),Object(r.jsx)("button",{className:"btn btn-warning",id:"cartButton".concat(e.sno),"data-name":e.itemName,"data-bs-pid":e.pid,onClick:o,children:"Add to cart"},e.sno)]})})]}),Object(r.jsxs)("div",{className:"card-body ",children:[Object(r.jsxs)("div",{className:"mt-3 m-0 ps-2",children:[Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.firststar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.secondstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.thirdstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.fourthstar)}),Object(r.jsx)("span",{className:"bi bi-star-fill ".concat(e.fifthstar)})]}),Object(r.jsx)("div",{className:"card-text m-0",children:Object(r.jsxs)("p",{className:"d-flex justify-content-between px-1 my-0",children:[Object(r.jsxs)("span",{className:"",children:["Tk.",e.price," only"]}),Object(r.jsx)("span",{className:"bi bi-heart fav"})]})}),Object(r.jsx)("a",{href:"./product.html",title:"See Product in detail",children:Object(r.jsx)("button",{className:"btn btn-info Mbutton",id:"cartButton1",children:"Details"})}),Object(r.jsx)("button",{className:"btn btn-warning Mbutton",id:"cartButton".concat(e.sno),"data-name":e.itemName,"data-bs-pid":e.pid,onClick:o,children:"Add to cart"},e.sno)]})]},e.sno)}))})]})});var R=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(o,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(S,{}),Object(r.jsx)(m,{title:"This is head title."}),Object(r.jsx)(f,{children:Object(r.jsx)(L,{})}),Object(r.jsxs)(u,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(T,{})]})]}),Object(r.jsx)(P,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),A()}},[[42,1,2]]]);
//# sourceMappingURL=main.77428fea.chunk.js.map