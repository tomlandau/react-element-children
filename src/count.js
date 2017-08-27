import React from 'react';

/**
 * Counts the number of "valid components" in the Children container.
 *
 * @name count
 * @param {?*} children Children tree container.
 * @returns {number}
 * @bit
 */
export default function count(children) {
  let result = 0;

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}