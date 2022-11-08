<template>
  <div>
    <h3>Home</h3>
    <User v-slot:user="{ user }">
      <div v-if="user.value">
        <UserProfile :user="user" />
        <ChatList :uid="user.value.uid" />
      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import ChatList from "./ChatList.vue";
import Login from "./Login";
import User from "./User";
import UserProfile from "./UserProfile";
export default {
  components: {
    Login,
    User,
    UserProfile,
    ChatList,
  },
};
</script>
