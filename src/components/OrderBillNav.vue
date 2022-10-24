<template>
  <div class="order">
    <v-container>
      <v-card class="mb-8">
        <v-card-title
          class="justify-center white--text"
        >
          월별 청구서
        </v-card-title>

        <v-row class="py-3 py-lg-0">
          <v-col
            cols="12"
            class="pt-4 pt-md-5 d-flex justify-center align-center px-8 px-lg-3"
          >
            <div class="d-flex align-center d-lg-block mobile">
              <v-select
                v-model="selected_years"
                :items="years"
                hide-details
                class="mx-2 my-3 pt-0"
              />
            </div>
            <div class="d-flex align-center d-lg-block mobile">
              <v-select
                v-model="selected_months"
                :items="months"
                hide-details
                class="mx-2 my-3 pt-0"
              />
            </div>
            <router-link
              to="/"
              class="link-to d-block my-0 mt-lg-5"
            >
              거래명세서 <span>확인하기</span>(PDF)
            </router-link>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    selected_years: '2022년',
    selected_months: '09월',
    chip:0,
    years: ['2020년', '2021년', '2022년', '2023년', '2024년'],
    months: ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월']
  })
}
</script>
<style lang="scss" scoped>
.order {
  .v-card {
    &__title {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.8px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: -0.5px;
    }
    .link-to {
    position: absolute;
    bottom: -60px;
    }
    .v-select {
      width: 116px !important;
    }
  }

  @media screen and (max-width: 1200px) {
    .v-card {
      width: 245px;
      &__title {
        font-size: 18px;
      }
      .link-to {
        width: 100%;
      }
      .mobile {
        p {
          word-break: keep-all;
          min-width: 90px;
          text-align: center;
        }
        .v-select {
          width: 98px !important;
        }
      }
    }
  }
  @media screen and (max-width:768px) {
    .v-card {
      width: 320px;
      height: 130px;
      margin-bottom: 70px !important;
      margin: auto;
      &__title {
        padding: 12px;
      }
      .link-to {
        width: 320px;
        right: -50%;
        transform: translateX(-50%);
      }
      .mobile {
        margin-bottom: 20px;
        p {
          word-break: keep-all;
          min-width: 90px;
          text-align: left;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
