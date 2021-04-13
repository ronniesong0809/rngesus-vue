<template>
  <el-card>
    <div class="clearfix" slot="header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="New" name="latest" icon="">
          <Post :records="records" />
        </el-tab-pane>
        <el-tab-pane label="Hot" name="hottest">
          <Post :records="records" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
import { getList } from "@/api/post";
import Post from "@/views/post/Post";

export default {
  name: "List",
  data() {
    return {
      records: [],
      activeName: "latest"
    };
  },
  components: {
    Post
  },
  created() {
    this.init(this.tab);
  },
  methods: {
    init(tab) {
      getList(1, 10, tab).then(response => {
        const { data } = response;
        this.records = data.records;
      });
    },
    handleClick(tab) {
      this.init(tab.name);
    }
  }
};
</script>
