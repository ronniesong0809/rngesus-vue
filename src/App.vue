<template>
  <div>
    <div class="mb-5">
      <Header />
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style>
.b-tabs .tab-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
