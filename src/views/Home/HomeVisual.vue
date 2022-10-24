<template>
  <section class="visual">
    <v-container class="d-flex align-center justify-center">
      <div class="opacity" />
      <div class="contents text-center">
        <v-img
          src="@/assets/logo_main.png"
          :width="$vuetify.breakpoint.smAndDown ? '140':'220'"
          :height="$vuetify.breakpoint.smAndDown ? '34':'53'"
          class="d-inline-block"
        />
        <h1 class="tit mt-7">
          임플란트 치료를 위한 <br>소프트트웨어입니다
        </h1>
        <p class="subtit mt-4">
          Plan.T와 함께 쉽고 정확한 임플란트 수술계획을 세워보세요
        </p>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'HomeVisual'
}
</script>
<style lang="scss" scoped>
.visual {
  background: url('@/assets/main_visual.png') no-repeat center center / cover;
  height: 700px;
  position: relative;
  .container {
    height: 100%;
  }
  .opacity {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    background: rgba(255,255,255, .5);
  }
  .contents{
    z-index: 1;
    .tit {
      font-size: 48px;
      line-height: 58px;
      font-weight: 700;
      letter-spacing: -0.8px;
    }
    .subtit {
      font-size: 14px;
      line-height: 14px;
      font-weight: 400;
      letter-spacing: -0.3px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .visual {
    height: 583px;
  }
}
@media screen and (max-width: 768px) {
  .contents {
    .tit {
      font-size: 32px !important;
      line-height: 38px !important;
    }
    .subtit{
      font-size: 12px !important;
    }
  }
}
</style>
