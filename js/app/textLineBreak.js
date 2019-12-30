//console.log('Text line break is running sound!');
// First, create a function that uses indexOf() method to figure out at which point in the text are the breaking points
// Using the returned value from the previous function, define another function that will remove all the -break(s) from the text
// After finishing off with the above function, create a last one to handle the breaking points and apply the feature, based on the first function's values
// All this project must be done using OOP concept
define(['jquery'], function($) {
  console.log('Line break initialized !');

  class lineBreaker {
    constructor(textBlock){
      let _self = this;

      this.breakRegExp = /-break|-endofline|-strong|\/strong|-italic|\/italic|-under|\/   under/gmi;
      this.indexes = [];
      this.contentSpot = textBlock;
      this.buttonToAttachEvent = document.getElementById('formatText');

      this.cl('this.buttonToAttachEvent ', this.buttonToAttachEvent);

      this.buttonToAttachEvent.addEventListener('click', function(ev) {
        _self.initiateFormatting();
      });
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
          this.cl('$domTextBlock ', $domTextBlock);
        } else {
          $domTextBlock = document.querySelectorAll(referenceElem);
          this.cl()('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          this.cl()('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          this.cl('$domTextBlock ELSE ', $domTextBlock);
          this.cl()('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          this.cl()('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          console.log('_textBlock within grabValue nested function referenceElem', _textBlock);
        }

        this.cl()('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        domTextBlockVerifier = ($domTextBlock.children) ? $domTextBlock.lastChild : $domTextBlock;
        console.log('domText ', domTextBlockVerifier);

        if(domTextBlockVerifier != undefined || domTextBlockVerifier != null || domTextBlockVerifier.length) {
          this.cl('$domTextBlock.children ', $domTextBlock);

          if($domTextBlock.children) {
            console.log('**********************************************$domTextBlock IF ', $domTextBlock.classList);
            this.cl('$domTextBlock LAST CHILD IF BEFORE', $domTextBlock.lastChild);
            $domTextBlock = $domTextBlock.lastChild.textContent;
            console.log('$domTextBlock IF AFTER', $domTextBlock);
          } else {
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@$domTextBlock else ', $domTextBlock.classList);
            $domTextBlock = $domTextBlock;
            console.log('$domTextBlock else AFTER', $domTextBlock);
          }
        } else {
          this.cl()('Doesn\'t have children');
        }

        return $domTextBlock;
      };

      return grabValueFromDom();
    }

    performTreatment(onlyTextFromBlock) {
      let _self = this;
      this.textBlockChildren = onlyTextFromBlock;
      this.textTreatedCompletely = '';

      this.treatedTestArray = [];
      console.log('textblockchildren ************************** ', this.textBlockChildren.substring(0,15));

      if(this.textBlockChildren.length) {
        console.log('****************************** text block children: ', this.textBlockChildren.substring(0,50));

        this.treatedTestArray = this.indicesFinder(this.textBlockChildren);
        _self.cl('@+@+@+@+@+@+@+@+@+@+@+@+@+@ Value returned: ', this.treatedTestArray);

        this.textTreatedCompletely = this.treatTextCompletely(this.treatedTestArray, this.textBlockChildren);
        this.cl('this.textTreatedCompletely', this.textTreatedCompletely);
      } else {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ textBlockChildren.length is less than 0: ', this.textBlockChildren.length);
      }

      return this.treatedTestArray;
    }


    treatTextCompletely(indicesAsObjs, textTotreat) {
      this.cl()('treatTextCompletely method was just invoked');
      this.cl('indicesAsObjs @@@@@@@@@@@@@&&&&&&&&XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', indicesAsObjs);
      this.cl('indicesAsObjs @@@@@@@@@@@@@&&&&&&&&XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', indicesAsObjs.breaks);
      this.cl('indicesAsObjs @@@@@@@@@@@@@&&&&&&&&XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', indicesAsObjs.breaks[0].index);
      this.indexMarker = 0;
      this.textToRender = {
        tagOpenedUsed: '<div class="line-treated inline">',
        tagOpenedBreak: '<div class="line-treated break">',
        tagOpenedStrong: '<div class="line-treated inline strong">',
        tagOpenedItalic: '<div class="line-treated inline italic">',
        tagOpenedUnderline: '<div class="line-treated inline underline">',
        tagClosedUsed: '</div>',
        lines: [],
      }

      let key;
      let _self = this;
      let malleableJ = '';

      for(key in indicesAsObjs) {
        this.cl('current key in for loop', key);

        for(let j = 0; j < indicesAsObjs.breaks.length; j++) {
            this.cl('indicesAsObjs breaks\' length ', indicesAsObjs.breaks.length);
            this.cl('indicesAsObjs breaks\' value ', indicesAsObjs.breaks[j].index);
            this.cl('indicesAsObjs breaks\' value ', indicesAsObjs.breaks[j].tag);

            malleableJ = j;
            this.cl('malleableJ ', malleableJ);
            malleableJ = (malleableJ <= 0) ? 0 : malleableJ - 1;
            this.cl('malleableJ AFTER ', malleableJ);
            this.cl('this.textToRender.lines', this.textToRender.lines);
            console.log(this.textToRender.lines);

            if(indicesAsObjs.breaks[malleableJ].tag === 'strong' && indicesAsObjs.breaks[j].tag === 'strong' ) {
              this.textToRender.lines.push(
                this.textToRender.tagOpenedStrong.trim() +
                textTotreat.substring(this.indexMarker, (indicesAsObjs.breaks[j].index)).trim() +
                this.textToRender.tagClosedUsed.trim()
              );
            } else if(indicesAsObjs.breaks[malleableJ].tag === 'italic' && indicesAsObjs.breaks[j].tag === 'italic') {
              this.textToRender.lines.push(
                this.textToRender.tagOpenedItalic.trim() +
                textTotreat.substring(this.indexMarker, (indicesAsObjs.breaks[j].index)).trim() +
                this.textToRender.tagClosedUsed.trim()
              );
            } else if(indicesAsObjs.breaks[malleableJ].tag === 'underline' && indicesAsObjs.breaks[j].tag === 'underline') {
              this.textToRender.lines.push(
                this.textToRender.tagOpenedUnderline.trim() +
                textTotreat.substring(this.indexMarker, (indicesAsObjs.breaks[j].index)).trim() +
                this.textToRender.tagClosedUsed.trim()
              );
            } else if(indicesAsObjs.breaks[j].tag === 'break') {
              this.textToRender.lines.push(
                this.textToRender.tagOpenedBreak.trim() +
                textTotreat.substring(this.indexMarker, (indicesAsObjs.breaks[j].index)).trim() +
                this.textToRender.tagClosedUsed.trim()
              );
            } else {
              this.textToRender.lines.push(
                this.textToRender.tagOpenedUsed.trim() +
                textTotreat.substring(this.indexMarker, (indicesAsObjs.breaks[j].index)).trim() +
                this.textToRender.tagClosedUsed.trim()
              );
            }

            this.cl('indexMarker\'s value AFTER assignemnt BREAKS', this.indexMarker);

            this.indexMarker = indicesAsObjs.breaks[j].index+6;
        }
      }


      return this.render(this.textToRender);
    }


    /// Still needs changes
    render(elemToRender) {
      this.cl()('render was invoked');
      // this.cl()(this.contentSpot + ' ' + 'div[class^=\"textBlockWrapper-\"]:last-child .arrayKlass');
      this.contentThatWilChange = this.grabValue(this.contentSpot + ' ' + 'div[class^=\"textBlockWrapper-\"]:last-child .arrayKlass');

      // this.cl('contentThatWilChange BEFORE ', this.contentThatWilChange);

      this.contentThatWilChange = this.contentThatWilChange[1];
      this.elemToRenderLSize = elemToRender.lines.length;
      this.contentThatWilChange.innerHTML = '';

      // this.cl('contentThatWilChange BEFORE ', this.contentThatWilChange);
      // this.cl('elemToRender ', elemToRender);
      // this.cl('this.elemToRenderLSize ', this.elemToRenderLSize);

      for(let i = 0; i < this.elemToRenderLSize; i++){
        // this.cl('i value ', i);
        // this.cl('this.contentThatWilChange.innerHTML ', this.contentThatWilChange.innerHTML);
        // this.cl('this.contentThatWilChange.innerHTML ', this.contentThatWilChange.innerHTML);

        this.contentThatWilChange.innerHTML = this.contentThatWilChange.innerHTML + elemToRender.lines[i];
      }

      return this;
    }

    indicesFinder(textToSearchInto) {
      console.log(`indicesFinder was invoked`);

      let indexOf = 0;
      let loopingTimes = textToSearchInto.match(this.breakRegExp).slice(',');
      let indicesArrayBreak = [];
      let textArray = [];
      let _self = this;

      console.log('textToSearchInto ', textToSearchInto.substring(0, 20));
      console.log('LoopingTimes ', loopingTimes);

      // Looping test #1
      for(let i = 0; i < textToSearchInto.length; i++) {
      _self.cl('Text to search into length ', textToSearchInto.length);
          if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) == '-br' || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2] + textToSearchInto[i+3]) == '-end') {
            indicesArrayBreak.push({
              index: i,
              tag: 'break'
            });
            // console.log(`indices of textToSearchInto ${indicesArrayBreak}
                // current index is: ${i}`);
          } else if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) == '-st' || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2] + textToSearchInto[i+3]) == '/str') {
            indicesArrayBreak.push({
              index: i,
              tag: 'strong'
            });
            // _self.cl('STRONG OR OTHERS: ', indicesArrayOthers);
            // _self.cl('STRONG I: ', i);
          } else if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) == '-it' || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2] + textToSearchInto[i+3]) == '/ita') {
            indicesArrayBreak.push({
              index: i,
              tag: 'italic'
            });
            // _self.cl('STRONG OR OTHERS: ', indicesArrayOthers);
            // _self.cl('STRONG I: ', i);
          } else if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) == '-un' || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2] + textToSearchInto[i+3]) == '/und') {
            indicesArrayBreak.push({
              index: i,
              tag: 'underline'
            });
            // _self.cl('STRONG OR OTHERS: ', indicesArrayOthers);
            // _self.cl('STRONG I: ', i);
          } else {
              if((textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === undefined || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === null || (textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]) === NaN) {
                  // console.log(`Probably it\'s the end of the text, that\'s why it\'s returning undefined`);
              } else {
                  // console.log(`There was no match on this loop ${i+4}
                  // ${textToSearchInto[i] + textToSearchInto[i+1] + textToSearchInto[i+2]}`);
              }
          }
      }

      // You must return an object
        return {
          breaks: indicesArrayBreak
        }
    }

    initiateFormatting() {
      console.log('initiateFormatting() was invoked ');

      let _self = this;
      let onlyTextFromBlock;
      let _selector = this.contentSpot;

      this.contentToAnalyse = this.grabValue();
      this.cl('this.contentToAnalyse ', this.contentToAnalyse);

      onlyTextFromBlock = (_self.contentToAnalyse.textContent === undefined || _self.contentToAnalyse.textContent === null) ? _self.contentToAnalyse : _self.contentToAnalyse.textContent.trim();
      this.cl('onlyTextFromBlock ', onlyTextFromBlock);

      if(onlyTextFromBlock == '') {
        this.cl()('onlyTextFromBlock IF');
        return;
      } else {
        this.cl()('onlyTextFromBlock ELSE');
        _self.performTreatment(onlyTextFromBlock);
      }
    }

    // Not using anymore
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
      //this.observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      //this.observer.observe(this.targetNode, this.config);
    }
  }

  myObject = new lineBreaker('.contentSpot');
});