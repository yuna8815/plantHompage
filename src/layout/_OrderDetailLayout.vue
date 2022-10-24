<template>
  <v-main>
    <v-container class="d-block d-md-flex my-10">
      <OrderDetailNav />
      <router-view />
    </v-container>
  </v-main>
</template>
<script>
import OrderDetailNav from '@/components/OrderDetailNav'

export default {
  components: {
    OrderDetailNav
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding: 0;
  }
</style>
