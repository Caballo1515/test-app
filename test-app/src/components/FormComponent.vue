<template>
  <div class="form">
    <h1>Add a Contact:</h1>
    <v-form ref="form" v-model="valid" lazy-validation @submit="submitForm()">
      <v-container>
        <v-row>
          <v-col>
            <alert-component v-if="alert"></alert-component>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.prename"
              :rules="defRules"
              label="Prename"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.surname"
              :rules="defRules"
              label="Surname"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <v-text-field
              v-model="user.street"
              :rules="defRules"
              label="Street"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="user.number"
              :rules="defRules"
              label="Number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="user.postalCode"
              :rules="defRules"
              label="Postal Code"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="user.city"
              :rules="defRules"
              label="City"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.mail"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col>
          <v-checkbox
            v-model="user.newsletter"
            label="Recieve Newsletter?"
          ></v-checkbox>
        </v-col>
        <v-row>
          <v-col cols="6">
            <v-btn color="primary" class="mr-4" @click="reset" width="430px">
              Clear Form
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
              width="430px"
              >Save Content</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import alertComponent from "./alertComponent.vue";
import axios from "axios";
export default {
  data: () => ({
    user: {
      prename: "",
      surname: "",
      street: "",
      number: "",
      postalCode: "",
      city: "",
      mail: "",
      newsletter: false,
    },
    alert: false,
    valid: true,
    name: "",
    defRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
  }),
  components: {
    alertComponent,
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let vue = this;
        axios
          .post("https://sandbox-internal.eternio.com/test/contact", this.user)
          .then(function (response) {
            if (response.status == 201) {
              vue.$store.state.alerText = "Contact Saved";
              vue.alert = true;
              vue.reset();
              vue.resetUser();
            }
          });
          this.alert= false;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetUser(){
      this.user.prename = "";
      this.user.surname = "";
      this.user.street = "";
      this.user.city = "";
      this.user.number = "";
      this.user.postalCode = "";
      this.user.newsletter = false;
      this.user.mail = "";

    }
  },
};
</script>

<style scoped>
.mr-4 {
  max-width: 100%;
}
</style>