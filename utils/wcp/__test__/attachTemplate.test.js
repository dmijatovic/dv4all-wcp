import attachTemplate from '../src/attachTemplate'

describe('attachTemplate',()=>{

  it ('Adds innerHTML to element',()=>{
    const el = document.createElement('div')
    const html='<h1>Test</h1>'

    const template = attachTemplate(el,html)
    expect(template.innerHTML).toBe(html)
  })

  it ('Adds html to innerHTML of shadowRoot of fake element',()=>{
    //fake element with shadowRoot
    const el = {
      shadowRoot:{
        innerHTML:''
      }
    }
    const html='<h1>Test</h1>'
    const template = attachTemplate(el,html)
    expect(template['shadowRoot'].innerHTML).toBe(html)
  })

})


