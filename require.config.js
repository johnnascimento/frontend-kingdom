(function() {
    if (!window.requirejs) {
        window.requirejs = {
            config: function(config) {
                window.requirejs = config;
            }
        };
    }

    requirejs.config({
        baseUrl: './js/build/app',

        paths: {
            jquery: '../libs/jquery',
            app: '../build/app/*'
        }
    });
}());