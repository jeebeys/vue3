<template>
  <h1>{{ msg1 }}</h1>
  <h1>{{ msg2 }}</h1>
  <h1>{{ msg3 }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Options({
  props: {
    msg1: String
  }
})
export default class HelloWorld extends Vue {

  declare msg1:any;

  @Prop({ default: "test" })
  msg2: string | undefined;

  @Prop({ default: "test" })
  msg3?: string;
  count: number = 0;
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
