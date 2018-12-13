<template>
  <div id="hobbies">
    {{ title }}
    {{ hobbies }}
  </div>
</template>

<script>
export default {
  props: {
    hobbies: { type: Array, required: true},
  },
  data() {
    return {
      title: "Hobbies"
    }
  }
}
</script>
