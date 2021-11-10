<template>
  <div class="form">
    <h1 style="text-align: center">Add a Contact:</h1>

    <v-form ref="form" v-model="valid" lazy-validation @submit="submitForm()">
      <v-container style="max-width: 700px; padding: 20px">
        <alert-component v-if="alert"></alert-component>
        <v-row>
          <v-text-field
            v-model="user.prename"
            :rules="defRules"
            label="Prename"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="user.surname"
            :rules="defRules"
            label="Surname"
            required
          ></v-text-field>
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
          <v-text-field
            v-model="user.mail"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-row>

        <v-checkbox
          v-model="user.newsletter"
          label="Recieve Newsletter?"
        ></v-checkbox>

        <v-btn color="error" class="mr-4" @click="reset">Clear Form </v-btn>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"
          >Save Content</v-btn
        >
      </v-container>
    </v-form>
  </div>
</template>

<script>
import alertComponent from './alertComponent.vue';
import axios from 'axios';
export default {
  data: () => ({
    user:{
      prename: '',
      surname: '',
      street: '',
      number: '',
      postalCode: '',
      city: '',
      mail: '',
      newsletter: false
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
    submitForm(){
      

    },
    validate() {
      //this.$refs.form.validate();
      console.log(this.user);
      axios.post("https://sandbox-internal.eternio.com/test/contact", this.user).then(
        this.$store.state.alerText = 'Contact Saved',
      this.alert = true
      );
     

      
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>