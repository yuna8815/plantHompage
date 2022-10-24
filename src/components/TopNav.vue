<template>
  <v-app-bar
    app
    fixed
    :height="$vuetify.breakpoint.mdAndUp ? '75':'49'"
    :class="isDrawer ? 'bg-white':''"
  >
    <v-container class="d-flex align-center px-4">
      <Logo />
      <v-spacer />
      <nav
        v-if="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg"
        class="nav d-flex align-center"
      >
        <div
          v-for="nav in GNB"
          :key="nav.name"
          class="nav-item ml-10"
        >
          <RouterLink
            v-if="nav.children.length < 2"
            :to="nav.path"
            active-class="active"
            class="nav-link"
          >
            {{ nav.name }}
          </RouterLink>

          <v-menu
            v-else
            open-on-hover
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                class="nav-link"
                v-on="on"
              >
                {{ nav.name }}
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="item in nav.children"
                :key="item.name"
                :to="item.path"
                class="text-center"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <RouterLink
          to="/"
          class="login ml-10"
        >
          <!-- <v-img
            alt="Login Icon"
            src="@/assets/icon_login.png"
            width="24"
            height="24"
          /> -->
          <IconLogin />
        </RouterLink>
      </nav>

      <v-btn
        v-else
        icon
        :ripple="false"
        @click.stop="toggleDrawer"
      >
        <v-img
          v-if="!isDrawer"
          src="@/assets/menu_open.png"
          :max-width="$vuetify.breakpoint.mdAndUp ? '35':'23'"
          :max-height="$vuetify.breakpoint.mdAndUp ? '35':'23'"
        />
        <v-img
          v-else
          src="@/assets/menu_close.png"
          :max-width="$vuetify.breakpoint.mdAndUp ? '35':'23'"
          :max-height="$vuetify.breakpoint.mdAndUp ? '35':'23'"
        />
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
<script>
import {mapGetters} from 'vuex'
import Logo from './Logo.vue'
import IconLogin from '@/components/icon/IconLogin'

export default {
  components:{
    Logo,
    IconLogin
  },
  computed: {
    ...mapGetters([
      'GNB'
    ]),
    isDrawer() {
      return this.$store.state.isDrawer
    },
    navigations() {
      let _index;
      this.$router.options.routes.forEach((el, index) => {
        if(this.$route.matched[0].path == el.path) _index = index
      })
      return this.$router.options.routes[_index].children.map(el => {
        return {
          path: el.path,
          name: el.name
        }
      });
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('SET_DRAWER', !this.isDrawer)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-app-bar {
  z-index: 7;
  &.v-app-bar--is-scrolled,
  &.bg-white {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;
    background: #fff !important;
  }
  .nav-link {
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    text-decoration: none;
    &.active,
    &:hover {
      // color: #008ECF;
      color: var(--v-primary-base);
    }
  }
  .v-btn {
    padding: 0;
    text-transform: none;
    &::before {
      opacity: 0 !important;
    }
  }
}
.v-list {
  &-item {
    &:hover &__title{
      color: var(--v-primary-base);
    }
    &::before {
    opacity: 0 !important;
    }
    &__title {
    font-size: 16px;
    color: #666666;
    }
  }
}
</style>
