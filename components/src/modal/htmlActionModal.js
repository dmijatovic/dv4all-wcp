import cssActionModal from './cssActionModal'

export default ({active})=>(`

  ${cssActionModal()}

  <section class="${active ? 'dv4-modal active' : 'dv4-modal'}">
    <div class="dv4-modal-window">
      <div class="dv4-modal-content">
        <h2 class="dv4-modal-title">
          <slot name="title"></slot>
        </h2>
        <h3 class="dv4-modal-subtitle">
          <slot name="subtitle"></slot>
        </h3>
        <div class="dv4-modal-body">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="dv4-modal-nav">
        <slot name="nav"></slot>
      </div>
    </div>
  </section>
`)