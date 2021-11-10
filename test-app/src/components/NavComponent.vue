<template>
  <nav>
    <v-row 
    id="centred"
    align="center"
    >
      <v-col id="item">
        <router-link to="/form">Save Contacts</router-link>
      </v-col>
      <v-col id="item"> | </v-col>

      <v-col id="item">
        <router-link to="/users">Show Contacts</router-link>
      </v-col>
    </v-row>
  </nav>
</template>
<script>
</script>
<style scoped>
nav {
    text-align: center;
    width: 100%;
}
#centred{
    max-width: 330px;
    margin-left: auto;
    margin-right: auto;
}
#item{
    padding: 0;
    margin: 0;
}
a {
  text-decoration: none;
}
</style>
