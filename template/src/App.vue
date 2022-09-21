<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options as Component, Vue } from "vue-class-component";
@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style scoped></style>
