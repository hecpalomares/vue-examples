<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" type="text" name="flavor" id="flavor">
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  methods: {
    changed(event) {
      this.$store.commit('changeFlavor', event.target.value)
    }
  }
}
</script>
