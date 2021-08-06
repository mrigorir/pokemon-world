/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import template from './templateHTML.js';
import numberItems from '../src/modules/numberItems.js';
import commentItems from '../src/modules/commentCounter.js';
import commentsTemplate from './commentsTemplate.js';
describe('Test amount of items (cards) inside the main container', () => {
  document.body.innerHTML = template;
  const itemsLength = numberItems();
  test('itemsLength should return 6 elements', () => {
    expect(itemsLength).toBe(6);
  });
});
describe('Test amount of comments from the comment board', () => {
  document.body.innerHTML = commentsTemplate;
  const commentsLength = commentItems();
  test('commentsLength should return 4 elements', () => {
    expect(commentsLength).toBe(4);
  });
});
