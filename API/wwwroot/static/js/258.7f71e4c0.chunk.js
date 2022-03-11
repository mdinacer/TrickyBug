"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[258],{2258:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(885),l=n(2791),i=n(3504),r=n(260),c=n(1413),a=n(5861),o=n(7757),u=n.n(o),d=n(1134),x=n(3453),p=n(6474),f=n(4949),h=n(2990),m=n(184);function j(e){var t=e.projectId,n=e.action,s=e.onClose,i=!!n,o=(0,p.CG)((function(e){return x.Hx.selectById(e,t)})),j=(0,d.cI)({mode:"all"}),w=j.control,b=j.handleSubmit,v=j.reset;function y(){return(y=(0,a.Z)(u().mark((function e(l){var a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,c.Z)((0,c.Z)({},l),{},{projectId:t}),t){e.next=3;break}return e.abrupt("return");case 3:if(o=n&&(n.title!==a.title||n.description!==a.description),e.prev=4,!i||!o){e.next=8;break}return e.next=8,r.Z.Actions.update((0,c.Z)((0,c.Z)({},a),{},{id:n.id}));case 8:if(i){e.next=11;break}return e.next=11,r.Z.Actions.create(t,a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,s(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})))).apply(this,arguments)}return(0,l.useEffect)((function(){if(n){var e={title:n.title,description:n.description};v(e,{keepTouched:!0})}}),[n,v]),(0,m.jsx)("div",{className:"px-5 lg:px-0 flex items-center justify-center",children:(0,m.jsx)("div",{className:" max-w-5xl w-full ",children:(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex flex-row justify-between border-b border-b-white py-1 items-end ",children:[(0,m.jsx)("p",{className:"font-Oswald text-5xl uppercase",children:i?"Edit Action":"New Action"}),(0,m.jsx)("p",{className:"font-Oswald text-xl uppercase font-thin",children:null===o||void 0===o?void 0:o.title})]}),(0,m.jsxs)("form",{className:"py-5 flex flex-col gap-y-5",onSubmit:b((function(e){return y.apply(this,arguments)})),children:[(0,m.jsx)(h.Z,{name:"title",placeholder:"Title",label:"Title",control:w,rules:{required:"Title is required"}}),(0,m.jsx)(f.Z,{name:"description",placeholder:"Description",label:"Description",rows:4,control:w,rules:{required:"Description is required"}}),(0,m.jsxs)("div",{className:"flex flex-row gap-x-2 mx-auto w-full justify-end py-5",children:[(0,m.jsx)("input",{className:"cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",value:"Cancel",onClick:s}),(0,m.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:i?"Update Action":"Create Action"})]})]})]})})})}var w=(0,l.lazy)((function(){return Promise.all([n.e(158),n.e(673)]).then(n.bind(n,2673))}));function b(e){var t=e.projectId,n=e.projectSlug,c=e.isPermitted,a=e.isMember,o=(0,l.useState)([]),u=(0,s.Z)(o,2),d=u[0],x=u[1],p=(0,l.useState)(!1),f=(0,s.Z)(p,2),h=f[0],b=f[1],v=(0,l.useState)(null),y=(0,s.Z)(v,2),N=y[0],g=y[1],Z=(0,l.useState)(!1),k=(0,s.Z)(Z,2),A=k[0],C=k[1],S=(0,l.useCallback)((function(){r.Z.Projects.listRecentActions(t).then((function(e){x(e)})).catch((function(e){return console.log(e)})).finally((function(){return b(!1)}))}),[t]);(0,l.useEffect)((function(){return t&&!h&&S(),function(){x([])}}),[S,h,t]);return(0,m.jsx)("div",{className:"relative h-full flex flex-col overflow-hidden",children:A?(0,m.jsx)("div",{className:"w-full h-full px-5 lg:px-0",children:(0,m.jsx)(j,{projectId:t,onClose:function(){S(),N&&g(null),C(!1)},action:N})}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex-initial flex flex-col lg:flex-row lg:items-end px-5 lg:px-0 justify-between",children:[(0,m.jsx)("p",{className:"font-Oswald text-3xl font-thin uppercase leading-loose",children:"Recent Actions"}),(0,m.jsxs)("div",{className:"flex flex-row items-end gap-x-2 self-start",children:[(c||a)&&(0,m.jsx)("button",{onClick:function(){return C(!0)},className:"px-2 py-1 bg-slate-600 text-white",type:"button",children:(0,m.jsx)("p",{className:"font-Oswald text-lg font-thin uppercase",children:"Add Actioin"})}),(0,m.jsx)(i.rU,{className:"px-2 py-1 bg-slate-600 text-white",to:"/projects/".concat(n,"/actions/"),children:(0,m.jsx)("p",{className:"font-Oswald text-lg font-thin uppercase",children:"View Actions"})})]})]}),(0,m.jsx)("div",{className:"px-5",children:d.length>0?(0,m.jsx)(w,{onActionSelected:function(e){g(e),C(!0)},actions:d,isPermitted:c}):(0,m.jsx)("div",{className:"h-40 w-full flex items-center justify-center",children:(0,m.jsx)("p",{className:"font-Montserrat text-xl text-gray-400",children:"EMPTY"})})})]})})}}}]);
//# sourceMappingURL=258.7f71e4c0.chunk.js.map