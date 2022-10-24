<template>
  <v-dialog
    v-model="$props.params.isOpened"
    width="980"
  >
    <v-card>
      <v-stepper
        v-model="e1"
      >
        <div class="d-flex justify-space-between align-center mx-5 mx-md-10 mt-2 mt-md-5">
          서지컬가이드 & 3D프린팅 주문하기
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              환자 치아정보 입력하기
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              수술정보 입력하기
            </v-stepper-step>

            <v-divider />

            <v-stepper-step step="3">
              완료
            </v-stepper-step>
          </v-stepper-header>
        </div>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-2 mb-lg-5"
            >
              <v-form>
                <v-row class="d-block d-lg-flex mt-2 mt-lg-0">
                  <v-col class="d-flex align-center">
                    <v-subheader class="align-start mt-5 mt-md-3">
                      이름
                    </v-subheader>
                    <v-text-field />
                  </v-col>
                  <v-col class="d-flex align-center">
                    <v-subheader class="align-start birth mt-5 mt-md-3">
                      생년월일
                    </v-subheader>
                    <v-text-field />
                  </v-col>
                </v-row>
                <v-row class="mt-1 mt-lg-5">
                  <v-col class="d-flex align-center">
                    <v-subheader>CT</v-subheader>
                    <div class="d-flex align-center field-wrap">
                      <v-text-field
                        hide-details
                        height="42"
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
                <v-row class="mt-6 mt-md-8">
                  <v-col class="d-flex align-start">
                    <v-subheader class="d-block d-md-flex">
                      스캔
                    </v-subheader>
                    <div class="width100">
                      <div class="d-block d-md-flex align-center">
                        <input
                          v-model="value"
                          type="radio"
                          value="파일 업로드"
                          height="42"
                        >
                        <span class="upload">파일 업로드</span>
                        <div class="d-flex field-wrap">
                          <v-text-field
                            hide-details
                            height="42"
                          />
                          <v-btn
                            class="file"
                            height="42"
                          >
                            파일찾기
                          </v-btn>
                        </div>
                      </div>
                      <div class="d-flex align-center mt-6 mt-md-10">
                        <input
                          v-model="value"
                          type="radio"
                          value="치아 석고모형 배송"
                        >
                        <span>치아 석고모형 배송</span>

                        <v-tooltip
                          right
                          color="transparent"
                        >
                          <template #activator="{ on, attrs }">
                            <v-icon
                              class="alert"
                              v-bind="attrs"
                              v-on="on"
                            >
                              mdi-alert-circle-outline
                            </v-icon>
                          </template>
                          <v-card>
                            <v-card-title>치아 석고모형 배송 안내</v-card-title>
                            <v-card-text class="mt-4">
                              <p>치아 석고모형을 보내주세요.<br>석고모형이 도착한 이후로 작업이 진행됩니다.</p>
                              <div class="mb-3">
                                <p class="blue--text py-0 my-0">
                                  주소
                                </p>
                                <span>배송받을 주소</span>
                              </div>
                              <div>
                                <p class="blue--text py-0 my-0">
                                  배송 담당자
                                </p>
                                <span>이름(연락처)</span>
                              </div>
                            </v-card-text>
                          </v-card>
                        </v-tooltip>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>

            <v-btn
              color="primary"
              class="float-right"
              @click="e1 = 2"
            >
              다음
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-5"
            >
              <v-form class="page2">
                <v-row class="d-block d-lg-flex mt-2 mt-lg-0 pb-7 pb-md-0">
                  <div>
                    <v-col class="d-flex align-center pb-0">
                      <v-subheader class="align-start mt-3 page2-sub">
                        수술 날짜
                      </v-subheader>
                      <v-text-field />
                    </v-col>
                    <v-col class="d-flex align-center py-0">
                      <v-subheader class="align-start birth mt-3 page2-sub">
                        가이드키트
                      </v-subheader>
                      <v-select
                        placeholder="선택해주세요"
                        :items="items"
                      />
                    </v-col>
                    <v-col class="d-flex align-center py-0">
                      <v-subheader class="align-start birth mt-3 page2-sub">
                        임플란트
                      </v-subheader>
                      <v-select
                        placeholder="선택해주세요"
                        :items="items"
                      />
                    </v-col>
                  </div>
                  <v-col class="d-flex flex-grow-0 align-start">
                    <v-subheader class="align-start birth mt-3 page2-sub">
                      수술치아
                    </v-subheader>
                    <v-img
                      src="@/assets/teeth.png"
                      :width="$vuetify.breakpoint.mdAndUp ? '342':'194'"
                      :max-width="$vuetify.breakpoint.mdAndUp ? '342':'194'"
                      :height="$vuetify.breakpoint.mdAndUp ? '167':'95'"
                    />
                  </v-col>
                </v-row>
                <v-row class="mb-5 mb-lg-0 mt-15 mt-md-5">
                  <v-col class="d-flex align-start py-0">
                    <v-subheader class="align-start mt-3 page2-sub">
                      기타요청
                    </v-subheader>
                    <div class="flex-grow-1 etc">
                      <v-textarea
                        :height="$vuetify.breakpoint.mdAndUp ? '126':'88'"
                      />
                    </div>
                  </v-col>
                </v-row>
                <v-row class="pt-8 pt-lg-0 mt-16 mt-lg-0">
                  <div>
                    <v-col class="d-flex align-center">
                      <v-subheader class="align-start mt-3 page2-sub">
                        담당자
                      </v-subheader>
                      <v-select
                        placeholder="선택해주세요"
                        :items="items"
                      />
                    </v-col>
                  </div>
                </v-row>
              </v-form>
            </v-card>

            <div class="float-right">
              <v-btn
                class="pre mr-2"
                @click="e1 = 1"
              >
                이전
              </v-btn>
              <v-btn
                @click="e1 = 3"
              >
                다음
              </v-btn>
            </div>
          </v-stepper-content>

          <!-- <v-stepper-content step="3">
            <div class="dialog-wrap">
              <v-img
                src="@/assets/order_com.png"
                :width="$vuetify.breakpoint.lgAndUp ? '320':'184'"
                :height="$vuetify.breakpoint.lgAndUp ? '226':'130'"
                class="mx-auto"
              />
              <p class="text-center mt-5 mb-0">
                주문이 완료 되었습니다.<br>주문내역에서 자세한 내용을 확인할 수 있습니다.
              </p>
            </div>

            <v-btn
              color="primary"
              class=" list-btn d-block mx-auto mt-5"
              @click="e1 = 1"
            >
              주문내역 확인하기
            </v-btn>
          </v-stepper-content> -->


          <v-stepper-content step="3">
            <div class="dialog-wrap">
              <div class="d-block d-md-flex justify-center py-5 py-lg-10">
                <div>
                  <v-img
                    src="@/assets/order_com_2.png"
                    class="mx-auto"
                    :width="$vuetify.breakpoint.lgAndUp ? '116':'167'"
                    :height="$vuetify.breakpoint.lgAndUp ? '108':'156'"
                  />
                </div>
                <p class="mt-6 ml-4 mt-md-6">
                  주문이 완료 되었습니다.<br>환자 석고모형을 센터로 보내주세요!
                </p>
              </div>
              <div class="center-wrap">
                <p>센터주소 :</p>
                <p>담당자 :</p>
                <p>담당자 연락처 :</p>
              </div>
            </div>

            <v-btn
              color="primary"
              class=" list-btn d-block mx-auto mt-5"
              @click="e1 = 1"
            >
              주문내역 확인하기
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <v-divider />

      <v-img
        src="@/assets/btn_close.png"
        max-width="40"
        height="40"
        class="btn_close"
        @click="[$props.params.isOpened = false, e1 = 1]"
      />
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    params: Object
  },
  data: () => ({
    e1: 1,
    value: '',
    items: ['ABC', 'DEF', 'GHI', 'JKL', 'MNO']
  })
}
</script>
<style lang="scss" scoped>
.v-dialog {
  .v-form {
    &.page2 {
      .row:first-child,
      .row:last-child {
        > div {
          width: 50%;
          .v-text-field {
            max-width: 280px;
          }
        }
      }
      .row:last-child {
        border-top: 1px solid #ECECEC;
      }
    }
  }
  span {
    font-size: 18px;
    color: #000000;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
    margin: 0 10px;
  }
}

.v-tooltip__content {
  .v-card {
    width: 156px;
    border: 1px solid var(--v-primary-base);
    border-radius: 0px;
    &__title {
      padding: 8px 16px !important;
      background: var(--v-primary-base);
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
    }
    &__text {
      p {
        font-size: 10px;
        line-height: 12px;
        color: #000000;
      }
      span {
        font-size: 10px;
        margin: 0;
        letter-spacing: -0.3px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .v-form {
    &.page2 {
      .row:first-child,
      .row:last-child {
        > div {
          width: 100% !important;
          .v-text-field {
            max-width: 100% !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .v-dialog .v-card .field-wrap {
    width: 100%
  }
  .v-form {
    &.page2 {
      .row:last-child {
        margin-top: 80px !important;
      }
    }
  }
  .v-stepper {
    > div:first-child {
      height: 50px;
      font-size: 16px;
      line-height: 16px;
      word-break: keep-all;
    }
    .dialog-wrap {
      > div:first-child {
        p {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }

    .col {
    height: 40px !important;
    }
    .field-wrap {
      &::after {
        top: 30px !important;
        font-size: 9px !important;
      }
    }
    .width100 {
      span {
        &.upload {
          display: inline-block;
        }
        font-size: 13px !important;
      }
    }
    &__header {
      width: 20%;
    }
    &__wrapper {
      .v-btn {
        width: 64px !important;
        height: 34px !important;
        font-size: 14px;
      }
      .file {
        height: 28px !important;
        width: 57px !important;
      }
      .list-btn {
        width: 138px !important;
      }
    }
  }
  .v-subheader {
    margin-right: 0px !important;
  }
}

</style>
