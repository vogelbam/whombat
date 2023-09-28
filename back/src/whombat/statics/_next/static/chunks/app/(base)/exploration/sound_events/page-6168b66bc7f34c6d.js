(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8092],{44968:function(e,t,n){Promise.resolve().then(n.bind(n,98298))},98298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var l=n(14357),o=n(89887),i=n.n(o),r=n(6439),a=n(17808),s=n(14706),u=n(56793),c=n(52315),d=n(16870);function f(e){let{annotations:t}=e,n=(0,c.Z)(e=>e.spectrogramSettings),[o,i]=(0,r.useState)(20);return(0,l.jsx)("div",{className:"grid grid-cols-6 gap-8 px-4",children:t.slice(0,o).map(e=>(0,l.jsx)(d.Z,{controls:!1,player:!1,className:"h-48",parameters:n,recording:{id:e.sound_event.recording_id,duration:1246.2825,samplerate:48e3,time_expansion:1,channels:1,hash:"",uuid:"",path:"",latitude:null,longitude:null,date:null,time:null,features:[],notes:[],tags:[],created_at:new Date},annotation:e},e.id))})}let m=i()(()=>Promise.all([n.e(6469),n.e(3180)]).then(n.bind(n,23180)),{loadableGenerated:{webpack:()=>[23180]},ssr:!1});function h(){let[e,t]=(0,r.useState)("list"),n=(0,a.Z)({pageSize:1e3});return(0,l.jsxs)("div",{className:"flex flex-col gap-4 p-2",children:[(0,l.jsx)("div",{className:"flex flex-row w-full justify-center gap-2",children:(0,l.jsx)(s.Z,{tabs:[{id:"list",title:"List",isActive:"list"===e,icon:(0,l.jsx)(u.DE,{className:"w-5 h-5"}),onClick:()=>t("list")},{id:"gallery",title:"Gallery",isActive:"gallery"===e,icon:(0,l.jsx)(u.zB,{className:"w-5 h-5"}),onClick:()=>t("gallery")},{id:"plot",title:"Scatterplot",isActive:"plot"===e,icon:(0,l.jsx)(u.E6,{className:"w-5 h-5"}),onClick:()=>t("plot")}]})}),"list"===e?(0,l.jsx)("div",{children:"list"}):"gallery"===e?(0,l.jsx)(f,{annotations:n.items}):(0,l.jsx)(m,{annotations:n.items})]})}},14706:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var l=n(14357),o=n(90111),i=n.n(o),r=n(5374),a=n.n(r);let s="whitespace-nowrap rounded-lg bg-stone-50 p-2 text-center text-sm font-medium dark:bg-stone-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/50",u="text-emerald-500",c="text-stone-700 hover:bg-stone-200 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-stone-300";function d(e){let{children:t,disabled:n,className:o,...i}=e;return(0,l.jsx)("button",{...i,disabled:n,className:a()(s,n?u:c,o),children:t})}function f(e){let{children:t,disabled:n,className:o,...r}=e;return(0,l.jsx)(i(),{...r,className:a()(s,n?u:c,o,"p-2 inline-block"),children:t})}function m(e){let{tabs:t}=e;return(0,l.jsx)("ul",{className:"flex space-x-4",children:t.map(e=>(0,l.jsx)("li",{children:null!=e.href?(0,l.jsxs)(f,{href:e.href,disabled:e.isActive,children:[e.icon?(0,l.jsx)("span",{className:"mr-1 inline-block align-middle",children:e.icon}):null,e.title]}):(0,l.jsxs)(d,{onClick:e.onClick,disabled:e.isActive,children:[e.icon?(0,l.jsx)("span",{className:"mr-1 inline-block align-middle",children:e.icon}):null,e.title]})},e.id))})}},16870:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var l=n(14357),o=n(6439),i=n(29837),r=n(33330),a=n(5374),s=n.n(a),u=n(89837),c=n(12021),d=n(87283),f=n(55766),m=n(23076),h=n(81063),g=n(17526),p=n(78877),v=n(99093);function x(e){var t;let{recording:n,annotation:a,parameters:x,controls:b=!0,player:y=!0,className:k}=e,S=(0,o.useRef)(null),Z=(0,m.Z)({ref:S}),{bounds:w,initial:A}=(0,o.useMemo)(()=>(function(e,t,n,l){let o=(0,u.fM)(e.sound_event.geometry),i=o[2]-o[0],r=(o[0]+o[2])/2,a=512*l,s=Math.max(Math.min(n,4*i),a),c=Math.min(r-Math.max(0,r-s/2),Math.min(n,r+s/2)-r),d=Math.min(c,a/2);return{bounds:{time:{min:r-c,max:r+c},freq:{min:0,max:t/2}},initial:{time:{min:r-d,max:r+d},freq:{min:0,max:t/2}}}})(a,n.samplerate,n.duration,null!==(t=x.hop_size)&&void 0!==t?t:.01),[n.samplerate,n.duration,a,x.hop_size]),[P,E]=(0,i.e)(c.nk,{context:{recording:n,bounds:w,initial:A,window:A,parameters:x}});(0,o.useEffect)(()=>{E({type:"UPDATE",bounds:w,initial:w})},[w,E]);let{draw:T}=(0,f.Z)({state:P,send:E,dragState:Z,ref:S}),j=(0,h.Z)({window:P.context.window,annotations:[a]}),C=(0,o.useCallback)(e=>{T(e),j(e)},[T,j]);if(null==P.context.audio)throw Error("Audio is not initialized");let[M,D]=(0,r.L)(P.context.audio);return(0,d.Z)({ref:S,draw:C}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:s()(k,"rounded-md overflow-hidden"),children:(0,l.jsx)("canvas",{ref:S,className:"w-full h-full"})}),b||y?(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[b?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.Z,{isDragging:P.matches("panning"),isZooming:P.matches("zooming"),onDrag:()=>E("PAN"),onZoom:()=>E("ZOOM"),onReset:()=>E("RESET")}),(0,l.jsx)(p.Z,{settings:P.context.parameters,onChange:(e,t)=>E({type:"SET_PARAMETER",key:e,value:t}),onClear:e=>E({type:"CLEAR_PARAMETER",key:e})})]}):null,y?(0,l.jsx)(g.Z,{samplerate:n.samplerate,currentTime:M.context.currentTime,startTime:M.context.startTime,endTime:M.context.endTime,speed:M.context.speed,loop:M.context.loop,playing:M.matches("playing"),play:()=>E("PLAY"),pause:()=>E("PAUSE"),seek:e=>D({type:"SEEK",time:e}),setSpeed:e=>D({type:"SET_SPEED",speed:e}),toggleLoop:()=>D({type:"TOGGLE_LOOP"})}):null]}):null]})}},55290:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var l=n(17010);let o={fillColor:"red",fillAlpha:1,radius:4};function i(e,t){var n,l,i,r;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if((null!==(n=a.fillAlpha)&&void 0!==n?n:1)!==0){let{coordinates:n}=t,[o,s]=n;e.fillStyle=null!==(l=a.fillColor)&&void 0!==l?l:"red",e.globalAlpha=null!==(i=a.fillAlpha)&&void 0!==i?i:1,e.beginPath(),e.arc(o,s,null!==(r=a.radius)&&void 0!==r?r:4,0,2*Math.PI,!0),e.fill()}}var r=n(82943),a=n(28775),s=n(12148),u=n(22794);function c(e,t,n){let{type:c}=t;switch(c){case"TimeStamp":(0,a.Z)(e,t.coordinates,n);break;case"TimeInterval":let[d,f]=t.coordinates;(0,s.Z)(e,{min:d,max:f},n);break;case"BoundingBox":(0,u.Z)(e,t.coordinates,n);break;case"Point":i(e,t,n);break;case"MultiPoint":!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,{coordinates:l}=t;l.forEach(t=>{i(e,{type:"Point",coordinates:t},n)})}(e,t,n);break;case"LineString":(0,l.s6)(e,t,n);break;case"MultiLineString":(0,l.F$)(e,t,n);break;case"Polygon":(0,r.is)(e,t,n);break;case"MultiPolygon":(0,r.$W)(e,t,n);break;default:console.error("Cannot draw unknown geometry type ".concat(c))}}},12148:function(e,t,n){"use strict";n.d(t,{X:function(){return o},Z:function(){return i}});var l=n(30291);let o={fillColor:"red",fillAlpha:.5,borderWidth:1,borderAlpha:1};function i(e,t){var n,i;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,{canvas:a}=e,{height:s}=a,{min:u,max:c}=t;(null!==(n=r.borderAlpha)&&void 0!==n?n:1)!==0&&((0,l.F6)(e,r),e.beginPath(),e.moveTo(u,0),e.lineTo(u,s),e.stroke(),e.beginPath(),e.moveTo(c,0),e.lineTo(c,s),e.stroke()),(null!==(i=r.fillAlpha)&&void 0!==i?i:.5)!==0&&((0,l.wi)(e,r),e.fillRect(u,0,c-u,s))}},17010:function(e,t,n){"use strict";n.d(t,{F$:function(){return r},s6:function(){return i}});var l=n(30291);let o={borderColor:"red",borderWidth:2,borderAlpha:1};function i(e,t){var n;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if((null!==(n=i.borderAlpha)&&void 0!==n?n:1)!==0){let{coordinates:n}=t;if(n.length<2)return;(0,l.F6)(e,i),e.beginPath();let[o,r]=n[0];e.moveTo(o,r),n.slice(1).forEach(t=>{let[n,l]=t;e.lineTo(n,l)}),e.stroke()}}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,{coordinates:l}=t;l.forEach(t=>{i(e,{type:"LineString",coordinates:t},n)})}},82943:function(e,t,n){"use strict";n.d(t,{$W:function(){return r},is:function(){return i}});let l={borderColor:"red",borderWidth:1,borderAlpha:1,fillAlpha:.5,fillColor:"red"};function o(e,t){if(t.length<2){console.error("Invalid linering. Needs at least two points");return}let[n,l]=t[0];e.moveTo(n,l),t.slice(1).forEach(t=>{let[n,l]=t;return e.lineTo(n,l)}),e.lineTo(n,l)}function i(e,t){var n,i,r,a,s,u;let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,{coordinates:d}=t;if(0===d.length){console.error("Polygon has no exterior ring");return}let f=d[0];if(f.length<2){console.error("Invalid exterior ring for polygon");return}let[m,h]=f[0];e.beginPath(),o(e,f),d.slice(1).forEach(t=>{if(t.length<2){console.error("Invalid interior ring for polygon");return}o(e,t),e.moveTo(m,h)}),e.closePath(),e.fillStyle=null!==(i=null!==(n=c.fillColor)&&void 0!==n?n:c.borderColor)&&void 0!==i?i:"red",e.globalAlpha=null!==(r=c.fillAlpha)&&void 0!==r?r:1,e.fill("evenodd"),e.strokeStyle=null!==(a=c.borderColor)&&void 0!==a?a:"red",e.lineWidth=null!==(s=c.borderWidth)&&void 0!==s?s:1,e.globalAlpha=null!==(u=c.borderAlpha)&&void 0!==u?u:1,c.borderDash&&e.setLineDash(c.borderDash),e.stroke()}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,{coordinates:o}=t;o.forEach(t=>{i(e,{type:"Polygon",coordinates:t},n)})}},81063:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(6439),o=n(89837),i=n(55290),r=n(30291);let a={borderColor:r.Vb,fillColor:r.Vb,borderWidth:2,fillAlpha:.1};function s(e){let{window:t,annotations:n}=e,r=(0,l.useCallback)(e=>{for(let l of n){let n=(0,o.w9)({width:e.canvas.width,height:e.canvas.height},l.sound_event.geometry,t);(0,i.Z)(e,n,a)}},[t,n]);return r}},17808:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var l=n(30646),o=n(62976),i=n(81361),r=n(11441),a=n(54313);let s={};function u(){let{filter:e=s,pageSize:t=100,onCreate:n,onDelete:u,onUpdate:c,onAddTag:d,onRemoveTag:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=(0,a.Z)({fixed:e}),h=(0,l.NL)(),{items:g,total:p,pagination:v,query:x,queryKey:b}=(0,r.Z)({name:"annotations",func:i.Z.annotations.getMany,pageSize:t,filter:m.filter}),y=(0,o.D)({mutationFn:e=>i.Z.annotations.create(e),onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,total:t.total+1,items:[e,...t.items]}),null==n||n(e)}}),k=(0,o.D)({mutationFn:e=>{let{annotation_id:t,data:n}=e;return i.Z.annotations.update(t,n)},onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==c||c(e)}}),S=(0,o.D)({mutationFn:e=>i.Z.annotations.delete(e),onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.filter(t=>t.id!==e.id)}),null==u||u(e)}}),Z=(0,o.D)({mutationFn:e=>{let{annotation_id:t,tag_id:n}=e;return i.Z.annotations.addTag(t,n)},onSuccess:e=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==d||d(e)}}),w=(0,o.D)({mutationFn:e=>{let{annotation_id:t,tag_id:n}=e;return i.Z.annotations.removeTag(t,n)},onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==f||f(e)}}),A=(0,o.D)({mutationFn:e=>{let{annotation_id:t,message:n,is_issue:l}=e;return i.Z.annotations.addNote(t,n,l)},onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==c||c(e)}}),P=(0,o.D)({mutationFn:e=>{let{annotation_id:t,note_id:n}=e;return i.Z.annotations.removeNote(t,n)},onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==c||c(e)}}),E=(0,o.D)({mutationFn:e=>{let{annotation_id:t,note_id:n,message:l,is_issue:o}=e;return i.Z.annotations.updateNote(t,n,l,o)},onSuccess:(e,t)=>{h.setQueryData(b,t=>null==t?t:{...t,items:t.items.map(t=>t.id===e.id?e:t)}),null==c||c(e)}});return{items:g,total:p,pagination:v,query:x,filter:m,create:y,update:k,delete:S,addTag:Z,removeTag:w,addNote:A,removeNote:P,updateNote:E}}},54313:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(6439),o=n(30485);function i(e){let{fixed:t,debounce:n=500}=e,[i,r]=(0,l.useState)(t),[a,s]=(0,l.useState)(t);(0,l.useEffect)(()=>{r(t),s(t)},[t]);let u=(0,l.useCallback)(e=>void 0!==t[e],[t]);(0,o.Z)(()=>{s(i)},n,[i]);let c=(0,l.useMemo)(()=>Object.keys(i).filter(e=>!u(e)).length,[i,u]);return{filter:a,set:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(!u(e)||n)&&r(n=>({...n,[e]:t}))},get:e=>i[e],clear:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(!u(e)||t)&&r(t=>{let n={...t};return delete n[e],s(n),n})},reset:()=>r(t),submit:()=>{s(i)},size:c,isFixed:u}}},11441:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(6439),o=n(72007);function i(e){var t,n;let{name:i,func:r,pageSize:a,filter:s,enabled:u=!0}=e,[c,d]=(0,l.useState)(0),[f,m]=(0,l.useState)(a),h=[i,c,f,s],g=(0,o.a)(h,()=>r({limit:f,offset:c*f,...s}),{keepPreviousData:!0,enabled:u,refetchOnWindowFocus:!1}),p=Math.ceil((null!==(n=null===(t=g.data)||void 0===t?void 0:t.total)&&void 0!==n?n:0)/f);(0,l.useEffect)(()=>{d(e=>e>=p&&p>0?p-1:e)},[p]);let{items:v,total:x}=(0,l.useMemo)(()=>null==g.data||g.isLoading?{items:[],total:0}:{items:g.data.items,total:g.data.total},[g.data,g.isLoading]);return{items:v,total:x,pagination:{page:c,numPages:p,pageSize:f,setPage:e=>{e>=0&&e<p&&d(e)},setPageSize:e=>{e>0&&m(t=>{var n,l,o,i;let r=Math.ceil((null!==(o=null===(n=g.data)||void 0===n?void 0:n.total)&&void 0!==o?o:0)/e),a=Math.min(c*t,null!==(i=null===(l=g.data)||void 0===l?void 0:l.total)&&void 0!==i?i:0);return d(Math.max(0,Math.min(Math.floor(a/e),r-1))),e})},nextPage:()=>{c<p-1&&d(c+1)},prevPage:()=>{c>0&&d(c-1)},hasNextPage:c<p-1,hasPrevPage:c>0},query:g,queryKey:h}}},52315:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}}),n(6439);var l=n(16148),o=n(85758);let i=e=>({user:null,login:t=>e({user:t}),logout:()=>e({user:null})}),r=e=>({clipboard:"",copy:t=>e({clipboard:t})}),a=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],s=[1,2,3,4,5,6],u=(e,t)=>({colors:{tags:{}},setTagColor:(t,n)=>{e(e=>({colors:{tags:{...e.colors.tags,[t.id]:n}}}))},getTagColor:n=>{let{tags:l}=t().colors;if(l[n.id])return l[n.id];{let t=a[Math.floor(Math.random()*a.length)],l=s[Math.floor(Math.random()*s.length)],o={color:t,level:l};return e(e=>({colors:{tags:{...e.colors.tags,[n.id]:o}}})),o}},clearTagColors:()=>{e(()=>({colors:{tags:{}}}))}});var c=n(9797);let d=e=>({spectrogramSettings:c._z,setSpectrogramSettings:t=>{e(e=>{let{spectrogramSettings:n}=e;return{...e,spectrogramSettings:{...n,...t}}})}}),f=(0,l.Ue)()((0,o.tJ)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...i(...t),...r(...t),...u(...t),...d(...t)}},{name:"whombat-storage",storage:(0,o.FL)(()=>localStorage)}));var m=f}},function(e){e.O(0,[6949,3372,4564,243,2007,1651,111,9530,422,8821,9077,2628,1361,9803,5980,8702,7431,1744],function(){return e(e.s=44968)}),_N_E=e.O()}]);