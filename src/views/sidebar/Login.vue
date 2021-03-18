<template>
  <el-card>
    <div class="header"></div>
    <div v-if="token != null && token !== ''" class="has-text-centered">
      <b-button
        type="is-danger"
        tag="router-link"
        :to="{ path: '/post/create' }"
        outlined
      >
        Post
      </b-button>
    </div>

    <div v-else class="has-text-centered">
      <b-button
        type="is-success"
        tag="router-link"
        :to="{ path: '/signup' }"
        outlined
      >
        Sign Up
      </b-button>
      <b-button
        class="mx-2"
        type="is-danger"
        tag="router-link"
        :to="{ path: '/login' }"
        outlined
      >
        Login
      </b-button>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapGetters(["token"])
  }
};
</script>
