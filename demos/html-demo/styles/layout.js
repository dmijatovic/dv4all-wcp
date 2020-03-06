/**
 * Page layout components. Here we use custom web components to play a bit :-)
 * The header and the footer of all pages in this demo are the same, except fot active
 * class on the route. To avoid writing this code for each page we use custom components
 * defined here.
 */


/**
 * DEFINE PAGES for the header
 */
const routes=[
  {href:'/index.html', label:'Home', route:'/', exact:true},
  {href:'/icons.html', label:'Icons', route:'/icons'},
  {href:'/loaders.html', label:'Loaders', route:'/loaders'},
  {href:'/components/', label:'Components', route:'/components/'}
]

/**
 * page header for all pages
 */
class Dv4PageHeader extends HTMLElement{
  constructor(){
    super()
  }
  /**
   * Lifecycle event when component is mounted to DOM
   */
  connectedCallback(){
    console.log(`${this.localName}...mounted to DOM!`)
    //init with props (attribute values
    this.render()
  }
  getRoutes(){
    const activeRoute = window.location.pathname
    let html=''
    routes.forEach(r=>{
      if (r['exact']){
        html+=`
        <a href="${r.href}"
          class="link ${activeRoute === r.route ? 'active' : ''}">
          ${r.label}
        </a>
      `
      }else{
        html+=`
        <a href="${r.href}"
          class="link ${activeRoute.includes(r.route) ? 'active' : ''}">
          ${r.label}
        </a>
      `
      }
    })
    return html
  }
  render(){
    this.innerHTML=`
      <h1>Web components DEMO</h1>
      <nav>
        ${this.getRoutes()}
      </nav>
    `
  }
}

/**
 * page footer for all pages
 */
class Dv4PageFooter extends HTMLElement{
  constructor(){
    super()
  }
  /**
   * Lifecycle event when component is mounted to DOM
   */
  connectedCallback(){
    console.log(`${this.localName}...mounted to DOM!`)
    //init with props (attribute values
    this.render()
  }
  /**
   * Render html
   */
  render(){
    this.innerHTML=`
      <h2>2020 @dv4all</h2>
    `
  }
}

customElements.define('dv4-page-header',Dv4PageHeader)
customElements.define('dv4-page-footer',Dv4PageFooter)
