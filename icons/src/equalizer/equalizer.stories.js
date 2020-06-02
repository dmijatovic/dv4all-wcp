import { html } from 'lit-html'
import '../../lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

export default{
  title:'Icons/dv4icon-equalizer',
  decorators: [withA11y],
  component:'dv4-icon-equalizer',
  parameters:{
    componentSubtitle:'SVG icon as web component',
    notes: markdown
  }
}

/**
 * This is default setup for Backward component
 */
export const basic = () => html`
  <dv4-icon-equalizer title="dv4-icon-equalizer"></dv4-icon-equalizer>
`

/**
 * This is purple version of SVG icon. Uses CSS fill prop to change color.
 * @param {String} title
 */
export const purple = (title='dv4-icon-equalizer') => html`
  <style>
    .purple{
      fill: purple;
    }
  </style>
  <dv4-icon-equalizer title="${title}" class="purple"></dv4-icon-equalizer>
`