requirejs.config({
    baseUrl: './js/build/app',

    paths: {
        jquery: '../../libs/jquery',
        app: '../build/app/*'
    }
});

requirejs([
    'jquery',
    'data',
    'script',
    ],
    function(
        $,
        data,
        script,
    ) {

    console.log('App initialized! ');

    var script = new script();

    // Initiating the functions
    script.init();
});