<template>
  <v-card>
    <v-card-title>배송대기 안내</v-card-title>
    <v-card-text>
      <div class="mb-1 mt-4">
        <p class="py-0 my-0">
          환자 석고모형을 보내주세요.<br>
          석고모형이 도착한 이후로 작업이 진행됩니다.
        </p>
      </div>
      <div class="mb-1 mt-2">
        <p class="py-0 my-0">
          주소
        </p>
        <span>배송받을 주소</span>
      </div>
      <div class="mb-1">
        <p class="py-0 my-0">
          배송 담당자
        </p>
        <span>이름(연락처)</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-tooltip__content {
  .v-card {
    width: 156px;
    border: 1px solid var(--v-primary-base);
    border-radius: 0px;
    &__title {
      padding: 4px 8px !important;
      background: var(--v-primary-base);
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
    }
    &__text {
      padding: 0 10px 6px !important;
      p {
        font-size: 10px;
        line-height: 12px;
        color: var(--v-primary-base);
      }
      span {
        font-size: 10px;
        margin: 0;
        letter-spacing: -0.3px;
      }
    }
  }
}
</style>
