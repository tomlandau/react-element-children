import React from 'react';

import count from '../src/count';

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

  describe('count', () => {
    it('should count element children', () => {
      const spy = jest.fn();

      expect(
        count(children, spy)
      ).toEqual(3);
    });
  });
});