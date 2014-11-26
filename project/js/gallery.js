(function($) {

    var $container = $('#container');
    // layout Masonry after all images have loaded
    $container.imagesLoaded(function() {
        $container.masonry({
          //columnWidth: 200,
          itemSelector: '.item'
        });
    }).always( function( instance ) {
        console.log('all images loaded');
    })
    .done( function( instance ) {
        console.log('all images successfully loaded');
    })
    .fail( function() {
        console.log('all images loaded, at least one is broken');
    })
    .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
    });

}(jQuery));