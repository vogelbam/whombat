(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1630],{32091:function(e,t,r){e.exports=r(2810)},41810:function(e,t,r){"use strict";r.d(t,{S1:function(){return a},ZT:function(){return n},jU:function(){return u},on:function(){return i}});var n=function(){};function i(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function a(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var u="undefined"!=typeof window},59483:function(e,t,r){"use strict";var n=r(6439),i=r(41810),a=n.useState;t.Z=function(e){var t,r,u=a(!1),o=u[0],s=u[1];return"function"==typeof e&&(e=e(o)),[n.cloneElement(e,{onMouseEnter:(t=e.props.onMouseEnter,function(e){(t||i.ZT)(e),s(!0)}),onMouseLeave:(r=e.props.onMouseLeave,function(e){(r||i.ZT)(e),s(!1)})}),o]}},35577:function(e,t,r){"use strict";r.d(t,{v:function(){return _}});var n,i,a,u=r(6439),o=r(45120),s=r(47702),l=r(2700),c=r(50814),d=r(64092),f=r(39809),h=r(65961),p=r(59573),v=r(6271),m=r(56851),y=r(42239),g=r(81835),b=r(16403),P=r(97558),S=r(31708),E=r(88484),I=r(68344),T=r(16267),M=r(3639),R=((n=R||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),O=((i=O||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),C=((a=C||{})[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a);function F(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,y.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return -1===i&&(i=null),{items:n,activeItemIndex:i}}let D={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var r;let n=F(e),i=(0,v.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),a=i?e.items.indexOf(i):-1;return -1===a||a===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=F(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=F(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},q=(0,u.createContext)(null);function x(e){let t=(0,u.useContext)(q);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}function w(e,t){return(0,o.E)(t.type,D,e,t)}q.displayName="MenuContext";let A=u.Fragment,k=s.AN.RenderStrategy|s.AN.Static,N=u.Fragment,_=Object.assign((0,s.yV)(function(e,t){let{__demoMode:r=!1,...n}=e,i=(0,u.useReducer)(w,{__demoMode:r,menuState:r?0:1,buttonRef:(0,u.createRef)(),itemsRef:(0,u.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},d]=i,h=(0,f.T)(t);(0,g.O)([c,l],(e,t)=>{var r;d({type:1}),(0,y.sP)(t,y.tJ.Loose)||(e.preventDefault(),null==(r=c.current)||r.focus())},0===a);let p=(0,I.z)(()=>{d({type:1})}),v=(0,u.useMemo)(()=>({open:0===a,close:p}),[a,p]);return u.createElement(q.Provider,{value:i},u.createElement(P.up,{value:(0,o.E)(a,{0:P.ZM.Open,1:P.ZM.Closed})},(0,s.sY)({ourProps:{ref:h},theirProps:n,slot:v,defaultTag:A,name:"Menu"})))}),{Button:(0,s.yV)(function(e,t){var r;let n=(0,h.M)(),{id:i=`headlessui-menu-button-${n}`,...a}=e,[o,l]=x("Menu.Button"),d=(0,f.T)(o.buttonRef,t),y=(0,c.G)(),g=(0,I.z)(e=>{switch(e.key){case p.R.Space:case p.R.Enter:case p.R.ArrowDown:e.preventDefault(),e.stopPropagation(),l({type:0}),y.nextFrame(()=>l({type:2,focus:v.T.First}));break;case p.R.ArrowUp:e.preventDefault(),e.stopPropagation(),l({type:0}),y.nextFrame(()=>l({type:2,focus:v.T.Last}))}}),b=(0,I.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),P=(0,I.z)(t=>{if((0,m.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(l({type:1}),y.nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),l({type:0})))}),E=(0,u.useMemo)(()=>({open:0===o.menuState}),[o]),T={ref:d,id:i,type:(0,S.f)(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=o.itemsRef.current)?void 0:r.id,"aria-expanded":0===o.menuState,onKeyDown:g,onKeyUp:b,onClick:P};return(0,s.sY)({ourProps:T,theirProps:a,slot:E,defaultTag:"button",name:"Menu.Button"})}),Items:(0,s.yV)(function(e,t){var r,n;let i=(0,h.M)(),{id:a=`headlessui-menu-items-${i}`,...o}=e,[d,m]=x("Menu.Items"),g=(0,f.T)(d.itemsRef,t),S=(0,E.i)(d.itemsRef),T=(0,c.G)(),M=(0,P.oJ)(),R=null!==M?(M&P.ZM.Open)===P.ZM.Open:0===d.menuState;(0,u.useEffect)(()=>{let e=d.itemsRef.current;e&&0===d.menuState&&e!==(null==S?void 0:S.activeElement)&&e.focus({preventScroll:!0})},[d.menuState,d.itemsRef,S]),(0,b.B)({container:d.itemsRef.current,enabled:0===d.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let O=(0,I.z)(e=>{var t,r;switch(T.dispose(),e.key){case p.R.Space:if(""!==d.searchQuery)return e.preventDefault(),e.stopPropagation(),m({type:3,value:e.key});case p.R.Enter:if(e.preventDefault(),e.stopPropagation(),m({type:1}),null!==d.activeItemIndex){let{dataRef:e}=d.items[d.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,y.wI)(d.buttonRef.current);break;case p.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:v.T.Next});case p.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:v.T.Previous});case p.R.Home:case p.R.PageUp:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:v.T.First});case p.R.End:case p.R.PageDown:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:v.T.Last});case p.R.Escape:e.preventDefault(),e.stopPropagation(),m({type:1}),(0,l.k)().nextFrame(()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case p.R.Tab:e.preventDefault(),e.stopPropagation(),m({type:1}),(0,l.k)().nextFrame(()=>{(0,y.EO)(d.buttonRef.current,e.shiftKey?y.TO.Previous:y.TO.Next)});break;default:1===e.key.length&&(m({type:3,value:e.key}),T.setTimeout(()=>m({type:4}),350))}}),C=(0,I.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),F=(0,u.useMemo)(()=>({open:0===d.menuState}),[d]),D={"aria-activedescendant":null===d.activeItemIndex||null==(r=d.items[d.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=d.buttonRef.current)?void 0:n.id,id:a,onKeyDown:O,onKeyUp:C,role:"menu",tabIndex:0,ref:g};return(0,s.sY)({ourProps:D,theirProps:o,slot:F,defaultTag:"div",features:k,visible:R,name:"Menu.Items"})}),Item:(0,s.yV)(function(e,t){let r=(0,h.M)(),{id:n=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=e,[o,c]=x("Menu.Item"),p=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===n,m=(0,u.useRef)(null),g=(0,f.T)(t,m);(0,d.e)(()=>{if(o.__demoMode||0!==o.menuState||!p||0===o.activationTrigger)return;let e=(0,l.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[o.__demoMode,m,p,o.menuState,o.activationTrigger,o.activeItemIndex]);let b=(0,M.x)(m),P=(0,u.useRef)({disabled:i,domRef:m,get textValue(){return b()}});(0,d.e)(()=>{P.current.disabled=i},[P,i]),(0,d.e)(()=>(c({type:5,id:n,dataRef:P}),()=>c({type:6,id:n})),[P,n]);let S=(0,I.z)(()=>{c({type:1})}),E=(0,I.z)(e=>{if(i)return e.preventDefault();c({type:1}),(0,y.wI)(o.buttonRef.current)}),R=(0,I.z)(()=>{if(i)return c({type:2,focus:v.T.Nothing});c({type:2,focus:v.T.Specific,id:n})}),O=(0,T.g)(),C=(0,I.z)(e=>O.update(e)),F=(0,I.z)(e=>{O.wasMoved(e)&&(i||p||c({type:2,focus:v.T.Specific,id:n,trigger:0}))}),D=(0,I.z)(e=>{O.wasMoved(e)&&(i||p&&c({type:2,focus:v.T.Nothing}))}),q=(0,u.useMemo)(()=>({active:p,disabled:i,close:S}),[p,i,S]);return(0,s.sY)({ourProps:{id:n,ref:g,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:E,onFocus:R,onPointerEnter:C,onMouseEnter:C,onPointerMove:F,onMouseMove:F,onPointerLeave:D,onMouseLeave:D},theirProps:a,slot:q,defaultTag:N,name:"Menu.Item"})})})},37301:function(e,t,r){"use strict";r.d(t,{J:function(){return K}});var n,i,a=r(6439),u=r(45120),o=r(47702),s=r(39809),l=r(65961),c=r(59573),d=r(56851),f=r(42239),h=r(97558),p=r(31708),v=r(81835),m=r(69099),y=r(88484),g=r(41203),b=r(57225),P=r(68344),S=r(59674),E=r(59410),I=r(64092),T=r(30170),M=r(49281),R=((n=R||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),O=((i=O||{})[i.TogglePopover=0]="TogglePopover",i[i.ClosePopover=1]="ClosePopover",i[i.SetButton=2]="SetButton",i[i.SetButtonId=3]="SetButtonId",i[i.SetPanel=4]="SetPanel",i[i.SetPanelId=5]="SetPanelId",i);let C={0:e=>{let t={...e,popoverState:(0,u.E)(e.popoverState,{0:1,1:0})};return 0===t.popoverState&&(t.__demoMode=!1),t},1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},F=(0,a.createContext)(null);function D(e){let t=(0,a.useContext)(F);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return t}F.displayName="PopoverContext";let q=(0,a.createContext)(null);function x(e){let t=(0,a.useContext)(q);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}q.displayName="PopoverAPIContext";let w=(0,a.createContext)(null);function A(){return(0,a.useContext)(w)}w.displayName="PopoverGroupContext";let k=(0,a.createContext)(null);function N(e,t){return(0,u.E)(t.type,C,e,t)}k.displayName="PopoverPanelContext";let _=o.AN.RenderStrategy|o.AN.Static,Q=o.AN.RenderStrategy|o.AN.Static,K=Object.assign((0,o.yV)(function(e,t){var r;let{__demoMode:n=!1,...i}=e,l=(0,a.useRef)(null),c=(0,s.T)(t,(0,s.h)(e=>{l.current=e})),d=(0,a.useRef)([]),p=(0,a.useReducer)(N,{__demoMode:n,popoverState:n?0:1,buttons:d,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,a.createRef)(),afterPanelSentinel:(0,a.createRef)()}),[{popoverState:m,button:b,buttonId:S,panel:I,panelId:R,beforePanelSentinel:O,afterPanelSentinel:C},D]=p,x=(0,y.i)(null!=(r=l.current)?r:b),w=(0,a.useMemo)(()=>{if(!b||!I)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(b))^Number(null==e?void 0:e.contains(I)))return!0;let e=(0,f.GO)(),t=e.indexOf(b),r=(t+e.length-1)%e.length,n=(t+1)%e.length,i=e[r],a=e[n];return!I.contains(i)&&!I.contains(a)},[b,I]),_=(0,E.E)(S),Q=(0,E.E)(R),K=(0,a.useMemo)(()=>({buttonId:_,panelId:Q,close:()=>D({type:1})}),[_,Q,D]),z=A(),L=null==z?void 0:z.registerPopover,B=(0,P.z)(()=>{var e;return null!=(e=null==z?void 0:z.isFocusWithinPopoverGroup())?e:(null==x?void 0:x.activeElement)&&((null==b?void 0:b.contains(x.activeElement))||(null==I?void 0:I.contains(x.activeElement)))});(0,a.useEffect)(()=>null==L?void 0:L(K),[L,K]);let[U,V]=(0,M.k)(),Z=(0,T.v)({mainTreeNodeRef:null==z?void 0:z.mainTreeNodeRef,portals:U,defaultContainers:[b,I]});(0,g.O)(null==x?void 0:x.defaultView,"focus",e=>{var t,r,n,i;e.target!==window&&e.target instanceof HTMLElement&&0===m&&(B()||b&&I&&(Z.contains(e.target)||null!=(r=null==(t=O.current)?void 0:t.contains)&&r.call(t,e.target)||null!=(i=null==(n=C.current)?void 0:n.contains)&&i.call(n,e.target)||D({type:1})))},!0),(0,v.O)(Z.resolveContainers,(e,t)=>{D({type:1}),(0,f.sP)(t,f.tJ.Loose)||(e.preventDefault(),null==b||b.focus())},0===m);let H=(0,P.z)(e=>{D({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:b:b;null==t||t.focus()}),j=(0,a.useMemo)(()=>({close:H,isPortalled:w}),[H,w]),G=(0,a.useMemo)(()=>({open:0===m,close:H}),[m,H]);return a.createElement(k.Provider,{value:null},a.createElement(F.Provider,{value:p},a.createElement(q.Provider,{value:j},a.createElement(h.up,{value:(0,u.E)(m,{0:h.ZM.Open,1:h.ZM.Closed})},a.createElement(V,null,(0,o.sY)({ourProps:{ref:c},theirProps:i,slot:G,defaultTag:"div",name:"Popover"}),a.createElement(Z.MainTreeNode,null))))))}),{Button:(0,o.yV)(function(e,t){let r=(0,l.M)(),{id:n=`headlessui-popover-button-${r}`,...i}=e,[h,v]=D("Popover.Button"),{isPortalled:m}=x("Popover.Button"),g=(0,a.useRef)(null),E=`headlessui-focus-sentinel-${(0,l.M)()}`,I=A(),T=null==I?void 0:I.closeOthers,M=null!==(0,a.useContext)(k);(0,a.useEffect)(()=>{if(!M)return v({type:3,buttonId:n}),()=>{v({type:3,buttonId:null})}},[M,n,v]);let[R]=(0,a.useState)(()=>Symbol()),O=(0,s.T)(g,t,M?null:e=>{if(e)h.buttons.current.push(R);else{let e=h.buttons.current.indexOf(R);-1!==e&&h.buttons.current.splice(e,1)}h.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&v({type:2,button:e})}),C=(0,s.T)(g,t),F=(0,y.i)(g),q=(0,P.z)(e=>{var t,r,n;if(M){if(1===h.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),v({type:1}),null==(n=h.button)||n.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===h.popoverState&&(null==T||T(h.buttonId)),v({type:0});break;case c.R.Escape:if(0!==h.popoverState)return null==T?void 0:T(h.buttonId);if(!g.current||null!=F&&F.activeElement&&!g.current.contains(F.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1})}}),w=(0,P.z)(e=>{M||e.key===c.R.Space&&e.preventDefault()}),N=(0,P.z)(t=>{var r,n;(0,d.P)(t.currentTarget)||e.disabled||(M?(v({type:1}),null==(r=h.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===h.popoverState&&(null==T||T(h.buttonId)),v({type:0}),null==(n=h.button)||n.focus()))}),_=(0,P.z)(e=>{e.preventDefault(),e.stopPropagation()}),Q=0===h.popoverState,K=(0,a.useMemo)(()=>({open:Q}),[Q]),z=(0,p.f)(e,g),L=M?{ref:C,type:z,onKeyDown:q,onClick:N}:{ref:O,id:h.buttonId,type:z,"aria-expanded":0===h.popoverState,"aria-controls":h.panel?h.panelId:void 0,onKeyDown:q,onKeyUp:w,onClick:N,onMouseDown:_},B=(0,S.l)(),U=(0,P.z)(()=>{let e=h.panel;e&&(0,u.E)(B.current,{[S.N.Forwards]:()=>(0,f.jA)(e,f.TO.First),[S.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})===f.fE.Error&&(0,f.jA)((0,f.GO)().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,u.E)(B.current,{[S.N.Forwards]:f.TO.Next,[S.N.Backwards]:f.TO.Previous}),{relativeTo:h.button})});return a.createElement(a.Fragment,null,(0,o.sY)({ourProps:L,theirProps:i,slot:K,defaultTag:"button",name:"Popover.Button"}),Q&&!M&&m&&a.createElement(b._,{id:E,features:b.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:U}))}),Overlay:(0,o.yV)(function(e,t){let r=(0,l.M)(),{id:n=`headlessui-popover-overlay-${r}`,...i}=e,[{popoverState:u},c]=D("Popover.Overlay"),f=(0,s.T)(t),p=(0,h.oJ)(),v=null!==p?(p&h.ZM.Open)===h.ZM.Open:0===u,m=(0,P.z)(e=>{if((0,d.P)(e.currentTarget))return e.preventDefault();c({type:1})}),y=(0,a.useMemo)(()=>({open:0===u}),[u]);return(0,o.sY)({ourProps:{ref:f,id:n,"aria-hidden":!0,onClick:m},theirProps:i,slot:y,defaultTag:"div",features:_,visible:v,name:"Popover.Overlay"})}),Panel:(0,o.yV)(function(e,t){let r=(0,l.M)(),{id:n=`headlessui-popover-panel-${r}`,focus:i=!1,...d}=e,[p,v]=D("Popover.Panel"),{close:m,isPortalled:g}=x("Popover.Panel"),E=`headlessui-focus-sentinel-before-${(0,l.M)()}`,T=`headlessui-focus-sentinel-after-${(0,l.M)()}`,M=(0,a.useRef)(null),R=(0,s.T)(M,t,e=>{v({type:4,panel:e})}),O=(0,y.i)(M);(0,I.e)(()=>(v({type:5,panelId:n}),()=>{v({type:5,panelId:null})}),[n,v]);let C=(0,h.oJ)(),F=null!==C?(C&h.ZM.Open)===h.ZM.Open:0===p.popoverState,q=(0,P.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==p.popoverState||!M.current||null!=O&&O.activeElement&&!M.current.contains(O.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1}),null==(t=p.button)||t.focus()}});(0,a.useEffect)(()=>{var t;e.static||1===p.popoverState&&(null==(t=e.unmount)||t)&&v({type:4,panel:null})},[p.popoverState,e.unmount,e.static,v]),(0,a.useEffect)(()=>{if(p.__demoMode||!i||0!==p.popoverState||!M.current)return;let e=null==O?void 0:O.activeElement;M.current.contains(e)||(0,f.jA)(M.current,f.TO.First)},[p.__demoMode,i,M,p.popoverState]);let w=(0,a.useMemo)(()=>({open:0===p.popoverState,close:m}),[p,m]),A={ref:R,id:n,onKeyDown:q,onBlur:i&&0===p.popoverState?e=>{var t,r,n,i,a;let u=e.relatedTarget;u&&M.current&&(null!=(t=M.current)&&t.contains(u)||(v({type:1}),(null!=(n=null==(r=p.beforePanelSentinel.current)?void 0:r.contains)&&n.call(r,u)||null!=(a=null==(i=p.afterPanelSentinel.current)?void 0:i.contains)&&a.call(i,u))&&u.focus({preventScroll:!0})))}:void 0,tabIndex:-1},N=(0,S.l)(),_=(0,P.z)(()=>{let e=M.current;e&&(0,u.E)(N.current,{[S.N.Forwards]:()=>{var t;(0,f.jA)(e,f.TO.First)===f.fE.Error&&(null==(t=p.afterPanelSentinel.current)||t.focus())},[S.N.Backwards]:()=>{var e;null==(e=p.button)||e.focus({preventScroll:!0})}})}),K=(0,P.z)(()=>{let e=M.current;e&&(0,u.E)(N.current,{[S.N.Forwards]:()=>{var e;if(!p.button)return;let t=(0,f.GO)(),r=t.indexOf(p.button),n=t.slice(0,r+1),i=[...t.slice(r+1),...n];for(let t of i.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=p.panel)&&e.contains(t)){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}(0,f.jA)(i,f.TO.First,{sorted:!1})},[S.N.Backwards]:()=>{var t;(0,f.jA)(e,f.TO.Previous)===f.fE.Error&&(null==(t=p.button)||t.focus())}})});return a.createElement(k.Provider,{value:n},F&&g&&a.createElement(b._,{id:E,ref:p.beforePanelSentinel,features:b.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}),(0,o.sY)({ourProps:A,theirProps:d,slot:w,defaultTag:"div",features:Q,visible:F,name:"Popover.Panel"}),F&&g&&a.createElement(b._,{id:T,ref:p.afterPanelSentinel,features:b.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:K}))}),Group:(0,o.yV)(function(e,t){let r=(0,a.useRef)(null),n=(0,s.T)(r,t),[i,u]=(0,a.useState)([]),l=(0,T.H)(),c=(0,P.z)(e=>{u(t=>{let r=t.indexOf(e);if(-1!==r){let e=t.slice();return e.splice(r,1),e}return t})}),d=(0,P.z)(e=>(u(t=>[...t,e]),()=>c(e))),f=(0,P.z)(()=>{var e;let t=(0,m.r)(r);if(!t)return!1;let n=t.activeElement;return!!(null!=(e=r.current)&&e.contains(n))||i.some(e=>{var r,i;return(null==(r=t.getElementById(e.buttonId.current))?void 0:r.contains(n))||(null==(i=t.getElementById(e.panelId.current))?void 0:i.contains(n))})}),h=(0,P.z)(e=>{for(let t of i)t.buttonId.current!==e&&t.close()}),p=(0,a.useMemo)(()=>({registerPopover:d,unregisterPopover:c,isFocusWithinPopoverGroup:f,closeOthers:h,mainTreeNodeRef:l.mainTreeNodeRef}),[d,c,f,h,l.mainTreeNodeRef]),v=(0,a.useMemo)(()=>({}),[]);return a.createElement(w.Provider,{value:p},(0,o.sY)({ourProps:{ref:n},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}),a.createElement(l.MainTreeNode,null))})})},41203:function(e,t,r){"use strict";r.d(t,{O:function(){return a}});var n=r(6439),i=r(59410);function a(e,t,r,a){let u=(0,i.E)(r);(0,n.useEffect)(()=>{function r(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,r,a),()=>e.removeEventListener(t,r,a)},[e,t,a])}},30170:function(e,t,r){"use strict";r.d(t,{H:function(){return s},v:function(){return o}});var n=r(6439),i=r(57225),a=r(68344),u=r(88484);function o({defaultContainers:e=[],portals:t,mainTreeNodeRef:r}={}){var o;let s=(0,n.useRef)(null!=(o=null==r?void 0:r.current)?o:null),l=(0,u.i)(s),c=(0,a.z)(()=>{var r;let n=[];for(let t of e)null!==t&&(t instanceof HTMLElement?n.push(t):"current"in t&&t.current instanceof HTMLElement&&n.push(t.current));if(null!=t&&t.current)for(let e of t.current)n.push(e);for(let e of null!=(r=null==l?void 0:l.querySelectorAll("html > *, body > *"))?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(s.current)||n.some(t=>e.contains(t))||n.push(e));return n});return{resolveContainers:c,contains:(0,a.z)(e=>c().some(t=>t.contains(e))),mainTreeNodeRef:s,MainTreeNode:(0,n.useMemo)(()=>function(){return null!=r?null:n.createElement(i._,{features:i.A.Hidden,ref:s})},[s,r])}}function s(){let e=(0,n.useRef)(null);return{mainTreeNodeRef:e,MainTreeNode:(0,n.useMemo)(()=>function(){return n.createElement(i._,{features:i.A.Hidden,ref:e})},[e])}}},59674:function(e,t,r){"use strict";r.d(t,{N:function(){return u},l:function(){return o}});var n,i=r(6439),a=r(50786),u=((n=u||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n);function o(){let e=(0,i.useRef)(0);return(0,a.s)("keydown",t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)},!0),e}},3639:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});var n=r(6439);let i=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function a(e){var t,r;let n=null!=(t=e.innerText)?t:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return n;let u=!1;for(let e of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),u=!0;let o=u?null!=(r=a.innerText)?r:"":n;return i.test(o)&&(o=o.replace(i,"")),o}var u=r(68344);function o(e){let t=(0,n.useRef)(""),r=(0,n.useRef)("");return(0,u.z)(()=>{let n=e.current;if(!n)return"";let i=n.innerText;if(t.current===i)return r.current;let u=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():a(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return a(e).trim()})(n).trim().toLowerCase();return t.current=i,r.current=u,u})}},16403:function(e,t,r){"use strict";r.d(t,{B:function(){return u}});var n=r(6439),i=r(64092),a=r(69099);function u({container:e,accept:t,walk:r,enabled:u=!0}){let o=(0,n.useRef)(t),s=(0,n.useRef)(r);(0,n.useEffect)(()=>{o.current=t,s.current=r},[t,r]),(0,i.e)(()=>{if(!e||!u)return;let t=(0,a.r)(e);if(!t)return;let r=o.current,n=s.current,i=Object.assign(e=>r(e),{acceptNode:r}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;l.nextNode();)n(l.currentNode)},[e,u,o,s])}},69555:function(e,t,r){"use strict";r.d(t,{S:function(){return m}});var n=r(23288),i=r(45433),a=r(41537),u=r(77827),o=r(82263);class s extends o.F{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||i._,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let r=(0,n.oE)(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(n.ZT).catch(n.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,n.Kp)(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,i,a,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(a=this.retryer)||a.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let s=(0,n.G9)(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};c(l);let d={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};c(d),null==(r=this.options.behavior)||r.onFetch(d),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=d.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(o=d.fetchOptions)?void 0:o.meta});let f=e=>{if((0,u.DV)(e)&&e.silent||this.dispatch({type:"error",error:e}),!(0,u.DV)(e)){var t,r,n,i;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,u.Mz)({fn:d.fetchFn,abort:null==s?void 0:s.abort.bind(s),onSuccess:e=>{var t,r,n,i;if(void 0===e){f(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,n;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:(0,u.Kw)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(n=e.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=e.error;if((0,u.DV)(i)&&i.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),a.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}var l=r(85206);class c extends l.l{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var i;let a=t.queryKey,u=null!=(i=t.queryHash)?i:(0,n.Rm)(a,t),o=this.get(u);return o||(o=new s({cache:this,logger:e.getLogger(),queryKey:a,queryHash:u,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(a)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){a.V.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=(0,n.I6)(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>(0,n._x)(r,e))}findAll(e,t){let[r]=(0,n.I6)(e,t);return Object.keys(r).length>0?this.queries.filter(e=>(0,n._x)(r,e)):this.queries}notify(e){a.V.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){a.V.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){a.V.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}var d=r(39451);class f extends l.l{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let n=new d.m({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(n),n}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){a.V.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>(0,n.X7)(e,t))}findAll(e){return this.mutations.filter(t=>(0,n.X7)(e,t))}notify(e){a.V.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return a.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(n.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var h=r(98359),p=r(40515);function v(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class m{constructor(e={}){this.queryCache=e.queryCache||new c,this.mutationCache=e.mutationCache||new f,this.logger=e.logger||i._,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=h.j.subscribe(()=>{h.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=p.N.subscribe(()=>{p.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=(0,n.I6)(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let i=(0,n._v)(e,t,r),a=this.getQueryData(i.queryKey);return a?Promise.resolve(a):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let i=this.queryCache.find(e),a=null==i?void 0:i.state.data,u=(0,n.SE)(t,a);if(void 0===u)return;let o=(0,n._v)(e),s=this.defaultQueryOptions(o);return this.queryCache.build(this,s).setData(u,{...r,manual:!0})}setQueriesData(e,t,r){return a.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=(0,n.I6)(e,t),i=this.queryCache;a.V.batch(()=>{i.findAll(r).forEach(e=>{i.remove(e)})})}resetQueries(e,t,r){let[i,u]=(0,n.I6)(e,t,r),o=this.queryCache,s={type:"active",...i};return a.V.batch(()=>(o.findAll(i).forEach(e=>{e.reset()}),this.refetchQueries(s,u)))}cancelQueries(e,t,r){let[i,u={}]=(0,n.I6)(e,t,r);void 0===u.revert&&(u.revert=!0);let o=a.V.batch(()=>this.queryCache.findAll(i).map(e=>e.cancel(u)));return Promise.all(o).then(n.ZT).catch(n.ZT)}invalidateQueries(e,t,r){let[i,u]=(0,n.I6)(e,t,r);return a.V.batch(()=>{var e,t;if(this.queryCache.findAll(i).forEach(e=>{e.invalidate()}),"none"===i.refetchType)return Promise.resolve();let r={...i,type:null!=(e=null!=(t=i.refetchType)?t:i.type)?e:"active"};return this.refetchQueries(r,u)})}refetchQueries(e,t,r){let[i,u]=(0,n.I6)(e,t,r),o=a.V.batch(()=>this.queryCache.findAll(i).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...u,cancelRefetch:null==(t=null==u?void 0:u.cancelRefetch)||t,meta:{refetchPage:i.refetchPage}})})),s=Promise.all(o).then(n.ZT);return null!=u&&u.throwOnError||(s=s.catch(n.ZT)),s}fetchQuery(e,t,r){let i=(0,n._v)(e,t,r),a=this.defaultQueryOptions(i);void 0===a.retry&&(a.retry=!1);let u=this.queryCache.build(this,a);return u.isStaleByTime(a.staleTime)?u.fetch(a):Promise.resolve(u.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e,t,r){let i=(0,n._v)(e,t,r);return i.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,n,i,a,u,o;let s;let l=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,c=null==(n=e.fetchOptions)?void 0:null==(i=n.meta)?void 0:i.fetchMore,d=null==c?void 0:c.pageParam,f=(null==c?void 0:c.direction)==="forward",h=(null==c?void 0:c.direction)==="backward",p=(null==(a=e.state.data)?void 0:a.pages)||[],m=(null==(u=e.state.data)?void 0:u.pageParams)||[],y=m,g=!1,b=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?g=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{g=!0}),e.signal}})},P=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),S=(e,t,r,n)=>(y=n?[t,...y]:[...y,t],n?[r,...e]:[...e,r]),E=(t,r,n,i)=>{if(g)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};b(a);let u=P(a),o=Promise.resolve(u).then(e=>S(t,n,e,i));return o};if(p.length){if(f){let t=void 0!==d,r=t?d:v(e.options,p);s=E(p,t,r)}else if(h){let t=void 0!==d,r=t?d:null==(o=e.options).getPreviousPageParam?void 0:o.getPreviousPageParam(p[0],p);s=E(p,t,r,!0)}else{y=[];let t=void 0===e.options.getNextPageParam,r=!l||!p[0]||l(p[0],0,p);s=r?E([],t,m[0]):Promise.resolve(S([],m[0],p[0]));for(let r=1;r<p.length;r++)s=s.then(n=>{let i=!l||!p[r]||l(p[r],r,p);if(i){let i=t?m[r]:v(e.options,n);return E(n,t,i)}return Promise.resolve(S(n,m[r],p[r]))})}}else s=E([]);let I=s.then(e=>({pages:e,pageParams:y}));return I}}},this.fetchQuery(i)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>(0,n.yF)(e)===(0,n.yF)(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>(0,n.to)(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>(0,n.yF)(e)===(0,n.yF)(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>(0,n.to)(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},29488:function(e,t,r){"use strict";r.d(t,{IZ:function(){return f}});var n=r(21841);let{Axios:i,AxiosError:a,CanceledError:u,isCancel:o,CancelToken:s,VERSION:l,all:c,Cancel:d,isAxiosError:f,spread:h,toFormData:p,AxiosHeaders:v,HttpStatusCode:m,formToJSON:y,getAdapter:g,mergeConfig:b}=n.default}}]);