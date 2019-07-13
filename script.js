
// Loglal part
//-------------------------------------------------------------------------
var d = document;
var b = d.body || d.bodyElement;
var w = window;
var key = '';
var selectedItemsArray = [];

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
}

var submitBtn = d.querySelector('#submitBtn');
var textBlockCounter = 0;
let i = 0;



function criarEl(elType, assignmentReference, klass, id, textEl, el) {
  el = d.createElement(elType);
  el.classList.add(klass);
  el.appendChild(d.createTextNode(textEl));
  d.querySelector('.' + assignmentReference).appendChild(el);
}



function setUpTextForTemplate(indexSelectedArray) {
  console.log('setUpTextForTemplate was called');
  indexSelectedArray = indexSelectedArray || [];
  var evaluatedValueToReturn = [];
  var indexSelectedNum = 0;
  
  if (indexSelectedArray.length) {
    console.log('If is true');
    
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
    
    
    indexSelectedArray.forEach(grabInputValues);
    return evaluatedValueToReturn;
    
  } else {
    console.log('Index selected array is: ' + indexSelectedArray + '. That\'s why the if statement didn\'t work');
  }
}


function addElementsToTemplate() {
  var elemPlaceholder = [];
  
  // Use the criarEl method to create this one
  // ------------------------------------------------------
  var textBlockWrapper = "";
  var klassAssigner = '';
  
  // Used in the function bellow
  klassAssigner = 'textBlockWrapper-' + textBlockCounter;
  
  console.log('addElementsToTemplate is running sound');
  
  var templateArray = [];
  
  var selectedItemsArray = [];
  
  selectedItemsArray.push(siteLists.first.options[siteLists.first.link.selectedIndex].text);
  
  selectedItemsArray.push(siteLists.second.options[siteLists.second.link.selectedIndex].text);
  
  selectedItemsArray.push(siteLists.third.options[siteLists.third.link.selectedIndex].text);
  
  // console.log(selectedItemsArray[1]);
  
  templateArray = selectedItemsArray;
  
  // This works but I need to move it inside the followinf function in order to get a real output based on the value of template Array element. The way it is now, the textBlockContent will be printed out regardless of the content within it
  if (templateArray.length) {
    
    // Create a for loop to test if there's any textBlockWrapper already created and empty.If so, grab the empty guy and add the value to it.
    
    criarEl('DIV', 'imgPlaceHolder', 'textBlockWrapper-' + textBlockCounter, 'textBlockId-' + textBlockCounter, '');
    textBlockCounter++;
    console.log('The content of img place holder is: ', d.querySelector('.imgPlaceHolder'));
    
  } else {
    console.log(templateArray + ' is equals zero!');
  }
  
  console.log('template array: ' + templateArray);
  
  
  elemPlaceholder = setUpTextForTemplate(templateArray);
  console.log('THIS IS THE ELEMENT PLACE HOLDER: ', elemPlaceholder);
  
  for (var z = 0; z < templateArray.length; z++) {
    if (siteLists.first.link.selectedIndex == 0 || siteLists.second.link.selectedIndex == 0 || siteLists.third.link.selectedIndex == 0) {
      console.log('Element placeholder is Zero');
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


function fillFormIn(obj, listNumber) {
  for (key in obj) {
    criarEl('option', 'listOfItems-' + listNumber, 'optionClass', 'optionId', obj[key].title);
  }
}



window.onload = function() {
  // fillFormIn();
  fillFormIn(data.planets, 1);
  fillFormIn(data.signos, 2);
  fillFormIn(data.casas, 3);
  submitBtn.addEventListener('click', addElementsToTemplate);
};