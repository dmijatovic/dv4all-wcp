import { html } from 'lit-html'
import '../../lib/dv4wcp'
import '../../../icons/lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y'
import markdown from './README.md'

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:'Modals/dv4-action-modal',
  decorators: [withA11y],
  component:'dv4-action-modal',
  parameters:{
    componentSubtitle:'Custom action modal component',
    descriptionSlot:'This is my short description?!?',
    notes: markdown
  }
}

export const actionModal = () => html`
<style>
.btn-lbl{
  min-width: 5rem;
}

.action-modal-nav{
  flex:1;
  display:flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0.5rem;
  right: 0rem;
  width: 100%;
  padding: 1rem 1rem 0.25rem 1rem;
  border-top: 1px solid #ccc;
}

@media screen and (max-width: 420px) {
  .action-modal-nav{
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
<!--ACTION MODAL -->
<dv4-action-modal active="true">
  <!--MODAL TITLE SLOT -->
  <span slot="title">Action modal with a longer title</span>
  <!--MODAL SUBTITLE SLOT -->
  <span slot="subtitle">Use YES button to close modal</span>
  <!--CONTENT SLOT -->
  <div slot="content">
    <p>This is content of the action modal. Here we explain something.</p>
    <p>
      To close this modal click on YES button. Note that other 2 buttons don't
      do much in this example.
    </p>
  </div>
  <!--NAVIGATION SLOT -->
  <div slot="nav" class="action-modal-nav">
    <dv4-custom-button primary>
      <dv4-icon-checkmark></dv4-icon-checkmark>
      <div class="btn-lbl">Yes</div>
    </dv4-custom-button>
    <dv4-custom-button>
      <dv4-icon-cogs></dv4-icon-cogs>
      <div class="btn-lbl">Maybe</div>
    </dv4-custom-button>
    <dv4-custom-button danger>
      <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
      <div class="btn-lbl">No way!</div>
    </dv4-custom-button>
  </div>
</dv4-action-modal>
`



