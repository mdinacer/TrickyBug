"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[957],{5888:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(2982),l=n(885),a=n(2791),i=n(1134),o=n(3504),s=n(3460),c=n(2390),u=n(6474),d=n(3705),f=n(8819),x=n(2990),m=n(184);function p(e){e.params;var t=e.setParams,n=(0,u.TL)(),p=(0,o.lr)(),h=(0,l.Z)(p,1)[0],w=h.get("startDate"),b=h.get("endDate"),g=(0,i.cI)({mode:"all"}),v=g.control,y=g.handleSubmit;return(0,a.useEffect)((function(){(w||b)&&t({startDate:w,endDate:b})}),[b,t,w]),(0,m.jsxs)("div",{className:"w-full flex flex-row  justify-around items-center  py-5",children:[(0,m.jsxs)("form",{onSubmit:y((function(e){n((0,c.D2)(e))})),className:"flex flex-row",children:[(0,m.jsx)(x.Z,{control:v,label:"search",placeholder:"search",name:"searchTerm"}),(0,m.jsx)("input",{className:"cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin",type:"submit",value:"Search"})]}),(0,m.jsx)(f.Z,{title:"Status",selectedValue:"All",onChange:function(e){return t({status:"-1"===e?null:e})},items:[{name:"All",value:"-1"}].concat((0,r.Z)((0,d.S)(s.mk)))}),(0,m.jsx)(f.Z,{title:"Priority",selectedValue:"All",onChange:function(e){return t({priority:"-1"===e?null:e})},items:[{name:"All",value:"-1"}].concat((0,r.Z)((0,d.S)(s.Bh)))})]})}},8819:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(885),l=n(2791);var a=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))})),i=n(184),o="relative border-x-2 border-x-slate-200 bg-slate-500",s="pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",c="flex flex-row items-center justify-between w-full gap-x-5 text-2xl",u="text-2xl text-gray-300",d="w-8 h-8 ml-2 text-white",f="absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",x="py-5 list-none flex flex-col gap-y-2 font-Montserrat",m="font-Montserrat text-left text-black text-lg font-thin cursor-pointer";function p(e){var t=e.title,n=e.items,p=e.fullWidth,h=void 0!==p&&p,w=e.onChange,b=e.selectedValue,g=(0,l.useState)(!1),v=(0,r.Z)(g,2),y=v[0],j=v[1],N=(0,l.useState)(null),Z=(0,r.Z)(N,2),C=Z[0],R=Z[1];(0,l.useEffect)((function(){if(b&&null==C){var e=n.find((function(e){return e.name===b}));R(e||null)}}),[n,C,b]);return(0,i.jsxs)("div",{className:"\n    ".concat(h?"w-full":"max-w-sm w-full","\n    ").concat(b?"border-x-white":"border-x-red-500","  \n    ").concat(o),children:[(0,i.jsxs)("button",{type:"button",className:s,onClick:function(){return j((function(e){return!e}))},children:[C?(0,i.jsxs)("p",{className:c,children:[(0,i.jsxs)("span",{className:"text-gray-300 opacity-50  capitalize ",children:[t," "]}),(0,i.jsx)("span",{className:"uppercase text-white",children:C.name})]}):(0,i.jsx)("p",{className:u,children:t}),(0,i.jsx)(a,{className:d})]}),(0,i.jsx)("div",{className:"".concat(y?"block ":"hidden","  ").concat(f),id:"dropdown",children:(0,i.jsx)("ul",{className:x,"aria-labelledby":"dropdown",children:n.map((function(e){return(0,i.jsx)("li",{value:e.value,onClick:function(){return function(e){R(e),w(e.value),j(!1)}(e)},className:m,children:e.name},e.value)}))})})]})}},2990:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),l=n(1134),a=n(184),i=" border-x-2 border-x-slate-200 bg-slate-500 flex flex-row items-center ",o=" font-Montserrat font-thin text-2xl text-white placeholder:capitalize placeholder:text-gray-300 placeholder:opacity-50 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-auto block bg-transparent focus-within:outline-none ",s=" h-auto font-Oswald text-xl leading-none w-full text-center font-thin px-5 py-0 text-red-200 ";function c(e){var t=(0,l.bc)((0,r.Z)((0,r.Z)({},e),{},{defaultValue:""})),n=t.fieldState,c=t.field;return(0,a.jsxs)("div",{className:" ".concat(e.fullWidth?"w-full":"w-full max-w-sm"," ").concat(n.error?"border-r-red-500":"border-x-white"," ").concat(i),children:[(0,a.jsx)("input",(0,r.Z)((0,r.Z)({className:o,"aria-label":e.label,type:e.type},e),c)),n.error&&(0,a.jsx)("p",{className:s,children:n.error.message})]})}},3460:function(e,t,n){var r,l,a,i,o;n.d(t,{vH:function(){return r},mk:function(){return l},Bh:function(){return a},_8:function(){return i},$p:function(){return o}}),function(e){e[e.Persistent=0]="Persistent",e[e.Frequent=1]="Frequent",e[e.Random=2]="Random",e[e.Rare=3]="Rare"}(r||(r={})),function(e){e[e.New=0]="New",e[e.Assigned=1]="Assigned",e[e.Open=2]="Open",e[e.Fixed=3]="Fixed",e[e.Pending=4]="Pending",e[e.Retest=5]="Retest",e[e.Verified=6]="Verified",e[e.Reopen=7]="Reopen",e[e.Closed=8]="Closed",e[e.Duplicate=9]="Duplicate",e[e.Rejected=10]="Rejected",e[e.Deferred=11]="Deferred",e[e.NotBug=12]="NotBug"}(l||(l={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Urgent=3]="Urgent"}(a||(a={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e[e.Critical=3]="Critical"}(i||(i={})),function(e){e[e.Functional=0]="Functional",e[e.Performance=1]="Performance",e[e.Usability=2]="Usability",e[e.Compatibility=3]="Compatibility",e[e.Security=4]="Security"}(o||(o={}))},3705:function(e,t,n){n.d(t,{S:function(){return l}});var r=n(885);function l(e){for(var t=[],n=0,l=Object.entries(e);n<l.length;n++){var a=(0,r.Z)(l[n],2),i=a[0],o=a[1];Number.isNaN(Number(i))&&t.push({name:i,value:o})}return t}}}]);
//# sourceMappingURL=957.cd97d759.chunk.js.map