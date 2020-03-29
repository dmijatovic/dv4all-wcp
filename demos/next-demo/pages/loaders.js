import React, {useRef} from 'react'
import Head from 'next/head'
import {PageTitle, Paragraph} from '../components/layout'


const Loaders = () => {
  const loaderHolder = useRef(null)

  const addLoader = type => {
    if (loaderHolder){
      let el = document.createElement(type)
      //add overlay
      el.setAttribute('overlay', true)
      //set Loading... text
      el.innerText = 'Loading...'
      //listen to destroy
      el.addEventListener('click', clearLoader)
      // append child element
      loaderHolder.current.appendChild(el)
    }
  }

  const clearLoader = () =>{
    if (loaderHolder){
      loaderHolder.current.innerText = ''
    }
  }

  const render = ()=>{
    return(<>
      <Head>
        <title>Loaders - web components</title>
      </Head>
      <PageTitle>Demo @dv4all/loaders web components</PageTitle>
      <Paragraph>
        This page demos CSS loaders as web components. All CSS loaders are collected from
        open source web examples. For each loader in the repo there is README file where
        usage is explained. In the readme file I link to the CSS loader source.
      </Paragraph>
      <Paragraph>
        Click on the button to show specific loader type. Click on the loader to close it.
        By the way, the buttons are also custom web components :-).
      </Paragraph>
      <Paragraph>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-ball-triangle')}>
            Ball triangle
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-donut')}
          primary>
            Donut loader
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-climbing-dot')}
          primary>
            Climbing dot
        </dv4-custom-button>
      </Paragraph>
      <Paragraph>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-ball-spin')}
          primary>
            Ball spin
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-line-scale')}
          >
            Line scale
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-packman')}
          danger>
            Packman
        </dv4-custom-button>
      </Paragraph>
      <Paragraph>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-square-jelly')}
          danger>
            Square Jelly
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-square-spin')}
          primary>
            Square Spin
        </dv4-custom-button>
        <dv4-custom-button class="btn-show-loader"
          role="button"
          onClick={()=>addLoader('dv4-loader-timer')}
          >
            Timer
        </dv4-custom-button>
      </Paragraph>
    </>
    )}

  return (
    <>
      <style jsx>{`
        section{
          display:block;
        }
        div{
          padding: 1rem 0rem;
        }
      `}</style>
      <style jsx global>{`
        .btn-show-loader{
          margin-right:1rem;
          min-width: 8rem;
        }
      `}</style>
      {render()}
      <section ref={loaderHolder}>
        {/* <!--HERE WE ADD ELEMENT --> */}
      </section>
    </>
  )
}

export default Loaders