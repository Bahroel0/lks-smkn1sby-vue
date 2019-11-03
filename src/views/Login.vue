<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="10" sm="8" md="8" lg="6" xl="4">
        <v-card flat outlined class="px-5">
          <v-card-title class="headline py-5">
            <v-spacer />
            Informasi Akreditasi Perguruan Tinggi
            <v-spacer />
          </v-card-title>
          <v-card-text class="mt-3 pb-0">
            <v-form ref="form_login" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                placeholder="Email"
                flat
                outlined
                prepend-inner-icon="mdi-email"
              />
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                placeholder="Password"
                type="password"
                flat
                outlined
                prepend-inner-icon="mdi-key"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-5">
            <v-btn text block large class="primary" @click="submit()">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      rules: {
        required: v => !!v || "Harus diisi",
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "Email tidak valid";
        }
      }
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form_login.validate()) {
        const user = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        });
        if (user) {
          this.$router.push("/");
        }
      }
    }
  }
};
</script>
