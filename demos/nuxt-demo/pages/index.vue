<template>
  <PageContent>
    <template #page-title>
      Welcome to Nuxt demo
    </template>
    <template #page-body>
      <p>Welcome to web components demo with NuxtJS! In this demo project
        we test how web components can be used with NuxtJS. This project is part
        of monorepo where I test web components with NextJS, NuxtJS and with
        plain HTML5 project.
      </p>
      <p>These are the steps needed to use web component:</p>
      <ul>
        <li>Include web components script. In the header of the html file
          we include javascript file that contains the web component.</li>
        <li>Apply propper web component html markup (html tag).</li>
      </ul>
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
  head(){
    return {
      title:'Web components demo in NuxtJS',
      meta: [
        // hid is used as unique identifier.
        // Do not use `vmid` for it as it will not work
        { hid: 'description',
          name: 'description',
          content: 'Custom @dv4all web components in NuxtJS.'
        }
      ]
    }
  },
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
