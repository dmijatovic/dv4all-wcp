// import babel from 'rollup-plugin-babel'
// import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',  
  output: [{
    file: 'lib/dv4wcp.esm.js',
    format: 'esm'
  },{
    name: 'Dv4WebComponent',
    file: 'lib/dv4wcp.umd.js',
    format: 'umd'
  }]
}