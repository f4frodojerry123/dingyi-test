<template>
  <router-view />
  <div v-if="!route.name" @click="page()">index</div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
onBeforeMount(() => {
  // router.push('/work1')
  console.log(route.name);
});
const page = () => {
  router.push('/work1')
}
</script>
<style scoped lang="scss">

</style>
