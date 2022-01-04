import { Store } from "@/store";

declare module "vuetify/lib/framework" {
  import Vuetify from "vuetify";
  import "vuetify/types/lib.d";
  export default Vuetify;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
