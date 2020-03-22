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
`