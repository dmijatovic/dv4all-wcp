import Head from 'next/head'

import {PageTitle, Paragraph} from "../components/layout"

export default ()=>{
  function getInitialProps(...args){
    console.log("About.getInitialProps...args", args)
  }
  return (
    <>
      <Head>
        <title>About page title</title>
      </Head>
      <PageTitle>About page title</PageTitle>
      <Paragraph>First paragraph text.</Paragraph>
      <Paragraph>Second paragraph text!!!</Paragraph>
    </>
  )
}