define(['jquery', 'utils'], function($, utils) {
    console.log('htmlToDoc initialized !', utils);

    const defaults = {
        body: 'body',
        contentSpotWrapper: '.contentSpotWrapper',
        printButton: '#printDocument',
    };

    var returnedModule = function(options) {
        this.options = Object.assign({}, defaults, options);

        this.setOptions = function(options) {
            this.options = Object.assign({}, this.options, options);

            return this;
        }.bind(this);

        this.addSpinner = function() {
            console.log('addSpinner was invoked, add is-loading class');
            $(this.options.body).addClass('is-loading');

            return this;
        }.bind(this);

        this.removeSpinner = function() {
            console.log('removeSpinner was invoked, remove is-loading class');
            $(this.options.body).removeClass('is-loading');

            return this;
        }.bind(this);

        this.prepareContent = function(callBackFunc) {
            // Prepare html to be printed out here
            window.print();

            callBackFunc();
            return console.log('prepareContent was invoked');
        }.bind(this);

        this.bindEvHanlders = function() {
            if(!$(this.options.body).hasClass('is-loading')) {
                console.log('Body doesn\'t have is-loading, so apply it');

                $(this.options.printButton).on('click', this.addSpinner);
            }

            $(this.options.printButton).on('click', utils.debounce(function(ev) {
                console.log('click was called');
                this.prepareContent(this.removeSpinner);
            }.bind(this), 2000));
        }.bind(this);

        this.init = function() {
            console.log('htmlToDco initialized', this.options.contentSpotWrapper);

            this.bindEvHanlders();

            return this;
        }.bind(this);
    };

    return returnedModule;
});