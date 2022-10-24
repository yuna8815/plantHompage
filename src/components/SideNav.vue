<template>
  <v-navigation-drawer
    v-model="isDrawer"
    fixed
    right
    :clipped="!$vuetify.breakpoint.lgAndUp"
    width="100%"
    :style="$vuetify.breakpoint.mdAndUp ? 'top:75px':'top:49px'"
    class="text-center py-3"
  >
    <v-list
      class="d-block flex-wrap justify-center pa-0"
    >
      <v-list-item
        v-for="nav in GNB"
        :key="nav.name"
        :to="nav.path"
        class="px-6"
      >
        <v-list-item-content
          v-if="nav.children.length < 2"
          class="py-3"
        >
          <v-list-item-title>{{ nav.name }}</v-list-item-title>
        </v-list-item-content>

        <v-list
          v-else
        >
          <v-list-group
            :value="false"
            no-action
            sub-group
            class="text-center px-0"
            @click.prevent.self
          >
            <template
              #activator
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav.name }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="item in nav.children"
              :key="item.name"
              :to="item.path"
              class="text-center px-0"
            >
              <v-list-item-title class="depth-2">
                {{ item.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-list-item>

      <router-link
        to="/"
        class="login d-flex align-center justify-center py-3"
      >
        <!-- <v-img
            alt="Login Icon"
            src="@/assets/icon_login.png"
            width="24"
            height="24"
            class="mx-auto mr-3"
          /> -->
        <IconLogin />
        <span class="ml-2">LOGIN</span>
      </router-link>

      <div class="d-none justify-center align-center">
        <IconLogin />
        <div class="ml-2">
          <router-link
            to="/"
            class="login"
          >
            MYPAGE
          </router-link>
          <router-link
            to="/"
            class="ml-4 login bar"
          >
            LOGOUT
          </router-link>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
import IconLogin from '@/components/icon/IconLogin'

export default {
  components: {
    IconLogin
  },
  computed: {
    ...mapGetters([
      'GNB'
    ]),
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    isDrawer: {
      get() {
        return this.$store.state.isDrawer
      },
      set(v) {
        this.$store.state.isDrawer = v
      }
    }
  },
  watch: {
    mobile() {
      if(!this.mobile) this.$store.commit('SET_DRAWER', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
  background: #F8F8F8;
  overflow: hidden;
  height: auto !important;
  .v-list{
    width: 100%;
    padding: 0;
    &-item {
      justify-content : center;
      &--active,
      &:hover {
        color: var(--v-primary-base);
        &::before {
          opacity: 0;
        }
      }
      &__title {
        font-size: 18px;
        font-weight: 400;
        &.depth-2 {
          font-size: 16px;
        }
      }
      &__content {
        &:hover {
          color: var(--v-primary-base);
        }
      }
      &--link :hover ::before{
        background-color: transparent !important;
      }
    }
  }
  .login {
    text-decoration: none;
    color: #666666;
    font-weight: 500;
    font-size: 15px;
    &:hover {
      color: #008ECF;
    }
  }
  .v-btn {
    padding: 0;
    text-transform: none;
    &::before {
      opacity: 0 !important;
    }
  }
  .bar {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background: var(--v-primary-base);
      width: 1px;
      height: 10px;
      top: 4px;
      left: -10px;
    }
  }
}
</style>
