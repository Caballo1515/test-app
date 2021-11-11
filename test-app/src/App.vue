<template>
  <v-app>
    <v-app-bar
    hide-on-scroll
    app
    color='primary'>
      <NavComponent></NavComponent>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view id="main"></router-view>
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
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
h1{
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
}
#main{
  margin: auto;
  padding: 30px;
  max-width: 700px;
}
</style>
