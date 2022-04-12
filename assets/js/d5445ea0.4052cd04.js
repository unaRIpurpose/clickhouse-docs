"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29096],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:49,sidebar_label:"DateTime64"},p="DateTime64",m={unversionedId:"ru/sql-reference/data-types/datetime64",id:"ru/sql-reference/data-types/datetime64",title:"DateTime64",description:"data_type-datetime64}",source:"@site/docs/ru/sql-reference/data-types/datetime64.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/datetime64",permalink:"/ru/sql-reference/data-types/datetime64",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/data-types/datetime64.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"DateTime64"},sidebar:"russia",previous:{title:"DateTime",permalink:"/ru/sql-reference/data-types/datetime"},next:{title:"Enum",permalink:"/ru/sql-reference/data-types/enum"}},s={},u=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data_type-datetime64"},"DateTime64"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u0430\u043a \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u043d\u0430\u044f \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f, \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0443\u0431-\u0441\u0435\u043a\u0443\u043d\u0434\u043d\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e."),(0,i.kt)("p",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0438\u043a\u0430 (\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c, precision): 10",(0,i.kt)("sup",null,"-precision")," \u0441\u0435\u043a\u0443\u043d\u0434, \u0433\u0434\u0435 precision - \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ","[ 0 : 9 ]",".\n\u041e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f - 3 (\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b), 6 (\u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u044b), 9 (\u043d\u0430\u043d\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u044b)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DateTime64(precision, [timezone])\n")),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u2018\u0442\u0438\u043a\u043e\u0432\u2019, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u044d\u043f\u043e\u0445\u0438 (1970-01-01 00:00:00 UTC), \u0432 Int64. \u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0438\u043a\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c precision. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0438\u043f ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441, \u0435\u0434\u0438\u043d\u044b\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u043e, \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435 \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u043f\u0430\u0440\u0441\u0438\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a (\u20182020-01-01 05:00:01.000\u2019). \u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u0432\u044b\u0431\u043e\u0440\u043a\u0438), \u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043b\u043e\u043d\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("p",null,"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: ","[","1925-01-01 00:00:00, 2283-11-11 23:59:59.99999999","]"," (\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 8)."),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64")," \u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043d\u0435\u0451:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` DateTime64(3, 'Europe/Moscow'),\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800000, 1), ('2019-01-01 00:00:00', 2);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00.000 \u2502        1 \u2502\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u0442\u044b-\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043a\u0430\u043a \u0447\u0438\u0441\u043b\u0430 (\u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u2018Unix timestamp\u2019), \u0432\u0440\u0435\u043c\u044f \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a UTC. Unix timestamp ",(0,i.kt)("inlineCode",{parentName:"li"},"1546300800")," \u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u043c \u043f\u043e\u044f\u0441\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"Europe/London (UTC+0)")," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0440\u0435\u043c\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'"),". \u041e\u0434\u043d\u0430\u043a\u043e, \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime('Europe/Moscow (UTC+3)')"),", \u0442\u0430\u043a \u0447\u0442\u043e \u043f\u0440\u0438 \u0432\u044b\u0432\u043e\u0434\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"2019-01-01 03:00:00"),"."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u0442\u044b-\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0432\u0440\u0435\u043c\u044f \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u043c\u0443 \u043f\u043e\u044f\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0438. ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0432\u0440\u0435\u043c\u044f \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 (\u0438 \u0432 \u0431\u0430\u0437\u0443 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"'2018-12-31 21:00:00'")," \u0432 \u0432\u0438\u0434\u0435 Unix Timestamp).")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = toDateTime64('2019-01-01 00:00:00', 3, 'Europe/Moscow');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u043d\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u0440\u043e\u043a \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u044f\u0441\u0430 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime64(now(), 3, 'Europe/Moscow') AS column, toTypeName(column) AS x;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500column\u2500\u252c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-10-16 04:12:04.000 \u2502 DateTime64(3, 'Europe/Moscow') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0447\u0430\u0441\u043e\u0432\u044b\u0445 \u043f\u043e\u044f\u0441\u043e\u0432")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\ntoDateTime64(timestamp, 3, 'Europe/London') as lon_time,\ntoDateTime64(timestamp, 3, 'Europe/Moscow') as mos_time\nFROM dt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500lon_time\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mos_time\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502 2019-01-01 03:00:00.000 \u2502\n\u2502 2018-12-31 21:00:00.000 \u2502 2019-01-01 00:00:00.000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/type-conversion-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/date-time-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/array-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/operations/settings/#settings-date_time_input_format"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_input_format"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/operations/settings/"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_output_format"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"a"},"timezone"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/operators/#operators-datetime"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/date"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"a"},"Date"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")))))}d.isMDXComponent=!0}}]);