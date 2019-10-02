console.log('Text line break is running sound!');

// First, create a function that uses indexOf() method to figure out at which point in the text are the breaking points

// Using the returned value from the previous function, define another function that will remove all the -break(s) from the text

// After finishing off with the above function, create a last one to handle the breaking points and apply the feature, based on the first function's values

// All this project must be done using OOP concept

class lineBreaker {
  constructor(textBlock){
    this.breakRegExp = /\-break/gmi;
    this.indexes = [];
    this.contentSpot = textBlock;
  }
  
  grabValue() {
    let _textBlock = this.contentSpot;
    let _self = this;
    let $domTextBlock = '';
    const grabValueFromDom = () => {
      $domTextBlock = document.querySelector(_textBlock);
      console.log('_textBlock within grabValue nested function', _textBlock);
      return $domTextBlock;
    };
    
    return grabValueFromDom();
  }
  
  show(_selector) {
    let _domTextBlock = this.grabValue();
    console.log('domTextBlock', _domTextBlock);
    
    setTimeout(function() {
      if(_selector === null || _selector === undefined) {
        document.querySelector('.contentSpotWrapper').appendChild(_domTextBlock);
      } else {
        document.querySelector(_selector).appendChild(_domTextBlock);
      }
    }, 2000);
  }
  
  performTreatment() {
    this.textBlockChildren = $domTextBlock.children;
    let treatedTestArray = [];
    
    this.textBlockChildren.forEach(function(elem, idx) {
      treatedTestArray.push(elem);
      
      return treatedTestArray;
    }.bind(this));
    
    return treatedTestArray;
  }
}
  
myObject = new lineBreaker('#submitBtn');
let grabbed = myObject.grabValues;
myObject.treatValue;

console.log(myObject.contentSpot);
console.log(myObject.grabValue());
console.log(myObject.show('.contentSpot'));