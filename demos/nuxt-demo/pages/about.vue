<template>
  <PageContent>
    <template #page-title>
      Testing web components with Nuxt
    </template>
    <template #page-body>
      <p>This demo website is created to test implementation of web components in Nuxt.</p>
      <p>
        Nuxt is selected as test vehicle because it uses Vue framework and allows for
        SSR and static site creation. It enables me to test use of web components more
        extensively than plain Vue.js project.
      </p>
      <p>
        I discovered during this test that 'universal' app requires
        additional "effort" for web component implementation.
      </p>
      <ul>
        <li>
          Web components markup causes error on the server side because
          customElement is NOT suppored by NodeJS.
        </li>
        <li>
          I have imported web components using plugins option and set SSR flag to false.
          See nuxt.config.js file for exact implementation
        </li>
      </ul>
      <h1 class="page-title">
        Additional Nuxt specific tests
      </h1>
      <p>
        When you setup a project for testing, you might add some additional testing features.
        So there might be additional testings been done in this project concerning Nuxt itself
        and how it works.
      </p>
    </template>
  </PageContent>
</template>

<script>

import PageContent from '@/components/page/PageContent'

export default {
  components:{
    PageContent
  }
}
</script>

<style>

</style>
