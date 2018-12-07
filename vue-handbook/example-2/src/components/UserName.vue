<template>
  <div>
  <!-- Vue.js does some internal binding and lets the template use the data property or props property as if it was local. -->
    {{ name }} contains {{ characters }} characters.
  <!-- You can use any JavaScript expression inside your interpolations, but you’re limited to just one expression: -->
   {{ characters === 7 ? 'This is a lucky number!' : 'Not lucky number :(' }}
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      characters: this.name.length
    }
  }
}
</script>

<style>

</style>
