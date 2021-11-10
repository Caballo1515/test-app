<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <NavComponent></NavComponent>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";


export default {
  name: "App",
  components: {
    NavComponent,
  },

  data: () => ({
    //
  }),
  mounted(){
    
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
