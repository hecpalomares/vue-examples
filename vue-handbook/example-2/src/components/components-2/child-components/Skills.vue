<template>
  <div id="skills">
    {{ title }}
    {{ mySkills }}
    <div>
      <label>Skill: </label>
      <input type="text" v-model="skillName"/>
    </div>
    <div>
      <label>Level: </label>
      <input type="text" v-model="level"/>
    </div>
    <button @click="addSkill()">Add an skill</button>
  </div>
</template>

<script>
export default {
  props: {
    skills: { type: Object, required: true},
  },
  data() {
    return {
      title: "My skills",
      mySkills: {},
      skillName: '',
      level: 0
    }
  },
  methods: {
    addSkill() {
      let newSkill = {}
      newSkill[this.skillName] = this.level
      // Vuejs cave-at for reacitvity, see https://vuejs.org/v2/guide/reactivity.html
      this.mySkills = Object.assign({}, this.mySkills, newSkill)
    },
  },
  mounted() {
    // Initial Render
    this.mySkills = Object.assign({}, this.skills)
  }
}
</script>

<style>
  #skills {
    display: flex;
    flex-direction: column;
  }
</style>
