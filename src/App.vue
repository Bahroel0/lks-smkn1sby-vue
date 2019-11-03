<template>
  <v-app>
    <!-- <Navbar v-if="isAuth" /> -->
    <v-app-bar app>
      Selamat datang {{ reza }}
      <v-spacer />
      <v-btn @click="setUser()">Set User</v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
// import Cookie from "js-cookie";
// import Navbar from "@/components/Global/Navbar";
export default {
  name: "App",
  components: {
    // Navbar
  },
  data() {
    return {};
  },
  async created() {
    // const user = Cookie.get("user");
    // if (user) {
    //   await this.$store.dispatch("setUser", JSON.parse(user));
    // }
    // if (!this.isAuth) {
    //   this.$router.push("/login");
    // }
  },
  computed: {
    isAuth() {
      return this.$store.getters.user !== null;
    },
    reza() {
      return this.$store.getters.user;
    }
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser", "Bahrul");
    }
  }
};
</script>
