<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" height="300px">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Detail information
          <div class="icon-close">
            <v-card-actions>
              <v-btn icon text @click="closeDialog" color="black">
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card-title>
        <div class="loading text-center" v-if="loading">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
        <div class="content" v-if="!loading">
          <v-card-text class="text-h7">
            <div v-if="latest"><strong>Latest:</strong> {{ latest }}</div>
            <div v-if="alpha"><strong>Alpha:</strong> {{ alpha }}</div>
            <div v-if="beta"><strong>Beta:</strong> {{ beta }}</div>
            <div v-if="canary"><strong>Canary:</strong> {{ canary }}</div>
            <div v-if="rc"><strong>Rc:</strong> {{ rc }}</div>
            <strong v-if="versions.length">Versions:</strong>
            <div :key="version" v-for="version in versions">
              <b>{{ version }}</b>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { logger } from "@/helpers/logger";
import api from "@/api";
import { observer } from "@/main";
import { IPackage } from "@/types";

export default {
  name: "Dialog",
  data() {
    return {
      dialog: false,
      latest: "",
      data: {},
      alpha: "",
      beta: "",
      canary: "",
      rc: "",
      versions: [],
      loading: false,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    async getPackage(name: string): Promise<any> {
      try {
        if (!name) return Promise.resolve("nothing");
        this.dialog = true;
        this.loading = true;
        const packageInfo = await api.get("package", {}, `/${name}`);
        this.latest = packageInfo?.tags?.latest;
        this.alpha = packageInfo?.tags?.alpha;
        this.beta = packageInfo?.tags?.beta;
        this.canary = packageInfo?.tags?.canary;
        this.rc = packageInfo?.tags?.rc;
        this.versions = packageInfo?.versions || [];
        this.loading = false;
      } catch (error) {
        logger(error.message);
      }
    },
  },
  created() {
    observer.$on("sendDialog", (data: IPackage) => {
      this.getPackage(data.name);
    });
  },
};
</script>

<style scoped>
.content {
  padding: 10px 0;
}
.icon-close {
  position: absolute;
  right: 0;
  top: 4px;
}
.loading {
  padding: 20px;
}
</style>
