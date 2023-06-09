<script setup>
</script>

<template>
  <div class="navList">
    <div class="List">總覽</div>
    <div class="List">個人</div>
    <div class="List" >資訊中心</div>
  </div>
</template>
<script>
export default {
  name:"navList",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="postcss">
.navList{
  display: flex;
  width: 95%;
  margin: 0 auto;
  background-color: #2796db ;
  border-radius: 5px;
  color: white;
  > .List{
    width: 33%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    
  }
}

</style>
