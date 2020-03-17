<template>
  <PageContent>
    <template #page-title>
      Buttons demo @dv4all/components
    </template>
    <template #page-body>
      <h3>What where the challenges?</h3>
      <p>
        I faced serious challenge using web component for base elements. Below is an example.
        <ul>
          <li>Button that extends HTMLButtonElement: this element does not support shadowDOM. The styles for each button added this way are duplicated. At least when inspecting page with developer tools you can see that styles are repeated for each button (and overwritten). The styles are not scoped :-(.
          </li>
          <li>Button that extends HTMLElement: this element has shadowDOM. With shadowDOM the styles are scoped. Basic HTMLElement does not have all button functionalities. For example, it does not support active element state (which is used to animate button click). I decided to wrap standard button in the customElement and style it.
          </li>
        </ul>
      </p>
      <h3>Button wrapped in the custom HTMLElement</h3>
      <!-- CUSTOM BUTTON -->
      <p>
        <dv4-custom-button
          @click="showAlert('Default button')">
            Default button
        </dv4-custom-button>
        <dv4-custom-button
          primary
          @click="showAlert('Primary button')">
          Primary button
        </dv4-custom-button>
        <dv4-custom-button
          danger
          @click="showAlert('Danger button')">
          Danger button
        </dv4-custom-button>
      </p>
      <p>
        <dv4-custom-button
          @click="showAlert('Icon Default Button')">
          <dv4-icon-camera></dv4-icon-camera>
          Icon Default Button
        </dv4-custom-button>
        <dv4-custom-button primary
          @click="showAlert('Icon Primary Button')">
          <dv4-icon-checkmark></dv4-icon-checkmark>
          Icon Primary Button
        </dv4-custom-button>
        <dv4-custom-button danger
          @click="showAlert('Icon Danger Button')">
          <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
          Icon Danger Button
        </dv4-custom-button>
      </p>
    </template>
  </PageContent>
</template>

<script>

import PageContent from '@/components/page/PageContent'

export default {
  components:{
    PageContent
  },
  methods:{
    showAlert(msg){
      alert(msg)
    }
  }
}
</script>

<style>

</style>
