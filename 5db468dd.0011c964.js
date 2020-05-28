(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),r=(n(0),n(159)),i={id:"faq",title:"Frequently Asked Questions",description:"Assistant Relay Frequently Asked Questions"},c={id:"other/faq",title:"Frequently Asked Questions",description:"Assistant Relay Frequently Asked Questions",source:"@site/..\\docs\\other\\faq.md",permalink:"/assistant-relay/docs/other/faq",editUrl:"https://github.com/greghesp/assistant-relay/../docs/other/faq.md",sidebar:"docs",previous:{title:"Hass.io",permalink:"/assistant-relay/docs/integration/hass"},next:{title:"Release Notes",permalink:"/assistant-relay/docs/other/changes"}},s=[{value:"How do I disable &quot;Incoming broadcast from name&quot;?",id:"how-do-i-disable-incoming-broadcast-from-name",children:[]},{value:"How can I cast media?",id:"how-can-i-cast-media",children:[]},{value:"How can I broadcast to specific Google Home devices?",id:"how-can-i-broadcast-to-specific-google-home-devices",children:[]},{value:"I tried a Broadcast, but I don&#39;t hear anything?",id:"i-tried-a-broadcast-but-i-dont-hear-anything",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-do-i-disable-incoming-broadcast-from-name"},'How do I disable "Incoming broadcast from ',"[name]",'"?'),Object(r.b)("p",null,"Unfortunately you can't.  The best thing to do is send Google some feedback asking them to change it or make it optional.",Object(r.b)("br",{parentName:"p"}),"\n","To do this, open Google Assistant on your phone, and say ",Object(r.b)("inlineCode",{parentName:"p"},"Send Feedback"),".  It'll let you type in your feedback to the product team"),Object(r.b)("h2",{id:"how-can-i-cast-media"},"How can I cast media?"),Object(r.b)("p",null,"This is not something supported by the Google Assistant SDK.  There are apparently other Google Assistant implementations out there that have managed to do this.  I have yet to find them, or get them working.  I've also tried to get this working with Assistant Relay, but have had no such luck so far."),Object(r.b)("p",null,"With that in mind, you can cast Nest Cameras to a Smart Display.  Simply send a command ",Object(r.b)("inlineCode",{parentName:"p"},"cast driveway camera to the kitchen hub")),Object(r.b)("h2",{id:"how-can-i-broadcast-to-specific-google-home-devices"},"How can I broadcast to specific Google Home devices?"),Object(r.b)("p",null,"This functionality is not supported by Google, and as such you have to put a work around in place."),Object(r.b)("p",null,'To do this, you will need to create a new Google account, and then connect the Google Home devices you want to put into a broadcast "group".'),Object(r.b)("p",null,"Once you have this new Google Account, continue the setup as per above and give the OAuth file a name of your choice.  When you then broadcast, pass this name as the user fields"),Object(r.b)("p",null,"For example, if I wanted to broadcast only to my Living Room Home, I would setup a new Google Account and link ONLY my Living Room Home to this account. I'd download the OAuth file and then rename it to ",Object(r.b)("inlineCode",{parentName:"p"},"LivingRoom.json"),".  Then when sending a command to Assistant Relay, I would use the username ",Object(r.b)("inlineCode",{parentName:"p"},"LivingRoom")),Object(r.b)("h2",{id:"i-tried-a-broadcast-but-i-dont-hear-anything"},"I tried a Broadcast, but I don't hear anything?"),Object(r.b)("p",null,"If you're not seeing any errors in Assistant Relay when performing a broadcast, the issue may lie within your network"),Object(r.b)("p",null,"Head over to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://myactivity.google.com/myactivity"}),"My Activity")," and check to see if you see your command under the\nAssistant product."),Object(r.b)("p",null,"If not, ensure you have used the correct OAuth Client Type from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../getting-started/configuration"}),"Configuration instructions")),Object(r.b)("p",null,"If you can see the command in My Activity, then Assistant Relay is running correctly.  The next step would be to disable\nIPV6 on your router.  Google implemented some security changes a while back, and having IPV6 enabled breaks the SDK integration"))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);