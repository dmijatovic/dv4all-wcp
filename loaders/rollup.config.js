// import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'src/ball-spin/index.js',
  output: [{
    file: 'lib/ball-spin/index.js',
    format: 'esm'
  },{
    name: 'Dv4BallSpin',
    file: 'lib/ball-spin/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/ball-triangle/index.js',
  output: [{
    file: 'lib/ball-triangle/index.js',
    format: 'esm'
  },{
    name: 'Dv4BallTriangle',
    file: 'lib/ball-triangle/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/donut/index.js',
  output: [{
    file: 'lib/donut/index.js',
    format: 'esm'
  },{
    name: 'Dv4BallTriangle',
    file: 'lib/donut/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/climbing-dot/index.js',
  output: [{
    file: 'lib/climbing-dot/index.js',
    format: 'esm'
  },{
    name: 'Dv4BallTriangle',
    file: 'lib/climbing-dot/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4loaders.js',
    format: 'esm'
  },{
    name: 'Dv4Loaders',
    file: 'lib/dv4loaders.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
}]