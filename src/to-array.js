import React from 'react';

/**
 * Returns a React component's valid children as an array.
 * 
 * Iterates over children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided filter func(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @name toArray
 * @param {?*} children Children tree container.
 * @returns {Array}
 * @bit
 */
export default function toArray(children) {
  const result = [];

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}