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
            Ball Triangle
          </dv4-custom-button>
          <dv4-custom-button @click="showLoader('donut')">
            Donut
          </dv4-custom-button>
          <dv4-custom-button @click="createLoader('dv4-loader-climbing-dot')"
            danger>
            Climbing Dot
          </dv4-custom-button>
        </p>
        <p>
          <dv4-custom-button
            primary
            @click="createLoader('dv4-loader-ball-spin')"
            >
            Ball Spin
          </dv4-custom-button>
          <dv4-custom-button
            danger
            @click="createLoader('dv4-loader-line-scale')">
            Line Scale
          </dv4-custom-button>
          <dv4-custom-button
            @click="createLoader('dv4-loader-packman')"
            >
            Packman
          </dv4-custom-button>
        </p>
        <p>
          <dv4-custom-button
            danger
            @click="createLoader('dv4-loader-square-jelly')"
            >
            Square Jelly
          </dv4-custom-button>
          <dv4-custom-button
            primary
            @click="createLoader('dv4-loader-square-spin')">
            Square Spin
          </dv4-custom-button>
          <dv4-custom-button
            @click="createLoader('dv4-loader-timer')"
            >
            Timer
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
      <section id="loader-area"></section>
    </template>
  </PageContent>
</template>

<script>

import PageContent from '@/components/page/PageContent'

export default {
  head(){
    return {
      title:'Web components - Loaders',
      meta: [
        // hid is used as unique identifier.
        // Do not use `vmid` for it as it will not work
        { hid: 'description',
          name: 'description',
          content: 'Custom @dv4all CSS loaders as web components in NuxtJS.'
        }
      ]
    }
  },
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
    createLoader(type){
      const loaderSection = document.getElementById('loader-area')
      const el = document.createElement(type)
      //add overlay
      el.setAttribute('overlay', true)
      //set Loading... text
      el.innerText = 'Loading...'
      //listen to destroy
      el.addEventListener('click', this.clearLoader)
      //add no scroll
      // body.classList.toggle("noscroll")
      //append to loader section
      loaderSection.appendChild(el)
    },
    clearLoader(){
      const loaderSection = document.getElementById('loader-area')
      loaderSection.innerHTML = ''
    },
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
dv4-custom-button{
  min-width: 8rem;
}
</style>
