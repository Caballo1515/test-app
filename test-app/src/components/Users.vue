<template>
  <div>
    <h1>Yours Contacts:</h1>
    <v-container>
      <alert-component v-if="$store.state.alertContact"></alert-component>
      <v-card
        class="userClass"
        outlined
        v-for="user in this.$store.getters.getUsers"
        :key="user.id"
        elevation="2"
      >
        <v-row align="end" justify="end">
          <v-btn icon @click="deleted(user)">
            <v-icon small> fas fa-trash-alt </v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <h2>{{ user.prename }} {{ user.surname }}</h2>
        </v-row>
        <v-row>
          <p>{{ user.street }} {{ user.number }}</p>
        </v-row>
        <v-row>
          <p>{{ user.postalCode }} {{ user.city }}</p>
        </v-row>
        <v-row>
          <p><b>Mail:</b> {{ user.mail }}</p>
        </v-row>
        <v-row>
          <p><b>Newsletter:</b> {{ user.newsletter }}</p>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import alertComponent from "../components/alertComponent.vue";
import axios from "axios";
export default {
  components: {
    alertComponent,
  },
  methods: {
    removeItemFromArr(arr, user) {
      return arr.filter(function (e) {
        return e !== user;
      });
    },
    deleted(user) {
      let vue = this;
      let id_user = user._id;
      axios
        .delete("https://sandbox-internal.eternio.com/test/contact", {
          data: {
            id: id_user,
          },
        })
        .then(function (response) {
          if (response.status == 200) {
            vue.$store.state.users = vue.removeItemFromArr(
              vue.$store.state.users,
              user
            );
            vue.$store.state.alerText = "Contact deleted";
            vue.$store.state.alertContact = true;
          }
        });
      setTimeout(() => {
        this.$store.state.alertContact = false;
      }, 2000);
    },
  },
  mounted() {
    let vue = this;
    this.$store.state.alertContact = false;
    axios
      .get("https://sandbox-internal.eternio.com/test/contacts")
      .then(function (response) {
        vue.$store.state.users = response.data;
      });
  },
};
</script>

<style scoped>
.userClass {
  margin-bottom: 10px;
}
.userClass * {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
}
.userClass p b {
  margin-top: 2px;
  margin-left: 0;
}
.userClass h2 {
  margin-bottom: 5px;
}
</style>