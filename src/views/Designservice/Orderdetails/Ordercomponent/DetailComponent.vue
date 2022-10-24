<template>
  <v-container>
    <p>주문 상세내용</p>

    <v-card
      class="mb-2 mb-lg-5"
    >
      <v-form class="printing-form pt-2 pb-6">
        <v-row class="d-block d-lg-flex flex-nowrap mt-2 mt-lg-0 pb-2 pb-md-0">
          <v-col class="d-flex align-center pt-2 pb-0">
            <v-subheader>
              CT
            </v-subheader>
            <v-btn class="btn-1">
              파일확인
            </v-btn>
          </v-col>
          <v-col class="d-flex top-1 align-center pt-2 pb-0">
            <v-subheader>
              가이드 키트
            </v-subheader>
            <v-text-field
              placeholder="OSSTEM ONEGUIDE"
              class="text-field-1"
              hide-details
              disabled
            />
          </v-col>
        </v-row>
        <v-row class="d-block d-lg-flex mt-2 mt-lg-4 pb-2 pb-md-0">
          <v-col class="d-flex align-center pt-0 pt-md-2 pb-0">
            <v-subheader>
              스캔
            </v-subheader>
            <!-- <v-btn class="btn-1">
                파일확인
              </v-btn> -->
            <v-btn class="btn-1 tooltip">
              배송대기
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
                  <v-card-title>배송대기 안내</v-card-title>
                  <v-card-text>
                    <div class="mb-1 mt-4">
                      <p class="py-0 my-0">
                        환자 석고모형을 보내주세요.<br>
                        석고모형이 도착한 이후로 작업이 진행됩니다.
                      </p>
                    </div>
                    <div class="mb-1 mt-2">
                      <p class="py-0 my-0">
                        주소
                      </p>
                      <span>배송받을 주소</span>
                    </div>
                    <div class="mb-1">
                      <p class="py-0 my-0">
                        배송 담당자
                      </p>
                      <span>이름(연락처)</span>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tooltip>
            </v-btn>
          </v-col>
          <v-col class="d-flex align-center pt-2 pb-0">
            <v-subheader>
              임플란트
            </v-subheader>
            <v-text-field
              placeholder="Cowellmedi INNO Submerged"
              hide-details
              disabled
              class="text-field-1"
            />
          </v-col>
        </v-row>
        <v-row class="d-block d-lg-flex mt-2 mt-lg-4 pb-2 pb-md-0">
          <v-col class="d-flex bottom align-start pt-2 pb-0">
            <v-subheader>
              기타요청
            </v-subheader>
            <v-textarea
              :height="$vuetify.breakpoint.mdAndUp ? '126':'88'"
            />
          </v-col>
          <v-col class="d-flex align-start pt-2 pb-0">
            <v-subheader>
              수술치아
            </v-subheader>
            <v-img
              src="@/assets/teeth.png"
              width="280"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {

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
    border-radius: 0;
    border-top: 1px solid var(--v-primary-base);
    border-bottom: 1px solid var(--v-primary-base);
    .v-subheader {
      font-size: 18px;
      line-height: 18px;
      font-weight: 500;
      color: #000000;
    }
    i {
      font-size: 18px;
      margin-left: 5px;
    }
    .btn-1 {
      &.tooltip {
        color: var(--v-primary-base);
      }
      cursor: initial;
    }
  }
}

.v-tooltip__content {
  .v-card {
    width: 156px;
    border: 1px solid var(--v-primary-base);
    border-radius: 0px;
    &__title {
      padding: 4px 8px !important;
      background: var(--v-primary-base);
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
    }
    &__text {
      padding: 0 10px 6px !important;
      p {
        font-size: 10px;
        line-height: 12px;
        color: var(--v-primary-base);
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
  .detail {
    p {
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
    }
    .v-card {
      padding-bottom: 160px;
      .row:nth-child(2) {
        .col:nth-child(2) {
          padding-top: 56px !important;
        }
      }
      .col.top-1 {
        position: absolute;
        top: 120px;
      }

      .col.bottom {
        position: absolute;
        bottom: 0px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .printing-form {
    .col {
      padding: 0 !important;
    }
  }
}
</style>
