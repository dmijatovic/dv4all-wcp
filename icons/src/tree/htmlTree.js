
export default ({title='Tree'})=>(`
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
<path d="M61 48h-1v-13c0-3.86-3.14-7-7-7h-17v-8h1c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-10c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h1v8h-17c-3.86 0-7 3.14-7 7v13h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-1v-12h16v12h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3h-1v-12h16v12h-1c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-1.65-1.35-3-3-3zM12 60h-8v-8h8v8zM36 60h-8v-8h8v8zM28 16v-8h8v8h-8zM60 60h-8v-8h8v8z"></path>
</svg>
`)