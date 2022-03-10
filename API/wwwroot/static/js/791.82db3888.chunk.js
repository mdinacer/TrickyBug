"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[791],{732:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(885),a=n(7845),r=n(2791),i=n(184),s="relative border-x-2 border-x-slate-200 bg-slate-200",o="pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",c="flex flex-row items-center justify-between w-full gap-x-5 text-lg lg:text-2xl",u="text-lg lg:text-2xl text-gray-400",d="w-8 h-8 ml-2 text-inherit",f="absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",x="py-5 list-none flex flex-col gap-y-2 font-Montserrat",m="font-Montserrat text-left text-black text-lg font-thin cursor-pointer";function h(e){var t=e.title,n=e.items,h=e.onChange,p=e.selectedValue,g=(0,r.useState)(!1),w=(0,l.Z)(g,2),b=w[0],v=w[1],y=(0,r.useState)(null),j=(0,l.Z)(y,2),N=j[0],C=j[1];(0,r.useEffect)((function(){if(p&&null==N){var e=n.find((function(e){return e.name===p}));C(e||null)}}),[n,N,p]);return(0,i.jsxs)("div",{className:"\n    ".concat(p?"border-x-white":"border-x-red-500","  \n    ").concat(s),children:[(0,i.jsxs)("button",{type:"button",className:o,onClick:function(){return v((function(e){return!e}))},children:[N?(0,i.jsxs)("p",{className:c,children:[(0,i.jsxs)("span",{className:"text-gray-500  text-xl  capitalize ",children:[t," "]}),(0,i.jsx)("span",{className:"uppercase text-inherit",children:N.name})]}):(0,i.jsx)("p",{className:u,children:t}),(0,i.jsx)(a.Z,{className:d})]}),(0,i.jsx)("div",{className:"".concat(b?"block ":"hidden","  ").concat(f),id:"dropdown",children:(0,i.jsx)("ul",{className:x,"aria-labelledby":"dropdown",children:n.map((function(e){return(0,i.jsx)("li",{value:e.value,onClick:function(){return function(e){C(e),h(e.value),v(!1)}(e)},className:m,children:e.name},e.value)}))})})]})}},1791:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(885),a=n(2791),r=n(1134),i=n(3460),s=[{name:"Name",value:"name"},{name:"Recently Added",value:"added"},{name:"Recently Updated",value:"updated"}],o={operatingSystem:"Mac OS Monterey",browser:"Chrome Latest",occurrence:i.vH.Persistent,severity:i._8.Critical,nature:i.$p.Functional},c=(i.Bh.Medium,i.mk.New,i.Bh.Medium,i.mk.Pending,i.Bh.Urgent,i.mk.Fixed,i.Bh.Medium,i.mk.Duplicate,i.Bh.Low,i.mk.Deferred,n(3453)),u=n(6474);var d=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))})),f=n(184),x="flex bg-slate-200 text-inherit flex-row gap-x-2 items-center  border-inherit w-full";function m(e){var t=e.label,n=e.isChecked,l=e.onChange;return(0,f.jsxs)("button",{type:"button",title:"checkbox",className:x,onClick:function(){return l(!n)},children:[(0,f.jsx)("div",{className:"pb-2 pt-3 px-3 h-full w-auto border-2 border-inherit  rounded-sm bg-slate-800 text-white ",children:n?(0,f.jsx)(d,{className:"w-6 h-6"}):(0,f.jsx)("div",{className:"w-6 h-6"})}),(0,f.jsx)("p",{className:" font-Oswald text-lg lg:text-2xl capitalize font-thin pr-5",children:t})]})}var h=n(732),p=n(2990);function g(){var e=(0,u.TL)(),t=(0,a.useState)("Name"),n=(0,l.Z)(t,2),i=n[0],o=n[1],d=(0,a.useState)(!1),x=(0,l.Z)(d,2),g=x[0],w=x[1],b=(0,r.cI)({mode:"all"}),v=b.control,y=b.handleSubmit;return(0,f.jsxs)("div",{className:"w-full h-auto ml-auto flex-initial z-[3] flex flex-col lg:flex-row gap-x-0 gap-y-5 lg:gap-y-0 lg:gap-x-5 items-center justify-start",children:[(0,f.jsx)("div",{className:" px-5 w-full lg:max-w-sm  flex-initial",children:(0,f.jsx)(h.Z,{items:s,title:"Order By",onChange:function(t){o(t),e((0,c.aA)({orderBy:t}))},selectedValue:i})}),(0,f.jsxs)("form",{onSubmit:y((function(t){e((0,c.aA)(t))})),className:"flex flex-row w-full lg:w-auto gap-y-2 lg:gap-y-0 px-5 flex-auto",children:[(0,f.jsx)(p.Z,{control:v,label:"search",placeholder:"search",name:"searchTerm"}),(0,f.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:"Search"})]}),(0,f.jsx)("div",{className:"border-black flex-initial w-full lg:w-auto mx-auto px-5",children:(0,f.jsx)(m,{label:"Projects where I'm a member",isChecked:g,onChange:function(t){w(t),e((0,c.aA)({isMember:t}))}})})]})}},3460:function(e,t,n){var l,a,r,i,s;n.d(t,{vH:function(){return l},mk:function(){return a},Bh:function(){return r},_8:function(){return i},$p:function(){return s}}),function(e){e[e.Persistent=0]="Persistent",e[e.Frequent=1]="Frequent",e[e.Random=2]="Random",e[e.Rare=3]="Rare"}(l||(l={})),function(e){e[e.New=0]="New",e[e.Assigned=1]="Assigned",e[e.Open=2]="Open",e[e.Fixed=3]="Fixed",e[e.Pending=4]="Pending",e[e.Retest=5]="Retest",e[e.Verified=6]="Verified",e[e.Reopen=7]="Reopen",e[e.Closed=8]="Closed",e[e.Duplicate=9]="Duplicate",e[e.Rejected=10]="Rejected",e[e.Deferred=11]="Deferred",e[e.NotBug=12]="NotBug"}(a||(a={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Urgent=3]="Urgent"}(r||(r={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Critical=3]="Critical"}(i||(i={})),function(e){e[e.Functional=0]="Functional",e[e.Performance=1]="Performance",e[e.Usability=2]="Usability",e[e.Compatibility=3]="Compatibility",e[e.Security=4]="Security"}(s||(s={}))},7845:function(e,t,n){var l=n(2791);var a=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=a}}]);
//# sourceMappingURL=791.82db3888.chunk.js.map