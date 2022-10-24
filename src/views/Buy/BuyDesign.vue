<template>
  <section class="sub-content text-center py-10">
    <p class="white--text py-3">
      직접 제작한 서지컬가이드를 업로드만 하면<br>3D프린팅 제작이 가능합니다!
    </p>

    <v-container>
      <v-row class="justify-center">
        <v-col
          v-for="item in design"
          :key="item.id"
          class="d-flex flex-grow-0 justify-center"
        >
          <v-card class="d-flex align-center justify-center">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-7">
      <v-btn
        tile
        depressed
        to="/designservice"
      >
        디자인서비스 바로가기
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    design: [
      {id:1, title:'서지컬가이드\r\n업로드'},
      {id:2, title:'3D프린팅\r\n제작'},
      {id:3, title:'배송'}
    ]
  })
}
</script>
<style lang="scss" scoped>
section {
  background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%);
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.8px;
  }
  .col {
    position: relative;
    &::after {
      content: url('@/assets/next.png');
      width: 9px;
      height: 20px;
      position: absolute;
      top: 70px;
      left: -5px;
    }
    &:first-child {
      &::after {
        display: none;
      }
    }
  }
  .v-card {
    color: #FFFFFF;
    height: 142px;
    background: transparent;
    box-shadow: none !important;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    text-transform: none;
    white-space: pre-line;
    &__title {
      font-size: 18px;
      font-weight: 600;
    }
    width: 176px;
  }
  .v-btn {
    width: 240px;
    height: 46px !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.2px;
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 30px;
      line-height: 36px;
    }
    .v-card {
      height: 118px;
      width: 146px !important;
      &__title {
      font-weight: 500;
      padding: 0;
      }
    }
    .col {
      &::after {
        top: 60px;
      }
    }
    .v-btn {
    width: 208px;
    height: 40px !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.2px;
    }
  }

  @media screen and (max-width: 768px) {
    .row {
      display: block !important;
    }
    .col {
      position: relative;
      &::after {
        content: url('@/assets/next.png');
        width: 7px;
        height: 17px;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: rotate(90deg) translateY(12%);
      }
    }
    .v-card {
      white-space: unset;
      width: 100% !important;
      max-width: 280px;
      height: 40px;
    }
    p {
      font-size: 24px;
      line-height: 29px;
      width: 320px;
      margin: 10px auto;
      word-break: keep-all !important;
    }
  }
}
</style>
