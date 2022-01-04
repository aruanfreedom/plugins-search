<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-on:keyup="searchPackages"
            label="Search package"
            autofocus
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { IUrl } from "@/api/requests";
import { PAGE_COUNT } from "@/constants";
import { IPackage, IPages } from "@/types";
import Vue from "vue";

export default Vue.extend({
  name: "Search",
  methods: {
    splitPages(packages: IPackage[], PAGE_COUNT: number): IPages[] {
      return packages.reduce((acc: any, item, index) => {
        const chunkIndex = Math.floor(index / PAGE_COUNT);

        if (!acc[chunkIndex]) {
          acc[chunkIndex] = [];
        }

        acc[chunkIndex].push(item);

        return acc;
      }, []);
    },
    filterName(value: string): IPackage[] {
      return this.$store.state.packages.filter(
        (pack: IUrl) =>
          pack.name && pack.name.toLowerCase().trim().search(value) !== -1
      );
    },
    searchPackages(event: Event): void {
      const value = (event.target as HTMLInputElement).value
        .toLowerCase()
        .trim();

      const resultSearch = this.filterName(value);
      const pages = this.splitPages(resultSearch, PAGE_COUNT);

      this.$store.commit("foundPackages", {
        pages: value ? pages : [],
        searchWord: value,
      });
    },
  },
});
</script>

<style scoped></style>
