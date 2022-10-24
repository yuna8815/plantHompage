<template>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12.7678"
      r="11.5"
      :stroke="$vuetify.theme.defaults.light.primary"
    />
    <path
      d="M7 18.7026V17.0069C7 15.6022 8.13875 14.4634 9.54348 14.4634H14.6304C16.0352 14.4634 17.1739 15.6022 17.1739 17.0069V18.7026M12.087 6.83301C10.7914 6.83301 9.54348 7.84219 9.54348 9.37649C9.54348 10.672 10.5527 11.92 12.087 11.92C13.6212 11.92 14.6304 10.672 14.6304 9.37649C14.6304 7.84219 13.3825 6.83301 12.087 6.83301Z"
      :stroke="$vuetify.theme.defaults.light.primary"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg circle,
svg path {
  transition: all ease-in-out .2s;
}
svg:hover circle,
svg:hover path {
  stroke: var(--v-secondary-base);
}
</style>
