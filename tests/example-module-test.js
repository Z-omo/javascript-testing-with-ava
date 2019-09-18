import test from "ava";
import module from "../src/example-module.js";

test('Module imported is an object', t => {
  t.is(typeof module, 'object');
});

test('Module has a view property as an object', t => {
  t.is(typeof module.view, 'object');
});

test('Module has inserted an HTML element into the body element.', t => {
  module.setupView();
  
  const element = document.querySelector('#' + module.view.elementID);
  t.is(element.nodeName, 'DIV');
  t.is(module.view.element, element);
});
