/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../icons/custom-elements.json';

import '@storybook/addon-console';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

setCustomElements(customElements);

console.log("setCustomElements...", customElements)

// import customElements from '../custom-elements.json';
// setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '100%',
    // container: DocsContainer,
    // page: DocsPage,
    // inlineStories: false,
  },
});

// Load stories from 3 loacations
const reqStories = () => [
  require.context('../components/src', true, /\.stories\.(js|mdx)$/),
  require.context('../icons/src', true, /\.stories\.(js|mdx)$/),
  require.context('../loaders/src', true, /\.stories\.(js|mdx)$/)
]
configure(
  reqStories(),
  module
);

// force full reload to not reregister web components
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
