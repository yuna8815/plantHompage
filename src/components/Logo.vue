<template>
  <RouterLink to="/">
    <v-img
      alt="Logo"
      class="shrink"
      contain
      src="@/assets/logo.png"
      :width="$vuetify.breakpoint.mdAndUp ? '140':'80'"
      :height="$vuetify.breakpoint.mdAndUp ? '33':'19'"
    />
  </RouterLink>
</template>
<script>
export default {
  name: 'LogoComponent'
}
</script>
