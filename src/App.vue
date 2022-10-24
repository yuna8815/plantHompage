<template>
  <v-app>
    <TopNav />
    <SideNav />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'
import SideNav from '@/components/SideNav'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    TopNav,
    SideNav,
    Footer
  },

  data: () => ({

  }),
};
</script>
