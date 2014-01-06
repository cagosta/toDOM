# toDOM  
[![Build Status](https://secure.travis-ci.org/cagosta/toDOM.png?branch=master)](https://travis-ci.org/cagosta/toDOM)


## Introduction ##

Fast and lightweight JSON to DOM generation in less than 60 lines.


### You :
* Do not like `<html>`
* Do not want heavy templating system  
* Love javascript  
* Want performance  
* Are tired of document.createElement 

Here is toDOM :
``` javascript

var scope = {};

var el = toDOM({
    attr : { className : 'my_class' },
    events : {
        click : function() {
            console.log('div clicked');
      },
  },
  children : [
    {
        tag : 'p',
        label : 'myParagraph',
        innerHTML : 'Hello',
        style : {
            backgroundColor : '#000'
        }
    }
  ]
}, scope);

document.body.appendChild(el);

```

Will create the following : 

``` html 
<body>
    <div class="my_class">
        <p style="background-color:#000">
            Hello
        </p>
    </div>
</body>
```

With a console.log on click and a reference of the `<p>` DOM element in scope : 

```javascript
    scope.myParagraph //  domElement
    scope.myParagraph.innerHTML // 'Hello'
```


### Usage in object oriented javascript : 

```javascript

var View = function(o) {
    if (o.domDescription) {
      this.buildEl(o.domDescription);
    }
};

View.prototype = {
    buildEl : function(domDescription) {
        this.el = toDOM(domDescription, this);
  }
}

var myView = new View({
    domDescription : {
        tag : 'p',
        children : [
            {
                label : 'helloEl',
                innerHTML : 'hello!'
            }
        ]
    }
});

myView.el // DOM element
myView.helloEl // DOM element
myView.helloEl.innerHTML // 'hello!'

```


### Also :
* Default tag is 'div' 


## Install ##

toDOM is coded as [AMD module](http://requirejs.org/docs/whyamd.html) but can be installed with npm, bower or old-fashioned src=".min.js".

#### With npm: ####

```
npm install todom
```

and use it with nodejs: 
```
var toDOM = require('todom')
```

#### With bower: ####

``` 
bower install toDOM
```

Point `toDOM` to `[bower_components_path]/toDOM/app/toDOM.js` into your requirejs path config 
and load it with requirejs:  

```javascript
require(['toDOM/toDOM'], function( toDOM ){

})
```


#### With src=" .min.js" ####


Inside the `dist` folder, [download latest standalone minified version](https://raw.github.com/cagosta/toDOM/master/dist/toDOM-latest-standalone-min.js) or [development version](https://raw.github.com/cagosta/toDOM/master/dist/toDOM-latest-standalone.js) and include it in your html page:

```html
<script src="[path_to_source]/toDOM-latest-standalone-min.js%>"></script>
```

The module is available via the scope 

```javascript
window.toDOM
```

## To do ##

*  

## Documentation ##

See jsdoc-generated documentation in /documentation  

### Folder Structure ###

    app         ->  development files
    |- bower_components          ->  [bower](https://github.com/bower/bower) front-end packages
    |- main.js                   ->  main file for browser and node.js, handle AMD config
    |- to_dom   -> main AMD module
    test        ->  unit tests
    |
    tasks       -> [Grunt](http://gruntjs.com/) tasks, see [generator-mangrove-module](https://github.com/cagosta/generator-mangrove-module)
    |
    dist        ->  distribution & build files
    |
    node_modules -> node packages
    |
    documentation  -> [jsdoc](http://usejsdoc.org/about-jsdoc3.html) generated documentation 


## Run unit tests ##

#### On the browser ####

Run `grunt test:browser` and open `test/` on your browser.

#### On a headless browser ####

`grunt test:headless` will run your tests in a headless browser, with [phantomjs](http://phantomjs.org/) and [mocha](http://visionmedia.github.io/mocha/)

### On node ####

`grunt test:node` will run your tests with node and mocha.  

Because of requirejs, the `mocha` command does not work.


## Build your own ##

This project uses [Node.js](http://nodejs.org/), [Grunt](http://gruntjs.com/) and [Require.js](http://requirejs.org/docs/optimization.html) for the build process. If for some reason you need to build a custom version install Node.js, `npm install` and run:

    grunt build

## Yeoman Mangrove module Generator ##

This module is based on a [Yeoman](https://github.com/yeoman/yeoman/wiki/Getting-Started) generator: [Generator-mangrove-module](https://github.com/cagosta/generator-mangrove-module)  
Check it for task-related references such as build, deploy etc ..



### Authors 
* [Cyril Agosta](https://github.com/cagosta)
* [Sam Ton That](https://github.com/KspR)
* [Pierre Cole](https://github.com/piercus)


## License ##

[MIT License](http://www.opensource.org/licenses/mit-license.php)

