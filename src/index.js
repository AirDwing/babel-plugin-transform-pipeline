'use strict';
/** Requires */
import syntax from 'babel-plugin-syntax-pipeline';
import template from 'babel-template';


/** Visitor */
export default function ({ types: t }) {
  return {
    inherits: syntax,
    visitor: {
      BinaryExpression(path, state) {
        if (!path.isBinaryExpression({ operator: '|>' })) {
          return;
        }

        path.replaceWith(
          template('(FUNCTION(ARGUMENTS))')({
            FUNCTION: path.node.right,
            ARGUMENTS: path.node.left
          })
        );
      }
    }
  };
}
