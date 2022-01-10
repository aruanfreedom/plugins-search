<template>
  <div>
    <Dialog />
    <div class="table">
      <v-simple-table height="50vh">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Hits</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="openDialog(list)"
              v-for="list in listsPackage"
              :key="list.hits"
            >
              <td>{{ list.name }}</td>
              <td>{{ list.hits }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div v-if="searchWord && pageCount" class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import api from "@/api";
import Dialog from "@/components/Dialog.vue";
import { logger } from "@/helpers/logger";
import { IPackage, IPages } from "@/types";
import { observer } from "@/main";
import Vue from "vue";

interface IData {
  page: number;
}

export default Vue.extend({
  name: "Table",
  components: {
    Dialog,
  },
  data(): IData {
    return {
      page: 1,
    };
  },
  methods: {
    openDialog(packageInfo: IPackage): void {
      observer.$emit("sendDialog", packageInfo);
    },
  },
  computed: {
    searchWord(): string {
      return this.$store.state.searchWord;
    },
    pageCount(): number {
      const { searchWord, pages } = this.$store.state;

      if (searchWord && !pages.length) return 0;

      return pages.length;
    },
    currentPage(): IPages[] {
      const prevValue = this.page - 1;
      return this.$store.state.pages[prevValue];
    },
    listsPackage(): IPages[] | IPackage[] {
      const { searchWord, packages } = this.$store.state;
      const notFound = [{ name: "not found :(", hits: "", type: "" }];

      if (searchWord && !this.currentPage?.length) {
        return notFound;
      }

      if (this.currentPage?.length) {
        return this.currentPage;
      }

      return packages;
    },
  },
  async created(): Promise<void> {
    try {
      const packages = await api.get("allPackages");
      this.$store.commit("newPackages", packages);
    } catch (error) {
      logger(error.message);
    }
  },
});
</script>

<style scoped>
.table {
  height: 36vh;
  min-height: 616px;
}

.table td {
  cursor: pointer;
}
</style>
