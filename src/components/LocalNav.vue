<template>
  <aside>
    <v-container class="pt-8 pt-lg-15 text-center">
      <p>{{ title }}</p>
      <span> {{ subtitle(title) }} </span>
    </v-container>
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'GNB'
    ]),
    title() {
      return this.$route.matched[0].name
    }
  },
  methods: {
    subtitle(title) {
      switch(title) {
      case 'About': return 'Plan.T임플란트 치료를 위한 소프트웨어입니다';
      case 'How to': return 'Plan.T와 함께라면 쉽고 정확한 임플란트 수술이 가능합니다';
      case 'Buy': return '치과에서 직접 Plan.T를 구매할 수 있습니다';
      case 'FAQ': return 'Plan.T에 대해 자주 묻는 질문에 답해드립니다';
      case 'Design Service': return 'Plan.T에서 제공하는 디자인서비스를 이용해보세요';
      default: return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  background: linear-gradient(93.54deg, rgba(114, 224, 158, 0.2) 2.72%, rgba(0, 142, 207, 0.2) 98.31%);
  height: 271px;
  p {
    font-size: 48px;
    font-weight: 700;
    line-height: 57px;
    letter-spacing: -0.8px;
    margin: 0;
    padding-top: 80px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.03em;
  }
  @media screen and (max-width: 1200px) {
    height: 200px;
    p {
      font-size: 36px;
      line-height: 36px;
    }
    span {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 159px;
    p {
      font-size: 28px;
      line-height: 28px;
      padding-top: 58px;
    }
    span {
      font-size: 10px;
    }
  }
}
</style>
