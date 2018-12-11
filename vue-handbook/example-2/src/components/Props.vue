<template>
  <div>
    <hr>
    <p>Hi I'm {{name}} a {{age}} old {{position}}</p>
  </div>
</template>
<script>
export default {
  // Props is the way components can accept data from parent components
  // Prop types show a warning on the console if not met the criteria
  // Prop requires forces to check if a prop value is required for the component or not
  // Prop default, set a default value if a prop is not passed
  props: {
    name: { type: String, required: true},
    age: { type: String, required: false, default: "21"},
    position: { type: String, required: false, default: 'unknown position'}
  },
}
</script>