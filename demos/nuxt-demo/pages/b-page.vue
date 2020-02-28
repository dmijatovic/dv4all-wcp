<template>
  <PageContent>
    <template #page-title>
      B page title
    </template>
    <template #page-body>
      <p>This is my body for testing</p>
      <p>I am adding second paragraph to page body of PageComponent</p>
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
