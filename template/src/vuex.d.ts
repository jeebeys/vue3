// vuex.d.ts
import { ComponentCustomProperties } from "@/vue";
import { Store } from "vuex";
declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    orbital;
  }

  interface ComponentCustomProperties {
    $store: Store<State<any>>;
    $axios: any;
  }
}
