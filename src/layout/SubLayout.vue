<template>
  <v-main>
    <LocalNav />
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
import LocalNav from '@/components/LocalNav'

export default {
  components: {
    LocalNav
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding: 0;
    max-width: 100%;
  }
</style>
