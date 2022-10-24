<template>
  <section class="visual sub-content py-5">
    <div class="text-center pt-14">
      <p>Paln.T를 이용하여 직접 서지컬가이드를 제작해 보세요.</p>

      <div class="media">
        미디어 영역
      </div>

      <div class="mt-10">
        <v-btn
          tile
          depressed
          to="/howto"
        >
          사용방법 자세히 보기
        </v-btn>
        <v-btn
          tile
          depressed
          to="/buy"
        >
          Plan.T 구매하기
        </v-btn>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.visual {
  height: 752px;
  background: #ECECEC;
  p {
    font-size: 28px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -0.03em;
  }
  .media {
  max-width: 820px;
  height: 440px;
  line-height: 440px;
  background: #FFF;
  margin: 0 auto;
  }
  .v-btn {
    width: 256px;
    height: 40px;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 400;
  }
}

</style>
