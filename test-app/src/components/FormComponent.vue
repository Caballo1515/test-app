<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h1>Add a Contact:</h1>
    <v-container>
      <v-row>
        <v-text-field
          v-model="prename"
          :rules="defRules"
          label="Prename"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="surname"
          :rules="defRules"
          label="Surname"
          required
        ></v-text-field>
      </v-row>

      <v-row>
        <v-col cols="9">
          <v-text-field
            v-model="street"
            :rules="defRules"
            label="Street"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="number"
            :rules="defRules"
            label="Number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="postalCode"
            :rules="defRules"
            label="Postal Code"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="city"
            :rules="defRules"
            label="City"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-row>

      <v-checkbox v-model="checkbox" label="Recieve Newsletter?"></v-checkbox>

      <v-btn color="error" class="mr-4" @click="reset">Clear Form </v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"
        >Save Content</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
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

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>