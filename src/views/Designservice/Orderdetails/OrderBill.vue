<template>
  <section class="sub-content detail">
    <v-container class="d-block d-lg-flex">
      <div class="flex-grow-1">
        <table>
          <thead>
            <tr>
              <th>주문일</th>
              <th>주문서비스</th>
              <th>가격(원)</th>
              <th>세금(원)</th>
              <th>청구금액(원)</th>
            </tr>
          </thead>
          <tbody
            v-for="item in items"
            :key="item.i"
          >
            <tr>
              <td>{{ item.date }}</td>
              <td>{{ item.service }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.tax }}</td>
              <td>{{ item.charge }}</td>
            </tr>
          </tbody>
        </table>
        <div>총 9건 <b>709,500(VAT포함)</b></div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    items: [
      {date: '0000.00.00', service: '서지컬가이드 & 3D프린팅 / 치아추가 2 / 슬리브추가 2', price: '140,000', tax: '14,000', charge: '154,000' },
      {date: '0000.00.00', service: '서지컬가이드, 3D프린팅', price: '80,000', tax: '8,000', charge: '88,000' },
      {date: '0000.00.00', service: '3D프린팅 / 슬리브추가 2', price: '55,000', tax: '5,500', charge: '60,500' },
      {date: '0000.00.00', service: '서지컬가이드', price: '20,000', tax: '2,000', charge: '22,000' },
      {date: '0000.00.00', service: '서지컬가이드 & 3D프린팅 / 치아추가 1', price: '110,000', tax: '11,000', charge: '121,000' },
      {date: '0000.00.00', service: '3D프린팅', price: '40,000', tax: '4,000', charge: '44,000' },
      {date: '0000.00.00', service: '서지컬가이드 / 슬리브추가 1', price: '30,000', tax: '3,000', charge: '33,000' },
      {date: '0000.00.00', service: '서지컬가이드 & 3D프린팅 / 슬리브추가 3', price: '170,000', tax: '17,000', charge: '187,000' },
    ]
  })
}
</script>
<style lang="scss" scoped>
  .detail {
    overflow-x: scroll;
  }
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 10px;
  tr, th {
    min-width: 100px;
    text-align: left;
    &:nth-child(n+3) {
      min-width: 75px;
    }
  }
  td, th {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.2px;
    &:first-child {
      padding-left: 10px;
    }
  }
  thead {
    border-top: 1px solid var(--v-primary-base)!important;
    border-bottom: 1px solid var(--v-primary-base)!important;
    height: 40px;
  }
  tbody {
    tr {
      border-bottom: 1px solid #ECECEC;
      height: 76px;
    }
    &:last-child {
      tr {
        border-bottom: none;
      }
    }
  }
  & + div {
    background: #F8F8F8;
    height: 76px;
    line-height: 76px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.5px;
    text-align: center;
    border-top: 2px solid #ECECEC;
    border-bottom: 2px solid #ECECEC;
    b {
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container {
    & > div {
      & > div {
        width: 698px;
        font-size: 16px;
      }
      thead{
        tr {
          height: 40px;
        }
        th {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
        }
      }
      tbody {
        tr{
        height: 54px;
        }
        td {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          min-width: 100px;
          &:nth-child(2) {
            min-width: 298px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    overflow-x: scroll;
  }
}

</style>
