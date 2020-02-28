/**
 * Import customElement 'dv4-scrim'
 * we use it as backpanel
 */
const htmlBallTriangle = props => (`
  <style>
    /* BASIC STYLES FOR ALL LOADERS */

    :host{
      display: block;
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

  </style>
  ${ props['overlay'] === 'true' ? '<dv4-overlay></dv4-overlay>' : '' }
  <dv4-loader-body>
    <div slot="loader-body" class="ball-triangle-path">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div slot="loader-text">
      <slot></slot>
    </div>
  </dv4-loader-body>
`)

export default htmlBallTriangle