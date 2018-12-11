<template>
  <div>
    <hr>
    <p>Hi {{ employer | setTitle('Eng.') }}</p>
    <span>I earn aproximately {{ currentSalary | formatMoney }}. </span>
    <span>I wish to earn aproximately {{ expectedSalary | formatMoney }}. </span>
    <p>Thanks, {{ name | fallback }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Héctor',
      employer: 'Mario',
      currentSalary: 1200,
      expectedSalary: 1500
    }
  },
  // Filters don't affect component's data, only the output.
  // Useful for transforming strings, numbers, set fallbacks
  filters: {
    fallback: function(name) {
      return name ? name : 'there'
    },
    formatMoney: function(value) {
      return `$${value.toFixed(2)}`
    },
    setTitle: function(name, title) {
      return `${title} ${name}`
    }
  }
}
</script>