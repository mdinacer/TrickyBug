"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[412],{2412:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var s=n(885),l=n(9158),a=n(2791),c=n(6871),r=n(260),i=n(6823);var o=n(184);function u(){var e=(0,c.UO)().slug,t=(0,a.useState)(void 0),n=(0,s.Z)(t,2),u=n[0],f=n[1],d=(0,a.useState)(!1),x=(0,s.Z)(d,2),h=x[0],m=x[1],p=(0,a.useState)([]),g=(0,s.Z)(p,2),j=g[0],b=g[1],N=(0,a.useState)(!1),w=(0,s.Z)(N,2),v=w[0],y=w[1],k=(0,a.useState)({searchTerm:null,pageNumber:1,pageSize:10}),S=(0,s.Z)(k,2),Z=S[0],T=(S[1],(0,a.useCallback)((function(e){y(!0),r.Z.Projects.details(e).then((function(e){f(e)})).catch((function(e){return console.log(e)})).finally((function(){return y(!1)}))}),[]));(0,a.useEffect)((function(){return y(!0),e&&T(e),function(){f(void 0)}}),[T,e]);var O=(0,a.useCallback)((function(e){y(!0);var t=function(e){var t=new URLSearchParams;return t.append("pageNumber",e.pageNumber.toString()),t.append("pageSize",e.pageSize.toString()),e.searchTerm&&t.append("searchTerm",e.searchTerm),t}(Z);r.Z.Projects.listActions(e,t).then((function(e){b(e)})).catch((function(e){return console.log(e)})).finally((function(){m(!0),y(!1)}))}),[Z]);return(0,a.useEffect)((function(){return u&&!h&&O(u.id),function(){b([])}}),[O,h,u]),(0,a.useEffect)((function(){u&&Z&&O(u.id)}),[O,u,Z]),v?(0,o.jsx)("div",{className:"py-20 w-screen h-screen bg-slate-300 flex  items-center justify-center",children:(0,o.jsx)(i.Z,{message:"Loading Tickets..."})}):u?(0,o.jsx)("div",{className:"h-full min-h-screen w-screen bg-slate-300 px-5 pb-10 pt-20 ",children:(0,o.jsxs)("div",{className:"container mx-auto flex flex-col  w-full rounded-md overflow-hidden",children:[(0,o.jsxs)("div",{className:" w-full border-b-2 py-1 border-b-black flex flex-col lg:flex-row justify-between lg:items-end",children:[(0,o.jsx)("h1",{className:"flex-initial text-3xl lg:text-5xl font-Oswald  uppercase",children:u.title}),(0,o.jsx)("p",{className:"text-2xl font-Oswald uppercase font-thin",children:"Tickets"})]}),j.length>0?(0,o.jsx)("ul",{className:"list-none flex flex-col py-5 gap-y-5",children:j.map((function(e){return(0,o.jsx)("li",{className:"list-item  ",children:(0,o.jsxs)("div",{className:"flex flex-col lg:flex-row justify-start lg:items-center px-5 border-b border-b-black",children:[(0,o.jsx)("p",{className:"font-Oswald text-xl ml-auto lg:ml-0 font-thin w-full max-w-[6rem]",children:(0,l.Z)(new Date(e.actionDate),"dd-MM-yy")}),(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("p",{className:" font-Oswald font-thin text-2xl",children:e.title}),(0,o.jsx)("p",{className:" font-Montserrat text-xl ",children:e.description})]}),(0,o.jsx)("p",{className:"lg:ml-auto font-Oswald uppercase font-thin text-lg",children:e.author})]})},e.id)}))}):(0,o.jsx)("div",{className:"h-20 w-full flex items-center justify-center",children:(0,o.jsx)("p",{className:"font-Montserrat text-lg",children:"This project have no tickets"})})]})}):(0,o.jsx)("div",{className:"py-20",children:"Not Found"})}}}]);
//# sourceMappingURL=412.372110b5.chunk.js.map