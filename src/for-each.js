import React from 'react';

/**
 * Iterates through a React component's valid children and invokes `func` for each of them.
 * 
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @name forEach
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 * @bit
 */
export default function forEach(children, func, context) {
  let index = 0;

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}