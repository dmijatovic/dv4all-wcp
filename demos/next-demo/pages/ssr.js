import {PageTitle, Paragraph} from "../components/layout"
const ssr = () => {
  return (
    <>
    <PageTitle>Server side rendering methods</PageTitle>
    <Paragraph>
      This page demos intial data load on server side.
      Intial loding finds place on server side.
      Subsquent loadings are on the client.
      To validate where fn will run use process.browser
    </Paragraph>
    </>
  );
};

// intial data load by next
// first time loading is on the server side
// when using spa router next loadings are on the client
ssr.getInitialProps = function(ctx){
  // console.log("SSR page.getInitalProps...", ctx)
  if (process.browser){
    console.log("getInitialProps...in browser")
  }else{
    console.log("getInitialProps...on server")
  }
  return {loading:true}
}

export default ssr;