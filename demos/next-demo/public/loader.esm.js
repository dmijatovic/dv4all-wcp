/**
 * ShadowMode types for customElements.
 * It can be none, open and closed.
 * When closed the elements cannot be reached outside the element.
 */

/**
 * Attach shadow done to new customElement. This function
 * is centralized because it is used by every custom web component.
 * @param {HTMLElement} el
 * @param {shadowMode} shadowModes: open, closed, null
 */
function attachShadow(el, shadowMode=null){
  //abort if no element
  if(!el) return
  //add shadow DOM
  if (shadowMode){
    el.attachShadow({mode: shadowMode});
  }
  return el
}

/**
 * Attach template
 * @param {HTMLElement} el customElement to attach html template to
 * @param {String} shadowMode
 * @param {String} htmlTemplate
 */
function attachTemplate(el, shadowMode=null, htmlTemplate=null){
  //abort if no element
  if(!el || !htmlTemplate) return
  //attach template to shadow DOM
  if (shadowMode){
    el.shadowRoot.innerHTML = htmlTemplate;
  } else {
    //or to new customElement with shadow DOM
    el.innerHTML = htmlTemplate;
  }
  return el
}

/**
 * HTML template of custom scrim element.
 * It has one slot that expects content
 */
const htmlScrim=`
  <style>
    :host{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      display:flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--gooey-bg-color,#333);
      opacity: var(--gooey-bg-opacity,0.75);
      z-index: var(--gooey-z-index, 9);
    }
  </style>
`;

//create open shadow DOM
const shadowMode='open';

class Scrim extends HTMLElement{
  constructor(){
    super();
    this._init();
  }
  _init() {
    attachShadow(this,shadowMode);
    attachTemplate(this,shadowMode,htmlScrim);
  }
}

customElements.define('dv4-scrim', Scrim);

/**
 * Import customElement 'dv4-scrim'
 * we use it as backpanel
 */

const htmlGooey = props =>(`
  <style>
    :host{
      display: block;
    }

    :host([hide]),
    :host([hide=true]){
      display:none;
    }

    .dv4-gooey-centered{
      position:absolute;
      width:var(--gooey-circle-distance,30rem);
      height:var(--gooey-circle-distance,30rem);
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      background:transparent;
      filter: blur(2px) contrast(80);
      z-index: var(--gooey-z-index, 9);
    }
    .dv4-gooey-circle-1,.dv4-gooey-circle-2{
      position:absolute;
      width:var(--gooey-circle-size, 4rem);
      height:var(--gooey-circle-size, 4rem);
      /*background:#fff;*/
      border-radius:50%;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
    }
    .dv4-gooey-circle-1{
      left:20%;
      animation:osc-l 2.5s ease infinite;
      background-color:var(--gooey-color-left,#fff);
    }
    .dv4-gooey-circle-2{
      left:80%;
      animation:osc-r 2.5s ease infinite;
      background-color:var(--gooey-color-right,#0074D9);
    }
    .dv4-gooey-message{
      position: absolute;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      font-family: var(--gooey-message-font,sans-serif);
      font-size: var(--gooey-message-ft-size, 1.5rem);
      font-weight: var(--gooey-message-ft-weight, 400);
      color: var(--gooey-message-color, #333);
      animation:blink 2.5s ease infinite;
      z-index:9;
    }
    @keyframes osc-l{
      0%{left:20%;}
      50%{left:50%;}
      100%{left:20%;}
    }
    @keyframes osc-r{
      0%{left:80%;}
      50%{left:50%;}
      100%{left:80%;}
    }
    @keyframes blink{
      0%{opacity:1;}
      50%{opacity:0;}
      100%{opacity:1;}
    }
  </style>
  <div>backdrop: ${props['backdrop']}</div>
  ${ props['backdrop'] === 'true' ? '<dv4-scrim></dv4-scrim>' : '' }
  <div class="dv4-gooey-message">
    <slot></slot>
  </div>
  <div class="dv4-gooey-centered">
    <div class="dv4-gooey-circle-1"></div>
    <div class="dv4-gooey-circle-2"></div>
  </div>
`);

// default props / attributes
const defaults = {
  //create open shadow DOM
  shadowMode:'open'
};

class Gooey extends HTMLElement{
  constructor(){
    super();
    attachShadow(this,defaults['shadowMode']);
  }
  /**
   * Lifecycle event when component is mounted to DOM
   */
  connectedCallback(){
    console.log('dv4-loader-gooey...mounted to DOM!');
    //init with props (attribute values
    this.render();
  }
  /**
   * Extract all attributes placed on the
   * element as props. It includes default
   * props defined for this element
   */
  getPropsFromAttributes(){
    const props={
      ...defaults
    };
    for (let att of this.attributes){
      // console.log('att...', att)
      if (att.value){
        props[att.name] = att.value;
      } else {
        props[att.name] = 'true';
      }
    }
    return props
  }
  /**
   * Create shadow DOM (based on defs) and
   * append html markup based on provided element
   * attributes
   * @param {Object} props
   */
  render(){
    //get attributes from the element
    const props = this.getPropsFromAttributes();
    //update template
    attachTemplate(this, props['shadowMode'], htmlGooey(props));
  }
  /**
   * Listen for changes in these attributes
   */
  static get observedAttributes(){
    return ['hide','backdrop']
  }
  /**
   * Lifecycle event when attribute is changed
   */
  attributeChangedCallback(name, oldVal, newVal){
    console.log('attribut changed...', name, newVal);
    this.render();
  }
  /**
   * Lifecycle event when element is removed from DOM
   */
  disconnectedCallback(){
    console.log('dv4-loader-gooey...removed...bye!bye!');
  }
}

customElements.define('dv4-loader-gooey',Gooey);

const htmlButton=`
  <style>
    :host{
      display: inline-block;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
      padding: 1rem;
      min-width: 3rem;
      min-height: 1rem;
      cursor: pointer;
    }
    :focus{
      border: 2px solid blue;
    }
    :hover{
      color: green;
    }
  </style>
  <slot>Default</slot>
`;

//create open shadow DOM
const shadowMode$1='open';

class Dv4Button extends HTMLElement{
  constructor(){
    super();
    this._init();
  }
  _init(){
    attachShadow(this,shadowMode$1);
    attachTemplate(this,shadowMode$1,htmlButton);
  }
}


customElements.define('dv4-button',Dv4Button);
