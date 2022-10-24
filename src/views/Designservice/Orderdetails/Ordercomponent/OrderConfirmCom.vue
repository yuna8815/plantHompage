<template>
  <v-container class="mb-lg-15">
    <p>수술계획 확정</p>

    <v-card>
      <v-form>
        <v-row class="bg">
          <v-col class="d-flex align-center pt-10 pb-8 justify-center justify-md-space-around">
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
                <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
              </div>
              <div class="px-4 px-md-0">
                <v-btn
                  depressed
                  class="btn-3 ml-lg-3 mr-0 mr-md-1 mr-lg-3 mt-2 mt-md-0"
                >
                  Plan.T 레포트 확인
                </v-btn>
                <p>파일 다운로드 <v-icon>mdi-tray-arrow-down</v-icon></p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>

export default {
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
      .row.bg {
        p {
          font-size: 12px;
        }
        .v-icon {
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
