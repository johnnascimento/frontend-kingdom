requirejs.config({
    baseUrl: 'js/libs',

    paths: {
        app: '../app'
    }
});

requirejs([
    'jquery',
    'app/data',
    'app/script',
    'app/textLineBreak'
    ],
    function(
        $,
        data,
        script,
        textLineBreak
    ) {
    console.log('App initialized! ', $('body'));

    var script = new script();

    // Initiating the functions
    // _________________________
    script.init();
});