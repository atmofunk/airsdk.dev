"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6914],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Animating objects",sidebar_position:7},c=void 0,l={unversionedId:"development/display/display-programming/animating-objects",id:"development/display/display-programming/animating-objects",isDocsHomePage:!1,title:"Animating objects",description:"Animation is the process of making something move, or alternatively, of making something change over time. Scripted animation is a fundamental part of video games, and is often used to add polish and useful interaction clues to other applications.",source:"@site/docs/development/display/display-programming/animating-objects.md",sourceDirName:"development/display/display-programming",slug:"/development/display/display-programming/animating-objects",permalink:"/docs/development/display/display-programming/animating-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/animating-objects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Animating objects",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Masking display objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/masking-display-objects"},next:{title:"Stage orientation",permalink:"/docs/development/display/display-programming/stage-orientation"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Animation is the process of making something move, or alternatively, of making something change over time. Scripted animation is a fundamental part of video games, and is often used to add polish and useful interaction clues to other applications."),(0,r.kt)("p",null,"The fundamental idea behind scripted animation is that a change needs to take place, and that change needs to be divided into increments over time. It\u2019s easy to make something repeat in ActionScript, using a common looping statement. However, a loop will run through all its iterations before updating the display. To create scripted animation, you need to write ActionScript that performs some action repeatedly over time and also updates the screen each time it runs."),(0,r.kt)("p",null,"For example, imagine you want to create a simple animation, such as making a ball travel across the screen. ActionScript includes a simple mechanism that allows you to track the passage of time and update the screen accordingly\u2014meaning you could write code that moves the ball a small amount each time, until it reaches its destination. After each move the screen would update, making the cross-Stage motion visible to the viewer."),(0,r.kt)("p",null,"From a practical standpoint, it makes sense to synchronize scripted animation with the SWF file\u2019s frame rate (in other words, make one animation change each time a new frame displays or would display), since that defines how frequently Flash Player or AIR updates the screen. Each display object has an enterFrame event that is dispatched according to the frame rate of the SWF file\u2014one event per frame. Most developers who create scripted animation use the enterFrame event as a way to create actions that repeat over time. You could write code that listens to the enterFrame event, moving the animated ball a certain amount each frame, and as the screen is updated (each frame), the ball would be redrawn in its new location, creating motion."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Another way to perform an action repeatedly over time is to use the Timer class. A Timer instance triggers an event notification each time a specified amount of time has past. You could write code that performs animation by handling the Timer class\u2019s timer event, setting the time interval to a small one (some fraction of a second). For more information about using the Timer class, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/working-with-dates-and-times#controlling-time-intervals"},"Controlling time intervals")," ."))),(0,r.kt)("p",null,"In the following example, a circle Sprite instance, named ",(0,r.kt)("inlineCode",{parentName:"p"},"circle")," , is created on the Stage. When the user clicks the circle, a scripted animation sequence begins, causing ",(0,r.kt)("inlineCode",{parentName:"p"},"circle")," to fade (its ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," property is decreased) until it is completely transparent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.Sprite;\nimport flash.events.Event;\nimport flash.events.MouseEvent;\n\n// draw a circle and add it to the display list\nvar circle:Sprite = new Sprite();\ncircle.graphics.beginFill(0x990000);\ncircle.graphics.drawCircle(50, 50, 50);\ncircle.graphics.endFill();\naddChild(circle);\n\n// When this animation starts, this function is called every frame.\n// The change made by this function (updated to the screen every\n// frame) is what causes the animation to occur.\nfunction fadeCircle(event:Event):void\n{\n    circle.alpha -= .05;\n\n    if (circle.alpha <= 0)\n    {\n        circle.removeEventListener(Event.ENTER_FRAME, fadeCircle);\n    }\n\n}\n\nfunction startAnimation(event:MouseEvent):void\n{\n    circle.addEventListener(Event.ENTER_FRAME, fadeCircle);\n}\n\ncircle.addEventListener(MouseEvent.CLICK, startAnimation);\n")),(0,r.kt)("p",null,"When the user clicks the circle, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"fadeCircle()")," is subscribed as a listener of the ",(0,r.kt)("inlineCode",{parentName:"p"},"enterFrame")," event, meaning it begins to be called once per frame. That function fades circle by changing its ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," property, so once per frame the circle\u2019s alpha decreases by .05 (5 percent) and the screen is updated. Eventually, when the alpha value is 0 ( circle is completely transparent), the ",(0,r.kt)("inlineCode",{parentName:"p"},"fadeCircle()")," function is removed as an event listener, ending the animation."),(0,r.kt)("p",null,"The same code could be used, for example, to create animated motion instead of fading. By substituting a different property for ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," in the function that is an ",(0,r.kt)("inlineCode",{parentName:"p"},"enterFrame")," event listener, that property will be animated instead. For example, changing this line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"    circle.alpha -= .05;\n")),(0,r.kt)("p",null,"to this code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"    circle.x += 5;\n")),(0,r.kt)("p",null,"will animate the x property, causing the circle to move to the right across the Stage. The condition that ends the animation could be changed to end the animation (that is, unsubscribe the enterFrame listener) when the desired x coordinate is reached."))}m.isMDXComponent=!0}}]);