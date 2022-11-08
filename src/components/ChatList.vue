<template>
  <div>
    <button class="button" @click="createChatRoom()">Create new chat</button>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
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
