<template>
  <v-main>
    <v-container
      class="d-block my-10"
      :class="route == '/orderlist' ? 'd-lg-flex':'d-md-flex'"
    >
      <!-- <OrderDetailNav v-if="route == '/orderdetail/detailview'" /> -->
      <OrderNav v-if="route == '/orderlist'" />
      <OrderBillNav v-else-if="route == '/orderdetail/orderbill'" />
      <OrderDetailNav v-else />
      <router-view />
    </v-container>
    <OrderMonth />
  </v-main>
</template>
<script>
import OrderNav from '@/components/OrderNav.vue'
import OrderMonth from '@/views/Designservice/OrderMonth.vue'
import OrderDetailNav from '@/components/OrderDetailNav.vue'
import OrderBillNav from '@/components/OrderBillNav.vue'

export default {
  components: {
    OrderNav,
    OrderDetailNav,
    OrderBillNav,
    OrderMonth
  },
  data: () => ({
    route: ''
  }),
  watch: {
    $route() {
      console.log("watch", this.$route.fullPath)
      this.route = this.$route.fullPath.replace('/designservice/history', '')
    }
  },
  mounted() {
    this.route = this.$route.fullPath.replace('/designservice/history', '')
    // console.log(_route == '/orderdetail/orderbill')
    console.log("mounted()", this.$route.fullPath)
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding: 0;
  }
</style>
