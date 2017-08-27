import React from 'react';

import some from '../src/some';

const Component = () => <span />;

describe('ElementChildren', () => {
  let children;

  beforeEach(() => {
    children = [
      <div />,
      false,
      0,
      ['string', null, <span />],
      [[<Component />]],
    ];
  });

  describe('some', () => {
    it('should match some element children', () => {
      const spy = jest.fn(child => child.type === 'div');

      const result = some(children, spy);

      expect(result).toEqual(true);
    });
  });
});