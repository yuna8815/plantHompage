<template>
  <section class="sub-content visual white--text text-center my-0 py-0">
    <div class="video-wrap">
      <video
        autoplay
        loop
        src="@/assets/buy/bg_video.mp4"
      />
    </div>
    <div class="content-wrap">
      <p>Plan.T를 구매해보세요!</p>
      <span class="d-block">직접 서지컬가이드를 제작하며 수술계획을 세울 수 있습니다.</span>
      <v-btn class="mt-10">
        Plan.T구매 문의하기
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.visual {
  position: relative;
  div.content-wrap {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  div.video-wrap {
    max-height: 650px;
    position: relative;
    overflow: hidden;
  }
  video {
    display: block;
    width: 100vw;
  }
  p {
    font-size: 48px;
    font-weight: 700;
    line-height: 57px;
    letter-spacing: -0.8px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.5px;
  }
  .v-btn {
    color: #FFFFFF !important;
    background: transparent !important;
    border-color: #FFFFFF;
    width: 240px;
    height: 46px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    &:hover {
      color: #000000 !important;
      background: #FFFFFF !important;
    }
  }
  @media screen and (max-width: 1200px) {
    video {
      width: 100%;
    }
    p {
      font-size: 38px;
      line-height: 45px;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
    }
    .v-btn {
      width: 208px;
      height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 36px;
      width: 200px;
      margin: 10px auto;
      word-break: keep-all;
    }
    span {
      width: 200px;
      margin: 0 auto;
      word-break: keep-all;
    }
    video {
      width: 200%;
      margin: 0 -50%;
      transform: scaleX(0.8);
    }
    div.video-wrap {
      min-height: 400px;
    }
  }
}
</style>
