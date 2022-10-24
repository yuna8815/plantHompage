<template>
  <section>
    <AboutVisual />
    <AboutInterview />
    <AboutDesign />
  </section>
</template>
<script>
import AboutVisual from './AboutVisual.vue'
import AboutInterview from './AboutInterview.vue'
import AboutDesign from './AboutDesign.vue'

export default {
  components: {
    AboutVisual,
    AboutInterview,
    AboutDesign
  }
}
</script>
<style lang="scss" scoped>
  section {
    width: 100%;
  }
</style>
