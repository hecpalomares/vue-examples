<template>
    <div class="stats">
        <h1>Another Component [Stats]!</h1>
        <p v-if="toggleMessage">There are currently {{ countLinks }} links</p>
        <p v-else>No links</p>
        <p>{{msg}}</p>
        <button @click="removeAllLinksInternal">Remove all links</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Stats',
  computed: {
    ...mapState([
      'msg',
    ]),
    ...mapGetters([
        'countLinks'
    ]),
    toggleMessage() {
        return this.countLinks > 0
    }
  },
  methods: {
      ...mapMutations(['REMOVE_ALL']),
      ...mapActions(['removeAll']),
      removeAllLinksInternal() {
        this.removeAll().then(() => {
            console.log("Done");
        });
      }
  }
}
</script>

<style scoped>
    button {
        padding: 10px;
        margin-top: 30px;
        width: 100%;
        background: none;
        border: 1px solid salmon;
        outline: 0;
        cursor: pointer;
        color: salmon;
        font-weight: 700;
        font-size: 16px;
    }
</style>
