<template>
  <div class="order">
    <v-container>
      <v-card class="mb-8">
        <v-card-title
          class="justify-center white--text"
        >
          <div class="d-flex align-center justify-space-between my-2">
            <v-btn
              depressed
            >
              <!-- 
                !TODO
                버튼 width 혹은 icon position 수정 
                -->
              {{ state.name }}
            </v-btn>
            <v-tooltip
              right
              color="transparent"
            >
            <!-- transform: translateY(calc(50% - 30px)) -->
              <template #activator="{ on, attrs }">
                <v-icon
                  class="alert"
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-plus-circle
                </v-icon>
              </template>

              <SteelPrinting v-if="$route.query.order == 'SP'" />
              <Steel v-if="$route.query.order == 'S'" />
              <Printing v-if="$route.query.order == 'P'" />
              <!-- 
                SP: '서지컬가이드 & 3D프린팅'
                S: '서지컬가이드'
                P: '3D프린팅'
              -->
            </v-tooltip>

            <span>D-00</span>
          </div>
          <div class="content my-3 mb-md-4">
            <p class="my-0">
              {{ state.title }}
            </p>
            <span>{{ state.desc }}</span>
          </div>
        </v-card-title>

        <v-row class="py-3 py-lg-0">
          <v-col
            cols="12"
            class="d-block justify-center align-center pt-5 px-8 pa-lg-8"
          >
            <div>
              <span>수술예정일</span>
              <p>0000.00.00</p>
            </div>
            <div>
              <span>환자정보</span>
              <p>환자이름(00.00.00)</p>
            </div>
            <div>
              <span>서비스 종류</span>
              <p>{{ getOrderType($route.query.order) }}</p>
            </div>
            <div>
              <span>주문일시</span>
              <p>0000.00.00 00:00</p>
            </div>
            <div>
              <span>담당자</span>
              <p class="mb-0">
                담당자이름
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <router-link
        to="/designservice/history"
        class="link-to d-block my-0 mt-lg-5"
      >
        주문 목록
      </router-link>
    </v-container>
  </div>
</template>
<script>
import SteelPrinting from '@/components/tooltip/SteelPrintingTooltip'
import Printing from '@/components/tooltip/PrintingTooltip'
import Steel from '@/components/tooltip/SteelTooltip'
export default {
  name: 'OrderDetailNavComponent',
  components: {
    SteelPrinting,
    Printing,
    Steel
  },
  data: () => ({
    state: {name: '', title: '', desc: ''}
  }),
  mounted() {
    this.getState(this.$route.query.state);
  },
  methods: {
    getOrderType(order) {
      switch(order) {
      case 'SP': return '서지컬가이드 & 3D프린팅'
      case 'S': return '서지컬가이드'
      case 'P': return '3D프린팅'
      }
    },
    getState(state) {
      /*
        R(Ready): '주문대기'
        D(Design): '디자인중'
        CR(ConfirmRequst): '확인요청'
        M(Modify): '수정중'
        C(Confirm): '확인완료'
        P(Produce): '제작중'
        DI(DeliveryIng): '배송중'
        DC(DeliveryComplete): '배송완료'
        F(Fin): '완료'
      */
      switch(state) {
      case 'R': this.state = {name: '주문대기', title: '현재 주문확인 대기중입니다.', desc: '주문확인 전까지 주문을 수정,취소 할 수 있습니다.'}; break;
      case 'D': this.state = {name: '디자인중', title: 'Plan.T를 이용한 임플란트 수술 디자인 중입니다.', desc: '1~2일내 디자인을 확인할 수 있습니다.'}; break;
      case 'CR': this.state = {name: '확인요청', title: 'Plan.T를 이용한 수술계획이 완료 되었습니다.', desc: '수술계획 수정요청 또는 확정해주세요.'}; break;
      case 'M': this.state = {name: '수정중', title: '임플란트 수술계획 수정중입니다.', desc: '1~2일내 디자인을 확인할 수 있습니다.'}; break;
      case 'C': this.state = {name: '확인완료', title: '', desc: ''}; break;
      case 'P': this.state = {name: '제작중', title: '', desc: ''}; break;
      case 'DI': this.state = {name: '배송중', title: '', desc: ''}; break;
      case 'DC': this.state = {name: '배송완료', title: '', desc: ''}; break;
      case 'F': this.state = {name: '완료', title: '', desc: ''}; break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.order {
  .v-card {
    background: transparent !important;
    &__title {
      div {
        width: 240px;
        .v-btn {
          height: 26px;
          background: transparent !important;
          border: 1px solid #FFFFFF;
          border-radius: 20px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.3px;
          cursor: initial;
        }
        span {
          font-size: 20px;
          font-weight: 500;
        }
      }
      .content {
        p {
          font-size: 18px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.5px;
        }
        span {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: -0.3px;
        }
      }
    }
    .row {
      background: #F8F8F8;
      padding: 0 0 8px !important;
      width: 280px;
      margin: auto;
    }
    .col {
      span {
        font-size: 12px;
        font-weight: 600;
        line-height: 12px;
        color: var(--v-primary-base);
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.2px;
      }
    }
  }
}
.v-icon {
  position: absolute !important;
  top: 22px;
  left: 102px;
  font-size: 18px;
  &::before {
    color: #FFFFFF;
    background: var(--v-primary-base) !important;
    border-radius: 50%;
  }
}


@media screen and (max-width: 1200px) {
  .order {
    .v-card {
      width: 245px;
      &__title {
        div {
          .v-btn {
            font-size: 12px;
          }
          span {
            font-size: 18px;
          }
        }
        .content {
          padding: 0 6px;
          p {
            font-size: 16px;
            line-height: 19px;
          }
          span {
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
      .row {
        width: 245px;
      }
      .col {
        span {
          font-size: 10px;
          font-weight: 600;
          line-height: 10px;
          color: var(--v-primary-base);
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: -0.3px;
        }
      }
    }
    .link-to {
      margin: 0;
      width: 245px;
    }
  }
  .v-icon {
    left: 82px;
  }
}
@media screen and (max-width:768px) {
  .v-card {
    width: 320px !important;
    margin: auto;
    &__title {
      padding: 12px;
      .v-btn {
        width: 94px;
      }
      span {
        font-size: 14px !important;
      }
      > div {
        width: 280px !important;
      }
      .content {
        span {
          font-size: 12px !important;
        }
      }
    }
    .row {
      width: 320px !important;
    }
  }
  .link-to {
    width: 320px !important;
    margin: auto !important;
  }
  .v-icon {
    left: 104px;
    top: 18px;
  }
}

</style>
