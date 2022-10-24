<template>
  <v-card>
    <v-card-title>서지컬가이드 & 3D프린팅</v-card-title>
    <v-card-text>
      <div class="mb-1">
        <p class="py-0 my-0">
          주문대기
        </p>
        <span>주문을 아직 확인하지 않은 상태입니다.</span>
      </div>
      <div class="mb-1">
        <p class="py-0 my-0">
          제작중
        </p>
        <span>주문을 확인하여 3D프린팅 제작중입니다.</span>
      </div>
      <div class="mb-1">
        <p class="py-0 my-0">
          배송중
        </p>
        <span>치과로 3D프린팅을 배송하고 있습니다.</span>
      </div>
      <div class="mb-1">
        <p class="py-0 my-0">
          배송완료
        </p>
        <span>3D프린팅 배송이 완료되었습니다.</span>
      </div>
      <div class="mb-1">
        <p class="py-0 my-0">
          완료
        </p>
        <span>모든 작업이 완료되었습니다. 청구된 금액을 확인할 수 있습니다.</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-tooltip__content {
  top: 340px !important;
  .v-card {
    width: 150px;
    border-radius: 0px;
    &__title {
      padding: 8px !important;
      background: #000000;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
    }
    &__text {
      padding: 8px 12px !important;
      p {
        font-size: 10px;
        font-weight: 600;
        line-height: 12px;
        color: var(--v-primary-base);
      }
      span {
        font-size: 10px;
        color: #000000;
        margin: 0;
        letter-spacing: -0.3px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    top: 274px !important;
  }
}
</style>
