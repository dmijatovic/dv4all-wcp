import Head from 'next/head'
import {PageTitle, Paragraph} from '../components/layout'

const Home = () => (
  <>
    <Head>
      <title>Web components DEMO</title>
    </Head>
    <PageTitle>Welcome to web components demo with NEXTJS</PageTitle>
    <Paragraph>
      Welcome to NEXTJS web components demo! In this demo project
      we test how web components can be used in NEXTJS.
    </Paragraph>
    <Paragraph>
      These are the steps needed to use web component:
      <ul>
        <li>Include web components script. In the header of the html file
          we include javascript file that contains the web component.</li>
        <li>Apply propper web component html markup (html tag).</li>
      </ul>
    </Paragraph>

  </>
)

export default Home
