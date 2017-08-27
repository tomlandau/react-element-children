import React from 'react';

/**
 * Iterates a React component's valid children nodes - returns whether all children meet the criteria.
 * 
 * Iterates over children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided filter func(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @name every
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {bool}
 * @bit
 */
export default function every(children, func, context) {
  let index = 0;
  let result = true;

  React.Children.forEach(children, child => {
    if (!result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}