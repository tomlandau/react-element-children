import React from 'react';

/**
 * Iterates over a React component's valid children nodes - returns whether at least one of the children meets the criteria.
 * 
 * Iterates over children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided filter func(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @name some
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {bool}
 * @bit
 */
export default function some(children, func, context) {
  let index = 0;
  let result = false;

  React.Children.forEach(children, child => {
    if (result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}