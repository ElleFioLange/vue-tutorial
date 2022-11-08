<template>
  <div>
    <ul>
      <!-- v-for is Vue's tag for enabling list based rendering -->
      <li v-for="chat of chats" :key="chat.id">
        <!-- router-link is Vue Router's intradomain link -->
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">
          {{ chat.id }}</router-link
        >
      </li>
    </ul>
    <!-- button callbacks are denoted with @click tag and take a string with a called function -->
    <button class="button" @click="createChatRoom()">Create new chat</button>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  // data defines reactive properties for the rendering of the ChatList component
  data() {
    return {
      chats: [],
    };
  },

  // firestore is passed to vuefire which automatically hydrates the corresponding property in data ^
  firestore() {
    return {
      chats: db.collection("chats").where("owner", "==", this.uid),
    };
  },

  // methods defines callback methods that can be attached to elements in the ChatList component
  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });
      console.log(newChat);
    },
  },

  props: ["uid"],
};
</script>
