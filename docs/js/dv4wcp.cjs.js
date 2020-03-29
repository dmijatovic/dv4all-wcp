var Dv4WCP = (function (exports) {
  'use strict';

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

  /**
   * Return class containing definitions of new loader custom element.
   * @param {Object} props = {
   *  name: {String} name of customElement, 
   *  htmlTemplate: {Function} returns html
   * }
   */
  var newButtonElement = ({renderHtml, observedAttr=[]})=>{
    // props used to construct
    // return new custom HTML element
    return class CustomButtonElement extends HTMLButtonElement{
      constructor(){
        super();
        if (!renderHtml) throw new Error ('CustomButtonElement...renderHtml method not provided!')
        // HTMLButtonElement DOES NOT SUPPORT shadowRoot
        // if (shadowMode) this.attachShadow({mode:shadowMode})
      }
      /**
       * Lifecycle event when component is mounted to DOM
       */
      connectedCallback(){
        console.log(`${this.localName}...mounted to DOM!`);
        //init with props (attribute values
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

  var cssButton = `
:host{
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
}
:host([disabled]){
  opacity: 0.7;
  cursor: not-allowed;
}
button{
  flex:1;
  display: inline-flex;
  align-items: end;
  justify-content: space-between;
  font-family: inherit;
  font-size: var(--btn-font-size, 1rem);
  border: var(--btn-border, 1px solid lightgrey);
  border-radius: var(--btn-border-radius, 0.25rem);
  padding: var(--btn-padding, 0.5rem 1rem);
  min-width: var(--btn-min-width, 3rem);
  min-height: var(--btn-min-height, 1rem);
  cursor: var(--btn-cursor, pointer);
  background-color: transparent;
}
button:focus:not([disabled]){
  outline: none;
  box-shadow: 0 0 1pt 1pt var(--btn-focus-color, lightblue);
}
button:hover:not([disabled]),
button[primary]:hover:not([disabled]),
button[danger]:hover:not([disabled]){
  color: var(--color-accent, lightblue);
  fill:  var(--color-accent, lightblue);
}
button:hover:not([disabled]) > ::slotted(*),
button[danger]:hover:not([disabled]) > ::slotted(*),
button[primary]:hover:not([disabled]) > ::slotted(*){
  color: var(--color-accent, lightblue);
  fill: var(--color-accent, lightblue);
}
button:active:not([disabled]),
button[primary]:active:not([disabled]){
  transform: translate(1px,1px);
}
button[primary],
button[primary] > ::slotted(*){
  background-color: var(--color-primary, darkblue);
  color: var(--color-primary-contrast, #fff);
  fill: var(--color-primary-contrast, #fff);
}
button[danger],
button[danger] > ::slotted(*){
  background-color: var(--color-warning, darkred);
  color: var(--color-warning-contrast, #fff);
  fill: var(--color-warning-contrast, #fff);
}
button[disabled]{
  opacity: 0.7;
  cursor: not-allowed;
}
::slotted(*){
  height: var(--btn-icon-height, 1rem);
  width: var(--btn-icon-width, 1rem);
  margin: var(--btn-icon-margin, 0rem 0.5rem 0rem 0rem) !important;
}
`;

  const htmlButton = props =>{
    const {primary, danger, disabled} = props;
    let button='<button';

    if(primary) button+=' primary';
    if(danger) button+=' danger';
    if(disabled) button+=' disabled';

    button+='>';

    return (`
    <style>
      ${cssButton}
    </style>
    ${button}
      <slot>Default</slot>
    </button>
  `)
  };

  //props
  const props={
    observedAttr:['primary','danger','disabled'],
    shadowMode: 'open',
    renderHtml:htmlButton
  };

  //create new custom element
  const Dv4CustomButton = newCustomElement(props);

  //register custom element
  customElements.define('dv4-custom-button',Dv4CustomButton);

  const htmlButton$1=`
  <style>
    button[is='is-dv4-button']{
      display: inline-flex;
      align-items: end;
      justify-content: space-between;
      font-family: inherit;
      font-size: 1rem;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      min-width: 3rem;
      min-height: 1rem;
      cursor: pointer;
      background-color: transparent;
    }
    button[is='is-dv4-button']:focus{
      outline: none;
      box-shadow: 0 0 1pt 1pt var(--color-accent, lightblue);
    }
    button[is='is-dv4-button']:hover{
      color: var(--color-accent, lightblue);;
    }
    button[is='is-dv4-button']:active{
      transform: translate(1px,1px);
    }
    button[is='is-dv4-button'][primary]{
      background-color: var(--color-primary, darkblue);
      color: var(--color-primary-contrast, #fff);
    }
    button[is='is-dv4-button'] .dv4-icon-btn{
      height: 1rem;
      width: 1rem;
      margin-right: 0.75rem;
    }
    button[is='is-dv4-button'][primary] .dv4-icon-btn{
      fill: #fff;
    }
  </style>
`;

  //props
  const props$1={
    observedAttr:['role'],
    renderHtml:htmlButton$1
  };

  //create new custom element
  const Dv4IsButton = newButtonElement(props$1);

  //this extends button element
  customElements.define('is-dv4-button',Dv4IsButton,{extends: 'button'});

  function startGroup(group){
    console.group(group);
  }

  function closeGroup(){
    console.groupEnd();
  }

  function consoleLog(log){
    if (typeof log === 'object'){
      const groups = Object.keys(log);
      groups.map(g=>{
        const group = groups[g];
        startGroup(g);
        consoleLog(group);
        closeGroup();
      });
    }else{
      //log message
      console.log(log);
    }
  }

  var consoleLog$1 = (log, env='development')=>{
    if (env==='development'){
      consoleLog(log);
    }
  };

  var newCustomInput = ({shadowMode, renderHtml, observedAttr=[]})=>{
    // props used to construct
    // return new custom HTML element
    return class CustomInputElement extends HTMLElement{
      constructor(){
        super();
        if (!renderHtml) throw new Error ('CustomInputElement...renderHtml method not provided!')
        //attach shadowDOM
        if (shadowMode) this.attachShadow({mode:shadowMode});
        // internal value state
        this.value='';
      }
      /**
       * Lifecycle event when component is mounted to DOM
       */
      connectedCallback(){
        consoleLog$1(`${this.localName}...mounted to DOM!`, "development");
        // console.log(`${this.localName}...mounted to DOM!`)
        //init with props (attribute values
        this.render();
      }
      /**
       * Extract all attributes placed on the
       * element as props. It also includes
       * props defined in the constructor of the element
       */
      getPropsFromAttributes(){
        const props={
          type:'text'
        };
        for (let att of this.attributes){
          // console.log('att...', att)
          if (att.value){
            props[att.name] = att.value;
          } else {
            props[att.name] = 'true';
          }
        }
        //add value to props list
        return this.setValueProp(props)
      }
      /**
       * Set value based on attribute input
       * and user input
       * @param {Array} props
       */
      setValueProp(props){
        //add value to props list
        if (props['value'] && this.value===''){
          return props
        } else if(this.value) {
          props['value'] = this.value;
        } else {
          props['value'] =  '';
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
        consoleLog$1(`${this.localName}...render element`, "development");
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
        //attach event listeners
        this.attachListeners();
      }
      attachListeners(){
        this.handleInputChange();
      }
      handleInputChange(){
        //select input
        const input = this.shadowRoot.querySelector('input');
        //listen for onchange
        input['onchange'] = ({target})=>{
          if (target.value!==''){
            target.classList.add('changed');
          } else {
            target.classList.remove('changed');
          }
          //save new value
          this.value = target.value;
          //publish event outside this customElement
          const newEvent = new Event('onChange',{bubbles:true, composed:true});
          target.dispatchEvent(newEvent);
        };
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
        consoleLog$1(`${this.localName}...attribut changed...${name}=${newVal}`, "development");
        // call render on attribute changes
        this.defferRender();
      }
      /**
       * Call render function after all attrs initialized.
       * we do this by setting call at the end of the callstack
       */
      defferRender(){
        //clear previous if exists
        if (this.timeout){
          clearTimeout(this.timeout);
        }
        //set lastone
        this.timeout = setTimeout(()=>{
          this.render();
        },10);
      }
      /**
       * Lifecycle event when element is removed from DOM
       */
      disconnectedCallback(){
        consoleLog$1(`${this.localName}...removed...bye!bye!`, "development");
      }
    }
  };

  const shrinkCss=`
  top: calc(var(--input-label-size, 1rem) * -1.5);
  left: 0rem;
  font-size: calc(var(--input-label-size, 1rem) * 0.75);
  color: var(--input-main-color, #000);
`;

  const htmlInput = ({name='',
    label='Default', value='', message=''}) =>(`
  <style>
    :host{
      display: inline-flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    /*
    ::slotted(*){
      height: var(--btn-icon-height, 1rem);
      width: var(--btn-icon-width, 1rem);
      margin: var(--btn-icon-margin, 0rem 0.5rem 0rem 0rem) !important;
    }*/

    .dv4-input{
      flex:1;
      position:relative;
      margin: var(--input-margin, 1.25rem 0rem);
    }

    /* INPUT STYLES */
    input{
      display: block;
      background: none;
      background-color: var(--input-bg-color, #fff);
      color: var(--input-text-color, #333);
      font-size: var(--input-font-size, 1rem);
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid var(--input-sub-color, #ccc);
    }

    input:focus {
      outline: none;
    }
    /*
    label needs to BE AFTER
    input for this to work
    */
    input:focus ~ label {
      ${shrinkCss}
    }

    input.changed ~ label{
      ${shrinkCss}
    }

    /* LABEL STYLES */
    label{
      position: absolute;
      left: var(--input-label-left, 0.25rem);
      top: var(--input-label-top, -0.25rem);
      color: var(--input-sub-color, #ccc);
      font-size: var(--input-label-size, 1rem);
      font-weight: normal;
      pointer-events: none;
      transition: 300ms ease all;
    }

    label.shrink {
      ${shrinkCss}
    }

    /* MESSAGE */
    span{
      position: absolute;
      font-size: calc(var(--input-label-size, 1rem) * 0.75);
    }

  </style>
  <div class="dv4-input">
    <input type="text" id="${name}" name="${name}" value="${value}"/>
    ${value ==='' ? '<label>' : '<label class="shrink">'}
      ${label}
    </label>
    <span class="msg">${message}</span>
  </div>
`);

  //props
  const props$2={
    //these attributes are passed to htmlInput template
    observedAttr:['name', 'label', 'value', 'message'],
    shadowMode: 'open',
    renderHtml: htmlInput
  };

  //create new custom element
  const Dv4TextInput = newCustomInput(props$2);

  //register custom element
  customElements.define('dv4-text-input',Dv4TextInput);

  var newCustomModal = ({shadowMode, renderHtml, observedAttr=[]})=>{
    // props used to construct
    // return new custom HTML element
    return class CustomModalElement extends HTMLElement{
      constructor(){
        super();
        if (!renderHtml) throw new Error ('CustomModalElement...renderHtml method not provided!')
        //attach shadowDOM
        if (shadowMode) this.attachShadow({mode:shadowMode});
      }
      /**
       * Lifecycle event when component is mounted to DOM
       */
      connectedCallback(){
        consoleLog$1(`${this.localName}...mounted to DOM!`, "development");
        // console.log(`${this.localName}...mounted to DOM!`)
        //init with props (attribute values
        this.render();
      }
      /**
       * Extract all attributes placed on the
       * element as props. It also includes
       * props defined in the constructor of the element
       */
      getPropsFromAttributes(){
        const props={};
        for (let att of this.attributes){
          // console.log('att...', att)
          if (att.value){
            props[att.name] = att.value;
          } else {
            props[att.name] = 'true';
          }
        }
        //add value to props list
        return props
      }
      // /**
      //  * Set value based on attribute input
      //  * and user input
      //  * @param {Array} props
      //  */
      // setValueProp(props){
      //   //add value to props list
      //   if (props['value'] && this.value===''){
      //     return props
      //   } else if(this.value) {
      //     props['value'] = this.value
      //   } else {
      //     props['value'] =  ''
      //   }
      //   return props
      // }
      /**
       * Create shadow DOM (based on defs) and
       * append html markup based on provided element
       * attributes
       * @param {Object} props
       */
      render(){
        consoleLog$1(`${this.localName}...render element`, "development");
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
        //attach event listeners
        this.attachListeners();
        //load reference to modal
        this.modal = this.shadowRoot.querySelector('section');
      }
      attachListeners(){
        this.handleOnClose();
      }
      handleOnClose(){
        //select input
        const close = this.shadowRoot.querySelector('.dv4-modal-close-btn');
        if (!close) return
        //listen for onchange
        close['onclick'] = ({target})=>{
          consoleLog$1('Close button clicked...', "development");
          //publish event outside this customElement
          const newEvent = new Event('onClose',{bubbles:true, composed:true});
          target.dispatchEvent(newEvent);
        };
      }
      handleActiveAttr(value){
        if(this.modal){
          if (value){
            this.modal.classList.add('active');
          } else {
            this.modal.classList.remove('active');
          }
        }
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
        consoleLog$1(`${this.localName}...attribut changed...${name}=${newVal}`, "development");
        if (name==='active'){
          this.handleActiveAttr(newVal);
        }else {
          // call render on attribute changes
          this.defferRender();
        }
      }
      /**
       * Call render function after all attrs initialized.
       * we do this by setting call at the end of the callstack
       */
      defferRender(){
        //clear previous if exists
        if (this.timeout){
          clearTimeout(this.timeout);
        }
        //set lastone
        this.timeout = setTimeout(()=>{
          this.render();
        },10);
      }
      /**
       * Lifecycle event when element is removed from DOM
       */
      disconnectedCallback(){
        consoleLog$1(`${this.localName}...removed...bye!bye!`, "development");
      }
    }
  };

  var cssInfoModal = (img)=>(`
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
  /* display:flex; */
  visibility: visible;
  opacity:1;
  z-index: var(--modal-z-index, 99);
}

.dv4-modal-window{
  /* we use display:table to create
    2 cell layout and center right cell in the middle
  */
  position: relative;
  display: table;
  width: 65%;
  min-height: 50vh;
  max-height: 70vh;
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

.dv4-modal-image{
  display: table-cell;
  vertical-align: middle;
  width: var(--modal-img-width, 33.33333%);
  background-size: cover;
}

.dv4-modal-content{
  display: table-cell;
  vertical-align: top;
  padding: var(--modal-content-padding, 1.5rem);
  overflow: auto;
  ${!img ? '' : 'width: calc(100% - var(--modal-img-width, 33.33333%));'}
}

.dv4-modal-title{
  font-size: var(--modal-title-font-size, 2rem);
  line-height: calc(var(--modal-title-font-size, 2rem) * 1.125);
  text-transform: uppercase;
  color: var(--modal-title-color,#333);
  /* margin to facilitate button */
  margin-right: 2.75rem;
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
  column-count: var(--modal-content-column-cnt, 2);
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

.dv4-modal-close-btn{
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  font-size: 2rem;
  padding: 0rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  :host{
    font-size: 50%;
  }
  .dv4-modal-window{
    display: flex;
    width: 100vw;
    max-height: 100vh;
    border-radius: 0px;
  }
  .dv4-modal-content{
    height:100vh;
  }
}
</style>
`);

  var html = ({img, active,
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
`);

  var cssActionModal = ()=>(`
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
`);

  var htmlAction = ({active})=>(`

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
`);

  //props
  const info={
    //these attributes are passed to htmlInput template
    observedAttr:['active', 'title', 'subtitle','content','img'],
    shadowMode: 'open',
    renderHtml: html
  };

  const action={
    //these attributes are passed to htmlInput template
    observedAttr:['active'],
    shadowMode: 'open',
    renderHtml: htmlAction
  };

  //create new custom element
  const Dv4InfoModal = newCustomModal(info);
  const Dv4ActionModal = newCustomModal(action);

  //register custom element
  customElements.define('dv4-info-modal',Dv4InfoModal);
  customElements.define('dv4-action-modal',Dv4ActionModal);

  exports.Dv4ActionModal = Dv4ActionModal;
  exports.Dv4CustomButton = Dv4CustomButton;
  exports.Dv4InfoModal = Dv4InfoModal;
  exports.Dv4IsButton = Dv4IsButton;
  exports.Dv4TextInput = Dv4TextInput;

  return exports;

}({}));
