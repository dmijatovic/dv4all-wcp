import Head from 'next/head'
import {PageTitle, Paragraph} from "../components/layout"

export default ()=>{
  function getInitialProps(...args){
    console.log("About.getInitialProps...args", args)
  }
  return (
    <>
      <Head>
        <title>Icons - web components</title>
      </Head>
      <PageTitle>SVG Icons as web components</PageTitle>
      <Paragraph>
      Below you see examples of SVG icons avaliable in @dv4all/icons module.
      Hower over the icon to see the name of the component.
      Look at the source code of html to see how icon is implemented.
      More info is avaliable in REDME and <a href="https://github.com/dmijatovic/dv4all-wcp-lerna/tree/master/demos/html-demo">Github repo</a>.
      </Paragraph>
      <Paragraph>
        {/* <!-- ARROW RIGHT --> */}
        <dv4-icon-arrow-right
          class="dv4-icon"
          title="dv4-icon-arrow-right"
          role="button">
        </dv4-icon-arrow-right>
        {/* <!-- PLAY BACKWARD --> */}
        <dv4-icon-backward
          class="dv4-icon"
          title="dv4-icon-backward"
          role="button">
        </dv4-icon-backward>
        {/* <!-- CAMERA --> */}
        <dv4-icon-camera
          class="dv4-icon"
          title="dv4-icon-camera"
          role="button">
        </dv4-icon-camera>
        {/* <!-- CANCEL CIRCLE --> */}
        <dv4-icon-cancel-circle
          class="dv4-icon"
          title="dv4-icon-cancel-circle"
          role="button">
        </dv4-icon-cancel-circle>
        {/* <!-- CHECKMARK --> */}
        <dv4-icon-checkmark
          class="dv4-icon"
          title="dv4-icon-checkmark"
          role="button">
        </dv4-icon-checkmark>
        {/* <!-- CIRCLE RIGHT --> */}
        <dv4-icon-circle-right
          class="dv4-icon"
          title="dv4-icon-circle-right"
          role="button">
        </dv4-icon-circle-right>
        {/* <!-- COG --> */}
        <dv4-icon-cog
          class="dv4-icon"
          title="dv4-icon-cog"
          role="button">
        </dv4-icon-cog>
        {/* <!-- COGS --> */}
        <dv4-icon-cogs
          class="dv4-icon"
          title="dv4-icon-cogs"
          role="button">
        </dv4-icon-cogs>
        {/* <!-- CONNECTION --> */}
        <dv4-icon-connection
          class="dv4-icon"
          title="dv4-icon-connection"
          role="button">
        </dv4-icon-connection>
      </Paragraph>
    </>
  )
}