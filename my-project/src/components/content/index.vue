<script setup>
import contentScroll from "./contentScroll/index.vue";
import navList from "./navList.vue";
import catalogue from "./catalogue.vue"
import recent from "./recent.vue"
</script>

<template>
  <div class="content">
    <contentScroll />
    <div class="catalogue">
      <navList />
      <recent />
      <catalogue />
    </div>

  </div>
</template>
<script>

</script>
<style scoped lang="scss">
.content {
  display: flex;
  padding-top: 56px;
  background-color: #e5e6e6;
}

.catalogue {
  padding: 20px;
  width: 100%;
}
</style>
