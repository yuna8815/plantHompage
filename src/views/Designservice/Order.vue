<template>
  <section class="sub-content text-center">
    <div class="py-12">
      <v-container>
        <v-row>
          <v-col
            v-for="(item, i) in designs"
            :key="i"
            cols="12"
            lg="4"
          >
            <v-card>
              <v-card-title class="justify-center pt-8">
                {{ item.title }}
              </v-card-title>

              <v-btn
                class="custom"
                @click="doOpen(i)"
              >
                {{ item.btn }}
              </v-btn>

              <p class="py-4 mb-0">
                {{ item.subtit }}
              </p>
              <v-card-text class="py-0 pb-8">
                {{ item.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <OrderMonth />

    <div class="my-page py-12">
      <p>자주 사용하는 임플란트 정보와 치과 정보를 관리할 수 있습니다</p>
      <span class="d-block pb-8">가이드키트 / 임플란트 / 치과정보 관리를 통해 효율적으로 주문해 보세요!</span>
      <v-btn to="/">
        마이페이지
      </v-btn>
    </div>

    <OrderCommon :params="orderCommonParams" />
    <OrderBoth :params="order1Params" />
    <OrderSurgical :params="order2Params" />
    <OrderPrinting :params="order3Params" />
  </section>
</template>
<script>
import OrderCommon from '@/components/modal/OrderCommon.vue'
import OrderBoth from '@/components/modal/OrderBoth.vue'
import OrderPrinting from '@/components/modal/OrderPrinting.vue'
import OrderSurgical from '@/components/modal/OrderSurgical.vue'
import OrderMonth from './OrderMonth.vue'

export default {
  components: {
    OrderCommon,
    OrderBoth,
    OrderPrinting,
    OrderSurgical,
    OrderMonth
  },
  data: () => ({
    orderCommonParams: {isOpened: false},
    order1Params: {isOpened: false},
    order2Params: {isOpened: false},
    order3Params: {isOpened: false},
    designs: [
      {title: '서지컬가이드와\r\n3D프린팅 제작이 필요해요!', btn: '서지컬가이드 & 3D프린팅 주문하기', subtit: '치아정보만 업로드하면\r\n3D프린팅을 바로 배송합니다', text: '기본 임플란트 80,000원 / 추가 임플란트 30,000원\r\n추말, 공휴일, 배송 제외 3~5일'},
      {title: '서지컬가이드\r\n제작이 필요해요!', btn: '서지컬가이드 주문하기', subtit: '치아정보만 업로드하면\r\n서지컬가이드와 수술계획을 제공합니다', text: '기본 임플란트 20,000원 / 추가 임플란트 10,000원\r\n추말, 공휴일, 배송 제외 1~3일'},
      {title: 'Plan.T를 이용하여\r\n서지컬가이드를 제작했어요!', btn: '3D프린팅 주문하기', subtit: '서지컬가이드만 업로드하면\r\n3D프린팅을 배송합니다', text: '기본 임플란트 40,000원 / 추가 임플란트 5,000원\r\n추말, 공휴일, 배송 제외 1~2일'}
    ]
  }),
  methods: {
    showCommonModal() {
      this.orderCommonParams= {isOpened: true}
    },
    showOrder1Modal() {
      this.order1Params= {isOpened: true}
    },
    showOrder2Modal() {
      this.order2Params= {isOpened: true}
    },
    showOrder3Modal() {
      this.order3Params= {isOpened: true}
    },
    doOpen(index) {
      // 회계담당자, 자주쓰는 가이드 키드&임플란트 정보가 없을 경우
      // if() {
      // this.showCommonModal();
      // }
      // else {
      console.log(index)
      switch(index) {
      case 0: this.showOrder1Modal(); break;
      case 1: this.showOrder2Modal(); break;
      case 2: this.showOrder3Modal(); break;
      default : null
      }
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.8px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.3px;
  }
  .v-card {
    box-shadow: none !important;
    border: 1px solid transparent;
    border-radius: 10px;
    background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #72E09E 0%, #008ECF 100%) !important;
    background-origin: border-box;
    background-clip: content-box, border-box;
    text-transform: none;
    white-space: pre-line;
    &__title {
      font-size: 28px;
      font-weight: 600;
      line-height: 35px;
      letter-spacing: -0.8px;
    }
    &__text {
      font-size: 12px;
      font-weight: 400;
      color: #666666 !important;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: -0.5px;
    }
  }
  .v-btn {
    width: 240px;
    height: 46px !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.2px;
    &.custom {
      width: 300px;
      border: 1px solid #FFFFFF;
      background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%) !important;
      color: #FFFFFF !important;
      &:hover {
        border: 1px solid #FFFFFF;
        color: #FFFFFF !important;
      }
    }
  }
}

  @media screen and (max-width: 1200px) {
    .v-card {
      white-space: initial;
      &__title {
        font-size: 22px;
        line-height: 26px;
      }
      &__text {
        white-space: pre-line;
      }
    }
    .v-btn {
      width: 240px;
      height: 40px !important;
      &.custom {
        width: 260px;
      }
    }
    .my-page {
      p {
        font-weight: 700;
      }
      .v-btn {
        width: 208px;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .v-card {
      white-space: pre-line;
      &__title {
        font-weight: 700;
      }
    }
    .my-page {
      p {
        font-size: 24px;
        max-width: 280px;
        line-height: 28px;
        margin: 10px auto;
      }
      span {
        max-width: 280px;
        margin: 0 auto;
        line-height: 20px;
        word-break: keep-all;
      }
    }
    .v-dialog {
      .v-card {
        &__title {
          font-size: 15px !important;
        }
      }
    }
  }
</style>
