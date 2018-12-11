<template>
  <div id="skills">
    {{ title }}
    {{ skills }}
  </div>
</template>

<script>
export default {
  props: {
    skills: { type: Object, required: true},
  },
  data() {
    return {
      title: "Skills"
    }
  }
}
</script>
