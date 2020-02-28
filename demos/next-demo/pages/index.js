import Head from 'next/head'
import {PageTitle, Paragraph} from '../components/layout'

const Home = () => (
  <>
    <Head>
      <title>This is index page title</title>
    </Head>
    <PageTitle>This is another title</PageTitle>
    <Paragraph>This is paragraph text</Paragraph>
  </>
)

export default Home
