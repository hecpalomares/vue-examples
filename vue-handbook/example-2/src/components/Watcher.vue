<template>
  <div>
    <p>My name is {{name}}</p>
    <button @click="toggleName()">Change my name</button>
    <p>Name has been changed {{counter}} times</p>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Héctor',
      counter: 0
    }
  },
  watch: {
    // Name of the prop/data to be watched, parameters that represent the new value or the old value
    name(newValue, oldValue) {
      this.counter++;
    }
  },
  methods: {
    toggleName() {
      this.name = this.name === "Héctor" ? "Gerardo" : "Héctor";
    }
  }
}
</script>

<style>

</style>
