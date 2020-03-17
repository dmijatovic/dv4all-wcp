
export default(props)=>{
  // console.log("Main.props...", props)
  const { Component, pageProps } = props;
  return (
    <main>
      <style jsx>
        {`
          main{
            display:block;            
            padding: 1rem;
          };
        `}
      </style>
      <Component {...pageProps} />
    </main>
  )
}