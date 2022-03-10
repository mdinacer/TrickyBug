"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[584],{1746:function(e,t,n){n.d(t,{Z:function(){return j}});var l=n(1413),r=n(5861),s=n(885),a=n(7757),i=n.n(a),c=n(2791),o=n(1134),u=n(260),d=n(3460),f=n(3705),x=function e(t){var n={};for(var l in t)if("object"!==typeof t[l]||Array.isArray(t[l]))n[l]=t[l];else{var r=e(t[l]);for(var s in r)n[l+"."+s]=r[s]}return n},p=n(732),m=n(1690),h=n(4949),b=n(2990),g=n(184);function j(e){var t=e.projectId,n=e.ticketId,a=e.onClose,j=(0,c.useState)(null),w=(0,s.Z)(j,2),v=w[0],y=w[1],N=!!v,k=(0,c.useState)(null),Z=(0,s.Z)(k,2),S=Z[0],C=Z[1],O=!!S,M=(0,c.useState)([]),I=(0,s.Z)(M,2),T=I[0],D=I[1],V=(0,o.cI)({mode:"all"}),P=V.control,R=V.watch,W=V.handleSubmit,U=V.reset,E=V.setValue,L=V.formState.isDirty,z=R("file",null),B=(0,c.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.Projects.listMembers(t);case 3:n=e.sent,l=n.map((function(e){return{name:e.userName,value:e.userId}})),D(l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]),F=(0,c.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.Projects.detailsById(t);case 3:return n=e.sent,C(n),E("projectId",n.id),e.next=8,B(n.id);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),[B,E]),q=(0,c.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.Tickets.details(t);case 3:n=e.sent,y(n),console.log("ticket",n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,c.useEffect)((function(){t&&F(t)}),[F,t]),(0,c.useEffect)((function(){n&&q(n)}),[q,n]),(0,c.useEffect)((function(){return!v||z||L||U(v),function(){z&&URL.revokeObjectURL(z.preview)}}),[L,U,v,z]);var A=function(e,t){E(e,t)};function H(){return(H=(0,r.Z)(i().mark((function e(t){var n,r,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:if(n=t.file,r=t.description,s={id:v?v.id:0,subject:t.subject,body:t.body,priority:t.priority,projectId:S.id,status:t.status,assignedMemberId:t.assignedMemberId,description:r},c=(0,l.Z)((0,l.Z)({},x(s)),{},{"description.file":n}),S){e.next=7;break}return e.abrupt("return");case 7:if(e.prev=7,!N){e.next=11;break}return e.next=11,u.Z.Tickets.update(c);case 11:if(N){e.next=14;break}return e.next=14,u.Z.Tickets.create(c);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:return e.prev=19,a(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[7,16,19,22]])})))).apply(this,arguments)}return(0,g.jsx)("div",{className:"lg:fixed top-0 left-0 h-full min-h-screen w-screen bg-slate-500 z-[5] px-5 lg:px-0 flex items-center  py-20",children:(0,g.jsxs)("div",{className:"container mx-auto flex flex-col text-white max-w-4xl",children:[(0,g.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between border-b border-b-white py-1 lg:items-end ",children:[(0,g.jsx)("p",{className:"font-Oswald text-5xl uppercase",children:N?"Edit Ticket":"New Ticket"}),(0,g.jsx)("p",{className:"font-Oswald text-xl uppercase font-thin",children:null===S||void 0===S?void 0:S.title})]}),(0,g.jsxs)("form",{onSubmit:W((function(e){return H.apply(this,arguments)})),className:"w-full flex flex-col gap-y-5",children:[(0,g.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 text-black  lg:gap-x-10",children:[(0,g.jsxs)("div",{className:"flex flex-col gap-y-5 py-5",children:[(0,g.jsx)(b.Z,{type:"text",control:P,label:"Ticket Title",placeholder:"Ticket Title",name:"subject",fullWidth:!0,rules:{required:"Subject is required"}}),(0,g.jsx)(b.Z,{type:"text",control:P,label:"Operating System",placeholder:"Operating System",name:"description.operatingSystem",fullWidth:!0}),(0,g.jsx)(b.Z,{type:"text",control:P,label:"Browser",placeholder:"Browser",name:"description.browser",fullWidth:!0}),(0,g.jsx)(h.Z,{rows:4,type:"text",control:P,label:"Ticket Description",placeholder:"Ticket Description",name:"body",fullWidth:!0,rules:{required:"Description is required"}})]}),(0,g.jsx)("div",{className:"flex flex-col gap-y-5 py-5",children:(0,g.jsxs)("div",{className:" w-full flex flex-col  gap-y-5 ",children:[(0,g.jsx)(p.Z,{title:"Priority",fullWidth:!0,items:(0,f.S)(d.Bh),onChange:function(e){return A("priority",e)},selectedValue:null===v||void 0===v?void 0:v.priority}),N&&(0,g.jsx)(p.Z,{title:"Status",fullWidth:!0,items:(0,f.S)(d.mk),onChange:function(e){return A("status",e)},selectedValue:null===v||void 0===v?void 0:v.status}),N&&(0,g.jsx)(p.Z,{title:"Assigned Member",fullWidth:!0,items:T,onChange:function(e){return A("assignedMemberId",e)},selectedValue:null===v||void 0===v?void 0:v.assignedMember}),(0,g.jsx)(p.Z,{title:"Occurrence",fullWidth:!0,items:(0,f.S)(d.vH),onChange:function(e){return A("description.occurrence",e)},selectedValue:null===v||void 0===v?void 0:v.description.occurrence}),(0,g.jsx)(p.Z,{title:"Severity",fullWidth:!0,items:(0,f.S)(d._8),onChange:function(e){return A("description.severity",e)},selectedValue:null===v||void 0===v?void 0:v.description.severity}),(0,g.jsx)(p.Z,{title:"Nature",fullWidth:!0,items:(0,f.S)(d.$p),onChange:function(e){return A("description.nature",e)},selectedValue:null===v||void 0===v?void 0:v.description.nature})]})})]}),(0,g.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:h-[200px]",children:[(0,g.jsx)("div",{className:"h-auto border-x-2 px-5 py-5 border-x-white text-white bg-slate-500 bg-opacity-50 flex-auto",children:(0,g.jsx)(m.Z,{control:P,name:"file"})}),(0,g.jsx)("div",{className:"flex flex-row h-full w-full border-x-2 px-5 border-x-white text-white bg-slate-500 bg-opacity-50",children:(0,g.jsx)("div",{className:" mx-auto flex items-center justify-center",children:z?(0,g.jsx)("img",{className:" object-auto w-auto object-center max-h-[200px]",src:z.preview,alt:"preview"}):(0,g.jsx)("img",{className:" object-auto w-auto object-center max-h-[200px]",src:null===v||void 0===v?void 0:v.description.photo,alt:null===v||void 0===v?void 0:v.subject})})})]}),(0,g.jsxs)("div",{className:"flex flex-row gap-x-0 mx-auto w-full justify-center lg:justify-end py-5",children:[(0,g.jsx)("input",{className:"cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",value:"Cancel",onClick:a}),(0,g.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:N?"Update Ticket":"Create Ticket"})]})]})]})})}},732:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(885),r=n(7845),s=n(2791),a=n(184),i="relative border-x-2 border-x-slate-200 bg-slate-200",c="pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",o="flex flex-row items-center justify-between w-full gap-x-5 text-2xl",u="text-2xl text-gray-400",d="w-8 h-8 ml-2 text-inherit",f="absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",x="py-5 list-none flex flex-col gap-y-2 font-Montserrat",p="font-Montserrat text-left text-black text-lg font-thin cursor-pointer";function m(e){var t=e.title,n=e.items,m=e.fullWidth,h=void 0!==m&&m,b=e.onChange,g=e.selectedValue,j=(0,s.useState)(!1),w=(0,l.Z)(j,2),v=w[0],y=w[1],N=(0,s.useState)(null),k=(0,l.Z)(N,2),Z=k[0],S=k[1];(0,s.useEffect)((function(){if(g&&null==Z){var e=n.find((function(e){return e.name===g}));S(e||null)}}),[n,Z,g]);return(0,a.jsxs)("div",{className:"\n    ".concat(h?"w-full":"max-w-sm w-full","\n    ").concat(g?"border-x-white":"border-x-red-500","  \n    ").concat(i),children:[(0,a.jsxs)("button",{type:"button",className:c,onClick:function(){return y((function(e){return!e}))},children:[Z?(0,a.jsxs)("p",{className:o,children:[(0,a.jsxs)("span",{className:"text-gray-500 opacity-50  capitalize ",children:[t," "]}),(0,a.jsx)("span",{className:"uppercase text-inherit",children:Z.name})]}):(0,a.jsx)("p",{className:u,children:t}),(0,a.jsx)(r.Z,{className:d})]}),(0,a.jsx)("div",{className:"".concat(v?"block ":"hidden","  ").concat(f),id:"dropdown",children:(0,a.jsx)("ul",{className:x,"aria-labelledby":"dropdown",children:n.map((function(e){return(0,a.jsx)("li",{value:e.value,onClick:function(){return function(e){S(e),b(e.value),y(!1)}(e)},className:p,children:e.name},e.value)}))})})]})}},2397:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(184);function r(e){var t=e.title,n=e.value,r=e.fallbackValue,s=void 0===r?"Unavailable":r,a=e.isCol,i=void 0!==a&&a;return(0,l.jsxs)("p",{className:"".concat(i?"flex-col items-start":"flex-row items-center"," flex w-full justify-between font-Montserrat border-b border-b-inherit"),children:[(0,l.jsx)("span",{className:"text-xl uppercase font-Oswald font-thin min-w-[7rem] text-gray-500",children:t}),n?(0,l.jsx)("span",{className:"text-lg first-letter:capitalize",children:n}):(0,l.jsx)("span",{className:"text-base uppercase font-thin text-gray-500",children:s})]})}},4949:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(1413),r=n(1134),s=n(184),a="border-x-2 border-x-slate-200 h-full bg-slate-200 flex flex-col lg:flex-row items-center",i="font-Montserrat resize-none font-thin text-base lg:text-xl text-inherit placeholder:text-gray-500 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-full block bg-transparent focus-within:outline-none",c="h-auto font-Oswald text-xl leading-none w-full font-thin px-5 py-5 lg:py-0 text-gray-200";function o(e){var t=(0,r.bc)((0,l.Z)((0,l.Z)({},e),{},{defaultValue:""})),n=t.fieldState,o=t.field;return(0,s.jsxs)("div",{className:"\n      ".concat(e.fullWidth?"w-full":"w-full max-w-sm","\n      ").concat(n.error?"border-x-red-500":"border-x-white","  \n      ").concat(a),children:[(0,s.jsx)("textarea",(0,l.Z)((0,l.Z)({className:i,"aria-label":e.label,type:e.type},e),o)),n.error&&(0,s.jsx)("p",{className:c,children:n.error.message})]})}},2990:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(1413),r=n(1134),s=n(184),a=" border-x-2 border-x-slate-200 bg-slate-200 flex flex-row items-center ",i=" font-Montserrat font-thin text-base lg:text-xl text-inherit placeholder:capitalize placeholder:text-gray-500  placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-auto block bg-transparent focus-within:outline-none",c=" h-auto font-Oswald text-xl leading-none w-full text-left font-thin px-5 py-0 text-gray-200 ";function o(e){var t=(0,r.bc)((0,l.Z)((0,l.Z)({},e),{},{defaultValue:""})),n=t.fieldState,o=t.field;return(0,s.jsxs)("div",{className:" ".concat(e.fullWidth?"w-full":"w-full max-w-sm "," ").concat(n.error?"border-r-red-500":"border-x-white "," ").concat(a),children:[(0,s.jsx)("input",(0,l.Z)((0,l.Z)({className:"".concat(i," autofill:bg-yellow-200 "),"aria-label":e.label,type:e.type},e),o)),n.error&&(0,s.jsx)("p",{className:c,children:n.error.message})]})}},3460:function(e,t,n){var l,r,s,a,i;n.d(t,{vH:function(){return l},mk:function(){return r},Bh:function(){return s},_8:function(){return a},$p:function(){return i}}),function(e){e[e.Persistent=0]="Persistent",e[e.Frequent=1]="Frequent",e[e.Random=2]="Random",e[e.Rare=3]="Rare"}(l||(l={})),function(e){e[e.New=0]="New",e[e.Assigned=1]="Assigned",e[e.Open=2]="Open",e[e.Fixed=3]="Fixed",e[e.Pending=4]="Pending",e[e.Retest=5]="Retest",e[e.Verified=6]="Verified",e[e.Reopen=7]="Reopen",e[e.Closed=8]="Closed",e[e.Duplicate=9]="Duplicate",e[e.Rejected=10]="Rejected",e[e.Deferred=11]="Deferred",e[e.NotBug=12]="NotBug"}(r||(r={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Urgent=3]="Urgent"}(s||(s={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Critical=3]="Critical"}(a||(a={})),function(e){e[e.Functional=0]="Functional",e[e.Performance=1]="Performance",e[e.Usability=2]="Usability",e[e.Compatibility=3]="Compatibility",e[e.Security=4]="Security"}(i||(i={}))},7584:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(885),r=n(6437),s=n(870),a=n(2791),i=n(6871),c=n(260),o=n(5861),u=n(7757),d=n.n(u),f=n(1134),x=n(4949),p=n(184);function m(e){var t=e.ticketId,n=(0,f.cI)({mode:"all"}),l=n.control,r=n.reset,s=n.handleSubmit;function a(){return(a=(0,o.Z)(d().mark((function e(n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.Z.Comments.create(t,n).then((function(){})).catch((function(e){return console.log(e)})).finally((function(){return r({body:""})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,p.jsxs)("form",{onSubmit:s((function(e){return a.apply(this,arguments)})),className:"flex flex-col lg:flex-row px-5 lg:px-0",children:[(0,p.jsx)(x.Z,{rows:4,fullWidth:!0,control:l,label:"comment",placeholder:"post a comment",name:"body",rules:{required:"Comment cant be empty"}}),(0,p.jsx)("input",{className:"cursor-pointer bg-slate-400 text-white py-5 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:"Post"})]})}function h(e){var t=e.commentsCount;return(0,p.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between w-full",children:[(0,p.jsx)("p",{className:" font-Oswald font-thin uppercase text-3xl",children:"Comments"}),(0,p.jsx)("p",{className:" font-Oswald text-lg uppercase font-thin text-gray-400",children:t<=0?"No Comments":1===t?"1 Comment":"".concat(t," comments")})]})}var b=n(1943);function g(e){var t=e.comment;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"flex flex-row justify-between w-full items-center border-b border-gray-400 mb-3",children:[(0,p.jsx)("p",{className:" font-Oswald font-thin text-xl leading-loose",children:t.author}),(0,p.jsx)("p",{className:" font-Montserrat text-sm  text-gray-700",children:(0,b.Z)(new Date(t.creationDate),new Date,{addSuffix:!0})})]}),(0,p.jsx)("p",{className:" font-Montserrat text-sm lg:text-lg lg:min-w-[12rem] w-full whitespace-pre-line",children:t.body})]})}function j(e){var t=e.comments;return(0,p.jsx)("ul",{className:"flex flex-col gap-y-5 h-auto px-5",children:t.map((function(e,t){return(0,p.jsx)("li",{className:"w-full  overflow-auto bg-gray-100 drop-shadow-md lg:px-10 px-5 lg:rounded-sm h-auto py-3  flex flex-col justify-start items-start",children:(0,p.jsx)(g,{comment:e})},t)}))})}function w(e){var t=e.comments,n=e.ticketId;return(0,p.jsxs)("div",{className:"h-full flex flex-col gap-y-5",children:[(0,p.jsx)("div",{className:"flex-initial px-5 lg:px-0",children:(0,p.jsx)(h,{commentsCount:t.length})}),(0,p.jsx)("div",{className:" overflow-y-scroll overflow-x-hidden flex-auto h-full py-5 max-h-[60vh]",children:(0,p.jsx)(j,{comments:t})}),(0,p.jsx)("div",{className:" flex-initial py-5",children:(0,p.jsx)(m,{ticketId:n})})]})}var v=n(6823),y=n(9158);function N(e){var t=e.ticket;return(0,p.jsxs)("div",{className:"flex flex-col gap-y-5 h-full",children:[(0,p.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between lg:items-end border-b-2 border-black pb-1 flex-initial",children:[(0,p.jsx)("p",{className:" font-Oswald text-4xl",children:t.project}),(0,p.jsxs)("p",{className:" font-Oswald text-lg uppercase font-thin",children:["Ticket #",t.id]})]}),(0,p.jsxs)("div",{className:"w-full flex-initial",children:[(0,p.jsx)("p",{className:" font-Oswald leading-loose font-thin text-xl  uppercase",children:"Subject"}),(0,p.jsx)("p",{className:" font-Montserrat text-lg pb-3",children:t.subject})]}),(0,p.jsxs)("div",{className:"w-full flex-auto",children:[(0,p.jsx)("p",{className:" font-Oswald leading-loose font-thin text-xl  uppercase",children:"Description"}),(0,p.jsx)("p",{className:"font-Montserrat text-base",children:t.body})]}),(0,p.jsx)("div",{className:"pt-5 flex flex-col fla",children:(0,p.jsxs)("p",{className:" font-Oswald uppercase text-gray-600 pt-3 text-right font-thin flex flex-row gap-x-2 justify-end",children:[(0,p.jsx)("span",{children:"Posted the"}),(0,p.jsx)("span",{children:(0,y.Z)(new Date(t.creationDate),"EE dd MMM yy")}),(0,p.jsx)("span",{children:"by"}),(0,p.jsx)("span",{children:t.author})]})})]})}var k=n(2397);function Z(e){var t,n=e.ticket;return(0,p.jsxs)("div",{className:"flex flex-col gap-y-3 border-b-black",children:[(0,p.jsx)(k.Z,{title:"Priority",value:n.priority}),(0,p.jsx)(k.Z,{title:"Status",value:n.status}),(0,p.jsx)(k.Z,{title:"Related Phase",value:null===(t=n.phase)||void 0===t?void 0:t.title,fallbackValue:"undefined"}),n.description&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(k.Z,{title:"Occurrence",value:n.description.occurrence}),(0,p.jsx)(k.Z,{title:"Nature",value:n.description.nature}),(0,p.jsx)(k.Z,{title:"Severity",value:n.description.severity})]}),(0,p.jsx)(k.Z,{title:"Assigned member",value:n.assignedMember,fallbackValue:"Unassigned"}),(0,p.jsxs)("div",{className:"py-2 border-b-black flex flex-col gap-y-3",children:[(0,p.jsx)(k.Z,{title:"Operating system",value:n.description.operatingSystem,isCol:!0}),(0,p.jsx)(k.Z,{title:"Browser version",value:n.description.browser,isCol:!0})]}),(0,p.jsxs)("div",{className:" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ",children:[(0,p.jsx)("p",{className:"text-lg uppercase font-Oswald font-thin min-w-[7rem]",children:"Screenshot"}),n.description.photo?(0,p.jsx)("button",{className:"text-lg uppercase font-Oswald font-thin",children:"View"}):(0,p.jsx)("p",{className:"text-base uppercase font-thin text-gray-500",children:"Unavailable"})]})]})}var S=n(1746),C=n(1413);function O(){var e=(0,a.useState)(null),t=(0,l.Z)(e,2),n=t[0],r=t[1],s=(0,a.useState)([]),i=(0,l.Z)(s,2),o=i[0],u=i[1],d=(0,a.useState)(!1),f=(0,l.Z)(d,2),x=f[0],p=f[1],m=(0,a.useState)({pageNumber:1,pageSize:10}),h=(0,l.Z)(m,2),b=h[0],g=h[1],j=(0,a.useState)(null),w=(0,l.Z)(j,2),v=w[0],y=w[1];var N=(0,a.useCallback)((function(e){var t=function(e){var t=new URLSearchParams;return t.append("pageNumber",e.pageNumber.toString()),t.append("pageSize",e.pageSize.toString()),t}(b);c.Z.Tickets.listComments(e,t).then((function(e){y(e.metaData),u(e.items),p(!0)})).catch((function(e){return console.log(e)}))}),[b]);return(0,a.useEffect)((function(){!x&&n&&N(n)}),[x,N,n]),{comments:o,commentsLoaded:x,metaData:v,setParams:function(e){g((0,C.Z)({},e)),p(!1)},setTicketId:r,setCommentsLoaded:p}}var M=n(6474);function I(){var e=(0,i.UO)().id,t=(0,a.useState)(null),n=(0,l.Z)(t,2),o=n[0],u=n[1],d=(0,a.useState)(!1),f=(0,l.Z)(d,2),x=f[0],m=f[1],h=(0,a.useState)(!1),b=(0,l.Z)(h,2),g=b[0],j=b[1],y=(0,M.CG)((function(e){return e.ticket})).status,k=O(),C=k.comments,I=k.setTicketId,T=(0,a.useState)(!1),D=(0,l.Z)(T,2),V=D[0],P=D[1],R=(0,a.useState)(!1),W=(0,l.Z)(R,2),U=W[0],E=W[1],L=(0,i.s0)(),z=(0,a.useCallback)((function(e){j(!0),c.Z.Tickets.details(e).then((function(e){u(e),m(!0)})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))}),[]);(0,a.useEffect)((function(){!e||x||g||(j(!0),z(parseInt(e)))}),[e,z,x,g]),(0,a.useEffect)((function(){return o&&I(o.id),function(){I(null)}}),[I,o]);return y.includes("pending")?(0,p.jsx)(v.Z,{message:"Loading ticket..."}):o?U?(0,p.jsx)("div",{className:"h-screen w-screen bg-slate-100 flex items-center justify-center",children:(0,p.jsxs)("div",{className:"bg-white h-auto max-w-lg w-full p-5 lg:p-10 rounded-lg drop-shadow-md",children:[(0,p.jsx)("p",{className:" font-Oswald text-2xl uppercase font-thin border-b-2 border-b-red-500",children:"Attention"}),(0,p.jsx)("p",{className:" font-Montserrat text-lg py-5",children:"This Ticket will be deleted permanently, do you want to proceed?"}),(0,p.jsxs)("div",{className:"flex flex-row gap-x-5 mx-auto w-full justify-center lg:justify-end ",children:[(0,p.jsx)("button",{className:"cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",onClick:function(){return E(!1)},children:"No"}),(0,p.jsx)("button",{className:"cursor-pointer bg-red-600 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",onClick:function(){return function(e){c.Z.Tickets.delete(e).then((function(){E(!1),L("/projects")}))}(o.id)},children:"Yes"})]})]})}):(0,p.jsx)("div",{className:" w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20",children:V?(0,p.jsx)(S.Z,{projectId:o.projectId,ticketId:o.id,onClose:function(){z(o.id),P(!1)}}):(0,p.jsxs)("div",{className:"container mx-auto flex flex-col gap-y-5 py-10",children:[(0,p.jsxs)("div",{className:"px-5 flex flex-row justify-end items-start gap-x-5 py-3",children:[(0,p.jsxs)("button",{className:"flex flex-row gap-x-2 items-center",onClick:function(){return P(!0)},children:[(0,p.jsx)(r.Z,{className:"h-6 w-6"}),(0,p.jsx)("p",{className:" font-Oswald text-lg font-thin uppercase",children:"Edit"})]}),(0,p.jsxs)("button",{className:"flex flex-row gap-x-2 items-center",onClick:function(){return E(!0)},children:[(0,p.jsx)(s.Z,{className:"h-6 w-6 text-red-600"}),(0,p.jsx)("p",{className:" font-Oswald text-lg font-thin uppercase",children:"Delete"})]})]}),(0,p.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[(0,p.jsx)("div",{className:"relative w-full h-full p-10 bg-white text-black drop-shadow-md",children:(0,p.jsx)(N,{ticket:o})}),(0,p.jsx)("div",{className:" w-full h-auto p-10 bg-white text-black drop-shadow-md",children:(0,p.jsx)(Z,{ticket:o})})]}),(0,p.jsx)("div",{className:" w-full py-10 lg:p-10 bg-white text-black drop-shadow-md h-auto",children:(0,p.jsx)(w,{ticketId:o.id,comments:C})})]})}):(0,p.jsx)("div",{children:"not found"})}},3705:function(e,t,n){n.d(t,{S:function(){return r}});var l=n(885);function r(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var s=(0,l.Z)(r[n],2),a=s[0],i=s[1];Number.isNaN(Number(a))&&t.push({name:a,value:i})}return t}}}]);
//# sourceMappingURL=584.449f179c.chunk.js.map