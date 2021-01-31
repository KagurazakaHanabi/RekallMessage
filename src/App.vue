<template>
  <v-app>
    <HomePage></HomePage>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "@/views/Home.vue";

export default Vue.extend({
  components: {
    HomePage
  },

  data: () => ({
    // ...
  })
});
</script>
