
export default ({title='Equalizer'})=>(`
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
`)