<script setup>
</script>

<template>
  <div class="scroll bg-white">
    <div 
    v-for="(item, index) in allData" :key="index" class="section"
    v-show="scrollShow">
      <div 
      class="collaps bg-slate-200 h-10 w-40 leading-10 pl-4 cursor-pointer"
      @click="show(item)">
        {{ item.title }}
      </div>
      <div
        v-for="(link, index) in item.links"
        :key="index"
        v-show="item.show"
        class="link h-10 w-40 leading-10 pl-4 pr-2 cursor-pointer hover:bg-slate-200">
        {{ link }}
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      allData: [
        {
          title: "個人中心",
          show: 0,
          links: [
            "通知",
            "便利貼",
            "職務代理人簽核作業",
            "薪資明細",
            "費用申請作業",
            "績效考核報告",
          ],
        },
        {
          title: "工作事項",
          show: 0,
          links: [
            "工作清單",
            "工作交辦",
          ],
        },
        {
          title: "排班管理",
          show: 0,
          links: [
            "預排班表",
            "班表查詢",
          ],
        },
        {
          title: "帳號管理",
          show: 0,
          links: [
            "設定",
            "通知設定",
            "登入記錄查詢",
            "Google整合設定",
            "Microsoft整合設定",
            "Line整合設定",
            "Wechat整合設定"
          ],
        },
        {
          title: "考勤管理",
          show: 0,
          links: [
            "出勤紀錄",
            "出勤異常明細表",
            "請假作業",
            "銷假記錄",
            "外出登記作業",
            "外出簽到、簽退",
            "假期查詢",
            "請假、出缺勤統計",
            "事先加班申請",
            "補休/調休申請",
          ],
        },
        {
          title: "電子表單",
          show: 0,
          links: [
            "電子表單申請",
            "電子表單簽核",
          ],
        },
      ],
      scrollShow:1
    };
  },
  methods: {
    show(item){
      item.show = !item.show
      
    }
  },
};
</script>
<style scoped lang="scss">



</style>
