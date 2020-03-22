/**
 * Import shared customElements
 * we use it as backpanel
 */

import '../shared/loader-body/index'
import '../shared/overlay/index'

import cssBallClimbingDot from './cssClimbingDot'

const htmlBallClimbingDot = props => (`
  <style>
  ${cssBallClimbingDot}
  </style>
  ${props['overlay'] === 'true' ? '<dv4-overlay></dv4-overlay>' : ''}
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

export default htmlBallClimbingDot