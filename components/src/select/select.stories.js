import { html } from 'lit-html'

import {Dv4Select} from '../index'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Select/dv4-select',
  decorators: [withA11y],
  component:'dv4-select',
  parameters:{
    componentSubtitle:'Custom select component',
    descriptionSlot:'Implements custom select element',
    notes: markdown
  }
}

/**
 * This is basic component
 */
export const basic = () => html`
<dv4-select options="Option 1, Option 2, Option 3"></dv4-select>
`
basic.story={
  name:'Basic select',
  parameters:{
    componentSubtitle:'Basic select component'
  }
}

export const label = () => html`
<dv4-select
  title="Select option"
  label="Select option"
  options="Option 1, Option 2, Option 3"
></dv4-select>
`
label.story={
  name:'Select with title'
}

export const missings = () => html`
<dv4-select
  name="custom-select"
  title="Select option"
  options="Option 1, Option 2, Option 3"
  missing-option="No answer"
></dv4-select>
`
missings.story={
  name:'With No answer option'
}


