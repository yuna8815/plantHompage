<template>
  <section class="sub-content">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="4"
          class="px-0 px-md-2 py-1 py-md-3"
        >
          <v-card
            class="pa-3 py-md-4"
            @click="goPage(item)"
          >
            <div class="d-flex">
              <v-btn class="history">
                {{ getStateType(item.state) }}
              </v-btn>
              <v-spacer />
              <span class="d-day mr-1">{{ item.d_day }}</span>
              <span class="surgery">{{ item.surgery }}</span>
            </div>
            <div class="d-flex patient mt-3 px-1">
              <p class="mr-1">
                {{ item.name }}
              </p>
              <p>({{ item.birth }})</p>
            </div>
            <div class="d-flex d-md-block d-lg-flex mt-2 mt-lg-0 order-data px-1">
              <p class="mr-1">
                {{ getOrderType(item.order) }} <span class="none">/</span>
              </p>
              <p>{{ item.respon }}</p>
            </div>
            <p class="date mt-5 px-1">
              {{ item.orderDate }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      v-model="page"
      :length="5"
      class="history-pagination float-md-right mt-2 mt-md-3"
    />
  </section>
</template>
<script>
export default {
  data: () => ({
    chip: 0,
    items: [
      /*
      order:
      SP: '서지컬가이드 & 3D프린팅'
      S: '서지컬가이드'
      P: '3D프린팅'

      state: 
      R(Ready): '주문대기'
      D(Design): '디자인중'
      CR(ConfirmRequst): '확인요청'
      M(Modify): '수정중'
      C(Confirm): '확인완료'
      P(Produce): '제작중'
      DI(DeliveryIng): '배송중'
      DC(DeliveryComplete): '배송완료'
      F(Fin): '완료'
      */
      { id: '1', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'R' },
      { id: '2', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'D' },
      { id: '3', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'CR' },
      { id: '4', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'M' },
      { id: '5', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'C' },
      { id: '6', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'P' },
      { id: '7', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'DI' },
      { id: '8', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'DC' },
      { id: '9', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'F' },
      { id: '10', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'D' },
      { id: '11', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'CR' },
      { id: '12', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'F' },
      { id: '13', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'R' },
      { id: '14', name: '환자이름', birth: '0000.00.00', order: 'SP', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'DI' },
      { id: '15', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'M' },
      { id: '16', name: '환자이름', birth: '0000.00.00', order: 'S', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'D' },
      { id: '17', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'CR' },
      { id: '18', name: '환자이름', birth: '0000.00.00', order: 'P', respon: '주문담당자' , orderDate: '0000.00.00. 00:00', d_day: 'D-00', surgery: '00.00.00', state: 'F' }
    ],
    page: 1
  }),
  methods: {
    getOrderType(order) {
      switch(order) {
      case 'SP': return '서지컬가이드 & 3D프린팅'
      case 'S': return '서지컬가이드'
      case 'P': return '3D프린팅'
      }
    },
    getStateType(state) {
      switch(state) {
      case 'R': return '주문대기'
      case 'D': return '디자인중'
      case 'CR': return '확인요청'
      case 'M': return '수정중'
      case 'C': return '확인완료'
      case 'P': return '제작중'
      case 'DI': return '배송중'
      case 'DC': return '배송완료'
      case 'F': return '완료'
      }
    },
    goPage(item) {
      this.$router.push({path: '/designservice/history/orderdetail/detailview', query: { id: item.id, order: item.order, state: item.state }})
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  padding-bottom: 130px;
  .container {
    border-bottom: 1px solid #E3E3E3;
    padding-bottom: 30px;
  }
  p {
    margin: 0 !important;
  }
  .v-card {
    border: 1px solid #C2C2C2 !important;
    border-radius: 10px !important;
  }
  .v-btn.history {
    height: 26px !important;
    width: 82px;
    span {
      font-size: 14px !important;
    }
  }
  span {
    font-size: 16px;
  }
  .d-day {
    color: var(--v-primary-base);
  }
  .surgery {
    color: #979797;
  }
  .patient {
    p {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.5px;
    }
  }
  .order-data {
    p {
      font-size: 15px;
      font-weight: 400;
      letter-spacing: -0.5px;
      word-break: keep-all;
    }
  }
  .date {
    font-size: 12px;
    color: #979797;
  }

  @media screen and (max-width:1200px) {
    .v-btn.history {
      height: 22px !important;
      width: 72px;
      span {
        font-size: 12px !important;
      }
    }
    span {
      font-size: 14px;
    }
    .patient {
      p {
        font-size: 18px;
        line-height: 18px;
      }
    }
    .order-data {
      p {
        font-size: 14px;
        line-height: 14px;
      }
    }
    .none {
      display: none;
    }
  }
  @media screen and (max-width:768px) {
    width: 320px;
    .none {
      display: inline;
    }
    .patient {
      p {
        font-size: 16px;
        line-height: 16px;
      }
    }
    .order-data {
      p {
        font-size: 12px;
        line-height: 12px;
      }
    }
    .date {
      font-size: 9px;
    }
  }
}
</style>
