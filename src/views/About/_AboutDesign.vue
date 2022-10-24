<template>
  <section class="sub-content white--text py-14 text-center">
    <span>PlanT를 직접 사용하지 않더라도</span>
    <p class="py-3">
      디자인 서비스를 제공합니다
    </p>

    <v-container>
      <v-row>
        <v-col
          v-for="item in design"
          :key="item.id"
          class="d-flex flex-grow-1 justify-center"
        >
          <v-card class="d-flex align-center justify-center">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="pt-7">
      <v-btn
        tile
        depressed
        to="/designservice"
      >
        디자인서비스 바로가기
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    design: [
      {id:1, title:'디자인 서비스 주문'},
      {id:2, title:'Plan.T\r\n서지컬가이드 제작\r\n수술계획'},
      {id:3, title:'Plan.T\r\n수술계획\r\n확정'},
      {id:4, title:'3D프린팅\r\n제작'},
      {id:5, title:'배송'},
    ]
  })
}
</script>
<style lang="scss" scoped>
section {
  height: 458px;
  background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%);
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.03px;
  }
  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.08px;
  }
  .col {
    position: relative;
    &::after {
      content: url('@/assets/next.png');
      width: 9px;
      height: 20px;
      position: absolute;
      top: 70px;
      right: -5px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  .v-card {
    color: #FFFFFF;
    height: 142px;
    background: transparent;
    box-shadow: none !important;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    text-transform: none;
    white-space: pre-line;
    &__title {
      font-size: 18px;
      font-weight: 600;
    }
    width: 176px !important;
  }
  .v-btn {
    width: 240px;
    height: 46px !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.2px;
  }
}
</style>
