<template>
  <section class="detail">
    <v-container class="mb-15">
      <p>수술계획 확인하기</p>

      <v-card>
        <v-form>
          <v-row>
            <v-col class="d-flex align-center py-8 py-md-10 justify-center justify-md-space-around">
              <v-subheader>
                0000.00.00 00:00
              </v-subheader>
              <div class="d-block d-md-flex text-center">
                <v-btn
                  depressed
                  disabled
                  class="btn-3"
                >
                  Plan.T 수술계획 확인
                </v-btn>
                <v-btn
                  depressed
                  disabled
                  class="btn-3 ml-lg-3"
                >
                  Plan.T 레포트 확인
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="bg">
            <v-col class="d-flex align-center py-6 justify-center justify-md-space-around">
              <div class="date text-center">
                <v-subheader class="justify-center ">
                  0000.00.00 00:00
                </v-subheader>
                <div>
                  <v-btn
                    depressed
                    class="btn-2 mb-4"
                  >
                    수정
                  </v-btn>
                  <p>담당자 확인 전까지<br>내용을 수정할 수 있습니다</p>
                </div>
                <!-- <div>
                  <p class="p-2">
                    담당자가 수정내용을<br>확인하였습니다.
                  </p>
                </div> -->
              </div>
              <div class="content mr-3">
                <div class="d-flex align-start">
                  <v-subheader>
                    수정내용
                  </v-subheader>
                  <v-textarea
                    hide-details
                    class="edit-textarea mt-0 pt-0"
                  />
                </div>
                <div class="d-flex align-center mt-4">
                  <v-subheader>
                    파일첨부
                  </v-subheader>
                  <v-btn class="btn-1">
                    파일확인
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>

    <Detailcomponent />
  </section>
</template>
<script>
import Detailcomponent from './Ordercomponent/DetailComponent.vue'

export default {
  components: {
    Detailcomponent
  }
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
    .v-subheader {
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      color: #000000;
    }
    .btn-3 {
      text-transform: none;
      border-radius: 21px;
      width: 293px;
      height: 42px;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.5px;
      line-height: 18px;
    }
    .row.bg {
      background: #F8F8F8;
      margin-bottom: 1px;
    }
    .date {
      .v-btn {
        width: 68px;
        height: 42px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.2px;
      }
      p {
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
        color: #666666;
        letter-spacing: -0.2px;
      }
      .p-2 {
        color: var(--v-primary-base);
      }
    }
    .content {
      width: 580px;
      .v-subheader {
        font-size: 18px;
        color: #000000;
        font-weight: 500;
        letter-spacing: -0.5px;
      }
      .v-btn {
        width: 293px;
        height: 42px;
        font-size: 16px;
        color: #000000;
        line-height: 16px;
        letter-spacing: -0.2px;
      }
    }
  }
  .btn-2 {
    width: 127px;
    height: 42px;
    border-radius: 5px;
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
        font-size: 14px;
        min-width: 90px;
      }
      .btn-3 {
        width: 160px;
        font-size: 15px;
      }
    }
    .date {
      p {
        font-size: 9px !important;
        width: 110px;
      }
    }
    .content {
      max-width: 300px !important;
      .v-btn {
        width: 220px !important;
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
          .v-subheader {
            padding-left: 20px;
          }
        }
      }
    }
    .v-card {
      .btn-3 {
        width: 200px;
      }
    }
  }
}

</style>
