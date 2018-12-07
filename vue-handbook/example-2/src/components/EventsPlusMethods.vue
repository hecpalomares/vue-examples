<template>
  <div>
    <hr>
    <a @click="handleClick">Click me! {{ counter }} </a>
    <div v-show="showSpan()">Counter is an even number</div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  // A Vue method is a function associated with the Vue instance
  methods: {
    handleClick: function() {
      this.counter++;
    },
    showSpan() {
      return this.counter % 2 === 0;
    }
  }
}
</script>

<style>

</style>
