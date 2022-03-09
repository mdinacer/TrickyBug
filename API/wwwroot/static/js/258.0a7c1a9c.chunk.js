"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[258],{2258:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var s=n(885),r=n(2791),l=n(3504),i=n(260),c=n(1413),a=n(5861),o=n(7757),u=n.n(o),d=n(1134),f=n(3453),x=n(6474),p=n(4949),h=n(2990),m=n(184);function j(e){var t=e.projectId,n=e.action,s=e.onClose,l=!!n,o=(0,x.CG)((function(e){return f.Hx.selectById(e,t)})),j=(0,d.cI)({mode:"all"}),b=j.control,w=j.handleSubmit,v=j.reset;function y(){return(y=(0,a.Z)(u().mark((function e(r){var a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,c.Z)((0,c.Z)({},r),{},{projectId:t}),t){e.next=3;break}return e.abrupt("return");case 3:if(o=n&&(n.title!==a.title||n.description!==a.description),e.prev=4,!l||!o){e.next=8;break}return e.next=8,i.Z.Actions.update((0,c.Z)((0,c.Z)({},a),{},{id:n.id}));case 8:if(l){e.next=11;break}return e.next=11,i.Z.Actions.create(t,a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,s(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})))).apply(this,arguments)}return(0,r.useEffect)((function(){if(n){var e={title:n.title,description:n.description};v(e,{keepTouched:!0})}}),[n,v]),(0,m.jsx)("div",{className:"fixed top-0 left-0 h-screen w-screen bg-slate-600 z-[5] px-5 lg:px-0 flex items-center justify-center py-20",children:(0,m.jsx)("div",{className:" max-w-xl w-full text-white",children:(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex flex-row justify-between border-b border-b-white py-1 items-end ",children:[(0,m.jsx)("p",{className:"font-Oswald text-5xl uppercase",children:l?"Edit Action":"New Action"}),(0,m.jsx)("p",{className:"font-Oswald text-xl uppercase font-thin",children:null===o||void 0===o?void 0:o.title})]}),(0,m.jsxs)("form",{className:"py-5 flex flex-col gap-y-5",onSubmit:w((function(e){return y.apply(this,arguments)})),children:[(0,m.jsx)(h.Z,{name:"title",placeholder:"Title",label:"Title",fullWidth:!0,control:b,rules:{required:"Title is required"}}),(0,m.jsx)(p.Z,{name:"description",placeholder:"Description",label:"Description",fullWidth:!0,rows:4,control:b,rules:{required:"Description is required"}}),(0,m.jsxs)("div",{className:"flex flex-row gap-x-2 mx-auto w-full justify-end py-5",children:[(0,m.jsx)("input",{className:"cursor-pointer border-slate-500 border-2 text-slate-300 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",value:"Cancel",onClick:s}),(0,m.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:l?"Update Action":"Create Action"})]})]})]})})})}var b=(0,r.lazy)((function(){return Promise.all([n.e(158),n.e(673)]).then(n.bind(n,2673))}));function w(e){var t=e.projectId,n=e.projectSlug,c=e.isPermitted,a=(0,r.useState)([]),o=(0,s.Z)(a,2),u=o[0],d=o[1],f=(0,r.useState)(!1),x=(0,s.Z)(f,2),p=x[0],h=x[1],w=(0,r.useState)(null),v=(0,s.Z)(w,2),y=v[0],N=v[1],g=(0,r.useState)(!1),Z=(0,s.Z)(g,2),k=Z[0],A=Z[1],C=(0,r.useCallback)((function(){i.Z.Projects.listRecentActions(t).then((function(e){d(e)})).catch((function(e){return console.log(e)})).finally((function(){return h(!1)}))}),[t]);(0,r.useEffect)((function(){return t&&!p&&C(),function(){d([])}}),[C,p,t]);return k&&t?(0,m.jsx)(j,{projectId:t,onClose:function(){C(),y&&N(null),A(!1)},action:y}):(0,m.jsxs)("div",{className:"relative pb-5 h-full flex flex-col bg-slate-200 lg:rounded-md overflow-hidden",children:[(0,m.jsxs)("div",{className:"flex-initial bg-slate-700 px-10 text-white  py-2 flex flex-row items-center justify-between",children:[(0,m.jsx)("p",{className:"font-Oswald text-xl uppercase ",children:"Recent Actions"}),(0,m.jsxs)("div",{className:"flex flex-row gap-x-5",children:[c&&(0,m.jsx)("button",{onClick:function(){return A(!0)},className:"text-Montserrat text-sm uppercase underline underline-offset-2",type:"button",children:"Add"}),(0,m.jsx)(l.rU,{className:"text-Montserrat text-sm uppercase underline underline-offset-2",to:"/projects/".concat(n,"/actions/"),children:"view all"})]})]}),(0,m.jsx)("div",{className:"px-10",children:u.length>0?(0,m.jsx)(b,{onActionSelected:function(e){N(e),A(!0)},actions:u}):(0,m.jsx)("div",{className:"h-40 w-full flex items-center justify-center",children:(0,m.jsx)("p",{className:"font-Montserrat text-xl text-gray-400",children:"EMPTY"})})})]})}}}]);
//# sourceMappingURL=258.0a7c1a9c.chunk.js.map