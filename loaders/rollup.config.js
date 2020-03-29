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
  input: 'src/line-scale/index.js',
  output: [{
    file: 'lib/line-scale/index.js',
    format: 'esm'
  },{
    name: 'Dv4LineScale',
    file: 'lib/line-scale/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/packman/index.js',
  output: [{
    file: 'lib/packman/index.js',
    format: 'esm'
  },{
    name: 'Dv4Packman',
    file: 'lib/packman/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/square-jelly/index.js',
  output: [{
    file: 'lib/square-jelly/index.js',
    format: 'esm'
  },{
    name: 'Dv4SquareJelly',
    file: 'lib/square-jelly/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/square-spin/index.js',
  output: [{
    file: 'lib/square-spin/index.js',
    format: 'esm'
  },{
    name: 'Dv4SquareSpin',
    file: 'lib/square-spin/index.cjs.js',
    format: 'iife'
  }],
  plugins: [resolve(), commonjs()]
},{
  input: 'src/timer/index.js',
  output: [{
    file: 'lib/timer/index.js',
    format: 'esm'
  },{
    name: 'Dv4LoaderTimer',
    file: 'lib/timer/index.cjs.js',
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