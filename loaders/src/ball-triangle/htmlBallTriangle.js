//SHARED customElements
import Dv4LoaderOverlay from '../shared/overlay/index.js'
import Dv4LoaderBody from '../shared/loader-body/index.js'
//STYLES
import cssBallTriangle from './cssBallTriangle'
//import trigger (for webpack)
const d1 = new Dv4LoaderOverlay()
const d2 = new Dv4LoaderBody()
/**
 * BallTriangle loader html markup incl. basic customElements
 * @param {String} overlay true/false string. Default is false.
 * @returns {String} html markup
 */
const htmlBallTriangle = ({overlay='false'}) => (`
  <style>
    ${cssBallTriangle}
  </style>
  ${ overlay === 'true' ? '<dv4-overlay></dv4-overlay>' : '' }
  <dv4-loader-body>
    <div slot="loader-body" class="ball-triangle-path">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div slot="loader-text">
      <slot></slot>
    </div>
  </dv4-loader-body>
`)

export default htmlBallTriangle