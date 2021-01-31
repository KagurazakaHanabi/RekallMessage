<template>
  <div class="home">
    <v-img
      class="background-image"
      src="@/assets/chat_background_1242x2208.png"
    ></v-img>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-nav-title>{{ title }}</v-app-bar-nav-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  components: {
    HelloWorld
  },

  data: () => ({
    title: "未知用户"
  })
});
</script>

<style lang="scss" scoped>
.background-image {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
