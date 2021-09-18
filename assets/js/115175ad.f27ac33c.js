"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[8103],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7363:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Assembling and transforming XML objects",sidebar_position:7},l=void 0,p={unversionedId:"development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",id:"development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",isDocsHomePage:!1,title:"Assembling and transforming XML objects",description:"Use the prependChild() method or the appendChild() method to add a property to the beginning or end of an XML object\u2019s list of properties, as the following example shows:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",permalink:"/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Assembling and transforming XML objects",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Initializing XML variables",permalink:"/docs/development/core-actionscript-classes/working-with-xml/initialising-xml-variables"},next:{title:"Traversing XML structures",permalink:"/docs/development/core-actionscript-classes/working-with-xml/traversing-xml-structures"}},c=[],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prependChild()")," method or the ",(0,o.kt)("inlineCode",{parentName:"p"},"appendChild()")," method to add a property to the beginning or end of an ",(0,o.kt)("inlineCode",{parentName:"p"},"XML")," object\u2019s list of properties, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x1:XML = <p>Line 1</p>\nvar x2:XML = <p>Line 2</p>\nvar x:XML = <body></body>\nx = x.appendChild(x1);\nx = x.appendChild(x2);\nx = x.prependChild(<p>Line 0</p>);\n    // x == <body><p>Line 0</p><p>Line 1</p><p>Line 2</p></body>\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"insertChildBefore()")," method or the ",(0,o.kt)("inlineCode",{parentName:"p"},"insertChildAfter()")," method to add a property before or after a specified property, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x:XML =\n    <body>\n        <p>Paragraph 1</p>\n        <p>Paragraph 2</p>\n    </body>\nvar newNode:XML = <p>Paragraph 1.5</p>\nx = x.insertChildAfter(x.p[0], newNode)\nx = x.insertChildBefore(x.p[2], <p>Paragraph 1.75</p>)\n")),(0,o.kt)("p",null,"As the following example shows, you can also use curly brace operators ( { and } ) to pass data by reference (from other variables) when constructing XML objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'var ids:Array = [121, 122, 123];\nvar names:Array = [["Murphy","Pat"], ["Thibaut","Jean"], ["Smith","Vijay"]]\nvar x:XML = new XML("<employeeList></employeeList>");\n\nfor (var i:int = 0; i < 3; i++)\n{\n    var newnode:XML = new XML();\n    newnode =\n        <employee id={ids[i]}>\n            <last>{names[i][0]}</last>\n            <first>{names[i][1]}</first>\n        </employee>;\n\n    x = x.appendChild(newnode)\n}\n')),(0,o.kt)("p",null,"You can assign properties and attributes to an XML object by using the = operator, as in the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'var x:XML =\n    <employee>\n        <lastname>Smith</lastname>\n    </employee>\nx.firstname = "Jean";\nx.@id = "239";\n')),(0,o.kt)("p",null,"This sets the XML object x to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<employee id="239">\n    <lastname>Smith</lastname>\n    <firstname>Jean</firstname>\n</employee>\n')),(0,o.kt)("p",null,"You can use the + and += operators to concatenate XMLList objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x1:XML = <a>test1</a>\nvar x2:XML = <b>test2</b>\nvar xList:XMLList = x1 + x2;\nxList += <c>test3</c>\n")),(0,o.kt)("p",null,"This sets the XMLList object xList to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<a>test1</a>\n<b>test2</b>\n<c>test3</c>\n")))}d.isMDXComponent=!0}}]);