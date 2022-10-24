<template>
  <v-dialog
    v-model="$props.params.isOpened"
    :width="$vuetify.breakpoint.mdAndUp ? '620':'310'"
  >
    <!-- <template #activator="{ on, attrs }">
      <v-btn
        class="custom"
        v-bind="attrs"
        v-on="on"
      >
        {{ item.btn }}
      </v-btn>
    </template> -->
    <v-card class="pa-8">
      <v-card-title class="justify-center align-center px-0 px-md-5">
        [회계담당자], [자주쓰는 가이드키트&임플란트] 정보가 필요합니다.<br><br>마이페이지에서 [회계담당자], [자주쓰는 가이드키트&임플란트] 정보등록 후 서비스 주문을 진행해주세요.
      </v-card-title>
      <v-card-actions class="justify-center mt-4">
        <v-btn
          text
          to="/"
        >
          마이페이지
        </v-btn>
        <v-img
          src="@/assets/btn_close.png"
          max-width="40"
          height="40"
          class="btn_close"
          @click="$props.params.isOpened = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    params: Object
  }
}
</script>
<style lang="">

</style>
