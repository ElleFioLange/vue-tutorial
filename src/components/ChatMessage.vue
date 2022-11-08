<template>
  <div class="message" :class="{ 'from-user': owner }">
    {{ message.text }}
    <br /><span class="sender">from UID {{ message.sender }}</span>
  </div>
</template>

<script>
export default {
  props: ["message", "owner"],
};
</script>

<style scoped>
.message {
  background-color: #dddddd;
  color: black;
  margin-right: 10px;
  margin-left: auto;
  border-radius: 5px;
  padding: 12px;
}

.from-user {
  margin-left: 10px;
  margin-right: auto;
  background-color: #91bbff;
}

.sender {
  font-size: 10px;
}
</style>
