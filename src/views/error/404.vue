<template>
  <div class="columns mt-6">
    <div class="column mt-6">
      <div class="mt-6">
        <p class="content">UH OH! Page not found</p>
        <p class="content subtitle mt-6">
          The Page you are looking for doesn't exist!
        </p>
        <p>you will be redirected in {{ times }} seconds.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {
      times: 5
    };
  },
  created() {
    this.redirectToHome();
  },
  methods: {
    redirectToHome: function() {
      this.timer = setInterval(() => {
        this.times--;
        if (this.times === 0) {
          clearInterval(this.timer);
          this.$router.push({ path: "/" });
        }
      }, 1000);
    }
  }
};
</script>

<style scoped></style>
