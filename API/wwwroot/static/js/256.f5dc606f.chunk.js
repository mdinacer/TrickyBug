"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[256],{732:function(e,t,l){l.d(t,{Z:function(){return m}});var n=l(885),a=l(7845),r=l(2791),s=l(184),i="relative border-x-2 border-x-slate-200 bg-slate-200",c="pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",o="flex flex-row items-center justify-between w-full gap-x-5 text-2xl",u="text-2xl text-gray-400",d="w-8 h-8 ml-2 text-inherit",f="absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",x="py-5 list-none flex flex-col gap-y-2 font-Montserrat",h="font-Montserrat text-left text-black text-lg font-thin cursor-pointer";function m(e){var t=e.title,l=e.items,m=e.fullWidth,p=void 0!==m&&m,w=e.onChange,b=e.selectedValue,g=(0,r.useState)(!1),v=(0,n.Z)(g,2),j=v[0],y=v[1],N=(0,r.useState)(null),k=(0,n.Z)(N,2),C=k[0],Z=k[1];(0,r.useEffect)((function(){if(b&&null==C){var e=l.find((function(e){return e.name===b}));Z(e||null)}}),[l,C,b]);return(0,s.jsxs)("div",{className:"\n    ".concat(p?"w-full":"max-w-sm w-full","\n    ").concat(b?"border-x-white":"border-x-red-500","  \n    ").concat(i),children:[(0,s.jsxs)("button",{type:"button",className:c,onClick:function(){return y((function(e){return!e}))},children:[C?(0,s.jsxs)("p",{className:o,children:[(0,s.jsxs)("span",{className:"text-gray-500 opacity-50  capitalize ",children:[t," "]}),(0,s.jsx)("span",{className:"uppercase text-inherit",children:C.name})]}):(0,s.jsx)("p",{className:u,children:t}),(0,s.jsx)(a.Z,{className:d})]}),(0,s.jsx)("div",{className:"".concat(j?"block ":"hidden","  ").concat(f),id:"dropdown",children:(0,s.jsx)("ul",{className:x,"aria-labelledby":"dropdown",children:l.map((function(e){return(0,s.jsx)("li",{value:e.value,onClick:function(){return function(e){Z(e),w(e.value),y(!1)}(e)},className:h,children:e.name},e.value)}))})})]})}},1179:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var n=l(885),a=l(2791),r=l(1134),s=l(1024),i=l(3453),c=l(6474);var o=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))})),u=l(184),d="flex pb-2 pt-3 px-5 text-inherit flex-row gap-x-2 items-center bg-inherit border-inherit transition-all duration-300";function f(e){var t=e.label,l=e.isChecked,n=e.onChange;return(0,u.jsxs)("button",{type:"button",title:"checkbox",className:d,onClick:function(){return n(!l)},children:[(0,u.jsx)("div",{className:"w-6 h-6 border-2 border-inherit  rounded-sm ",children:l&&(0,u.jsx)(o,{className:"h-full w-full"})}),(0,u.jsx)("p",{className:" font-Oswald text-2xl capitalize font-thin",children:t})]})}var x=l(732),h=l(2990);function m(){var e=(0,c.TL)(),t=(0,a.useState)("Name"),l=(0,n.Z)(t,2),o=l[0],d=l[1],m=(0,a.useState)(!1),p=(0,n.Z)(m,2),w=p[0],b=p[1],g=(0,r.cI)({mode:"all"}),v=g.control,j=g.handleSubmit;return(0,u.jsxs)("div",{className:"w-full h-auto ml-auto flex-initial z-[3] flex flex-col lg:flex-row gap-x-0 gap-y-2 lg:gap-y-0 lg:gap-x-5 items-center justify-start",children:[(0,u.jsx)("div",{className:" px-5 w-full lg:max-w-sm ",children:(0,u.jsx)(x.Z,{items:s.o,title:"Order By",onChange:function(t){d(t),e((0,i.aA)({orderBy:t}))},selectedValue:o,fullWidth:!0})}),(0,u.jsxs)("form",{onSubmit:j((function(t){e((0,i.aA)(t))})),className:"flex flex-col w-full lg:w-auto gap-y-2 lg:gap-y-0 lg:flex-row px-5",children:[(0,u.jsx)(h.Z,{control:v,label:"search",placeholder:"search",name:"searchTerm"}),(0,u.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:"Search"})]}),(0,u.jsx)("div",{className:"border-black",children:(0,u.jsx)(f,{label:"Projects where I'm a member",isChecked:w,onChange:function(t){b(t),e((0,i.aA)({isMember:t}))}})})]})}},7845:function(e,t,l){var n=l(2791);var a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=a}}]);
//# sourceMappingURL=256.f5dc606f.chunk.js.map