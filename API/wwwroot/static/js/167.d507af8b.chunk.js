"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[167],{2397:function(e,t,l){l.d(t,{Z:function(){return r}});var a=l(184);function r(e){var t=e.title,l=e.value,r=e.fallbackValue,s=void 0===r?"Unavailable":r,n=e.isCol,i=void 0!==n&&n;return(0,a.jsxs)("p",{className:"".concat(i?"flex-col items-start":"flex-row items-center"," flex w-full justify-between font-Montserrat border-b border-b-inherit"),children:[(0,a.jsx)("span",{className:"text-xl uppercase font-Oswald font-thin min-w-[7rem] text-gray-500",children:t}),l?(0,a.jsx)("span",{className:"text-lg first-letter:capitalize",children:l}):(0,a.jsx)("span",{className:"text-base uppercase font-thin text-gray-500",children:s})]})}},6167:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var a=l(9158),r=l(3504),s=l(2397),n=l(184);function i(e){var t=e.project;return(0,n.jsx)(r.rU,{to:"/projects/".concat(t.slug),children:(0,n.jsxs)("div",{className:"relative w-full h-auto border-b-black hover:border-b-transparent bg-white lg:bg-transparent  lg:hover:bg-slate-200 drop-shadow-sm lg:hover:drop-shadow-xl duration-700 transition-all lg:hover:-translate-y-3 lg:rounded-md overflow-hidden flex flex-col",children:[(0,n.jsx)("div",{className:"relative w-full h-64 lg:h-64 flex-initial",children:(0,n.jsx)("img",{src:t.photo,className:"object-fill object-center h-full w-full drop-shadow-md",alt:"test"})}),(0,n.jsxs)("div",{className:"px-5 lg:px-10 py-4 flex-auto flex flex-col border-b-inherit gap-y-2",children:[(0,n.jsx)("p",{className:"uppercase font-Oswald font-thin text-3xl mb-2",children:t.title}),(0,n.jsx)(s.Z,{title:"Created at",value:(0,a.Z)(new Date(t.creationDate),"dd/MM")}),(0,n.jsx)(s.Z,{title:"Actual Phase",value:t.actualPhase}),(0,n.jsx)(s.Z,{title:"Tickets",value:"".concat(t.ticketsCount," ").concat(t.ticketsCount>1?"Tickets":"Ticket")})]}),t.isMember&&(0,n.jsx)("p",{className:" font-Oswald text-sm absolute top-0 right-0 py-1 px-2 m-2 rounded-md uppercase bg-slate-300 text-black font-thin",children:"Member"})]})})}function c(e){var t=e.projects;return(0,n.jsx)("div",{className:"relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10",children:t.map((function(e){return(0,n.jsx)(i,{project:e},e.id)}))})}}}]);
//# sourceMappingURL=167.d507af8b.chunk.js.map