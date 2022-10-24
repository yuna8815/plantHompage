<template>
  <div class="bg py-8 py-md-12 white--text">
    <p>디자인서비스는 모두 월결제로 진행 됩니다!</p>
    <span>매달 이용한 모든 항목을 한번에 결제할 수 있습니다.</span>
  </div>
</template>
<script>
export default {
  name: 'OrderMonth'
}
</script>
<style lang="scss" scoped>
.bg {
  background: linear-gradient(93.54deg, #72E09E 2.72%, #008ECF 98.31%);
  text-align: center;
  p {
    font-size: 42px;
    font-weight: 600;
    line-height: 42px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.5px;
  }
  @media screen and (max-width: 1200px) {
    p {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.8px;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.3px;
    }
  }
  @media screen and (max-width: 768px) {
    p {
      width: 280px;
      margin: 10px auto;
      font-size: 24px;
      line-height: 29px;
    }
  }
}
</style>
