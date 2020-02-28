/**
 * Attach template to element. Note! If shadowRoot is present
 * it will add innerHTML to shadowRoot.
 * @param {HTMLElement} el customElement to attach html template to
 * @param {String} htmlTemplate
 */
export function attachTemplate(el, htmlTemplate=null){
  //abort if no element
  if(!el || !htmlTemplate) {
    throw new Error('attachTemplate: element or htmlTemplate MISSING')
  }
  //attach template to shadow DOM
  if (el.shadowRoot){
    el.shadowRoot.innerHTML = htmlTemplate
  } else {
    //or to new customElement with no shadow DOM
    el.innerHTML = htmlTemplate
  }
  return el
}

export default attachTemplate