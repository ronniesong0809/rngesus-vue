<template>
  <section>
    <Login />

    <b-tabs v-model="activeTab">
      <b-tab-item label="Trending">
        <Trending />
      </b-tab-item>

      <b-tab-item label="Recent Low">
        <RecentLow />
      </b-tab-item>
    </b-tabs>

    <Promotion />
  </section>
</template>

<script>
import Login from "@/views/sidebar/Login";
import Promotion from "@/views/sidebar/Promotion";
import Trending from "@/views/sidebar/Trending";
import RecentLow from "@/views/sidebar/RecentLow.vue";

export default {
  components: { Login, Promotion, Trending, RecentLow },
  name: "SideBar",
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
