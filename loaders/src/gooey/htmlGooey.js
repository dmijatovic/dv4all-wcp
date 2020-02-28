/**
 * Import customElement 'dv4-scrim'
 * we use it as backpanel
 */
import '../scrim/index.js'

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
`)

export default htmlGooey