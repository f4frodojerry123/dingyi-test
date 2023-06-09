<script setup>
import contentScroll from "./contentScroll/index.vue";
import navList from "./navList.vue";
import catalogue from "./catalogue.vue"
</script>

<template>
  <div class="content">
    <contentScroll />
    <div class="catalogue">
      <navList />
      <catalogue/>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="postcss">
.content{
  display: flex;
  padding-top: 56px;
  background-color: #e5e6e6;
}
.catalogue{
  padding: 20px;
  width: 100%;
}
</style>
