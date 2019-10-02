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
    this._textBlock = this.contentSpot;
    this._self = this;
    let $domTextBlock = '';
    const grabValueFromDom = () => {
      $domTextBlock = document.querySelector(_self._textBlock);
      return $domTextBlock;
    };
    
    return $domTextBlock;
  }
  
  show(_selector) {
    document.querySelector(_selector).innerHTML = 'Working!';
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
  
myObject = new lineBreaker('.contentSpot');
let grabbed = myObject.grabValues;
myObject.treatValue;

console.log(myObject.contentSpot);
console.log(myObject.grabValue().grabValueFromDom);
//console.log(myObject.show('body'));