const PageTitle = props => {
  return (
    <>
      <style jsx>{`
      h1{
        padding: 1rem 0rem;
      }
    `}</style>
      <h1>{props.children}</h1>
    </>
  )
}

export default PageTitle