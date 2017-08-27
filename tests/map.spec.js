import React from 'react';

import map from '../src/map';

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

  describe('map', () => {
    it('should map over element children', () => {
      const spy = jest.fn(child => child);

      const result = map(children, spy);

      expect(spy.mock.calls.length).toEqual(3);
      expect(Object.keys(result).length).toEqual(5);
    });
  });
});