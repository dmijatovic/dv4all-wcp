import { html } from 'lit-html'
// import '../../lib/dv4wcp'
// import '../../../icons/lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Modals/dv4-info-modal',
  decorators: [withA11y],
  component:'dv4-info-modal',
  parameters:{
    componentSubtitle:'Custom info modal component',
    descriptionSlot:'This is my short description?!?',
    notes: markdown
  }
}

/**
 * This is basic SVG component layout. What can we do with this?
 */
export const infoModal = () => html`
<dv4-info-modal
  title="This is modal title"
  subtitle="This is modal subtitle"
  content="This is content"
  active="true">
</dv4-info-modal>
`