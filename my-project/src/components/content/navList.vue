<script setup>
</script>

<template>
  <div class="navList">
    <div class="List" @click="plus">總覽 </div>
    <div class="List">個人</div>
    <div class="List" >資訊中心</div>
  </div>
</template>
<script>
import { mainStore } from '../../store';
export default {
  setup(){
    const store = mainStore();
    return{
      store
    }
  }
};
</script>
<style scoped lang="scss">
.navList{
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #2796db;
  border-radius: 5px;
  color: white;
  
  .List{
    width: 33%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;

  }
}

</style>
