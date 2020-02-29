// import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4icons.js',
    format: 'esm'
  },{
    name: 'Dv4Icons',
    file: 'lib/dv4icons.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
}