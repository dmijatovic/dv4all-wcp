import React from 'react'

const SectionTitle = props => {
  return (
    <>
      <style jsx>{`
      h3{
        padding: 0.5rem 0rem;
      }
    `}</style>
      <h3>{props.children}</h3>
    </>
  )
}

export default SectionTitle