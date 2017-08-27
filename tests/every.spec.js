import React from 'react';

import every from '../src/every';

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

  describe('every', () => {
    it('should match all element children', () => {
      const spy = jest.fn(child => child.type === 'div');

      expect(every(children, spy))
        .toEqual(false);

      expect(every(['foo', <div />, <div />], spy))
        .toEqual(true);
    });
  });
});