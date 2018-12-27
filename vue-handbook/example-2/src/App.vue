<template>
  <div id="app">
    <!-- <ByeWorld/>
    <UserName name="Héctor"/>
    <UserName name="Gerardo"/>
    <UserName name="Palomares"/>
    <EventsPlusMethods/>
    <Watcher/>
    <Computed/>
    <Props name="Manning" age="40" position="QB"/>
    <Props name="John Doe"/>
    <Filters/>
    <ParentComponents /> -->
    <VuexForm />
    <VuexDisplay />
  </div>
</template>

<script>
/* eslint-disable */ 
// import ByeWorld from './components/ByeWorld.vue'
// import UserName from './components/UserName.vue'
// import EventsPlusMethods from './components/EventsPlusMethods.vue'
// import Watcher from './components/Watcher.vue'
// import Computed from './components/Computed.vue'
// import Props from './components/Props.vue'
// import Filters from './components/Filters.vue'
// import ParentComponents from './components/components-2/ParentComponent.vue'
import VuexForm from './components/VuexForm.vue'
import VuexDisplay from './components/VuexDisplay.vue'

export default {
  name: 'app',
  components: {
    // ByeWorld,
    // UserName,
    // EventsPlusMethods,
    // Watcher,
    // Computed,
    // Props,
    // Filters,
    // ParentComponents,
    VuexForm,
    VuexDisplay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
