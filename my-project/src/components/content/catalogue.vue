<template>
<div class="main">
  <div 
  class="catalogue"
  v-for="(item, index) in allData" :key="index"
  >
    <div class="catalogue-title">
      {{ item.title }}
    </div>
    <div class="catalogue-content">
      <div
      v-for="(link, index) in item.links"
        :key="index" 
      class="link">
        <a href="#">
          {{ link }}
        </a>
      </div>
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

<style scoped lang="postcss">
.main{
  display: flex;
  flex-wrap: wrap;
  
  
}
  .catalogue{
    max-width: 23%;
    width: 20%;
    background-color: #fff;
    margin: 20px;
    height: 480px;
    border-radius: 5px;
    > .catalogue-title{
      padding: 5px;
      padding-left: 15px;
      background-color: #f5f5f5;
      font-size: 18px;
    }

    > .catalogue-content{
      padding: 5px;
      padding-left: 10px;
      cursor: pointer;
      > .link{
        margin-top: 10px;
        color: #2796db ;
        &:hover{
          color: gray;
        }
      }
    }
  }
</style>
