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
          3D프린팅 주문하기
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              환자 치아, 수술정보 입력하기
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              주문 완료
            </v-stepper-step>
          </v-stepper-header>
        </div>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-2 mb-lg-5"
            >
              <v-form class="printing-form py-1">
                <v-row class="d-block d-lg-flex mt-2 mt-lg-0 pb-2 pb-md-0">
                  <v-col class="d-flex align-center pt-2 pb-0">
                    <v-subheader class="align-start mt-5 mt-md-3">
                      이름
                    </v-subheader>
                    <v-text-field class="short-field" />
                  </v-col>
                  <v-col class="d-flex align-center pt-2 pb-0">
                    <v-subheader class="align-start birth mt-5 mt-md-3">
                      생년월일
                    </v-subheader>
                    <v-text-field class="short-field" />
                  </v-col>
                </v-row>
                <v-row class="d-block d-lg-flex mt-7 mt-md-5">
                  <div>
                    <v-col class="d-flex align-center py-1">
                      <v-subheader class="align-start mt-5 mt-md-3">
                        수술 날짜
                      </v-subheader>
                      <v-text-field class="short-field" />
                    </v-col>
                    <v-col class="d-flex align-center">
                      <v-subheader>서지컬가이드</v-subheader>
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
                    <v-col class="d-flex align-center mt-5 mt-lg-0">
                      <v-subheader>기타 첨부파일</v-subheader>
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
                  </div>
                  <div>
                    <v-col class="d-flex align-start py-0">
                      <v-subheader class="align-start mt-3">
                        기타요청
                      </v-subheader>
                      <div class="etc field-wrap">
                        <v-textarea

                          :height="$vuetify.breakpoint.mdAndUp ? '186':'88'"
                        />
                      </div>
                    </v-col>
                  </div>
                </v-row>
                <v-row class="mt-8 mt-lg-4">
                  <v-col class="d-flex align-center pt-9 pt-md-4 pb-4 pb-md-3">
                    <v-subheader class="align-start mt-5 mt-md-3">
                      담당자
                    </v-subheader>
                    <v-select
                      class="short-field"
                      placeholder="선택해주세요"
                      :items="items"
                    />
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
          </v-stepper-content>


          <!-- <v-stepper-content step="2">
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
                <p class="mt-6 ml-4 mt-md-10 mt-lg-6">
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
          </v-stepper-content> -->
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
  span {
    font-size: 18px;
    color: #000000;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
    margin: 0 10px;
  }
  .v-subheader {
    min-width: 94px;
  }
  .v-text-field {
    &.short-field {
      max-width: 280px;
    }
  }
  .v-form {
    .row:first-child {
      border-bottom: 1px solid #ECECEC;
    }
    .row:last-child {
      border-top: 1px solid #ECECEC;
    }
  }
  .printing-form {
    .row:nth-child(2) {
      > div {
        width: 50%;
      }
    }
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
  .v-dialog {
    .v-card {
      .printing-form {
        .row:nth-child(2) {
          > div {
            width: 100% !important;
          }
        }
      }
      .v-text-field {
        &.short-field {
          max-width: 100% !important;
        }
      }
      .v-subheader {
        word-break: keep-all !important;
        min-width: 95px !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .v-dialog .v-card .field-wrap {
    width: 100%;
  }
  .v-form {
    .row:last-child {
      margin-top: 80px !important;
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
