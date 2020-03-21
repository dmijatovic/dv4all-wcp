
export default ({title='Warning'})=>(`
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
<path d="M32 5.798l26.819 53.452h-53.638l26.819-53.452zM32 0c-1.379 0-2.759 0.93-3.805 2.791l-27.317 54.444c-2.093 3.721-0.313 6.765 3.957 6.765h54.332c4.269 0 6.049-3.044 3.956-6.765h0l-27.317-54.444c-1.046-1.86-2.426-2.791-3.805-2.791v0z"></path>
<path d="M36 52c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
<path d="M32 44c-2.209 0-4-1.791-4-4v-12c0-2.209 1.791-4 4-4s4 1.791 4 4v12c0 2.209-1.791 4-4 4z"></path>
</svg>
`)