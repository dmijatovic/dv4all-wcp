import { html } from 'lit-html'
import '../../lib/dv4loaders'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Loaders/dv4-loader-line-scale',
  decorators: [withA11y],
  component:'dv4-loader-line-scale',
  parameters:{
    componentSubtitle:'Loaders/Spinner ',
    descriptionSlot:'This is my short description?!?',
    notes: markdown
  }
}

/**
 * This is basic SVG component layout. What can we do with this?
 */
export const basic = () => html`
  <dv4-loader-line-scale></dv4-loader-line-scale>
`

/**
 * This is purple version of SVG icon. Uses CSS fill prop to change color.
 * @param {String} title
 */
export const withMessage = () => html`
  <dv4-loader-line-scale overlay="true">
    Loading message...
  </dv4-loader-line-scale>

`