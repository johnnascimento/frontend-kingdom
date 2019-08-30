window.onload = () => {
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

    contentSpot.innerHTML = ""; // Getting rid of any white spce within content spot's tags

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



    const $submitBtn = docQuery('#submitBtn');
    const $contentSpotElem = docQuery('#contentSpot');
    const $inputSignoOrCasa = (elem) => {
        return docQuery(elem);
    };
    const $resetInput = (elem) => {
        return docQuery(elem);
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
    // Used st the currying function for index and/or text
    // ---------------------------------------
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


    const grabInputValues = (element, index) => {
        console.log('Grab input values is running sound!');
        let elementsIndexAndTexts = defineSelectedIndexInAnArray(true, true);

        for (key in data.planets) {
            if (data.planets[key].title == element) {
                if (elementsIndexAndTexts.element2[1] === 0 && elementsIndexAndTexts.element2[2] !== 0) {
                    evaluatedValueToReturn.push(data.planets[key].title + " " + elementsIndexAndTexts.element1[2]);
                } else if (elementsIndexAndTexts.element1[0] !== 0 && elementsIndexAndTexts.element2[2] === 0) {
                    evaluatedValueToReturn.push(data.planets[key].title + " " + elementsIndexAndTexts.element1[1]);
                }

                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data planets');
            }
        }

        for (key in data.signos) {
            if (data.signos[key].title == element) {
                evaluatedValueToReturn.push(data.signos[key].text[elementsIndexAndTexts.element2[0] - 1]);

              if(elementsIndexAndTexts.element2[0] === 1) {
                console.log("&&&&&&&&&& IF in signos");
                for(i = 0; i < data.signos[key].levels.length; i++) {
                  levels.push(data.signos[key].levels[i]);
                }
                
                console.log('Leveld in setting up function', levels);
              } else {
                console.log("***** Else in levels signos");
                levels.push("");
              }

                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data signos');
            }
        }

        for (key in data.casas) {
            if (data.casas[key].title == element) {
                evaluatedValueToReturn.push(data.casas[key].text[elementsIndexAndTexts.element2[0] - 1]);
                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data casas');
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

                    criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, elemPlaceholder[0]);
                    criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, elemPlaceholder[1]);

                    if (siteLists.first.link.selectedIndex === 1) {
                    // This first element needs fixing

                       for(var j = 0; j < levels.length; j++) {
                        console.log('RUNNING 1,2,3.....', levels[i]);
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

    setInterval(() => {
        console.log(`Every 60 second we run a function to clean any empty block in the contentSpot tag`);
        checkEmptyTextBlock('contentSpot');
    }, 60000);
};