<template>
  <article class="app-content">
    <header class="app-header">
      <h1>This is app title</h1>
      <nav class="app-header-nav">
        <nuxt-link
          v-for="route in links"
          :key="route.name"
          :to="route.path"
          class="app-header-nav-link"
        >
          {{ route.name }}
        </nuxt-link>
      </nav>
    </header>
    <main class="app-body">
      <nuxt />
    </main>
    <footer class="app-footer">
      my footer
    </footer>
  </article>
</template>
<script>
export default {
  data(){
    // console.log('default.data...router...',this.$router)
    const {routes} = this.$router.options
    // console.log('Mounted...routes...',routes)
    const links = routes.filter(r=>{
      if (r.path==='/'){
        r.name='Home'
        return r
      }
      return r
    })
    return {
      links
    }
  },
  // mounted(){
  //   console.log('default.mounted...data...',this.data)
  // }
}
</script>

<style>

.app-content{
  display:grid;
  grid-auto-columns:1fr;
  grid-auto-rows: minmax(3rem,auto) 1fr minmax(2rem, auto);
  min-height:100vh;
}

.app-header,
.app-body,
.app-footer{
  display: flex;
  padding: 1rem 2rem;
}

.app-header{
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-grey,#eee);
}
.app-header-nav{
  padding: 0rem 1rem;
}

.app-header-nav-link{
  color: var(--color-primary, blue);
  padding: 0rem 1rem;
}

.nuxt-link-exact-active{
  font-weight: 700;
}

.app-footer{
  background-color: #333;
  color: #fff
}

</style>
