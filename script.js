window.onload = function() {
// Loglal part
//-------------------------------------------------------------------------
var d = document;
var b = d.body || d.bodyElement;
var docQuery = function(elem){
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

var submitBtn = d.querySelector('#submitBtn');
var textBlockCounter = 0;
let i = 0;



function criarEl(elType, assignmentReference, klass, id, textEl, el) {
  el = d.createElement(elType);
  el.classList.add(klass);
  el.appendChild(d.createTextNode(textEl));
  d.querySelector('.' + assignmentReference).appendChild(el);
}


function grabInputValues(element, index) {
  console.log('It came within the myArr function');
  console.log(index);
  console.log(element);
  console.log('Txt node', data.planets[index].title);
  console.log('Txt node', data.signos[index].title);
  console.log('Txt node', data.casas[index].title);

  for(key in data.planets){
    //console.log('data planet content: ', data.planets[key].title);
    if (data.planets[key].title == element) {
      console.log('The title is: ', data.planets[key].title);
      evaluatedValueToReturn.push(data.planets[key].title);
      console.log('Evaluated value to return: ', evaluatedValueToReturn);
      return evaluatedValueToReturn;
    } else {
      console.log('It\'s not data planets');
    }
  }

  for(key in data.signos){
    //console.log('data planet content: ', data.planets[key].title);
    if (data.signos[key].title == element) {
      console.log('The title is: ', data.signos[key].title);
      evaluatedValueToReturn.push(data.signos[key].title);
      console.log('Evaluated value to return: ', evaluatedValueToReturn);
      return evaluatedValueToReturn;
    } else {
      console.log('It\'s not data planets');
    }
  }

  for(key in data.casas){
    //console.log('data planet content: ', data.planets[key].title);
    if (data.casas[key].title == element) {
      console.log('The title is: ', data.casas[key].title);
      evaluatedValueToReturn.push(data.casas[key].title);
      console.log('Evaluated value to return: ', evaluatedValueToReturn);
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

function indexChecker(){
  var elemReturned = [];
  var result = 0;

  elemReturned.push(siteLists.first.link.selectedIndex);
  console.log('Selected index in Index Checker: ', elemReturned[0]);

  elemReturned.push(siteLists.second.link.selectedIndex);
  console.log('Selected index in Index Checker: ', elemReturned[1]);

  elemReturned.push(siteLists.third.link.selectedIndex);
  console.log('Selected index in Index Checker: ', elemReturned[2]);

  elemReturned.reduce(function(a, b){
     result = a === undefined ? result + b : result + a + b;

     console.log('%c A value is: ', 'font-size: 16px; color: #774400;', a);
     console.log('%c B value is: ', 'font-size: 16px; color: #774400;', b);
     console.log('%c Result value is: ', 'font-size: 16px; color: #774400;', result);
   });

  if(result <= 0) {

    result = false;
    console.log('%c Index Checker function. Value: ', 'font-size: 16px; color: #007744;', result);
    return result;

  } else {

    result = true;
    console.log('%c Index Checker function. Value: ', 'font-size: 16px; color: #007744;', result);
    return result;

  }
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

  // Used in the function bellow
  klassAssigner = 'textBlockWrapper-' + textBlockCounter;

  idAssigner = 'textBlockWrapperId-' + textBlockCounter;

  selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);

  selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);

  selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);

  // console.log(selectedItemsArray[1]);

  templateArray = selectedItemsArray;
  indexCheckerVar = indexChecker();

  // This works but I need to move it inside the followinf function in order to get a real output based on the value of template Array element. The way it is now, the textBlockContent will be printed out regardless of the content within it
  if (indexCheckerVar == true) {

    // Create a for loop to test if there's any textBlockWrapper already created and empty.If so, grab the empty guy and add the value to it.

    criarEl('DIV', 'contentSpot', klassAssigner, idAssigner, '');
    textBlockCounter++;
    console.log('The content of Content spot is: ', d.querySelector('.contentSpot'));

  } else {
    console.log(templateArray + ' is equals zero!');
    checkEmptyTextBlock('.contentSpot');
  }

  console.log('template array: ' + templateArray);


  elemPlaceholder = setUpTextForTemplate(templateArray);
  console.log('THIS IS THE ELEMENT PLACE HOLDER: ' + elemPlaceholder);

  for (var z = 0; z < templateArray.length; z++) {
    if (siteLists.first.link.selectedIndex === 0 || siteLists.second.link.selectedIndex === 0 || siteLists.third.link.selectedIndex === 0) {
      console.log('Element placeholder is Zero');
      return;
    } else {
      if(siteLists.third.link.selectedIndex) {
        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', elemPlaceholder[z]);
      } else {
        criarEl('p', klassAssigner, 'arrayKlass', 'arrayId', templateArray[z]);
      }
    }
  }
  console.log('text block has: ', textBlockWrapper);
}


function grabEmptyBlock(elem, idx){
  if(!elem.length) {
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

  var textBlocks = document.getElementsByClassName(elem);
  console.log('TextBlocks: ', textBlocks);
  console.log('TextBlocks\' length: ', textBlocks.length);

  if(textBlocks.children) {
    for(let i=0; i<textBlocks.children.length; i++){
      console.log('Text blocks has children elements', textBlocks.children[i]);
      !textBlocks.children[i].length ? textBlocks.children[i].remove() : console.log('Didn\'t remove the child element');
    }
  } else {
    console.log('Text blocks has no child element');
  }
}


function fillFormIn(obj, listNumber) {
  for (key in obj) {
    criarEl('option', 'listOfItems-' + listNumber, 'optionClass', 'optionId', obj[key].title);
  }
}


  fillFormIn(data.planets, 1);
  fillFormIn(data.signos, 2);
  fillFormIn(data.casas, 3);
  submitBtn.addEventListener('click', addElementsToTemplate);
};