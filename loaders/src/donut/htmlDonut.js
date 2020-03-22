//SHARED customElements
import Dv4LoaderOverlay from '../shared/overlay/index.js'
import Dv4LoaderBody from '../shared/loader-body/index.js'
//STYLES
import cssDonut from './cssDonut'
/**
 * This is import trigger for single exports
 */
const d1 = new Dv4LoaderOverlay()
const d2 = new Dv4LoaderBody()
/**
 * Donut loader html markup. It depends on Dv4LoaderOverlay
 * and Dv4LoaderBody customElements (imported).
 * @param {String} overlay true/false string value. Default is false.
 * @returns {String} html markup
 */
const htmlDonut = ({overlay='false'}) =>(`
  <style>
    ${cssDonut}
  </style>
  ${ overlay === 'true' ? '<dv4-overlay></dv4-overlay>' : '' }
  <dv4-loader-body>
    <div slot="loader-body">
      <div class="donut-loader"></div>
    </div>
    <div slot="loader-text" class="donut-text">
      <slot></slot>
    </div>
  </dv4-loader-body>
`)

export default htmlDonut