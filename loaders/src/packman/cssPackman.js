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
`