import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4fs.utils.js',
    format: 'esm',
  },{
    name: 'Dv4FSU',
    file: 'lib/dv4fs.utils.cjs.js',
    format: 'iife'
  }
  // {
  //   name: 'dv4.fs.utils',
  //   file: 'lib/dv4fs.utils.umd.js',
  //   format: 'umd',
  //   globals: 'dv4fs-utils'
  // }
  ],
  plugins: [resolve(), commonjs()]
}