<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">NPM Packages</div>

      <v-spacer></v-spacer>

      <v-btn href="https://jsdelivr.com" target="_blank" text>
        <span class="mr-2">Original</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Body />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Body from "@/components/Body.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Body,
  },
});
</script>
