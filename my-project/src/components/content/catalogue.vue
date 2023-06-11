<template>
  <div class="main">
    <div class="catalogue" v-for="(item, index) in store.allData" :key="index">
      <div class="catalogue-title">
        {{ item.title }}
      </div>
      <div class="catalogue-content">
        <div v-for="(link, index) in item.links" :key="index" class="link" @click="store.addRecentLinks(link)">
          <a href="#">
            {{ link }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mainStore } from '../../store';
import { ref, reactive } from "vue";
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
