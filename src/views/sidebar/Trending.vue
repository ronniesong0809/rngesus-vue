<template>
  <el-card>
    <div class="header">
      Trending
    </div>
    <div>
      <div v-for="list in trending.games" :key="list.id">
        <a :href="list.url">
          <el-card shadow="hover">
            <span>{{ list.name }}</span>
            <el-image :src="list.thumb_url" />
            <el-rate
              v-model="list.average_user_rating"
              disabled
              :colors="colors"
            >
            </el-rate>
          </el-card>
        </a>
      </div>
    </div>
  </el-card>
</template>

<script>
import { getTrending } from "@/api/trending";

export default {
  name: "Trending",
  data() {
    return {
      trending: {
        lists: []
      },
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  },
  created() {
    this.fetchTrending();
  },
  methods: {
    toFixed(value) {
      return value.toFixed(2);
    },
    async fetchTrending() {
      getTrending("trending", 5).then(value => {
        const { data } = value;
        this.trending = data;
      });
    }
  }
};
</script>
