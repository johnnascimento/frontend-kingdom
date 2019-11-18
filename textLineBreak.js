//console.log('Text line break is running sound!');
// First, create a function that uses indexOf() method to figure out at which point in the text are the breaking points
// Using the returned value from the previous function, define another function that will remove all the -break(s) from the text
// After finishing off with the above function, create a last one to handle the breaking points and apply the feature, based on the first function's values
// All this project must be done using OOP concept

class lineBreaker {
  constructor(textBlock){
    this.breakRegExp = /-break|-endofline/gmi;
    this.indexes = [];
    this.contentSpot = textBlock;

    // Inititate the execution of observer
    this.domObserver();
  }

  cl(textToexhibit, elem) {
    if(elem === undefined || elem === null || elem === '') {
      return function(textToexhibit) {
        return console.log('%c ' + textToexhibit, 'font-size: 16px; font-weight: bold; color: lightcoral;');
      }
    }

    return console.log('%c ' + textToexhibit, 'font-size: 16px; font-weight: bold; color: lightseagreen;', elem);
  }

  grabValue(referenceElem) {
    let _textBlock = this.contentSpot;
    console.log('_textBlock within grabValue() ', _textBlock);

    let _self = this;
    let $domTextBlock = '';
    let domTextBlockVerifier = '';

    const grabValueFromDom = () => {
      if(referenceElem === undefined || referenceElem === null) {
        $domTextBlock = document.querySelector(_textBlock);
        console.log('_textBlock within grabValue nested function', _textBlock);
      } else {
        $domTextBlock = document.querySelectorAll(referenceElem);
        console.log('_textBlock within grabValue nested function referenceElem', _textBlock);
      }

      domTextBlockVerifier = $domTextBlock.children;
      console.log('domText ', domTextBlockVerifier);

      if(domTextBlockVerifier != undefined || domTextBlockVerifier != null) {
        if($domTextBlock.children.length) {
          $domTextBlock = $domTextBlock.lastChild.textContent;
          console.log('$domTextBlock IF ', $domTextBlock.classList);
        } else {
          $domTextBlock = $domTextBlock;
          console.log('$domTextBlock else ', $domTextBlock.classList);
        }
      } else {
        this.cl()('Doesn\'t have children');
      }

      return $domTextBlock;
    };

    return grabValueFromDom();
  }

  performTreatment(onlyTextFromBlock) {
    this.textBlockChildren = onlyTextFromBlock;
    this.textTreatedCompletely = '';

    this.treatedTestArray = [];
    console.log('textblockchildren ************************** ', this.textBlockChildren.substring(0,15));

    if(this.textBlockChildren.length) {
      console.log('****************************** text block children: ', this.textBlockChildren.substring(0,50));

      this.treatedTestArray = this.indicesFinder(this.textBlockChildren);
      console.log('@+@+@+@+@+@+@+@+@+@+@+@+@+@ Value returned: ', this.treatedTestArray, '@+@+@+@+@+@+@+@+@+@+@+@');

      this.textTreatedCompletely = this.treatTextCompletely(this.treatedTestArray, this.textBlockChildren);
      this.cl('this.textTreatedCompletely', this.textTreatedCompletely);
    } else {
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ textBlockChildren.length is less than 0: ', this.textBlockChildren.length);
    }

    return this.treatedTestArray;
  }


  treatTextCompletely(indices, textTotreat) {
    this.cl()('treatTextCompletely method was just invoked');
    this.indexMarker = 0;
    this.textToRender = {
      tagOpenedUsed: '<div class="line-treated">',
      tagClosedUsed: '</div>',
      lines: []
    }

    for(let i = 0; i < indices.length; i++) {
      this.cl('indexMarker\'s value ', this.indexMarker);
      this.cl('i value ', i);
      this.cl('indices\'s length ', indices.length);
      this.cl('indices\'s value ', indices[i]);
      this.cl('Text to be treated based on index ', textTotreat.substring(this.indexMarker, (indices[i])));

      this.textToRender.lines.push(this.textToRender.tagOpenedUsed.trim() + textTotreat.substring(this.indexMarker, (indices[i])).trim() + this.textToRender.tagClosedUsed.trim());
      this.cl('textToRender.line ' + i, this.textToRender.lines[i]);
      this.cl('textToRender.line ', this.textToRender.lines);

      this.indexMarker = indices[i]+6;
      this.cl('indexMarker\'s value AFTER assignemnt', this.indexMarker);
    }

    return this.render(this.textToRender);
  }


  /// Still needs changes
  render(elemToRender) {
    this.cl()('render was invoked');
    this.contentThatWilChange = this.grabValue('.arrayKlass');

    this.cl('contentThatWilChange BEFORE ', this.contentThatWilChange);

    this.contentThatWilChange = this.contentThatWilChange[1];
    this.elemToRenderLSize = elemToRender.lines.length;
    this.contentThatWilChange.innerHTML = '';

    this.cl('contentThatWilChange BEFORE ', this.contentThatWilChange);
    this.cl('elemToRender ', elemToRender);
    this.cl('this.elemToRenderLSize ', this.elemToRenderLSize);

    for(let i = 0; i < this.elemToRenderLSize; i++){
      this.cl('i value ', i);
      this.cl('this.contentThatWilChange.innerHTML ', this.contentThatWilChange.innerHTML);
      this.cl('this.contentThatWilChange.innerHTML ', this.contentThatWilChange.innerHTML);

      this.contentThatWilChange.innerHTML = this.contentThatWilChange.innerHTML + elemToRender.lines[i];
    }

    return this.observer.disconnect();
  }

  indicesFinder(textToSearchInto) {
    console.log(`indicesFinder was invoked`);

    let indexOf = 0;
    let loopingTimes = textToSearchInto.match(this.breakRegExp).slice(',');
    let indicesArray = [];
    let textArray = [];
    let _self = this;

    console.log('textToSearchInto ', textToSearchInto.substring(0, 20));

    // Looping test #1
    for(let i = 0; i < textToSearchInto.length; i++) {
    _self.cl('Text to search into\'s length ', textToSearchInto.length);
        if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) == '-br' || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2] + textToSearchInto[i+3]) == '-end') {
            indicesArray.push(i);
            console.log(`indices of textToSearchInto ${indicesArray}
                current index is: ${i}`);
        } else {
            if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === undefined || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === null || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === NaN) {
                console.log(`Probably it\'s the end of the text, that\'s why it\'s returning undefined`);
            } else {
                console.log(`There was no match on this loop ${i+4}
                           ${textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]}`);
            }
        }

        console.log(`current indices are: ${indicesArray}`);
        console.log(`Text from 129 plus 6
                    ${textToSearchInto.substring(indicesArray[0], (indicesArray[0]+6))}
                    ${textToSearchInto.substring(indicesArray[1], (indicesArray[1]+6))}
                    ${textToSearchInto.substring(indicesArray[2], (indicesArray[2]+6))}
                    ${textToSearchInto.substring(indicesArray[3], (indicesArray[3]+6))}
                    ${textToSearchInto.substring(indicesArray[4], (indicesArray[4]+6))}
                    ${textToSearchInto.substring(indicesArray[5], (indicesArray[5]+6))}`);

    }
      return indicesArray;
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

          return;
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