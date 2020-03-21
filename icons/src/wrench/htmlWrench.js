
export default ({title='Wrench'})=>(`
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
<path d="M62.683 51.117l-28.785-24.672c1.34-2.519 2.101-5.393 2.101-8.445 0-9.941-8.059-18-18-18-1.818 0-3.573 0.271-5.228 0.772l10.399 10.399c1.556 1.556 1.556 4.101 0 5.657l-6.343 6.343c-1.556 1.556-4.101 1.556-5.657 0l-10.399-10.399c-0.501 1.655-0.772 3.41-0.772 5.228 0 9.941 8.059 18 18 18 3.052 0 5.926-0.761 8.445-2.101l24.672 28.785c1.432 1.67 3.876 1.764 5.431 0.209l6.343-6.343c1.555-1.556 1.462-4-0.209-5.431z"></path>
</svg>
`)