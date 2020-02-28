<template>
  <section class="page-content">
    <h1 class="page-title">
      <slot name="page-title" />
    </h1>
    <section class="page-body">
      <slot name="page-body" />
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style>

.page-content{
  flex:1;
}

.page-title{
  padding: 0.5rem 0rem;
}


</style>
