<template>
  <div>
    <p>{{ count() }}</p>
    <p>Hobbies not related to programming: {{ renderHobbies }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobbies: ["Programming", "Piano", "Reading"]
    }
  },
  // methods must be called with () to be executed, not just referenced
  methods: {
    count: function() {
      return 'Total number of hobbies is: ' + this.hobbies.length;
    }
  },
  // computed properties are cached until data property changes, it will not be updated even when the component re-renders.
  computed: {
    renderHobbies() {
      return this.hobbies.filter(hobby => hobby !== "Programming");
    }
  }
}
</script>

<style>

</style>