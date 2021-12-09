(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(20),n=c.n(i),l=(c(60),c(14)),r=c(9),o=c(97),j=c(98),d=c(99),b=c(71),p=c(111),h=c(103),m=c(104),x=c(105),O=c(106),u=c(109),g=c(107),f=c(108),y=c(113),k=c(29),N=c.n(k),v=c(112),C=c(100),w=c(101),S=c(102),I=c(27),B=c.n(I),E=c(28),A=c.n(E),R=c(15),q=(c(61),c(1));var W=function(){var e=Object(a.useState)({title:"",description:"",category:"",proof:"",ipfs_link:"",date:""}),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(q.jsx)("div",{className:"form",children:Object(q.jsxs)("form",{className:"form-content",onSubmit:function(e){alert("form is submitted"),e.preventDefault()},children:[Object(q.jsx)("h3",{children:"Create your Entry"}),Object(q.jsxs)("div",{className:"form",children:[Object(q.jsxs)("div",{className:"form-left",children:[Object(q.jsxs)("div",{className:"inputField",children:[Object(q.jsx)("label",{for:"title",children:"Title"}),Object(q.jsx)("input",{type:"text",name:"title",value:c.title,onChange:function(e){s(Object(R.a)(Object(R.a)({},c),{},{title:e.target.value}))},required:!0})]}),Object(q.jsx)("div",{className:"inputField",children:Object(q.jsx)("textarea",{id:"desc",placeholder:"Add description",value:c.description,onChange:function(e){s(Object(R.a)(Object(R.a)({},c),{},{description:e.target.value}))},required:!0})})]}),Object(q.jsxs)("div",{className:"form-right",children:[Object(q.jsxs)("div",{className:"inputField",children:[Object(q.jsx)("label",{for:"category",children:"Category"}),Object(q.jsx)("input",{type:"text",name:"category",value:c.category,onChange:function(e){s(Object(R.a)(Object(R.a)({},c),{},{category:e.target.value}))},required:!0})]}),Object(q.jsxs)("div",{className:"inputField",children:[Object(q.jsx)("label",{for:"proof",children:"Proof"}),Object(q.jsx)("input",{type:"file",name:"proof",value:c.proof,onChange:function(e){s(Object(R.a)(Object(R.a)({},c),{},{proof:e.target.value}))}})]}),Object(q.jsxs)("div",{className:"inputField",children:[Object(q.jsx)("button",{children:"Generate IPFS"}),Object(q.jsx)("input",{type:"text",value:c.ipfs_link})]})]})]}),Object(q.jsxs)("div",{className:"form-buttons",children:[Object(q.jsx)("button",{id:"submit",type:"submit",children:"Publish"}),Object(q.jsx)("button",{id:"cancel",type:"reset",children:"Cancel"})]})]})})},z=Object(o.a)((function(e){return{appBar:{backgroundColor:"#fff"},hero:Object(r.a)({backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')",height:"250px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontSize:"4rem"},e.breakpoints.down("sm"),{height:300,fontSize:"3em"}),blogsContainer:{paddingTop:e.spacing(3)},blogTitle:{fontWeight:800,paddingBottom:e.spacing(3)},card:{maxWidth:"100%"},media:{height:240},cardActions:{display:"flex",margin:"0 10px",justifyContent:"space-between"},author:{display:"flex"},paginationContainer:{display:"flex",justifyContent:"center"},clickableIcon:{color:"#0072E5","&:hover":{color:"green",background:"#E8E8E8",padding:"3px",borderRadius:"50%"}},likes:{display:"flex",alignItems:"flex-end"},like:{color:"#0072E5",margin:"0 5px"}}}));var M=function(){var e=z(),t=Object(a.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(!1),r=Object(l.a)(n,2),o=r[0],k=r[1];return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(p.a,{sx:{flexGrow:1},children:Object(q.jsx)(j.a,{className:e.appBar,position:"static",children:Object(q.jsxs)(d.a,{children:[Object(q.jsx)(C.a,{size:"large",edge:"start",color:"primary","aria-label":"menu",sx:{mr:2},children:Object(q.jsx)(b.a,{variant:"h5",color:"primary",component:"div",sx:{flexGrow:1},children:Object(q.jsx)(w.a,{href:"#",underline:"none",children:"WhistleBlower"})})}),Object(q.jsx)(S.a,{className:"newEntry",color:"primary",style:{position:"absolute",right:"10%",display:!s||s&&o?"none":"block"},onClick:function(){k(!0)},children:"New Entry"}),Object(q.jsx)(S.a,{className:"newEntry",color:"primary",style:{position:"absolute",right:"10%",display:s&&o?"block":"none"},onClick:function(){k(!1)},children:"Home"}),Object(q.jsx)(S.a,{className:"login",color:"primary",style:{position:"absolute",right:"1%",display:s?"none":"block"},onClick:function(){i(!0)},children:"Login"}),Object(q.jsx)(S.a,{className:"logout",color:"primary",style:{position:"absolute",right:"1%",display:s?"block":"none"},onClick:function(){k(!1),i(!1)},children:"Logout"})]})})}),Object(q.jsx)(p.a,{className:e.hero,children:Object(q.jsx)(p.a,{children:"WhistleBlower UI"})}),Object(q.jsxs)(h.a,{maxWidth:"lg",className:e.blogsContainer,style:{display:o?"none":"block"},children:[Object(q.jsx)(b.a,{variant:"h4",className:e.blogTitle,children:"Welcome to The WhistleBlower!"}),Object(q.jsxs)(m.a,{container:!0,spacing:3,children:[Object(q.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(q.jsxs)(x.a,{className:e.card,children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(g.a,{className:e.media,image:"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Contemplative Reptile"}),Object(q.jsxs)(f.a,{children:[Object(q.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"React useContext"}),Object(q.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(q.jsxs)(u.a,{className:e.cardActions,children:[Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(B.a,{className:e.clickableIcon,onClick:function(){return alert("liked")}})]}),Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(A.a,{className:e.clickableIcon,onClick:function(){return alert("disliked")}})]}),Object(q.jsxs)(p.a,{className:e.author,children:[Object(q.jsx)(y.a,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(q.jsxs)(p.a,{ml:2,children:[Object(q.jsx)(b.a,{variant:"subtitle2",component:"p",children:"Guy Clemons"}),Object(q.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",component:"p",children:"May 14, 2020"})]})]}),Object(q.jsx)(p.a,{children:Object(q.jsx)(N.a,{onClick:function(){return alert("Share")},className:e.clickableIcon})})]})]})}),Object(q.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(q.jsxs)(x.a,{className:e.card,children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(g.a,{className:e.media,image:"https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Contemplative Reptile"}),Object(q.jsxs)(f.a,{children:[Object(q.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"React Router"}),Object(q.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(q.jsxs)(u.a,{className:e.cardActions,children:[Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(B.a,{className:e.clickableIcon,onClick:function(){return alert("liked")}})]}),Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(A.a,{className:e.clickableIcon,onClick:function(){return alert("disliked")}})]}),Object(q.jsxs)(p.a,{className:e.author,children:[Object(q.jsx)(y.a,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"}),Object(q.jsxs)(p.a,{ml:2,children:[Object(q.jsx)(b.a,{variant:"subtitle2",component:"p",children:"Guy Clemons"}),Object(q.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",component:"p",children:"May 14, 2020"})]})]}),Object(q.jsx)(p.a,{children:Object(q.jsx)(N.a,{onClick:function(){return alert("Share")},className:e.clickableIcon})})]})]})}),Object(q.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(q.jsxs)(x.a,{className:e.card,children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(g.a,{className:e.media,image:"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Contemplative Reptile"}),Object(q.jsxs)(f.a,{children:[Object(q.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"React useContext"}),Object(q.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(q.jsxs)(u.a,{className:e.cardActions,children:[Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(B.a,{className:e.clickableIcon,onClick:function(){return alert("liked")}})]}),Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(A.a,{className:e.clickableIcon,onClick:function(){return alert("disliked")}})]}),Object(q.jsxs)(p.a,{className:e.author,children:[Object(q.jsx)(y.a,{src:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(q.jsxs)(p.a,{ml:2,children:[Object(q.jsx)(b.a,{variant:"subtitle2",component:"p",children:"Guy Clemons"}),Object(q.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",component:"p",children:"May 14, 2020"})]})]}),Object(q.jsx)(p.a,{children:Object(q.jsx)(N.a,{onClick:function(){return alert("Share")},className:e.clickableIcon})})]})]})}),Object(q.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(q.jsxs)(x.a,{className:e.card,children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(g.a,{className:e.media,image:"https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Contemplative Reptile"}),Object(q.jsxs)(f.a,{children:[Object(q.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"React useContext"}),Object(q.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(q.jsxs)(u.a,{className:e.cardActions,children:[Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(B.a,{className:e.clickableIcon,onClick:function(){return alert("liked")}})]}),Object(q.jsxs)("div",{className:e.likes,children:[Object(q.jsx)("span",{className:e.like,children:"45"}),Object(q.jsx)(A.a,{className:e.clickableIcon,onClick:function(){return alert("disliked")}})]}),Object(q.jsxs)(p.a,{className:e.author,children:[Object(q.jsx)(y.a,{src:"https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"}),Object(q.jsxs)(p.a,{ml:2,children:[Object(q.jsx)(b.a,{variant:"subtitle2",component:"p",children:"Guy Clemons"}),Object(q.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",component:"p",children:"May 14, 2020"})]})]}),Object(q.jsx)(p.a,{children:Object(q.jsx)(N.a,{onClick:function(){return alert("Share")},className:e.clickableIcon})})]})]})})]}),Object(q.jsx)(p.a,{my:4,className:e.paginationContainer,children:Object(q.jsx)(v.a,{count:10})})]}),Object(q.jsx)("div",{style:{display:o?"block":"none"},children:Object(q.jsx)(W,{})})]})},G=c(110),F=c(48),L=Object(F.a)({palette:{primary:{main:"#0072E5"}},background:{default:"#fff"}});n.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(G.a,{theme:L,children:Object(q.jsx)(M,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f99056da.chunk.js.map