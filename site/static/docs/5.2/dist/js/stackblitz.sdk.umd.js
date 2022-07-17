!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).StackBlitzSDK=t()}(this,function(){var e=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],t={clickToLoad:function(e){return i("ctl",e)},devToolsHeight:function(e){return r("devToolsHeight",e)},forceEmbedLayout:function(e){return i("embed",e)},hideDevTools:function(e){return i("hideDevTools",e)},hideExplorer:function(e){return i("hideExplorer",e)},hideNavigation:function(e){return i("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter(function(e){return"string"==typeof e&&""!==e.trim()}).map(function(e){return"file="+encodeURIComponent(e.trim())})}(0,e).join("&")},terminalHeight:function(e){return r("terminalHeight",e)},theme:function(e){return o("theme",["light","dark"],e)},view:function(e){return o("view",["preview","editor"],e)}};function n(e){void 0===e&&(e={});var n=Object.entries(e).map(function(e){var n=e[0],i=e[1];return null!=i&&t.hasOwnProperty(n)?t[n](i):""}).filter(Boolean);return n.length?"?"+n.join("&"):""}function i(e,t){return!0===t?e+"=1":""}function r(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function o(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function a(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function d(e,t){return""+c(t)+e+n(t)}function u(e,t){var i={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(i,t),""+c(i)+e+n(i)}function c(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function s(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function l(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function p(e){return e&&!1===e.newWindow?"_self":"_blank"}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var h=/*#__PURE__*/function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,i=e.payload,r=a();return new Promise(function(e,o){t.pending[r]={resolve:e,reject:o},t.port.postMessage({type:n,payload:f({},i,{__reqid:r})})})},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,i=n.type,r=n.payload,o=r.__reqid,a=r.__error;this.pending[o]&&(r.__success?this.pending[o].resolve(function(e){var t=f({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(r)):this.pending[o].reject(a?i+": "+a:i),delete this.pending[o])}},e}(),m=/*#__PURE__*/function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null})},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),v=[],y=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=a(),this.element=e,this.pending=new Promise(function(e,n){var i=function(n){var i=n.data;"SDK_INIT_SUCCESS"===(null==i?void 0:i.action)&&i.id===t.id&&(t.vm=new m(n.ports[0],i.payload),e(t.vm),o())},r=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(d),window.removeEventListener("message",i)}window.addEventListener("message",i),r();var a=0,d=window.setInterval(function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void v.forEach(function(e,n){e.id===t.id&&v.splice(n,1)});a++,r()}},500)}),v.push(this)};function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function w(t){if(!e.includes(t.template)){var n=e.map(function(e){return"'"+e+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var i="node"===t.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(g("project[title]",t.title)),r.appendChild(g("project[description]",t.description)),r.appendChild(g("project[template]",t.template)),t.dependencies&&(i?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(g("project[dependencies]",JSON.stringify(t.dependencies)))),t.settings&&r.appendChild(g("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach(function(e){"string"==typeof t.files[e]&&r.appendChild(g("project[files]["+e+"]",t.files[e]))}),r}function _(e){var t,n,i,r;return null!=e&&e.contentWindow?(null!=(r=(n=e)instanceof Element?"element":"id",t=null!=(i=v.find(function(e){return e[r]===n}))?i:null)?t:new y(e)).pending:Promise.reject("Provided element is not an iframe.")}return{connect:_,embedGithubProject:function(e,t,n){var i=l(e),r=document.createElement("iframe");return r.src=u("/github/"+t,n),s(i,r,n),_(r)},embedProject:function(e,t,n){var i,r=l(e),o=function(e,t){var n=w(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),a=document.createElement("iframe");return s(r,a,n),null==(i=a.contentDocument)||i.write(o),_(a)},embedProjectId:function(e,t,n){var i=l(e),r=document.createElement("iframe");return r.src=u("/edit/"+t,n),s(i,r,n),_(r)},openGithubProject:function(e,t){var n=d("/github/"+e,t),i=p(t);window.open(n,i)},openProject:function(e,t){!function(e,t){var n=w(e);n.action=d("/run",t),n.target=p(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=d("/edit/"+e,t),i=p(t);window.open(n,i)}}});