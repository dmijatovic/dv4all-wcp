
export default ({title='Video camera'})=>(`
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
<path d="M24 18c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM0 18c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM48 38v-6c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-6l16 10v-28l-16 10zM40 48h-32v-12h32v12z"></path>
</svg>
`)