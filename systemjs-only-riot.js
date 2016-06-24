/*
  Systemjs Only plugin
*/
'use strict';

import compiler from 'riot-compiler';

export function translate(load) {
  let precompiled = compiler.compile(load.source);
  let output;

  output = `import riot from 'riot';\n${precompiled}`;

  load.source = output;
  return output;
}
