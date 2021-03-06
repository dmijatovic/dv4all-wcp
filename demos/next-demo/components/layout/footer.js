

const Footer = ({footerText=''})=>{
  return (
    <footer>
      <style jsx>{`
        footer{
          padding: 1rem;
          background-color: var(--color-dark,#17241E);
          color:var(--color-accent,#E2CE4D);
        }
        h2{
          font-size: 1.25rem;
          font-weight:300;
        }
      `}</style>
      <h2>{footerText}</h2>
    </footer>
  )
}

export default Footer