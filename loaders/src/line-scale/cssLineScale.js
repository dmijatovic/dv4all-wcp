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
`