<template>
  <div>index <router-link to="/about">About</router-link></div>
  <HelloWorld msg1="V1" msg2="V2" msg3="V3" />
</template>

<script lang="ts">
import { Options as Component, Vue } from "vue-class-component";
@Component({
  components: {},
})
export default class Index extends Vue {}
</script>

<style scoped></style>
