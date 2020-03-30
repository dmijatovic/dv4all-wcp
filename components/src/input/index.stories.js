import { html } from 'lit-html'

import {Dv4TextInput} from '../index'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Input/dv4-text-input',
  decorators: [withA11y],
  component:'dv4-text-input',
  parameters:{
    componentSubtitle:'Custom text input component',
    descriptionSlot:'This is my short description?!?',
    notes: markdown
  }
}

/**
 * This is basic SVG component layout. What can we do with this?
 */
export const basic = () => html`
  <dv4-text-input
    name="var-name"
    label="Your name"
    message="Type your first and last name"
  >
  </dv4-text-input>
`


