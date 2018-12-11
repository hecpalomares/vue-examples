<template>
  <div>
    <hr>
    <div id="personal-information">
      <Hobbies :hobbies='hobbiesData' />
      <Skills :skills='skillsData' />
    </div>
  </div>
</template>

<script>
import Hobbies from './child-components/Hobbies.vue'
import Skills from './child-components/Skills.vue'

export default {
  data() {
    return {
      hobbiesData: ['Piano', 'Programming', 'Soccer', 'Reading'],
      skillsData: {
        piano: 6,
        programming: 8,
        soccer: 7,
        reading: 8
      }
    }
  },
  components: {
    Hobbies,
    Skills
  }
}
</script>

<style scoped>
  #personal-information {
    display: flex;
  }

  #hobbies, #skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 50%;
    margin: 0 8px;
    height: 100px;
    background: lightcyan;
  }
</style>
