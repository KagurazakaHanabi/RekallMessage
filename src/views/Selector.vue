<template>
  <div class="selector">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"

export default Vue.extend({
  components: {
    HelloWorld
  }
});
</script>
