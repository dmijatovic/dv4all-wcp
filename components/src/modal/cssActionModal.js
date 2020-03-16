
export default ()=>(`
<style>
:host {
  display: block;
  font-weight: var(--modal-font-weight, 300);
  line-height: var(--modal-line-height, 1.5);
  box-sizing: border-box;
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.dv4-modal{
  position: fixed;
  /*cannot animate with display:none*/
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;left:0;
  height: 100vh;
  width: 100%;
  background-color: var(--modal-bg-color, rgba(0,0,0,0.5));
  /* start invisible */
  opacity:0;
  visibility: hidden;
  z-index: -1;
  /* animate */
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(10px);
}

.dv4-modal.active{
  visibility: visible;
  opacity:1;
  z-index: var(--modal-z-index, 99);
}

.dv4-modal-window{
  /* we use display:table to create
    2 cell layout and center right cell in the middle
  */
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-height: 50vh;
  max-height: 70vh;
  padding: var(--modal-content-padding, 1.5rem);
  border-radius: 3px;
  overflow: hidden;
  background-color: var(--modal-window-bg-color, #eee);
  box-shadow: var(--modal-window-box-shadow, 0 1rem 4rem rgba(0,0,0,.2));
  /* half size */
  transform: scale(0);
  transition: all 0.5s 0.2s;
}

.dv4-modal.active .dv4-modal-window{
  /* half size */
  transform: scale(1);
}

.dv4-modal-content{
  flex: 1;
  display: block;
  vertical-align: top;
  overflow: auto;
}

.dv4-modal-title{
  font-size: var(--modal-title-font-size, 2rem);
  line-height: calc(var(--modal-title-font-size, 2rem) * 1.125);
  text-transform: uppercase;
  color: var(--modal-title-color,#333);
  /* margin to facilitate button
  margin-right: 2.75rem;
  */
}

.dv4-modal-subtitle{
  font-size: calc(var(--modal-title-font-size, 2rem) * 0.625);
  text-transform: uppercase;
  font-weight: var(--modal-font-weight, 300);
  color: var(--modal-title-color,#333);
  margin: var(--modal-subtitle-margin, 0.75rem 0rem);
  opacity: var(--modal-subtitle-opacity, 0.8);
}

.dv4-modal-body{
  font-size: var(--modal-content-font-size, 1.125rem);
  /* //new css3 column layout props
  //number of columns */
  column-count: var(--modal-content-column-cnt, 1);
  /* //gap between columns */
  column-gap: var(--modal-content-column-gap, 2rem);
  /* v-line between columns */
  /* column-rule: 1px solid lighten($grey-color, 30%);*/
  /*
    add auto hypens to break words
    add languge
  */
  hyphens: inherit;
  text-align: var(--modal-content-text-align, justify);
  word-break: var(--modal-content-word-break, break-all);
}

.dv4-modal-nav{
  display: flex;
  width: 100%;
}

@media screen and (min-width: 1600px) {
  .dv4-modal-window{
    max-width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .dv4-modal-body{
    column-count:1;
    overflow-y: auto;
    width: 100%;
  }
  .dv4-modal-image{
    display: none;
  }
  .dv4-modal-content{
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .dv4-modal-window{
    display: flex;
    width: 100vw;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0px;
  }
  .dv4-modal-content{
    height:100vh;
  }
}
</style>
`)