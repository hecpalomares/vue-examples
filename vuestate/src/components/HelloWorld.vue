<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLinkInternal">
        <input class="link-url" type="text" placeholder="Add a link URL" v-model="linkURL" />
        <input class="link-name" type="text" placeholder="Add a link name" v-model="linkName" />
        <button class="btn" type="submit">Add</button>
      </form>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url">{{ link.name }}</a>
          <button @click="removeLinkInternal(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
      <div class="right">
        <stats />
      </div>
  </div>
</template>


<script>
import Stats from '@/components/Stats.vue'
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      linkURL: '',
      linkName: '',
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ]),
  },
  components: {
    Stats,
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLinkInternal() {
      let link = {
        url: this.linkURL,
        name:  this.linkName
      }
      this.ADD_LINK(link)
      this.linkURL = ''
      this.linkName = ''
    },
    removeLinkInternal(indexLink) {
      this.removeLink(indexLink);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }
  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 10px;
    outline: none;
  }
  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  .btn {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>