define( [
    'toDOM/toDOM',
    'engineDetector/engineDetector'
 ], function( toDOM, engine ) {

    describe( 'toDOM/toDOM', function() {

        it( 'should load without blowing', function() {

            expect( toDOM ).to.exist

        } )


        engine.ifBrowser( function() {

            it( 'should create html', function() {

                var dom = toDOM( {
                    tag: 'dev'
                } )

                expect( dom ).to.exist
                expect( dom.appendChild ).to.exist

            } )

            // it( 'should create html recursivly', function() { // test do no pass with mocha-phantomjs but pass in the browser !

            //     var dom = toDOM( {
            //         children: [
            //             {
            //                 innerHTML: 'yo'
            //             }
            //         ]
            //     } )

            //     expect( dom.childNodes.length ).to.equal( 1 ) 

            // } )


        } )

    } )

} )