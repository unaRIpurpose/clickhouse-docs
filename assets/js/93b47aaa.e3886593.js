"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62840],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,O=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(O,l(l({ref:t},u),{},{components:r})):n.createElement(O,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={sidebar_position:46,sidebar_label:"ROLE"},i="ALTER ROLE",s={unversionedId:"ru/sql-reference/statements/alter/role",id:"ru/sql-reference/statements/alter/role",title:"ALTER ROLE",description:"alter-role-statement}",source:"@site/docs/ru/sql-reference/statements/alter/role.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/role",permalink:"/ru/sql-reference/statements/alter/role",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/alter/role.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"ROLE"},sidebar:"russia",previous:{title:"QUOTA",permalink:"/ru/sql-reference/statements/alter/quota"},next:{title:"ROW POLICY",permalink:"/ru/sql-reference/statements/alter/row-policy"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alter-role-statement"},"ALTER ROLE"),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0440\u043e\u043b\u0438."),(0,o.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER ROLE [IF EXISTS] name1 [ON CLUSTER cluster_name1] [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] [RENAME TO new_name2] ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY|WRITABLE] | PROFILE 'profile_name'] [,...]\n")))}m.isMDXComponent=!0}}]);