<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title class="headline">
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="isAuth ? logout() : login()">
      {{ isAuth ? "keluar" : "masuk" }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    title() {
      return process.env.VUE_APP_NAME;
    },
    isAuth() {
      return this.$store.getters.user !== null;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>
