<template>
  <div class="recent flex">
    <div class="recent-title">最近使用功能</div>
    <div
      class="recent-list flex"
      v-for="(link, index) in recentLinks"
      :key="index"
      @click="store.addRecentLinks(link)"
    >
      <a href="#">{{ link }}</a>
    </div>
  </div>
</template>
<script setup>
import { mainStore } from "../../store";
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";

const store = mainStore();
const { recentLinks } = storeToRefs(store);
</script>
<style scoped lang="scss">
.recent {
  padding-left: 20px;
  padding-top: 20px;
}
.recent-title {
  padding: 5px 10px;
  background-color: #f9c518;
  color: white;
  border-radius: 5px;
}
.recent-list {
  margin-left: 10px;
  color: #2796db;
  cursor: pointer;
  a {
    margin: auto 0;
  }
}
.recent-list:hover {
  color: gray;
}
</style>
