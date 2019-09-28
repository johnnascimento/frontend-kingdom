console.log('MutationObserver is working sound!!!');


// Select the node that will be observed for mutations
const targetNode = document.querySelector('.contentSpot');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  for(let mutation of mutationsList) {
    console.trace(mutation);
    
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
      console.log(mutation.type);
    }
    else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
      
    } else {
      console.log('Anything happened');
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();