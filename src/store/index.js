import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    isDrawer: false,
    designs: [
      {title: '서지컬가이드와\r\n3D프린팅 제작이 필요해요!', btn: '서지컬가이드 & 3D프린팅 주문하기', subtit: '치아정보만 업로드하면\r\n3D프린팅을 바로 배송합니다', text: '기본 임플란트 80,000원 / 추가 임플란트 30,000원\r\n추말, 공휴일, 배송 제외 3~5일'},
      {title: '서지컬가이드\r\n제작이 필요해요!', btn: '서지컬가이드 주문하기', subtit: '치아정보만 업로드하면\r\n서지컬가이드와 수술계획을 제공합니다', text: '기본 임플란트 20,000원 / 추가 임플란트 10,000원\r\n추말, 공휴일, 배송 제외 1~3일'},
      {title: 'Plan.T를 이용하여\r\n서지컬가이드를 제작했어요!', btn: '3D프린팅 주문하기', subtit: '서지컬가이드만 업로드하면\r\n3D프린팅을 배송합니다', text: '기본 임플란트 40,000원 / 추가 임플란트 5,000원\r\n추말, 공휴일, 배송 제외 1~2일'}
    ]
  },
  getters: {
    GNB() {
      return router.options.routes.filter((el, index) => {
        if(index > 0) return {
          name: el.name,
          path: el.path,
          children: el.children
        }
      })
    }
  },
  mutations: {
    SET_DRAWER(state, value) {
      state.isDrawer = value
    }
  },
  actions: {}
})

export default store;
