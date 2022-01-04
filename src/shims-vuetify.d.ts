import { Store } from "@/store";

declare module "vuetify/lib" {
  import Vuetify from "vuetify";
  import "vuetify/types/lib.d";
  export default Vuetify;
}

declare module "@vue/runtime-core" {
  import "vuetify/types/lib.d";

  interface ComponentCustomProperties {
    $store: Store;
  }
}
