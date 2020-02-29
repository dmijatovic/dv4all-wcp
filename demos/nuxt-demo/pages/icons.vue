<template>
  <PageContent>
    <template #page-title>
      Icons - demo page
    </template>
    <template #page-body>
      <p>Here we demo use of SVG icons as customElements</p>
      <p>
        <dv4-icon-cancel-circle
          title="Close window"
          class="small-icon"
        />
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

.small-icon{
  display: inline-block;
  width:2rem;
  height:2rem;
  fill: var(--color-primary, #333);
}
</style>
