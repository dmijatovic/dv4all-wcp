import { html } from 'lit-html'

import {Dv4IconCamera} from '@dv4all/icons'
import {Dv4CustomButton} from '../index'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Buttons/dv4-custom-button',
  decorators: [withA11y],
  component:'dv4-custom-button',
  parameters:{
    componentSubtitle:'Custom button component',
    descriptionSlot:'This is my short description?!?',
    notes: markdown
  }
}

/**
 * This is basic SVG component layout. What can we do with this?
 */
export const basic = () => html`
  <dv4-custom-button>Label</dv4-custom-button>
`

export const primary = () => html`
  <dv4-custom-button primary>Primary button</dv4-custom-button>
`

export const danger = () => html`
  <dv4-custom-button danger>Danger button</dv4-custom-button>
`

export const disabled = () => html`
  <dv4-custom-button primary disabled>Primary Disabled button</dv4-custom-button>
`

export const withIcons = () => html`
  <dv4-custom-button>
    <dv4-icon-camera></dv4-icon-camera>
    Icon Default Button
  </dv4-custom-button>
`


