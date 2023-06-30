<script setup>
</script>

<template>
  <div class="navList">
    <div class="List">{{ $t("navList1") }}</div>
    <div class="List">{{ $t("navList2") }}</div>
    <div class="List">{{ $t("navList3") }}</div>
  </div>
</template>
<script setup>
import { mainStore } from "../../store";

const store = mainStore();
</script>
<style scoped lang="scss">
.navList {
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #2796db;
  border-radius: 5px;
  color: white;

  .List {
    width: 33%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
