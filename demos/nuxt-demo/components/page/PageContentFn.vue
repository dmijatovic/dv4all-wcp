<script>
export default {
  functional:true,
  props:['title','message'],
  render:(h,{props})=>{
    const {title,message} = props
    return(
      <div className="page-content">
        <h1 className="page-title">{ title }</h1>
        <div className="page-body">{ message }</div>
      </div>
    )
  }
}
</script>

<style>

</style>
