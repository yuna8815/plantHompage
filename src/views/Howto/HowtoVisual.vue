<template>
  <section class="sub-content py-6 d-flex flex-wrap justify-center">
    <div class="clear-fix">
      <div class="float-left">
        <v-img
          src="@/assets/howto/img_1.png"
          :width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '580':'340'"
          :height="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '300':'175'"
        />
      </div>
      <div class="float-right text-left">
        <p><span>임</span><span>플</span><span>란</span><span>트</span> <span>환</span><span>자</span>를<br>관리할 수 있습니다</p>
        <span class="subtit">환자별 치아 정보 관리 및 히스토리 관리</span>
      </div>
    </div>
    <div class="clear-fix">
      <div class="float-right">
        <v-img
          src="@/assets/howto/img_2.png"
          :width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '580':'340'"
          :height="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '300':'175'"
        />
      </div>
      <div class="float-left text-right">
        <p><span class="_blue">쉽</span><span class="_blue">고</span> <span class="_blue">정</span><span class="_blue">확</span><span class="_blue">한</span><br>임플란트 수술계획</p>
        <span class="subtit">CT,스캔 정합 / 신경관 분석 / 가상치아 디자인 / 골밀도 분석을<br>통하여 쉽고 정확한 임플란트 수술을 계획해보세요.</span>
      </div>
    </div>
    <div class="clear-fix">
      <div class="float-left">
        <v-img
          src="@/assets/howto/img_3.png"
          :width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '580':'340'"
          :height="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '300':'175'"
        />
      </div>
      <div class="float-right">
        <p>직접 <span>서</span><span>지</span><span>컬</span><span>가</span><span>이</span><span>드</span>를<br>제작해보세요!</p>
        <span class="subtit">임플란트 수술계획을 통한 정확한 서지컬 가이드 제작</span>
      </div>
    </div>
    <div class="clear-fix">
      <div class="float-right">
        <v-img
          src="@/assets/howto/img_4.png"
          :width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '580':'340'"
          :height="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '300':'175'"
        />
      </div>
      <div class="float-left text-right">
        <p><span class="_blue">온</span><span class="_blue">라</span><span class="_blue">인</span><span class="_blue">플</span><span class="_blue">랫</span><span class="_blue">폼</span>을 통해<br>쉽게 주문할 수 있어요!</p>
        <span class="subtit">수술계획에서 3D프린팅까지 임플란트 치료를 한번에!<br>월별결제로 결제를 쉽게!</span>
      </div>
    </div>
    <!-- <div
      v-for="item in imgs"
      :key="item.id"
    >
      <v-img
        :alt="item.text"
        :src="item.src"
        :width="$vuetify.breakpoint.mdAndUp ? '580':'340'"
        :height="$vuetify.breakpoint.mdAndUp ? '300':'175'"
      />
    </div> -->
  </section>
</template>
<script>
export default {
  data: () => ({
    // imgs: [
    //   {id: 1, text: '환자관리 참고 이미지', src: require('@/assets/howto/img_1.png')},
    //   {id: 2, text: '수술계획 참고 이미지', src: require('@/assets/howto/img_2.png')},
    //   {id: 3, text: '서지컬가이드 참고 이미지', src: require('@/assets/howto/img_3.png')},
    //   {id: 4, text: '온라인주문 참고 이미지', src: require('@/assets/howto/img_4.png')},
    // ]
  })
}
</script>
<style lang="scss" scoped>
section {
  max-width: 1200px;
  .clear-fix {
    & > div {
      max-width: 580px;
      margin: 30px 10px;
    }
    & div:nth-child(2){
      width: 580px;
    }
    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }
  p {
    padding-top: 10px;
    font-size: 36px;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: -0.8px;
  }
  span {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: #159E60;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      left: 12px;
      top: -8px;
    }
    &._blue::before {
      background: #008ECF;
    }
  }
  .subtit {
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: #666666;
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .clear-fix {
      & div:nth-child(2){
        width: 340px !important;
      }
    }
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    .clear-fix {
      div {
      text-align: left !important;
      float: unset !important;
      }
    }
    p {
      font-size: 28px;
      line-height: 36px;
    }
    .subtit {
      font-size: 13px;
      line-height: 15px;
    }
  }

}
</style>
