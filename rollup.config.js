const { babel, } = require('@rollup/plugin-babel');
const { terser, } = require('rollup-plugin-terser');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/bundles/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.umd.js',
      format: 'umd',
      name: 'hooks',
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.umd.min.js',
      format: 'umd',
      name: 'hooks',
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      include: '**/src/**',
      exclude: './node_modules/**',
    }),
  ],
};

export default config;
