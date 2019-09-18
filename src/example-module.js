'use strict';

const exampleModule = {
  view: {
    elementID: 'exampleElement'
  },

  setupView() {
    const element = setupView();

    document.body.appendChild(element);
    this.view.element = element;
  }
};

export default exampleModule;

function setupView() {
  const element = document.createElement('div');
  element.id = exampleModule.view.elementID;
  
  return element;
}
