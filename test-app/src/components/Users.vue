<template>
  <div>
    <h1 style="text-align: center">Yours Contacts:</h1>
    <v-container style="max-width: 700px; padding: 20px">
      <alert-component v-if="$store.state.alertContact"></alert-component>
      <v-card
        class="userClass"
        outlined
        v-for="user in this.$store.state.users"
        :key="user.id"
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
  data: () => ({
    alert: true,
    user_id: 0,
  }),
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
      console.log(user)
      axios
        .delete("https://sandbox-internal.eternio.com/test/contact", {
          data: {
            id: id_user,
          },
        })
        .then(vue.$store.state.users = vue.removeItemFromArr(vue.$store.state.users, user)
        );
      this.$store.state.alerText = "Contact deleted";
      this.$store.state.alertContact = true;

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
        console.log(vue.$store.state.users);
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