<template>
  <section class="bg">
    <v-container class="pt-12 pt-lg-15">
      <h2 class="text-center white--text mb-10">
        Plan.T와 함께 임플란트 치료를 시작해 보세요!
      </h2>
      <v-row class="justify-center text-center">
        <v-col
          v-for="item in users"
          :key="item.title"
          cols="4"
          class="d-flex flex-grow-0 px-2 px-lg-4 justify-center"
        >
          <v-card class="py-7">
            <v-card-title class="justify-center px-2">
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    users: [
      {title: 'Plan.T를\r\n이용한 수술', text: '0,000'},
      {title: 'Plan.T와\r\n함께하는 치과', text: '0,000'},
      {title: 'Plan.T를\r\n이용하는 기공사', text: '0,000'},
    ]
  })
}
</script>
<style lang="scss" scoped>
.bg {
  background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%);
  .container {
    height: 340px;
    max-width: 888px;
    h2 {
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: -0.8px;
    }
    .v-card {
      width: 260px;
      background: transparent;
      box-shadow: none;
      box-sizing: border-box;
      border: 1px solid #FFFFFF;
      border-radius: 10px;
      text-transform: none;
      white-space: pre-line;
      &__title {
        padding-top: 0;
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
        letter-spacing: -0.3px;
      }
      &__text {
        font-size: 42px;
        font-weight: 500;
        color: #FFFFFF;
      }
    }
    .col {
      max-width: 260px !important;
      flex-basis: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      height: 306px;
      h2 {
      font-size: 26px !important;
      }
      .v-card {
        width: 220px;
        &__title {
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
        }
        &__text {
          font-size: 42px;
          font-weight: 500;
          color: #FFFFFF;
        }
      }
      .col {
        max-width: 220px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      h2 {
      font-size: 18px !important;
      }
      .v-card {
        width: 99px;
        background: transparent;
        box-shadow: none;
        box-sizing: border-box;
        border: 1px solid #FFFFFF;
        border-radius: 10px;
        &__title {
          padding-top: 0;
          font-size: 13px;
          font-weight: 600;
          color: #FFFFFF;
        }
        &__text {
          font-size: 18px;
          font-weight: 500;
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>
