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
`