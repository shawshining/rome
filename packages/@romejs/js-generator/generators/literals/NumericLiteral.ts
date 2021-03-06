/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {NumericLiteral, numericLiteral, AnyNode} from '@romejs/js-ast';
import {humanizeNumber} from '@romejs/string-utils';

export default function NumericLiteral(generator: Generator, node: AnyNode) {
  node = numericLiteral.assert(node);

  if (generator.options.format === 'pretty') {
    generator.number(humanizeNumber(node.value));
  } else {
    generator.number(String(node.value));
  }
}
