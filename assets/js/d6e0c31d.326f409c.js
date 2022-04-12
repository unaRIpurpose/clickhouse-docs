"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45212],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:53,sidebar_label:"WATCH"},o="\u0417\u0430\u043f\u0440\u043e\u0441 WATCH",p={unversionedId:"ru/sql-reference/statements/watch",id:"ru/sql-reference/statements/watch",title:"\u0417\u0430\u043f\u0440\u043e\u0441 WATCH",description:"watch}",source:"@site/docs/ru/sql-reference/statements/watch.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/watch",permalink:"/ru/sql-reference/statements/watch",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/watch.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,sidebar_label:"WATCH"},sidebar:"russia",previous:{title:"USE",permalink:"/ru/sql-reference/statements/use"},next:{title:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",permalink:"/ru/sql-reference/syntax"}},c={},u=[{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b",id:"watch-virtual-columns",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f EVENTS",id:"events-clause",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f LIMIT",id:"limit-clause",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f FORMAT",id:"format-clause",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"watch"},"\u0417\u0430\u043f\u0440\u043e\u0441 WATCH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u0412\u0430\u0436\u043d\u043e"\n\u042d\u0442\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f. \u041e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0432\u043b\u0435\u0447\u044c \u043f\u043e\u0442\u0435\u0440\u044e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445.\n\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c `LIVE VIEW` \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b `WATCH`, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 `set allow_experimental_live_view = 1`.\n:::\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view [EVENTS] [LIMIT n] [FORMAT format]\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/view#live-view"},"LIVE-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),". \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u043d\u0435 \u0431\u044b\u043b \u0437\u0430\u0434\u0430\u043d, \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/view#live-view"},"LIVE-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view;\n")),(0,l.kt)("h2",{id:"watch-virtual-columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,l.kt)("p",null,"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("inlineCode",{parentName:"p"},"_version")," \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u044e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:21 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:26 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:31 \u2502        3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,l.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0443, \u043e\u0434\u043d\u0430\u043a\u043e \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/insert-into"},"INSERT INTO")," \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table WATCH [db.]live_view ...\n")),(0,l.kt)("h2",{id:"events-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f EVENTS"),(0,l.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"EVENTS")," \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH"),". \u0412\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view EVENTS;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500version\u2500\u2510\n\u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,l.kt)("h2",{id:"limit-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f LIMIT"),(0,l.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n")," \u0437\u0430\u0434\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH"),", \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u043e \u0447\u0438\u0441\u043b\u043e \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT 0")," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," \u0432\u0435\u0440\u043d\u0435\u0442 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view LIMIT 1;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS LIMIT 1;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"format-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f FORMAT"),(0,l.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043e\u0434\u043d\u043e\u0438\u043c\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/select/format#format-clause"},"SELECT"),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"')),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"\u041f\u0440\u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0438 [LIVE VIEW](/ru/sql-reference/statements/create/view#live-view) \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 HTTP \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 [JSONEachRowWithProgress](/ru/interfaces/formats#jsoneachrowwithprogress). \u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043f\u043e\u0442\u043e\u043a \u0432\u044b\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e HTTP-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f. \u041f\u0440\u043e\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c\u0438 \u043e\u0431 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439[live_view_heartbeat_interval](/ru/sql-reference/statements/create/view#live-view-settings).\n")))))}d.isMDXComponent=!0}}]);