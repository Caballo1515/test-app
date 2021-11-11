<template>
  <nav>
    <v-row 
    id="centred"
    align="center"
    >
      <v-col id="item">
        <router-link to="/" id="link">Save Contacts</router-link>
      </v-col>
      <v-col id="item" tag="h3"> | </v-col>
      <v-col id="item">
        <router-link to="/show" id="link">Show Contacts</router-link>
      </v-col>
    </v-row>
  </nav>
</template>

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
#link{
  color: black;
}
#item .router-link-exact-active{
  color: #24bf77;
}
</style>
