"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[350],{2397:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184);function a(e){var t=e.title,n=e.value,a=e.fallbackValue,s=void 0===a?"Unavailable":a,l=e.isCol,i=void 0!==l&&l;return(0,r.jsxs)("p",{className:"".concat(i?"flex-col items-start":"flex-row items-center"," flex w-full justify-between font-Montserrat border-b border-b-inherit"),children:[(0,r.jsx)("span",{className:"text-xl uppercase font-Oswald font-thin min-w-[7rem]",children:t}),n?(0,r.jsx)("span",{className:"text-lg first-letter:capitalize",children:n}):(0,r.jsx)("span",{className:"text-base uppercase font-thin text-gray-500",children:s})]})}},4949:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),a=n(1134),s=n(184),l="border-x-2 border-x-slate-200 h-full bg-slate-500 flex flex-row items-center",i="font-Montserrat resize-none font-thin text-2xl text-white placeholder:text-gray-300 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-full block bg-transparent focus-within:outline-none",o="h-auto font-Oswald text-lg leading-none w-full font-thin px-5 py-0 text-gray-600";function c(e){var t=(0,a.bc)((0,r.Z)((0,r.Z)({},e),{},{defaultValue:""})),n=t.fieldState,c=t.field;return(0,s.jsxs)("div",{className:"\n      ".concat(e.fullWidth?"w-full":"w-full max-w-sm","\n      ").concat(n.error?"border-x-red-500":"border-x-white","  \n      ").concat(l),children:[(0,s.jsx)("textarea",(0,r.Z)((0,r.Z)({className:i,"aria-label":e.label,type:e.type},e),c)),n.error&&(0,s.jsx)("p",{className:o,children:n.error.message})]})}},6350:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(885),a=n(2791),s=n(6871),l=n(260),i=n(1134),o=n(4949),c=n(184);function u(){var e=(0,i.cI)({mode:"all"}),t=e.control,n=e.handleSubmit;return(0,c.jsxs)("form",{onSubmit:n((function(e){})),className:"flex flex-row",children:[(0,c.jsx)(o.Z,{rows:4,fullWidth:!0,control:t,label:"search",placeholder:"post a comment",name:"searchTerm"}),(0,c.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:"Post"})]})}function f(e){var t=e.commentsCount,n=void 0===t?52:t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:" font-Oswald uppercase text-2xl",children:"Comments"}),(0,c.jsx)("p",{className:" font-Oswald text-lg uppercase font-thin",children:n<=0?"No Comments":1===n?"1 Comment":"".concat(n," comments")})]})}var d=n(8527),x=n(4522);function m(e,t){(0,x.Z)(2,arguments);var n=(0,d.Z)(e),r=(0,d.Z)(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function h(e,t){(0,x.Z)(2,arguments);var n=(0,d.Z)(e),r=(0,d.Z)(t),a=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return 12*a+s}function p(e){(0,x.Z)(1,arguments);var t=(0,d.Z)(e);return t.setHours(23,59,59,999),t}function b(e){(0,x.Z)(1,arguments);var t=(0,d.Z)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function v(e){(0,x.Z)(1,arguments);var t=(0,d.Z)(e);return p(t).getTime()===b(t).getTime()}function j(e,t){(0,x.Z)(2,arguments);var n,r=(0,d.Z)(e),a=(0,d.Z)(t),s=m(r,a),l=Math.abs(h(r,a));if(l<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*l);var i=m(r,a)===-s;v((0,d.Z)(e))&&1===l&&1===m(e,a)&&(i=!1),n=s*(l-Number(i))}return 0===n?0:n}function g(e,t){return(0,x.Z)(2,arguments),(0,d.Z)(e).getTime()-(0,d.Z)(t).getTime()}var w={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function y(e){return e?w[e]:w.trunc}function Z(e,t,n){(0,x.Z)(2,arguments);var r=g(e,t)/1e3;return y(null===n||void 0===n?void 0:n.roundingMethod)(r)}var N=n(6704);function M(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var D=n(4697),k=1440,O=43200;function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,x.Z)(2,arguments);var r=n.locale||N.Z;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=m(e,t);if(isNaN(a))throw new RangeError("Invalid time value");var s,l,i=M(n);i.addSuffix=Boolean(n.addSuffix),i.comparison=a,a>0?(s=(0,d.Z)(t),l=(0,d.Z)(e)):(s=(0,d.Z)(e),l=(0,d.Z)(t));var o,c=Z(l,s),u=((0,D.Z)(l)-(0,D.Z)(s))/1e3,f=Math.round((c-u)/60);if(f<2)return n.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,i):c<10?r.formatDistance("lessThanXSeconds",10,i):c<20?r.formatDistance("lessThanXSeconds",20,i):c<40?r.formatDistance("halfAMinute",null,i):c<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):0===f?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",f,i);if(f<45)return r.formatDistance("xMinutes",f,i);if(f<90)return r.formatDistance("aboutXHours",1,i);if(f<k){var h=Math.round(f/60);return r.formatDistance("aboutXHours",h,i)}if(f<2520)return r.formatDistance("xDays",1,i);if(f<O){var p=Math.round(f/k);return r.formatDistance("xDays",p,i)}if(f<86400)return o=Math.round(f/O),r.formatDistance("aboutXMonths",o,i);if((o=j(l,s))<12){var b=Math.round(f/O);return r.formatDistance("xMonths",b,i)}var v=o%12,g=Math.floor(o/12);return v<3?r.formatDistance("aboutXYears",g,i):v<9?r.formatDistance("overXYears",g,i):r.formatDistance("almostXYears",g+1,i)}function T(e){e.comment;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex flex-row justify-between w-full items-center border-b border-gray-500 mb-3",children:[(0,c.jsx)("p",{className:" font-Oswald font-thin text-lg leading-loose",children:"Bob Bobbity"}),(0,c.jsx)("p",{className:" font-Montserrat text-xs  text-gray-700",children:S(new Date("02-12-2022"),new Date,{addSuffix:!0})})]}),(0,c.jsx)("p",{className:" font-Montserrat min-w-[12rem]",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora distinctio minima incidunt praesentium perspiciatis aspernatur. Quia repellat molestiae quaerat maiores! At animi beatae quas?"}),(0,c.jsx)("p",{className:" font-Montserrat",children:"Lorem ipsum dolor sit amet consectetur."})]})}function X(e){var t=e.comments;return(0,c.jsx)("ul",{className:"flex flex-col gap-y-2 pr-5",children:t.map((function(e,t){return(0,c.jsx)("li",{className:"w-full bg-slate-100 px-10 rounded-md h-auto py-5  flex flex-col justify-start items-start",children:(0,c.jsx)(T,{comment:e})},t)}))})}function C(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-row justify-between items-end border-b-2 border-black pb-1 flex-initial",children:(0,c.jsx)(f,{})}),(0,c.jsx)("div",{className:"flex-auto overflow-y-scroll overflow-x-hidden py-5 my-5 ",children:(0,c.jsx)(X,{comments:Array.from(Array(52).keys())})}),(0,c.jsx)(u,{})]})}var F=n(6823),Y=n(9158);function E(e){var t=e.ticket;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex flex-row justify-between items-end border-b-2 border-black pb-1",children:[(0,c.jsx)("p",{className:" font-Oswald text-4xl",children:t.project}),(0,c.jsxs)("p",{className:" font-Oswald text-lg uppercase font-thin",children:["Ticket #",t.id]})]}),(0,c.jsxs)("div",{className:"pt-5",children:[(0,c.jsx)("p",{className:" font-Oswald leading-normal font-thin text-base  uppercase",children:"Subject"}),(0,c.jsx)("p",{className:" font-Montserrat text-lg pb-3",children:t.subject}),(0,c.jsx)("p",{className:" font-Oswald leading-normal font-thin  uppercase",children:"Description"}),(0,c.jsx)("p",{className:" font-Montserrat text-base",children:t.body}),(0,c.jsxs)("p",{className:" font-Oswald uppercase text-gray-600 pt-3 text-right font-thin flex flex-row gap-x-2 justify-end",children:[(0,c.jsx)("span",{children:"Posted the"}),(0,c.jsx)("span",{children:(0,Y.Z)(new Date(t.creationDate),"EE dd MMM yy")}),(0,c.jsx)("span",{children:"by"}),(0,c.jsx)("span",{children:t.author})]})]})]})}var A=n(2397);function P(e){var t,n=e.ticket;return(0,c.jsxs)("div",{className:"flex flex-col gap-y-3 border-b-black",children:[(0,c.jsx)(A.Z,{title:"Priority",value:n.priority}),(0,c.jsx)(A.Z,{title:"Status",value:n.status}),(0,c.jsx)(A.Z,{title:"Related Phase",value:null===(t=n.phase)||void 0===t?void 0:t.title,fallbackValue:"undefined"}),n.description&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A.Z,{title:"Occurrence",value:n.description.occurrence}),(0,c.jsx)(A.Z,{title:"Nature",value:n.description.nature}),(0,c.jsx)(A.Z,{title:"Severity",value:n.description.severity})]}),(0,c.jsx)(A.Z,{title:"Assigned member",value:n.assignedMember,fallbackValue:"Unassigned"}),(0,c.jsxs)("div",{className:"py-2 border-b-black flex flex-col gap-y-3",children:[(0,c.jsx)(A.Z,{title:"Operating system",value:n.description.operatingSystem,isCol:!0}),(0,c.jsx)(A.Z,{title:"Browser version",value:n.description.browser,isCol:!0})]}),(0,c.jsxs)("div",{className:" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ",children:[(0,c.jsx)("p",{className:"text-lg uppercase font-Oswald font-thin min-w-[7rem]",children:"Screenshot"}),n.description.photo?(0,c.jsx)("button",{className:"text-lg uppercase font-Oswald font-thin",children:"View"}):(0,c.jsx)("p",{className:"text-base uppercase font-thin text-gray-500",children:"Unavailable"})]})]})}var V=n(6474);function B(){var e=(0,s.UO)().id,t=((0,V.TL)(),(0,a.useState)(null)),n=(0,r.Z)(t,2),i=n[0],o=n[1],u=(0,a.useState)(!1),f=(0,r.Z)(u,2),d=f[0],x=f[1],m=(0,a.useState)(!1),h=(0,r.Z)(m,2),p=h[0],b=h[1],v=(0,V.CG)((function(e){return e.ticket})).status;return(0,a.useEffect)((function(){!e||d||p||(b(!0),l.Z.Tickets.details(parseInt(e)).then((function(e){o(e),x(!0),console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){return b(!1)})))}),[e,d,p,i]),v.includes("pending")?(0,c.jsx)(F.Z,{message:"Loading ticket..."}):i?(0,c.jsxs)("div",{className:" min-h-screen w-full h-screen  bg-slate-600 pb-10 pt-16 flex flex-row items-center ",children:[(0,c.jsxs)("div",{className:"w-1/3 h-full flex-initial px-10 py-5 flex flex-col gap-y-5",children:[(0,c.jsx)("div",{className:" bg-slate-300 rounded-md overflow-hidden px-10 py-10",children:(0,c.jsx)(E,{ticket:i})}),(0,c.jsx)("div",{className:" bg-slate-300 rounded-md overflow-hidden px-10 py-10",children:(0,c.jsx)(P,{ticket:i})})]}),(0,c.jsx)("div",{className:"w-2/3 relative h-full flex-auto px-10 py-5 flex flex-col gap-y-5",children:(0,c.jsx)("div",{className:" bg-slate-300 flex-auto rounded-md overflow-hidden px-10 py-5 flex flex-col ",children:(0,c.jsx)(C,{})})})]}):(0,c.jsx)("div",{children:"not found"})}}}]);
//# sourceMappingURL=350.06c8b718.chunk.js.map