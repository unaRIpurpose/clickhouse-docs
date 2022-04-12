"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29504],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58480:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={},c="system.metrics",l={unversionedId:"ru/operations/system-tables/metrics",id:"ru/operations/system-tables/metrics",title:"system.metrics",description:"system_tables-metrics}",source:"@site/docs/ru/operations/system-tables/metrics.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/metrics",permalink:"/ru/operations/system-tables/metrics",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.metric_log",permalink:"/ru/operations/system-tables/metric_log"},next:{title:"system.mutations",permalink:"/ru/operations/system-tables/mutations"}},u={},m=[],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-metrics"},"system.metrics"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u0435\u0442\u0440\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0438\u043b\u0438 \u0438\u043c\u0435\u044e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0438\u0441\u043b\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u043b\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0438. \u042d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,s.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," (",(0,s.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"description")," (",(0,s.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438.")),(0,s.kt)("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Common/CurrentMetrics.cpp"},"src/Common/CurrentMetrics.cpp"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.metrics LIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u252c\u2500description\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Query                      \u2502     1 \u2502 Number of executing queries                                                                                                                                                                      \u2502\n\u2502 Merge                      \u2502     0 \u2502 Number of executing background merges                                                                                                                                                            \u2502\n\u2502 PartMutation               \u2502     0 \u2502 Number of mutations (ALTER DELETE/UPDATE)                                                                                                                                                        \u2502\n\u2502 ReplicatedFetch            \u2502     0 \u2502 Number of data parts being fetched from replicas                                                                                                                                                \u2502\n\u2502 ReplicatedSend             \u2502     0 \u2502 Number of data parts being sent to replicas                                                                                                                                                      \u2502\n\u2502 ReplicatedChecks           \u2502     0 \u2502 Number of data parts checking for consistency                                                                                                                                                    \u2502\n\u2502 BackgroundPoolTask         \u2502     0 \u2502 Number of active tasks in BackgroundProcessingPool (merges, mutations, fetches, or replication queue bookkeeping)                                                                                \u2502\n\u2502 BackgroundSchedulePoolTask \u2502     0 \u2502 Number of active tasks in BackgroundSchedulePool. This pool is used for periodic ReplicatedMergeTree tasks, like cleaning old data parts, altering data parts, replica re-initialization, etc.   \u2502\n\u2502 DiskSpaceReservedForMerge  \u2502     0 \u2502 Disk space reserved for currently running background merges. It is slightly more than the total size of currently merging parts.                                                                     \u2502\n\u2502 DistributedSend            \u2502     0 \u2502 Number of connections to remote servers sending data that was INSERTed into Distributed tables. Both synchronous and asynchronous mode.                                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-asynchronous_metrics"},"system.asynchronous_metrics")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u044b\u043c\u0438 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-events"},"system.events")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-metric_log"},"system.metric_log")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0435\u0442\u0440\u0438\u043a \u0438\u0437 ",(0,s.kt)("inlineCode",{parentName:"li"},"system.metrics")," \u0438 ",(0,s.kt)("inlineCode",{parentName:"li"},"system.events"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/ru/operations/monitoring"},"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433")," \u2014 \u043e\u0441\u043d\u043e\u0432\u044b \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0432 ClickHouse.")))}f.isMDXComponent=!0}}]);