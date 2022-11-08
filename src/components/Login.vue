<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign In</button>

    <div v-if="newUser">
      <h3>Sign up for a new account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>
    <div v-else>
      <h3>Sign in with email</h3>
      <a href="#" @click="newUser = true">New User?</a>
    </div>

    <label for="email">Email</label>
    <input v-model="email" placeholder="email" type="email" class="input" />
    <label for="password">Password</label>
    <input
      v-model="password"
      placeholder="password"
      type="password"
      class="input"
    />

    <button
      @click="signInOrCreateUser()"
      class="button is-info"
      :class="{ 'is-loading': loading }"
    >
      {{ newUser ? "Sign Up" : "Sign In" }}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      auth,
      newUser: false,
      email: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },

  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";

      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (e) {
        this.errorMessage = e.message;
      }

      this.loading = false;
    },
  },
};
</script>
