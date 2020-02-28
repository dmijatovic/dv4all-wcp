// import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4loaders.esm.js',
    format: 'esm'
  },{
    name: 'Dv4Loaders',
    file: 'lib/dv4loaders.umd.js',
    format: 'umd'
  }],
}