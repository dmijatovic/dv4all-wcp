import Link from 'next/link'
import { useRouter } from "next/router";

export default (props)=>{
  const {appTitle, links} = props
  const router = useRouter()
  return (
    <header>
      <style jsx>
        {`
          header{
            padding: 0rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          h1{
            color:var(--color-warning,#F45328);
          }
          nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            color:var(--color-primary,#287C71);
            height:100%;
            align-items: center;
          }
          .active{
            color:var(--color-warning,#F45328);
            background-color: var(--color-grey,#ebebeb);
          }
        `}
      </style>
        <h1>{appTitle}</h1>
      <nav>
        {
          links.map(l=>{
            return (
              <Link
                key={l.href}
                href={l.href}>
                  <a className={router.pathname===l.href ? "active" : "not-active"}>
                    {l.label}
                  </a>
              </Link>
            )
          })
        }
      </nav>
    </header>
  )
}