"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[539],{7585:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(885),s=a(6285),i=a(4673),r=a(2791),l=a(6048),c=a.n(l),o=a(184);function u(e){var t=e.metaData,a=e.onPageChange,l=t.currentPage,u=t.totalItems,d=t.totalPages,f=t.itemsPerPage,x=(0,r.useState)(l),h=(0,n.Z)(x,2),m=h[0],p=h[1];function g(e){p(e),a(e)}return(0,o.jsx)("div",{className:" border-x-2 border-x-inherit px-10 text-inherit w-auto h-auto",children:t&&t.totalPages>1&&(0,o.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,o.jsxs)("p",{className:"font-Oswald font-thin text-xl",children:["Showing ",(l-1)*f+1," to"," ",(l-1)*f>u?u:l*f," ","of ",u," items"]}),(0,o.jsx)(c(),{className:"flex flex-row items-center gap-x-3 py-2 px-5 w-auto ",forcePage:m-1,pageClassName:"font-thin",activeClassName:"font-normal",pageLinkClassName:"p-2 font-Oswald  text-inherit text-xl",breakLabel:"...",nextLabel:(0,o.jsx)(s.Z,{className:"h-6 w-6"}),onPageChange:function(e){var t=e.selected;console.log(t),g(t)},pageRangeDisplayed:3,pageCount:d,previousLabel:(0,o.jsx)(i.Z,{className:"h-6 w-6"})})]})})}},6254:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(2241),s=a(184);function i(e){var t=e.message,a=void 0===t?"Loading":t;return(0,s.jsx)("div",{className:"relative  w-full h-full flex items-center justify-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)("p",{className:" font-Oswald text-5xl py-10 uppercase",children:a})]})})}},2537:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(2791),s=a(2390),i=a(6474);function r(){var e=(0,i.CG)(s.Hl.selectAll),t=(0,i.CG)((function(e){return e.ticket})),a=t.ticketsLoaded,r=t.metaData,l=t.ticketParams,c=(0,i.TL)();return(0,n.useEffect)((function(){a||c((0,s.lu)())}),[c,e,a]),{tickets:e,ticketParams:l,ticketsLoaded:a,metaData:r}}},9539:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(885),s=a(2791),i=a(3504),r=a(7585),l=a(6254),c=a(2537),o=a(2390),u=a(6474),d=a(184),f=(0,s.lazy)((function(){return a.e(957).then(a.bind(a,5888))})),x=(0,s.lazy)((function(){return a.e(686).then(a.bind(a,8686))}));function h(){var e=(0,c.Z)(),t=e.tickets,a=e.ticketsLoaded,h=e.ticketParams,m=e.metaData,p=(0,i.lr)(),g=(0,n.Z)(p,1)[0],j=g.get("projectId"),v=g.get("startDate"),w=g.get("endDate"),k=(0,u.TL)();return(0,s.useEffect)((function(){k(j?(0,o.D2)({projectId:j}):(0,o.gP)())}),[k,j]),(0,s.useEffect)((function(){v&&k((0,o.D2)({startDate:v,endDate:w}))}),[k,w,v]),(0,d.jsx)("div",{className:"h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 flex px-5 ",children:(0,d.jsxs)("div",{className:"container flex flex-col mx-auto   flex-auto  w-full rounded-md overflow-hidden",children:[(0,d.jsx)("h1",{className:"flex-initial font-Oswald text-7xl pb-10  uppercase",children:"Tickets"}),j?(0,d.jsx)("div",{children:(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Showing Project's tickets"}),v&&(0,d.jsx)("span",{children:"Starting from: "}),w&&(0,d.jsx)("span",{children:"Ending at: "})]})}):(0,d.jsx)(f,{params:h,setParams:function(e){k((0,o.D2)(e))}}),(0,d.jsx)("div",{className:"flex-auto",children:a?(0,d.jsx)(x,{tickets:t}):(0,d.jsx)("div",{className:"w-full h-full",children:(0,d.jsx)(l.Z,{message:"loading tickets, please wait"})})}),m&&(0,d.jsx)("div",{className:"py-5 border-black w-full",children:(0,d.jsx)(r.Z,{metaData:m,onPageChange:function(e){return k((0,o.oW)({pageNumber:e+1}))}})})]})})}}}]);
//# sourceMappingURL=539.ecab8980.chunk.js.map