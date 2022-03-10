"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[38],{3038:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var l=s(885),n=s(2791),r=s(3504),a=s(260),i=s(1413),c=s(5861),o=s(7757),u=s.n(o),f=s(1134),d=s(3453),p=s(6474),x=s(4949),h=s(2990),j=s(184);function m(e){var t=e.projectId,s=e.phase,l=e.onClose,r=!!s,o=(0,p.CG)((function(e){return d.Hx.selectById(e,t)})),m=(0,f.cI)({mode:"all"}),w=m.control,b=m.handleSubmit,v=m.reset;function y(){return(y=(0,c.Z)(u().mark((function e(n){var c,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(0,i.Z)((0,i.Z)({},n),{},{projectId:t}),t){e.next=3;break}return e.abrupt("return");case 3:if(o=s&&(s.title!==c.title||s.description!==c.description),e.prev=4,!r||!o){e.next=8;break}return e.next=8,a.Z.Phases.update((0,i.Z)((0,i.Z)({},c),{},{id:s.id}));case 8:if(r){e.next=11;break}return e.next=11,a.Z.Phases.create(t,c);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,l(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})))).apply(this,arguments)}return(0,n.useEffect)((function(){if(s){var e={title:s.title,description:s.description};v(e,{keepTouched:!0})}}),[s,v]),(0,j.jsx)("div",{className:"absolute top-0 left-0 h-full w-full bg-slate-600 z-[5] px-5 lg:px-0 flex items-center justify-center py-20",children:(0,j.jsx)("div",{className:" max-w-xl w-full text-white",children:(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"flex flex-row justify-between border-b border-b-white py-1 items-end ",children:[(0,j.jsx)("p",{className:"font-Oswald text-5xl uppercase",children:r?"Edit Phase":"New Phase"}),(0,j.jsx)("p",{className:"font-Oswald text-xl uppercase font-thin",children:null===o||void 0===o?void 0:o.title})]}),(0,j.jsxs)("form",{className:"py-5 flex flex-col gap-y-5",onSubmit:b((function(e){return y.apply(this,arguments)})),children:[(0,j.jsx)(h.Z,{name:"title",placeholder:"Title",label:"Title",fullWidth:!0,control:w,rules:{required:"Title is required"}}),(0,j.jsx)(x.Z,{name:"description",placeholder:"Description",label:"Description",fullWidth:!0,rows:4,control:w,rules:{required:"Description is required"}}),(0,j.jsxs)("div",{className:"flex flex-row gap-x-2 mx-auto w-full justify-end py-5",children:[(0,j.jsx)("input",{className:"cursor-pointer border-slate-500 border-2 text-slate-300 py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"button",value:"Cancel",onClick:l}),(0,j.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:r?"Update Phase":"Create Phase"})]})]})]})})})}var w=(0,n.lazy)((function(){return Promise.all([s.e(158),s.e(810)]).then(s.bind(s,9810))}));function b(e){var t=e.projectId,s=e.projectSlug,i=e.isPermitted,c=(0,n.useState)([]),o=(0,l.Z)(c,2),u=o[0],f=o[1],d=(0,n.useState)(null),p=(0,l.Z)(d,2),x=p[0],h=p[1],b=(0,n.useState)(!1),v=(0,l.Z)(b,2),y=v[0],N=v[1],g=(0,n.useState)(!1),P=(0,l.Z)(g,2),Z=P[0],k=P[1],C=(0,n.useCallback)((function(){a.Z.Projects.listRecentPhases(t).then((function(e){f(e)})).catch((function(e){return console.log(e)})).finally((function(){return N(!1)}))}),[t]);(0,n.useEffect)((function(){return t&&!y&&C(),function(){f([])}}),[C,y,t]);return Z&&t?(0,j.jsx)("div",{className:"fixed z-10 top-0 left-0 w-full h-auto",children:(0,j.jsx)(m,{projectId:t,onClose:function(){C(),x&&h(null),k(!1)},phase:x})}):(0,j.jsxs)("div",{className:"relative h-full flex flex-col overflow-hidden",children:[(0,j.jsxs)("div",{className:"flex-initial flex flex-col lg:flex-row lg:items-end justify-between px-5 lg:px-0",children:[(0,j.jsx)("p",{className:"font-Oswald text-3xl font-thin uppercase leading-loose",children:"Recent Phases"}),(0,j.jsxs)("div",{className:"flex flex-row items-end gap-x-2 self-start",children:[i&&(0,j.jsx)("button",{onClick:function(){return k(!0)},className:"px-2 py-1 bg-slate-600 text-white",type:"button",children:(0,j.jsx)("p",{className:"font-Oswald text-lg font-thin uppercase",children:"Add Phase"})}),(0,j.jsx)(r.rU,{className:"px-2 py-1 bg-slate-600 text-white",to:"/projects/".concat(s,"/phases/"),children:(0,j.jsx)("p",{className:"font-Oswald text-lg font-thin uppercase",children:"View Phases"})})]})]}),(0,j.jsx)("div",{className:"flex-auto h-full w-full px-5",children:u.length>0?(0,j.jsx)(w,{phases:u,onPhaseSelected:function(e){h(e),k(!0)}}):(0,j.jsx)("div",{className:"h-40 w-full flex items-center justify-center",children:(0,j.jsx)("p",{className:"font-Montserrat text-xl text-gray-400",children:"EMPTY"})})})]})}}}]);
//# sourceMappingURL=38.970d51d6.chunk.js.map