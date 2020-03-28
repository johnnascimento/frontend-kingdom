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

        contentSpot.innerHTML = ""; // Getting rid of any white spce within content spot's tags

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
            console.log('idx: ', idx);
            console.log('elemToActUpon: ', elemToActUpon);

            switch(idx.element2[1]) {
                case 1:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Libra';
                    break;

                case 2:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Escorpião';
                    break;

                case 3:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Sagitário';
                    break;

                case 4:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Capricórnio';
                    break;

                case 5:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Aquário';
                    break;

                case 6:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Peixes';
                    break;

                case 7:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Áries';
                    break;

                case 8:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Touro';
                    break;

                case 9:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Gêmoes';
                    break;

                case 10:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Câncer';
                    break;

                case 11:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Leão';
                    break;

                case 12:
                    NodostitleReturned = 'Nodo Sul em ' + idx.element1[1] + ' / Nodo Norte em Virgem';
                    break;

                default:
                    NodostitleReturned = 'empty';
                    break;
            }

            console.log('NodostitleReturned after treatment, ', NodostitleReturned);
            return NodostitleReturned;
        };

        const defineTitles = (elemToActUpon, indexPassedIn) => {
            console.log('defineTitles was invoked', elemToActUpon);

            var titleReturned = '';
            var elemToActUponLowerCase = elemToActUpon.toLowerCase();

            console.log('elemToActUponLowerCase has been treated', elemToActUponLowerCase, ' Idx: ', indexPassedIn);

            switch(elemToActUponLowerCase) {
                case 'sol':
                    console.log('elemToActUponLowerCase is sol case', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Sol na ' : 'Sol em ';
                    break;

                case 'lua':
                    console.log('Lua case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Lua na ' : 'Lua em ';
                    break;

                case 'ascendente':
                    console.log('Ascendente case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Ascendente na ' : 'Ascendente ';
                    break;

                case 'mercúrio':
                    console.log('Mercúrio case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Mercúrio na ' : 'Mercúrio em ';
                    break;

                case 'vênus':
                    console.log('Vênus case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Vênus na ' : 'Vênus em ';
                    break;

                case 'marte':
                    console.log('Marte case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Marte na ' : 'Marte em ';
                    break;

                case 'júpter':
                    console.log('Júpter case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Júpter na ' : 'Júpter em ';
                    break;

                case 'saturno':
                    console.log('Saturno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Saturno na ' : 'Saturno em ';
                    break;

                case 'urano':
                    console.log('Urano case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Urano na ' : 'Urano em ';
                    break;

                case 'netuno':
                    console.log('Netuno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Netuno na ' : 'Netuno em ';
                    break;

                case 'plutão':
                    console.log('Plutão case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Plutão na ' : 'Plutão em ';
                    break;

                case 'nodos lunares':
                    console.log('Nodos case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Nodos Lunares na ' : defineNodosLunaresTitle(elemToActUpon, indexPassedIn);
                    break;

                case 'parte da fortuna':
                    console.log('Parte case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Parte da Fortuna na ' : 'Parte da Fortuna em ';
                    break;

                case 'quíron':
                    console.log('Quíron case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Quíron na ' : 'Quíron em ';
                    break;

                case 'juno':
                    console.log('Juno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Juno na ' : 'Quíron em ';
                    break;

                case 'mercúrio retrógado':
                    console.log('Mercúrio case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Mercúrio Retrógado na ' : 'Mercúrio Retrógado em ';
                    break;

                case 'vênus retrógado':
                    console.log('Vênus case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Vênus Retrógado na ' : 'Vênus Retrógado em ';
                    break;

                case 'marte retrógado':
                    console.log('Marte case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Marte Retrógado na ' : 'Marte Retrógado em ';
                    break;

                case 'júpter retrógado':
                    console.log('Júpter case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Júpter Retrógado na ' : 'Júpter Retrógado em ';
                    break;

                case 'saturno retrógado':
                    console.log('Saturno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Saturno Retrógado na ' : 'Saturno Retrógado em ';
                    break;

                case 'urano retrógado':
                    console.log('Urano case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Urano Retrógado na ' : 'Urano Retrógado em ';
                    break;

                case 'netuno retrógado':
                    console.log('Netuno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Netuno Retrógado na ' : 'Netuno Retrógado em ';
                    break;

                case 'plutão retrógado':
                    console.log('Plutão case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Plutão Retrógado na ' : 'Plutão Retrógado em ';
                    break;

                case 'quíron retrógado':
                    console.log('Quíron case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Quíron Retrógado na ' : 'Quíron Retrógado em ';
                    break;

                case 'juno retrógado':
                    console.log('Juno case: ', elemToActUponLowerCase);
                    titleReturned = (indexPassedIn.element2[1] === 0) ? 'Juno Retrógado na ' : 'Juno Retrógado em ';
                    break;

                default:
                    console.log('default: ', elemToActUponLowerCase);
                    titleReturned = 'empty'
                    break;
            }

            return titleReturned;
        };


        const grabInputValues = (element, index) => {
            console.log('Grab input values is running sound!');
            let elementsIndexAndTexts = defineSelectedIndexInAnArray(true, true);

            for (key in data.planets) {
                if (data.planets[key].title == element) {
                    if (elementsIndexAndTexts.element2[0] !== 0 && elementsIndexAndTexts.element2[1] === 0) {
                        // Call upon defineTitles function before pushing da.planets[key].title;
                        defineTitles(data.planets[key].title, elementsIndexAndTexts);
                        console.log('********* Casas', elementsIndexAndTexts);

                        evaluatedValueToReturn.push(defineTitles(data.planets[key].title, elementsIndexAndTexts) + " " + elementsIndexAndTexts.element1[2]);
                    } else if (elementsIndexAndTexts.element2[0] !== 0 && elementsIndexAndTexts.element2[2] === 0) {
                        // Call upon defineTitles function before pushing da.planets[key].title;
                        defineTitles(data.planets[key].title, elementsIndexAndTexts);
                        console.log('********* SIGNOS', elementsIndexAndTexts);

                        evaluatedValueToReturn.push(defineTitles(data.planets[key].title, elementsIndexAndTexts) + " " + elementsIndexAndTexts.element1[1]);
                    }
                    return evaluatedValueToReturn;
                }
            }

            for (key in data.signos) {
                if (data.signos[key].title == element) {
                    evaluatedValueToReturn.push(data.signos[key].text[elementsIndexAndTexts.element2[0] - 1]);

                  if(elementsIndexAndTexts.element2[0] === 1) {

                    for(i = 0; i < data.signos[key].levels.length; i++) {
                      levels.push(data.signos[key].levels[i]);
                    }

                  } else if(elementsIndexAndTexts.element2[0] === 12) {

                    nodosFortuna = data.signos[key].nodosLunares;

                  } else if(elementsIndexAndTexts.element2[0] === 13) {

                    nodosFortuna = data.signos[key].parteFortuna;

                  } else {
                    levels.push("");
                  }

                    return evaluatedValueToReturn;
                }
            }

            for (key in data.casas) {
                if (data.casas[key].title == element) {
                    evaluatedValueToReturn.push(data.casas[key].text[elementsIndexAndTexts.element2[0] - 1]);

                    if(elementsIndexAndTexts.element2[0] === 12) {

                        nodosFortuna = data.casas[key].nodosLunares;

                    } else if(elementsIndexAndTexts.element2[0] === 13) {

                        nodosFortuna = data.casas[key].parteFortuna;

                    } else {
                        levels.push("");
                    }

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
                console.log('setUpTextForTemplate - indexSelectedArray', indexSelectedArray);
                console.log('setUpTextForTemplate - evaluatedValueToReturn', evaluatedValueToReturn);
                return evaluatedValueToReturn;
            }
        };


        const deleteTextBlock = (ev) => {
            console.log('DeleteTextBlock is running sound!');
            ev.parentNode.remove();
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
            var textBlockWrapper = '';
            var klassAssigner = '';
            var templateArray = [];
            var selectedItemsArray = [];
            let getSelectedIndexInArray = defineSelectedIndexInAnArray(true, true);

            // Used in the function bellow
            klassAssigner = 'textBlockWrapper-' + textBlockCounter;
            idAssigner = 'textBlockWrapperId-' + textBlockCounter;
            selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
            templateArray = selectedItemsArray;


            if (getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[1] !== 0 || getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[2] !== 0) {
                // Create a for loop to test if there's any textBlockWrapper already created and empty.If so, grab the empty guy and add the value to it.
                criarEl('div', 'contentSpot', klassAssigner, idAssigner, null, '');
                criarEl('div', 'textBlockWrapper-' + textBlockCounter, 'trashcan-' + textBlockCounter, 'trashcanId', null, 'x');

                let trashCanClass = docQuery('.trashcan-' + textBlockCounter);
                trashCanClass.addEventListener('click', (ev) => {
                    return deleteTextBlock(ev.target)
                });

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

                      if(siteLists.first.link.selectedIndex === 12) {
                        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, nodosFortuna);
                      }

                        criarEl('p', klassAssigner, 'arrayKlass-title', 'arrayId', null, elemPlaceholder[0]);
                        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, elemPlaceholder[1]);

                        if(siteLists.first.link.selectedIndex === 12) {
                          console.log('********************Selected index is 12******************** ' + elemPlaceholder[1].substring(0, 100));
                        }

                        if (siteLists.first.link.selectedIndex === 1) {
                        // This first element needs fixing

                           for(var j = 0; j < levels.length; j++) {
                            console.log('RUNNING 1,2,3.....', levels[j]);
                              criarEl('p', klassAssigner, 'levelsClass', 'levelsId-'+i, null, levels[j]);
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

            let textBlocks = d.getElementsByClassName(elem);

            if (textBlocks[0].children.length === 0) {
                return;
            } else {
                for (let i = 0; i < textBlocks[0].children.length; i++) {
                    if (textBlocks[0].children[i].children.length > 1) {
                        console.log('%c didn\'t remove it: ', 'font-size: 12px; color: darkred;', textBlocks[0].children[i].children);
                    } else {
                        textBlocks[0].children[i].remove();
                    }
                }
            }
        }


        const fillFormIn = (obj, listNumber) => {
            for (key in obj) {
                criarEl('option', 'listOfItems-' + listNumber, 'optionClass', 'optionId', null, obj[key].title);
            }
        }


        this.init = function() {
            fillFormIn(data.planets, 1);
            fillFormIn(data.signos, 2);
            fillFormIn(data.casas, 3);
            $submitBtn.addEventListener('click', addElementsToTemplate);

            // Control the buttons' behaviour
            // ------------------------------------------------------------------------------------------
            $inputSignoOrCasa('.listOfItems-2').addEventListener('change', (ev) => {
                if (ev.target.selectedIndex !== 0) {
                    return docQuery('.listOfItems-3').setAttribute('disabled', true);
                }

                if (ev.target.selectedIndex === 0) {
                    return docQuery('.listOfItems-3').removeAttribute('disabled');
                }
            });

            $inputSignoOrCasa('.listOfItems-3').addEventListener('change', (ev) => {
                if (ev.target.selectedIndex !== 0) {
                    return docQuery('.listOfItems-2').setAttribute('disabled', true);
                }

                if (ev.target.selectedIndex === 0) {
                    return docQuery('.listOfItems-2').removeAttribute('disabled');
                }
            });

            $resetInput('input[type=\"reset\"]').addEventListener('click', (ev) => {
                docQuery('.listOfItems-2').removeAttribute('disabled');
                docQuery('.listOfItems-3').removeAttribute('disabled');
                return;
            });

            $printButton('#printDocument').addEventListener('click', function(ev) {
                window.print();
                return;
            });

            setInterval(() => {
                console.log(`Every 60 second we run a function to clean up any empty block in the contentSpot tag`);
                checkEmptyTextBlock('contentSpot');
            }, 60000);
        };
    }

    return returnedModule;
});