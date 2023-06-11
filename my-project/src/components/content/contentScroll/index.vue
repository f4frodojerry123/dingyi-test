<script setup>
</script>

<template>
  <div class="scroll bg-white">
    <div v-for="(item, index) in store.allData" :key="index" class="section">
      <div class="collaps bg-slate-200 h-10 w-40 leading-10 pl-4 cursor-pointer" @click="show(item)">
        {{ item.title }}
      </div>
      <div 
      v-for="(link, index) in item.links" :key="index" v-show="item.show"
        class="link w-40 leading-8 pl-4 pr-2 cursor-pointer hover:bg-slate-200"
        @click="store.addRecentLinks(link)">
        <a href="#">{{ link }}</a>
      </div>
    </div>

  </div>
</template>
<script>
import { ref, reactive } from "vue"
import { mainStore } from '../../../store';
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = mainStore();
    function show(item) {
      item.show = !item.show
    };
    return {
      store,
      show,
    }
  }

};
</script>

<style scoped lang="scss">

</style>
