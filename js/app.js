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
    // 'app/textLineBreak'
    ],
    function(
        $,
        data,
        script,
        // textLineBreak
    ) {
    console.log('App initialized! ', $('body'));

    var script = new script();

    // Initiating the functions
    // _________________________
    script.init();
});