<template>
  <section>
    <Login />
    <Trending />
    <Promotion />
  </section>
</template>

<script>
import Login from "@/views/sidebar/Login";
import Promotion from "@/views/sidebar/Promotion";
import Trending from "@/views/sidebar/Trending";

export default {
  components: { Login, Promotion, Trending },
  name: "SideBar"
};
</script>
