<template>
  <v-footer dark padless>
    <v-card tile class="indigo lighten-1 white--text text-center footer--text">
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Капбасов Аруан</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer--text {
  width: 100%;
}
</style>
