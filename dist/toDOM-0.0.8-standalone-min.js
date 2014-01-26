/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * toDOM version: "0.0.8" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/toDOM for details
 */

var requirejs,require,define;!function(e){function n(e,n){return w.call(e,n)}function o(e,n){var o,r,i,t,s,c,u,f,a,l,p=n&&n.split("/"),d=g.map,m=d&&d["*"]||{};if(e&&"."===e.charAt(0))if(n){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),f=0;f<e.length;f+=1)if(l=e[f],"."===l)e.splice(f,1),f-=1;else if(".."===l){if(1===f&&(".."===e[2]||".."===e[0]))break;f>0&&(e.splice(f-1,2),f-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||m)&&d){for(o=e.split("/"),f=o.length;f>0;f-=1){if(r=o.slice(0,f).join("/"),p)for(a=p.length;a>0;a-=1)if(i=d[p.slice(0,a).join("/")],i&&(i=i[r])){t=i,s=f;break}if(t)break;!c&&m&&m[r]&&(c=m[r],u=f)}!t&&c&&(t=c,s=u),t&&(o.splice(0,s,t),e=o.join("/"))}return e}function r(n,o){return function(){return a.apply(e,b.call(arguments,0).concat([n,o]))}}function i(e){return function(n){return o(n,e)}}function t(e){return function(n){d[e]=n}}function s(o){if(n(m,o)){var r=m[o];delete m[o],h[o]=!0,f.apply(e,r)}if(!n(d,o)&&!n(h,o))throw new Error("No "+o);return d[o]}function c(e){var n,o=e?e.indexOf("!"):-1;return o>-1&&(n=e.substring(0,o),e=e.substring(o+1,e.length)),[n,e]}function u(e){return function(){return g&&g.config&&g.config[e]||{}}}var f,a,l,p,d={},m={},g={},h={},w=Object.prototype.hasOwnProperty,b=[].slice;l=function(e,n){var r,t=c(e),u=t[0];return e=t[1],u&&(u=o(u,n),r=s(u)),u?e=r&&r.normalize?r.normalize(e,i(n)):o(e,n):(e=o(e,n),t=c(e),u=t[0],e=t[1],u&&(r=s(u))),{f:u?u+"!"+e:e,n:e,pr:u,p:r}},p={require:function(e){return r(e)},exports:function(e){var n=d[e];return"undefined"!=typeof n?n:d[e]={}},module:function(e){return{id:e,uri:"",exports:d[e],config:u(e)}}},f=function(o,i,c,u){var f,a,g,w,b,_,j=[],q=typeof c;if(u=u||o,"undefined"===q||"function"===q){for(i=!i.length&&c.length?["require","exports","module"]:i,b=0;b<i.length;b+=1)if(w=l(i[b],u),a=w.f,"require"===a)j[b]=p.require(o);else if("exports"===a)j[b]=p.exports(o),_=!0;else if("module"===a)f=j[b]=p.module(o);else if(n(d,a)||n(m,a)||n(h,a))j[b]=s(a);else{if(!w.p)throw new Error(o+" missing "+a);w.p.load(w.n,r(u,!0),t(a),{}),j[b]=d[a]}g=c?c.apply(d[o],j):void 0,o&&(f&&f.exports!==e&&f.exports!==d[o]?d[o]=f.exports:g===e&&_||(d[o]=g))}else o&&(d[o]=c)},requirejs=require=a=function(n,o,r,i,t){return"string"==typeof n?p[n]?p[n](o):s(l(n,o).f):(n.splice||(g=n,o.splice?(n=o,o=r,r=null):n=e),o=o||function(){},"function"==typeof r&&(r=i,i=t),i?f(e,n,o,r):setTimeout(function(){f(e,n,o,r)},4),a)},a.config=function(e){return g=e,g.deps&&a(g.deps,g.callback),a},requirejs._defined=d,define=function(e,o,r){o.splice||(r=o,o=[]),n(d,e)||n(m,e)||(m[e]=[e,o,r])},define.amd={jQuery:!0}}(),define("bower_components/almond/almond",function(){}),define("toDOM/toDOM",[],function(){return function e(n,o){var r,i,t,s,c,u,f,a,l=n;if(l.tag||(l.tag="div"),t=document.createElement(l.tag),l.attr)for(s in l.attr)l.attr.hasOwnProperty(s)&&t.setAttribute(s,l.attr[s]);if(l.label&&(o[l.label]=t),l.className&&(t.className=l.className),"undefined"!=typeof l.innerHTML&&(t.innerHTML="function"==typeof l.innerHTML?l.innerHTML.call(o)||"":l.innerHTML),l.events)for(u in l.events)l.events.hasOwnProperty(u)&&(t["on"+u]=l.events[u]);if(l.style)for(f in l.style)l.style.hasOwnProperty(f)&&(t.style[f]=l.style[f]);if(l.children)for(a=l.children,r=0,i=a.length;i>r;r++)c=e(a[r],o),t.appendChild(c);return t}});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{toDOM:".",almond:"bower_components/almond/almond",engineDetector:"bower_components/engineDetector/app",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon",app:"bower_components/engineDetector/app"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var toDOM=requirejs("toDOM/toDOM");engine.exports("toDOM",toDOM)}else requirejs(["toDOM/toDOM"],function(e){engine.exports("toDOM",e)});define("toDOM/main",function(){});