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
                titleReturned = (indexPassedIn.element2[1] === 0) ? '<strong>Juno na ' : '<strong>Quíron em ';
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

                } else if(elementsIndexAndTexts.element2[0] === 13) {

                    nodosFortuna = data.signos[key].parteFortuna;

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
            var textBlockCounterRef = textBlockCounter;
            let getSelectedIndexInArray = defineSelectedIndexInAnArray(true, true);

            // Used in the function bellow
            klassAssigner = 'textBlockWrapper-' + textBlockCounter;
            idAssigner = 'textBlockWrapperId-' + textBlockCounter;
            selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
            selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
            templateArray = selectedItemsArray;

            console.log('templateArray', templateArray);
            console.log('selectedItemsArray', selectedItemsArray);


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
            console.log('elemPlaceholder', elemPlaceholder);
            console.log('templateArray', templateArray);

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

                    criarEl('p', klassAssigner, 'arrayKlass-title', 'arrayId', null, 'title created');
                    criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, 'block created');

                    console.log('textBlock content ', elemPlaceholder[1]);

                    docQuery('div[class^=textBlockWrapper-]:last-child').querySelector('.arrayKlass-title').innerHTML = elemPlaceholder[0];
                    docQuery('div[class^=textBlockWrapper-]:last-child').querySelector('.arrayKlass').innerHTML = elemPlaceholder[1];

                        // .classList.add('lastBlockOfArray');

                        if(siteLists.first.link.selectedIndex === 12) {
                          console.log('********************Selected index is 12******************** ' + elemPlaceholder[1].substring(0, 100));
                      }

                      if (siteLists.first.link.selectedIndex === 1) {
                        // This first element needs fixing

                        for(var j = 0; j < levels.length; j++) {
                            criarEl('p', klassAssigner, 'levelsClass', 'levelsId-'+j, null, j);
                            docQuery('div[class^=textBlockWrapper-]:last-child').querySelector('#levelsId-'+j).innerHTML = levels[j];
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
                if (ev.target.selectedIndex === 0) {
                    docQuery('.listOfItems-2').setAttribute('disabled', true);
                    docQuery('.listOfItems-3').setAttribute('disabled', true);
                } else {
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

            if(document.querySelector('#printDocument')) {
                $printButton('#printDocument').addEventListener('click', function(ev) {
                    window.print();
                    return;
                });
            }

            setInterval(() => {
                console.log(`Every 60 second we run a function to clean up any empty block in the contentSpot tag`);
                checkEmptyTextBlock('contentSpot');
            }, 60000);
        };
    }

    return returnedModule;
});