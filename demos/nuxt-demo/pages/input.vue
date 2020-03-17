<template>
  <PageContent>
    <template #page-title>
      Input demo @dv4all/components
    </template>
    <template #page-body>
      <div>
        <h3>What where the challenges?</h3>
        <p>
          I decided to have separate custom elements for each input type.
          Decission is based on the idea to be able to have custom validators
          in each class. For example for numeric input we might be able to
          implement custom validator in the class. This is inital tought
          and experimenting here is used to test this idea.
        </p>
        <p>
          NuxtJS and Vue can listen for custom events from custom elements.
          Therefore the implementation is very simple. We apply @onChange
          event listener to our custom input element.
        </p>
      </div>
      <div>
        <h3>Example input type text</h3>
        <p>
          <dv4-text-input
            name="var-name"
            label="Your name"
            :message="message"
            @onChange="inputChange"
            >
          </dv4-text-input>
        </p>
        <div id="text-output">You typed: {{output}}</div>
      </div>
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
    return{
      output:'',
      message: 'Type your first and last name'
    }
  },
  methods:{
    inputChange({target}){
      // console.log("inputChange...", e)
      this.output = target.value
      if (this.output.length > 3){
        this.message = 'Well done!'
      }else{
        this.message = 'Type your first and last name'
      }
    }
  }
}
</script>

<style>

</style>
