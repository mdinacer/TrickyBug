"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[464],{7585:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(885),n=a(6285),l=a(4673),i=a(2791),r=a(6048),c=a.n(r),o=a(184);function u(e){var t=e.metaData,a=e.onPageChange,r=t.currentPage,u=t.totalItems,f=t.totalPages,d=t.itemsPerPage,x=(0,i.useState)(r),m=(0,s.Z)(x,2),h=m[0],p=m[1];function g(e){p(e),a(e)}return(0,o.jsx)("div",{className:" border-x-2 border-x-inherit px-10 text-inherit w-auto h-auto",children:t&&t.totalPages>1&&(0,o.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,o.jsxs)("p",{className:"font-Oswald font-thin text-xl",children:["Showing ",(r-1)*d+1," to"," ",(r-1)*d>u?u:r*d," ","of ",u," items"]}),(0,o.jsx)(c(),{className:"flex flex-row items-center gap-x-3 py-2 px-5 w-auto ",forcePage:h-1,pageClassName:"font-thin",activeClassName:"font-normal",pageLinkClassName:"p-2 font-Oswald  text-inherit text-xl",breakLabel:"...",nextLabel:(0,o.jsx)(n.Z,{className:"h-6 w-6"}),onPageChange:function(e){var t=e.selected;console.log(t),g(t)},pageRangeDisplayed:3,pageCount:f,previousLabel:(0,o.jsx)(l.Z,{className:"h-6 w-6"})})]})})}},2464:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(2791),n=a(7585),l=a(2241),i=a(184);function r(e){var t=e.message,a=void 0===t?"Loading":t;return(0,i.jsx)("div",{className:"relative  w-full h-full flex items-center justify-center",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("p",{className:" font-Oswald text-5xl py-10 uppercase",children:a})]})})}var c=a(2390),o=a(6474);var u=(0,s.lazy)((function(){return a.e(957).then(a.bind(a,5888))})),f=(0,s.lazy)((function(){return a.e(686).then(a.bind(a,8686))}));function d(){var e=function(){var e=(0,o.CG)(c.Hl.selectAll),t=(0,o.CG)((function(e){return e.ticket})),a=t.ticketsLoaded,n=t.metaData,l=t.ticketParams,i=(0,o.TL)();return(0,s.useEffect)((function(){a||i((0,c.lu)())}),[i,e,a]),{tickets:e,ticketParams:l,ticketsLoaded:a,metaData:n}}(),t=e.tickets,a=e.ticketsLoaded,l=e.ticketParams,d=e.metaData,x=(0,o.TL)();return(0,i.jsx)("div",{className:"h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 flex ",children:(0,i.jsxs)("div",{className:"container flex flex-col mx-auto   flex-auto  w-full rounded-md overflow-hidden",children:[(0,i.jsx)("h1",{className:"flex-initial font-Oswald text-7xl pb-10  uppercase",children:"Tickets"}),(0,i.jsx)(u,{params:l,setParams:function(e){x((0,c.D2)(e))}}),d&&(0,i.jsx)("div",{className:"py-5 border-black w-full",children:(0,i.jsx)(n.Z,{metaData:d,onPageChange:function(e){return x((0,c.oW)({pageNumber:e+1}))}})}),(0,i.jsx)("div",{className:"flex-auto",children:a?(0,i.jsx)(f,{tickets:t}):(0,i.jsx)("div",{className:"w-full h-full",children:(0,i.jsx)(r,{message:"loading tickets, please wait"})})})]})})}}}]);
//# sourceMappingURL=464.839edd6c.chunk.js.map