import { html } from 'lit-html'
import '../../lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

export default{
  title:'Icons/dv4icon-map',
  decorators: [withA11y],
  component:'dv4-icon-map',
  parameters:{
    componentSubtitle:'SVG icon as web component',
    notes: markdown
  }
}

/**
 * This is default setup for Backward component
 */
export const basic = () => html`
  <dv4-icon-map title="dv4-icon-map"></dv4-icon-map>
`

/**
 * This is purple version of SVG icon. Uses CSS fill prop to change color.
 * @param {String} title
 */
export const purple = (title='dv4-icon-map') => html`
  <style>
    .purple{
      fill: purple;
    }
  </style>
  <dv4-icon-map title="${title}" class="purple"></dv4-icon-map>
`