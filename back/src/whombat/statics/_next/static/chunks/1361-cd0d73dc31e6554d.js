"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1361],{27806:function(e,t,a){a.d(t,{Gd:function(){return d},Y3:function(){return p}});var n=a(89979),r=a(58883),i=a(35627);let o={getMany:"/api/v1/annotation_projects/",create:"/api/v1/annotation_projects/",get:"/api/v1/annotation_projects/detail/",update:"/api/v1/annotation_projects/detail/",delete:"/api/v1/annotation_projects/detail/",addTask:"/api/v1/annotation_projects/detail/tasks/",removeTask:"/api/v1/annotation_projects/detail/tasks/",addTag:"/api/v1/annotation_projects/detail/tags/",removeTag:"/api/v1/annotation_projects/detail/tags/",import:"/api/v1/annotation_projects/import/"},s=n.z.object({search:n.z.string().optional()}),u=n.z.object({id:n.z.number().int(),uuid:n.z.string().uuid(),name:n.z.string(),description:n.z.string(),annotation_instructions:n.z.string().nullable().optional(),created_at:n.z.coerce.date(),tags:n.z.array(i.sI)}),d=n.z.object({name:n.z.string().min(1),description:n.z.string().min(1),annotation_instructions:n.z.string().nullable().optional()});n.z.object({name:n.z.string().optional(),description:n.z.string().optional(),annotation_instructions:n.z.string().optional()});let l=(0,r.T3)(u);function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return{getMany:async function(a){let{data:n}=await e.get(t.getMany,{params:a});return l.parse(n)},get:async function(a){let{data:n}=await e.get(t.get,{params:{annotation_project_id:a}});return u.parse(n)},create:async function(a){let{data:n}=await e.post(t.create,a);return u.parse(n)},update:async function(a,n){let{data:r}=await e.patch(t.update,n,{params:{annotation_project_id:a}});return u.parse(r)},delete:async function(a){let{data:n}=await e.delete(t.delete,{params:{annotation_project_id:a}});return u.parse(n)},addTag:async function(a,n){let{data:r}=await e.post(t.addTag,{},{params:{annotation_project_id:a,tag_id:n}});return u.parse(r)},removeTag:async function(a,n){let{data:r}=await e.delete(t.removeTag,{params:{annotation_project_id:a,tag_id:n}});return u.parse(r)},import:async function(a){let{data:n}=await e.post(t.import,a);return u.parse(n)}}}n.z.intersection(r._q,s)},76431:function(e,t,a){a.d(t,{AR:function(){return i},F$:function(){return l},nu:function(){return u}});var n=a(89979);let r={download:"/api/v1/audio/download/",stream:"/api/v1/audio/stream/"},i=n.z.object({min:n.z.number(),max:n.z.number()}).refine(e=>e.min<e.max,{message:"min must be less than max",path:["min"]}),o=n.z.object({resample:n.z.boolean().default(!1),samplerate:n.z.number().positive().int().optional()}),s=n.z.object({low_freq:n.z.number().positive().optional(),high_freq:n.z.number().positive().optional(),filter_order:n.z.number().positive().int().default(5)}).refine(e=>null==e.low_freq||null==e.high_freq||e.low_freq<e.high_freq,{message:"low_freq must be less than high_freq",path:["low_freq"]}),u=o.and(s),d={resample:!1};function l(e){let{endpoints:t=r,baseUrl:a=""}=e;return{getDownloadUrl:function(e){let{recording_id:n,segment:r,parameters:o=d}=e,s=u.parse(o),l=i.parse(r),p={recording_id:n,start_time:l.min,end_time:l.max,...s},c=new URLSearchParams(Object.fromEntries(Object.entries(p).map(e=>{let[t,a]=e;return[t,a.toString()]})));return"".concat(a).concat(t.download,"?").concat(c)},getStreamUrl:function(e){let{recording_id:n,speed:r=1}=e;return"".concat(a).concat(t.stream,"?recording_id=").concat(n,"&speed=").concat(r)}}}},58883:function(e,t,a){a.d(t,{T3:function(){return o},_q:function(){return i}});var n=a(21841),r=a(89979);n.default.create({withCredentials:!0,baseURL:"http://localhost:5000"});let i=r.z.object({limit:r.z.number().int().gte(-1).optional(),offset:r.z.number().int().gte(0).optional(),sort_by:r.z.string().optional()}),o=e=>r.z.object({items:r.z.array(e),total:r.z.number().int(),limit:r.z.number().int(),offset:r.z.number().int()})},91998:function(e,t,a){a.d(t,{SR:function(){return u},XE:function(){return c}});var n=a(89979),r=a(58883);let i={getMany:"/api/v1/datasets/",create:"/api/v1/datasets/",get:"/api/v1/datasets/detail/",update:"/api/v1/datasets/detail/",delete:"/api/v1/datasets/detail/",download:"/api/v1/datasets/detail/download/",import:"/api/v1/datasets/import/"},o=n.z.object({search:n.z.string().optional()}),s=n.z.object({id:n.z.number().int(),uuid:n.z.string().uuid(),name:n.z.string(),description:n.z.string(),audio_dir:n.z.string(),recording_count:n.z.number().int(),created_at:n.z.coerce.date()}),u=n.z.object({uuid:n.z.string().uuid().optional(),name:n.z.string().min(1),audio_dir:n.z.string(),description:n.z.string().optional()}),d=n.z.object({name:n.z.string().min(1).optional(),description:n.z.string().optional()}),l=(0,r.T3)(s),p=n.z.intersection(r._q,o);function c(e){let{instance:t,endpoints:a=i,baseUrl:n=""}=e;return{getMany:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=p.parse(e),{data:r}=await t.get(a.getMany,{params:n});return l.parse(r)},create:async function(e){let n=u.parse(e),{data:r}=await t.post(a.create,n);return s.parse(r)},get:async function(e){let{data:n}=await t.get(a.get,{params:{dataset_id:e}});return s.parse(n)},update:async function(e,n){let r=d.parse(n),{data:i}=await t.patch(a.update,r,{params:{dataset_id:e}});return s.parse(i)},delete:async function(e){let{data:n}=await t.delete(a.delete,{params:{dataset_id:e}});return s.parse(n)},getDownloadUrl:function(e){return"".concat(n).concat(a.download,"?dataset_id=").concat(e)},import:async function(e){let{data:n}=await t.post(a.import,e);return s.parse(n)}}}},1799:function(e,t,a){a.d(t,{YK:function(){return l},cv:function(){return _},kU:function(){return r}});var n,r,i=a(89979),o=a(58883),s=a(35627);let u={getMany:"/api/v1/evaluation_sets/",create:"/api/v1/evaluation_sets/",get:"/api/v1/evaluation_sets/detail/",update:"/api/v1/evaluation_sets/detail/",delete:"/api/v1/evaluation_sets/detail/",addTag:"/api/v1/evaluation_sets/detail/tags/",removeTag:"/api/v1/evaluation_sets/detail/tags/"};(n=r||(r={})).SOUND_EVENT_DETECTION="sound_event_detection",n.SOUND_EVENT_CLASSIFICATION="sound_event_classification",n.CLIP_CLASSIFICATION="clip_classification",n.CLIP_MULTILABEL_CLASSIFICATION="clip_multilabel_classification";let d=i.z.object({search:i.z.string().optional()}),l=i.z.object({name:i.z.string(),description:i.z.string().optional(),mode:i.z.nativeEnum(r)}),p=l.extend({id:i.z.number(),uuid:i.z.string().uuid(),created_at:i.z.coerce.date(),tags:i.z.array(s.sI)});i.z.object({name:i.z.string().optional(),description:i.z.string().optional()});let c=(0,o.T3)(p);function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return{get:async function(a){let n=await e.get(t.get,{params:{evaluation_set_id:a}});return p.parse(n.data)},getMany:async function(a){let n=await e.get(t.getMany,{params:a});return c.parse(n.data)},create:async function(a){let n=await e.post(t.create,a);return p.parse(n.data)},update:async function(a){let{evaluation_set_id:n,data:r}=a,i=await e.patch(t.update,r,{params:{evaluation_set_id:n}});return p.parse(i.data)},delete:async function(a){let n=await e.delete(t.delete,{params:{evaluation_set_id:a}});return p.parse(n.data)},addTag:async function(a,n){let r=await e.post(t.addTag,{},{params:{evaluation_set_id:a,tag_id:n}});return p.parse(r.data)},removeTag:async function(a,n){let r=await e.delete(t.removeTag,{params:{evaluation_set_id:a,tag_id:n}});return p.parse(r.data)}}}i.z.intersection(o._q,d)},9797:function(e,t,a){a.d(t,{$q:function(){return o},Zm:function(){return u},_z:function(){return c},hX:function(){return _},i9:function(){return s}});var n=a(89979),r=a(76431);let i={get:"/api/v1/spectrograms/"},o=-140,s=.025,u=.01;n.z.object({time:r.AR,freq:r.AR});let d=n.z.object({window_size:n.z.number().positive().default(s),hop_size:n.z.number().positive().default(u),window:n.z.string().default("hann")}).refine(e=>e.window_size>e.hop_size,{message:"window_size must be greater than hop_size",path:["window_size"]}),l=n.z.object({scale:n.z.enum(["amplitude","power","dB"]).default("dB"),clamp:n.z.boolean().default(!0),min_dB:n.z.number().nonpositive().gte(o).default(-80),max_dB:n.z.number().nonpositive().gte(o).default(0),normalize:n.z.boolean().default(!1)}).refine(e=>e.min_dB<e.max_dB,{message:"min_dB must be less than max_dB",path:["min_dB"]}),p=r.nu.and(d).and(l).and(n.z.object({channel:n.z.number().nonnegative().int().default(0),pcen:n.z.boolean().default(!1),cmap:n.z.string().default("grays")})),c={resample:!1,scale:"dB",pcen:!1,cmap:"gray",normalize:!1,clamp:!0,min_dB:-80};function _(e){let{endpoints:t=i,baseUrl:a=""}=e;return{getUrl:function(e){let{recording_id:n,segment:i,parameters:o=c}=e,s=p.parse(o),u=r.AR.parse(i),d={recording_id:n,start_time:u.min,end_time:u.max,...s},l=new URLSearchParams(Object.fromEntries(Object.entries(d).map(e=>{let[t,a]=e;return[t,a.toString()]})));return"".concat(a).concat(t.get,"?").concat(l)}}}},35627:function(e,t,a){a.d(t,{eY:function(){return l},sI:function(){return o}});var n=a(89979),r=a(58883);let i=n.z.object({key:n.z.string(),value:n.z.string()}),o=i.extend({id:n.z.number()});(0,r.T3)(o);let s=n.z.object({search:n.z.string().optional(),key__eq:n.z.string().optional(),value__eq:n.z.string().optional(),value__has:n.z.string().optional(),project__eq:n.z.number().int().optional()}),u={get:"/api/v1/tags/",create:"/api/v1/tags/"},d=n.z.intersection(r._q,s);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return{get:async function(a){let n=await e.get(t.get,{params:d.parse(a)});return n.data},create:async function(a){let{key:n,value:r}=a,i=await e.post(t.create,{key:n,value:r});return o.parse(i.data)}}}},81361:function(e,t,a){a.d(t,{Z:function(){return eD}});var n=a(21841),r=a(27806),i=a(89979),o=a(35627);let s=i.z.object({id:i.z.string().uuid(),username:i.z.string(),email:i.z.string().nullable(),name:i.z.string().nullable(),is_active:i.z.boolean(),is_superuser:i.z.boolean()}),u=i.z.object({id:i.z.string().uuid(),username:i.z.string(),name:i.z.string().nullable()}),d=i.z.object({username:i.z.string().optional(),email:i.z.string().optional(),name:i.z.string().optional()});i.z.object({old_password:i.z.string(),new_password:i.z.string()});let l={me:"/api/v1/users/me",update:"/api/v1/users/me"},p=i.z.object({message:i.z.string(),is_issue:i.z.boolean()}),c=p.extend({id:i.z.number().int(),created_at:i.z.coerce.date(),created_by:u}),_=i.z.object({message:i.z.string().optional(),is_issue:i.z.boolean().optional()});i.z.object({is_issue__eq:i.z.boolean().optional(),created_by__eq:i.z.number().int().optional(),search:i.z.string().optional(),recording__eq:i.z.number().int().optional(),task__eq:i.z.number().int().optional(),sound_event__eq:i.z.number().int().optional()});let g={update:"/api/v1/notes/detail/"},z=i.z.object({id:i.z.number().int(),name:i.z.string()}),m=i.z.object({feature_name:z,value:i.z.number()});var b=a(58883);let v=i.z.object({type:i.z.string(),coordinates:i.z.union([i.z.number(),i.z.array(i.z.number()),i.z.array(i.z.array(i.z.number())),i.z.array(i.z.array(i.z.array(i.z.number())))])}),f=i.z.object({recording_id:i.z.number(),geometry:v}),y=f.extend({id:i.z.number(),tags:i.z.array(o.sI),features:i.z.array(m),created_at:i.z.coerce.date()}),w=i.z.object({geometry:v}),h=(0,b.T3)(y),j=i.z.object({tag__eq:i.z.number().optional(),tag__isin:i.z.array(i.z.number()).optional(),geometry_type__eq:i.z.string().optional(),geometry_type__isin:i.z.array(i.z.string()).optional(),created_at__before:i.z.date().optional(),created_at__after:i.z.date().optional(),recording__eq:i.z.number().optional(),recording__isin:i.z.array(i.z.number()).optional(),recording_tag__eq:i.z.number().optional(),recording_tag__isin:i.z.array(i.z.number()).optional()}),q=i.z.intersection(b._q,j),T={getMany:"/api/v1/sound_events/",get:"/api/v1/sound_events/detail/",update:"/api/v1/sound_events/detail/",delete:"/api/v1/sound_events/detail/",create:"/api/v1/sound_events/",addTag:"/api/v1/sound_events/detail/tags/",removeTag:"/api/v1/sound_events/detail/tags/",addFeature:"/api/v1/sound_events/detail/features/",updateFeature:"/api/v1/sound_events/detail/features/",removeFeature:"/api/v1/sound_events/detail/features/"},N=i.z.object({annotation_id:i.z.number().int(),note_id:i.z.number().int(),note:c}),k=i.z.object({task__eq:i.z.number().optional(),created_by__eq:i.z.string().optional(),project__eq:i.z.number().optional(),recording__eq:i.z.number().optional(),is_issue__eq:i.z.boolean().optional(),message__eq:i.z.string().optional(),message__has:i.z.string().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional()}),M=(0,b.T3)(N),I=i.z.intersection(b._q,k),x=i.z.object({id:i.z.number().int(),tag_id:i.z.number().int(),created_by:u,created_at:i.z.coerce.date(),tag:o.sI}),F=i.z.object({task__eq:i.z.number().optional(),annotation__eq:i.z.number().optional(),recording__eq:i.z.number().int().optional(),tag__eq:i.z.number().int().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional(),project__eq:i.z.number().int().optional(),search:i.z.string().optional(),key__eq:i.z.string().optional(),key__has:i.z.string().optional(),value__eq:i.z.string().optional(),value__has:i.z.string().optional()}),U=(0,b.T3)(x),B=i.z.intersection(b._q,F),L=i.z.object({task_id:i.z.number(),geometry:v,tag_ids:i.z.array(i.z.number()).optional()}),S=i.z.object({geometry:v}),C=i.z.object({id:i.z.number(),uuid:i.z.string().uuid(),task_id:i.z.number(),created_by:u,sound_event:y,notes:i.z.array(N),tags:i.z.array(x)}),E=(0,b.T3)(C),R=i.z.object({project__eq:i.z.number().optional(),task__eq:i.z.number().optional(),recording__eq:i.z.number().optional(),sound_event__eq:i.z.number().optional(),created_by__eq:i.z.string().optional(),tag__eq:i.z.string().optional()}),A=i.z.intersection(b._q,R),O={create:"/api/v1/annotations/",getMany:"/api/v1/annotations/",get:"/api/v1/annotations/detail/",update:"/api/v1/annotations/detail/",addTag:"/api/v1/annotations/detail/tags/",removeTag:"/api/v1/annotations/detail/tags/",addNote:"/api/v1/annotations/detail/notes/",updateNote:"/api/v1/annotations/detail/notes/",removeNote:"/api/v1/annotations/detail/notes/",delete:"/api/v1/annotations/detail/",getNotes:"/api/v1/annotations/notes/",getTags:"/api/v1/annotations/tags/"};var D=a(76431);let Y=i.z.object({username:i.z.string(),password:i.z.string()}),$=i.z.object({email:i.z.string().email(),username:i.z.string(),password:i.z.string(),name:i.z.string()}),P={login:"/api/v1/auth/login",logout:"/api/v1/auth/logout",register:"/api/v1/auth/register"},X={getMany:"/api/v1/recordings/",get:"/api/v1/recordings/detail/",update:"/api/v1/recordings/detail/",delete:"/api/v1/recordings/detail/",addTag:"/api/v1/recordings/detail/tags/",removeTag:"/api/v1/recordings/detail/tags/",addNote:"/api/v1/recordings/detail/notes/",removeNote:"/api/v1/recordings/detail/notes/",updateNote:"/api/v1/recordings/detail/notes/",addFeature:"/api/v1/recordings/detail/features/",removeFeature:"/api/v1/recordings/detail/features/",updateFeature:"/api/v1/recordings/detail/features/",getNotes:"/api/v1/recordings/notes/",getTags:"/api/v1/recordings/tags/"},V=i.z.object({search:i.z.string().optional(),dataset:i.z.number().int().optional(),duration__gt:i.z.number().optional(),duration__lt:i.z.number().optional(),duration__ge:i.z.number().optional(),duration__le:i.z.number().optional(),latitude__gt:i.z.number().optional(),latitude__lt:i.z.number().optional(),latitude__ge:i.z.number().optional(),latitude__le:i.z.number().optional(),latitude__is_null:i.z.boolean().optional(),longitude__gt:i.z.number().optional(),longitude__lt:i.z.number().optional(),longitude__ge:i.z.number().optional(),longitude__le:i.z.number().optional(),longitude__is_null:i.z.boolean().optional()}),Z=i.z.object({id:i.z.number().int(),uuid:i.z.string().uuid(),path:i.z.string(),hash:i.z.string(),duration:i.z.number(),samplerate:i.z.number(),channels:i.z.number(),time_expansion:i.z.number().default(1),date:i.z.coerce.date().nullable(),time:i.z.string().regex(/^\d{2}:\d{2}:\d{2}(\.\d+)?$/).nullable(),latitude:i.z.number().nullable(),longitude:i.z.number().nullable(),created_at:i.z.coerce.date(),tags:i.z.array(o.sI),notes:i.z.array(c),features:i.z.array(m)}),G=(0,b.T3)(Z),K=i.z.object({date:i.z.coerce.date().nullable().optional(),time:i.z.string().regex(/^\d{2}:\d{2}:\d{2}(\.\d+)?$/).nullable().optional(),latitude:i.z.number().nullable().optional(),longitude:i.z.number().nullable().optional(),time_expansion:i.z.coerce.number().optional()}),H=i.z.intersection(b._q,V),J=i.z.object({recording_id:i.z.number().int(),note_id:i.z.number().int(),note:c}),Q=i.z.object({recording__eq:i.z.number().int().optional(),note__eq:i.z.number().int().optional(),created_by__eq:i.z.string().uuid().optional(),dataset__eq:i.z.number().int().optional(),is_issue__eq:i.z.boolean().optional(),message__eq:i.z.string().optional(),message__has:i.z.string().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional()}),W=(0,b.T3)(J),ee=i.z.intersection(b._q,Q),et=i.z.object({recording_id:i.z.number().int(),tag_id:i.z.number().int(),tag:o.sI}),ea=i.z.object({recording__eq:i.z.number().int().optional(),tag__eq:i.z.number().int().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional(),dataset__eq:i.z.number().int().optional(),search:i.z.string().optional(),key__eq:i.z.string().optional(),key__has:i.z.string().optional(),value__eq:i.z.string().optional(),value__has:i.z.string().optional()}),en=(0,b.T3)(et),er=i.z.intersection(b._q,ea);i.z.object({recording_id:i.z.number(),start_time:i.z.number(),end_time:i.z.number()}).refine(e=>e.start_time<e.end_time,{message:"Start time must be less than end time"});let ei=i.z.object({id:i.z.number(),start_time:i.z.number(),end_time:i.z.number(),recording:Z,tags:i.z.array(o.sI),features:i.z.array(m)}).refine(e=>e.start_time<e.end_time,{message:"Start time must be less than end time"});(0,b.T3)(ei);let eo=i.z.object({recording__eq:i.z.number().optional(),recording__isin:i.z.array(i.z.number()).optional(),tag__eq:i.z.number().optional(),tag__isin:i.z.array(i.z.number()).optional()});i.z.intersection(b._q,eo);let es={createMany:"/api/v1/clips/"};var eu=a(91998),ed=a(1799);let el=i.z.object({id:i.z.number().int(),task_id:i.z.number().int(),tag_id:i.z.number().int(),tag:o.sI}),ep=i.z.object({task__eq:i.z.number().int().optional(),recording__eq:i.z.number().int().optional(),tag__eq:i.z.number().int().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional(),project__eq:i.z.number().int().optional(),search:i.z.string().optional(),key__eq:i.z.string().optional(),key__has:i.z.string().optional(),value__eq:i.z.string().optional(),value__has:i.z.string().optional()}),ec=(0,b.T3)(el),e_=i.z.intersection(b._q,ep),eg=i.z.object({state:i.z.enum(["assigned","completed","verified","rejected"])}),ez=i.z.object({id:i.z.number(),state:i.z.enum(["assigned","completed","verified","rejected"]),user:u}),em=i.z.object({clip_id:i.z.number(),project_id:i.z.number()}),eb=i.z.object({id:i.z.number(),clip_id:i.z.number(),project_id:i.z.number(),clip:ei,tags:i.z.array(el),status_badges:i.z.array(ez),notes:i.z.array(c)}),ev=(0,b.T3)(eb),ef=i.z.object({dataset__eq:i.z.number().optional(),dataset__isin:i.z.array(i.z.number()).optional(),project__eq:i.z.number().optional(),project__isin:i.z.array(i.z.number()).optional(),recording_tag__eq:i.z.number().optional(),pending__eq:i.z.boolean().optional(),assigned__eq:i.z.boolean().optional(),verified__eq:i.z.boolean().optional(),rejected__eq:i.z.boolean().optional(),assigned_to__eq:i.z.string().uuid().optional()}),ey=i.z.intersection(b._q,ef),ew=i.z.object({task_id:i.z.number().int(),note_id:i.z.number().int(),note:c}),eh=i.z.object({note__eq:i.z.number().int().optional(),created_by__eq:i.z.string().uuid().optional(),project__eq:i.z.number().int().optional(),task_eq:i.z.number().int().optional(),is_issue__eq:i.z.boolean().optional(),message__eq:i.z.string().optional(),message__has:i.z.string().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional()}),ej=(0,b.T3)(ew),eq=i.z.intersection(b._q,eh),eT={createMany:"/api/v1/tasks/",getMany:"/api/v1/tasks/",get:"/api/v1/tasks/detail/",delete:"/api/v1/tasks/detail/",addNote:"/api/v1/tasks/detail/notes/",updateNote:"/api/v1/tasks/detail/notes/",removeNote:"/api/v1/tasks/detail/notes/",addTag:"/api/v1/tasks/detail/tags/",removeTag:"/api/v1/tasks/detail/tags/",addBadge:"/api/v1/tasks/detail/badges/",removeBadge:"/api/v1/tasks/detail/badges/",getNotes:"/api/v1/tasks/notes/",getTags:"/api/v1/tasks/tags/"},eN={getMany:"/api/v1/evaluation_tasks/",createMany:"/api/v1/evaluation_tasks/",get:"/api/v1/evaluation_task/detail/",delete:"/api/v1/evaluation_task/detail/"},ek=i.z.object({evaluation_set__eq:i.z.number().optional()}),eM=i.z.object({evaluation_set_id:i.z.number(),task_id:i.z.number()}),eI=eM.extend({id:i.z.number(),task:eb}),ex=(0,b.T3)(eI);i.z.intersection(b._q,ek);let eF={getMany:"/api/v1/prediction_runs/",create:"/api/v1/prediction_runs/",get:"/api/v1/prediction_runs/detail/",update:"/api/v1/prediction_runs/detail/",delete:"/api/v1/prediction_runs/detail/",addNote:"/api/v1/prediction_run/detail/notes/",updateNote:"/api/v1/prediction_run/detail/notes/",removeNote:"/api/v1/prediction_run/detail/notes/"},eU=i.z.object({id:i.z.number(),name:i.z.string(),value:i.z.number()}),eB=i.z.object({id:i.z.number(),prediction_run_id:i.z.number(),score:i.z.number(),metrics:i.z.array(eU)}),eL=i.z.object({evaluation_set_id:i.z.number(),user_id:i.z.string().uuid().optional(),model_name:i.z.string().optional(),model_version:i.z.string().optional()}),eS=eL.extend({id:i.z.number(),uuid:i.z.string().uuid(),evaluation:eB.optional(),user:u.optional(),notes:i.z.array(c)});i.z.object({model_name:i.z.string().optional(),model_version:i.z.string().optional()});let eC=i.z.object({evaluation_set__eq:i.z.number().optional(),user__eq:i.z.string().uuid().optional(),model_name__eq:i.z.string().optional(),model_name__has:i.z.string().optional(),is_model__eq:i.z.boolean().optional(),created_at__before:i.z.coerce.date().optional(),created_at__after:i.z.coerce.date().optional(),created_at__on:i.z.coerce.date().optional(),evaluated__eq:i.z.boolean().optional(),score__lt:i.z.number().optional(),score__gt:i.z.number().optional()}),eE=(0,b.T3)(eS);i.z.intersection(b._q,eC);var eR=a(9797);let eA={baseURL:"http://localhost:5000",withCredentials:!0},eO=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:eA,t=n.default.create(e);return{annotation_projects:(0,r.Y3)(t),annotations:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O;return{create:async function(a){let n=L.parse(a),r=await e.post(t.create,n);return C.parse(r.data)},getMany:async function(a){let n=A.parse(a),r=await e.get(t.getMany,{params:n});return E.parse(r.data)},get:async function(a){let n=await e.get(t.get,{params:{annotation_id:a}});return C.parse(n.data)},update:async function(a,n){let r=S.parse(n),i=await e.patch(t.update,r,{params:{annotation_id:a}});return C.parse(i.data)},addTag:async function(a,n){let r=await e.post(t.addTag,{},{params:{annotation_id:a,tag_id:n}});return C.parse(r.data)},removeTag:async function(a,n){let r=await e.delete(t.removeTag,{params:{annotation_id:a,tag_id:n}});return C.parse(r.data)},addNote:async function(a,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=await e.post(t.addNote,{message:n,is_issue:r},{params:{annotation_id:a}});return C.parse(i.data)},updateNote:async function(a,n,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=await e.patch(t.updateNote,{message:r,is_issue:i},{params:{annotation_id:a,note_id:n}});return C.parse(o.data)},removeNote:async function(a,n){let r=await e.delete(t.removeNote,{params:{annotation_id:a,note_id:n}});return C.parse(r.data)},delete:async function(a){let n=await e.delete(t.delete,{params:{annotation_id:a}});return C.parse(n.data)},getNotes:async function(a){let n=I.parse(a),{data:r}=await e.get(t.getNotes,{params:n});return M.parse(r)},getTags:async function(a){let n=B.parse(a),{data:r}=await e.get(t.getTags,{params:n});return U.parse(r)}}}(t),audio:(0,D.F$)({baseUrl:e.baseURL}),auth:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return{login:async function(a){return await e.post(t.login,Y.parse(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},logout:async function(){return await e.post(t.logout)},register:async function(a){let n=$.parse(a),r=await e.post(t.register,n);return s.parse(r.data)}}}(t),clips:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:es;return{createMany:async a=>{let n=await e.post(t.createMany,a);return n.data}}}(t),datasets:(0,eu.XE)({instance:t,baseUrl:e.baseURL}),evaluation_sets:(0,ed.cv)(t),evaluation_tasks:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eN;return{getMany:async a=>{let n=await e.get(t.getMany,{params:a});return ex.parse(n.data)},createMany:async a=>{let n=await e.post(t.createMany,a);return i.z.array(eI).parse(n.data)},get:async a=>{let n=await e.get(t.get,{params:{evaluation_task_id:a}});return eI.parse(n.data)},delete:async a=>{let n=await e.delete(t.delete,{params:{evaluation_task_id:a}});return eI.parse(n.data)}}}(t),notes:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return{update:async function(a,n){let r=_.parse(n),i=await e.patch("".concat(t.update),r,{params:{note_id:a}});return c.parse(i.data)}}}(t),prediction_runs:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eF;return{get:async function(a){let n=await e.get(t.get,{params:{prediction_run_id:a}});return eS.parse(n.data)},getMany:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=await e.get(t.getMany,{params:a});return eE.parse(n.data)},create:async function(a){let n=await e.post(t.create,a);return eS.parse(n.data)},update:async function(a,n){let r=await e.patch(t.update,n,{params:{prediction_run_id:a}});return eS.parse(r.data)},delete:async function(a){let n=await e.delete(t.delete,{params:{prediction_run_id:a}});return eS.parse(n.data)},addNote:async function(a,n,r){let i=await e.post(t.addNote,{message:n,is_issue:r},{params:{prediction_run_id:a}});return eS.parse(i.data)},updateNote:async function(a,n,r,i){let o=await e.patch(t.updateNote,{message:r,is_issue:i},{params:{prediction_run_id:a,note_id:n}});return eS.parse(o.data)},removeNote:async function(a,n){let r=await e.delete(t.removeNote,{params:{prediction_run_id:a,note_id:n}});return eS.parse(r.data)}}}(t),recordings:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X;return{getMany:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=H.parse(a),{data:r}=await e.get(t.getMany,{params:n});return G.parse(r)},get:async function(a){let{data:n}=await e.get(t.get,{params:{recording_id:a}});return Z.parse(n)},update:async function(a,n){let r=K.parse(n),{data:i}=await e.patch(t.update,r,{params:{recording_id:a}});return Z.parse(i)},delete:async function(a){await e.delete(t.delete,{params:{recording_id:a}})},addTag:async function(a){let{recording_id:n,tag_id:r}=a,{data:i}=await e.post(t.addTag,{},{params:{tag_id:r,recording_id:n}});return Z.parse(i)},removeTag:async function(a){let{recording_id:n,tag_id:r}=a,{data:i}=await e.delete(t.removeTag,{params:{recording_id:n,tag_id:r}});return Z.parse(i)},addNote:async function(a){let{recording_id:n,message:r,is_issue:i}=a,{data:o}=await e.post(t.addNote,{message:r,is_issue:i},{params:{recording_id:n}});return Z.parse(o)},removeNote:async function(a){let{recording_id:n,note_id:r}=a,{data:i}=await e.delete(t.removeNote,{params:{recording_id:n,note_id:r}});return Z.parse(i)},updateNote:async function(a){let{recording_id:n,note_id:r,data:i}=a,o=_.parse(i),{data:s}=await e.patch(t.updateNote,o,{params:{recording_id:n,note_id:r}});return Z.parse(s)},addFeature:async function(a){let{recording_id:n,feature_name_id:r,value:i}=a,{data:o}=await e.post(t.addFeature,{feature_name_id:r,value:i},{params:{recording_id:n}});return Z.parse(o)},removeFeature:async function(a){let{recording_id:n,feature_name_id:r}=a,{data:i}=await e.delete(t.removeFeature,{params:{recording_id:n,feature_name_id:r}});return Z.parse(i)},updateFeature:async function(a){let{recording_id:n,feature_name_id:r,value:i}=a,{data:o}=await e.patch(t.updateFeature,{value:i},{params:{recording_id:n,feature_name_id:r}});return Z.parse(o)},getNotes:async function(a){let n=ee.parse(a),{data:r}=await e.get(t.getNotes,{params:n});return W.parse(r)},getTags:async function(a){let n=er.parse(a),{data:r}=await e.get(t.getTags,{params:n});return en.parse(r)}}}(t),sound_events:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;return{get:async function(a){let{data:n}=await e.get(t.get,{params:{sound_event_id:a}});return y.parse(n)},getMany:async function(a){let n=q.parse(a),{data:r}=await e.get(t.getMany,{params:n});return h.parse(r)},create:async function(a){let n=f.parse(a),{data:r}=await e.post(t.create,n);return y.parse(r)},update:async function(a,n){let r=w.parse(n),{data:i}=await e.patch(t.update,r,{params:{sound_event_id:a}});return y.parse(i)},delete:async function(a){let{data:n}=await e.delete(t.delete,{params:{sound_event_id:a}});return y.parse(n)},addTag:async function(a,n){let{data:r}=await e.post(t.addTag,null,{params:{sound_event_id:a,tag_id:n}});return y.parse(r)},removeTag:async function(a,n){let{data:r}=await e.delete(t.removeTag,{params:{sound_event_id:a,tag_id:n}});return y.parse(r)},addFeature:async function(a,n,r){let{data:i}=await e.post(t.addFeature,{feature_name_id:n,value:r},{params:{sound_event_id:a}});return y.parse(i)}}}(t),spectrograms:(0,eR.hX)({baseUrl:e.baseURL}),tags:(0,o.eY)(t),tasks:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eT;return{createMany:async function(a){let n=i.z.array(em).parse(a),r=await e.post(t.createMany,n);return i.z.array(eb).parse(r.data)},getMany:async function(a){let n=ey.parse(a),r=await e.get(t.getMany,{params:n});return ev.parse(r.data)},get:async function(a){let n=await e.get(t.get,{params:{task_id:a}});return eb.parse(n.data)},delete:async function(a){let n=await e.delete(t.delete,{params:{task_id:a}});return eb.parse(n.data)},getNotes:async function(a){let n=eq.parse(a),{data:r}=await e.get(t.getNotes,{params:n});return ej.parse(r)},getTags:async function(a){let n=e_.parse(a),{data:r}=await e.get(t.getTags,{params:n});return ec.parse(r)},addNote:async function(a){let{task_id:n,message:r,is_issue:i}=a,o=await e.post(t.addNote,{message:r,is_issue:i},{params:{task_id:n}});return eb.parse(o.data)},updateNote:async function(a){let{task_id:n,note_id:r,data:i}=a,o=_.parse(i),s=await e.patch(t.updateNote,o,{params:{task_id:n,note_id:r}});return eb.parse(s.data)},removeNote:async function(a){let{task_id:n,note_id:r}=a,i=await e.delete(t.removeNote,{params:{task_id:n,note_id:r}});return eb.parse(i.data)},addTag:async function(a){let{task_id:n,tag_id:r}=a,i=await e.post(t.addTag,{},{params:{task_id:n,tag_id:r}});return eb.parse(i.data)},removeTag:async function(a){let{task_id:n,tag_id:r}=a,i=await e.delete(t.removeTag,{params:{task_id:n,tag_id:r}});return eb.parse(i.data)},addBadge:async function(a){let{task_id:n,state:r}=a,i=eg.parse({state:r}),o=await e.post(t.addBadge,i,{params:{task_id:n}});return eb.parse(o.data)},removeBadge:async function(a,n){let r=await e.delete(t.removeBadge,{params:{task_id:a,badge_id:n}});return eb.parse(r.data)}}}(t),user:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return{me:async function(){let a=await e.get(t.me);return s.parse(a.data)},update:async function(a){let n=d.parse(a),r=await e.patch(t.update,n);return s.parse(r.data)}}}(t)}}({baseURL:"http://localhost:5000",withCredentials:!0});var eD=eO}}]);