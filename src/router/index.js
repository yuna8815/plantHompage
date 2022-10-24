import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: require("@/layout/SubLayout.vue").default,
    redirect: '/about/',
    children: [
      {
        path: '/about/',
        name: 'About',
        component: () => import("@/views/About/About.vue")
      }
    ]
  },
  {
    path: '/howto',
    name: 'How to',
    component: require("@/layout/SubLayout.vue").default,
    redirect: '/howto/',
    children: [
      {
        path: '/howto/',
        name: 'How to',
        component: () => import("@/views/Howto/Howto.vue")
      }
    ]
  },
  {
    path: '/buy',
    name: 'Buy',
    component: require("@/layout/SubLayout.vue").default,
    redirect: '/buy/',
    children: [
      {
        path: '/buy/',
        name: 'Buy',
        component: () => import("@/views/Buy/Buy.vue")
      }
    ]
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: require("@/layout/SubLayout.vue").default,
    redirect: '/faq/',
    children: [
      {
        path: '/faq/',
        name: 'FAQ',
        component: () => import("@/views/Faq/Faq.vue")
      }
    ]
  },
  {
    path: '/designservice',
    name: 'Design Service',
    component: require("@/layout/SubLayout.vue").default,
    redirect: '/designservice/orderway',
    children: [
      {
        path: '/designservice/orderway',
        name: '주문방법',
        component: () => import('@/views/Designservice/OrderWay.vue')
      },
      {
        path: '/designservice/order',
        name: '주문하기',
        component: () => import('@/views/Designservice/Order.vue')
      },
      {
        path: '/designservice/history',
        name: '주문내역',
        component: require("@/layout/OrderLayout.vue").default,
        redirect: '/designservice/history/orderlist',
        children: [
          {
            path: '/designservice/history/orderlist',
            name: '주문내역',
            component: () => import('@/views/Designservice/OrderHistory.vue')
          },
          {
            path: '/designservice/history/orderdetail/orderbill',
            name: '월별 청구서 확인하기',
            component: () => import('@/views/Designservice/Orderdetails/OrderBill.vue')
          },
          {
            path: '/designservice/history/orderdetail/detailview',
            name: '주문 상세내용',
            component: () => import('@/views/Designservice/Orderdetails/OrderDetailView.vue')
          },
          {
            path: '/designservice/history/orderdetail/detaildesign',
            name: '주문 상세내용(디자인중)',
            component: () => import('@/views/Designservice/Orderdetails/OrderDesign.vue')
          },
          {
            path: '/designservice/history/orderdetail/orderconfirm',
            name: '주문 상세내용(확인요청)',
            component: () => import('@/views/Designservice/Orderdetails/OrderConfirm.vue')
          },
          {
            path: '/designservice/history/orderdetail/orderedit',
            name: '주문 상세내용(수정중)',
            component: () => import('@/views/Designservice/Orderdetails/OrderEdit.vue')
          },
          {
            path: '/designservice/history/orderdetail/orderdelivery',
            name: '주문 상세내용(배송중)',
            component: () => import('@/views/Designservice/Orderdetails/OrderDelivery.vue')
          },
        ]
      }
      // {
      //   path: '/designservice/history',
      //   name: '주문내역',
      //   component: require("@/layout/CommonTemplate.vue").default,
      //   redirect: '/designservice/history/orderlist',
      //   children: [
      //     {
      //       path: '/designservice/history/orderlist',
      //       name: '주문내역',
      //       component: require("@/layout/OrderLayout.vue").default,
      //       redirect: '/designservice/history/orderlist',
      //       children: [
      //         {
      //           path: '/designservice/history/orderlist',
      //           name: '주문내역',
      //           component: () => import('@/views/Designservice/OrderHistory.vue')
      //         }
      //       ]
      //     },
      //     {
      //       path: '/designservice/history/orderdetails',
      //       name: '주문 상세내용',
      //       component: require("@/layout/OrderDetailLayout.vue").default,
      //       redirect: '/designservice/history/orderdetails/detailview',
      //       children: [
      //         {
      //           path: '/designservice/history/orderdetail/detailview/',
      //           name: '주문 상세내용',
      //           component: () => import('@/views/Designservice/Orderdetails/OrderDetailView.vue')
      //         }
      //       ]
      //     },
      //     {
      //       path: '/designservice/history/orderdetails/orderbill',
      //       name: '월별 청구서 확인하기',
      //       component: () => import('@/views/Designservice/Orderdetails/OrderBill.vue')
      //     },

      //   ]
      // }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
