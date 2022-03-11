"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[178],{3460:function(e,t,n){var s,a,r,i,c;n.d(t,{vH:function(){return s},mk:function(){return a},Bh:function(){return r},_8:function(){return i},$p:function(){return c}}),function(e){e[e.Persistent=0]="Persistent",e[e.Frequent=1]="Frequent",e[e.Random=2]="Random",e[e.Rare=3]="Rare"}(s||(s={})),function(e){e[e.New=0]="New",e[e.Assigned=1]="Assigned",e[e.Open=2]="Open",e[e.Fixed=3]="Fixed",e[e.Pending=4]="Pending",e[e.Retest=5]="Retest",e[e.Verified=6]="Verified",e[e.Reopen=7]="Reopen",e[e.Closed=8]="Closed",e[e.Duplicate=9]="Duplicate",e[e.Rejected=10]="Rejected",e[e.Deferred=11]="Deferred",e[e.NotBug=12]="NotBug"}(a||(a={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Urgent=3]="Urgent"}(r||(r={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Critical=3]="Critical"}(i||(i={})),function(e){e[e.Functional=0]="Functional",e[e.Performance=1]="Performance",e[e.Usability=2]="Usability",e[e.Compatibility=3]="Compatibility",e[e.Security=4]="Security"}(c||(c={}))},9178:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(1413),a=n(5861),r=n(885),i=n(7757),c=n.n(i),l=n(9158),o=n(2791),u=n(6871),d=n(3504),p=n(260),f=n(6823),h=n(3460),x=n(3191),m=n(184);function g(){var e=(0,u.UO)().slug,t=(0,d.lr)(),n=(0,r.Z)(t,1)[0].get("phaseId"),i=(0,o.useState)(void 0),g=(0,r.Z)(i,2),j=g[0],b=g[1],w=(0,o.useState)(!1),N=(0,r.Z)(w,2),v=N[0],y=N[1],S=(0,o.useState)(!1),k=(0,r.Z)(S,2),Z=k[0],O=k[1],R=(0,o.useState)([]),C=(0,r.Z)(R,2),P=C[0],M=C[1],U=(0,o.useState)(!1),F=(0,r.Z)(U,2),L=F[0],T=F[1],D=(0,o.useState)(!1),I=(0,r.Z)(D,2),z=I[0],H=I[1],B=(0,o.useState)({pageNumber:1,pageSize:10,phaseId:null}),q=(0,r.Z)(B,2),A=q[0],V=q[1],X=(0,o.useState)(null),E=(0,r.Z)(X,2),$=(E[0],E[1],(0,o.useCallback)(function(){var e=(0,a.Z)(c().mark((function e(t){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),n=(0,x.nX)(A),e.next=5,p.Z.Projects.listTickets(t,n);case 5:s=e.sent,M(s),console.log(s.metadata),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,H(!1),O(!0),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,10,13,17]])})));return function(t){return e.apply(this,arguments)}}(),[A])),_=(0,o.useCallback)(function(){var e=(0,a.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,p.Z.Projects.details(t);case 4:return a=e.sent,b(a),y(!0),n&&V((0,s.Z)((0,s.Z)({},A),{},{phaseId:n})),e.next=10,$(a.id);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.prev=15,T(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),[$,n,A]);return(0,o.useEffect)((function(){!e||L||v||_(e)}),[_,L,v,e]),z&&!Z?(0,m.jsx)("div",{className:"py-20 w-screen h-screen bg-slate-300 flex  items-center justify-center",children:(0,m.jsx)(f.Z,{message:"Loading Tickets..."})}):j?(0,m.jsx)("div",{className:"w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20",children:(0,m.jsxs)("div",{className:"container mx-auto flex flex-col gap-y-5 p-10 my-10 bg-white text-black drop-shadow-md",children:[(0,m.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between lg:items-end border-b-2 border-black pb-1 flex-initial",children:[(0,m.jsx)("p",{className:" font-Oswald text-4xl uppercase font-thin",children:"Tickets"}),(0,m.jsx)("p",{className:" font-Oswald font-thin uppercase text-2xl",children:j.title})]}),P.length>0?(0,m.jsx)("ul",{className:"list-none flex flex-col py-5 gap-y-5",children:P.map((function(e){return(0,m.jsx)("li",{className:"list-item  ",children:(0,m.jsxs)(d.rU,{to:"/tickets/".concat(e.id),className:" flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between border-b border-b-gray-400 items-end py-5",children:[(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("p",{className:" font-Oswald font-thin leading-loose text-2xl",children:e.subject}),(0,m.jsx)("p",{className:" font-Montserrat font-thin text-lg pr-5 ",children:e.body})]}),(0,m.jsxs)("div",{className:"grid grid-flow-col max-w-xl gap-x-10 ml-auto",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:" font-Oswald text-base uppercase font-thin text-gray-500",children:"Created"}),(0,m.jsx)("p",{className:"font-Oswald text-xl font-thin",children:(0,l.Z)(new Date(e.creationDate),"dd/MM/yy")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:" font-Oswald text-base uppercase font-thin text-gray-500",children:"Status"}),(0,m.jsx)("p",{className:"font-Oswald text-xl font-thin uppercase",children:h.mk[e.status]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:" font-Oswald text-base uppercase font-thin text-gray-500",children:"Priority"}),(0,m.jsx)("p",{className:"font-Oswald text-xl font-thin uppercase",children:h.Bh[e.priority]})]})]})]})},e.id)}))}):(0,m.jsx)("div",{className:"h-20 w-full flex items-center justify-center",children:(0,m.jsx)("p",{className:"font-Montserrat text-lg",children:"This project have no phases"})})]})}):(0,m.jsx)("div",{className:"py-20",children:"Not Found"})}},3191:function(e,t,n){function s(e){var t=new URLSearchParams;return t.append("pageNumber",e.pageNumber.toString()),t.append("pageSize",e.pageSize.toString()),e.searchTerm&&t.append("searchTerm",e.searchTerm),t}function a(e){var t=new URLSearchParams;return t.append("pageNumber",e.pageNumber.toString()),t.append("pageSize",e.pageSize.toString()),e.phaseId&&t.append("phaseId",e.phaseId),t}n.d(t,{ue:function(){return s},nX:function(){return a}})}}]);
//# sourceMappingURL=178.d747bb17.chunk.js.map