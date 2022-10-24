<template>
  <section class="sub-content d-none d-lg-block">
    <v-container>
      <v-row class="d-block d-sm-flex text-center justify-center">
        <v-col class="py-15">
          <v-card>
            <v-card-title class="justify-center">
              Plan.T를 구매하고 싶어요!
            </v-card-title>
            <v-card-text>
              치과에서 직접 Plan.T를 이용하여 임플란트 수술계획을 세울수 있습니다
            </v-card-text>
            <v-btn class="mt-3">
              1:1 구매문의 바로가기
            </v-btn>
          </v-card>
        </v-col>
        <v-col class="py-15">
          <v-card>
            <v-card-title class="justify-center">
              Plan.T 사용법을 직접 배워보고 싶어요!
            </v-card-title>
            <v-card-text>
              Plan.T 사용법을 직접 배워볼 수 있습니다
            </v-card-text>
            <v-btn class="mt-3">
              1:1문의 바로가기
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
  .col:last-child {
    border-left: 1px solid #E3E3E3;
  }
  .v-card {
    box-shadow: none !important;
    &__title {
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: -0.08em;
    }
    &__text {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.03em;
      color: #000000 !important;
    }
  }
  .v-btn {
    width: 240px;
    height: 46px !important;
  }
}
</style>
