export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4wcp.utils.esm.js',
    format: 'esm',
  },{
    name: 'dv4wcp-utils',
    globals: 'dv4wcp-utils',
    file: 'lib/dv4wcp.utils.umd.js',
    format: 'umd'
  }],
};