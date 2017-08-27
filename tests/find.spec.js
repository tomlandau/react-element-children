import React from 'react';

import find from '../src/find';

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

  describe('find', () => {
    it('should find element child', () => {
      const spy = jest.fn(child => child.type === 'div');

      const result = find(children, spy);

      expect(result.type).toEqual('div');
    });
  });
});