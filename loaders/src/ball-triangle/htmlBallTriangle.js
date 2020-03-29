/**
 * HTML body of loader.
 * REQUIREMENTS!
 * Template loader element has 2 slots:
 * 1. slot="loader-body"
 * 2. slot="loader-text" *
 */
const bodyHtml=`
<div slot="loader-body" class="ball-triangle-path">
  <div></div>
  <div></div>
  <div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`
export default bodyHtml