
export default(props)=>{
  // console.log("Main.props...", props)
  const { Component, pageProps } = props;
  return (
    <main>
      <style jsx>
        {`
          main{
            display:block;
            background-color: var(--color-accent,#E2CE4D);
            padding: 1rem;
          };
        `}
      </style>
      <Component {...pageProps} />
    </main>
  )
}