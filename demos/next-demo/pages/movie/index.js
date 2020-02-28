import Head from "next/head"

import {PageTitle, Paragraph} from "../../components/layout"

export default ()=>{
  return (
    <>
      <Head>
        <title>Movie page title</title>
      </Head>
      <PageTitle>Movie root page title</PageTitle>
      <Paragraph>What shell we do with a dronken sailor?</Paragraph>
      <Paragraph>
        Second paragraph text!!!
      </Paragraph>
    </>
  )
}