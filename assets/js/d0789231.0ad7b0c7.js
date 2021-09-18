"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[5582],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"XML type conversion",sidebar_position:10},c=void 0,l={unversionedId:"development/core-actionscript-classes/working-with-xml/xml-type-conversion",id:"development/core-actionscript-classes/working-with-xml/xml-type-conversion",isDocsHomePage:!1,title:"XML type conversion",description:"You can convert XML objects and XMLList objects to String values. Similarly, you can convert strings to XML objects and XMLList objects. Also, keep in mind that all XML attribute values, names, and text values are strings. The following sections discuss all these forms of XML type conversion.",source:"@site/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/xml-type-conversion",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"XML type conversion",sidebar_position:10},sidebar:"mainSidebar",previous:{title:"Using XML namespaces",permalink:"/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces"},next:{title:"Reading external XML documents",permalink:"/docs/development/core-actionscript-classes/working-with-xml/reading-external-xml-documents"}},m=[{value:"Converting XML and XMLList objects to strings",id:"converting-xml-and-xmllist-objects-to-strings",children:[]},{value:"Converting strings to XML objects",id:"converting-strings-to-xml-objects",children:[]},{value:"Converting attribute values, names, and text values from strings",id:"converting-attribute-values-names-and-text-values-from-strings",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can convert XML objects and XMLList objects to String values. Similarly, you can convert strings to XML objects and XMLList objects. Also, keep in mind that all XML attribute values, names, and text values are strings. The following sections discuss all these forms of XML type conversion."),(0,i.kt)("h2",{id:"converting-xml-and-xmllist-objects-to-strings"},"Converting XML and XMLList objects to strings"),(0,i.kt)("p",null,"The XML and XMLList classes include a ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," method and a ",(0,i.kt)("inlineCode",{parentName:"p"},"toXMLString()")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"toXMLString()")," method returns a string that includes all tags, attributes, namespace declarations, and content of the XML object. For XML objects with complex content (child elements), the toString() method does exactly the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"toXMLString()")," method. For XML objects with simple content (those that contain only one text element), the toString() method returns only the text content of the element, as the following example shows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var myXML:XML =\n    <order>\n        <item id='1' quantity='2'>\n            <menuName>burger</menuName>\n            <price>3.95</price>\n        </item>\n    <order>;\n\ntrace(myXML.item[0].menuName.toXMLString());\n    // <menuName>burger</menuName>\ntrace(myXML.item[0].menuName.toString());\n    // burger\n")),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"trace()")," method without specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"toXMLString()")," , the data is converted using the ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," method by default, as this code shows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var myXML:XML =\n    <order>\n        <item id='1' quantity='2'>\n            <menuName>burger</menuName>\n            <price>3.95</price>\n        </item>\n    <order>;\n\ntrace(myXML.item[0].menuName);\n    // burger\n")),(0,i.kt)("p",null,"When using the trace() method to debug code, you will often want to use the toXMLString() method so that the trace() method outputs more complete data."),(0,i.kt)("h2",{id:"converting-strings-to-xml-objects"},"Converting strings to XML objects"),(0,i.kt)("p",null,"You can use the new XML() constructor to create an XML object from a string, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},'var x:XML = new XML("<a>test</a>");\n')),(0,i.kt)("p",null,"If you attempt to convert a string to XML from a string that represents invalid XML or XML that is not well formed, a run-time error is thrown, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},'var x:XML = new XML("<a>test"); // throws an error\n')),(0,i.kt)("h2",{id:"converting-attribute-values-names-and-text-values-from-strings"},"Converting attribute values, names, and text values from strings"),(0,i.kt)("p",null,"All XML attribute values, names, and text values are String data types, and you may need to convert these to other data types. For example, the following code uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Number()")," function to convert text values to numbers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var myXML:XML =\n                        <order>\n                            <item>\n                                <price>3.95</price>\n                            </item>\n                            <item>\n                                <price>1.00</price>\n                            </item>\n                        </order>;\n\nvar total:XML = <total>0</total>;\nmyXML.appendChild(total);\n\nfor each (var item:XML in myXML.item)\n{\n    myXML.total.children()[0] = Number(myXML.total.children()[0])\n                                                + Number(item.price.children()[0]);\n}\ntrace(myXML.total); // 4.95;\n")),(0,i.kt)("p",null,"If this code did not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Number()")," function, the code would interpret the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator as the string concatenation operator, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"trace()")," method in the last line would output the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"01.003.95\n")))}u.isMDXComponent=!0}}]);