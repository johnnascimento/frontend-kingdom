define(['jquery'], function($) {
    console.log('script initialized !');

    const defaults = {
        body: 'body'
    }

    var returnedModule = function(options) {
        this.options = Object.assign({}, defaults, options);

        this.setOptions = function(options) {
            this.options = Object.assign({}, this.options, options);

            return this;
        }.bind(this);

        // Loglal part
        //-------------------------------------------------------------------------
        const d = document;
        const b = d.body || d.bodyElement;
        const docQuery = (elem) => {
            return d.querySelector(elem);
        };

        const w = window;
        const $contentSpot = docQuery('.contentSpot');
        let key = '';
        let selectedItemsArray = [];
        let evaluatedValueToReturn = [];
        let nodosFortuna = '';
        let lineBreaks = '';
        var tagFinder = new RegExp('\<\/strong\>', 'gmi');

        // contentSpot.innerHTML = ""; // Getting rid of any white spce within content spot's tags

        const $submitBtn = docQuery('#submitBtn');
        const $contentSpotElem = docQuery('#contentSpot');
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

        var textBlockCounter = 0;
        let i = 0;
        let levels = [];

        const criarEl = (elType, assignmentReference, klass, id, selectorElem, textEl, el) => {
            console.log('criarEl', elType, ' ', assignmentReference, ' ', klass, ' ', id, ' ', selectorElem, ' ', textEl, ' ', el);

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
        // Used st the currying function for indeces and/or text
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
            console.log('defineNodosLunaresTitle was invoked', elemToActUpon);
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
            console.log('defineTitles was invoked', elemToActUpon);

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
            console.log('Grab input values is running sound!');
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

                    if(elementsIndexAndTexts.element2[0] === 1) {
                        for(i = 0; i < data.signos[key].levels.length; i++) {
                            levels.push(data.signos[key].levels[i]);
                        }
                    } else if(elementsIndexAndTexts.element2[0] === 12) {

                        nodosFortuna = data.signos[key].nodosLunares;
                        console.log('nodos lunares', nodosFortuna);

                    } else if(elementsIndexAndTexts.element2[0] === 13) {

                        nodosFortuna = data.defaultText.parteFortuna;
                        console.log('parte fortuna ', nodosFortuna);

                    } else if(elementsIndexAndTexts.element2[0] === 14) {

                        nodosFortuna = data.defaultText.quironCurador;
                        console.log('quiron curador ', nodosFortuna);

                    } else if(elementsIndexAndTexts.element2[0] === 15) {

                        nodosFortuna = data.defaultText.junosCasasSignos;
                        console.log('junos nas casas e signos ', nodosFortuna);

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
            console.log('setUpTextForTemplate is running sound!');
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
            console.log('DeleteTextBlock is running sound!');

            if(blockToDelete === '' || blockToDelete === undefined || blockToDelete === null) {
                console.log('remove specific element');
                ev.parentNode.remove();
            } else {
                console.log('remove the whole card');
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
            console.log('addElementsToTemplate is running sound');

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

            console.log('templateArray', templateArray);
            console.log('selectedItemsArray', selectedItemsArray);
            console.log('accordionTemplate', accordionTemplate);

            if (getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[1] !== 0 || getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[2] !== 0) {

                docQuery('#accordion').innerHTML += accordionTemplate;

                criarEl('div', currentContentSpot, klassAssigner, idAssigner, null, '');

                let trashCanClass = docQuery('.trashcan-' + textBlockCounter);
                console.log('trashCanClass ', trashCanClass);

                textBlockCounter++;

            } else {
                checkEmptyTextBlock('contentSpot');
            }

            levels = [];
            elemPlaceholder = setUpTextForTemplate(templateArray);
            console.log('elemPlaceholder', elemPlaceholder);
            console.log('templateArray', templateArray);

            for (var z = 0; z < templateArray.length; z++) {
                console.log('For loop templateArray[z]', templateArray[z]);

                if (siteLists.first.link.selectedIndex === 0) {
                    return;
                } else {
                    if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex === 0 && siteLists.third.link.selectedIndex === 0) {
                        return;
                    } else if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex !== 0 || siteLists.third.link.selectedIndex !== 0) {
                        console.log('For loop templateArray[z] else if', templateArray[z]);

                        if(siteLists.first.link.selectedIndex === 12 || siteLists.first.link.selectedIndex === 13 || siteLists.first.link.selectedIndex === 14 || siteLists.first.link.selectedIndex === 15) {
                            console.log('For loop templateArray[z] else if - IF', templateArray[z]);

                            criarEl('p', klassAssigner, 'arrayKlassNodos', 'arrayId', null, 'nodosFortuna');
                            docQuery('.textBlockWrapper-' + textBlockCounterRef).querySelector('.arrayKlassNodos').innerHTML = nodosFortuna;
                        }

                        criarEl('p', klassAssigner, 'arrayKlass-title', 'arrayId', null, 'title created');
                        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, 'block created');

                        console.log('textBlock content ', elemPlaceholder[1]);
                        console.log('*************** Last block added ', docQuery('.' + klassAssigner + ':last-child'));

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
            console.log('Check empty text block is running sound!');

            let textBlocks = d.getElementsByClassName(elem),
                textBlocksChildren = '',
                blockToRemove = '',
                i;

            if (!textBlocks && !textBlocks.length) {
                console.log('!textBlocks && !textBlocks.length');

                return;
            } else {
                console.log('Check for empty stuff');
                textBlocksChildren = textBlocks.length;

                for (i = 0; i < textBlocksChildren; i++) {
                    console.log('check statement textBlocks[i].childNodes[0].innerHTML', textBlocks[i].childNodes[0].childNodes[1].innerHTML.substring(0, 10));
                    console.log('check statement textBlocks[i].childNodes[0].innerHTML < 4', textBlocks[i].childNodes[0].childNodes[1].innerHTML.length < 4);

                    if (textBlocks[i].childNodes[0].childNodes[1].innerHTML.length >= 4) {
                        console.log('%c didn\'t remove it: ', 'font-size: 12px; color: darkred;', textBlocks[i].children[i].children);
                    } else {
                        blockToRemove = '.' + textBlocks[i].getAttribute('data-parent-card');
                        console.log('Remove it away', blockToRemove);
                        console.log('block removed', textBlocks[i].childNodes[0].childNodes[1].innerHTML.substring(0,30));

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


        this.init = function() {
            fillFormIn(data.planets, 1);
            fillFormIn(data.signos, 2);
            fillFormIn(data.casas, 3);

            docQuery('.listOfItems-2').setAttribute('disabled', true);
            docQuery('.listOfItems-3').setAttribute('disabled', true);

            $submitBtn.addEventListener('click', addElementsToTemplate);

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

            $resetInput('input[type=\"reset\"]').addEventListener('click', (ev) => {
                docQuery('.listOfItems-2').setAttribute('disabled', true);
                docQuery('.listOfItems-3').setAttribute('disabled', true);
                return;
            });

            // if(document.querySelector('#printDocument')) {
            //     $printButton('#printDocument').addEventListener('click', function(ev) {
            //         return;
            //     });
            // }

            b.addEventListener('click', (ev) => {
                console.log('clicked but didn\'t go any further');

                if(!ev.target.classList.contains('trashcan')) return;
                console.log('deleteTextBlock evTargetAttr', evTargetAttr, ' classList ', ev.target.classList);
                console.log('classList contains trashcan ', ev.target.classList.contains('trashcan'));

                let evTargetAttr = '.' + ev.target.getAttribute('data-parent-card');
                return deleteTextBlock(ev.target, evTargetAttr);
            });

            setInterval(() => {
                console.log(`Every 60 second we run a function to clean up any empty block in the contentSpot tag`);
                checkEmptyTextBlock('contentSpot');
            }, 60000);
        };
    }

    return returnedModule;
});