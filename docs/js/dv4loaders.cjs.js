var Dv4Loaders = (function (exports) {
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

  // import {consoleLog} from '@dv4all/log-utils'

  /**
   * Define customElement method. Checks if element
   * is already defined. If element alreadt defined it
   * logs warning that element is already defined.
   * @param {String} name
   * @param {Object} component
   * @param {Object} options
   */
  function defineCustomElement(name, component, options){
    const defined = customElements.get(name);
    if (defined){
      // consoleLog(`defineCustomElement...${name}...ALREADY DEFINED`)
      console.warn(`defineCustomElement...${name}...ALREADY DEFINED:`, defined);
      return false
    } else {
      if (options){
        customElements.define(name, component, options);
      }else{
        customElements.define(name, component);
      }
      return true
    }
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
        // console.log(`${this.localName}...mounted to DOM!`)
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
        // console.log(`${this.localName}...attribut changed...`, name, newVal)
        //reset render flag
        this.rendered = false;
        //render again
        this.render();
      }
      /**
       * Lifecycle event when element is removed from DOM
       */
      disconnectedCallback(){
        // console.log(`${this.localName}...removed...bye!bye!`)
      }
    }
  };

  let Environment = 'development';
  if (typeof ENV !== 'undefined'){
    Environment = ENV;
  }

  /**
   * HTML template of custom scrim element.
   * It has one slot that expects content
   */
  const htmlOverlay=`
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
      background-color: var(--overlay-bg-color, #fff);
      opacity: var(--overlay-bg-opacity, 0.75);
      z-index: var(--overlay-z-index, 9);
    }
  </style>
`;

  //SHARED lib

  //create open shadow DOM
  const props={
    shadowMode: 'open',
    renderHtml: htmlOverlay,
    //pass attributes to observe
    observedAttr: []
  };

  const Dv4Overlay = newCustomElement(props);

  defineCustomElement('dv4-overlay', Dv4Overlay);

  const htmlLoaderBody = (`
  <style>
    :host{
      display: block;
      position: absolute;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      font-family: var(--loader-body-font, sans-serif);
      font-size: var(--loader-body-ft-size, 1.5rem);
      font-weight: var(--loader-body-ft-weight, 400);
      color: var(--loader-body-color, #333);
      z-index: var(--loader-body-z-index, 9);
    }
  </style>
  <slot name="loader-body">Default body</slot>
  <slot name="loader-text">Default text</slot>
`);

  //SHARED lib

  //create open shadow DOM
  const props$1={
    shadowMode: 'open',
    renderHtml: htmlLoaderBody,
    observedAttr: []
  };

  const Dv4LoaderBody = newCustomElement(props$1);

  defineCustomElement('dv4-loader-body', Dv4LoaderBody);

  //SHARED customElements
  /**
   * Return class containing definitions of new loader custom element.
   * @param {Object} props = {
   *  name: {String} name of customElement,
   *  shadowMode: {ENUM} open, closed, null,
   *  htmlTemplate: {Function} returns html
   * }
   */
  var newCustomLoader = ({ bodyHtml='default content', styles, observedAttr=[]})=>{
    // props used to construct
    // return new custom HTML element
    return class CustomLoaderElement extends HTMLElement{
      constructor(){
        super();
        if (!bodyHtml) throw new Error ('CustomLoaderElement...bodyHtml not provided!')
        //attach shadowDOM
        this.attachShadow({mode:'open'});
        this.rendered = false;
      }
      /**
       * Lifecycle event when component is mounted to DOM
       */
      connectedCallback(){
        // console.log(`${this.localName}...mounted to DOM!`)
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
        // get props
        const {overlay} = this.getPropsFromAttributes();
        //reset to empty
        this.shadowRoot.innerHTML='';
        //append styles element
        if (styles){
          const styleNode = document.createElement('style');
          styleNode.type = 'text/css';
          styleNode.innerHTML = styles;
          this.shadowRoot.appendChild(styleNode);
        }
        //append overlay
        if (overlay) {
          const overlayNode = new Dv4Overlay();
          this.shadowRoot.appendChild(overlayNode);
        }
        //apend body
        const bodyNode = new Dv4LoaderBody();
        bodyNode.innerHTML = bodyHtml;
        this.shadowRoot.appendChild(bodyNode);
        //set rendered flag
        this.rendered = true;
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
        // console.log(`${this.localName}...attribut changed...`, name, newVal)
        //reset render flag
        this.rendered = false;
        //render again
        this.render();
      }
      /**
       * Lifecycle event when element is removed from DOM
       */
      disconnectedCallback(){
        // console.log(`${this.localName}...removed...bye!bye!`)
      }
    }
  };

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml=`
<div slot="loader-body" class="la-ball-spin-clockwise">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles = `
/* BASIC STYLES FOR ALL LOADERS */

:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}
.la-ball-spin-clockwise,
.la-ball-spin-clockwise > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-ball-spin-clockwise {
    display: block;
    width: var(--ball-spin-size, 3rem);
    height: var(--ball-spin-size, 3rem);
    margin: 1rem auto;
    font-size: 0;
    color: var(--ball-spin-color, #333);
}
.la-ball-spin-clockwise > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-ball-spin-clockwise > div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--ball-size, 0.5rem);
    height: var(--ball-size, 0.5rem);
    margin-top: -4px;
    margin-left: -4px;
    border-radius: 100%;
    -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;
       -moz-animation: ball-spin-clockwise 1s infinite ease-in-out;
         -o-animation: ball-spin-clockwise 1s infinite ease-in-out;
            animation: ball-spin-clockwise 1s infinite ease-in-out;
}
.la-ball-spin-clockwise > div:nth-child(1) {
    top: 5%;
    left: 50%;
    -webkit-animation-delay: -.875s;
       -moz-animation-delay: -.875s;
         -o-animation-delay: -.875s;
            animation-delay: -.875s;
}
.la-ball-spin-clockwise > div:nth-child(2) {
    top: 18.1801948466%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.75s;
       -moz-animation-delay: -.75s;
         -o-animation-delay: -.75s;
            animation-delay: -.75s;
}
.la-ball-spin-clockwise > div:nth-child(3) {
    top: 50%;
    left: 95%;
    -webkit-animation-delay: -.625s;
       -moz-animation-delay: -.625s;
         -o-animation-delay: -.625s;
            animation-delay: -.625s;
}
.la-ball-spin-clockwise > div:nth-child(4) {
    top: 81.8198051534%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.5s;
       -moz-animation-delay: -.5s;
         -o-animation-delay: -.5s;
            animation-delay: -.5s;
}
.la-ball-spin-clockwise > div:nth-child(5) {
    top: 94.9999999966%;
    left: 50.0000000005%;
    -webkit-animation-delay: -.375s;
       -moz-animation-delay: -.375s;
         -o-animation-delay: -.375s;
            animation-delay: -.375s;
}
.la-ball-spin-clockwise > div:nth-child(6) {
    top: 81.8198046966%;
    left: 18.1801949248%;
    -webkit-animation-delay: -.25s;
       -moz-animation-delay: -.25s;
         -o-animation-delay: -.25s;
            animation-delay: -.25s;
}
.la-ball-spin-clockwise > div:nth-child(7) {
    top: 49.9999750815%;
    left: 5.0000051215%;
    -webkit-animation-delay: -.125s;
       -moz-animation-delay: -.125s;
         -o-animation-delay: -.125s;
            animation-delay: -.125s;
}
.la-ball-spin-clockwise > div:nth-child(8) {
    top: 18.179464974%;
    left: 18.1803700518%;
    -webkit-animation-delay: 0s;
       -moz-animation-delay: 0s;
         -o-animation-delay: 0s;
            animation-delay: 0s;
}
/*
 * Animation
 */
@-webkit-keyframes ball-spin-clockwise {
    0%,
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 0;
        -webkit-transform: scale(0);
                transform: scale(0);
    }
}
@-moz-keyframes ball-spin-clockwise {
    0%,
    100% {
        opacity: 1;
        -moz-transform: scale(1);
             transform: scale(1);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 0;
        -moz-transform: scale(0);
             transform: scale(0);
    }
}
@-o-keyframes ball-spin-clockwise {
    0%,
    100% {
        opacity: 1;
        -o-transform: scale(1);
           transform: scale(1);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 0;
        -o-transform: scale(0);
           transform: scale(0);
    }
}
@keyframes ball-spin-clockwise {
    0%,
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
           -moz-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 0;
        -webkit-transform: scale(0);
           -moz-transform: scale(0);
             -o-transform: scale(0);
                transform: scale(0);
    }
}
`;

  //SHARED lib

  // default props / attributes
  const props$2 = {
    //loader body html
    bodyHtml,
    //styles
    styles,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderBallSpin = newCustomLoader(props$2);

  //register custom element
  defineCustomElement('dv4-loader-ball-spin', Dv4LoaderBallSpin);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$1=`
<div slot="loader-body" class="ball-triangle-path">
  <div></div>
  <div></div>
  <div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  var styles$1 = `
/* BASIC STYLES FOR ALL LOADERS */

:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

/* BALL TRIANGLE */
@keyframes ball-triangle-path-1 {
  33% {
    transform: translate(25px, -50px);
  }
  66% {
    transform: translate(50px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes ball-triangle-path-2 {
  33% {
    transform: translate(25px, 50px);
  }
  66% {
    transform: translate(-25px, 50px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes ball-triangle-path-3 {
  33% {
    transform: translate(-50px, 0px);
  }
  66% {
    transform: translate(-25px, -50px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.ball-triangle-path {
  position: relative;
  width: var(--ball-triangle-size, 4rem);
  height: var(--ball-triangle-size, 4rem);
  margin: 1rem auto;
}

.ball-triangle-path > div:nth-child(1) {
  animation-name: ball-triangle-path-1;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.ball-triangle-path > div:nth-child(2) {
  animation-name: ball-triangle-path-2;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.ball-triangle-path > div:nth-child(3) {
  animation-name: ball-triangle-path-3;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.ball-triangle-path > div {
  animation-fill-mode: both;
  position: absolute;
  width: var(--ball-size, 0.75rem);
  height: var(--ball-size, 0.75rem);
  border-radius: 100%;
  border: 1px solid var(--ball-color, #333);
  background-color: var(--ball-color, #333);
}
.ball-triangle-path > div:nth-of-type(1) {
  top: 50px;
}
.ball-triangle-path > div:nth-of-type(2) {
  left: 25px;
}
.ball-triangle-path > div:nth-of-type(3) {
  top: 50px;
  left: 50px;
}
`;

  //SHARED lib

  // default props / attributes
  const props$3 = {
    //loader body html
    bodyHtml: bodyHtml$1,
    //styles
    styles: styles$1,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderBallTriangle = newCustomLoader(props$3);

  //register custom element
  defineCustomElement('dv4-loader-ball-triangle', Dv4LoaderBallTriangle);

  const htmlClimbingDot = `
<div slot="loader-body" class="la-ball-climbing-dot">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div slot="loader-text">
  <slot></slot>
</div>
`;

  const cssBallClimbingDot=`
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-ball-climbing-dot,
.la-ball-climbing-dot > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-ball-climbing-dot {
    display: block;
    font-size: 0;
    color: var(--climbing-dot-color, #333);
}

.la-ball-climbing-dot > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-ball-climbing-dot {
    width: var(--loader-width, 6rem);
    height: var(--loader-height, 3rem);
    margin: var(--loader-margin, 1.5rem 0.25rem);
}
.la-ball-climbing-dot > div:nth-child(1) {
    position: absolute;
    bottom: 32%;
    left: calc(var(--climbing-dot-size, 1rem) * 1.5);
    width: var(--climbing-dot-size, 1rem);
    height: var(--climbing-dot-size, 1rem);
    border-radius: 100%;
    -webkit-transform-origin: center bottom;
       -moz-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
         -o-transform-origin: center bottom;
            transform-origin: center bottom;
    -webkit-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
       -moz-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
         -o-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
            animation: ball-climbing-dot-jump .6s ease-in-out infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)) {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(var(--climbing-dot-size, 1rem) * 1.25);
    height: 2px;
    border-radius: 0;
    -webkit-transform: translate(60%, 0);
       -moz-transform: translate(60%, 0);
        -ms-transform: translate(60%, 0);
         -o-transform: translate(60%, 0);
            transform: translate(60%, 0);
    -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
       -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
         -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
            animation: ball-climbing-dot-steps 1.8s linear infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(2) {
    -webkit-animation-delay: 0ms;
       -moz-animation-delay: 0ms;
         -o-animation-delay: 0ms;
            animation-delay: 0ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(3) {
    -webkit-animation-delay: -600ms;
       -moz-animation-delay: -600ms;
         -o-animation-delay: -600ms;
            animation-delay: -600ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(4) {
    -webkit-animation-delay: -1200ms;
       -moz-animation-delay: -1200ms;
         -o-animation-delay: -1200ms;
            animation-delay: -1200ms;
}
/* NOT USED
.la-ball-climbing-dot.la-sm {
    width: 20px;
    height: 16px;
}
.la-ball-climbing-dot.la-sm > div:nth-child(1) {
    width: 6px;
    height: 6px;
}
.la-ball-climbing-dot.la-sm > div:not(:nth-child(1)) {
    width: 6px;
    height: 1px;
}
.la-ball-climbing-dot.la-2x {
    width: 84px;
    height: 64px;
}
.la-ball-climbing-dot.la-2x > div:nth-child(1) {
    width: 28px;
    height: 28px;
}
.la-ball-climbing-dot.la-2x > div:not(:nth-child(1)) {
    width: 28px;
    height: 4px;
}
.la-ball-climbing-dot.la-3x {
    width: 126px;
    height: 96px;
}
.la-ball-climbing-dot.la-3x > div:nth-child(1) {
    width: 42px;
    height: 42px;
}
.la-ball-climbing-dot.la-3x > div:not(:nth-child(1)) {
    width: 42px;
    height: 6px;
}
*/
/*
 * Animations
 */
@-webkit-keyframes ball-climbing-dot-jump {
    0% {
        -webkit-transform: scale(1, .7);
                transform: scale(1, .7);
    }
    20% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    40% {
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    80% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    90% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    100% {
        -webkit-transform: scale(1, .7);
                transform: scale(1, .7);
    }
}
@-moz-keyframes ball-climbing-dot-jump {
    0% {
        -moz-transform: scale(1, .7);
             transform: scale(1, .7);
    }
    20% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    40% {
        -moz-transform: scale(1, 1);
             transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -moz-transform: scale(1, 1);
             transform: scale(1, 1);
    }
    80% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    90% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    100% {
        -moz-transform: scale(1, .7);
             transform: scale(1, .7);
    }
}
@-o-keyframes ball-climbing-dot-jump {
    0% {
        -o-transform: scale(1, .7);
           transform: scale(1, .7);
    }
    20% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    40% {
        -o-transform: scale(1, 1);
           transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -o-transform: scale(1, 1);
           transform: scale(1, 1);
    }
    80% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    90% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    100% {
        -o-transform: scale(1, .7);
           transform: scale(1, .7);
    }
}
@keyframes ball-climbing-dot-jump {
    0% {
        -webkit-transform: scale(1, .7);
           -moz-transform: scale(1, .7);
             -o-transform: scale(1, .7);
                transform: scale(1, .7);
    }
    20% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    40% {
        -webkit-transform: scale(1, 1);
           -moz-transform: scale(1, 1);
             -o-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -webkit-transform: scale(1, 1);
           -moz-transform: scale(1, 1);
             -o-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    80% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    90% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    100% {
        -webkit-transform: scale(1, .7);
           -moz-transform: scale(1, .7);
             -o-transform: scale(1, .7);
                transform: scale(1, .7);
    }
}
@-webkit-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@-moz-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@-o-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}

`;

  //SHARED lib

  // default props / attributes
  const props$4 = {
    //loader body html
    bodyHtml: htmlClimbingDot,
    //styles
    styles: cssBallClimbingDot,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderClimbingDot = newCustomLoader(props$4);

  //register custom element
  defineCustomElement('dv4-loader-climbing-dot', Dv4LoaderClimbingDot);

  /**
   * Donut loader html markup.
   */
  const htmlDonut = `
<div slot="loader-body">
  <div class="donut-loader"></div>
</div>
<div slot="loader-text" class="donut-text">
  <slot></slot>
</div> 
`;

  var styles$2 = `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

/* DONUT LOADER */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.donut-loader {
  border: var(--donut-border-width, 0.75rem) solid var(--donut-border-bg-color, #f3f3f3);
  border-radius: 50%;
  border-top: var(--donut-border-width, 0.75rem) solid var(--donut-border-color, #333);
  width: var(--donut-size, 4rem);
  height: var(--donut-size, 4rem);
  animation: spin var(--donut-rotation-speed-sec, 1.5s) linear infinite;
}

.donut-text{
  text-align: center;
}
`;

  //SHARED lib

  // default props / attributes
  const props$5 = {
    //loader body html
    bodyHtml: htmlDonut,
    //styles
    styles: styles$2,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderDonut = newCustomLoader(props$5);

  //register custom element
  defineCustomElement('dv4-loader-donut', Dv4LoaderDonut);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$2=`
<div slot="loader-body" class="la-line-scale">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles$3 = `
/* BASIC STYLES FOR ALL LOADERS */

:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}
.la-line-scale,
.la-line-scale > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-line-scale {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: var(--line-scale-size, 2rem);
  width: calc(var(--line-scale-size, 2rem) * 1.25);
  margin: 1rem auto;
  color: var(--line-scale-color, #333);
  font-size: 0;
}
.la-line-scale > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-line-scale > div {
    width: var(--line-bar-width, 0.25rem);
    height: var(--line-scale-size, 2rem);
    margin: 2px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;
    -webkit-animation: line-scale 1.2s infinite ease;
       -moz-animation: line-scale 1.2s infinite ease;
         -o-animation: line-scale 1.2s infinite ease;
            animation: line-scale 1.2s infinite ease;
}
.la-line-scale > div:nth-child(1) {
    -webkit-animation-delay: -1.2s;
       -moz-animation-delay: -1.2s;
         -o-animation-delay: -1.2s;
            animation-delay: -1.2s;
}
.la-line-scale > div:nth-child(2) {
    -webkit-animation-delay: -1.1s;
       -moz-animation-delay: -1.1s;
         -o-animation-delay: -1.1s;
            animation-delay: -1.1s;
}
.la-line-scale > div:nth-child(3) {
    -webkit-animation-delay: -1s;
       -moz-animation-delay: -1s;
         -o-animation-delay: -1s;
            animation-delay: -1s;
}
.la-line-scale > div:nth-child(4) {
    -webkit-animation-delay: -.9s;
       -moz-animation-delay: -.9s;
         -o-animation-delay: -.9s;
            animation-delay: -.9s;
}
.la-line-scale > div:nth-child(5) {
    -webkit-animation-delay: -.8s;
       -moz-animation-delay: -.8s;
         -o-animation-delay: -.8s;
            animation-delay: -.8s;
}
/*
 * Animation
 */
@-webkit-keyframes line-scale {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(.4);
                transform: scaleY(.4);
    }
    20% {
        -webkit-transform: scaleY(1);
                transform: scaleY(1);
    }
}
@-moz-keyframes line-scale {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(.4);
           -moz-transform: scaleY(.4);
                transform: scaleY(.4);
    }
    20% {
        -webkit-transform: scaleY(1);
           -moz-transform: scaleY(1);
                transform: scaleY(1);
    }
}
@-o-keyframes line-scale {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(.4);
             -o-transform: scaleY(.4);
                transform: scaleY(.4);
    }
    20% {
        -webkit-transform: scaleY(1);
             -o-transform: scaleY(1);
                transform: scaleY(1);
    }
}
@keyframes line-scale {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(.4);
           -moz-transform: scaleY(.4);
             -o-transform: scaleY(.4);
                transform: scaleY(.4);
    }
    20% {
        -webkit-transform: scaleY(1);
           -moz-transform: scaleY(1);
             -o-transform: scaleY(1);
                transform: scaleY(1);
    }
}
`;

  //SHARED lib

  // default props / attributes
  const props$6 = {
    //loader body html
    bodyHtml: bodyHtml$2,
    //styles
    styles: styles$3,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderLineScale = newCustomLoader(props$6);

  //register custom element
  defineCustomElement('dv4-loader-line-scale', Dv4LoaderLineScale);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$3=`
<div slot="loader-body" class="la-packman">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles$4 = `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-packman,
.la-packman > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-packman {
    display: block;
    height: var(--packman-size, 2rem);
    width: calc(var(--packman-size, 2rem) * 1.5);
    font-size: 0;
    color: var(--packman-color, #333);
    margin: 1rem 0rem;
}

.la-packman > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}

.la-packman > div:nth-child(1),
.la-packman > div:nth-child(2) {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  background: transparent;
  border-style: solid;
  border-width: calc(var(--packman-size, 2rem) * 0.5);
  border-right-color: transparent;
  border-radius: 100%;
  -webkit-animation: pacman-rotate-half-up .5s 0s infinite;
      -moz-animation: pacman-rotate-half-up .5s 0s infinite;
        -o-animation: pacman-rotate-half-up .5s 0s infinite;
          animation: pacman-rotate-half-up .5s 0s infinite;
}
.la-packman > div:nth-child(2) {
    /*margin-top: -32px;*/
    -webkit-animation-name: pacman-rotate-half-down;
       -moz-animation-name: pacman-rotate-half-down;
         -o-animation-name: pacman-rotate-half-down;
            animation-name: pacman-rotate-half-down;
}
.la-packman > div:nth-child(3),
.la-packman > div:nth-child(4),
.la-packman > div:nth-child(5),
.la-packman > div:nth-child(6) {
    position: absolute;
    top: 50%;
    left: 200%;
    width: calc(var(--packman-size, 2rem) * 0.25);
    height: calc(var(--packman-size, 2rem) * 0.25);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: pacman-balls 2s 0s infinite linear;
       -moz-animation: pacman-balls 2s 0s infinite linear;
         -o-animation: pacman-balls 2s 0s infinite linear;
            animation: pacman-balls 2s 0s infinite linear;
}
.la-packman > div:nth-child(3) {
    -webkit-animation-delay: -1.44s;
       -moz-animation-delay: -1.44s;
         -o-animation-delay: -1.44s;
            animation-delay: -1.44s;
}
.la-packman > div:nth-child(4) {
    -webkit-animation-delay: -1.94s;
       -moz-animation-delay: -1.94s;
         -o-animation-delay: -1.94s;
            animation-delay: -1.94s;
}
.la-packman > div:nth-child(5) {
    -webkit-animation-delay: -2.44s;
       -moz-animation-delay: -2.44s;
         -o-animation-delay: -2.44s;
            animation-delay: -2.44s;
}
.la-packman > div:nth-child(6) {
    -webkit-animation-delay: -2.94s;
       -moz-animation-delay: -2.94s;
         -o-animation-delay: -2.94s;
            animation-delay: -2.94s;
}

/*
 * Animations
 */
@-webkit-keyframes pacman-rotate-half-up {
    0%,
    100% {
        -webkit-transform: rotate(270deg);
                transform: rotate(270deg);
    }
    50% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@-moz-keyframes pacman-rotate-half-up {
    0%,
    100% {
        -moz-transform: rotate(270deg);
             transform: rotate(270deg);
    }
    50% {
        -moz-transform: rotate(360deg);
             transform: rotate(360deg);
    }
}
@-o-keyframes pacman-rotate-half-up {
    0%,
    100% {
        -o-transform: rotate(270deg);
           transform: rotate(270deg);
    }
    50% {
        -o-transform: rotate(360deg);
           transform: rotate(360deg);
    }
}
@keyframes pacman-rotate-half-up {
    0%,
    100% {
        -webkit-transform: rotate(270deg);
           -moz-transform: rotate(270deg);
             -o-transform: rotate(270deg);
                transform: rotate(270deg);
    }
    50% {
        -webkit-transform: rotate(360deg);
           -moz-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@-webkit-keyframes pacman-rotate-half-down {
    0%,
    100% {
        -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
    }
    50% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
}
@-moz-keyframes pacman-rotate-half-down {
    0%,
    100% {
        -moz-transform: rotate(90deg);
             transform: rotate(90deg);
    }
    50% {
        -moz-transform: rotate(0deg);
             transform: rotate(0deg);
    }
}
@-o-keyframes pacman-rotate-half-down {
    0%,
    100% {
        -o-transform: rotate(90deg);
           transform: rotate(90deg);
    }
    50% {
        -o-transform: rotate(0deg);
           transform: rotate(0deg);
    }
}
@keyframes pacman-rotate-half-down {
    0%,
    100% {
        -webkit-transform: rotate(90deg);
           -moz-transform: rotate(90deg);
             -o-transform: rotate(90deg);
                transform: rotate(90deg);
    }
    50% {
        -webkit-transform: rotate(0deg);
           -moz-transform: rotate(0deg);
             -o-transform: rotate(0deg);
                transform: rotate(0deg);
    }
}
@-webkit-keyframes pacman-balls {
    0% {
        left: 200%;
        opacity: 0;
        -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
    }
    5% {
        opacity: .5;
    }
    66% {
        opacity: 1;
    }
    67% {
        opacity: 0;
    }
    100% {
        left: 0;
        -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
    }
}
@-moz-keyframes pacman-balls {
    0% {
        left: 200%;
        opacity: 0;
        -moz-transform: translateY(-50%);
             transform: translateY(-50%);
    }
    5% {
        opacity: .5;
    }
    66% {
        opacity: 1;
    }
    67% {
        opacity: 0;
    }
    100% {
        left: 0;
        -moz-transform: translateY(-50%);
             transform: translateY(-50%);
    }
}
@-o-keyframes pacman-balls {
    0% {
        left: 200%;
        opacity: 0;
        -o-transform: translateY(-50%);
           transform: translateY(-50%);
    }
    5% {
        opacity: .5;
    }
    66% {
        opacity: 1;
    }
    67% {
        opacity: 0;
    }
    100% {
        left: 0;
        -o-transform: translateY(-50%);
           transform: translateY(-50%);
    }
}
@keyframes pacman-balls {
  0% {
      left: 200%;
      opacity: 0;
      -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
              transform: translateY(-50%);
  }
  5% {
      opacity: .5;
  }
  66% {
      opacity: 1;
  }
  67% {
      opacity: 0;
  }
  100% {
      left: 0;
      -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
              transform: translateY(-50%);
  }
}
`;

  //SHARED lib

  // default props / attributes
  const props$7 = {
    //loader body html
    bodyHtml: bodyHtml$3,
    //styles
    styles: styles$4,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderPackman = newCustomLoader(props$7);

  //register custom element
  defineCustomElement('dv4-loader-packman', Dv4LoaderPackman);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$4=`
<div slot="loader-body" class="la-square-jelly-box">
	<div></div>
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles$5 = `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-square-jelly-box,
.la-square-jelly-box > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-square-jelly-box {
    display: block;
    font-size: 0;
    width: var(--square-jelly-size, 3rem);
    height: var(--square-jelly-size, 3rem);
    color: var(--square-jelly-color, #333);
    margin: var(--square-jelly-margin, 1rem auto);
}
.la-square-jelly-box > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-square-jelly-box > div:nth-child(1),
.la-square-jelly-box > div:nth-child(2) {
    position: absolute;
    left: 0;
    width: 100%;
}
.la-square-jelly-box > div:nth-child(1) {
    top: -25%;
    z-index: 1;
    height: 100%;
    border-radius: 10%;
    -webkit-animation: square-jelly-box-animate .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-animate .6s -.1s linear infinite;
         -o-animation: square-jelly-box-animate .6s -.1s linear infinite;
            animation: square-jelly-box-animate .6s -.1s linear infinite;
}
.la-square-jelly-box > div:nth-child(2) {
    bottom: -9%;
    height: 10%;
    background: #000;
    border-radius: 50%;
    opacity: .2;
    -webkit-animation: square-jelly-box-shadow .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-shadow .6s -.1s linear infinite;
         -o-animation: square-jelly-box-shadow .6s -.1s linear infinite;
            animation: square-jelly-box-shadow .6s -.1s linear infinite;
}
/*
 * Animations
 */
@-webkit-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -webkit-transform: translateY(25%) rotate(22.5deg);
                transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -webkit-transform: translateY(50%) scale(1, .9) rotate(45deg);
                transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -webkit-transform: translateY(25%) rotate(67.5deg);
                transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -webkit-transform: translateY(0) rotate(90deg);
                transform: translateY(0) rotate(90deg);
    }
}
@-moz-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -moz-transform: translateY(25%) rotate(22.5deg);
             transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -moz-transform: translateY(50%) scale(1, .9) rotate(45deg);
             transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -moz-transform: translateY(25%) rotate(67.5deg);
             transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -moz-transform: translateY(0) rotate(90deg);
             transform: translateY(0) rotate(90deg);
    }
}
@-o-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -o-transform: translateY(25%) rotate(22.5deg);
           transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -o-transform: translateY(50%) scale(1, .9) rotate(45deg);
           transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -o-transform: translateY(25%) rotate(67.5deg);
           transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -o-transform: translateY(0) rotate(90deg);
           transform: translateY(0) rotate(90deg);
    }
}
@keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -webkit-transform: translateY(25%) rotate(22.5deg);
           -moz-transform: translateY(25%) rotate(22.5deg);
             -o-transform: translateY(25%) rotate(22.5deg);
                transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -webkit-transform: translateY(50%) scale(1, .9) rotate(45deg);
           -moz-transform: translateY(50%) scale(1, .9) rotate(45deg);
             -o-transform: translateY(50%) scale(1, .9) rotate(45deg);
                transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -webkit-transform: translateY(25%) rotate(67.5deg);
           -moz-transform: translateY(25%) rotate(67.5deg);
             -o-transform: translateY(25%) rotate(67.5deg);
                transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -webkit-transform: translateY(0) rotate(90deg);
           -moz-transform: translateY(0) rotate(90deg);
             -o-transform: translateY(0) rotate(90deg);
                transform: translateY(0) rotate(90deg);
    }
}
@-webkit-keyframes square-jelly-box-shadow {
    50% {
        -webkit-transform: scale(1.25, 1);
                transform: scale(1.25, 1);
    }
}
@-moz-keyframes square-jelly-box-shadow {
    50% {
        -moz-transform: scale(1.25, 1);
             transform: scale(1.25, 1);
    }
}
@-o-keyframes square-jelly-box-shadow {
    50% {
        -o-transform: scale(1.25, 1);
           transform: scale(1.25, 1);
    }
}
@keyframes square-jelly-box-shadow {
    50% {
        -webkit-transform: scale(1.25, 1);
           -moz-transform: scale(1.25, 1);
             -o-transform: scale(1.25, 1);
                transform: scale(1.25, 1);
    }
}
`;

  //SHARED lib

  // default props / attributes
  const props$8 = {
    //loader body html
    bodyHtml: bodyHtml$4,
    //styles
    styles: styles$5,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderSquareJelly = newCustomLoader(props$8);

  //register custom element
  defineCustomElement('dv4-loader-square-jelly', Dv4LoaderSquareJelly);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$5=`
<div slot="loader-body" class="la-square-spin">
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles$6 = `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-square-spin,
.la-square-spin > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-square-spin {
    display: block;
    font-size: 0;
    width: var(--square-spin-size, 3rem);
    height: var(--square-spin-size, 3rem);
    color: var(--square-spin-color, #333);
    margin: var(--square-spin-margin, 1rem auto);
}

.la-square-spin > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-square-spin > div {
    width: 100%;
    height: 100%;
    border-radius: 0;
    -webkit-animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite;
       -moz-animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite;
         -o-animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite;
            animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite;
}
/*
 * Animation
 */
@-webkit-keyframes square-spin {
    0% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
                transform: perspective(100px) rotateX(0) rotateY(0);
    }
    25% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
                transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
                transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
                transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
                transform: perspective(100px) rotateX(0) rotateY(360deg);
    }
}
@-moz-keyframes square-spin {
    0% {
        -moz-transform: perspective(100px) rotateX(0) rotateY(0);
             transform: perspective(100px) rotateX(0) rotateY(0);
    }
    25% {
        -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
             transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
        -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
             transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
             transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
        -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
             transform: perspective(100px) rotateX(0) rotateY(360deg);
    }
}
@-o-keyframes square-spin {
    0% {
        transform: perspective(100px) rotateX(0) rotateY(0);
    }
    25% {
        transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
        transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
        transform: perspective(100px) rotateX(0) rotateY(360deg);
    }
}
@keyframes square-spin {
    0% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
           -moz-transform: perspective(100px) rotateX(0) rotateY(0);
                transform: perspective(100px) rotateX(0) rotateY(0);
    }
    25% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
           -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
                transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
           -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
                transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
           -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
                transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
        -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
           -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
                transform: perspective(100px) rotateX(0) rotateY(360deg);
    }
}
`;

  //SHARED lib

  // default props / attributes
  const props$9 = {
    //loader body html
    bodyHtml: bodyHtml$5,
    //styles
    styles: styles$6,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderSquareSpin = newCustomLoader(props$9);

  //register custom element
  defineCustomElement('dv4-loader-square-spin', Dv4LoaderSquareSpin);

  /**
   * HTML body of loader.
   * REQUIREMENTS!
   * Template loader element has 2 slots:
   * 1. slot="loader-body"
   * 2. slot="loader-text" *
   */
  const bodyHtml$6=`
<div slot="loader-body" class="la-timer">
	<div></div>
</div>
<div slot="loader-text">
  <slot></slot>
 </div>
`;

  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */
  var styles$7 = `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-timer,
.la-timer > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-timer {
    display: block;
    font-size: 0;
    width: var(--loader-timer-size, 4rem);
    height: var(--loader-timer-size, 4rem);
    color: var(--loader-timer-color, #333);
    margin: var(--loader-timer-margin, 1rem auto);
}

.la-timer > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}

.la-timer > div {
    width: var(--loader-timer-size, 4rem);
    height: var(--loader-timer-size, 4rem);
    background: transparent;
    border-width: 2px;
    border-radius: 100%;
}
.la-timer > div:before,
.la-timer > div:after {
    position: absolute;
    top: calc(var(--loader-timer-size, 4rem) * 0.465);
    left: calc(var(--loader-timer-size, 4rem) * 0.465);
    display: block;
    width: 2px;
    margin-top: -1px;
    margin-left: -1px;
    content: "";
    background: currentColor;
    border-radius: 2px;
    -webkit-transform-origin: 1px 1px 0;
       -moz-transform-origin: 1px 1px 0;
        -ms-transform-origin: 1px 1px 0;
         -o-transform-origin: 1px 1px 0;
            transform-origin: 1px 1px 0;
    -webkit-animation: timer-loader 1250ms infinite linear;
       -moz-animation: timer-loader 1250ms infinite linear;
         -o-animation: timer-loader 1250ms infinite linear;
            animation: timer-loader 1250ms infinite linear;
    -webkit-animation-delay: -625ms;
       -moz-animation-delay: -625ms;
         -o-animation-delay: -625ms;
            animation-delay: -625ms;
}
.la-timer > div:before {
  height: calc(var(--loader-timer-size, 3rem) * 0.425);
}
.la-timer > div:after {
  height: calc(var(--loader-timer-size, 3rem) * 0.25);
  -webkit-animation-duration: 15s;
      -moz-animation-duration: 15s;
        -o-animation-duration: 15s;
          animation-duration: 15s;
  -webkit-animation-delay: -7.5s;
      -moz-animation-delay: -7.5s;
        -o-animation-delay: -7.5s;
          animation-delay: -7.5s;
}
/*
 * Animation
 */
@-webkit-keyframes timer-loader {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@-moz-keyframes timer-loader {
    0% {
        -moz-transform: rotate(0deg);
             transform: rotate(0deg);
    }
    100% {
        -moz-transform: rotate(360deg);
             transform: rotate(360deg);
    }
}
@-o-keyframes timer-loader {
    0% {
        -o-transform: rotate(0deg);
           transform: rotate(0deg);
    }
    100% {
        -o-transform: rotate(360deg);
           transform: rotate(360deg);
    }
}
@keyframes timer-loader {
    0% {
        -webkit-transform: rotate(0deg);
           -moz-transform: rotate(0deg);
             -o-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
           -moz-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
`;

  //SHARED lib

  // default props / attributes
  const props$a = {
    //loader body html
    bodyHtml: bodyHtml$6,
    //styles
    styles: styles$7,
    //pass attributes to observe
    observedAttr: ['overlay','hide']
  };

  //create new customElement
  const Dv4LoaderTimer = newCustomLoader(props$a);

  //register custom element
  defineCustomElement('dv4-loader-timer', Dv4LoaderTimer);

  exports.Dv4ClimbingDot = Dv4LoaderClimbingDot;
  exports.Dv4LoaderBallSpin = Dv4LoaderBallSpin;
  exports.Dv4LoaderBallTriangle = Dv4LoaderBallTriangle;
  exports.Dv4LoaderDonut = Dv4LoaderDonut;
  exports.Dv4LoaderLineScale = Dv4LoaderLineScale;
  exports.Dv4LoaderPackman = Dv4LoaderPackman;
  exports.Dv4LoaderSquareJelly = Dv4LoaderSquareJelly;
  exports.Dv4LoaderSquareSpin = Dv4LoaderSquareSpin;
  exports.Dv4LoaderTimer = Dv4LoaderTimer;

  return exports;

}({}));
