<template>
  <section>
    <v-container>
      <h2 class="text-center my-5 my-lg-15">
        Plan.T와 함께합니다
      </h2>

      <v-row class="aling-center justify-center">
        <v-col
          v-for="item in partner"
          :key="item.id"
          cols="3"
          class="d-flex justify-center"
        >
          <v-img
            :alt="item.text"
            :src="item.src"
            :max-width="item.width"
            :max-height="item.height"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    partner : [
      { id: 1, text: '서울대학교', src: require('@/assets/partner/partner_1.png'), width: 211, height: 41 },
      { id: 2, text: '서울대학교병원', src: require('@/assets/partner/partner_2.png'), width: 190, height: 87 },
      { id: 3, text: '보건복지부', src: require('@/assets/partner/partner_3.png'), width: 184, height: 68 },
      { id: 4, text: 'SMD solutions', src: require('@/assets/partner/partner_4.png'), width: 161, height: 41 },
      { id: 5, text: '연세바른치과', src: require('@/assets/partner/partner_5.png'), width: 298, height: 74 },
      { id: 6, text: '유디치과', src: require('@/assets/partner/partner_6.png'), width: 341, height: 128 },
      { id: 7, text: '에이엠치과', src: require('@/assets/partner/partner_7.png'), width: 193, height: 70 },
    ]
  })
}
</script>
<style lang="scss" scoped>
section {
  height: 400px;
  .container {
    overflow: hidden !important;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.8px;
  }
  @media screen and (max-width: 1200px) {
    height: 312px;
    h2 {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }
}

</style>
