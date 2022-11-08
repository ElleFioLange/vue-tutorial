<template>
  <aside>
    <h3>Sign in Anonymously</h3>
    <button @click="signInAnonymously(auth)">Sign In</button>
  </aside>
</template>

<script>
import { signInAnonymously } from "@firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return {
      signInAnonymously,
      auth,
    };
  },
};
</script>
