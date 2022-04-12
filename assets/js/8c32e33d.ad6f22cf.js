"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30685],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=o(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={sidebar_position:35,sidebar_label:"DATABASE"},c="CREATE DATABASE",o={unversionedId:"zh/sql-reference/statements/create/database",id:"zh/sql-reference/statements/create/database",title:"CREATE DATABASE",description:"query-language-create-database}",source:"@site/docs/zh/sql-reference/statements/create/database.md",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/database",permalink:"/zh/sql-reference/statements/create/database",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/create/database.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"DATABASE"},sidebar:"chinese",previous:{title:"CREATE",permalink:"/zh/sql-reference/statements/create/"},next:{title:"TABLE",permalink:"/zh/sql-reference/statements/create/table"}},u={},p=[{value:"\u6761\u4ef6",id:"clauses",level:2},{value:"IF NOT EXISTS",id:"if-not-exists",level:3},{value:"ON CLUSTER",id:"on-cluster",level:3},{value:"ENGINE",id:"engine",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query-language-create-database"},"CREATE DATABASE"),(0,i.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster] [ENGINE = engine(...)]\n")),(0,i.kt)("h2",{id:"clauses"},"\u6761\u4ef6"),(0,i.kt)("h3",{id:"if-not-exists"},"IF NOT EXISTS"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"db_name"),"\u6570\u636e\u5e93\u5df2\u7ecf\u5b58\u5728\uff0c\u5219ClickHouse\u4e0d\u4f1a\u521b\u5efa\u65b0\u6570\u636e\u5e93\u5e76\u4e14\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u5b50\u53e5\uff0c\u5219\u4e0d\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u5b50\u53e5\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002")),(0,i.kt)("h3",{id:"on-cluster"},"ON CLUSTER"),(0,i.kt)("p",null,"ClickHouse\u5728\u6307\u5b9a\u96c6\u7fa4\u7684\u6240\u6709\u670d\u52a1\u5668\u4e0a\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"db_name"),"\u6570\u636e\u5e93\u3002 \u66f4\u591a\u7ec6\u8282\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/distributed-ddl"},"Distributed DDL")," article."),(0,i.kt)("h3",{id:"engine"},"ENGINE"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/engines/database-engines/mysql"},"MySQL")," \u5141\u8bb8\u60a8\u4ece\u8fdc\u7a0bMySQL\u670d\u52a1\u5668\u68c0\u7d22\u6570\u636e. \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cClickHouse\u4f7f\u7528\u81ea\u5df1\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/engines/database-engines/"},"database engine"),". \u8fd8\u6709\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"../../../engines/database-engines/lazy"},"lazy"),"\u5f15\u64ce."))}d.isMDXComponent=!0}}]);