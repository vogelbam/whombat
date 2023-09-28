"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2172],{7864:function(e,t,n){function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===c(e)}n.d(t,{Z:function(){return B}});let o=1/0;function i(e){return"string"==typeof e}function s(e){return"number"==typeof e}function l(e){return"object"==typeof e}function a(e){return null!=e}function u(e){return!e.trim().length}function c(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let d=e=>`Invalid value for key ${e}`,p=e=>`Pattern length exceeds max of ${e}.`,h=e=>`Missing ${e} property in key`,f=e=>`Property 'weight' in key '${e}' must be a positive integer`,b=Object.prototype.hasOwnProperty;class g{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=m(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function m(e){let t=null,n=null,o=null,s=1,l=null;if(i(e)||r(e))o=e,t=v(e),n=x(e);else{if(!b.call(e,"name"))throw Error(h("name"));let r=e.name;if(o=r,b.call(e,"weight")&&(s=e.weight)<=0)throw Error(f(r));t=v(r),n=x(r),l=e.getFn}return{path:t,id:n,weight:s,src:o,getFn:l}}function v(e){return r(e)?e:e.split(".")}function x(e){return r(e)?e.join("."):e}var R={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let n=[],u=!1,d=(e,t,p)=>{if(a(e)){if(t[p]){var h,f;let b=t[p],g=e[b];if(a(g)){if(p===t.length-1&&(i(g)||s(g)||!0===(h=g)||!1===h||l(f=h)&&null!==f&&"[object Boolean]"==c(h)))n.push(null==g?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-o?"-0":t}(g));else if(r(g)){u=!0;for(let e=0,n=g.length;e<n;e+=1)d(g[e],t,p+1)}else t.length&&d(g,t,p+1)}}else n.push(e)}};return d(e,i(t)?t.split("."):t,0),u?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let y=/[^ ]+/g;class O{constructor({getFn:e=R.getFn,fieldNormWeight:t=R.fieldNormWeight}={}){this.norm=function(e=1,t=3){let n=new Map,r=Math.pow(10,t);return{get(t){let o=t.match(y).length;if(n.has(o))return n.get(o);let i=1/Math.pow(o,.5*e),s=parseFloat(Math.round(i*r)/r);return n.set(o,s),s},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,i(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();i(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||u(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((t,o)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(a(s)){if(r(s)){let e=[],t=[{nestedArrIndex:-1,value:s}];for(;t.length;){let{nestedArrIndex:n,value:o}=t.pop();if(a(o)){if(i(o)&&!u(o)){let t={v:o,i:n,n:this.norm.get(o)};e.push(t)}else r(o)&&o.forEach((e,n)=>{t.push({nestedArrIndex:n,value:e})})}}n.$[o]=e}else if(i(s)&&!u(s)){let e={v:s,n:this.norm.get(s)};n.$[o]=e}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function I(e,t,{getFn:n=R.getFn,fieldNormWeight:r=R.fieldNormWeight}={}){let o=new O({getFn:n,fieldNormWeight:r});return o.setKeys(e.map(m)),o.setSources(t),o.create(),o}function S(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:o=R.distance,ignoreLocation:i=R.ignoreLocation}={}){let s=t/e.length;if(i)return s;let l=Math.abs(r-n);return o?s+l/o:l?1:s}class C{constructor(e,{location:t=R.location,threshold:n=R.threshold,distance:r=R.distance,includeMatches:o=R.includeMatches,findAllMatches:i=R.findAllMatches,minMatchCharLength:s=R.minMatchCharLength,isCaseSensitive:l=R.isCaseSensitive,ignoreLocation:a=R.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:a},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let u=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let o=e.charAt(n);t[o]=(t[o]||0)|1<<r-n-1}return t}(e),startIndex:t})},c=this.pattern.length;if(c>32){let e=0,t=c%32,n=c-t;for(;e<n;)u(this.pattern.substr(e,32),e),e+=32;if(t){let e=c-32;u(this.pattern.substr(e),e)}}else u(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}let{location:r,distance:o,threshold:i,findAllMatches:s,minMatchCharLength:l,ignoreLocation:a}=this.options,u=[],c=0,d=!1;this.chunks.forEach(({pattern:t,alphabet:h,startIndex:f})=>{let{isMatch:b,score:g,indices:m}=function(e,t,n,{location:r=R.location,distance:o=R.distance,threshold:i=R.threshold,findAllMatches:s=R.findAllMatches,minMatchCharLength:l=R.minMatchCharLength,includeMatches:a=R.includeMatches,ignoreLocation:u=R.ignoreLocation}={}){let c;if(t.length>32)throw Error(p(32));let d=t.length,h=e.length,f=Math.max(0,Math.min(r,h)),b=i,g=f,m=l>1||a,v=m?Array(h):[];for(;(c=e.indexOf(t,g))>-1;)if(b=Math.min(S(t,{currentLocation:c,expectedLocation:f,distance:o,ignoreLocation:u}),b),g=c+d,m){let e=0;for(;e<d;)v[c+e]=1,e+=1}g=-1;let x=[],y=1,O=d+h,I=1<<d-1;for(let r=0;r<d;r+=1){let i=0,l=O;for(;i<l;){let e=S(t,{errors:r,currentLocation:f+l,expectedLocation:f,distance:o,ignoreLocation:u});e<=b?i=l:O=l,l=Math.floor((O-i)/2+i)}O=l;let a=Math.max(1,f-l+1),c=s?h:Math.min(f+l,h)+d,p=Array(c+2);p[c+1]=(1<<r)-1;for(let i=c;i>=a;i-=1){let s=i-1,l=n[e.charAt(s)];if(m&&(v[s]=+!!l),p[i]=(p[i+1]<<1|1)&l,r&&(p[i]|=(x[i+1]|x[i])<<1|1|x[i+1]),p[i]&I&&(y=S(t,{errors:r,currentLocation:s,expectedLocation:f,distance:o,ignoreLocation:u}))<=b){if(b=y,(g=s)<=f)break;a=Math.max(1,2*f-g)}}let R=S(t,{errors:r+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:u});if(R>b)break;x=p}let C={isMatch:g>=0,score:Math.max(.001,y)};if(m){let e=function(e=[],t=R.minMatchCharLength){let n=[],r=-1,o=-1,i=0;for(let s=e.length;i<s;i+=1){let s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(v,l);e.length?a&&(C.indices=e):C.isMatch=!1}return C}(e,t,h,{location:r+f,distance:o,threshold:i,findAllMatches:s,minMatchCharLength:l,includeMatches:n,ignoreLocation:a});b&&(d=!0),c+=g,b&&m&&(u=[...u,...m])});let h={isMatch:d,score:d?c/this.chunks.length:1};return d&&n&&(h.indices=u),h}}class M{constructor(e){this.pattern=e}static isMultiMatch(e){return T(e,this.multiRegex)}static isSingleMatch(e){return T(e,this.singleRegex)}search(){}}function T(e,t){let n=e.match(t);return n?n[1]:null}class E extends M{constructor(e,{location:t=R.location,threshold:n=R.threshold,distance:r=R.distance,includeMatches:o=R.includeMatches,findAllMatches:i=R.findAllMatches,minMatchCharLength:s=R.minMatchCharLength,isCaseSensitive:l=R.isCaseSensitive,ignoreLocation:a=R.ignoreLocation}={}){super(e),this._bitapSearch=new C(e,{location:t,threshold:n,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class _ extends M{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0,r=[],o=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+o,r.push([t,n-1]);let i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}let k=[class extends M{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},_,class extends M{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends M{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends M{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends M{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends M{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),n=-1===t;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}},E],A=k.length,P=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,w=new Set([E.type,_.type]),L=[];function N(e,t){for(let n=0,r=L.length;n<r;n+=1){let r=L[n];if(r.condition(e,t))return new r(e,t)}return new C(e,t)}let $={AND:"$and",OR:"$or"},F={PATH:"$path",PATTERN:"$val"},z=e=>!!(e[$.AND]||e[$.OR]),D=e=>!!e[F.PATH],j=e=>!r(e)&&l(e)&&!z(e),V=e=>({[$.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function q(e,t,{auto:n=!0}={}){let o=e=>{let s=Object.keys(e),l=D(e);if(!l&&s.length>1&&!z(e))return o(V(e));if(j(e)){let r=l?e[F.PATH]:s[0],o=l?e[F.PATTERN]:e[r];if(!i(o))throw Error(d(r));let a={keyId:x(r),pattern:o};return n&&(a.searcher=N(o,t)),a}let a={children:[],operator:s[0]};return s.forEach(t=>{let n=e[t];r(n)&&n.forEach(e=>{a.children.push(o(e))})}),a};return z(e)||(e=V(e)),o(e)}function W(e,t){let n=e.matches;t.matches=[],a(n)&&n.forEach(e=>{if(!a(e.indices)||!e.indices.length)return;let{indices:n,value:r}=e,o={indices:n,value:r};e.key&&(o.key=e.key.src),e.idx>-1&&(o.refIndex=e.idx),t.matches.push(o)})}function K(e,t){t.score=e.score}class B{constructor(e,t={},n){this.options={...R,...t},this.options.useExtendedSearch,this._keyStore=new g(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof O))throw Error("Incorrect 'index' type");this._myIndex=t||I(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let n=0,r=this._docs.length;n<r;n+=1){let o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,r-=1,t.push(o))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:n,includeScore:r,shouldSort:o,sortFn:l,ignoreFieldNorm:a}=this.options,u=i(e)?i(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=R.ignoreFieldNorm}){e.forEach(e=>{let n=1;e.matches.forEach(({key:e,norm:r,score:o})=>{let i=e?e.weight:null;n*=Math.pow(0===o&&i?Number.EPSILON:o,(i||1)*(t?1:r))}),e.score=n})}(u,{ignoreFieldNorm:a}),o&&u.sort(l),s(t)&&t>-1&&(u=u.slice(0,t)),function(e,t,{includeMatches:n=R.includeMatches,includeScore:r=R.includeScore}={}){let o=[];return n&&o.push(W),r&&o.push(K),e.map(e=>{let{idx:n}=e,r={item:t[n],refIndex:n};return o.length&&o.forEach(t=>{t(e,r)}),r})}(u,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){let t=N(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:e,i:n,n:o})=>{if(!a(e))return;let{isMatch:i,score:s,indices:l}=t.searchIn(e);i&&r.push({item:e,idx:n,matches:[{score:s,value:e,norm:o,indices:l}]})}),r}_searchLogical(e){let t=q(e,this.options),n=(e,t,r)=>{if(!e.children){let{keyId:n,searcher:o}=e,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:o});return i&&i.length?[{idx:r,item:t,matches:i}]:[]}let o=[];for(let i=0,s=e.children.length;i<s;i+=1){let s=e.children[i],l=n(s,t,r);if(l.length)o.push(...l);else if(e.operator===$.AND)return[]}return o},r=this._myIndex.records,o={},i=[];return r.forEach(({$:e,i:r})=>{if(a(e)){let s=n(t,e,r);s.length&&(o[r]||(o[r]={idx:r,item:e,matches:[]},i.push(o[r])),s.forEach(({matches:e})=>{o[r].matches.push(...e)}))}}),i}_searchObjectList(e){let t=N(e,this.options),{keys:n,records:r}=this._myIndex,o=[];return r.forEach(({$:e,i:r})=>{if(!a(e))return;let i=[];n.forEach((n,r)=>{i.push(...this._findMatches({key:n,value:e[r],searcher:t}))}),i.length&&o.push({idx:r,item:e,matches:i})}),o}_findMatches({key:e,value:t,searcher:n}){if(!a(t))return[];let o=[];if(r(t))t.forEach(({v:t,i:r,n:i})=>{if(!a(t))return;let{isMatch:s,score:l,indices:u}=n.searchIn(t);s&&o.push({score:l,key:e,value:t,idx:r,norm:i,indices:u})});else{let{v:r,n:i}=t,{isMatch:s,score:l,indices:a}=n.searchIn(r);s&&o.push({score:l,key:e,value:r,norm:i,indices:a})}return o}}B.version="6.6.2",B.createIndex=I,B.parseIndex=function(e,{getFn:t=R.getFn,fieldNormWeight:n=R.fieldNormWeight}={}){let{keys:r,records:o}=e,i=new O({getFn:t,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(o),i},B.config=R,B.parseQuery=q,function(...e){L.push(...e)}(class{constructor(e,{isCaseSensitive:t=R.isCaseSensitive,includeMatches:n=R.includeMatches,minMatchCharLength:r=R.minMatchCharLength,ignoreLocation:o=R.ignoreLocation,findAllMatches:i=R.findAllMatches,location:s=R.location,threshold:l=R.threshold,distance:a=R.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:o,location:s,threshold:l,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let n=e.trim().split(P).filter(e=>e&&!!e.trim()),r=[];for(let e=0,o=n.length;e<o;e+=1){let o=n[e],i=!1,s=-1;for(;!i&&++s<A;){let e=k[s],n=e.isMultiMatch(o);n&&(r.push(new e(n,t)),i=!0)}if(!i)for(s=-1;++s<A;){let e=k[s],n=e.isSingleMatch(o);if(n){r.push(new e(n,t));break}}}return r})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let o=0,i=[],s=0;for(let r=0,l=t.length;r<l;r+=1){let l=t[r];i.length=0,o=0;for(let t=0,r=l.length;t<r;t+=1){let r=l[t],{isMatch:a,indices:u,score:c}=r.search(e);if(a){if(o+=1,s+=c,n){let e=r.constructor.type;w.has(e)?i=[...i,...u]:i.push(u)}}else{s=0,o=0,i.length=0;break}}if(o){let e={isMatch:!0,score:s/o};return n&&(e.indices=i),e}}return{isMatch:!1,score:1}}})},30485:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(6439),o=n(7460);function i(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var i=(0,o.Z)(e,t),s=i[0],l=i[1],a=i[2];return(0,r.useEffect)(a,n),[s,l]}},80707:function(e,t,n){n.d(t,{h:function(){return H}});var r,o,i,s,l=n(6439),a=n(82106),u=n(50814),c=n(68344),d=n(65961),p=n(64092),h=n(59410),f=n(81835),b=n(31708),g=n(39809),m=n(16403),v=n(6271),x=n(2700),R=n(47702),y=n(56851),O=n(45120),I=n(28587),S=n(42239),C=n(57225),M=n(97558),T=n(59573),E=n(94110),_=n(57047),k=n(16267),A=n(84834),P=n(88484),w=((r=w||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),L=((o=L||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),N=((i=N||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),$=((s=$||{})[s.OpenCombobox=0]="OpenCombobox",s[s.CloseCombobox=1]="CloseCombobox",s[s.GoToOption=2]="GoToOption",s[s.RegisterOption=3]="RegisterOption",s[s.UnregisterOption=4]="UnregisterOption",s[s.RegisterLabel=5]="RegisterLabel",s);function F(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,S.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return -1===o&&(o=null),{options:r,activeOptionIndex:o}}let z={1(e){var t;return null!=(t=e.dataRef.current)&&t.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var t;if(null!=(t=e.dataRef.current)&&t.disabled||0===e.comboboxState)return e;let n=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,r=e.options.findIndex(e=>t(e.dataRef.current.value));-1!==r&&(n=r)}return{...e,comboboxState:0,activeOptionIndex:n}},2(e,t){var n,r,o,i;if(null!=(n=e.dataRef.current)&&n.disabled||null!=(r=e.dataRef.current)&&r.optionsRef.current&&!(null!=(o=e.dataRef.current)&&o.optionsPropsRef.current.static)&&1===e.comboboxState)return e;let s=F(e);if(null===s.activeOptionIndex){let e=s.options.findIndex(e=>!e.dataRef.current.disabled);-1!==e&&(s.activeOptionIndex=e)}let l=(0,v.d)(t,{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...s,activeOptionIndex:l,activationTrigger:null!=(i=t.trigger)?i:1}},3:(e,t)=>{var n,r;let o={id:t.id,dataRef:t.dataRef},i=F(e,e=>[...e,o]);null===e.activeOptionIndex&&null!=(n=e.dataRef.current)&&n.isSelected(t.dataRef.current.value)&&(i.activeOptionIndex=i.options.indexOf(o));let s={...e,...i,activationTrigger:1};return null!=(r=e.dataRef.current)&&r.__demoMode&&void 0===e.dataRef.current.value&&(s.activeOptionIndex=0),s},4:(e,t)=>{let n=F(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},5:(e,t)=>({...e,labelId:t.id})},D=(0,l.createContext)(null);function j(e){let t=(0,l.useContext)(D);if(null===t){let t=Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}D.displayName="ComboboxActionsContext";let V=(0,l.createContext)(null);function q(e){let t=(0,l.useContext)(V);if(null===t){let t=Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}function W(e,t){return(0,O.E)(t.type,z,e,t)}V.displayName="ComboboxDataContext";let K=l.Fragment,B=R.AN.RenderStrategy|R.AN.Static,U=(0,R.yV)(function(e,t){let{value:n,defaultValue:r,onChange:o,form:i,name:s,by:a=(e,t)=>e===t,disabled:d=!1,__demoMode:h=!1,nullable:b=!1,multiple:g=!1,...m}=e,[x=g?[]:void 0,y]=(0,E.q)(n,o,r),[S,T]=(0,l.useReducer)(W,{dataRef:(0,l.createRef)(),comboboxState:h?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),_=(0,l.useRef)(!1),k=(0,l.useRef)({static:!1,hold:!1}),A=(0,l.useRef)(null),P=(0,l.useRef)(null),w=(0,l.useRef)(null),L=(0,l.useRef)(null),N=(0,c.z)("string"==typeof a?(e,t)=>(null==e?void 0:e[a])===(null==t?void 0:t[a]):a),$=(0,l.useCallback)(e=>(0,O.E)(F.mode,{1:()=>x.some(t=>N(t,e)),0:()=>N(x,e)}),[x]),F=(0,l.useMemo)(()=>({...S,optionsPropsRef:k,labelRef:A,inputRef:P,buttonRef:w,optionsRef:L,value:x,defaultValue:r,disabled:d,mode:g?1:0,get activeOptionIndex(){if(_.current&&null===S.activeOptionIndex&&S.options.length>0){let e=S.options.findIndex(e=>!e.dataRef.current.disabled);if(-1!==e)return e}return S.activeOptionIndex},compare:N,isSelected:$,nullable:b,__demoMode:h}),[x,r,d,g,b,h,S]),z=(0,l.useRef)(null!==F.activeOptionIndex?F.options[F.activeOptionIndex]:null);(0,l.useEffect)(()=>{let e=null!==F.activeOptionIndex?F.options[F.activeOptionIndex]:null;z.current!==e&&(z.current=e)}),(0,p.e)(()=>{S.dataRef.current=F},[F]),(0,f.O)([F.buttonRef,F.inputRef,F.optionsRef],()=>Q.closeCombobox(),0===F.comboboxState);let j=(0,l.useMemo)(()=>({open:0===F.comboboxState,disabled:d,activeIndex:F.activeOptionIndex,activeOption:null===F.activeOptionIndex?null:F.options[F.activeOptionIndex].dataRef.current.value,value:x}),[F,d,x]),q=(0,c.z)(e=>{let t=F.options.find(t=>t.id===e);t&&J(t.dataRef.current.value)}),B=(0,c.z)(()=>{if(null!==F.activeOptionIndex){let{dataRef:e,id:t}=F.options[F.activeOptionIndex];J(e.current.value),Q.goToOption(v.T.Specific,t)}}),U=(0,c.z)(()=>{T({type:0}),_.current=!0}),Z=(0,c.z)(()=>{T({type:1}),_.current=!1}),H=(0,c.z)((e,t,n)=>(_.current=!1,e===v.T.Specific?T({type:2,focus:v.T.Specific,id:t,trigger:n}):T({type:2,focus:e,trigger:n}))),Y=(0,c.z)((e,t)=>(T({type:3,id:e,dataRef:t}),()=>{var t;(null==(t=z.current)?void 0:t.id)===e&&(_.current=!0),T({type:4,id:e})})),G=(0,c.z)(e=>(T({type:5,id:e}),()=>T({type:5,id:null}))),J=(0,c.z)(e=>(0,O.E)(F.mode,{0:()=>null==y?void 0:y(e),1(){let t=F.value.slice(),n=t.findIndex(t=>N(t,e));return -1===n?t.push(e):t.splice(n,1),null==y?void 0:y(t)}})),Q=(0,l.useMemo)(()=>({onChange:J,registerOption:Y,registerLabel:G,goToOption:H,closeCombobox:Z,openCombobox:U,selectActiveOption:B,selectOption:q}),[]),X=(0,l.useRef)(null),ee=(0,u.G)();return(0,l.useEffect)(()=>{X.current&&void 0!==r&&ee.addEventListener(X.current,"reset",()=>{null==y||y(r)})},[X,y]),l.createElement(D.Provider,{value:Q},l.createElement(V.Provider,{value:F},l.createElement(M.up,{value:(0,O.E)(F.comboboxState,{0:M.ZM.Open,1:M.ZM.Closed})},null!=s&&null!=x&&(0,I.t)({[s]:x}).map(([e,t],n)=>l.createElement(C._,{features:C.A.Hidden,ref:0===n?e=>{var t;X.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,R.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:e,value:t})})),(0,R.sY)({ourProps:null===t?{}:{ref:t},theirProps:m,slot:j,defaultTag:K,name:"Combobox"}))))}),Z=(0,R.yV)(function(e,t){var n;let r=q("Combobox.Button"),o=j("Combobox.Button"),i=(0,g.T)(r.buttonRef,t),s=(0,d.M)(),{id:p=`headlessui-combobox-button-${s}`,...h}=e,f=(0,u.G)(),m=(0,c.z)(e=>{switch(e.key){case T.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&o.openCombobox(),f.nextFrame(()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})});case T.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(o.openCombobox(),f.nextFrame(()=>{r.value||o.goToOption(v.T.Last)})),f.nextFrame(()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})});case T.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),o.closeCombobox(),f.nextFrame(()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));default:return}}),x=(0,c.z)(e=>{if((0,y.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?o.closeCombobox():(e.preventDefault(),o.openCombobox()),f.nextFrame(()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})}),O=(0,a.v)(()=>{if(r.labelId)return[r.labelId,p].join(" ")},[r.labelId,p]),I=(0,l.useMemo)(()=>({open:0===r.comboboxState,disabled:r.disabled,value:r.value}),[r]),S={ref:i,id:p,type:(0,b.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":0===r.comboboxState,"aria-labelledby":O,disabled:r.disabled,onClick:x,onKeyDown:m};return(0,R.sY)({ourProps:S,theirProps:h,slot:I,defaultTag:"button",name:"Combobox.Button"})}),H=Object.assign(U,{Input:(0,R.yV)(function(e,t){var n,r,o,i,s;let p=(0,d.M)(),{id:h=`headlessui-combobox-input-${p}`,onChange:f,displayValue:b,type:m="text",...x}=e,y=q("Combobox.Input"),I=j("Combobox.Input"),S=(0,g.T)(y.inputRef,t),C=(0,P.i)(y.inputRef),M=(0,l.useRef)(!1),E=(0,u.G)(),k=(0,c.z)(()=>{I.onChange(null),y.optionsRef.current&&(y.optionsRef.current.scrollTop=0),I.goToOption(v.T.Nothing)}),A="function"==typeof b&&void 0!==y.value?null!=(s=b(y.value))?s:"":"string"==typeof y.value?y.value:"";(0,_.q)(([e,t],[n,r])=>{if(M.current)return;let o=y.inputRef.current;o&&((0===r&&1===t||e!==n)&&(o.value=e),requestAnimationFrame(()=>{if(M.current||!o||(null==C?void 0:C.activeElement)!==o)return;let{selectionStart:e,selectionEnd:t}=o;0===Math.abs((null!=t?t:0)-(null!=e?e:0))&&0===e&&o.setSelectionRange(o.value.length,o.value.length)}))},[A,y.comboboxState,C]),(0,_.q)(([e],[t])=>{if(0===e&&1===t){if(M.current)return;let e=y.inputRef.current;if(!e)return;let t=e.value,{selectionStart:n,selectionEnd:r,selectionDirection:o}=e;e.value="",e.value=t,null!==o?e.setSelectionRange(n,r,o):e.setSelectionRange(n,r)}},[y.comboboxState]);let w=(0,l.useRef)(!1),L=(0,c.z)(()=>{w.current=!0}),N=(0,c.z)(()=>{E.nextFrame(()=>{w.current=!1})}),$=(0,c.z)(e=>{switch(M.current=!0,e.key){case T.R.Enter:if(M.current=!1,0!==y.comboboxState||w.current)return;if(e.preventDefault(),e.stopPropagation(),null===y.activeOptionIndex){I.closeCombobox();return}I.selectActiveOption(),0===y.mode&&I.closeCombobox();break;case T.R.ArrowDown:return M.current=!1,e.preventDefault(),e.stopPropagation(),(0,O.E)(y.comboboxState,{0:()=>{I.goToOption(v.T.Next)},1:()=>{I.openCombobox()}});case T.R.ArrowUp:return M.current=!1,e.preventDefault(),e.stopPropagation(),(0,O.E)(y.comboboxState,{0:()=>{I.goToOption(v.T.Previous)},1:()=>{I.openCombobox(),E.nextFrame(()=>{y.value||I.goToOption(v.T.Last)})}});case T.R.Home:if(e.shiftKey)break;return M.current=!1,e.preventDefault(),e.stopPropagation(),I.goToOption(v.T.First);case T.R.PageUp:return M.current=!1,e.preventDefault(),e.stopPropagation(),I.goToOption(v.T.First);case T.R.End:if(e.shiftKey)break;return M.current=!1,e.preventDefault(),e.stopPropagation(),I.goToOption(v.T.Last);case T.R.PageDown:return M.current=!1,e.preventDefault(),e.stopPropagation(),I.goToOption(v.T.Last);case T.R.Escape:return M.current=!1,0!==y.comboboxState?void 0:(e.preventDefault(),y.optionsRef.current&&!y.optionsPropsRef.current.static&&e.stopPropagation(),y.nullable&&0===y.mode&&null===y.value&&k(),I.closeCombobox());case T.R.Tab:if(M.current=!1,0!==y.comboboxState)return;0===y.mode&&I.selectActiveOption(),I.closeCombobox()}}),F=(0,c.z)(e=>{null==f||f(e),y.nullable&&0===y.mode&&""===e.target.value&&k(),I.openCombobox()}),z=(0,c.z)(()=>{M.current=!1}),D=(0,a.v)(()=>{if(y.labelId)return[y.labelId].join(" ")},[y.labelId]),V=(0,l.useMemo)(()=>({open:0===y.comboboxState,disabled:y.disabled}),[y]),W={ref:S,id:h,role:"combobox",type:m,"aria-controls":null==(n=y.optionsRef.current)?void 0:n.id,"aria-expanded":0===y.comboboxState,"aria-activedescendant":null===y.activeOptionIndex||null==(r=y.options[y.activeOptionIndex])?void 0:r.id,"aria-labelledby":D,"aria-autocomplete":"list",defaultValue:null!=(i=null!=(o=e.defaultValue)?o:void 0!==y.defaultValue?null==b?void 0:b(y.defaultValue):null)?i:y.defaultValue,disabled:y.disabled,onCompositionStart:L,onCompositionEnd:N,onKeyDown:$,onChange:F,onBlur:z};return(0,R.sY)({ourProps:W,theirProps:x,slot:V,defaultTag:"input",name:"Combobox.Input"})}),Button:Z,Label:(0,R.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-combobox-label-${n}`,...o}=e,i=q("Combobox.Label"),s=j("Combobox.Label"),a=(0,g.T)(i.labelRef,t);(0,p.e)(()=>s.registerLabel(r),[r]);let u=(0,c.z)(()=>{var e;return null==(e=i.inputRef.current)?void 0:e.focus({preventScroll:!0})}),h=(0,l.useMemo)(()=>({open:0===i.comboboxState,disabled:i.disabled}),[i]);return(0,R.sY)({ourProps:{ref:a,id:r,onClick:u},theirProps:o,slot:h,defaultTag:"label",name:"Combobox.Label"})}),Options:(0,R.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-combobox-options-${n}`,hold:o=!1,...i}=e,s=q("Combobox.Options"),u=(0,g.T)(s.optionsRef,t),c=(0,M.oJ)(),h=null!==c?(c&M.ZM.Open)===M.ZM.Open:0===s.comboboxState;(0,p.e)(()=>{var t;s.optionsPropsRef.current.static=null!=(t=e.static)&&t},[s.optionsPropsRef,e.static]),(0,p.e)(()=>{s.optionsPropsRef.current.hold=o},[s.optionsPropsRef,o]),(0,m.B)({container:s.optionsRef.current,enabled:0===s.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let f=(0,a.v)(()=>{var e,t;return null!=(t=s.labelId)?t:null==(e=s.buttonRef.current)?void 0:e.id},[s.labelId,s.buttonRef.current]),b=(0,l.useMemo)(()=>({open:0===s.comboboxState}),[s]),v={"aria-labelledby":f,role:"listbox","aria-multiselectable":1===s.mode||void 0,id:r,ref:u};return(0,R.sY)({ourProps:v,theirProps:i,slot:b,defaultTag:"ul",features:B,visible:h,name:"Combobox.Options"})}),Option:(0,R.yV)(function(e,t){var n,r;let o=(0,d.M)(),{id:i=`headlessui-combobox-option-${o}`,disabled:s=!1,value:a,...u}=e,f=q("Combobox.Option"),b=j("Combobox.Option"),m=null!==f.activeOptionIndex&&f.options[f.activeOptionIndex].id===i,y=f.isSelected(a),O=(0,l.useRef)(null),I=(0,h.E)({disabled:s,value:a,domRef:O,textValue:null==(r=null==(n=O.current)?void 0:n.textContent)?void 0:r.toLowerCase()}),S=(0,g.T)(t,O),C=(0,c.z)(()=>b.selectOption(i));(0,p.e)(()=>b.registerOption(i,I),[I,i]);let M=(0,l.useRef)(!f.__demoMode);(0,p.e)(()=>{if(!f.__demoMode)return;let e=(0,x.k)();return e.requestAnimationFrame(()=>{M.current=!0}),e.dispose},[]),(0,p.e)(()=>{if(0!==f.comboboxState||!m||!M.current||0===f.activationTrigger)return;let e=(0,x.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=O.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[O,m,f.comboboxState,f.activationTrigger,f.activeOptionIndex]);let T=(0,c.z)(e=>{if(s)return e.preventDefault();C(),0===f.mode&&b.closeCombobox(),(0,A.tq)()||requestAnimationFrame(()=>{var e;return null==(e=f.inputRef.current)?void 0:e.focus()})}),E=(0,c.z)(()=>{if(s)return b.goToOption(v.T.Nothing);b.goToOption(v.T.Specific,i)}),_=(0,k.g)(),P=(0,c.z)(e=>_.update(e)),w=(0,c.z)(e=>{_.wasMoved(e)&&(s||m||b.goToOption(v.T.Specific,i,0))}),L=(0,c.z)(e=>{_.wasMoved(e)&&(s||m&&(f.optionsPropsRef.current.hold||b.goToOption(v.T.Nothing)))}),N=(0,l.useMemo)(()=>({active:m,selected:y,disabled:s}),[m,y,s]);return(0,R.sY)({ourProps:{id:i,ref:S,role:"option",tabIndex:!0===s?void 0:-1,"aria-disabled":!0===s||void 0,"aria-selected":y,disabled:void 0,onClick:T,onFocus:E,onPointerEnter:P,onMouseEnter:P,onPointerMove:w,onMouseMove:w,onPointerLeave:L,onMouseLeave:L},theirProps:u,slot:N,defaultTag:"li",name:"Combobox.Option"})})})},82106:function(e,t,n){n.d(t,{v:function(){return s}});var r=n(6439),o=n(64092),i=n(59410);function s(e,t){let[n,s]=(0,r.useState)(e),l=(0,i.E)(e);return(0,o.e)(()=>s(l.current),[l,s,...t]),n}},94110:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(6439),o=n(68344);function i(e,t,n){let[i,s]=(0,r.useState)(n),l=void 0!==e,a=(0,r.useRef)(l),u=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||a.current||u.current?l||!a.current||c.current||(c.current=!0,a.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,a.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:i,(0,o.z)(e=>(l||s(e),null==t?void 0:t(e)))]}},16403:function(e,t,n){n.d(t,{B:function(){return s}});var r=n(6439),o=n(64092),i=n(69099);function s({container:e,accept:t,walk:n,enabled:s=!0}){let l=(0,r.useRef)(t),a=(0,r.useRef)(n);(0,r.useEffect)(()=>{l.current=t,a.current=n},[t,n]),(0,o.e)(()=>{if(!e||!s)return;let t=(0,i.r)(e);if(!t)return;let n=l.current,r=a.current,o=Object.assign(e=>n(e),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;u.nextNode();)r(u.currentNode)},[e,s,l,a])}},28587:function(e,t,n){function r(e,t){return e?e+"["+t+"]":t}function o(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}n.d(t,{g:function(){return o},t:function(){return function e(t={},n=null,o=[]){for(let[i,s]of Object.entries(t))!function t(n,o,i){if(Array.isArray(i))for(let[e,s]of i.entries())t(n,r(o,e.toString()),s);else i instanceof Date?n.push([o,i.toISOString()]):"boolean"==typeof i?n.push([o,i?"1":"0"]):"string"==typeof i?n.push([o,i]):"number"==typeof i?n.push([o,`${i}`]):null==i?n.push([o,""]):e(i,o,n)}(o,r(n,i),s);return o}}})}}]);