import React from 'react';

/**
 * Filters a React component's children nodes - returns only the valid children that meet the filter's criteria.
 * 
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided filter func(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @name filter
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 * @bit
 */
export default function filter(children, func, context) {
  let index = 0;
  let result = [];

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}