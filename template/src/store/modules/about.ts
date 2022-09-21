import {
  Module,
  VuexModule,
  getter,
  mutation,
  action
} from "vuex-class-component";

@Module({ namespacedPath: "about/" })
export class AboutStore extends VuexModule {
  @getter value = 4;
  @mutation increaseValue() {
    this.value++;
  }
  @action() delayedDecrease(wait: number) {
    console.log("delayedDecrease");
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(this.value--);
      }, wait);
    });
  }
}
export const about = AboutStore.ExtractVuexModule(AboutStore);
