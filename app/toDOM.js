/**
 * toDOM version: "0.0.6" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/toDOM for details
 */

define( function () {

    return function toDOM( tree, scope ) {

        var obj = tree,
            k, l, el, attr, childEl, p, q, evt, style, children

        if ( !obj.tag )
            obj.tag = 'div'


        el = document.createElement( obj.tag )

        if ( obj.attr )
            for ( attr in obj.attr )
                if ( obj.attr.hasOwnProperty( attr ) )
                    el.setAttribute( attr, obj.attr[ attr ] )



        if ( obj.label )
            scope[ obj.label ] = el


        if ( obj.className )
            el.className = obj.className


        if ( typeof( obj.innerHTML ) !== 'undefined' )
            if ( typeof( obj.innerHTML ) === 'function' )
                el.innerHTML = obj.innerHTML.call( scope ) || ''
            else
                el.innerHTML = obj.innerHTML

        if ( obj.events )
            for ( evt in obj.events )
                if ( obj.events.hasOwnProperty( evt ) )
                    el[ 'on' + evt ] = obj.events[ evt ]


        if ( obj.style )
            for ( style in obj.style )
                if ( obj.style.hasOwnProperty( style ) )
                    el.style[ style ] = obj.style[ style ]


        if ( obj.children ) {
            children = obj.children
            for ( k = 0, l = children.length; k < l; k++ ) {
                childEl = toDOM( children[ k ], scope )
                console.log('scope', scope, childEl, el )
                el.appendChild( childEl )
            }
        }

        return el

    }

} )