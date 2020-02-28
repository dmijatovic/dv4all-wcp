<template>
  <PageContent>
    <template #page-title>
      Hey there! This is page title
    </template>
    <template #page-body>
      <p>And here we add some content</p>
      <h2>This is header 2</h2>
      <p>And paragrpah 2</p>
      <h2>Remarks navigation</h2>
      <p>
        The header navigation is auto-generated in default layout using router.
        At this point the order of menu items is as in the router usingle simple map function.
        The only changes it that base route "/" gets "Home" as route.name prop.
        The order of menu items seem to be alphabetical which I think is GOOD PRACTICE :-).
        It seems ONLY that HOME route "/" is always the last item.
        Maybe we can programmatically set Home route to be first?
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
.page-body h2{
  font-size: 1.2rem;
  padding: 0.25rem 0rem;
}
</style>
