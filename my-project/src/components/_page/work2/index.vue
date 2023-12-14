<template>
  <div @click="changePage()">work2</div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
// defineProps({
//   msg: String,
// })

const changePage = () => {
  router.push('/work1')
}

const count = ref(0)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
