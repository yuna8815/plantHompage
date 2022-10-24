<template>
  <div class="search">
    <div class="search-wrap d-flex align-center">
      <v-select
        v-model="selected"
        :items="items"
        dense
        hide-details
        :height="$vuetify.breakpoint.mdAndUp ? '42':'36'"
        class="mt-0 pt-0"
      />
      <v-text-field
        placeholder="검색어를 입력해주세요"
        dense
        hide-details
        :height="$vuetify.breakpoint.mdAndUp ? '42':'36'"
        class="mt-0 pt-0"
      />
      <v-btn
        :height="$vuetify.breakpoint.mdAndUp ? '42':'36'"
        depressed
        color="primary"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </div>
    <v-checkbox
      v-model="checkbox"
      hide-details
      label="결과 내 검색"
      class="checkbox mt-0"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchComponent',
  data: () => ({
    selected: '환자이름',
    items: ['환자이름', '담당자'],
    checkbox: true
  })
}
</script>
<style lang="scss" scoped>
.search-wrap {
  width: 280px;
  margin: 20px auto 0;
  border: 1px solid var(--v-primary-base);
  border-radius: 5px;
  overflow: hidden;
  .v-select {
    width: 120px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
  }
  .v-text-field {
    font-size: 14px;
  }
  .v-btn {
    width: 40px;
    min-width: 40px;
    border-radius: 0;
    .v-icon {
      font-size: 20px;
    }
  }
}
.checkbox {
  width: 110px;
}
@media screen and (max-width:1200px) {
  .search {
    position: absolute;
    bottom: 222px;
  }
}
@media screen and (max-width:768px) {
  .search {
    position: absolute;
    bottom: 220px;
    left: 50%;
    transform: translateX(-50%);
    .v-text-field {
      font-size: 12px;
    }
  }
}
</style>
