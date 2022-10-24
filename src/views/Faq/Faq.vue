<template>
  <section class="sub-content">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="faq in faqs"
        :key="faq.id"
      >
        <v-expansion-panel-header>
          <v-img
            src="@/assets/question.png"
            :max-width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '21':'16'"
            contain
            class="mx-8 mr-4"
          />
          <div class="py-sm-1 py-md-2 py-lg-3 ">
            {{ faq.title }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-5">
          {{ faq.text }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>
<script>
export default {
  data: () => ({
    faqs : [
      {id:1, title: 'Plan.T는 누구나 사용할 수 있나요?', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'},
      {id:2, title: 'Plan.T를 구매하고 싶어요.', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'},
      {id:3, title: 'Plan.T를 직접 배워보고 싶어요.', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'},
      {id:4, title: 'Plan.T에서 제공하는 디자인서비스는\r\n무엇인가요? ', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'},
      {id:5, title: 'CAD를 이용하여 서지컬가이드를 어떻게\r\n확인하나요?', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'},
      {id:6, title: 'PDF를 이용하여 수술계획을 어떻게\r\n확인하나요?', text: 'Plan.T는 치과와 별도계약으로 프로그램을 제공하고 있습니다.\r\nPaln.T구매를 원하는 경우 회원 가입 후에 구매문의를 남겨주세요.\r\n공휴일제외 1~2일 이내로 담당자가 연락드리겠습니다.'}
    ]
  })
}
</script>
<style lang="scss" scoped>
section {
  max-width: 890px;
  padding: 40px 0 80px;


  .v-expansion-panel {
    margin: 10px 0;
    &::before{
    box-shadow: none !important;
    }
    &-header {
      padding: 0 !important;
      font-size: 24px !important;
      font-weight: 600;
      line-height: 42px;
      border: 1px solid transparent;
      border-radius: 35px !important;
      background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, #72E09E 0%, #008ECF 100%) !important;
      background-origin: border-box;
      background-clip: content-box, border-box;
      letter-spacing: -0.03em;
      &--active,
      &:hover {
        color: #008ECF;
      }
    }
    &-content {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.05px;
      margin-left: 46px;
          white-space: pre-line !important;
    }
  }

  @media screen and (max-width: 1200px) {
    max-width: 768px;
    .v-expansion-panel {
      &-header {
        font-size: 20px !important;
        line-height: 20px;
      }
      &-content {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
    white-space: pre-line !important;
    .v-expansion-panel {
      padding: 0;
      &-header {
        font-size: 15px !important;
        line-height: 18px;
      }
      &-content {
        margin-left: 10px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}


</style>
