'use strict';

const exampleModule = {
  view: {
    elementID: 'exampleElement'
  },

  setupView() {
    const element = buildElement();

    document.body.appendChild(element);
    this.view.element = element;
  }
};

export default exampleModule;

function buildElement() {
  const element = document.createElement('div');
  element.id = exampleModule.view.elementID;
  
  return element;
}
