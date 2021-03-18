<template>
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <Post></Post>
      </div>
      <div class="column">
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import { getBillboard } from "@/api/billboard";
import Sidebar from "@/views/sidebar/SidebarView";
import List from "@/views/post/List";

export default {
  name: "Home",
  components: {
    Sidebar,
    Post: List
  },
  data() {
    return {
      billboard: {
        content: ""
      }
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then(value => {
        const { data } = value;
        this.billboard = data;
      });
    }
  }
};
</script>
