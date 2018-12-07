<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ByeWorld/>
    <UserName name="Héctor"/>
    <UserName name="Gerardo"/>
    <UserName name="Palomares"/>
    <EventsPlusMethods/>
    <Watcher/>
    <Computed/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ByeWorld from './components/ByeWorld.vue'
import UserName from './components/UserName.vue'
import EventsPlusMethods from './components/EventsPlusMethods.vue'
import Watcher from './components/Watcher.vue'
import Computed from './components/Computed.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ByeWorld,
    UserName,
    EventsPlusMethods,
    Watcher,
    Computed
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
