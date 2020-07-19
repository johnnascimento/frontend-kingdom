requirejs.config({
    baseUrl: './js/build/app',

    paths: {
        jquery: '../../libs/jquery',
        app: '../build/app/*'
    }
});

requirejs([
    'jquery',
    'polyfill',
    'data',
    'script',
    'htmlToDoc'
    ],
    function(
        $,
        polyfillUtils,
        data,
        script,
        htmlToDoc
    ) {

    console.log('App initialized! ');

    // Initiating constructors
    var script = new script(),
        htmlToDoc = new htmlToDoc();


    // Polyfills and utils
    polyfillUtils.objectPolyfill();
    polyfillUtils.includesPolyfill();
    polyfillUtils.mapPolyfill();
    polyfillUtils.customEventsPolyfill();

    // Initiating the functions
    script.init();
    htmlToDoc.init();
});