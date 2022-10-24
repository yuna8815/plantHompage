<template>
  <section class="detail">
    <v-container
      v-if="$route.query.state == 'F'"
      class="mb-lg-15">
      <p>청구내용</p>
    </v-container>

    <v-container
      v-if="isDelivery"
      class="mb-lg-15">
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
                  <template
                    v-if="$route.query.state == 'DI'"
                  >
                    배송중
                    <v-btn class="ml-2">
                      배송추적
                    </v-btn>
                  </template>
                  <template
                    v-else
                  >
                    배송완료
                  </template>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>

    <v-container
      v-if="isSurgeryPlan"
      class="plan mb-lg-15"
    >
      <p>{{ isComfirm ? '수술계획 확인하기':'수술계획 확정' }}</p>
      <v-card>
        <v-form>
          <template
            v-for="(plan, idx) of surgeryPlan"
          >
            <v-row
              :key="idx"
              :class="isComfirm ? '':'bg'"
            >
              <v-col class="d-flex align-center py-8 py-md-10 justify-center justify-md-space-around">
                <v-subheader>
                  {{ plan.date }}
                </v-subheader>
                <div class="d-block max-width flex-grow-1 d-md-flex text-center justify-end">
                  <div class="px-4 px-md-0">
                    <v-btn
                      depressed
                      :disabled="plan.modify != null"
                      class="btn-3"
                    >
                      Plan.T 수술계획 확인
                    </v-btn>
                    <template v-if="!isComfirm">
                      <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
                    </template>
                  </div>
                  <div class="px-4 px-md-0">
                    <v-btn
                      depressed
                      :disabled="plan.modify != null"
                      class="btn-3 ml-lg-3 mr-0 mr-md-1 mr-lg-3 mt-2 mt-md-0"
                    >
                      Plan.T 레포트 확인
                    </v-btn>
                    <template v-if="!isComfirm">
                      <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
                    </template>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row
              v-if="plan.modify"
              :key="'modify'+idx"
            >
              <v-col class="d-flex align-center pt-3 pb-5 py-md-6 justify-center justify-md-space-around">
                <div class="date max-width text-left text-lg-center">
                  <v-subheader>
                    0000.00.00 00:00
                  </v-subheader>
                  <template
                    v-if="plan.isEditable"
                  >
                    <v-btn
                      depressed
                      class="btn-2 mb-4"
                      @click="doEdit"
                    >
                      수정
                    </v-btn>
                    <p>담당자 확인 전까지<br>내용을 수정할 수 있습니다</p>
                  </template>
                  <template
                    v-else
                  >
                    <p class="ml-3 ml-md-0 px-md-3">
                      담당자가 수정내용을<br/>확인하였습니다.
                    </p>
                  </template>
                </div>
                <div class="content flex-grow-1 mr-3">
                  <div class="d-block d-md-flex align-start">
                    <v-subheader>
                      수정내용
                    </v-subheader>
                    <v-textarea
                      v-model="plan.modify.desc"
                      readonly
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
          </template>
          <!-- <v-row class="bg">
            <v-col class="d-flex align-center py-6 justify-center justify-md-space-around">
              <v-subheader>
                0000.00.00 00:00
              </v-subheader>
              <div class="d-block max-width flex-grow-1 d-md-flex text-center justify-end">
                <div class="px-4 px-md-0">
                  <v-btn
                    depressed
                    class="btn-3"
                  >
                    Plan.T 수술계획 확인
                  </v-btn>
                  <template v-if="$route.query.state == 'C'">
                    <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
                  </template>
                </div>
                <div class="px-4 px-md-0">
                  <v-btn
                    depressed
                    class="btn-3 ml-lg-3 mr-0 mr-md-1 mr-lg-3 mt-2 mt-md-0"
                  >
                    Plan.T 레포트 확인
                  </v-btn>
                  <template v-if="$route.query.state == 'C'">
                    <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
                  </template>
                </div>
              </div>
            </v-col>
          </v-row> -->
        </v-form>
      </v-card>

      <div
        v-if="$route.query.state == 'CR'"
        class="text-right pt-4"
      >
        <v-btn
          class="btn-2 mr-3"
          depressed
        >
          수정 요청하기
        </v-btn>
        <v-btn
          depressed
          class="btn-2"
        >
          수술계획 확정
        </v-btn>
      </div>
    </v-container>

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

              <v-btn
                v-if="$route.query.state == 'R'"
                class="btn-1 tooltip"
              >
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
                  <DeliveryTooltip />
                </v-tooltip>
              </v-btn>
              <v-btn
                v-else
                class="btn-1"
              >
                파일확인
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
      <div
        v-if="$route.query.state == 'R'"
        class="float-right none"
      >
        <v-btn
          depressed
          class="btn-2"
        >
          주문수정
        </v-btn>
        <v-btn
          depressed
          class="btn-2 ml-2"
        >
          주문취소
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
<script>
import DeliveryTooltip from '@/components/tooltip/DeliveryTooltip'
export default {
  components: {
    DeliveryTooltip
  },
  data: () => ({
    isSurgeryPlan: false,
    isDelivery: false,
    surgeryPlan: [],
    isComfirm: false,
  }),
  mounted() {
    console.log('id =', this.$route.query.id, '서비스 종류 =', this.$route.query.order, '상태 =', this.$route.query.state)
    this.isComfirm = ['CR','M'].includes(this.$route.query.state)
    this.getState(this.$route.query.state);
    
    const _surgeryPlan = [
      {
        date: '0000.00.00 00:00',
        isEditable: false,
        modify: {desc: '요청사항123', file: ''}
      },
      {
        date: '0000.00.00 00:00',
        isEditable: true,
        modify: {desc: '요청사항123', file: ''}
      },
      {
        date: '0000.00.00 00:00',
        modify: null
      }
    ]
    if(['CR','M'].includes(this.$route.query.state)) _surgeryPlan.forEach(el => this.surgeryPlan.push(el))
    else  this.surgeryPlan.push(_surgeryPlan[_surgeryPlan.length-1])
  },
  methods: {
    getState(state) {
      switch(state) {
      case 'CR':
      case 'M':
      case 'C':
      case 'P':
        this.isSurgeryPlan = true;
        this.isDelivery = false;
        break;
      case 'DI':
      case 'DC':
      case 'F':
        this.isSurgeryPlan = true;
        this.isDelivery = true;
        break;
      default:
        this.isSurgeryPlan = false;
        this.isDelivery = false;
        break;
      }
    },
    doEdit() {
      // 수정요청하기 입력 모달 오픈
    }
  }
}
</script>
<style lang="scss" scoped>
.plan .v-form .row:last-child:not(:first-child) {
  background: #F8F8F8;
}
.plan .row + .row {
  border-top: 1px solid #ECECEC;
}

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
      p {
      width: 100px;
      font-size: 14px;
      color: #979797;
      font-weight: 600;
      letter-spacing: -0.3px;
      margin: 5px auto 0;
      cursor: pointer;
      }
      .v-icon {
        font-size: 16px;
        &::before {
        color: #979797;
        }
      }
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
        color: var(--v-primary-base);
        letter-spacing: -0.2px;
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
  .btn-2 {
    width: 127px;
    height: 42px;
    border-radius: 5px;
  }
}
</style>
