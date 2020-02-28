export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4fs.utils.cjs.js',
    format: 'cjs'
  },{
    file: 'lib/dv4fs.utils.esm.js',
    format: 'esm',
    globals: 'dv4wc-utils'
  },{
    name: 'dv4.fs.utils',
    file: 'lib/dv4fs.utils.umd.js',
    format: 'umd',
    globals: 'dv4fs-utils'
  }],
};