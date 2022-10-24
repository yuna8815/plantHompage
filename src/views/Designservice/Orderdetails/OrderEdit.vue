<template>
  <section class="detail">
    <v-container class="mb-lg-15">
      <p>수술계획 확인하기</p>

      <!-- <div>
        <v-card>
          <v-form>
            <v-row>
              <v-col class="d-flex align-center py-8 py-md-10 justify-center justify-md-space-between">
                <v-subheader>
                  0000.00.00 00:00
                </v-subheader>
                <div class="d-block d-md-flex text-center">
                  <v-btn
                    depressed
                    class="btn-3"
                  >
                    Plan.T 수술계획 확인
                  </v-btn>
                  <v-btn
                    depressed
                    class="btn-3 ml-lg-3"
                  >
                    Plan.T 레포트 확인
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
        <div class="mt-2 mt-md-5 float-right">
          <v-dialog
            v-model="dialog"
            width="780"
            class="detail-dialog"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                depressed
                class="btn-2"
                v-bind="attrs"
                v-on="on"
              >
                수정 요청하기
              </v-btn>
            </template>

            <v-card class="pa-5 pa-md-10 px-md-12">
              <p>수정 요청하기</p>
              <div>
                <v-row>
                  <v-col class="d-flex">
                    <v-subheader class="mt-1 mt-md-0">
                      수정내용
                    </v-subheader>
                    <v-textarea
                      class="detail-textarea"
                      placeholder="입력해주세요"
                      hide-details
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col class="d-flex align-center">
                    <v-subheader>
                      파일첨부
                    </v-subheader>
                    <div class="d-flex align-center field-wrap detail-upload">
                      <v-text-field
                        hide-details
                        height="42"
                        class="align-center"
                      />
                      <v-btn
                        class="file"
                        height="42"
                      >
                        파일찾기
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <v-btn
                depressed
                class="btn-2 float-right my-5"
                @click="dialog = false"
              >
                수정 요청하기
              </v-btn>
              <v-img
                src="@/assets/btn_close.png"
                max-width="40"
                height="40"
                class="btn_close"
                @click="dialog = false"
              />
            </v-card>
          </v-dialog>
          <v-btn
            depressed
            class="btn-2 ml-2"
          >
            수술계획 확정
          </v-btn>
        </div>
      </div> -->

      <div>
        <v-card>
          <v-form>
            <v-row>
              <v-col class="d-flex align-center py-8 py-md-10 justify-center justify-md-space-around">
                <v-subheader>
                  0000.00.00 00:00
                </v-subheader>
                <div class="d-block max-width flex-grow-1 d-md-flex text-center justify-end">
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
                    class="btn-3 ml-lg-3 mr-0 mr-md-1 mr-lg-3 mt-2 mt-md-0"
                  >
                    Plan.T 레포트 확인
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="bg">
              <v-col class="d-flex align-center pt-3 pb-5 py-md-6 justify-center justify-md-space-around">
                <div class="date max-width text-left text-lg-center">
                  <v-subheader>
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
                <div class="content flex-grow-1 mr-3">
                  <div class="d-block d-md-flex align-start">
                    <v-subheader>
                      수정내용
                    </v-subheader>
                    <v-textarea
                      hide-details
                      class="edit-textarea mt-0 pt-0"
                    />
                  </div>
                  <div class="d-block d-md-flex align-center mt-4">
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
      </div>
    </v-container>

    <Detailcomponent />
  </section>
</template>
<script>
import Detailcomponent from './Ordercomponent/DetailComponent.vue'

export default {
  components: {
    Detailcomponent
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
      border-top: 1px solid #ECECEC;
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
        letter-spacing: -0.2px;
        color: #666666;
        &.p-2 {
          color: var(--v-primary-base);
        }
      }
    }
    .content {
      .max-width {
        max-width: 600px;
      }
      .v-subheader {
        font-size: 18px;
        color: #000000;
        font-weight: 500;
        letter-spacing: -0.5px;
      }
      .v-input__slot {
        height: 134px !important;
        textarea {
          height: 126px !important;
        }
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
        min-width: 90px !important;
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
      .date {
        p {
          width: 76px;
        }
      }
      .content {
        div {
          .v-subheader {
            padding: 0;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.2px;
            height: 36px;
          }
          .btn-1 {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
