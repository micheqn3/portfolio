(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),n=c(4),i=c.n(n),l=(c(9),c(2)),r=c(0),o=function(){var e=Object(t.useState)(""),s=Object(l.a)(e,2),c=s[0],a=s[1],n=Object(t.useState)(""),i=Object(l.a)(n,2),o=i[0],j=i[1],d=Object(t.useState)(""),h=Object(l.a)(d,2),b=h[0],m=h[1],x=Object(t.useState)(""),g=Object(l.a)(x,2),O=g[0],p=g[1],u=function(e){var s=e.target,c=s.name,t=s.value;"name"===c?a(t):"email"===c?j(t):m(t)};return Object(r.jsxs)("div",{id:"modal2",className:"modal",children:[Object(r.jsxs)("div",{className:"modal-content black-text center-align",children:[Object(r.jsx)("h5",{children:"Send Me A Message"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("form",{id:"myForm",className:"col s12 form-center",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{value:c,id:"full_name",type:"text",name:"name",onChange:u}),Object(r.jsx)("label",{className:"black-text",children:"Name"})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{value:o,id:"email",type:"text",name:"email",onChange:u}),Object(r.jsx)("label",{className:"black-text",children:"Email"})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{value:b,id:"message",type:"text",name:"message",onChange:u}),Object(r.jsx)("label",{className:"black-text",children:"Message"})]})}),O&&Object(r.jsx)("small",{id:"all-fields",className:"red-text",children:O})]})})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsxs)("div",{className:"row center-align",children:[Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),c&&o&&b?(fetch("https://api.apispreadsheets.com/data/12070/",{method:"POST",body:JSON.stringify({data:{email:o,message:b,full_name:c}})}).then((function(e){201===e.status?(console.log("Succesful post."),window.location.reload()):console.log("Something went wrong.")})),a(""),j(""),m("")):p("* All fields are required.")},id:"submit-btn",className:"col s6 m6 l6 my-btn btn-small waves-light waves-effect",children:"Submit"}),Object(r.jsx)("a",{href:"#!",className:"col s6 m6 l6 modal-close waves-effect waves-light btn-small my-btn",children:"Close"})]})})]})},j=function(e){e.page;var s=e.handlePageChange;return Object(r.jsxs)("nav",{children:[Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(r.jsx)("i",{className:"material-icons text-darken-4 cyan-text",children:"menu"})}),Object(r.jsxs)("ul",{className:"hide-on-med-and-down",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("main")},className:"nav-tab",href:"index.html",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("main")},className:"nav-tab",href:"#about-me",children:"About Me"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("portfolio")},className:"nav-tab",href:"#portfolio-container",children:"Portfolio"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"contact-btn my-btn waves-effect waves-light btn-small modal-trigger",href:"#modal2",children:"Contact Me"})})]})]}),Object(r.jsx)(o,{})]})},d=function(e){var s=e.handlePageChange;return Object(r.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("main")},href:"index.html",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("main")},href:"#about-me",target:"_self",children:"About Me"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:function(){return s("portfolio")},href:"#portfolio",target:"_self",children:"Portfolio"})})]})},h=function(e){var s=e.page,c=e.handlePageChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"navbar-fixed",children:Object(r.jsx)(j,{page:s,handlePageChange:c})}),Object(r.jsx)(d,{handlePageChange:c})]})},b=function(){return Object(r.jsxs)("div",{id:"modal1",className:"modal",children:[Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("div",{className:"row center-align",children:Object(r.jsx)("h2",{className:"underline font16",children:Object(r.jsx)("strong",{children:"Education"})})})})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s3 m4",children:Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"2021 - Present"})})}),Object(r.jsxs)("div",{className:"col s9 m8",children:[Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Certificate, Full Stack Web Development"})}),Object(r.jsx)("p",{className:"center-align",children:"University of California, Irvine"})]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s3 m4 ",children:Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"2016 - 2021"})})}),Object(r.jsxs)("div",{className:"col s9 m8",children:[Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Bachelor of Science in Health Science"})}),Object(r.jsx)("p",{className:"center-align",children:"California State University, Fullerton"})]})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("h2",{className:"center-align underline font16",children:Object(r.jsx)("strong",{children:"Technical Skills"})})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"center-align",children:"- HTML + CSS"}),Object(r.jsx)("li",{className:"center-align",children:"- JavaScript"}),Object(r.jsx)("li",{className:"center-align",children:"- Node.js"}),Object(r.jsx)("li",{className:"center-align",children:"- MongoDB"}),Object(r.jsx)("li",{className:"center-align",children:"- MySQL"}),Object(r.jsx)("li",{className:"center-align",children:"- Mongoose"}),Object(r.jsx)("li",{className:"center-align",children:"- Sequelize"}),Object(r.jsx)("li",{className:"center-align",children:"- Express"}),Object(r.jsx)("li",{className:"center-align",children:"- jQuery"}),Object(r.jsx)("li",{className:"center-align",children:"- Bootstrap + Materialize"})]})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("h2",{className:"underline font16 center-align",children:Object(r.jsx)("strong",{children:"Related Courses at CSUF"})})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"CPSC 120"})}),Object(r.jsx)("p",{children:"This course comprises of the theory and practice of computer programming, computation terminology, top down design, the roles of hardware and compilers, structured problem solving, programming language syntax and semantics, technical reading, pseudocode, debugging, data representation, file input/output, functions, and arrays, with a focus on C++. "})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("h2",{className:"underline font16 center-align",children:Object(r.jsx)("strong",{children:"Recent Projects"})}),Object(r.jsx)("p",{className:"center-align font16",children:Object(r.jsx)("strong",{children:"Grademy"})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Description:"})," An all-in-one learning application for students and admin. Users are able to access their courses, perform CRUD operations, and communicate in real-time through an integrated chat window."]}),Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Technologies used:"})}),Object(r.jsx)("p",{className:"center-align",children:"JavaScript, Node.js, Socket.io, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize"}),Object(r.jsx)("hr",{})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("p",{className:"center-align font16",children:Object(r.jsx)("strong",{children:"Tech Blog"})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Description:"})," A CMS blog site where developers can publish their blog posts and comment on other developers' posts as well."]}),Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Technologies used:"})}),Object(r.jsx)("p",{className:"center-align",children:"JavaScript, Node.js, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize"}),Object(r.jsx)("hr",{})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("p",{className:"center-align font16",children:Object(r.jsx)("strong",{children:"PhotoBomb"})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Description:"})," An application for users who are looking for a wallpaper for their device. Following retrieval of the user\u2019s current likes, the application gives a weight to each photo category and curates personalized wallpapers. Users also have the option to search through categories and keywords for photos they would like to save, download, and send."]}),Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Technologies used:"})}),Object(r.jsx)("p",{className:"center-align",children:"JavaScript, jQuery, Materialize, Unsplash API, and T.LY URL shortener"}),Object(r.jsx)("hr",{})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsx)("p",{className:"center-align font16",children:Object(r.jsx)("strong",{children:"Workout Tracker"})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Description:"})," A workout tracker that allows the user to view, create, and track daily workouts. Users can also view stats from the last 7 workouts."]}),Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("strong",{children:"Technologies used:"})}),Object(r.jsx)("p",{className:"center-align",children:"JavaScript, Node.js, MongoDB, Express, Mongoose, Morgan, and Nodemon"})]})})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsxs)("div",{className:"row center-align",children:[Object(r.jsx)("a",{className:"col s12 m4 l12 my-btn btn-small",href:"https://github.com/micheqn3/portfolio/blob/main/Assets/ResumePDF.pdf",download:!0,children:"Download PDF"}),Object(r.jsx)("a",{className:"col s12 m4 l12 my-btn btn-small",href:"https://www.linkedin.com/in/michelle-nguyen-3a2132200/",children:" View LinkedIn Profile"}),Object(r.jsx)("a",{href:"#!",className:"modal-close waves-effect waves-light btn-flat",children:"Close"})]})})]})},m=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"hero-container hero-image",children:Object(r.jsxs)("div",{className:"hero-text",children:[Object(r.jsx)("h1",{className:"section-title",children:"Michelle Nguyen."}),Object(r.jsx)("br",{}),Object(r.jsx)("h6",{children:"Building things for the web."})]})}),Object(r.jsxs)("div",{id:"about-me",className:"aboutme-container anchor",children:[Object(r.jsx)("div",{className:"section white",children:Object(r.jsxs)("div",{className:"row container",children:[Object(r.jsx)("h1",{className:"center-align section-name",children:"About Me"}),Object(r.jsx)("div",{className:"col l6 s12 center-align",children:Object(r.jsx)("img",{src:"/portfolio/images/5-2021-1.JPG",alt:"Avatar",className:"selfie"})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"col l6 s12 center-align",children:[Object(r.jsx)("p",{className:"center-align grey-text text-darken-3 lighten-3 about-p",children:"Hi! My name is Michelle!"}),Object(r.jsx)("p",{className:"center-align grey-text text-darken-3 lighten-3 about-p",children:"I am a full stack developer based in Orange County, CA. I enjoy creating things on the internet and am always looking forward to learning new technologies."}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{className:"center-align grey-text text-darken-3 lighten-3 about-p",children:"Here are a few technologies/languages I've been working with recently:"}),Object(r.jsxs)("ul",{className:"tech-list",children:[Object(r.jsx)("li",{className:"center-align",children:"- HTML + CSS"}),Object(r.jsx)("li",{className:"center-align",children:"- JavaScript"}),Object(r.jsx)("li",{className:"center-align",children:"- Node.js"}),Object(r.jsx)("li",{className:"center-align",children:"- MongoDB"}),Object(r.jsx)("li",{className:"center-align",children:"- MySQL"}),Object(r.jsx)("li",{className:"center-align",children:"- Mongoose"}),Object(r.jsx)("li",{className:"center-align",children:"- Sequelize"}),Object(r.jsx)("li",{className:"center-align",children:"- Express"}),Object(r.jsx)("li",{className:"center-align",children:"- jQuery"}),Object(r.jsx)("li",{className:"center-align",children:"- Bootstrap + Materialize"})]}),"  ",Object(r.jsxs)("a",{className:"my-btn waves-effect waves-light btn-large modal-trigger resume-btn",href:"#modal1",children:[Object(r.jsx)("i",{className:"material-icons right",children:"add"}),"View my resume"]})]})]})}),Object(r.jsx)(b,{})]})]})},x=function(e){return Object(r.jsx)("div",{className:"col s12 l6",children:Object(r.jsxs)("div",{className:"proj-wrapper project-effect",children:[Object(r.jsx)("img",{className:"responsive-img",src:"/portfolio/images"+e.src,alt:e.alt}),Object(r.jsxs)("div",{className:"proj-content",children:[Object(r.jsx)("p",{className:"center-align",children:Object(r.jsx)("a",{href:e.link,className:"waves-effect waves-light btn-small btn proj-btn",children:"Click Me"})}),Object(r.jsx)("p",{children:e.description}),Object(r.jsxs)("p",{children:["Technologies: ",e.tech]}),Object(r.jsx)("div",{className:"center-align",children:Object(r.jsx)("a",{className:"black-text underline",href:e.github,children:"Link to repo"})})]})]})},e.id)},g=function(){return Object(r.jsx)("div",{id:"portfolio-container",className:"anchor",children:Object(r.jsx)("div",{className:"portfolio-section section portfolio-container-holder",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"center-align section-name",children:"My Work"}),Object(r.jsx)("h6",{className:"center-align",children:"Here are some of my latest projects."}),Object(r.jsxs)("div",{id:"portfolio",className:"main-nav",children:[Object(r.jsxs)("div",{className:"row",children:[" ",[{id:1,src:"/grademy.png",alt:"Grademy screenshot",link:"https://grademy.herokuapp.com/",description:"An all-in-one learning application for students and admin. Users are able to access their courses and communicate in real-time through an integrated chat window.",tech:"JS, Node.js, Socket.io, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize",github:"https://github.com/micheqn3/grademy"},{id:2,src:"/techblog.png",alt:"Tech blog screenshot",link:"https://my-tech-blog-micheqn3.herokuapp.com/",description:"A CMS blog site where developers can publish their blog posts and comment on other developers' posts as well.",tech:"JS, Node.js, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize",github:"https://github.com/micheqn3/my-tech-blog"}].map((function(e){return Object(r.jsx)(x,{src:e.src,alt:e.alt,link:e.link,description:e.description,tech:e.tech,github:e.github},e.id)}))]}),Object(r.jsxs)("div",{className:"row",children:[" ",[{id:3,src:"/photobomb.png",alt:"Photobomb screenshot",link:"https://reddituser7777.github.io/PhotoBomb/index.html",description:"A wallpaper app that will curate wallpapers the user may like based on their 'likes' and 'dislikes' from a quick assessment.",tech:"JS, jQuery, Materialize, Unsplash API, and T.LY API",github:"https://github.com/micheqn3/PhotoBomb"},{id:4,src:"/workout-tracker.png",alt:"Workout tracker screenshot",link:"https://workout-tracker-micheqn3.herokuapp.com/",description:"A workout tracker that allows the user to view, create, and track daily workouts.",tech:"JS, Node.js, MongoDB, Express, Mongoose, Morgan, and Nodemon",github:"https://github.com/micheqn3/workout-tracker"}].map((function(e){return Object(r.jsx)(x,{src:e.src,alt:e.alt,link:e.link,description:e.description,tech:e.tech,github:e.github},e.id)}))]})]})]})})})},O=function(){return Object(r.jsxs)("footer",{id:"footer",children:[Object(r.jsxs)("ul",{className:"footer-top",children:[Object(r.jsx)("li",{className:"social-effect",children:Object(r.jsx)("a",{className:"tooltipped","data-position":"top","data-tooltip":"Email",href:"mailto:michellenguyen11239@aol.com",children:Object(r.jsx)("i",{className:"fa fa-envelope fa-2x pinkicon"})})}),Object(r.jsx)("li",{className:"social-effect",children:Object(r.jsx)("a",{className:"tooltipped","data-position":"top","data-tooltip":"Github",href:"https://github.com/micheqn3",children:Object(r.jsx)("i",{className:"fab fa-github-square fa-2x pinkicon"})})}),Object(r.jsx)("li",{className:"social-effect",children:Object(r.jsx)("a",{className:"tooltipped","data-position":"top","data-tooltip":"LinkedIn",href:"https://www.linkedin.com/in/michelle-nguyen-3a2132200/",children:Object(r.jsx)("i",{className:"fab fa-linkedin fa-2x pinkicon"})})})]}),Object(r.jsxs)("div",{className:"align-center black-text",children:["\xa9 2021 Made with",Object(r.jsx)("i",{className:"fas fa-heart pinkicon"}),"by Mich"]})]})},p=function(){var e=Object(t.useState)("main"),s=Object(l.a)(e,2),c=s[0],a=s[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(h,{page:c,handlePageChange:function(e){a(e)}}),"main"===c?Object(r.jsx)(m,{}):"portfolio"===c?Object(r.jsx)(g,{}):void console.log("There was an error in rendering"),Object(r.jsx)(O,{})]})})},u=function(){return Object(r.jsx)(p,{})};c(11);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))},9:function(e,s,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.c9a7aa82.chunk.js.map