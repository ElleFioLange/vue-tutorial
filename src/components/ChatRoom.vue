<template>
  <main>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>

    <User #user="{ user }">
      <ul>
        <li v-for="message of messages" :key="message.id">
          <ChatMessage
            :message="message"
            :owner="user.value.uid === message.sender"
          />
        </li>
      </ul>

      <input class="input" v-model="newMessageText" />
      <hr />
      <h5>Record Audio</h5>

      <button v-if="!recorder" @click="record()" class="button">
        Record message
      </button>
      <button v-else @click="stop()" class="button">Stop</button>

      <audio v-if="newAudio" :src="newAudioURL" controls></audio>

      <hr />

      <button
        :disabled="!newMessageText || loading"
        class="bbutton is-success"
        type="text"
        @click="addMessage(user.value.uid)"
      >
        Send
      </button>
    </User>
  </main>
</template>

<script>
import User from "./User.vue";
import ChatMessage from "./ChatMessage.vue";
import { db } from "@/firebase";

export default {
  components: {
    User,
    ChatMessage,
  },
  data() {
    return {
      newMessageText: "",
      loading: false,
      messages: [],
      newAudio: null,
      recorder: null,
    };
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection("messages");
    },
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt").limitToLast(10),
    };
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;

      const { id: messageId } = this.messagesCollection.doc();

      await this.messagesCollection.doc(messageId).set({
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now(),
      });

      this.loading = false;
      this.newMessageText = "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background: #efefef;
  padding: 10px;
  border-radius: 0;
}

li {
  display: flex;
}
</style>
