<template>
  <v-footer
    dark
    class="py-4"
  >
    <v-container class="d-block d-lg-flex text-center text-lg-left py-0 py-lg-5">
      <v-img
        src="@/assets/smd_logo.png"
        :max-width="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '88':'40'"
        :max-height="$vuetify.breakpoint.width >= $vuetify.breakpoint.thresholds.lg ? '59':'26'"
        class="d-inline-block align-self-center mr-lg-5 mt-7 mb-2 my-lg-0"
      />
      <div>
        <p>03080 서울특별시 종로구 대학로 101, 서울대학교치과병원 8층</p>
        <div class="d-inline-flex">
          <p class="mr-2">
            <span>TEL</span>+82-2-2072-3041
          </p>
          <p class="mr-2">
            <span>FAX</span>+82-2-6442-0343
          </p>
          <p><span>E-mail</span>info@smd-sol.com</p>
        </div>
        <p class="copy">
          COPYRIGHT &copy; 2022 Smd ALL RIGHTS RESERVED.
        </p>
      </div>
      <v-spacer />
      <div class="d-inline-flex justify-center link-group">
        <div
          v-for="item in footeritems"
          :key="item.id"
          class="before"
        >
          <router-link
            :to="item.href"
            class="footer-link ml-8"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    footeritems: [
      {id: 1, text: '이용약관', href: '/'},
      {id: 2, text: '개인정보 처리방침', href: '/'},
      {id: 3, text: '1:1문의', href: '/'}
    ]
  }),
}
</script>

<style lang="scss" scoped>
.v-footer {
  background: #121212 !important;
  .container {
    p {
      font-size: 12px;
      font-weight: 400;
      color: #b5b5b5;
      margin: 3px;
      span {
        color: #008ECF;
        margin-right: 5px;
      }
      &.copy {
        font-weight: 500;
      }
    }
    .before {
      position: relative;
      &:nth-child(n)::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 14px;
        width: 5px;
        height: 5px;
        background: #008ECF;
        border-radius: 50%;
      }
      &:first-child::before {
        display: none;
      }
      &:first-child a {
        margin-left: 0 !important;
      }
    }
    .footer-link {
      text-decoration: none;
      color: #b5b5b5;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.02em;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      position: relative;
      padding: 0;
      p {
        font-size: 9px !important;
        font-weight: 400;
        line-height: 9px;
        letter-spacing: -0.5px;
      }
      .footer-link {
        font-size: 12px;
      }
      .link-group {
        width: 100%;
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
