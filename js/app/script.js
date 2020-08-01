define(['jquery', 'utils'], function($, utils) {
    console.log('script initialized !');

    const defaults = {
        body: 'body',
        imageFileMap: '#imageFile',
        imageFileCover: '#imageFileCover',
        coverImage: '.js-booksImageCover > img',
        userInfo: {
            userName: '.inputField[name="userName"]',
            dateOfBirth: '.inputField[name="dateOfBirth"]',
            timeOfBirth: '.inputField[name="timeOfBirth"]',
            stateOfBirth: '.inputField[name="stateOfBirth"]',
            countryOfBirth: '.inputField[name="countryOfBirth"]',
            signStar: '.inputField[name="signStar"]',
            ascendent: '.inputField[name="ascendent"]',
            moon: '.inputField[name="moon"]',
            imageFile: '.inputField[name="imageFile"]',
        },
        userInfoSpot: {
            userShortIntroduction: '.userShortIntroduction',
            userName: '.userName',
            dateOfBirth: '.dateOfBirth',
            timeOfBirth: '.timeOfBirth',
            stateOfBirth: '.stateOfBirth',
            countryOfBirth: '.countryOfBirth',
            signStartShortDescription: '.signStartShortDescription',
            reportImage: '.reportImage .reportImageImg',
        }
    }

    // For the future John, you need to break down this whole script and modularize the whole app,
    // so that it gets more organized

    var returnedModule = function(options) {
        this.options = Object.assign({}, defaults, options);

        this.setOptions = function(options) {
            this.options = Object.assign({}, this.options, options);

            return this;
        }.bind(this);

        // Var, consts and lets
        //-------------------------------------------------------------------------
        const d = document,
        b = d.body || d.bodyElement,
        docQuery = (elem) => {
            return d.querySelector(elem);
        },
        w = window,
        $contentSpot = docQuery('.contentSpot');

        let key = '',
        selectedItemsArray = [],
        evaluatedValueToReturn = [],
        nodosFortuna = '',
        lineBreaks = '',
        i = 0,
        levels = [];

        var tagFinder = new RegExp('\<\/strong\>', 'gmi'),
        textBlockCounter = 0;

        // Functions
        const $contentSpotElem = docQuery('#contentSpot');

        const $submitBtn = docQuery('#submitBtn');

        const $inputSignoOrCasa = (elem) => {
            return docQuery(elem);
        };

        const $resetInput = (elem) => {
            return docQuery(elem);
        };

        const $printButton = (elem) => {
            return docQuery(elem);
        };

        const siteLists = {
            first: {
                link: docQuery('.listOfItems-1'),
                options: docQuery('.listOfItems-1').options,
                index: 1
            },

            second: {
                link: docQuery('.listOfItems-2'),
                options: docQuery('.listOfItems-2').options,
                index: 2
            },

            third: {
                link: docQuery('.listOfItems-3'),
                options: docQuery('.listOfItems-3').options,
                index: 3
            }
        };

        const criarEl = (elType, assignmentReference, klass, id, selectorElem, textEl, el) => {
            el = d.createElement(elType);
            el.classList.add(klass);
            el.id = id;
            el.appendChild(d.createTextNode(textEl));

            if (selectorElem === undefined || selectorElem === null) {
                docQuery('.' + assignmentReference).appendChild(el);
            } else {
                setTimeout(function(){
                    docQuery(selectorElem + assignmentReference).appendChild(el);
                }, 1000);
            }
        };

        //
        // Used sthe currying function for indeces and/or text
        // ---------------------------------------------------
        const storeIndexOrText = (elem) => {
            elems = [];

            elem.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
            elem.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
            elem.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
            return elems;
        };

        const storeIndexAndText = (elem1, elem2, elems) => {
            elem1 = [];
            elem2 = [];
            elems = {};

            elem1.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
            elem1.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
            elem1.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);

            elem2.push(siteLists.first.link.selectedIndex);
            elem2.push(siteLists.second.link.selectedIndex);
            elem2.push(siteLists.third.link.selectedIndex);

            elems = {
                element1: elem1,
                element2: elem2
            };

            return elems;
        };

        //
        // Come back to this later
        // -------------------------------------------------------------------
        const defineSelectedIndexInAnArray = (textOfElem, indexOfElem) => {
            let valueToReturn = "";

            if (indexOfElem === true && textOfElem === true) {
                valueToReturn = storeIndexAndText();
                return valueToReturn;
            } else {
                valueToReturn = storeIndexOrText();
                return valueToReturn;
            }
            return valueToReturn;
        };

        const defineNodosLunaresTitle = (elemToActUpon, idx) => {
            var NodostitleReturned = '';

            switch(idx.element2[1]) {
                case 1:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Libra';
                break;

                case 2:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Escorpião';
                break;

                case 3:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Sagitário';
                break;

                case 4:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Capricórnio';
                break;

                case 5:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Aquário';
                break;

                case 6:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Peixes';
                break;

                case 7:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Áries';
                break;

                case 8:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Touro';
                break;

                case 9:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Gêmoes';
                break;

                case 10:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Câncer';
                break;

                case 11:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Leão';
                break;

                case 12:
                NodostitleReturned = '<strong>Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Virgem';
                break;

                default:
                NodostitleReturned = 'empty';
                break;
            }

            return NodostitleReturned;
        };

        const defineTitles = (elemToActUpon, indexPassedIn) => {
            var titleReturned = '';
            var elemToActUponLowerCase = elemToActUpon.toLowerCase();

            switch(elemToActUponLowerCase) {
                case 'sol':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Sol na ' : '<strong>Sol em ';
                break;

                case 'lua':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong><strong>Lua na ' : '<strong>Lua em ';
                break;

                case 'ascendente':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Ascendente na ' : '<strong>Ascendente ';
                break;

                case 'mercúrio':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Mercúrio na ' : '<strong>Mercúrio em ';
                break;

                case 'vênus':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Vênus na ' : '<strong>Vênus em ';
                break;

                case 'marte':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Marte na ' : '<strong>Marte em ';
                break;

                case 'júpter':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Júpter na ' : '<strong>Júpter em ';
                break;

                case 'saturno':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Saturno na ' : '<strong>Saturno em ';
                break;

                case 'urano':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Urano na ' : '<strong>Urano em ';
                break;

                case 'netuno':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Netuno na ' : '<strong>Netuno em ';
                break;

                case 'plutão':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Plutão na ' : '<strong>Plutão em ';
                break;

                case 'nodos lunares':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Nodos Lunares na ' : defineNodosLunaresTitle(elemToActUpon, indexPassedIn);
                break;

                case 'parte da fortuna':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Parte da Fortuna na ' : '<strong>Parte da Fortuna em ';
                break;

                case 'quíron':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Quíron na ' : '<strong>Quíron em ';
                break;

                case 'juno':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Juno na ' : '<strong>Juno em ';
                break;

                case 'mercúrio retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Mercúrio Retrógado na ' : '<strong>Mercúrio Retrógado em ';
                break;

                case 'vênus retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Vênus Retrógado na ' : '<strong>Vênus Retrógado em ';
                break;

                case 'marte retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Marte Retrógado na ' : '<strong>Marte Retrógado em ';
                break;

                case 'júpter retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Júpter Retrógado na ' : '<strong>Júpter Retrógado em ';
                break;

                case 'saturno retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Saturno Retrógado na ' : '<strong>Saturno Retrógado em ';
                break;

                case 'urano retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Urano Retrógado na ' : '<strong>Urano Retrógado em ';
                break;

                case 'netuno retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Netuno Retrógado na ' : '<strong>Netuno Retrógado em ';
                break;

                case 'plutão retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Plutão Retrógado na ' : '<strong>Plutão Retrógado em ';
                break;

                case 'quíron retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Quíron Retrógado na ' : '<strong>Quíron Retrógado em ';
                break;

                case 'juno retrógado':
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Juno Retrógado na ' : '<strong>Juno Retrógado em ';
                break;

                default:
                titleReturned = 'empty'
                break;
            }

            return titleReturned;
        };


        const grabInputValues = (element, index) => {
            let elementsIndexAndTexts = defineSelectedIndexInAnArray(true, true);
            var planetasTitle = '';
            var signosTitle = '';
            var casasTitle = '';

            for (key in data.planets) {
                planetasTitle = data.planets[key].title.replace(tagFinder, '');

                if (planetasTitle == element) {
                    if (elementsIndexAndTexts.element2[0] !== 0 && elementsIndexAndTexts.element2[1] === 0) {
                        evaluatedValueToReturn.push(defineTitles(planetasTitle, elementsIndexAndTexts) + " " + elementsIndexAndTexts.element1[2]);
                    } else if (elementsIndexAndTexts.element2[0] !== 0 && elementsIndexAndTexts.element2[2] === 0) {
                        evaluatedValueToReturn.push(defineTitles(planetasTitle, elementsIndexAndTexts) + " " + elementsIndexAndTexts.element1[1]);
                    }
                    return evaluatedValueToReturn;
                }
            }

            for (key in data.signos) {
                signosTitle = data.signos[key].title.replace(tagFinder, '');

                if (signosTitle == element) {
                    evaluatedValueToReturn.push(data.signos[key].text[elementsIndexAndTexts.element2[0] - 1]);

                    // Refactor this block and change it to a switch statment
                    if(elementsIndexAndTexts.element2[0] === 1) {
                        for(i = 0; i < data.signos[key].levels.length; i++) {
                            levels.push(data.signos[key].levels[i]);
                        }
                    } else if(elementsIndexAndTexts.element2[0] === 12) {
                        nodosFortuna = data.signos[key].nodosLunares;
                    } else if(elementsIndexAndTexts.element2[0] === 13) {
                        nodosFortuna = data.defaultText.parteFortuna;
                    } else if(elementsIndexAndTexts.element2[0] === 14) {
                        nodosFortuna = data.defaultText.quironCurador;
                    } else if(elementsIndexAndTexts.element2[0] === 15) {
                        nodosFortuna = data.defaultText.junosCasasSignos;
                    } else {
                        levels.push("");
                    }

                    return evaluatedValueToReturn;
                }
            }

            for (key in data.casas) {
                casasTitle = data.casas[key].title.replace(tagFinder, '');

                if (casasTitle == element) {
                    evaluatedValueToReturn.push(data.casas[key].text[elementsIndexAndTexts.element2[0] - 1]);
                    nodosFortuna = '';
                    levels.push("");

                    return evaluatedValueToReturn;
                }
            }
            return evaluatedValueToReturn;
        };


        const setUpTextForTemplate = (indexSelectedArray) => {
            evaluatedValueToReturn = [];
            indexSelectedArray = indexSelectedArray || [];
            var indexSelectedNum = 0;

            if (!indexSelectedArray.length) {
                return;
            } else {
                indexSelectedArray.forEach(grabInputValues);
                return evaluatedValueToReturn;
            }
        };


        const deleteTextBlock = (ev, blockToDelete) => {
            if(blockToDelete === '' || blockToDelete === undefined || blockToDelete === null) {
                ev.parentNode.remove();
            } else {
                docQuery(blockToDelete).remove();
            }
        };

        // Include a callback function that will be run after all the
        // content has been printed out. This callback function will
        // Grab all the information, which is already presented on the
        // screen and will replace all the <br /> elements for actual
        // carriage return tags.
        // ----------------------------------------------------------
        const addElementsToTemplate = () => {
            var elemPlaceholder = [];

            // Use the criarEl method to create this one
            // ------------------------------------------------------
            var textBlockWrapper = '',
            klassAssigner = '',
            templateArray = [],
            selectedItemsArray = [],
            textBlockCounterRef = textBlockCounter,
            idAssigner = '',
            trashCanClass = 'trashcan-' + textBlockCounter,
            klassAssigner = 'textBlockWrapper-' + textBlockCounter,
            idAssigner = 'textBlockWrapperId-' + textBlockCounter,
            currentContentSpot = 'contentSpot-' + textBlockCounter,
            currentTextBlockWrapper = 'card-header-' + textBlockCounter,
            accordionTitle = siteLists.second.link.selectedIndex != 0 ? siteLists.first.options[siteLists.first.link.selectedIndex].text + ' em ' + siteLists.second.options[siteLists.second.link.selectedIndex].text : siteLists.first.options[siteLists.first.link.selectedIndex].text + ' em ' + siteLists.third.options[siteLists.third.link.selectedIndex].text,
            accordionTemplate = '<div class=\"card card-' + textBlockCounter + '\">' +
            '<div class=\"card-header card-header-' + textBlockCounter + '\" id=\"heading-' + textBlockCounter + '\">' +
            '<h5 class="mb-0">' +
            '<button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapse-' + textBlockCounter + '\" aria-expanded=\"true\" aria-controls=\"collapse' + textBlockCounter + '\">' +
            accordionTitle +
            '</button>' +
            '<span class=\"fas fa-times-circle trashcan ' + trashCanClass + '\" data-parent-card=\"card-' + textBlockCounter + '\"></span>' +
            '</h5>' +
            '</div>' +

            '<div id=\"collapse-' + textBlockCounter + '\" class=\"collapse show\" aria-labelledby=\"heading-' + textBlockCounter + '\" data-parent=\"#accordion\">' +
            '<div id=\"contentSpot-' + textBlockCounter + '\" class=\"contentSpot contentSpot-' + textBlockCounter + ' card-body col-12\" data-parent-card=\"card-' + textBlockCounter + '\">' +
            '</div>' +
            '</div>' +
            '</div>';

            let getSelectedIndexInArray = defineSelectedIndexInAnArray(true, true);

            selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
            templateArray = selectedItemsArray;

            if (getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[1] !== 0 || getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[2] !== 0) {

                docQuery('#accordion').innerHTML += accordionTemplate;
                criarEl('div', currentContentSpot, klassAssigner, idAssigner, null, '');

                let trashCanClass = docQuery('.trashcan-' + textBlockCounter);
                textBlockCounter++;

            } else {
                checkEmptyTextBlock('contentSpot');
            }

            levels = [];
            elemPlaceholder = setUpTextForTemplate(templateArray);

            for (var z = 0; z < templateArray.length; z++) {
                if (siteLists.first.link.selectedIndex === 0) {
                    return;
                } else {
                    if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex === 0 && siteLists.third.link.selectedIndex === 0) {
                        return;
                    } else if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex !== 0 || siteLists.third.link.selectedIndex !== 0) {
                        if(siteLists.first.link.selectedIndex === 12 || siteLists.first.link.selectedIndex === 13 || siteLists.first.link.selectedIndex === 14 || siteLists.first.link.selectedIndex === 15) {
                            criarEl('p', klassAssigner, 'arrayKlassNodos', 'arrayId', null, 'nodosFortuna');
                            docQuery('.textBlockWrapper-' + textBlockCounterRef).querySelector('.arrayKlassNodos').innerHTML = nodosFortuna;
                        }

                        criarEl('p', klassAssigner, 'arrayKlass-title', 'arrayId', null, 'title created');
                        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, 'block created');

                        docQuery('.textBlockWrapper-' + textBlockCounterRef).querySelector('.arrayKlass-title').innerHTML = elemPlaceholder[0];
                        docQuery('.textBlockWrapper-' + textBlockCounterRef).querySelector('.arrayKlass').innerHTML = elemPlaceholder[1];

                        if (siteLists.first.link.selectedIndex === 1) {
                            // This first element needs fixing

                            for(var j = 0; j < levels.length; j++) {
                                criarEl('p', klassAssigner, 'levelsClass', 'levelsId-'+j, null, j);
                                docQuery('.textBlockWrapper-' + textBlockCounterRef).querySelector('#levelsId-'+j).innerHTML = levels[j];
                            }

                            return;

                        } else {
                            return;
                        }
                    }
                }
            }
        }

        //Check for empty textBlock
        const checkEmptyTextBlock = (elem) => {
            let textBlocks = d.getElementsByClassName(elem),
            textBlocksChildren = '',
            blockToRemove = '',
            i;

            if (!textBlocks && !textBlocks.length) {
                return;
            } else {
                textBlocksChildren = textBlocks.length;

                // Refactor this block removing the unecessary if statement
                for (i = 0; i < textBlocksChildren; i++) {
                    if (textBlocks[i].childNodes[0].childNodes[1].innerHTML.length >= 4) {
                        console.log('%c didn\'t remove it: ', 'font-size: 12px; color: darkred;', textBlocks[i].children[i].children);
                    } else {
                        blockToRemove = '.' + textBlocks[i].getAttribute('data-parent-card');

                        docQuery(blockToRemove).remove();
                    }
                }
            }
        }


        const fillFormIn = (obj, listNumber) => {
            var treatedTitle = '';

            for (key in obj) {
                treatedTitle = obj[key].title.replace(tagFinder, '');
                criarEl('option', 'listOfItems-' + listNumber, 'optionClass', 'optionId', null, treatedTitle);
            }
        }

        this.injectFixedContent = function() {
            $('.fixedContentSpot').html(' ');
            $('.reportSummary').html(' ');

            $.each(data.fixedTexts, function(idx, elem) {
                $(elem).each(function(ix, elem) {
                    if(elem.info) {
                        $('.reportSummary').html($('.reportSummary').html() + elem.info);
                    } else {
                        $.each(elem, function(idx, elem) {
                            $('.fixedContentSpot').html($('.fixedContentSpot').html() + elem);
                        }.bind(this));
                    }
                });
            }.bind(this))
        }.bind(this);

        this.previewImage = function(ev) {
            if(ev == undefined || ev == null || ev == '') return;

            console.log('Preview image', ev);
            console.log('Preview image', ev.target);

            let reader = new FileReader(),
                currentTarget = $(ev.target).prop('id') == 'imageFileCover';

            console.log('currentTarget', currentTarget);

            reader.onload = function(){
                console.log('reader.onload');

                if(currentTarget) {
                    $(this.options.coverImage).attr('src', reader.result);
                } else {
                    $(this.options.userInfoSpot.reportImage).attr('src', reader.result);
                }
            }.bind(this);

            reader.readAsDataURL(ev.target.files[0]);
        }.bind(this);

        this.cleanReportSpot = function() {
            $(this.options.userInfoSpot.userName).html(' ');
            $(this.options.userInfoSpot.dateOfBirth).html(' ');
            $(this.options.userInfoSpot.timeOfBirth).html(' ');
            $(this.options.userInfoSpot.stateOfBirth).html(' ');
            $(this.options.userInfoSpot.countryOfBirth).html(' ');
            $(this.options.userInfoSpot.signStartShortDescription).html(' ');
        }.bind(this);

        this.getUserInfo = function() {
            let userInfoArray = [
                $(this.options.userInfo.userName).val(),
                `Nasceu ${$(this.options.userInfo.dateOfBirth).val()} `,
                `às ${$(this.options.userInfo.timeOfBirth).val().split(':').join('h')} `,
                `em ${$(this.options.userInfo.stateOfBirth).val()} | `,
                `${$(this.options.userInfo.countryOfBirth).val()}.`,
                `Seu signo é ${$(this.options.userInfo.signStar).val()}, seu Ascendente é ${$(this.options.userInfo.ascendent).val()} e sua Lua é em ${$(this.options.userInfo.moon).val()}`
            ];

            return userInfoArray;

        }.bind(this);

        this.insertUserInfo = function(callbackFunc, arg) {
            this.cleanReportSpot();

            let userInfo = this.getUserInfo();
            console.log('userInfo', userInfo);

            $('.userName').html(userInfo[0]);
            $('.dateOfBirth').html(userInfo[1]);
            $('.timeOfBirth').html(userInfo[2]);
            $('.stateOfBirth').html(userInfo[3]);
            $('.countryOfBirth').html(userInfo[4]);
            $('.signStartShortDescription').html(userInfo[5]);

            console.log('typeof callbackFunc', typeof callbackFunc);

            if(typeof callbackFunc == 'function') {
                if(arg === '') {
                    return;
                }

                callbackFunc(arg);
            }
        }.bind(this);

        this.togglePanel = function() {
            $('body').on('click', '.toggle-icon', function(ev) {
                if(!$(ev.target).parents('.mainPanel').length) return;

                console.log('!$(ev.target).parents(\'.mainPanel\').hasClass(\'active\')', $(ev.target).parents('.mainPanel').hasClass('active'));
                if(!$(ev.target).parents('.mainPanel').hasClass('active')) return $('.mainPanel').addClass('active');

                console.log('$(ev.target).parents(\'.mainPanel\').hasClass(\'active\')', $(ev.target).parents('.mainPanel').hasClass('active'));
                return $('.mainPanel').removeClass('active');
            }.bind(this));
        }.bind(this);

        this.showMessage = function(ev) {
            console.log('this.showMessage', ev);

            if(ev === undefined || ev === null || ev === '') return;

            console.log('this.showMessage', $(ev.target).parent());

            if(!$('.inserted-successfully').length) {
                let insertionMessage = '<div class=\"message-success inserted-successfully bg-success text-white p-4\">Informações inseridas com sucesso</div>';
                $(ev.target).parent().append(insertionMessage);
            } else {
                $('.inserted-successfully').fadeIn();
            }

            setTimeout(this.hideMessage, 2000);
        }.bind(this);

        this.hideMessage = function() {
            $('.inserted-successfully').fadeOut();
        }.bind(this);

        this.init = function() {
            fillFormIn(data.planets, 1);
            fillFormIn(data.signos, 2);
            fillFormIn(data.casas, 3);

            docQuery('.listOfItems-2').setAttribute('disabled', true);
            docQuery('.listOfItems-3').setAttribute('disabled', true);

            $submitBtn.addEventListener('click', addElementsToTemplate);

            // Inject content
            this.injectFixedContent();

            // bind click over toggle-icons box
            this.togglePanel();

            // Control the buttons' behaviour
            // ------------------------------------------------------------------------------------------
            docQuery('.listOfItems-1').addEventListener('change', (ev) => {
                let firstListOfItems = ev.target.selectedIndex;

                switch(firstListOfItems) {
                    case 0:
                    docQuery('#resetForm').click();
                    docQuery('.listOfItems-2').setAttribute('disabled', true);
                    docQuery('.listOfItems-3').setAttribute('disabled', true);

                    break;

                    case 3:
                    docQuery('.listOfItems-3').selectedIndex = 0;
                    docQuery('.listOfItems-2').removeAttribute('disabled', true);
                    docQuery('.listOfItems-3').setAttribute('disabled', true);
                    break;

                    default:
                    docQuery('.listOfItems-2').selectedIndex = 0;
                    docQuery('.listOfItems-3').selectedIndex = 0;
                    docQuery('.listOfItems-2').removeAttribute('disabled');
                    docQuery('.listOfItems-3').removeAttribute('disabled');
                }
            });

            docQuery('.listOfItems-2').addEventListener('change', (ev) => {
                if (ev.target.selectedIndex !== 0) {
                    return docQuery('.listOfItems-3').setAttribute('disabled', true);
                }

                if (ev.target.selectedIndex === 0) {
                    return docQuery('.listOfItems-3').removeAttribute('disabled');
                }
            });

            docQuery('.listOfItems-3').addEventListener('change', (ev) => {
                if (ev.target.selectedIndex !== 0) {
                    return docQuery('.listOfItems-2').setAttribute('disabled', true);
                }

                if (ev.target.selectedIndex === 0) {
                    return docQuery('.listOfItems-2').removeAttribute('disabled');
                }
            });

            docQuery('#insertIntoLayout').addEventListener('click', function(ev) {
                console.log('Text Inserted');

                this.insertUserInfo(this.showMessage, ev);
            }.bind(this));

            $resetInput('input[type=\"reset\"]').addEventListener('click', (ev) => {
                docQuery('.listOfItems-2').setAttribute('disabled', true);
                docQuery('.listOfItems-3').setAttribute('disabled', true);
                return;
            });

            $(this.options.body).on('change', this.options.imageFileCover, this.previewImage);
            $(this.options.body).on('change', this.options.imageFileMap, this.previewImage);

            b.addEventListener('click', (ev) => {
                if(!ev.target.classList.contains('trashcan')) return;

                let evTargetAttr = '.' + ev.target.getAttribute('data-parent-card');
                return deleteTextBlock(ev.target, evTargetAttr);
            });

            setInterval(() => {
                checkEmptyTextBlock('contentSpot');
            }, 60000);
        }.bind(this);
    }

    return returnedModule;
});