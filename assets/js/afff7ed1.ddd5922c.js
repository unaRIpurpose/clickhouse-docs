"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3496],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,E=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(E,i(i({ref:t},u),{},{components:r})):n.createElement(E,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50061:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={sidebar_position:50,sidebar_label:"VIEW"},s="\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ALTER TABLE \u2026 MODIFY QUERY",c={unversionedId:"ru/sql-reference/statements/alter/view",id:"ru/sql-reference/statements/alter/view",title:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ALTER TABLE \u2026 MODIFY QUERY",description:"alter-modify-query}",source:"@site/docs/ru/sql-reference/statements/alter/view.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/view",permalink:"/ru/sql-reference/statements/alter/view",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/alter/view.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"VIEW"},sidebar:"russia",previous:{title:"PROJECTION",permalink:"/ru/sql-reference/statements/alter/projection"},next:{title:"COMMENT",permalink:"/ru/sql-reference/statements/alter/comment"}},u={},p=[{value:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ALTER LIVE VIEW",id:"alter-live-view",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alter-modify-query"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ALTER TABLE \u2026 MODIFY QUERY"),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u0437\u0430\u0434\u0430\u043d \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/view#materialized"},"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),", \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 'ALTER TABLE \u2026 MODIFY QUERY'. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"TO [db.]name"),". \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_experimental_alter_materialized_view_structure")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430. "),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"TO [db.]name"),", \u0442\u043e \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/detach"},"DETACH"),", \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/"},"ALTER TABLE"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u043e\u0432\u0430 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/attach"},"ATTACH"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE src_table (`a` UInt32) ENGINE = MergeTree ORDER BY a;\nCREATE MATERIALIZED VIEW mv (`a` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT a FROM src_table; \nINSERT INTO src_table (a) VALUES (1), (2);\nSELECT * FROM mv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mv MODIFY QUERY SELECT a * 2 as a FROM src_table;\nINSERT INTO src_table (a) VALUES (3), (4);\nSELECT * FROM mv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 6 \u2502\n\u2502 8 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"alter-live-view"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ALTER LIVE VIEW"),(0,l.kt)("p",null,"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER LIVE VIEW ... REFRESH")," \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/view#live-view"},"Live-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),". \u0421\u043c. \u0440\u0430\u0437\u0434\u0435\u043b ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/view#live-view-alter-refresh"},"Force Live View Refresh"),"."))}f.isMDXComponent=!0}}]);