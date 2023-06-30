<template>
  <div class="main">
    <div class="catalogue" v-for="(item, title) in store.allData" :key="title">
      <div class="catalogue-title">
        {{ $t(`allData[${title}].title`) }}

      </div>
      <div class="catalogue-content">
        <div
          v-for="(link, index) in item.links"
          :key="index"
          class="link"
          @click="store.addRecentLinks($t(`allData[${title}].links[${index}]`))"
        >
          <a href="#">
            {{$t(`allData[${title}].links[${index}]`)}}
          </a>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { mainStore } from "../../store";
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";

const store = mainStore();
function show(item) {
  item.show = !item.show;
}
console.log();

</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
}

.catalogue {
  max-width: 23%;
  width: 20%;
  background-color: #fff;
  margin: 20px;
  height: 480px;
  border-radius: 5px;

  .catalogue-title {
    padding: 5px;
    padding-left: 15px;
    background-color: #f5f5f5;
    font-size: 18px;
  }

  .catalogue-content {
    padding: 5px;
    padding-left: 10px;
    cursor: pointer;

    .link {
      margin-top: 10px;
      color: #2796db;

      &:hover {
        color: gray;
      }
    }
  }
}
</style>
