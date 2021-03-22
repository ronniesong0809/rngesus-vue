<template>
  <header class="header has-background-white has-text-black">
    <b-navbar class="container is-white" :fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="div">
          <img :src="logoUrl" alt="logo" />
        </b-navbar-item>

        <b-navbar-item
          class="is-hidden-desktop"
          tag="router-link"
          :to="{ path: '/' }"
        >
          RNGesus
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-field position="is-centered">
            <b-input
              v-model="searchKey"
              class="s_input"
              width="80%"
              placeholder="Search posts/labels/users"
              rounded
              clearable
            />

            <p class="control">
              <b-button class="is-info">
                Search
              </b-button>
            </p>
          </b-field>
        </b-navbar-item>

        <b-navbar-item v-if="token == null || token === ''" tag="div">
          <div class="buttons">
            <b-button
              class="is-light"
              tag="router-link"
              :to="{ path: '/signup' }"
            >
              Sign Up
            </b-button>
            <b-button
              class="is-light"
              tag="router-link"
              :to="{ path: '/login' }"
            >
              Login
            </b-button>
          </div>
        </b-navbar-item>

        <b-navbar-item v-else :label="userinfo.alias" tag="div">
          <div class="buttons">
            <b-button
              class="is-light"
              tag="router-link"
              :to="{ path: `/users/${userinfo.username}` }"
            >
              {{ userinfo.username }}'s' Profile
            </b-button>

            <b-button class="is-light" tag="a" @click="logout">
              Logout
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      logoUrl: require("@/assets/logo.png"),
      searchKey: ""
    };
  },
  computed: {
    ...mapGetters(["token", "userinfo"])
  },
  methods: {
    async logout() {
      this.$store.dispatch("user/Logout").then(() => {
        this.$message.info("Logout Success!");
        setTimeout(() => {
          this.$router.push({ path: this.redirect || "/" });
        }, 500);
      });
    }
  }
};
</script>

<style scoped>
input {
  width: 80%;
  height: 20%;
}
</style>
