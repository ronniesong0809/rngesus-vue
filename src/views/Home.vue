<template>
  <div>
    <div class="box">🔔 {{ billboard }}</div>
  </div>
</template>

<script>
import pkg from "../../package.json";

export default {
  name: "Home",
  data() {
    return {
      billboard: `This is version ${pkg.version}!`
    };
  }
};
</script>
