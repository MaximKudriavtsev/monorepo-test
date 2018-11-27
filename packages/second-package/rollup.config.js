import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { external, babelrc, globals, stubProcess } from '../../rollup-utils';

export default {
  input: 'src/index.js',
  output: [
    { file: "dist/second-package.umd.js", format: 'umd', name: 'second-package', sourcemap: true, intro: stubProcess },
    { file: "dist/second-package.es.js", format: 'es', sourcemap: true },
  ],
  external: external(__dirname),
  plugins: [
    resolve({
      main: false,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ],
};
