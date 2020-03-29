/**
 * Attach template to element. Note! If shadowRoot is present
 * it will add innerHTML to shadowRoot.
 * @param {HTMLElement} el customElement to attach html template to
 * @param {String} htmlTemplate
 */
function attachTemplate(el, htmlTemplate=null){
  //abort if no element
  if(!el || !htmlTemplate) {
    throw new Error('attachTemplate: element or htmlTemplate MISSING')
  }
  //attach template to shadow DOM
  if (el.shadowRoot){
    el.shadowRoot.innerHTML = htmlTemplate;
  } else {
    //or to new customElement with no shadow DOM
    el.innerHTML = htmlTemplate;
  }
  return el
}

/**
 * Return class containing definitions of new loader custom element.
 * @param {Object} props = {
 *  name: {String} name of customElement,
 *  shadowMode: {ENUM} open, closed, null,
 *  htmlTemplate: {Function} returns html
 * }
 */
var newCustomElement = ({shadowMode, renderHtml, observedAttr=[]})=>{
  // props used to construct
  // return new custom HTML element
  return class CustomHtmlElement extends HTMLElement{
    constructor(){
      super();
      if (!renderHtml) throw new Error ('CustomHtmlElement...renderHtml method not provided!')
      //attach shadowDOM
      if (shadowMode) this.attachShadow({mode:shadowMode});
      this.rendered = false;
    }
    /**
     * Lifecycle event when component is mounted to DOM
     */
    connectedCallback(){
      console.log(`${this.localName}...mounted to DOM!`);
      if (this.rendered) return
      //render if not already done
      this.render();
    }
    /**
     * Extract all attributes placed on the
     * element as props. It also includes
     * props defined in the constructor of the element
     */
    getPropsFromAttributes(){
      const props={
        ...this.props
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
      let htmlTemplate='';
      if (typeof renderHtml === 'function'){
        const props = this.getPropsFromAttributes();
        //generate html template
        htmlTemplate = renderHtml(props);
      }else{
        htmlTemplate = renderHtml;
      }
      //attach html template to element
      attachTemplate(this, htmlTemplate );
    }
    /**
     * Listen for changes in these attributes
     */
    static get observedAttributes(){
      // console.log("observedAttributes...", observedAttr)
      return observedAttr
    }
    /**
     * Lifecycle event when attribute is changed
     */
    attributeChangedCallback(name, oldVal, newVal){
      console.log(`${this.localName}...attribut changed...`, name, newVal);
      //reset render flag
      this.rendered = false;
      //render again
      this.render();
    }
    /**
     * Lifecycle event when element is removed from DOM
     */
    disconnectedCallback(){
      console.log(`${this.localName}...removed...bye!bye!`);
    }
  }
};

var html = ({title='Arrow'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M62 32l-30-30v18h-32v24h32v18z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4ArrowRight = newCustomElement(props);

//register custom element
customElements.define('dv4-icon-arrow-right', Dv4ArrowRight);

var html$1 = ({title='Backward'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 64c17.673 0 32-14.327 32-32s-14.327-32-32-32-32 14.327-32 32 14.327 32 32 32zM32 6c14.359 0 26 11.641 26 26s-11.641 26-26 26-26-11.641-26-26 11.641-26 26-26zM44 42l-14-10 14-10zM28 42l-14-10 14-10z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$1 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$1,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconBackward = newCustomElement(props$1);

//register custom element
customElements.define('dv4-icon-backward', Dv4IconBackward);

var html$2 = ({title='Camera'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M19 38c0 7.18 5.82 13 13 13s13-5.82 13-13-5.82-13-13-13-13 5.82-13 13zM60 16h-14c-1-4-2-8-6-8h-16c-4 0-5 4-6 8h-14c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4zM32 55.75c-9.803 0-17.75-7.947-17.75-17.75s7.947-17.75 17.75-17.75c9.803 0 17.75 7.947 17.75 17.75s-7.947 17.75-17.75 17.75zM60 28h-8v-4h8v4z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$2 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$2,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCamera = newCustomElement(props$2);

//register custom element
customElements.define('dv4-icon-camera', Dv4IconCamera);

var htmlCancelCirlce = ({title='Cancel'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26z"></path>
  <path d="M42 16l-10 10-10-10-6 6 10 10-10 10 6 6 10-10 10 10 6-6-10-10 10-10z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$3 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlCancelCirlce,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCancelCircle = newCustomElement(props$3);

//register custom element
customElements.define('dv4-icon-cancel-circle', Dv4IconCancelCircle);

var html$3 = ({title='Checkmark'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M54 8l-30 30-14-14-10 10 24 24 40-40z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$4 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$3,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCheckmark = newCustomElement(props$4);

//register custom element
customElements.define('dv4-icon-checkmark', Dv4IconCheckmark);

var html$4 = ({title='Circle'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26z"></path>
  <path d="M22.172 44.172l5.657 5.657 17.828-17.828-17.828-17.828-5.657 5.657 12.171 12.172z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$5 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$4,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCircleRight = newCustomElement(props$5);

//register custom element
customElements.define('dv4-icon-circle-right', Dv4IconCircleRight);

var html$5 = ({title='Cog'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M58.362 38.141c-3.358-5.816-1.339-13.269 4.51-16.655l-6.289-10.893c-1.797 1.053-3.886 1.657-6.115 1.657-6.721 0-12.169-5.484-12.169-12.249h-12.579c0.017 2.088-0.505 4.205-1.622 6.141-3.358 5.816-10.822 7.794-16.679 4.422l-6.289 10.893c1.811 1.029 3.378 2.537 4.493 4.467 3.352 5.807 1.345 13.245-4.482 16.639l6.289 10.893c1.791-1.044 3.87-1.641 6.088-1.641 6.7 0 12.134 5.45 12.169 12.185h12.578c-0.005-2.067 0.517-4.161 1.623-6.076 3.352-5.807 10.798-7.787 16.651-4.438l6.289-10.893c-1.799-1.029-3.356-2.531-4.465-4.452zM32 44.958c-7.157 0-12.959-5.801-12.959-12.958s5.802-12.958 12.959-12.958c7.157 0 12.958 5.802 12.958 12.958s-5.801 12.958-12.958 12.958z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$6 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$5,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCog = newCustomElement(props$6);

//register custom element
customElements.define('dv4-icon-cog', Dv4IconCog);

var html$6 = ({title='Cogs'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M22.733 45.128l2.581-3.614-2.828-2.828-3.614 2.581c-0.67-0.375-1.388-0.673-2.142-0.887l-0.73-4.38h-4l-0.73 4.38c-0.754 0.214-1.472 0.512-2.142 0.887l-3.614-2.581-2.829 2.828 2.581 3.614c-0.375 0.67-0.673 1.388-0.887 2.142l-4.38 0.73v4l4.38 0.73c0.214 0.754 0.512 1.471 0.887 2.142l-2.581 3.614 2.828 2.828 3.614-2.581c0.67 0.375 1.388 0.673 2.142 0.887l0.73 4.38h4l0.73-4.38c0.754-0.214 1.471-0.512 2.142-0.887l3.614 2.581 2.828-2.828-2.581-3.614c0.375-0.67 0.673-1.388 0.887-2.142l4.381-0.73v-4l-4.38-0.73c-0.214-0.754-0.512-1.471-0.887-2.142zM14 54c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zM64 24v-4l-4.211-0.766c-0.078-0.503-0.177-0.999-0.295-1.487l3.597-2.319-1.531-3.696-4.184 0.904c-0.263-0.432-0.545-0.851-0.843-1.258l2.438-3.521-2.828-2.828-3.521 2.438c-0.407-0.298-0.826-0.58-1.258-0.843l0.904-4.184-3.696-1.531-2.319 3.597c-0.488-0.118-0.984-0.218-1.487-0.295l-0.766-4.211h-4l-0.766 4.211c-0.503 0.078-0.998 0.177-1.487 0.295l-2.319-3.597-3.695 1.531 0.904 4.184c-0.432 0.263-0.851 0.545-1.258 0.843l-3.521-2.438-2.828 2.828 2.438 3.521c-0.298 0.407-0.58 0.826-0.843 1.258l-4.184-0.904-1.531 3.696 3.597 2.319c-0.118 0.488-0.218 0.984-0.295 1.487l-4.212 0.766v4l4.211 0.766c0.078 0.503 0.177 0.999 0.295 1.487l-3.597 2.319 1.531 3.696 4.184-0.904c0.264 0.432 0.546 0.851 0.843 1.258l-2.438 3.521 2.828 2.828 3.521-2.438c0.407 0.298 0.826 0.58 1.258 0.843l-0.904 4.184 3.695 1.531 2.319-3.597c0.488 0.118 0.984 0.218 1.487 0.295l0.766 4.212h4l0.766-4.211c0.503-0.078 0.998-0.177 1.487-0.295l2.319 3.597 3.696-1.531-0.904-4.184c0.432-0.264 0.851-0.545 1.258-0.843l3.521 2.438 2.828-2.828-2.438-3.521c0.298-0.407 0.58-0.826 0.843-1.258l4.184 0.904 1.531-3.696-3.597-2.319c0.118-0.488 0.218-0.984 0.295-1.487l4.211-0.766zM42 30.7c-4.805 0-8.7-3.895-8.7-8.7s3.895-8.7 8.7-8.7 8.7 3.895 8.7 8.7c0 4.805-3.895 8.7-8.7 8.7z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$7 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$6,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCogs = newCustomElement(props$7);

//register custom element
customElements.define('dv4-icon-cogs', Dv4IconCogs);

var html$7 = ({title='Connection'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="64"
    viewBox="0 0 80 64">
  <title>${title}</title>
  <path d="M40 36c6.617 0 12.617 2.692 16.963 7.037l-5.654 5.654c-2.897-2.897-6.897-4.692-11.308-4.692s-8.411 1.794-11.308 4.692l-5.654-5.654c4.346-4.346 10.346-7.037 16.963-7.037zM11.716 31.716c7.555-7.555 17.6-11.716 28.284-11.716s20.729 4.161 28.284 11.716l-5.657 5.657c-6.044-6.044-14.080-9.373-22.627-9.373s-16.583 3.328-22.627 9.373l-5.657-5.657zM61.799 8.402c6.669 2.821 12.657 6.858 17.799 12v0l-5.657 5.657c-9.066-9.066-21.12-14.059-33.941-14.059s-24.875 4.993-33.941 14.059l-5.657-5.657c5.142-5.142 11.13-9.179 17.799-12 6.907-2.921 14.241-4.402 21.799-4.402s14.892 1.481 21.799 4.402zM36 56c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$8 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$7,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconConnection = newCustomElement(props$8);

//register custom element
customElements.define('dv4-icon-connection', Dv4IconConnection);

var html$8 = ({title='Cross'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M63.416 51.416c-0-0-0.001-0.001-0.001-0.001l-19.415-19.416 19.415-19.416c0-0 0.001-0 0.001-0.001 0.209-0.209 0.36-0.453 0.457-0.713 0.265-0.711 0.114-1.543-0.458-2.114l-9.172-9.172c-0.572-0.572-1.403-0.723-2.114-0.458-0.26 0.097-0.504 0.248-0.714 0.457 0 0-0 0-0.001 0.001l-19.416 19.416-19.416-19.416c-0-0-0-0-0.001-0.001-0.209-0.209-0.453-0.36-0.713-0.457-0.711-0.266-1.543-0.114-2.114 0.457l-9.172 9.172c-0.572 0.572-0.723 1.403-0.458 2.114 0.097 0.26 0.248 0.505 0.457 0.713 0 0 0 0 0.001 0.001l19.416 19.416-19.416 19.416c-0 0-0 0-0 0.001-0.209 0.209-0.36 0.453-0.457 0.713-0.266 0.711-0.114 1.543 0.458 2.114l9.172 9.172c0.572 0.572 1.403 0.723 2.114 0.458 0.26-0.097 0.504-0.248 0.713-0.457 0-0 0-0 0.001-0.001l19.416-19.416 19.416 19.416c0 0 0.001 0 0.001 0.001 0.209 0.209 0.453 0.36 0.713 0.457 0.711 0.265 1.543 0.114 2.114-0.458l9.172-9.172c0.572-0.572 0.723-1.403 0.458-2.114-0.097-0.26-0.248-0.504-0.457-0.713z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$9 = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$8,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconCross = newCustomElement(props$9);

//register custom element
customElements.define('dv4-icon-cross', Dv4IconCross);

var html$9 = ({title='Embed'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="64"
    viewBox="0 0 80 64">
  <title>${title}</title>
  <path d="M52 46l6 6 20-20-20-20-6 6 14 14z"></path>
  <path d="M28 18l-6-6-20 20 20 20 6-6-14-14z"></path>
  <path d="M43.831 9.407l4.342 1.184-11.999 44.002-4.342-1.184 11.999-44.002z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$a = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$9,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconEmbed2 = newCustomElement(props$a);

//register custom element
customElements.define('dv4-icon-embed2', Dv4IconEmbed2);

var html$a = ({title='Cross'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M24 32h-20v-8h20v-8l12 12-12 12zM64 0v52l-24 12v-12h-24v-16h4v12h20v-36l16-8h-36v16h-4v-20z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$b = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$a,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconEnter = newCustomElement(props$b);

//register custom element
customElements.define('dv4-icon-enter', Dv4IconEnter);

var html$b = ({title='Equalizer'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M28 8v-1c0-1.65-1.35-3-3-3h-10c-1.65 0-3 1.35-3 3v1h-12v8h12v1c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-1h36v-8h-36zM16 16v-8h8v8h-8zM52 27c0-1.65-1.35-3-3-3h-10c-1.65 0-3 1.35-3 3v1h-36v8h36v1c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-1h12v-8h-12v-1zM40 36v-8h8v8h-8zM28 47c0-1.65-1.35-3-3-3h-10c-1.65 0-3 1.35-3 3v1h-12v8h12v1c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-1h36v-8h-36v-1zM16 56v-8h8v8h-8z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$c = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$b,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconEqualizer = newCustomElement(props$c);

//register custom element
customElements.define('dv4-icon-equalizer', Dv4IconEqualizer);

var html$c = ({title='Exit'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M48 40v-8h-20v-8h20v-8l12 12zM44 36v16h-20v12l-24-12v-52h44v20h-4v-16h-32l16 8v36h16v-12z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$d = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$c,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconExit = newCustomElement(props$d);

//register custom element
customElements.define('dv4-icon-exit', Dv4IconExit);

var html$d = ({title='Flag'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M0 0h8v64h-8v-64z"></path>
  <path d="M52 40.188c5.164 0 9.661-1.249 12-3.094v-32c-2.339 1.845-6.836 3.094-12 3.094s-9.661-1.249-12-3.094v32c2.339 1.845 6.836 3.094 12 3.094z"></path>
  <path d="M38 2.033c-2.932-1.246-7.22-2.033-12-2.033-6.025 0-11.271 1.249-14 3.094v32c2.729-1.845 7.975-3.094 14-3.094 4.78 0 9.068 0.787 12 2.033v-32z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$e = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$d,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconFlag = newCustomElement(props$e);

//register custom element
customElements.define('dv4-icon-flag', Dv4IconFlag);

var html$e = ({title='Folder', open})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  ${open ?
    '<path d="M52 60l12-32h-52l-12 32zM8 24l-8 36v-52h18l8 8h26v8z"></path>'
    :
    '<path d="M28 8l8 8h28v44h-64v-52z"></path>'
  }
  </svg>
`);

//SHARED lib

// default props / attributes
const props$f = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$e,
  //pass attributes to observe
  observedAttr: ['title', 'open']
};

//create new customElement
const Dv4IconFolder = newCustomElement(props$f);

//register custom element
customElements.define('dv4-icon-folder', Dv4IconFolder);

var html$f = ({title='Forward'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM20 22l14 10-14 10zM36 22l14 10-14 10z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$g = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$f,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconForward = newCustomElement(props$g);

//register custom element
customElements.define('dv4-icon-forward', Dv4IconForward);

var html$g = ({title='Home'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M64 36.903l-32-24.839-32 24.839v-10.127l32-24.839 32 24.839zM56 36v24h-16v-16h-16v16h-16v-24l24-18z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$h = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$g,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconHome = newCustomElement(props$h);

//register custom element
customElements.define('dv4-icon-home', Dv4IconHome);

var html$h = ({title='Image'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M59.993 8c0.002 0.002 0.005 0.005 0.007 0.007v47.986c-0.002 0.002-0.005 0.005-0.007 0.007h-55.986c-0.003-0.002-0.005-0.005-0.007-0.007v-47.986c0.002-0.002 0.005-0.005 0.007-0.007h55.986zM60 4h-56c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-48c0-2.2-1.8-4-4-4v0z"></path>
  <path d="M52 18c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"></path>
  <path d="M56 52h-48v-8l14-24 16 20h4l14-12z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$i = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$h,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconImage = newCustomElement(props$i);

//register custom element
customElements.define('dv4-icon-image', Dv4IconImage);

var html$i = ({title='Info'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M28 19c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v2c0 1.65-1.35 3-3 3h-2c-1.65 0-3-1.35-3-3v-2z"></path>
  <path d="M40 48h-16v-4h4v-12h-4v-4h12v16h4z"></path>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$j = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$i,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconInfo = newCustomElement(props$j);

//register custom element
customElements.define('dv4-icon-info', Dv4IconInfo);

var html$j = ({title='Info'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M62.633 19.64l-6.319-6.319c-1.55-1.55-4.086-4.085-5.635-5.635l-6.319-6.319c-1.55-1.55-4.31-1.823-6.133-0.607l-17.277 11.518c-1.823 1.216-2.514 3.814-1.534 5.774l4.405 8.811c0.135 0.269 0.29 0.556 0.462 0.854l-22.283 22.283-2 14h12v-4h8v-8h8v-8h8v-4.449c0.4 0.238 0.783 0.451 1.137 0.628l8.811 4.406c1.96 0.98 4.559 0.29 5.774-1.534l11.518-17.277c1.216-1.823 0.942-4.583-0.607-6.133zM9.414 53.414l-2.828-2.828 19.473-19.473 2.828 2.828-19.473 19.473zM57.314 26.485l-2.828 2.828c-0.778 0.778-2.050 0.778-2.828 0l-16.971-16.971c-0.778-0.778-0.778-2.051 0-2.828l2.828-2.829c0.778-0.778 2.050-0.778 2.828 0l16.971 16.971c0.778 0.778 0.778 2.051 0 2.828z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$k = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$j,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconKey = newCustomElement(props$k);

//register custom element
customElements.define('dv4-icon-key', Dv4IconKey);

var html$k = ({title='Info'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M0 0h16v16h-16zM24 4h40v8h-40zM0 24h16v16h-16zM24 28h40v8h-40zM0 48h16v16h-16zM24 52h40v8h-40z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$l = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$k,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconList = newCustomElement(props$l);

//register custom element
customElements.define('dv4-icon-list', Dv4IconList);

var html$l = ({title='Map'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M0 12l20-8v48l-20 8z"></path>
  <path d="M24 2l20 12v46l-20-10z"></path>
  <path d="M48 14l16-12v48l-16 12z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$m = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$l,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconMap = newCustomElement(props$m);

//register custom element
customElements.define('dv4-icon-map', Dv4IconMap);

var html$m = ({title='Menu'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M4 12h56v12h-56zM4 28h56v12h-56zM4 44h56v12h-56z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$n = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$m,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconMenu = newCustomElement(props$n);

//register custom element
customElements.define('dv4-icon-menu', Dv4IconMenu);

var html$n = ({title='Menu'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M30 44c5.523 0 10-4.477 10-10v-24c0-5.523-4.477-10-10-10s-10 4.477-10 10v24c0 5.523 4.477 10 10 10zM44 28v6c0 7.732-6.268 14-14 14s-14-6.268-14-14v-6h-4v6c0 9.265 7 16.894 16 17.889v8.111h-8v4h20v-4h-8v-8.111c9-0.995 16-8.624 16-17.889v-6h-4z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$o = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$n,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconMic = newCustomElement(props$o);

//register custom element
customElements.define('dv4-icon-mic', Dv4IconMic);

var html$o = ({title='Next'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zM32 58c14.359 0 26-11.641 26-26s-11.641-26-26-26-26 11.641-26 26 11.641 26 26 26z"></path>
  <path d="M36 32l-16-12v24z"></path>
  <path d="M44 20h-8v24h8v-24z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$p = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$o,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconNext = newCustomElement(props$p);

//register custom element
customElements.define('dv4-icon-next', Dv4IconNext);

var html$p = ({title='Next'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 6c-6.945 0-13.474 2.704-18.385 7.615s-7.615 11.44-7.615 18.385c0 6.945 2.704 13.474 7.615 18.385s11.44 7.615 18.385 7.615c6.945 0 13.474-2.705 18.385-7.615s7.615-11.44 7.615-18.385c0-6.945-2.705-13.474-7.615-18.385s-11.44-7.615-18.385-7.615zM32 0v0c17.673 0 32 14.327 32 32s-14.327 32-32 32c-17.673 0-32-14.327-32-32s14.327-32 32-32zM28 44h8v8h-8zM28 12h8v24h-8z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$q = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$p,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconNotification = newCustomElement(props$q);

//register custom element
customElements.define('dv4-icon-notification', Dv4IconNotification);

var html$q = ({title='Format'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M64 36v-24h-12v-4c0-2.2-1.8-4-4-4h-44c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4v-4h8v16h-36v8h-2c-1.105 0-2 0.895-2 2v20c0 1.105 0.895 2 2 2h8c1.105 0 2-0.895 2-2v-20c0-1.105-0.895-2-2-2h-2v-4h36zM48 12h-44v-4h44v4z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$r = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$q,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPaintFormat = newCustomElement(props$r);

//register custom element
customElements.define('dv4-icon-paint-format', Dv4IconPaintFormat);

var html$r = ({title='Paragraph', type='left'})=>{
  //default is paragraph center
  let svgPath = '';

  switch(type){
  case 'center':
    //do nothing
    svgPath = '<path d="M0 4h64v8h-64zM12 16h40v8h-40zM12 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>';
    break
  case 'justify':
    svgPath='<path d="M0 4h64v8h-64zM0 16h64v8h-64zM0 28h64v8h-64zM0 40h64v8h-64zM0 52h64v8h-64z"></path>';
    break
  case 'right':
    svgPath='<path d="M0 4h64v8h-64zM24 16h40v8h-40zM24 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>';
    break
  case 'left':
  default:
    svgPath='<path d="M0 4h64v8h-64zM0 16h40v8h-40zM0 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>';
  }
  return(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  ${svgPath}
  </svg>
`)};

//SHARED lib

// default props / attributes
const props$s = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$r,
  //pass attributes to observe
  observedAttr: ['title','type']
};

//create new customElement
const Dv4IconParagraph = newCustomElement(props$s);

//register custom element
customElements.define('dv4-icon-paragraph', Dv4IconParagraph);

var html$s = ({title='Pause'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$t = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$s,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPause = newCustomElement(props$t);

//register custom element
customElements.define('dv4-icon-pause', Dv4IconPause);

var html$t = ({title='Pencil'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M54 0c5.523 0 10 4.477 10 10 0 2.251-0.744 4.329-2 6l-4 4-14-14 4-4c1.671-1.256 3.749-2 6-2zM4 46l-4 18 18-4 37-37-14-14-37 37zM44.724 22.724l-28 28-3.447-3.447 28-28 3.447 3.447z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$u = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$t,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPencil = newCustomElement(props$u);

//register custom element
customElements.define('dv4-icon-pencil', Dv4IconPencil);

var html$u = ({title='Pencil'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M44 40c-4 4-4 8-8 8s-8-4-12-8-8-8-8-12 4-4 8-8-8-16-12-16-12 12-12 12c0 8 8.219 24.219 16 32s24 16 32 16c0 0 12-8 12-12s-12-16-16-12z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$v = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$u,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPhone = newCustomElement(props$v);

//register custom element
customElements.define('dv4-icon-phone', Dv4IconPhone);

var html$v = ({title='Pie chart'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M28 36v-28c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28c0-4.502-1.064-8.755-2.952-12.524l-25.048 12.524zM57.048 15.476c-4.597-9.176-14.086-15.476-25.048-15.476v28l25.048-12.524z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$w = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$v,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPieChart = newCustomElement(props$w);

//register custom element
customElements.define('dv4-icon-pie-chart', Dv4IconPieChart);

var html$w = ({title='Play'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM24 18l24 14-24 14z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$x = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$w,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPlay = newCustomElement(props$x);

//register custom element
customElements.define('dv4-icon-play', Dv4IconPlay);

var html$x = ({title='Previous'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26z"></path>
  <path d="M28 32l16-12v24z"></path>
  <path d="M20 20h8v24h-8v-24z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$y = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$x,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconPrevious = newCustomElement(props$y);

//register custom element
customElements.define('dv4-icon-previous', Dv4IconPrevious);

var html$y = ({title='Share'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M54 44c-2.822 0-5.37 1.171-7.188 3.052l-26.938-13.469c0.082-0.516 0.126-1.044 0.126-1.583s-0.044-1.067-0.126-1.583l26.938-13.469c1.818 1.881 4.366 3.052 7.188 3.052 5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 0.539 0.044 1.067 0.126 1.583l-26.938 13.469c-1.818-1.881-4.366-3.052-7.188-3.052-5.523 0-10 4.477-10 10s4.477 10 10 10c2.822 0 5.37-1.171 7.188-3.052l26.938 13.469c-0.082 0.516-0.126 1.044-0.126 1.583 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$z = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$y,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconShare = newCustomElement(props$z);

//register custom element
customElements.define('dv4-icon-share', Dv4IconShare);

var html$z = ({title='Stack'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M64 20l-32-16-32 16 32 16 32-16zM32 9.311l21.379 10.689-21.379 10.689-21.379-10.689 21.379-10.689zM57.59 28.795l6.41 3.205-32 16-32-16 6.41-3.205 25.59 12.795zM57.59 40.795l6.41 3.205-32 16-32-16 6.41-3.205 25.59 12.795z"></path>
  </svg>
`);

//SHARED lib

// default props / attributes
const props$A = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$z,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconStack = newCustomElement(props$A);

//register custom element
customElements.define('dv4-icon-stack', Dv4IconStack);

var html$A = ({title='Star', type='empty'})=>{
  let svgPath = '';
  switch(type){
  case 'full':
    svgPath='<path d="M64 24.816l-22.111-3.213-9.889-20.036-9.889 20.036-22.111 3.213 16 15.596-3.777 22.022 19.777-10.397 19.777 10.397-3.777-22.022 16-15.596z"></path>';
    break
  case 'half':
    svgPath='<path d="M64 24.816l-22.111-3.213-9.889-20.036-9.889 20.036-22.111 3.213 16 15.596-3.777 22.022 19.777-10.397 19.777 10.397-3.777-22.022 16-15.596zM32 47.094l-0.059 0.031 0.059-35.673 6.983 14.15 15.615 2.269-11.299 11.014 2.667 15.552-13.966-7.343z"></path>';
    break
  case 'empty':
  default:
    svgPath='<path d="M64 24.816l-22.111-3.213-9.889-20.036-9.889 20.036-22.111 3.213 16 15.596-3.777 22.022 19.777-10.397 19.777 10.397-3.777-22.022 16-15.596zM32 47.094l-13.966 7.343 2.667-15.552-11.299-11.014 15.615-2.269 6.983-14.15 6.983 14.15 15.615 2.269-11.299 11.014 2.667 15.552-13.966-7.343z"></path>';
  }
  return(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  ${svgPath}
  </svg>
`)};

//SHARED lib

// default props / attributes
const props$B = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$A,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconStar = newCustomElement(props$B);

//register custom element
customElements.define('dv4-icon-star', Dv4IconStar);

var html$B = ({title='Stop'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM20 20h24v24h-24z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$C = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$B,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconStop = newCustomElement(props$C);

//register custom element
customElements.define('dv4-icon-stop', Dv4IconStop);

var html$C = ({title='Switch'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M40 9.162v8.497c2.263 0.988 4.344 2.401 6.142 4.199 3.778 3.777 5.858 8.8 5.858 14.142s-2.080 10.365-5.858 14.142c-3.777 3.777-8.8 5.858-14.142 5.858s-10.365-2.080-14.142-5.858c-3.777-3.777-5.858-8.8-5.858-14.142s2.080-10.365 5.858-14.142c1.798-1.798 3.879-3.211 6.142-4.199v-8.497c-11.566 3.443-20 14.155-20 26.838 0 15.464 12.536 28 28 28s28-12.536 28-28c0-12.684-8.434-23.396-20-26.838zM28 0h8v32h-8z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$D = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$C,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconSwitch = newCustomElement(props$D);

//register custom element
customElements.define('dv4-icon-switch', Dv4IconSwitch);

var html$D = ({title='Tree'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M61 48h-1v-13c0-3.86-3.14-7-7-7h-17v-8h1c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-10c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h1v8h-17c-3.86 0-7 3.14-7 7v13h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-1v-12h16v12h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-1v-12h16v12h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3zM12 60h-8v-8h8v8zM36 60h-8v-8h8v8zM28 16v-8h8v8h-8zM60 60h-8v-8h8v8z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$E = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$D,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconTree = newCustomElement(props$E);

//register custom element
customElements.define('dv4-icon-tree', Dv4IconTree);

var html$E = ({title='Trophy'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M52 12v-8h-40v8h-12v8c0 6.627 5.372 12 12 12 1.255 0 2.464-0.193 3.601-0.55 2.886 4.126 7.288 7.112 12.399 8.15v12.4h-4c-4.418 0-8 3.582-8 8h32c0-4.418-3.582-8-8-8h-4v-12.4c5.111-1.038 9.513-4.024 12.399-8.15 1.137 0.357 2.346 0.55 3.601 0.55 6.628 0 12-5.373 12-12v-8h-12zM12 27.25c-3.998 0-7.25-3.252-7.25-7.25v-4h7.25v4c0 2.512 0.464 4.915 1.31 7.129-0.425 0.078-0.862 0.121-1.31 0.121zM59.25 20c0 3.998-3.252 7.25-7.25 7.25-0.447 0-0.885-0.043-1.31-0.121 0.845-2.215 1.31-4.618 1.31-7.129v-4h7.25v4z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$F = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$E,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconTrophy = newCustomElement(props$F);

//register custom element
customElements.define('dv4-icon-trophy', Dv4IconTrophy);

var html$F = ({title='Video camera'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M24 18c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM0 18c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM48 38v-6c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-6l16 10v-28l-16 10zM40 48h-32v-12h32v12z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$G = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$F,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconVideoCamera = newCustomElement(props$G);

//register custom element
customElements.define('dv4-icon-video-camera', Dv4IconVideoCamera);

var html$G = ({title='Warning'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M32 5.798l26.819 53.452h-53.638l26.819-53.452zM32 0c-1.379 0-2.759 0.93-3.805 2.791l-27.317 54.444c-2.093 3.721-0.313 6.765 3.957 6.765h54.332c4.269 0 6.049-3.044 3.956-6.765h0l-27.317-54.444c-1.046-1.86-2.426-2.791-3.805-2.791v0z"></path>
<path d="M36 52c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
<path d="M32 44c-2.209 0-4-1.791-4-4v-12c0-2.209 1.791-4 4-4s4 1.791 4 4v12c0 2.209-1.791 4-4 4z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$H = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$G,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconWarning = newCustomElement(props$H);

//register custom element
customElements.define('dv4-icon-warning', Dv4IconWarning);

var html$H = ({title='Wrench'})=>(`
<style>
  :host{
    display: inline-block;
  }
  /* SCALE SVG TO PARENT */
  svg{
    width:100%;
    height:100%;
  }
</style>
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64">
<title>${title}</title>
<path d="M62.683 51.117l-28.785-24.672c1.34-2.519 2.101-5.393 2.101-8.445 0-9.941-8.059-18-18-18-1.818 0-3.573 0.271-5.228 0.772l10.399 10.399c1.556 1.556 1.556 4.101 0 5.657l-6.343 6.343c-1.556 1.556-4.101 1.556-5.657 0l-10.399-10.399c-0.501 1.655-0.772 3.41-0.772 5.228 0 9.941 8.059 18 18 18 3.052 0 5.926-0.761 8.445-2.101l24.672 28.785c1.432 1.67 3.876 1.764 5.431 0.209l6.343-6.343c1.555-1.556 1.462-4-0.209-5.431z"></path>
</svg>
`);

//SHARED lib

// default props / attributes
const props$I = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html$H,
  //pass attributes to observe
  observedAttr: ['title']
};

//create new customElement
const Dv4IconWrench = newCustomElement(props$I);

//register custom element
customElements.define('dv4-icon-wrench', Dv4IconWrench);

export { Dv4ArrowRight, Dv4IconBackward, Dv4IconCamera, Dv4IconCancelCircle, Dv4IconCheckmark, Dv4IconCircleRight, Dv4IconCog, Dv4IconCogs, Dv4IconConnection, Dv4IconCross, Dv4IconEmbed2, Dv4IconEnter, Dv4IconEqualizer, Dv4IconExit, Dv4IconFlag, Dv4IconFolder, Dv4IconForward, Dv4IconHome, Dv4IconImage, Dv4IconInfo, Dv4IconKey, Dv4IconList, Dv4IconMap, Dv4IconMenu, Dv4IconMic, Dv4IconNext, Dv4IconNotification, Dv4IconPaintFormat, Dv4IconParagraph, Dv4IconPause, Dv4IconPencil, Dv4IconPhone, Dv4IconPieChart, Dv4IconPlay, Dv4IconPrevious, Dv4IconShare, Dv4IconStack, Dv4IconStar, Dv4IconStop, Dv4IconSwitch, Dv4IconTree, Dv4IconTrophy, Dv4IconVideoCamera, Dv4IconWarning, Dv4IconWrench };
