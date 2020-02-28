<script>
import PageContentFn from '@/components/page/PageContentFn'

const getPageContent = (h)=>{
  return (
    <PageContentFn
      title="This is my prop title"
      message="This is conect of the message" />
  )
}

export default {
  functional:true,
  render:(h)=>{
    // const content = getPageContent(h)
    // console.log('react...h...', h)
    return(
      <section className="page-content">
        <h1 className="page-title">This is title</h1>
        <div className="page-body">It seemd very limited and quite difficult because it is not React. It looks to me it does not support all features.</div>
        <PageContentFn
          title="Passing title to JSX function component"
          message="The approach requires specific way of passing props to child and getting these from render function"
        />
      </section>
    )
  }
}
</script>

<style>

</style>
