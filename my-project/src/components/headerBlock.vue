

<template>
  <div class="header bg-white fixed h-14 border-y-2 border-gray-200 flex justify-between w-full">
    <div class="header-logo h-3/4 my-auto w-1/12 flex">
      <img
        src="../assets/vue.svg"
        alt=""
        class="header-logo header-logo-img h-full ml-2"
      />
      <h2 class="my-auto ml-2 bg-1 cursor-pointer"
      @click="plus">nuHRM</h2>
    </div>

    <div class="navbar flex mr-5">
      <div class="navbar-btn cursor-pointer hover:bg-slate-200 p-1 rounded">
        <img src="../assets/bell.svg" alt="" />
      </div>
      <div class="navbar-btn cursor-pointer hover:bg-slate-200 p-1 rounded">
        <img src="../assets/question.svg" alt="" />
      </div>
      <div class="navbar-btn cursor-pointer hover:bg-slate-200 p-1 rounded">
        <img src="../assets/apps.svg" alt="" />
      </div>
      <div class="user flex my-auto cursor-pointer hover:bg-slate-200 p-1 pl-3 pr-3 rounded">
        <div class="user-img rounded-full bg-slate-400 mr-1"></div>
        <div class="user-btn mt-1" @click="plus">陳品元</div>
        <div class="user-arrow">
          <img src="../assets/arrow-down.svg" alt="" >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mainStore } from '../store';
import { ref, reactive} from "vue"
export default {
  setup(){
    const store = mainStore();
    return{
      store,
    }
  }
};
</script>
<style scoped lang="less">

.navbar {
  .navbar-btn {
    margin: auto 0;
    margin-right: 10px;
    img {
      height: 20px;
      }
  }
}
.user{
  .user-img{
    width: 32px;
    height: 32px;
    
  }
  .user-arrow{
    margin: auto 0;
    margin-left: 10px;
    
  }
}
</style>
