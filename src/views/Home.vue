<template>
  <hello-world />
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/Body.vue";

export default Vue.extend({
  name: "Home",

  components: {
    HelloWorld,
  },
});
</script>
