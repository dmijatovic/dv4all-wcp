<template>
  <PageContent>
    <template #page-title>
      Modal demo @dv4all/components
    </template>
    <template #page-body>
        <div>
        <h3>What where the challenges?</h3>
        <p>
          This section has two modal examples.
          <ul>
            <li>Info modal: modal only displays information. All information
              in is passed using element attributes (title, subtitle, content).
            </li>
            <li>Action modal: this modal supports passing (action) buttons.
              All information is passed using named slots.
            </li>
          </ul>
          Look at the source code for all implementation details.
        </p>
      </div>
      <div>
        <h3>Implementation examples of info and action modals</h3>
        <p>
          <dv4-custom-button id="info-modal" primary
            @click="showModal('dv4info')">
            <dv4-icon-cog></dv4-icon-cog>
            Show info modal
          </dv4-custom-button>

          <dv4-custom-button id="action-modal"
            @click="showModal('dv4action')">
            <dv4-icon-cogs></dv4-icon-cogs>
            Show action modal
          </dv4-custom-button>
        </p>
        <!-- NFO MODAL-->
        <dv4-info-modal
          ref="dv4info"
          img="/img/18-RDG-004_3A8A51069_m.jpg"
          title="Modal title"
          subtitle="To close modal use X button"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          @onClose="closeModal('dv4info')"
        ></dv4-info-modal>

        <!--ACTION MODAL -->
        <dv4-action-modal ref="dv4action">
          <span slot="title">Action modal with a longer title</span>
          <span slot="subtitle">Use YES button to close modal</span>
          <div slot="content">
            <p>This is content of the action modal. Here we explain something.</p>
            <p>
              To close this modal click on YES button. Note that other 2 buttons
              don't do much in this example.
            </p>
          </div>
          <div slot="nav" class="action-modal-nav">
            <dv4-custom-button primary
              @click="closeModal('dv4action')">
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
      </div>
    </template>
  </PageContent>
</template>
<script>

import PageContent from '@/components/page/PageContent'

export default {
  components:{
    PageContent
  },
  // mounted(){
  //   console.log("refs", this.$refs)
  // },
  methods:{
    showModal(type){
      console.log('Show modal...', type)
      const modal = this.$refs[type]
      if (modal){
        modal.setAttribute('active',true)
      }
    },
    closeModal(type){
      const modal = this.$refs[type]
      if (modal){
        modal.removeAttribute('active')
      }
    }

  }
}
</script>

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

dv4-custom-button{
  margin:0rem 0.5rem 0.5rem 0rem;
}

@media screen and (max-width: 420px) {
  .action-modal-nav{
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
