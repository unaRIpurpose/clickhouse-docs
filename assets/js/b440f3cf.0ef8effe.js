"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50831],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_position:41,sidebar_label:"SAMPLE BY"},l="Manipulating Sampling-Key Expressions",c={unversionedId:"en/sql-reference/statements/alter/sample-by",id:"en/sql-reference/statements/alter/sample-by",title:"Manipulating Sampling-Key Expressions",description:"manipulations-with-sampling-key-expressions}",source:"@site/docs/en/sql-reference/statements/alter/sample-by.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/sample-by",permalink:"/en/sql-reference/statements/alter/sample-by",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/statements/alter/sample-by.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"SAMPLE BY"},sidebar:"english",previous:{title:"ORDER BY",permalink:"/en/sql-reference/statements/alter/order-by"},next:{title:"INDEX",permalink:"/en/sql-reference/statements/alter/index/"}},p={},m=[],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manipulations-with-sampling-key-expressions"},"Manipulating Sampling-Key Expressions"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY SAMPLE BY new_expression\n")),(0,i.kt)("p",null,"The command changes the ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"sampling key")," of the table to ",(0,i.kt)("inlineCode",{parentName:"p"},"new_expression")," (an expression or a tuple of expressions)."),(0,i.kt)("p",null,"The command is lightweight in the sense that it only changes metadata. The primary key must contain the new sample key."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It only works for tables in the ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family (including ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables)."))))}f.isMDXComponent=!0}}]);