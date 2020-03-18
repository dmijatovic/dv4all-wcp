import {useState, useEffect, useRef} from 'react'
import Head from 'next/head'
import {PageTitle, Paragraph} from '../../components/layout'

const Modals = () => {
  const [state, setState] = useState({
    show:false,
    type:'info'
  })
  const dv4info = useRef(null)
  const dv4action = useRef(null)
  const {show,type} = state

  useEffect(()=>{
    if (dv4info.current){
      dv4info.current.addEventListener('onClose',()=>{
        setState({
          show:false,
          type:'info'
        })
      })
    }
  },[])

  useEffect(()=>{
    console.log('Show changed...', show)
    console.log('Type changed...', type)
    if (show===true){
      if (type==='info'){
        dv4info.current.setAttribute('active',true)
      } else if(type==='action'){
        dv4action.current.setAttribute('active', true)
      }
    }else{
      if (type==='info'){
        dv4info.current.removeAttribute('active')
      }else if (type==='action'){
        dv4action.current.removeAttribute('active')
      }
    }
  },[show,type])

  return (
    <>
      <Head>
        <title>Web components - MODALS</title>
      </Head>
      <PageTitle>Modal demo @dv4all/components</PageTitle>
      <Paragraph>
        <p>
          This section has two modal examples.
          <ul>
            <li>Info modal: modal only displays information. All information
              in is passed using element attributes (title, subtitle, content).
            </li>
            <li>Action modal: this modal supports passing (action) buttons.
              All information is passed using named slots.
            </li>
          </ul>
          Look at the source code for all implementation details.
        </p>
      </Paragraph>
      <Paragraph>
        <h3>Implementation examples of info and action modals</h3>
        <p>
          <dv4-custom-button
            id="info-modal"
            primary
            onClick={()=>{
              setState({
                show:true,
                type:'info'
              })
            }}>
            <dv4-icon-cog></dv4-icon-cog>
            Show info modal
          </dv4-custom-button>

          <dv4-custom-button
            id="action-modal"
            onClick={()=>{
              setState({
                show: true,
                type:'action'
              })
            }}>
            <dv4-icon-cogs></dv4-icon-cogs>
            Show action modal
          </dv4-custom-button>
        </p>
      </Paragraph>

      {/* INFO MODAL CUSTOM ELEMENT */}
      <dv4-info-modal
        ref={dv4info}
        img="/img/18-RDG-004_3A8A51069_m.jpg"
        title="Modal title"
        subtitle="To close modal use X button"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      ></dv4-info-modal>

      {/* ACTION MODAL CUSTOM ELEMENT */}
      <dv4-action-modal
        ref={dv4action}>
        <span slot="title">Action modal with a longer title</span>
        <span slot="subtitle">Use YES button to close modal</span>
        <div slot="content">
          <p>This is content of the action modal. Here we explain something.</p>
          <p>
              To close this modal click on YES button. Note that other 2 buttons
              don&apos;t do much in this example.
          </p>
        </div>
        <div slot="nav" className="action-modal-nav">
          <dv4-custom-button primary
            onClick={()=>{
              setState({
                show:false,
                type:'action'
              })
            }}>
            <dv4-icon-checkmark></dv4-icon-checkmark>
            <div className="btn-lbl">Yes</div>
          </dv4-custom-button>
          <dv4-custom-button>
            <dv4-icon-cogs></dv4-icon-cogs>
            <div className="btn-lbl">Maybe</div>
          </dv4-custom-button>
          <dv4-custom-button danger>
            <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
            <div className="btn-lbl">No way!</div>
          </dv4-custom-button>
        </div>
      </dv4-action-modal>

    </>
  )
}

export default Modals