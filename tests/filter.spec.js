import React from 'react';

import filter from '../src/filter';

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

  describe('filter', () => {
    it('should filter element children', () => {
      const spy = jest.fn(child => child.type === 'span');

      const result = filter(children, spy);

      expect(result.length).toEqual(1);
      expect(result[0].type).toEqual('span');
    });
  });
});