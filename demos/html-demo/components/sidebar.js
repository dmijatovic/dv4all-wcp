
/**
 * DEFINE PAGES for the sidebar
 */
const sidebarRoutes=[
  {href:'/components/', label:'Buttons', route:'/components/'},
  {href:'/components/input.html', label:'Input', route:'/components/input'},
  {href:'/components/modals.html', label:'Modals', route:'/components/modals'},
]

class Dv4Sidebar extends HTMLElement{
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
    sidebarRoutes.forEach(r=>{
      html+=`
        <a href="${r.href}"
          class="sidebar-link ${activeRoute === r.route ? 'active' : ''}">
          ${r.label}
        </a>
      `
    })
    return html
  }
  /**
   * Render html
   */
  render(){
    this.innerHTML=`
      <style>
        .sidebar-link{
          display:block;
          font-size: 1rem;
          margin: 0rem 1rem 1rem 0rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-primary, green);
          border-bottom: 2px solid transparent;
        }
        .sidebar-link:hover{
          border-bottom: 2px solid var(--color-accent,orange);
        }
        .sidebar-link.active{
          color: var(--color-gold, orangeyellow);
        }
      </style>
      <aside>${this.getRoutes()}</aside>
    `
  }
}

customElements.define("dv4-sidebar-menu", Dv4Sidebar)