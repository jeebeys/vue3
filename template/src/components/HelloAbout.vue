<template>
  <div>HelloAbout - {{ $store.state.about.value }}</div>
  <div @click="etAction">action</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class HelloAbout extends Vue {
  etAction() {
    // this.doArgs({'abc':'1234'})
    this.$store.dispatch("doTest");
    this.$store.dispatch("doArgs", { abc: "test" });
    this.$store.dispatch("about/delayedDecrease");
  }
  mounted() {
    console.log("==HelloAbout==");
  }
}
</script>

<style scoped>
div {
  color: orangered;
}
</style>
