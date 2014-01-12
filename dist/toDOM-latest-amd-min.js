/**
 * toDOM version: "0.0.6" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/toDOM for details
 */

define("toDOM/toDOM",[],function(){return function e(n,o){var s,r,i,t,c,a,p,u,l=n;if(l.tag||(l.tag="div"),i=document.createElement(l.tag),l.attr)for(t in l.attr)l.attr.hasOwnProperty(t)&&i.setAttribute(t,l.attr[t]);if(l.label&&(o[l.label]=i),l.className&&(i.className=l.className),"undefined"!=typeof l.innerHTML&&(i.innerHTML="function"==typeof l.innerHTML?l.innerHTML.call(o)||"":l.innerHTML),l.events)for(a in l.events)l.events.hasOwnProperty(a)&&(i["on"+a]=l.events[a]);if(l.style)for(p in l.style)l.style.hasOwnProperty(p)&&(i.style[p]=l.style[p]);if(l.children)for(u=l.children,s=0,r=u.length;r>s;s++)c=e(u[s],o),console.log("scope",o,c,i),i.appendChild(c);return i}});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{toDOM:".",almond:"bower_components/almond/almond",engineDetector:"bower_components/engineDetector/app",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon",app:"bower_components/engineDetector/app"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var toDOM=requirejs("toDOM/toDOM");engine.exports("toDOM",toDOM)}else requirejs(["toDOM/toDOM"],function(e){engine.exports("toDOM",e)});define("toDOM/main",function(){});