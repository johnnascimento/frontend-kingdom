requirejs.config({
    baseUrl: './js/minJs',

    paths: {
        jquery: '../libs/jquery',
        app: '../minJs/*'
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