"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[636],{7585:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(885),s=a(6285),i=a(4673),l=a(2791),r=a(6048),c=a.n(r),o=a(184);function d(e){var t=e.metaData,a=e.onPageChange,r=t.currentPage,d=t.totalItems,u=t.totalPages,f=t.itemsPerPage,x=(0,l.useState)(r),h=(0,n.Z)(x,2),m=h[0],p=h[1];function g(e){p(e),a(e)}return(0,o.jsx)("div",{className:" border-x-2 border-x-inherit px-10 text-inherit w-auto h-auto",children:t&&t.totalPages>1&&(0,o.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,o.jsxs)("p",{className:"font-Oswald font-thin text-xl",children:["Showing ",(r-1)*f+1," to"," ",(r-1)*f>d?d:r*f," ","of ",d," items"]}),(0,o.jsx)(c(),{className:"flex flex-row items-center gap-x-3 py-2 px-5 w-auto ",forcePage:m-1,pageClassName:"font-thin",activeClassName:"font-normal",pageLinkClassName:"p-2 font-Oswald  text-inherit text-xl",breakLabel:"...",nextLabel:(0,o.jsx)(s.Z,{className:"h-6 w-6"}),onPageChange:function(e){var t=e.selected;console.log(t),g(t)},pageRangeDisplayed:3,pageCount:u,previousLabel:(0,o.jsx)(i.Z,{className:"h-6 w-6"})})]})})}},6254:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(2241),s=a(184);function i(e){var t=e.message,a=void 0===t?"Loading":t;return(0,s.jsx)("div",{className:"relative  w-full h-full flex items-center justify-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)("p",{className:" font-Oswald text-5xl py-10 uppercase",children:a})]})})}},5636:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(885),s=a(2791),i=a(3504),l=a(7585),r=a(6254),c=a(2390),o=a(6474);var d=a(184),u=(0,s.lazy)((function(){return a.e(957).then(a.bind(a,5888))})),f=(0,s.lazy)((function(){return a.e(686).then(a.bind(a,8686))}));function x(){var e=function(){var e=(0,o.CG)(c.Hl.selectAll),t=(0,o.CG)((function(e){return e.ticket})),a=t.ticketsLoaded,n=t.metaData,i=t.ticketParams,l=(0,o.TL)();return(0,s.useEffect)((function(){a||l((0,c.lu)())}),[l,e,a]),{tickets:e,ticketParams:i,ticketsLoaded:a,metaData:n}}(),t=e.tickets,a=e.ticketsLoaded,x=e.ticketParams,h=e.metaData,m=(0,i.lr)(),p=(0,n.Z)(m,1)[0],g=p.get("projectId"),j=p.get("startDate"),v=p.get("endDate"),w=(0,o.TL)();return(0,s.useEffect)((function(){w(g?(0,c.D2)({projectId:g}):(0,c.gP)())}),[w,g]),(0,s.useEffect)((function(){j&&w((0,c.D2)({startDate:j,endDate:v}))}),[w,v,j]),(0,d.jsx)("div",{className:"h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 flex px-5 ",children:(0,d.jsxs)("div",{className:"container flex flex-col mx-auto   flex-auto  w-full rounded-md overflow-hidden",children:[(0,d.jsx)("h1",{className:"flex-initial font-Oswald text-7xl pb-10  uppercase",children:"Tickets"}),g?(0,d.jsx)("div",{children:(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Showing Project's tickets"}),j&&(0,d.jsx)("span",{children:"Starting from: "}),v&&(0,d.jsx)("span",{children:"Ending at: "})]})}):(0,d.jsx)(u,{params:x,setParams:function(e){w((0,c.D2)(e))}}),(0,d.jsx)("div",{className:"flex-auto",children:a?(0,d.jsx)(f,{tickets:t}):(0,d.jsx)("div",{className:"w-full h-full",children:(0,d.jsx)(r.Z,{message:"loading tickets, please wait"})})}),h&&(0,d.jsx)("div",{className:"py-5 border-black w-full",children:(0,d.jsx)(l.Z,{metaData:h,onPageChange:function(e){return w((0,c.oW)({pageNumber:e+1}))}})})]})})}}}]);
//# sourceMappingURL=636.84ad0bc2.chunk.js.map