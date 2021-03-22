<template>
  <div class="member">
    <div class="columns">
      <div class="column is-one-quarter">
        <el-card shadow="never">
          <div slot="header" class="has-text-centered">
            <el-avatar
              :size="64"
              :src="
                `https://www.gravatar.com/avatar/${user.avatar.toLowerCase()}`
              "
            />
            <p class="mb-3">
              <b>
                {{ user.alias.toUpperCase() || user.username.toUpperCase() }}
              </b>
              <br />
              <code>{{ user.id }}</code>
            </p>
          </div>
          <div>
            <p class="content">
              <b-icon pack="fas" icon="envelope" size="is-small"> </b-icon>
              {{ user.email }}
            </p>
            <p class="content">Bio：{{ user.bio }}</p>
            <p class="content">
              Joined <b>RNGesus</b> on
              <time
                :title="dayjs(user.createTime).format('MMMM D, YYYY HH:ss a')"
              >
                {{ dayjs(user.createTime).format("MMM DD, YYYY") }}
              </time>
            </p>
          </div>
        </el-card>
      </div>

      <div class="column">
        <el-card class="box-card content" shadow="never">
          <div slot="header" class="has-text-weight-bold">
            <span>Topics</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/auth/auth";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters(["token", "userinfo"])
  },
  created() {
    this.fetchUserById();
  },
  methods: {
    fetchUserById() {
      getUserInfo().then(res => {
        this.user = res;
      });
    }
  }
};
</script>

<style scoped></style>
