"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[880],{8819:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(885),i=n(2791);var l=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))})),s=n(184),c="relative border-x-2 border-x-slate-200 bg-slate-500",a="pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",o="flex flex-row items-center justify-between w-full gap-x-5 text-2xl",u="text-2xl text-gray-300",d="w-8 h-8 ml-2 text-white",f="absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",x="py-5 list-none flex flex-col gap-y-2 font-Montserrat",p="font-Montserrat text-left text-black text-lg font-thin cursor-pointer";function h(e){var t=e.title,n=e.items,h=e.fullWidth,m=void 0!==h&&h,v=e.onChange,b=e.selectedValue,g=(0,i.useState)(!1),j=(0,r.Z)(g,2),w=j[0],y=j[1],N=(0,i.useState)(null),k=(0,r.Z)(N,2),Z=k[0],S=k[1];(0,i.useEffect)((function(){if(b&&null==Z){var e=n.find((function(e){return e.name===b}));S(e||null)}}),[n,Z,b]);return(0,s.jsxs)("div",{className:"\n    ".concat(m?"w-full":"max-w-sm w-full","\n    ").concat(b?"border-x-white":"border-x-red-500","  \n    ").concat(c),children:[(0,s.jsxs)("button",{type:"button",className:a,onClick:function(){return y((function(e){return!e}))},children:[Z?(0,s.jsxs)("p",{className:o,children:[(0,s.jsxs)("span",{className:"text-gray-300 opacity-50  capitalize ",children:[t," "]}),(0,s.jsx)("span",{className:"uppercase text-white",children:Z.name})]}):(0,s.jsx)("p",{className:u,children:t}),(0,s.jsx)(l,{className:d})]}),(0,s.jsx)("div",{className:"".concat(w?"block ":"hidden","  ").concat(f),id:"dropdown",children:(0,s.jsx)("ul",{className:x,"aria-labelledby":"dropdown",children:n.map((function(e){return(0,s.jsx)("li",{value:e.value,onClick:function(){return function(e){S(e),v(e.value),y(!1)}(e)},className:p,children:e.name},e.value)}))})})]})}},7880:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(885),i=n(2791),l=n(3504),s=n(260),c=n(1413),a=n(5861),o=n(7757),u=n.n(o),d=n(1134),f=n(3460),x=n(3705),p=function e(t){var n={};for(var r in t)if("object"!==typeof t[r]||Array.isArray(t[r]))n[r]=t[r];else{var i=e(t[r]);for(var l in i)n[r+"."+l]=i[l]}return n},h=n(8819),m=n(1690),v=n(4949),b=n(2990),g=n(184);function j(e){var t=e.projectSlug,n=e.ticketId,l=e.onClose,o=(0,i.useState)(null),j=(0,r.Z)(o,2),w=j[0],y=j[1],N=!!w,k=(0,i.useState)(null),Z=(0,r.Z)(k,2),S=Z[0],C=Z[1],M=!!S,R=(0,i.useState)([]),T=(0,r.Z)(R,2),O=T[0],P=T[1],I=(0,d.cI)({mode:"all"}),W=I.control,V=I.watch,E=I.handleSubmit,D=I.reset,U=I.setValue,A=I.formState.isDirty,B=V("file",null),L=(0,i.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.Projects.listMembers(t);case 3:n=e.sent,r=n.map((function(e){return{name:e.userName,value:e.userId}})),P(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]),q=(0,i.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.Projects.details(t);case 3:return n=e.sent,C(n),U("projectId",n.id),e.next=8,L(n.id);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),[L,U]),F=(0,i.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.Tickets.details(t);case 3:n=e.sent,y(n),console.log("ticket",n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,i.useEffect)((function(){t&&q(t)}),[q,t]),(0,i.useEffect)((function(){n&&F(n)}),[F,n]),(0,i.useEffect)((function(){return!w||B||A||D(w),function(){B&&URL.revokeObjectURL(B.preview)}}),[A,D,w,B]);var H=function(e,t){U(e,t)};function z(){return(z=(0,a.Z)(u().mark((function e(t){var n,r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return");case 2:if(n=t.file,r=t.description,i={id:w?w.id:0,subject:t.subject,body:t.body,priority:t.priority,projectId:S.id,status:t.status,assignedMemberId:t.assignedMemberId,description:r},a=(0,c.Z)((0,c.Z)({},p(i)),{},{"description.file":n}),console.log("obj:",a),S){e.next=8;break}return e.abrupt("return");case 8:if(!0,e.prev=9,!N){e.next=13;break}return e.next=13,s.Z.Tickets.update(a);case 13:if(N){e.next=16;break}return e.next=16,s.Z.Tickets.create(a);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),console.log(e.t0);case 21:return e.prev=21,l(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[9,18,21,24]])})))).apply(this,arguments)}return(0,g.jsx)("div",{className:"lg:fixed top-0 left-0 h-full min-h-screen w-screen bg-slate-600 z-[5] px-5 lg:px-0 flex items-center  py-20",children:(0,g.jsxs)("div",{className:"container mx-auto flex flex-col text-white max-w-4xl",children:[(0,g.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between border-b border-b-white py-1 lg:items-end ",children:[(0,g.jsx)("p",{className:"font-Oswald text-5xl uppercase",children:N?"Edit Ticket":"New Ticket"}),(0,g.jsx)("p",{className:"font-Oswald text-xl uppercase font-thin",children:null===S||void 0===S?void 0:S.title})]}),(0,g.jsxs)("form",{onSubmit:E((function(e){return z.apply(this,arguments)})),className:"w-full flex flex-col gap-y-5",children:[(0,g.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2  lg:gap-x-10",children:[(0,g.jsxs)("div",{className:"flex flex-col gap-y-5 py-5",children:[(0,g.jsx)(b.Z,{type:"text",control:W,label:"Ticket Title",placeholder:"Ticket Title",name:"subject",fullWidth:!0,rules:{required:"Subject is required"}}),(0,g.jsx)(b.Z,{type:"text",control:W,label:"Operating System",placeholder:"Operating System",name:"description.operatingSystem",fullWidth:!0}),(0,g.jsx)(b.Z,{type:"text",control:W,label:"Browser",placeholder:"Browser",name:"description.browser",fullWidth:!0}),(0,g.jsx)(v.Z,{rows:4,type:"text",control:W,label:"Ticket Description",placeholder:"Ticket Description",name:"body",fullWidth:!0,rules:{required:"Description is required"}})]}),(0,g.jsx)("div",{className:"flex flex-col gap-y-5 py-5",children:(0,g.jsxs)("div",{className:" w-full flex flex-col  gap-y-5 ",children:[(0,g.jsx)(h.Z,{title:"Priority",fullWidth:!0,items:(0,x.S)(f.Bh),onChange:function(e){return H("priority",e)},selectedValue:null===w||void 0===w?void 0:w.priority}),N&&(0,g.jsx)(h.Z,{title:"Status",fullWidth:!0,items:(0,x.S)(f.mk),onChange:function(e){return H("status",e)},selectedValue:null===w||void 0===w?void 0:w.status}),N&&(0,g.jsx)(h.Z,{title:"Assigned Member",fullWidth:!0,items:O,onChange:function(e){return H("assignedMemberId",e)},selectedValue:null===w||void 0===w?void 0:w.assignedMember}),(0,g.jsx)(h.Z,{title:"Occurrence",fullWidth:!0,items:(0,x.S)(f.vH),onChange:function(e){return H("description.occurrence",e)},selectedValue:null===w||void 0===w?void 0:w.description.occurrence}),(0,g.jsx)(h.Z,{title:"Severity",fullWidth:!0,items:(0,x.S)(f._8),onChange:function(e){return H("description.severity",e)},selectedValue:null===w||void 0===w?void 0:w.description.severity}),(0,g.jsx)(h.Z,{title:"Nature",fullWidth:!0,items:(0,x.S)(f.$p),onChange:function(e){return H("description.nature",e)},selectedValue:null===w||void 0===w?void 0:w.description.nature})]})})]}),(0,g.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:h-[200px]",children:[(0,g.jsx)("div",{className:"h-auto border-x-2 px-5 border-x-white text-white bg-slate-500 bg-opacity-50 flex-auto",children:(0,g.jsx)(m.Z,{control:W,name:"file"})}),(0,g.jsx)("div",{className:"flex flex-row h-full w-full border-x-2 px-5 border-x-white text-white bg-slate-500 bg-opacity-50",children:(0,g.jsx)("div",{className:" mx-auto flex items-center justify-center",children:B?(0,g.jsx)("img",{className:" object-auto w-auto object-center max-h-[200px]",src:B.preview,alt:"preview"}):(0,g.jsx)("img",{className:" object-auto w-auto object-center max-h-[200px]",src:null===w||void 0===w?void 0:w.description.photo,alt:null===w||void 0===w?void 0:w.subject})})})]}),(0,g.jsxs)("div",{className:"flex flex-row gap-x-2 mx-auto w-full justify-end py-5",children:[(0,g.jsx)("input",{className:"cursor-pointer border-slate-500 border-2 text-slate-300 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",value:"Cancel",onClick:l}),(0,g.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:N?"Update Ticket":"Create Ticket"})]})]})]})})}var w=(0,i.lazy)((function(){return Promise.all([n.e(158),n.e(677)]).then(n.bind(n,8677))}));function y(e){var t=e.projectId,n=e.projectSlug,c=e.isPermitted,a=(0,i.useState)([]),o=(0,r.Z)(a,2),u=o[0],d=o[1],f=(0,i.useState)(!1),x=(0,r.Z)(f,2),p=x[0],h=x[1],m=(0,i.useState)(null),v=(0,r.Z)(m,2),b=v[0],y=v[1],N=(0,i.useState)(!1),k=(0,r.Z)(N,2),Z=k[0],S=k[1],C=(0,i.useCallback)((function(){s.Z.Projects.listRecentTickets(t).then((function(e){d(e)})).catch((function(e){return console.log(e)})).finally((function(){return h(!1)}))}),[t]);(0,i.useEffect)((function(){return t&&!p&&C(),function(){d([])}}),[C,p,t]);return Z&&t?(0,g.jsx)(j,{projectSlug:n,onClose:function(){C(),b&&y(null),S(!1)},ticketId:b}):(0,g.jsxs)("div",{className:"relative pb-5 h-full flex flex-col bg-slate-200 lg:rounded-md overflow-hidden",children:[(0,g.jsxs)("div",{className:"flex-initial bg-slate-700 px-10 text-white  py-2 flex flex-row items-center justify-between",children:[(0,g.jsx)("p",{className:"font-Oswald text-xl uppercase ",children:"Recent Tickets"}),(0,g.jsxs)("div",{className:"flex flex-row gap-x-5",children:[c&&(0,g.jsx)("button",{onClick:function(){return S(!0)},className:"text-Montserrat text-sm uppercase underline underline-offset-2",type:"button",children:"Add"}),(0,g.jsx)(l.rU,{className:"text-Montserrat text-sm uppercase underline underline-offset-2",to:{pathname:"/tickets",search:"?projectId=".concat(t)},children:"view all"})]})]}),(0,g.jsx)("div",{className:"px-10",children:u.length>0?(0,g.jsx)(w,{tickets:u,onActionSelected:function(e){y(e),S(!0)}}):(0,g.jsx)("div",{className:"h-40 w-full flex items-center justify-center",children:(0,g.jsx)("p",{className:"font-Montserrat text-xl text-gray-400",children:"EMPTY"})})})]})}},3460:function(e,t,n){var r,i,l,s,c;n.d(t,{vH:function(){return r},mk:function(){return i},Bh:function(){return l},_8:function(){return s},$p:function(){return c}}),function(e){e[e.Persistent=0]="Persistent",e[e.Frequent=1]="Frequent",e[e.Random=2]="Random",e[e.Rare=3]="Rare"}(r||(r={})),function(e){e[e.New=0]="New",e[e.Assigned=1]="Assigned",e[e.Open=2]="Open",e[e.Fixed=3]="Fixed",e[e.Pending=4]="Pending",e[e.Retest=5]="Retest",e[e.Verified=6]="Verified",e[e.Reopen=7]="Reopen",e[e.Closed=8]="Closed",e[e.Duplicate=9]="Duplicate",e[e.Rejected=10]="Rejected",e[e.Deferred=11]="Deferred",e[e.NotBug=12]="NotBug"}(i||(i={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Urgent=3]="Urgent"}(l||(l={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Critical=3]="Critical"}(s||(s={})),function(e){e[e.Functional=0]="Functional",e[e.Performance=1]="Performance",e[e.Usability=2]="Usability",e[e.Compatibility=3]="Compatibility",e[e.Security=4]="Security"}(c||(c={}))},3705:function(e,t,n){n.d(t,{S:function(){return i}});var r=n(885);function i(e){for(var t=[],n=0,i=Object.entries(e);n<i.length;n++){var l=(0,r.Z)(i[n],2),s=l[0],c=l[1];Number.isNaN(Number(s))&&t.push({name:s,value:c})}return t}}}]);
//# sourceMappingURL=880.5ee1a6c9.chunk.js.map