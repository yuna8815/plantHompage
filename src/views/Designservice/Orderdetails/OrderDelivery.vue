<template>
  <section class="detail">
    <v-container class="mb-lg-15">
      <p>배송정보</p>

      <v-card>
        <v-form>
          <v-row class="bg">
            <v-col class="d-block d-lg-flex align-center pt-8 pb-6 flex-grow-1">
              <div class="d-flex align-center px-lg-3">
                <v-subheader>
                  운송장 번호
                </v-subheader>
                <p class="del-num">
                  0000-000-000-0000
                </p>
              </div>
              <div class="d-flex align-center px-lg-3">
                <v-subheader>
                  택배사
                </v-subheader>
                <p class="del-cop">
                  로젠택배
                </p>
              </div>
              <div class="d-flex align-center px-lg-3">
                <v-subheader>
                  배송현황
                </v-subheader>
                <p class="del-pre d-flex justify-center align-center">
                  배송중
                  <v-btn class="ml-2">
                    배송추적
                  </v-btn>
                </p>
                <!-- <p class="del-pre d-flex justify-center align-center">
                  배송완료
                </p> -->
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>

    <OrderConfirmCom />
    <Detailcomponent />
  </section>
</template>
<script>
import Detailcomponent from './Ordercomponent/DetailComponent.vue'
import OrderConfirmCom from './Ordercomponent/OrderConfirmCom.vue'

export default {
  components: {
    Detailcomponent,
    OrderConfirmCom
  },
  data: () => ({
    dialog: false,
  })
}
</script>

<style lang="scss" scoped>
.detail {
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
  .v-card {
    overflow: hidden;
    border-radius: 0;
    border-top: 1px solid var(--v-primary-base);
    border-bottom: 1px solid var(--v-primary-base);
    .row.bg {
      background: #F8F8F8;
      margin-bottom: 1px;
      .v-subheader {
        word-break: keep-all;
        min-width: unset;
        font-size: 18px;
        font-weight: 600;
        color: #000000;
      }
      .col {
        flex-grow: 0;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        margin: 0;
        .v-btn {
          box-shadow: none;
          color: #FFFFFF;
          background: #AFAFAF;
          width: 52px;
          height: 22px;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .detail {
    .container {
      margin-bottom: 70px !important;
      max-width: 452px;
    }
    p {
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
    }
    .v-card {
      .v-subheader {
        font-size: 14px !important;
        min-width: 90px !important;
      }
      .row.bg {
        p {
          font-size: 14px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .detail {
    .container {
      margin-bottom: 0 !important;
      &:first-child {
        .v-card {
          padding-bottom: 0 !important;
        }
      }
    }
    .v-card {
      .btn-3 {
        width: 200px;
      }
      .v-subheader {
        font-size: 12px;
      }
    }
  }
}

</style>
