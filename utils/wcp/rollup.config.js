import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/dv4wcp.utils.js',
    format: 'esm',
  },{
    name: "Dv4WCPU",
    file: "lib/dv4wcp.utils.cjs.js",
    format: "iife"
  }
  // {
  //   name: 'Dv4WCPU',
  //   globals: 'dv4wcp-utils',
  //   file: 'lib/dv4wcp.utils.umd.js',
  //   format: 'umd'
  // }
  ],
  plugins: [resolve(), commonjs()]
};