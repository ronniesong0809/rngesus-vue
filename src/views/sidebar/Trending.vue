<template>
  <el-card>
    <div v-for="game in trending.games" :key="game.id">
      <a :href="game.url">
        <div class="columns is-vcentered">
          <div class="column is-one-quarter">
            <figure class="image">
              <img :src="game.thumb_url" />
            </figure>
          </div>
          <div class="column">
            <span>{{ game.name }} ({{ game.year_published }})</span>
            <b-rate v-model="game.average_user_rating" disabled icon="star">
            </b-rate>
          </div>
        </div>
      </a>
    </div>
  </el-card>
</template>

<script>
import { getTrending } from "@/api/boardgameatlas";

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
      getTrending().then(value => {
        const { data } = value;
        this.trending = data;
      });
    }
  }
};
</script>
