<template>
  <PageContent>
    <template #page-title>
      Demo @dv4all/loaders web components
    </template>
    <template #page-body>
      <section class="menu-left">
        <p>
          This page demos CSS loaders as web components. All CSS loaders are collected from
          open source web examples. For each loader in the repo there is README file where
          usage is explained. In the readme file I link to the CSS loader source.
        </p>
        <p>
          Click on the button to show specific loader type. Click on the loader to close it.
          By the way, the buttons are also custom web components :-).
        </p>
        <div>Show: {{ show }}</div>
        <div>loaderType: {{ loaderType }}</div>
        <div>message: {{ message }}</div>
        <p>
          <dv4-custom-button primary
            @click="showLoader('triangle')">
            Show triangle
          </dv4-custom-button>
          <dv4-custom-button @click="showLoader('donut')">
            Show donut
          </dv4-custom-button>
        </p>
      </section>
      <section>
        <client-only>
          <dv4-loader-ball-triangle
            v-if="show && loaderType==='triangle'"
            overlay
            @click="hideLoader"
          >
            {{ message }}
          </dv4-loader-ball-triangle>
          <dv4-loader-donut
            v-if="show && loaderType==='donut'"
            overlay
            @click="hideLoader"
          >
            {{ message }}
          </dv4-loader-donut>
        </client-only>
      </section>
    </template>
  </PageContent>
</template>

<script>

import PageContent from '@/components/page/PageContent'

export default {
  components:{
    PageContent
  },
  data(){
    return {
      show:false,
      loaderType:'',
      message:'Testing...'
    }
  },
  methods:{
    showLoader(loaderType){
      this.show = true
      this.loaderType = loaderType
      // setTimeout(()=>{
      //   this.show = false
      // },3000)
    },
    hideLoader(){
      console.log('hide loader')
      this.show = false
    }
  }
}
</script>
<style>
dv4-button{
  min-width:9rem;
  text-align: center;
}
</style>
