<template>
  <div>
    <hr>
      <a @click="handleClick">Click me! {{ counter }} </a>
      <div v-show="showSpan()">Counter is an even number</div>
    <hr>
      <a @click.once="handleClickEvent('randomVariable', $event)">Passing $event object, type of the $event with a {{ eventText }}</a>
    <hr>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      counter: 0,
      eventText: ''
    }
  },
  // A Vue method is a function associated with the Vue instance
  methods: {
    handleClick() {
      this.counter++;
    },
    showSpan() {
      return this.counter % 2 === 0;
    },
    handleClickEvent(randomVar, event) {
      this.eventText = randomVar + " " + event.type + "ed once";
      this.counter++;
    }
  }
}
</script>

<style>

</style>
