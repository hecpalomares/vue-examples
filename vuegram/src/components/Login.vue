<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Vuegram</h1>
        <p>Sample social media web app powered by Vue.js and Firebase.</p>
      </div>
      <div class="col2" :class="{ 'signup-form': !showLoginForm }">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome back!</h1>
          <label for="email1">Email</label>
          <input v-model.trim="loginForm.email" type="text" name="email1" id="email1" />
          
          <label for="password1">Password</label>
          <input v-model.trim="loginForm.email" type="password" name="password1" id="password1" />

          <button @click="login" class="button">Log In</button>

          <div class="extras">
            <a>Forgot Password</a>
            <a @click="toggleForm">Create an account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <label for="name">Name</label>
          <input v-model.trim="signupForm.name" id="name" type="text">

          <label for="title">Title</label>
          <input v-model.trim="signupForm.title" id="title" type="text">

          <label for="email2">Email</label>
          <input v-model.trim="signupForm.email" id="email2" type="text">

          <label for="password2">Password</label>
          <input v-model.trim="signupForm.password" id="password2" type="password">

          <button @click="signup" class="button">Sign Up</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    login() {
      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit("setCurrentUser", user.user)
          this.$store.dispatch("fetchUserProfile")
          this.$router.push("/dashboard")
        })
        .catch(err => {
          console.log(err)
        });
    },
    signup() {
      fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
        debugger;
        this.$store.commit('setCurrentUser', user.user)

        fb.usersCollection.doc(user.uid).set({
            name: this.signupForm.name,
            title: this.signupForm.title
        }).then(() => {
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/dashboard')
        }).catch(err => {
            console.log(err)
        })
      }).catch(err => {
          console.log(err)
      })
    }
  }
};
</script>
