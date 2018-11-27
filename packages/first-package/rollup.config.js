import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { external, babelrc } from '../../rollup-utils';

export default {
  input: 'src/index.js',
  output: [
    { file: "dist/first-package.umd.js", format: 'umd', name: 'first-package', sourcemap: true },
  ],
  external: external(__dirname),
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
