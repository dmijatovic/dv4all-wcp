/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
export default `
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
`