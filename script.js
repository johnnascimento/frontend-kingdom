window.onload = function() {
    // Loglal part
    //-------------------------------------------------------------------------
    var d = document;
    var b = d.body || d.bodyElement;
    var docQuery = function(elem) {
        return d.querySelector(elem);
    };
    var w = window;
    var key = '';
    var selectedItemsArray = [];
    var evaluatedValueToReturn = [];

    const siteLists = {
        first: {
            link: d.querySelector('.listOfItems-1'),
            options: d.querySelector('.listOfItems-1').options,
            index: 1
        },

        second: {
            link: d.querySelector('.listOfItems-2'),
            options: d.querySelector('.listOfItems-2').options,
            index: 2
        },

        third: {
            link: d.querySelector('.listOfItems-3'),
            options: d.querySelector('.listOfItems-3').options,
            index: 3
        }
    };



    const $submitBtn = d.querySelector('#submitBtn');
    const $contentSpotElem = d.querySelector('#contentSpot');
    const $inputSignoOrCasa = (elem) => {
        return d.querySelector(elem)
    };
    const $resetInput = (elem) => {
        return d.querySelector(elem)
    };
    var textBlockCounter = 0;
    let i = 0;
    let levels = [];

    //console.log('%c elementIndexesAndTexts ', 'font-size: 25px; color: #770077;', elementIndexesAndTexts);


    function criarEl(elType, assignmentReference, klass, id, selectorElem, textEl, el) {
        el = d.createElement(elType);
        el.classList.add(klass);
        el.appendChild(d.createTextNode(textEl));
        if (selectorElem === undefined || selectorElem === null) {
            d.querySelector('.' + assignmentReference).appendChild(el);
        } else {
            d.querySelector(selectorElem + assignmentReference).appendChild(el);
        }
    }

    //
    // Used st the currying function for index and/or text
    // ---------------------------------------
    const storeIndexOrText = (elem) => {
        elems = [];

        elem.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
        elem.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
        elem.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
        console.log('And elem var is ' + elem[0] + " " + elem[1] + " " + elem[2]);
        return elems;
    };

    const storeIndexAndText = (elem1, elem2, elems) => {
        elem1 = [];
        elem2 = [];
        elems = {};

        elem1.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
        elem1.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
        elem1.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
        console.log('elem1 var is ' + elem1[0] + ' ' + elem1[1] + ' ' + elem1[2]);

        elem2.push(siteLists.first.link.selectedIndex);
        elem2.push(siteLists.second.link.selectedIndex);
        elem2.push(siteLists.third.link.selectedIndex);
        console.log('elem2 var is ' + elem2[0] + ' ' + elem2[1] + ' ' + elem2[2]);

        elems = {
            element1: elem1,
            element2: elem2
        };

        return elems;
    };

    //
    // Come back to this later
    // -------------------------------------------------------------------
    function defineSelectedIndexInAnArray(textOfElem, indexOfElem) {
        let valueToReturn = "";

        if (indexOfElem === true && textOfElem === true) {
            console.log('Both args are true');
            valueToReturn = storeIndexAndText();
            return valueToReturn;
        } else {
            console.log('one argument was not passed to the function');
            valueToReturn = storeIndexOrText();
            return valueToReturn;
        }
        return valueToReturn;
    }


    function grabInputValues(element, index) {
        console.log('It came within the myArr function');
        console.log(index);
        console.log(element);
        console.log('Txt node', data.planets[index].title);
        console.log('Txt node', data.signos[index].title);
        console.log('Txt node', data.casas[index].title);

        let elementsIndexAndTexts = defineSelectedIndexInAnArray(true, true);
        console.log('+---------------------+');
        console.log('+*+*+*+*' + elementsIndexAndTexts.element1[i] + '+*+*+*+*+*+');
        i++;
        console.log('+---------------------+');

        for (key in data.planets) {
            //console.log('data planet content: ', data.planets[key].title);
            if (data.planets[key].title == element) {
                console.log('The title is: ', data.planets[key].title);
                if (elementsIndexAndTexts.element2[1] === 0 && elementsIndexAndTexts.element2[2] !== 0) {
                    evaluatedValueToReturn.push(data.planets[key].title + " " + elementsIndexAndTexts.element1[2]);
                    console.log('Evaluated value to return: ', evaluatedValueToReturn);
                } else if (elementsIndexAndTexts.element2[1] !== 0 && elementsIndexAndTexts.element2[2] === 0) {
                    evaluatedValueToReturn.push(data.planets[key].title + " " + elementsIndexAndTexts.element1[1]);
                    console.log('Evaluated value to return: ', evaluatedValueToReturn);
                }
                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data planets');
            }
        }

        for (key in data.signos) {
            //console.log('data planet content: ', data.planets[key].title);
            if (data.signos[key].title == element) {
                console.log('The title is: ', data.signos[key].title);
                evaluatedValueToReturn.push(data.signos[key].text[elementsIndexAndTexts.element2[0] - 1]);
                console.log('Evaluated value to return: ', evaluatedValueToReturn);

                levels = [];

                for (let i = 0; i < data.signos[key].levels.length; i++) {
                    console.log('%c Data signos key levels i: ', 'font-size: 16px; color: #008754;', data.signos[key].levels[i]);
                    levels.push(data.signos[key].levels[i]);
                    console.log('%c Levels: ', 'font-size: 16px; color: #008754;', levels[i]);
                }

                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data planets');
            }
        }

        for (key in data.casas) {
            //console.log('data planet content: ', data.planets[key].title);
            if (data.casas[key].title == element) {
                console.log('The title is: ', data.casas[key].title);
                evaluatedValueToReturn.push(data.casas[key].text[elementsIndexAndTexts.element2[0] - 1]);
                console.log('%c Evaluated value to return: ', 'font-size: 30px; color: red; font-weight: bold;', evaluatedValueToReturn);

                levels = [];

                for (let i = 0; i < data.signos[key].levels.length; i++) {
                    console.log('%c Data casas key levels i: ', 'font-size: 16px; color: #008754;', data.casas[key].levels[i]);
                    levels.push(data.casas[key].levels[i]);
                    console.log('%c Levels casas: ', 'font-size: 16px; color: #008754;', levels[i]);
                }

                return evaluatedValueToReturn;
            } else {
                console.log('It\'s not data planets');
            }
        }
        return evaluatedValueToReturn;
    }


    function setUpTextForTemplate(indexSelectedArray) {
        console.log('setUpTextForTemplate was called');
        evaluatedValueToReturn = [];
        indexSelectedArray = indexSelectedArray || [];
        var indexSelectedNum = 0;

        if (indexSelectedArray.length) {
            console.log('If is true');

            indexSelectedArray.forEach(grabInputValues);
            return evaluatedValueToReturn;

        } else {
            console.log('Index selected array is: ' + indexSelectedArray + '. That\'s why the if statement didn\'t work');
        }
    }

    function indexChecker() {
        var elemReturned = [];
        var result = 0;

        elemReturned.push(siteLists.first.link.selectedIndex);
        console.log('Selected index in Index Checker: ', elemReturned[0]);

        elemReturned.push(siteLists.second.link.selectedIndex);
        console.log('Selected index in Index Checker: ', elemReturned[1]);

        elemReturned.push(siteLists.third.link.selectedIndex);
        // console.log('Selected index in Index Checker: ', elemReturned[2]);

        elemReturned.reduce(function(a, b) {
            result = (a === undefined) ? result + b : result + a + b;

            console.log('%c A value is: ', 'font-size: 16px; color: #774400;', a);
            console.log('%c B value is: ', 'font-size: 16px; color: #774400;', b);
            console.log('%c Result value is: ', 'font-size: 16px; color: #774400;', result);
        });

        if (result <= 0) {

            result = false;
            console.log('%c Index Checker function. Value: ', 'font-size: 16px; color: #007744;', result);
            return result;

        } else {

            result = true;
            console.log('%c Index Checker function. Value: ', 'font-size: 16px; color: #007744;', result);
            return result;

        }
    }

    function deleteTextBlock(ev) {
        console.log('DeleteTextBlock is running sound!');
        ev.parentNode.remove();
    }


    function addElementsToTemplate() {
        console.log('addElementsToTemplate is running sound');

        var elemPlaceholder = [];

        // Use the criarEl method to create this one
        // ------------------------------------------------------
        var textBlockWrapper = "";
        var klassAssigner = '';
        var templateArray = [];
        var selectedItemsArray = [];
        var indexCheckerVar;
        let getSelectedIndexInArray = defineSelectedIndexInAnArray(true, true);

        // Used in the function bellow
        klassAssigner = 'textBlockWrapper-' + textBlockCounter;
        idAssigner = 'textBlockWrapperId-' + textBlockCounter;
        selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
        selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
        selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
        templateArray = selectedItemsArray;
        indexCheckerVar = indexChecker();


        if (getSelectedIndexInArray.element2[0] !== 0 && getSelectedIndexInArray.element2[1] !== 0 || getSelectedIndexInArray.element2[2] !== 0 && indexCheckerVar === true) {
            // Create a for loop to test if there's any textBlockWrapper already created and empty.If so, grab the empty guy and add the value to it.
            criarEl('div', 'contentSpot', klassAssigner, idAssigner, null, '');
            criarEl('div', 'textBlockWrapper-' + textBlockCounter, 'trashcan-' + textBlockCounter, 'trashcanId', null, 'x');

            let trashCanClass = docQuery('.trashcan-' + textBlockCounter);
            trashCanClass.addEventListener('click', (ev) => {
                return deleteTextBlock(ev.target)
            });

            textBlockCounter++;

            console.log('%c The content of Content spot is: ', 'font-size: 30px; color: #775485;', d.querySelector('.contentSpot'));

        } else {
            console.log('%c  is equal zero! ', 'font-size: 30px; color: #775485;', templateArray + ' is equal zero!');
            checkEmptyTextBlock('contentSpot');
        }

        console.log('%c template array: ', 'font-size: 40px; color: blue;', templateArray);


        elemPlaceholder = setUpTextForTemplate(templateArray);
        console.log('THIS IS THE ELEMENT PLACE HOLDER: ' + elemPlaceholder);

        for (var z = 0; z < templateArray.length; z++) {
            if (siteLists.first.link.selectedIndex === 0) {
                console.log('Element placeholder is Zero');
                return;
            } else {
                if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex === 0 && siteLists.third.link.selectedIndex === 0) {

                    return;

                } else if (siteLists.first.link.selectedIndex !== 0 && siteLists.second.link.selectedIndex !== 0 || siteLists.third.link.selectedIndex !== 0) {

                    criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, elemPlaceholder[0]);
                    criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', null, elemPlaceholder[1]);
                    criarEl('p', klassAssigner, 'levelsClass', 'levelsId-1', null, levels[0]);
                    criarEl('p', klassAssigner, 'levelsClass', 'levelsId-2', null, levels[1]);
                    criarEl('p', klassAssigner, 'levelsClass', 'levelsId-3', null, levels[2]);
                    criarEl('p', klassAssigner, 'levelsClass', 'levelsId-4', null, levels[3]);
                    return;

                }
            }
        }
        console.log('text block has: ', textBlockWrapper);
    }


    function grabEmptyBlock(elem, idx) {
        if (!elem.length) {
            console.log('**********The element in question is empty, so let\'s grab it ********', elem);
            elem.delete();
            return;
        } else {
            console.log('The given element has value in it');
        }
    }


    //Check for empty textBlock
    function checkEmptyTextBlock(elem) {
        console.log('************working!!!!!************');

        let textBlocks = document.getElementsByClassName(elem);
        console.log('%c Text block: ', 'font-size:16px; color: darkred;', textBlocks);

        if (textBlocks[0].children.length != 0) {
          console.log('%c Text block children length: ', 'font-size:16px; color: blue;', textBlocks[0].children.length);

            for (let i = 0; i < textBlocks[0].children.length; i++) {
              console.log('%c Text block children children: ', 'font-size:16px; color: green;', textBlocks[0].children[i]);

                if (textBlocks[0].children[i].children.length === 0) {
                    textBlocks[0].children[i].remove();
                } else {
                    console.log('%c didn\'t remove it: ', 'font-size:16px; color: darkred;', textBlocks[0].children[i].children);
                }
            }
        } else {
            console.log('Text blocks has no child element');
            return;
        }
    }


    function fillFormIn(obj, listNumber) {
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
            return d.querySelector('.listOfItems-3').setAttribute('disabled', true);
        }

        if (ev.target.selectedIndex === 0) {
            return d.querySelector('.listOfItems-3').removeAttribute('disabled');
        }
    });

    $inputSignoOrCasa('.listOfItems-3').addEventListener('change', (ev) => {
        if (ev.target.selectedIndex !== 0) {
            return d.querySelector('.listOfItems-2').setAttribute('disabled', true);
        }

        if (ev.target.selectedIndex === 0) {
            return d.querySelector('.listOfItems-2').removeAttribute('disabled');
        }
    });

    console.log('RESET BTN', $resetInput('input[type=\"reset\"]'));
    $resetInput('input[type=\"reset\"]').addEventListener('click', (ev) => {
        d.querySelector('.listOfItems-2').removeAttribute('disabled');
        d.querySelector('.listOfItems-3').removeAttribute('disabled');
        return;
    });
};