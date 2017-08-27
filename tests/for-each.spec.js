import React from 'react';

import forEach from '../src/for-each';

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

  describe('forEach', () => {
    it('should skip non element children', () => {
      const spy = jest.fn();

      forEach(children, spy);

      expect(spy.mock.calls.length).toEqual(3);
    });

    it('should call with child and index', () => {
      const spy = jest.fn();

      forEach(children, spy);

      expect(spy.mock.calls[0][0]).toEqual(children[0]);
      expect(spy.mock.calls[0][1]).toEqual(0);
    });
  });
});