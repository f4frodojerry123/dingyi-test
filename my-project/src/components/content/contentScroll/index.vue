<script setup>
</script>

<template>
  <div class="scroll bg-white">

    <div v-for="(item, title) in store.allData" :key="title" class="section">
      <div
        class="collaps bg-slate-200 w-40 leading-10 pl-4 cursor-pointer"
        @click="show(item)"
      >
      {{ $t(`allData[${title}].title`) }}
      <DownOutlined />
      </div>
      <div
        v-for="(link, index) in item.links"
        :key="index"
        v-show="item.show"
        class="link w-40 leading-8 pl-4 pr-2 cursor-pointer hover:bg-slate-200"
        @click="store.addRecentLinks(link)"
      >
        <a href="#">{{$t(`allData[${title}].links[${index}]`)}}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { mainStore } from "../../../store";
import { storeToRefs } from "pinia";
import { DownOutlined  } from '@ant-design/icons-vue';

const store = mainStore();
function show(item) {
  item.show = !item.show;
}
</script>

<style scoped lang="scss">
</style>
