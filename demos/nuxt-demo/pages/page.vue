<template>
  <section class="page-content">
    <h1 class="page-title">
      This is parent page title
    </h1>
    <p>This is parent page content.</p>
    <section class="page-body">
      <nav class="page-tab-nav">
        <nuxt-link
          v-for="id in ids"
          :key="id"
          :to="`/page/${id}`"
          class="page-tab-nav-item"
        >
          {{ `Page ${id}` }}
        </nuxt-link>
      </nav>
      <div class="page-child-content">
        <nuxt-child />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data(){
    return {
      ids:[1,2,3,4,5],
      sid: this.$route.params.id,
    }
  }

}
</script>

<style>
.page-tab-nav{
  padding: 0.5rem 0 0.25rem 0;
  border-bottom: 1px solid var(--color-grey,#eee);
}
.page-tab-nav-item{
  padding: 0 1rem 0 0;
  color: var(--color-accent,"orange");
}
.page-child-content{
  padding: 1rem 0rem;
}
</style>
<style scoped>
.nuxt-link-exact-active{
  background-color: transparent;
}
</style>
