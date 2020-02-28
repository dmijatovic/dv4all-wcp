import {useRouter} from 'next/router'

export default ()=>{
  const {query:{id}} = useRouter()
  return(
  <section>
    <h1>Movie {id}</h1>
  </section>
  )
}