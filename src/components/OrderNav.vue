<template>
  <div class="order">
    <v-container>
      <v-card class="mb-8">
        <v-card-title
          class="justify-center white--text"
        >
          주문내역
        </v-card-title>

        <v-row class="py-3 py-lg-0">
          <v-col
            cols="12"
            class="pt-5 d-block d-md-flex justify-center align-center d-lg-block px-8 px-lg-3"
          >
            <div
              v-if="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg"
            >
              <v-chip-group
                active-class="primary--text"
                mandatory
              >
                <p class="px-5 pt-5 mb-3">
                  주문서비스
                </p>
                <v-chip
                  v-for="(item, index) in items"
                  :key="index"
                  class="justify-center mx-auto"
                >
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </div>

            <div
              v-else
              class="d-flex align-center d-lg-block mobile"
            >
              <p class="px-lg-5 pt-lg-5 mb-0 mb-lg-3">
                주문서비스
              </p>
              <v-select
                v-model="selected_items"
                :items="items"
                hide-details
                class="mx-auto mt-0 pt-0"
              />
            </div>

            <div class="d-flex align-center d-lg-block mobile">
              <p class="px-lg-5 pt-lg-5 mb-0 mb-lg-3">
                진행상태
              </p>
              <v-select
                v-model="selected_state"
                :items="state"
                hide-details
                class="mx-auto mt-0 pt-0"
              />
            </div>
            <router-link
              to="/designservice/history/orderdetail/orderbill"
              class="link-to d-block my-0 mt-lg-5"
            >
              월별 청구서 <span>확인하기</span>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
      <Search />
    </v-container>
  </div>
</template>
<script>
import Search from '@/components/Search'

export default {
  components: {
    Search,
  },
  data: () => ({
    selected_state: '전체',
    selected_items: '전체',
    chip:0,
    items: ['전체', '서지컬가이드 & 3D프린팅', '서지컬가이드', '3D프린팅'],
    state: ['전체', '주문대기', '디자인중', '수정중', '확인요청', '배송중', '완료']
  })
}
</script>
<style lang="scss" scoped>
.order {
  .v-card {
    &__title {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.8px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: -0.5px;
    }
    .link-to {
    position: absolute;
    bottom: -170px;
    }
  }

  @media screen and (max-width: 1200px) {
    .v-card {
      width: 100%;
      &__title {
        font-size: 18px;
      }
      .link-to {
        position: initial;
        span {
          display: none;
        }
        width: 100px;
      }
      .mobile {
        p {
          word-break: keep-all;
          min-width: 90px;
          text-align: center;
        }
        .v-select {
          width: 170px !important;
        }
      }
    }
  }
  @media screen and (max-width:768px) {
    .v-card {
      width: 320px;
      height: 170px;
      margin-bottom: 70px !important;
      margin: auto;
      &__title {
        padding: 12px;
      }
      .link-to {
        position: relative;
        width: 320px;
        right: -50%;
        transform: translateX(-50%);
        bottom: -20px;
      }
      .mobile {
        margin-bottom: 20px;
        p {
          word-break: keep-all;
          min-width: 90px;
          text-align: left;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
