import React from 'react';

/**
 * Maps only the valid children of a React component.
 * 
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @name map
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 * @bit
 */
export default function map(children, func, context) {
  let index = 0;

  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}