<template>
  <el-card>
    <div v-for="game in trending.games" :key="game.id">
      <a :href="game.url">
        <div class="columns is-vcentered">
          <div class="column is-one-quarter">
            <el-image :src="game.thumb_url" style="height:10%;" />
          </div>
          <div class="column">
            <span class="has-text-danger" :hidden="game.discount == 0.0">
              {{ game.discount * 100 }}% off
            </span>
            <br />
            <span>{{ game.name }} ({{ game.year_published }})</span>
            <b-rate
              v-model="game.average_user_rating"
              disabled
              icon="star"
            ></b-rate>
            <span> ${{ game.price }} </span>
            <span
              class="has-text-grey is-size-7"
              style="text-decoration:line-through;"
              :hidden="game.discount == 0.0"
            >
              ${{ game.msrp }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </el-card>
</template>

<script>
import { getRecentLow } from "@/api/boardgameatlas";

export default {
  name: "getRecentLow",
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
      getRecentLow().then(value => {
        const { data } = value;
        this.trending = data;
      });
    }
  }
};
</script>
