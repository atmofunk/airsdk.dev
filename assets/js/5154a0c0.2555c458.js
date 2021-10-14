"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[3779],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(833),l=["components"],s={title:"Windows install",sidebar_position:2,sidebar_label:"Windows"},c=void 0,d={unversionedId:"basics/install/windows",id:"basics/install/windows",isDocsHomePage:!1,title:"Windows install",description:"System Requirements",source:"@site/docs/basics/install/windows.mdx",sourceDirName:"basics/install",slug:"/basics/install/windows",permalink:"/docs/basics/install/windows",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/basics/install/windows.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Windows install",sidebar_position:2,sidebar_label:"Windows"},sidebar:"mainSidebar",previous:{title:"macOS",permalink:"/docs/basics/install/macos"},next:{title:"Linux",permalink:"/docs/basics/install/linux"}},u=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Download the SDK",id:"download-the-sdk",children:[]},{value:"Set your Environment",id:"set-your-environment",children:[]},{value:"Android setup",id:"android-setup",children:[{value:"Install Android Studio",id:"install-android-studio",children:[]},{value:"Set up your Android device",id:"set-up-your-android-device",children:[]},{value:"Java",id:"java",children:[]}]}],p={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,i.kt)("p",null,"To install and run AIR your development environment must meet these minimum requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows 7 or later"),(0,i.kt)("li",{parentName:"ul"},"1.3GB free disk space (for the AIR SDK and does not include other tools)"),(0,i.kt)("li",{parentName:"ul"},"A version of Java 8")),(0,i.kt)("h2",{id:"download-the-sdk"},"Download the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest release bundle of the AIR SDK:")),(0,i.kt)(o.Z,{platform:"windows",mdxType:"AIRSDKDownload"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For older versions see the ",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.harman.com/release_notes"},"SDK releases")," page.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Extract the bundle in the desired location, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<your-user-name>\\sdks\\air"),".")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Warning: Do not install the AIR SDK in a directory like ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\"),". These directories may require elevated privilages and can affect the operation of the AIR SDK."))),(0,i.kt)("h2",{id:"set-your-environment"},"Set your Environment"),(0,i.kt)("p",null,"Next you will want to add the AIR SDK tools to your path so you can execute the build commands from any console."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),' window by searching for "Edit environment variables" in the search bar:')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3094).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"AIR_HOME")," and set it to the location where you extracted the AIR SDK (eg ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<your-user-name>\\sdks\\air"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," Variable:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it exists, append ",(0,i.kt)("inlineCode",{parentName:"li"},"%AIR_HOME%\\bin")," using ",(0,i.kt)("inlineCode",{parentName:"li"},";")," as a separator (or select edit and add a ",(0,i.kt)("strong",{parentName:"li"},"New")," entry);"),(0,i.kt)("li",{parentName:"ul"},"If it doesn't exist, create a new variable with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"Path")," and value ",(0,i.kt)("inlineCode",{parentName:"li"},"%AIR_HOME%\\bin"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Close and reopen any active console windows")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the AIR SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory is in your path by running:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo %Path%\n")),(0,i.kt)("p",null,"or if you are using Powershell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$Env:Path\n")),(0,i.kt)("p",null,"Verify you can access the AIR SDK commands by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"where.exe adt\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can check the version of the AIR SDK by running"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adt -version\n")))),(0,i.kt)("h2",{id:"android-setup"},"Android setup"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AIR relies on the Android SDK and build tools in order to produce AAB builds and support the latest Android functionality."),(0,i.kt)("p",{parentName:"div"},"You can either install the Android SDK directly or we suggest you install Android Studio (which includes the SDK) as this makes the installation process easier and provides additional debugging tools."))),(0,i.kt)("h3",{id:"install-android-studio"},"Install Android Studio"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")),(0,i.kt)("li",{parentName:"ol"},"Start Android studio and run through the setup wizard which will install the latest Android SDK, command line tools and build tools.")),(0,i.kt)("h3",{id:"set-up-your-android-device"},"Set up your Android device"),(0,i.kt)("p",null,"If you have an Android device you intend on debugging with you must make sure you have set up the device for debugging."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'In order to debug an application on an Android device you need to enable "Developer Mode" and then enable USB debugging. Detailed process is described in the ',(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/debug/dev-options"},"Android documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Plug your device into your machine using a cable, and you should receive a prompt on the device to authorise access via the computer;"),(0,i.kt)("li",{parentName:"ol"},"Run the following command and you should see a device listed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adt -devices -platform android\n")),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"You must make sure you have version of Java 8 installed and that your ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable is set to the JDK\u2019s folder."))}m.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7294),i=n(3727),o=n(9962),l=n(2735),s=n(6136),c=(0,r.createContext)({collectLink:function(){}}),d=n(9524),u=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,h=e.to,v=e.href,f=e.activeClassName,k=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,y=(0,a.Z)(e,p),N=(0,o.Z)().siteConfig,A=N.trailingSlash,S=N.baseUrl,C=(0,d.C)().withBaseUrl,E=(0,r.useContext)(c),x=h||v,D=(0,l.Z)(x),O=null==x?void 0:x.replace("pathname://",""),R=void 0!==O?(n=O,b&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;R&&D&&(R=(0,u.applyTrailingSlash)(R,{trailingSlash:A,baseUrl:S}));var I,P=(0,r.useRef)(!1),_=m?i.OL:i.rU,M=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!M&&D&&null!=R&&window.docusaurus.prefetch(R),function(){M&&I&&I.disconnect()}}),[R,M,D]);var j=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,L=!R||!D||j;return R&&D&&!j&&!g&&E.collectLink(R),L?r.createElement("a",Object.assign({href:R},x&&!D&&{target:"_blank",rel:"noopener noreferrer"},y)):r.createElement(_,Object.assign({},y,{onMouseEnter:function(){P.current||null==R||(window.docusaurus.preload(R),P.current=!0)},innerRef:function(e){var t,n;M&&e&&D&&(t=e,n=function(){null!=R&&window.docusaurus.prefetch(R)},(I=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))}))).observe(t))},to:R||""},m&&{isActive:k,activeClassName:f}))}},2735:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},9524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(9962),r=n(2735);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],o="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,o)}},3905:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},833:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(1721),r=n(7294),i=n(6010),o="content_1Dp_",l="downloadButton_2eZj",s="downloadIcon_2O7t",c=n(2511),d="acceptButton_2t9c",u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).acceptButtonClick=function(){console.log("acceptButtonClick()"),(0,t.props.handleAccept)()},t}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement("div",null,"In order to download the AIR SDK you must accept the"," ",r.createElement("a",{href:"https://airsdk.harman.com/assets/pdfs/HARMAN%20AIR%20SDK%20License%20Agreement.pdf"},"license agreement")),r.createElement("div",null,r.createElement("a",{className:(0,i.Z)("button","button--info","button--lg",d),onClick:this.acceptButtonClick},"Accept")))},t}(r.Component),p=u,m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).airAPIURL="https://dcdu3ujoji.execute-api.us-east-1.amazonaws.com/production/releases/latest/urls",t.airDownloadURL="https://airsdk.harman.com",t.state={loading:!0,airsdkurls:[],acceptedLicense:!1},t.handleAccept=function(){sessionStorage.setItem("acceptedLicense","true"),t.setState({acceptedLicense:!0})},t.downloadURLForPlatform=function(e){var n="AIR_"+(e?"Flex_":"");switch(t.props.platform){case"macos":n+="Mac";break;case"windows":n+="Win";break;case"linux":n+="Linux"}return t.props.platform,t.airDownloadURL+t.state.airsdkurls[n]+"?license="+(t.state.acceptedLicense?"accepted":"denied")},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.state.acceptedLicense="true"===sessionStorage.getItem("acceptedLicense"),fetch(this.airAPIURL).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,airsdkurls:t})})).catch(console.log)},n.render=function(){var e=this.state.acceptedLicense;return r.createElement("div",{className:o},this.state.loading?r.createElement("div",null,"Loading ..."):r.createElement("div",null,e?r.createElement("div",null,r.createElement(c.Z,{className:(0,i.Z)("button","button--info","button--lg",l),to:this.downloadURLForPlatform(!1)},r.createElement("i",null,r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:s,viewBox:"0 0 29.978 29.978"},r.createElement("g",null,r.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),r.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download"),r.createElement(c.Z,{className:(0,i.Z)("button","button--primary","button",l),to:this.downloadURLForPlatform(!0)},r.createElement("i",null,r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:s,viewBox:"0 0 29.978 29.978"},r.createElement("g",null,r.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),r.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download for Flex")):r.createElement(p,{handleAccept:this.handleAccept})))},t}(r.Component),h=m},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},3094:function(e,t,n){t.Z=n.p+"assets/images/windows_install_env_1-9c08174316e84c3d732cbcf81addf564.png"}}]);