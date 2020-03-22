//SHARED customElements
import Dv4LoaderOverlay from '../shared/overlay/index.js'
import Dv4LoaderBody from '../shared/loader-body/index.js'
//STYLES
import cssClimbingDot from './cssClimbingDot'
/**
 * This is import trigger for single exports
 */
const d1 = new Dv4LoaderOverlay()
const d2 = new Dv4LoaderBody()
/**
 * Climbing dot loader html markup including basic customElements.
 * @param {String} overlay true/false string value. Default is false.
 * @returns {String} html markup
 */
const htmlClimbingDot = ({overlay='false'}) => (`
  <style>
  ${cssClimbingDot}
  </style>
  ${overlay === 'true' ? '<dv4-overlay></dv4-overlay>' : ''}
  <dv4-loader-body>
    <div slot="loader-body" class="la-ball-climbing-dot">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div slot="loader-text">
      <slot></slot>
    </div>
  </dv4-loader-body>
`)

export default htmlClimbingDot