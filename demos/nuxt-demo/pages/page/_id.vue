<template>
  <div class="page-nested-content">
    <div v-if="id">
      <h1 class="page-nested-title">
        Page {{ id }}
      </h1>
      <p class="page-nested-body">
        This is nested page content which is fixed?!?
      </p>
    </div>
    <div v-else>
      <h1 class="page-nested-title">
        Please select page from tab!?!?
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:this.$route.params['id']
    }
  },
  watch:{
    /**
     * This change must be watched otherwise page will not be
     * reloaded?!?
     */
    id: ()=>{
      console.log('watch id change')
    }
  }
}
</script>

<style>

.page-nested-title{
  padding: 0 0 0.5rem 0;
}

.page-nested-body{
  padding: 0 0 0.5rem 0;
}
</style>
