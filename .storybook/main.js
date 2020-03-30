module.exports = {
  // stories: [
  //   "../icons/src/**/*.stories.js"
  // ],
  addons: [
    // register in the panel
    '@storybook/addon-notes/register-panel',
    // '@storybook/addon-actions',
    '@storybook/addon-a11y/register',
    // '@storybook/addon-storysource',
    // '@storybook/addon-docs',
    // register at top
    //'@storybook/addon-notes/register-panel'
  ],
  webpackFinal: async config => {
    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      rule => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    //INCLUDE WEB COMPONENT LIBS IN
    //PRODUCTION BUILD (THESE WERE NOT AUTO INCLUDED)
    if (config.mode==='production'){
      console.info("Include @dv4all web components into build")
      config.entry.push('./components/lib/dv4wcp.js')
      config.entry.push('./icons/lib/dv4icons.js')
      config.entry.push('./loaders/lib/dv4loaders.js')
    }
    // console.log("webpackFinal..config...", JSON.stringify(config))
    // console.log("webComponentsRule...", webComponentsRule)
    return config;
  },
};
