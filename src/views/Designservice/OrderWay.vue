<template>
  <section class="sub-content">
    <div class="text-center white--text py-14">
      <p>디자인서비스는 모두 월결제로 진행 됩니다!</p>
      <span>매달 이용한 모든 항목을 한 번에 결제 할 수 있습니다.</span>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="py-7 py-md-10 mt-8">
              <p>임플란트 치료를 위해 서지컬가이드와 3D프린팅 제작이 필요해요!</p>
              <v-btn
                class="mt-2 mb-8"
                @click="doOpen(0)"
              >
                서지컬가이드 & 3D프린팅 주문하기
              </v-btn>
              <v-row class="justify-center align-start px-sm-8">
                <v-col
                  v-for="item in design_both"
                  :key="item.id"
                  cols="auto"
                  class="d-flex flex-grow-0 justify-center px-0 px-sm-2"
                >
                  <v-card class="d-flex align-center justify-center">
                    <v-card-title>
                      {{ item.title }}
                    </v-card-title>
                  </v-card>
                  <div class="text-left mt-2 ml-1">
                    <div
                      v-if="item.subtit=!null ? `${item.subtit}`:''"
                      class="subtit mb-1"
                    >
                      {{ item.subtit }}
                    </div>
                    <div class="text">
                      {{ item.text }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="py-10 mt-8">
              <p>3D프린팅은 치과에서 하겠습니다! 서지컬가이드를 제작해 주세요.</p>
              <v-btn
                class="mt-2 mb-8"
                @click="doOpen(1)"
              >
                서지컬가이드 주문하기
              </v-btn>
              <v-row class="justify-center align-start">
                <v-col
                  v-for="item in design_surgical"
                  :key="item.id"
                  cols="auto"
                  class="d-flex flex-grow-0 justify-center px-1 px-lg-2"
                >
                  <v-card class="d-flex align-center justify-center">
                    <v-card-title>
                      {{ item.title }}
                    </v-card-title>
                  </v-card>
                  <div class="text-left mt-2 ml-1">
                    <div
                      v-if="item.subtit=!null ? `${item.subtit}`:''"
                      class="subtit mb-1"
                    >
                      {{ item.subtit }}
                    </div>
                    <div class="text mt-0">
                      {{ item.text }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="py-10 mt-8">
              <p>디자인은 제가 했으니 3D프린팅만 부탁해요!</p>
              <v-btn
                class="mt-2 mb-8"
                @click="doOpen(2)"
              >
                3D프린팅 주문하기
              </v-btn>
              <v-row class="justify-center align-start">
                <v-col
                  v-for="item in design_3d"
                  :key="item.id"
                  class="d-flex flex-grow-0 justify-center"
                >
                  <v-card class="d-flex align-center justify-center">
                    <v-card-title>
                      {{ item.title }}
                    </v-card-title>
                  </v-card>
                  <div class="text-left mt-2 ml-1">
                    <div
                      v-if="item.subtit=!null ? `${item.subtit}`:''"
                      class="subtit"
                    >
                      {{ item.subtit }}
                    </div>
                    <div class="text mt-1">
                      {{ item.text }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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

export default {
  components: {
    OrderCommon,
    OrderBoth,
    OrderPrinting,
    OrderSurgical,
  },
  data: () => ({
    orderCommonParams: {isOpened: false},
    order1Params: {isOpened: false},
    order2Params: {isOpened: false},
    order3Params: {isOpened: false},
    design_both: [
      {id:1, title:'디자인 서비스\r\n주문', subtit: '치아정보 업로드 필수', text: 'CT:DICOM 압축파일\r\n스캔:STL,PLY,OBJ파일\r\nor 석고모형 배송' },
      {id:2, title:'Plan.T\r\n서지컬가이드 제작\r\n& 수술계획', subtit: '서지컬가이드와 수술계획 제공', text: '주문확인 이후 1~2일 이내 완료' },
      {id:3, title:'Plan.T\r\n수술계획\r\n확정',subtit: '', text: '수술계획 확정 전까지 수정요청이 가능'},
      {id:4, title:'3D프린팅\r\n제작', subtit: '', text: '수술계획 확정 이후 1~2일 이내 완료' },
      {id:5, title:'배송', subtit: '', text: '' },
    ],
    design_surgical: [
      {id:1, title:'디자인 서비스\r\n주문', subtit: '치아정보 업로드 필수', text: 'CT:DICOM 압축파일\r\n스캔:STL,PLY,OBJ파일\r\nor 석고모형 배송'},
      {id:2, title:'Plan.T\r\n서지컬가이드 제작\r\n& 수술계획', subtit: '서지컬가이드와 수술계획 제공', text: '주문확인 이후 1~2일 이내 완료'},
      {id:3, title:'Plan.T\r\n수술계획\r\n확정', subtit: '', text: '수술계획 확정 전까지 수정요청이 가능'},
      {id:4, title:'Plan.T\r\n서지컬가이드\r\n완료 및 다운로드', subtit: 'STL파일 다운로드 가능', text: '3D프린팅 가능 / CAD뷰어로 확인 가능'},
    ],
    design_3d: [
      {id:1, title:'Plan.T\r\n서지컬가이드\r\n업로드', subtit: 'STL파일 업로드', text: '3D프린팅이 가능한 파일 업로드'},
      {id:2, title:'3D프린팅\r\n제작', subtit: '', text: '수술계획 확정 이후 1~2일 이내 완료'},
      {id:3, title:'배송', subtit: '', text: ''},
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
    doOpen(i) {
      // 회계담당자, 자주쓰는 가이드 키드&임플란트 정보가 없을 경우
      // if() {
      // this.showCommonModal();
      // }
      // else {
      switch(i) {
      case 0: this.showOrder1Modal(); break;
      case 1: this.showOrder2Modal(); break;
      case 2: this.showOrder3Modal(); break;
      default: null
      }
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%);
  .container {
    max-width: 1200px !important;
  }
  & > div {
    margin: 0 auto;
    & > p {
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.8px;
    }
    span {
      font-size: 18px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: -0.5px;
    }
  }
  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.8px;
  }
  .v-btn {
    width: 300px;
    height: 46px !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.2px;
    border: 1px solid #FFFFFF;
    background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%) !important;
    color: #FFFFFF !important;
    &:hover {
      border: 1px solid #FFFFFF;
      color: #FFFFFF !important;
    }
  }
  .v-card {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1) !important;
    border-radius: 10px;
    text-transform: none;
    white-space: pre-line;
    &__title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: -0.5px;
    }
    & .v-card{
      width: 176px;
      height: 142px;
      margin: 0 5px;
      box-shadow: none !important;
      border: 1px solid transparent;
      border-radius: 10px;
      background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #72E09E 0%, #008ECF 100%) !important;
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .col {
      position: relative;
      flex-direction: column;
      &::after {
        content: url('@/assets/next_b.png');
        width: 9px;
        height: 20px;
        position: absolute;
        top: 75px;
        left: -4px;
      }
      &:first-child {
        &::after {
          display: none;
        }
      }
    }
    .subtit {
      font-size: 10px;
      line-height: 12px;
      color: var(--v-primary-base);
      letter-spacing: -0.2px;
    }
    .text {
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
      color: #979797;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      max-width: 750px !important;
      padding-top: 0;
    }
    & > div {
      & > p {
      font-size: 30px;
      line-height: 36px;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: -0.3px;
      }
    }
    p {
      font-size: 20px;
      line-height: 20px;
    }
    .v-card {
      & .v-card {
        width: 146px;
        margin: 0 10px;
      }
    }
    .v-btn {
    width: 260px;
    height: 40px !important;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      max-width: 330px !important;
      padding: 0;
    }
    & > div {
      & > p {
        max-width: 290px;
        margin: 10px auto;
        font-size: 24px;
        line-height: 29px;
      }
    }
    p {
      max-width: 260px;
      word-break: keep-all;
      margin: 0 auto 12px;
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
    }
    .v-card {
      & .v-card {
        width: 280px;
        height: 40px;
        margin: 0;
      }
      &__title {
        white-space: nowrap;
      }
    }
    .col {
      margin-bottom: 10px;
      &::after {
        width: 7px !important;
        height: 17px !important;
        top: -12px !important;
        left: 50% !important;
        transform: rotate(90deg) translateY(16%);
      }
    }
  }
}
</style>
