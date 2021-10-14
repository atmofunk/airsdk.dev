"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[3404],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=n(833),l=["components"],c={title:"Linux install",sidebar_position:3,sidebar_label:"Linux"},s=void 0,u={unversionedId:"basics/install/linux",id:"basics/install/linux",isDocsHomePage:!1,title:"Linux install",description:"System Requirements",source:"@site/docs/basics/install/linux.mdx",sourceDirName:"basics/install",slug:"/basics/install/linux",permalink:"/docs/basics/install/linux",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/basics/install/linux.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Linux install",sidebar_position:3,sidebar_label:"Linux"},sidebar:"mainSidebar",previous:{title:"Windows",permalink:"/docs/basics/install/windows"},next:{title:"Set up an Editor",permalink:"/docs/basics/setup-an-editor"}},d=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Download the SDK",id:"download-the-sdk",children:[]},{value:"Set your Environment",id:"set-your-environment",children:[{value:"Java",id:"java",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,i.kt)("p",null,"To install and run AIR your development environment must meet these minimum requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux"),(0,i.kt)("li",{parentName:"ul"},"1.3GB free disk space (for the AIR SDK and does not include other tools)"),(0,i.kt)("li",{parentName:"ul"},"A version of Java 8")),(0,i.kt)("h2",{id:"download-the-sdk"},"Download the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest release bundle of the AIR SDK:")),(0,i.kt)(o.Z,{platform:"linux",mdxType:"AIRSDKDownload"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For older versions see the ",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.harman.com/release_notes"},"SDK releases")," page.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Extract the bundle in the desired location, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/sdks/air\nunzip ~/Downloads/AIRSDK_Linux.zip\n")),(0,i.kt)("h2",{id:"set-your-environment"},"Set your Environment"),(0,i.kt)("p",null,"Next you will want to add the AIR SDK tools to your path so you can execute the build commands."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Permanently adding the path will depend on the shell you are using on your machine. Typing ",(0,i.kt)("inlineCode",{parentName:"li"},"echo $SHELL")," in your Terminal will generally tell you which sheel you are using and then you can edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"rc")," file for that shell type, the most common types are:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/bin/bash"),": Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},".bash_profile")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".bashrc")," file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/bin/zsh"),": Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},".zshrc")," file")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Once you have determined the shell type add the following changing the ",(0,i.kt)("inlineCode",{parentName:"li"},"[AIR_SDK_PATH]")," to be the path you extracted the AIR SDK to above:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export AIR_HOME=[AIR_SDK_PATH]\nexport PATH="${PATH}":"${AIR_HOME}/bin"\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"source ~/.<rc file>")," or start a new Terminal window to refresh the environment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the AIR SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory is in your path by running:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo $PATH\n")),(0,i.kt)("p",null,"Verify you can access the AIR SDK commands by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"which adt adl\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can check the version of the AIR SDK by running"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adt -version\n")))),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"You must make sure you have version of Java 8 installed and that your ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable is set to the JDK\u2019s folder."))}m.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),a=n(7294),i=n(3727),o=n(9962),l=n(2735),c=n(6136),s=(0,a.createContext)({collectLink:function(){}}),u=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,k=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,g=void 0===b||b,w=(0,r.Z)(e,p),N=(0,o.Z)().siteConfig,x=N.trailingSlash,E=N.baseUrl,A=(0,u.C)().withBaseUrl,O=(0,a.useContext)(s),C=f||h,S=(0,l.Z)(C),D=null==C?void 0:C.replace("pathname://",""),L=void 0!==D?(n=D,g&&function(e){return e.startsWith("/")}(n)?A(n):n):void 0;L&&S&&(L=(0,d.applyTrailingSlash)(L,{trailingSlash:x,baseUrl:E}));var R,_=(0,a.useRef)(!1),P=m?i.OL:i.rU,j=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!j&&S&&null!=L&&window.docusaurus.prefetch(L),function(){j&&R&&R.disconnect()}}),[L,j,S]);var I=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,M=!L||!S||I;return L&&S&&!I&&!y&&O.collectLink(L),M?a.createElement("a",Object.assign({href:L},C&&!S&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(P,Object.assign({},w,{onMouseEnter:function(){_.current||null==L||(window.docusaurus.preload(L),_.current=!0)},innerRef:function(e){var t,n;j&&e&&S&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(R=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.unobserve(t),R.disconnect(),n())}))}))).observe(t))},to:L||""},m&&{isActive:k,activeClassName:v}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(9962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},833:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1721),a=n(7294),i=n(6010),o="content_1Dp_",l="downloadButton_2eZj",c="downloadIcon_2O7t",s=n(2511),u="acceptButton_2t9c",d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).acceptButtonClick=function(){console.log("acceptButtonClick()"),(0,t.props.handleAccept)()},t}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement("div",null,"In order to download the AIR SDK you must accept the"," ",a.createElement("a",{href:"https://airsdk.harman.com/assets/pdfs/HARMAN%20AIR%20SDK%20License%20Agreement.pdf"},"license agreement")),a.createElement("div",null,a.createElement("a",{className:(0,i.Z)("button","button--info","button--lg",u),onClick:this.acceptButtonClick},"Accept")))},t}(a.Component),p=d,m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).airAPIURL="https://dcdu3ujoji.execute-api.us-east-1.amazonaws.com/production/releases/latest/urls",t.airDownloadURL="https://airsdk.harman.com",t.state={loading:!0,airsdkurls:[],acceptedLicense:!1},t.handleAccept=function(){sessionStorage.setItem("acceptedLicense","true"),t.setState({acceptedLicense:!0})},t.downloadURLForPlatform=function(e){var n="AIR_"+(e?"Flex_":"");switch(t.props.platform){case"macos":n+="Mac";break;case"windows":n+="Win";break;case"linux":n+="Linux"}return t.props.platform,t.airDownloadURL+t.state.airsdkurls[n]+"?license="+(t.state.acceptedLicense?"accepted":"denied")},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.state.acceptedLicense="true"===sessionStorage.getItem("acceptedLicense"),fetch(this.airAPIURL).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,airsdkurls:t})})).catch(console.log)},n.render=function(){var e=this.state.acceptedLicense;return a.createElement("div",{className:o},this.state.loading?a.createElement("div",null,"Loading ..."):a.createElement("div",null,e?a.createElement("div",null,a.createElement(s.Z,{className:(0,i.Z)("button","button--info","button--lg",l),to:this.downloadURLForPlatform(!1)},a.createElement("i",null,a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:c,viewBox:"0 0 29.978 29.978"},a.createElement("g",null,a.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),a.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download"),a.createElement(s.Z,{className:(0,i.Z)("button","button--primary","button",l),to:this.downloadURLForPlatform(!0)},a.createElement("i",null,a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:c,viewBox:"0 0 29.978 29.978"},a.createElement("g",null,a.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),a.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download for Flex")):a.createElement(p,{handleAccept:this.handleAccept})))},t}(a.Component),f=m},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);