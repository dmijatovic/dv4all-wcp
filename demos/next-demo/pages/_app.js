import App from "next/app";
import Head from "next/head";
import React from "react";

import {Header, Main, Footer} from '../components/layout'
import config from '../data/config'

import '../styles/global.css'

export default class MyApp extends App {
  componentDidMount(){
    console.log("MyApp.didMount...")
    import('@dv4all/loaders').then(d=>{
      console.log("imported dv4loaders...", d)
    })
    import('@dv4all/icons').then(d=>{
      console.log("imported dv4icons...", d)
    })
    import('@dv4all/components').then(d=>{
      console.log("imported dv4components...", d)
    })
  }
  render() {
    // console.log("app.props...", this.props);
    return (
      <article>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400,500,900&display=swap" rel="stylesheet"></link>
        </Head>
        <style jsx>
          {`
            article{
              flex:1;
              display: grid;
              grid-template-rows: 4rem 1fr 4rem;
            }
          `}
        </style>
        <Header {...config}/>
        <Main {...this.props} />
        <Footer/>
      </article>
    );
  }
}
