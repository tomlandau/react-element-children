import React from 'react';

/**
 * Iterates through a React element's valid children and returns the first child that meets the criteria.
 * 
 * Iterates through children that are typically specified as `props.children`,
 * but only interates over children that are "valid components".
 *
 * The find function provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @name find
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {undefined|object} The child that meets the critera.
 * @bit
 */
export default function find(children, func, context) {
  let index = 0;
  let result = undefined;

  React.Children.forEach(children, child => {
    if (result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}