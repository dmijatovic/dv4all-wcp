import cssInfoModal from './cssInfoModal'

export default ({img, active,
  title='Modal title',
  subtitle='Modal subtitle',
  content='Modal content'})=>(`

  ${cssInfoModal(img)}

  <section class="${active ? 'dv4-modal active' : 'dv4-modal'}">
    <div class="dv4-modal-window">
      ${!img ? '' :
    `<div class="dv4-modal-image"
          style="background-image: url(${img})">
        </div>`}

      <div class="dv4-modal-content">
        <h2 class="dv4-modal-title">
          ${title}
        </h2>
        <h3 class="dv4-modal-subtitle">
          ${subtitle}
        </h3>
        <p class="dv4-modal-body">
          ${content}
        </p>
      </div>
      <button class="dv4-modal-close-btn">&times;</button>
    </div>
  </section>
`)