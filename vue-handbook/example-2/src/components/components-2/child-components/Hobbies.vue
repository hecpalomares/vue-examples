<template>
  <div id="hobbies" :style="setBackground">
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
