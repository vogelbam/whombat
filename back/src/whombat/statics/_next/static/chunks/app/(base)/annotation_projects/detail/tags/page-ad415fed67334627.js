(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7415],{28515:function(t,e,s){Promise.resolve().then(s.bind(s,40751))},40751:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}});var i=s(14357),n=s(32091),a=s(6439),r=s(24070),o=s(56793),l=s(2561),u=s(95754);function c(){let t=(0,a.useContext)(u.Sr);return null==t?(0,n.notFound)():(0,i.jsxs)("div",{className:"p-4 flex flex-col gap-4",children:[(0,i.jsxs)(r.H3,{children:[(0,i.jsx)(o.Dg,{className:"h-5 w-5 align-middle inline-block mr-2"}),"Project Tags"]}),(0,i.jsxs)("p",{className:"text-stone-500",children:[(0,i.jsx)("span",{className:"text-emerald-500 font-bold",children:"Tags"})," are used to provide meaning to the annotations. Here you can see which tags are available for this project, or add more if needed."]}),(0,i.jsx)(l.Z,{project:t})]})}},95754:function(t,e,s){"use strict";s.d(e,{GT:function(){return r},M8:function(){return u},Sr:function(){return o},St:function(){return a},vZ:function(){return l}});var i=s(6439),n=s(1799);let a=(0,i.createContext)({user:{id:"null",username:"anonymous",email:"",name:"anonymous",is_active:!1,is_superuser:!1}}),r=(0,i.createContext)({recording_id:-1}),o=(0,i.createContext)({id:-1,name:"",description:"",tags:[],created_at:new Date,uuid:""}),l=(0,i.createContext)({dataset:null,isLoading:!0}),u=(0,i.createContext)({evaluationSet:{id:-1,name:"",description:"",tags:[],uuid:"",mode:n.kU.CLIP_CLASSIFICATION,created_at:new Date}})},24070:function(t,e,s){"use strict";s.d(e,{H1:function(){return r},H3:function(){return o},H4:function(){return l}});var i=s(14357),n=s(5374),a=s.n(n);function r(t){let{children:e,className:s,...n}=t;return(0,i.jsx)("h1",{className:a()("text-2xl font-bold text-stone-900 dark:text-stone-200",s),...n,children:e})}function o(t){let{children:e,className:s,...n}=t;return(0,i.jsx)("h3",{className:a()("text-lg font-semibold leading-7 items-center text-stone-900 dark:text-stone-200",s),...n,children:e})}function l(t){let{children:e,className:s,...n}=t;return(0,i.jsx)("h4",{className:a()("text-md font-semibold leading-6 text-stone-900 dark:text-stone-200",s),...n,children:e})}},17971:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}});var i=s(14357),n=s(5374),a=s.n(n);function r(t){let{title:e,className:s,children:n}=t;return(0,i.jsxs)("div",{className:a()(s,"flex items-center p-3 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"),role:"alert",children:[(0,i.jsx)("svg",{className:"flex-shrink-0 inline w-4 h-4 mr-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})}),(0,i.jsx)("span",{className:"sr-only",children:"Info"}),(0,i.jsxs)("div",{children:[null!=e," ",n]})]})}},2561:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=s(14357),n=s(52315),a=s(27862),r=s(17971),o=s(70565),l=s(69708),u=s(28217);function c(t){var e,s,c,h;let{project:d}=t,m=(0,n.Z)(t=>t.getTagColor),p=(0,a.Z)({annotation_project_id:d.id});return(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-y-4 gap-x-14",children:[(0,i.jsxs)("div",{className:"md:col-span-1 col-span-2",children:[(0,i.jsx)("small",{className:"text-stone-500",children:"Use the search bar below to look for tags that you want to use in the project. Select a tag to add it to the project."}),(0,i.jsx)("div",{className:"py-2",children:(0,i.jsx)(l.Z,{autoFocus:!1,onSelect:t=>{p.addTag.mutate(t.id)}})}),(0,i.jsx)("small",{className:"text-stone-500",children:"You can create any new tags you do not find, but try to avoid creating two tags with the same meaning."}),(0,i.jsx)(r.Z,{className:"mt-4",children:"You can always add more tags in the future."})]}),(0,i.jsxs)("div",{className:"flex flex-col col-span-2 md:col-span-1 gap-2",children:[(0,i.jsx)("h3",{className:"text-lg font-bold",children:"Selected tags"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"text-blue-500 font-bold",children:(null!==(c=null===(e=p.query.data)||void 0===e?void 0:e.tags)&&void 0!==c?c:[]).length.toLocaleString()})," ","tags selected for the project. These tags will be available for annotators to use."]}),(0,i.jsx)("small",{className:"text-stone-500",children:"Use the search bar to look for registered tags. Click on a tag to remove it."}),(0,i.jsx)("div",{children:(0,i.jsx)(u.Z,{options:null!==(h=null===(s=p.query.data)||void 0===s?void 0:s.tags)&&void 0!==h?h:[],fields:["key","value"],limit:6,renderOption:t=>(0,i.jsx)(o.ZP,{tag:t,...m(t),onClose:()=>{p.removeTag.mutate(t.id)}},t.id)})})]})]})}},27862:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var i=s(30646),n=s(72007),a=s(62976),r=s(81361);function o(t){let{annotation_project_id:e,onUpdate:s,onDelete:o,onAddTag:l,onRemoveTag:u,onAddClips:c}=t,h=(0,i.NL)(),d=(0,n.a)(["annotation_project",e],()=>r.Z.annotation_projects.get(e)),m=(0,a.D)({mutationFn:async t=>await r.Z.annotation_projects.update(e,t),onSuccess:t=>{null==s||s(t),d.refetch()}}),p=(0,a.D)({mutationFn:async t=>await r.Z.annotation_projects.addTag(e,t),onSuccess:t=>{null==l||l(t),d.refetch()}}),v=(0,a.D)({mutationFn:async t=>await r.Z.annotation_projects.removeTag(e,t),onSuccess:t=>{null==u||u(t),d.refetch()}}),f=(0,a.D)({mutationFn:async()=>await r.Z.annotation_projects.delete(e),onSuccess:t=>null==o?void 0:o(t)}),x=(0,a.D)({mutationFn:async t=>{let s=await r.Z.clips.createMany(t);return await r.Z.tasks.createMany(s.map(t=>({project_id:e,clip_id:t.id})))},onSuccess:t=>{null==c||c(t),h.invalidateQueries(["tasks"])}});return{query:d,update:m,addTag:p,addClips:x,removeTag:v,delete:f}}},32091:function(t,e,s){t.exports=s(2810)},84802:function(t,e,s){"use strict";var i=s(6439);let n=i.forwardRef(function({title:t,titleId:e,...s},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":e},s),t?i.createElement("title",{id:e},t):null,i.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))});e.Z=n},45433:function(t,e,s){"use strict";s.d(e,{_:function(){return i}});let i=console},39451:function(t,e,s){"use strict";s.d(e,{R:function(){return l},m:function(){return o}});var i=s(45433),n=s(41537),a=s(82263),r=s(77827);class o extends a.F{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||i._,this.observers=[],this.state=t.state||l(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,s,i,n,a,o,l,u,c,h,d,m,p,v,f,x,b,g,y;let w="loading"===this.state.status;try{if(!w){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(u=(c=this.mutationCache.config).onMutate)?void 0:u.call(c,this.state.variables,this));let t=await (null==(h=(d=this.options).onMutate)?void 0:h.call(d,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let m=await (()=>{var t;return this.retryer=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,m,this.state.variables,this.state.context,this)),await (null==(s=(i=this.options).onSuccess)?void 0:s.call(i,m,this.state.variables,this.state.context)),await (null==(n=(a=this.mutationCache.config).onSettled)?void 0:n.call(a,m,null,this.state.variables,this.state.context,this)),await (null==(o=(l=this.options).onSettled)?void 0:o.call(l,m,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:m}),m}catch(t){try{throw await (null==(m=(p=this.mutationCache.config).onError)?void 0:m.call(p,t,this.state.variables,this.state.context,this)),await (null==(v=(f=this.options).onError)?void 0:v.call(f,t,this.state.variables,this.state.context)),await (null==(x=(b=this.mutationCache.config).onSettled)?void 0:x.call(b,void 0,t,this.state.variables,this.state.context,this)),await (null==(g=(y=this.options).onSettled)?void 0:g.call(y,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,r.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function l(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},82263:function(t,e,s){"use strict";s.d(e,{F:function(){return n}});var i=s(23288);class n{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:i.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},62976:function(t,e,s){"use strict";s.d(e,{D:function(){return d}});var i=s(6439),n=s(23288),a=s(39451),r=s(41537),o=s(85206);class l extends o.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let s=this.options;this.options=this.client.defaultMutationOptions(t),(0,n.VS)(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,a.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){r.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,s,i,n,a,r,o,l;t.onSuccess?(null==(e=(s=this.mutateOptions).onSuccess)||e.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(n=this.mutateOptions).onSettled)||i.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(a=(r=this.mutateOptions).onError)||a.call(r,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(o=(l=this.mutateOptions).onSettled)||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}}var u=s(38440),c=s(30646),h=s(51549);function d(t,e,s){let a=(0,n.lV)(t,e,s),o=(0,c.NL)({context:a.context}),[d]=i.useState(()=>new l(o,a));i.useEffect(()=>{d.setOptions(a)},[d,a]);let p=(0,u.$)(i.useCallback(t=>d.subscribe(r.V.batchCalls(t)),[d]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),v=i.useCallback((t,e)=>{d.mutate(t,e).catch(m)},[d]);if(p.error&&(0,h.L)(d.options.useErrorBoundary,[p.error]))throw p.error;return{...p,mutate:v,mutateAsync:p.mutate}}function m(){}}},function(t){t.O(0,[6949,3372,4564,243,2007,1651,9530,422,2172,1361,9803,8525,8702,7431,1744],function(){return t(t.s=28515)}),_N_E=t.O()}]);