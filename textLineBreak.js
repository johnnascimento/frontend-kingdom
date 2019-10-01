console.log('Text line break is running sound!');

// First, create a function that uses indexOf() method to figure out at which point in the text are the breaking points

// Using the returned value from the previous function, define another function that will remove all the -break(s) from the text

// After finishing off with the above function, create a last one to handle the breaking points and apply the feature, based on the first function's values

// All this project must be done using OOP concept

class lineBreaker {
  constructor(blockOfText) {
    this.breakRegExp = /\-break/gmi;
    this.indexes = [];
    this.contentSpot = blockOfText;
  }
  
  grabValues() {
    this.contentClass = this.contentSpot;
    this.textBlock = document.querySelector(contentClass);
    return textBlock;
  }
  
  treatValue() {
    let grabbedValue = grabValues.textBlock;
    grabbedValue.forEach(function(elem, idx) {
      this.indexes.push(elem);
    }.bind(this));
    return this.indexes;
  }
}
  
myObject = new lineBreaker('.contentSpot');
myObject.grabValues;
myObject.treatValue;

console.log(myObject.breakRegExp);
console.log(myObject.textBlock);
console.log(myObject.indexes);