import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { banner, external, babelrc, globals, stubProcess } from '../../rollup-utils';

export default {
  input: 'src/index.js',
  output: [
    { file: "dist/first-package.umd.js", format: 'umd', name: 'first-package', sourcemap: true, globals: globals(), intro: stubProcess },
    { file: "dist/first-package.es.js", format: 'es', sourcemap: true },
  ],
  external: external(__dirname), // без него все падало на этапе билдежки
  plugins: [
    resolve({
      main: false,
      extensions: ['.js', '.jsx'],
    }),
    babel(Object.assign({
      babelrc: false,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }, babelrc(__dirname))),
  ],
};
