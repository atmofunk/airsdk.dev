(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[15],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||h[m]||s;return a?i.createElement(f,o(o({ref:t},p),{},{components:a})):i.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4061:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return l},default:function(){return p}});var i=a(2122),n=a(9756),s=(a(7294),a(3905)),o={title:"Basics of display programming",sidebar_position:1},r={unversionedId:"development/display/display-programming/basics-of-display-programming",id:"development/display/display-programming/basics-of-display-programming",isDocsHomePage:!1,title:"Basics of display programming",description:"Each application built with ActionScript 3.0 has a hierarchy of displayed objects known as the display list , illustrated below. The display list contains all the visible elements in the application.",source:"@site/docs/development/display/display-programming/basics-of-display-programming.md",sourceDirName:"development/display/display-programming",slug:"/development/display/display-programming/basics-of-display-programming",permalink:"/docs/development/display/display-programming/basics-of-display-programming",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/basics-of-display-programming.md",version:"current",sidebarPosition:1,frontMatter:{title:"Basics of display programming",sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with application domains",permalink:"/docs/development/core-actionscript-classes/working-with-application-domains"}},l=[{value:"Important concepts and terms",id:"important-concepts-and-terms",children:[]}],c={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Each application built with ActionScript 3.0 has a hierarchy of displayed objects known as the display list , illustrated below. The display list contains all the visible elements in the application."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2011).Z})),(0,s.kt)("p",null,"As the illustration shows, display elements fall into one or more of the following groups:"),(0,s.kt)("h4",{id:"the-stage"},"The Stage"),(0,s.kt)("p",null,"The Stage is the base container of display objects. Each application has one Stage object, which contains all on-screen display objects. The Stage is the top-level container and is at the top of the display list hierarchy:"),(0,s.kt)("p",null,"Each SWF file has an associated ActionScript class, known as the main class of the SWF file . When a SWF file opens in Flash Player or Adobe AIR, Flash Player or AIR calls the constructor function for that class and the instance that is created (which is always a type of display object) is added as a child of the Stage object. The main class of a SWF file always extends the Sprite class (for more information, see Advantages of the display list approach )."),(0,s.kt)("p",null,"You can access the Stage through the stage property of any DisplayObject instance. For more information, see Setting Stage properties ."),(0,s.kt)("h4",{id:"display-objects"},"Display objects"),(0,s.kt)("p",null,"In ActionScript 3.0, all elements that appear on screen in an application are types of display objects . The flash.display package includes a DisplayObject class, which is a base class extended by a number of other classes. These different classes represent different types of display objects, such as vector shapes, movie clips, and text fields, to name a few. For an overview of these classes, see Advantages of the display list approach ."),(0,s.kt)("h4",{id:"display-object-containers"},"Display object containers"),(0,s.kt)("p",null,"Display object containers are special types of display objects that, in addition to having their own visual representation, can also contain child objects that are also display objects."),(0,s.kt)("p",null,"The DisplayObjectContainer class is a subclass of the DisplayObject class. A DisplayObjectContainer object can contain multiple display objects in its child list . For example, the following illustration shows a type of DisplayObjectContainer object known as a Sprite that contains various display objects:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8171).Z})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"A. A SimpleButton object. This type of display object has different \u201cup,\u201d \u201cdown,\u201d and \u201cover\u201d states. B. A Bitmap object. In this case, the Bitmap object was loaded from an external JPEG through a Loader object. C. A Shape object. The \u201cpicture frame\u201d contains a rounded rectangle that is drawn in ActionScript. This Shape object has a Drop Shadow filter applied to it. D. A TextField object.")),(0,s.kt)("p",null,"In the context of discussing display objects, DisplayObjectContainer objects are also known as display object containers or simply containers . As noted earlier, the Stage is a display object container."),(0,s.kt)("p",null,"Although all visible display objects inherit from the DisplayObject class, the type of each is of a specific subclass of DisplayObject class. For example, there is a constructor function for the Shape class or the Video class, but there is no constructor function for the DisplayObject class."),(0,s.kt)("h3",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,s.kt)("p",null,"The following reference list contains important terms that you will encounter when programming ActionScript graphics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Alpha")," The color value representing the amount of transparency (or more correctly, the amount of opacity) in a color. For example, a color with an alpha channel value of 60% only shows 60% of its full strength, and is 40% transparent."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Bitmap graphic")," A graphic that is defined in the computer as a grid (rows and columns) of colored pixels. Commonly bitmap graphics include digital photos and similar images."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Blending mode")," A specification of how the contents of two overlapping images should interact. Commonly an opaque image on top of another image simply blocks the image underneath so that it isn\u2019t visible at all; however, different blending modes cause the colors of the images to blend together in different ways so the resulting content is some combination of the two images."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Display list")," The hierarchy of display objects that will be rendered as visible screen content by Flash Player and AIR. The Stage is the root of the display list, and all the display objects that are attached to the Stage or one of its children form the display list (even if the object isn\u2019t actually rendered, for example if it\u2019s outside the boundaries of the Stage)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Display object")," An object which represents some type of visual content in Flash Player or AIR. Only display objects can be included in the display list, and all display object classes are subclasses of the DisplayObject class."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Display object container")," A special type of display object which can contain child display objects in addition to (generally) having its own visual representation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Main class of the SWF file")," The class that defines the behavior for the outermost display object in a SWF file, which conceptually is the class for the SWF file itself. For instance, in a SWF created in Flash authoring, the main class is the document class. It has a \u201cmain timeline\u201d which contains all other timelines; the main class of the SWF file is the class of which the main timeline is an instance."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Masking")," A technique of hiding from view certain parts of an image (or conversely, only allowing certain parts of an image to display). The portions of the mask image become transparent, so content underneath shows through. The term is related to painter\u2019s masking tape that is used to prevent paint from being applied to certain areas."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Stage")," The visual container that is the base or background of all visual content in a SWF."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Transformation")," An adjustment to a visual characteristic of a graphic, such as rotating the object, altering its scale, skewing or distorting its shape, or altering its color."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Vector graphic")," A graphic that is defined in the computer as lines and shapes drawn with particular characteristics (such as thickness, length, size, angle, and position).")))}p.isMDXComponent=!0},2011:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dp_Display_List_Organization-a4e371e7d7055af7eaa3a494fb6bb20f.png"},8171:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dp_bananaFrame-00ff7160be9f418251f67714f3529d84.png"}}]);