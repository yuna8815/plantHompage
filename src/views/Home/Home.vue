<template>
  <v-main>
    <HomeVisual />
    <HomeContent />
    <HomePartner />
  </v-main>
</template>
<script>
import HomeVisual from './HomeVisual.vue'
import HomeContent from './HomeContent.vue'
import HomePartner from './HomePartner.vue'

export default {
  components: {
    HomeVisual,
    HomeContent,
    HomePartner
  }
}
</script>
