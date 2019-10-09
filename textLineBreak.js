//console.log('Text line break is running sound!');

// First, create a function that uses indexOf() method to figure out at which point in the text are the breaking points

// Using the returned value from the previous function, define another function that will remove all the -break(s) from the text

// After finishing off with the above function, create a last one to handle the breaking points and apply the feature, based on the first function's values

// All this project must be done using OOP concept

class lineBreaker {
  constructor(textBlock){
    this.breakRegExp = /(-break)/gmi;
    this.indexes = [];
    this.contentSpot = textBlock;
  }
  
  grabValue() {
    let _textBlock = this.contentSpot;
    console.log('_textBlock within grabValue() ', _textBlock);
    
    let _self = this;
    let $domTextBlock = '';
    
    const grabValueFromDom = () => {
      $domTextBlock = document.querySelector(_textBlock);
      console.log('_textBlock within grabValue nested function', _textBlock);
      
      if($domTextBlock.children.length) {
        $domTextBlock = $domTextBlock.lastChild.textContent;
        console.log('$domTextBlock IF ', $domTextBlock.classList);
      } else {
        $domTextBlock = $domTextBlock;
        console.log('$domTextBlock else ', $domTextBlock.classList);
      }
      
      return $domTextBlock;
    };
    
    return grabValueFromDom();
  }
  
  performTreatment(onlyTextFromBlock) {
    this.textBlockChildren = onlyTextFromBlock;
    
    this.treatedTestArray = [];
    
    console.log('textblockchildren ************************** ', this.textBlockChildren.substring(0,15));
    
    if(this.textBlockChildren.length) {
      console.log('****************************** text block children: ', this.textBlockChildren.substring(0,50));
      
     this.breakFinder(this.textBlockChildren);
      
    } else {
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ textBlockChildren.length is less than 0: ', this.textBlockChildren.length);
    }
    
    return this.treatedTestArray;
  }
  
  
  breakFinder(textToSearchInto) {
    let startingPoint = 0;
    let indexOf;
    let loopingTimes = textToSearchInto.match(this.breakRegExp).slice(',');
    
 // console.log('**********&&&&&&************');
  console.log('indexOf Variable - breakFinder: ', indexOf);
//  console.log('indexOf Variable - breakFinder: ', loopingTimes);
  //console.log('**********&&&&&&************');
  
  // Looping test #1
  loopingTimes.forEach(function(elem, idx) {
    console.log('Looping times variable ', elem, '  ', idx);
    
    indexOf = textToSearchInto.substring(startingPoint).search(this.breakRegExp);
    
    console.log('StartingPoint ', startingPoint);
    console.log('IndexOf var:', indexOf);
    
    this.treatedTestArray.push(indexOf);
    console.log('This.treatedTestArray pushing action ', this.treatedTestArray);
    
   startingPoint = this.treatedTestArray[idx] + 7;
   
   console.log('Break referenceas text: ', textToSearchInto.substring(this.treatedTestArray[idx], this.treatedTestArray[idx] + 7));
   
    console.log('IndexOf var:', indexOf);
    console.log('StartingPoint ', startingPoint);
  }.bind(this));
   
   /* if(indexOf >= 0) {
      return (indexOf + (startingPoint || 0));
    } else {
      return indexOf;
    }*/
  }
  
  
  domObserver(_selector) {
    console.log('MutationObserver is working sound!!!');
    let _self = this;
    let onlyTextFromBlock;
    
    _selector = this.contentSpot;
    
    this.contentToAnalyse = this.grabValue();
    console.log('Inside MO, looking for grabValueFromDom method\'s return ', this.contentToAnalyse.classList[0]);
    
    // Select the node that will be observed for mutations
    this.targetNode = document.querySelector(_selector);
    
    // Options for the observer (which mutations to observe)
    this.config = { attributes: true, childList: true, subtree: true };
    
    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        console.trace(mutation);
        
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
          console.log(mutation);
          console.log('Content to Analyse only textext ', _self.contentToAnalyse.textContent.substring(0,20));
          onlyTextFromBlock = _self.contentToAnalyse.textContent;
          
          _self.performTreatment(onlyTextFromBlock);
        }
        else if (mutation.type === 'attributes') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
          
        } else {
          console.log('Anything happened');
        }
      }
    };
    
    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);
    
    // Start observing the target node for configured mutations
    this.observer.observe(this.targetNode, this.config);
    
    // Later, you can stop observing
    //observer.disconnect();
  }
}
  
myObject = new lineBreaker('.contentSpot');

console.log(myObject.contentSpot);
console.log(myObject.domObserver());
//console.log(myObject.grabValue());
//console.log(myObject.show('.contentSpot'));