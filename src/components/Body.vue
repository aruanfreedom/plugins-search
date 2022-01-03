<template>
  <v-container>
    <div class="body">
      <div class="content">
        <h1 class="text-center">Welcome site!</h1>
        <Search />
        <Table />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";
import Table from "@/components/Table.vue";

export default Vue.extend({
  name: "Body",
  components: {
    Search,
    Table,
  },
  data: () => ({
    //
  }),
});
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 90px;
}
</style>
