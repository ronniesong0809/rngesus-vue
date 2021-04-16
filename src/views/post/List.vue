<template>
  <el-card>
    <div class="clearfix" slot="header">
      <el-tabs v-model="activeName" @tab-click="handleTabChange">
        <el-tab-pane label="New" name="latest" icon="">
          <ListItem :records="records" />
        </el-tab-pane>
        <el-tab-pane label="Hot" name="hottest">
          <ListItem :records="records" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <Pagination
      :current.sync="page.current"
      :size.sync="page.size"
      :total="page.total"
      @pagination="fetch"
    />
  </el-card>
</template>

<script>
import { getList } from "@/api/post";
import ListItem from "@/components/ListItem";
import Pagination from "@/components/Pagination";

export default {
  name: "List",
  data() {
    return {
      records: [],
      activeName: "latest",
      page: {
        tab: "latest",
        current: 1,
        size: 10,
        total: 0
      }
    };
  },
  components: {
    ListItem,
    Pagination
  },
  created() {
    this.fetch(this.page.tab);
  },
  methods: {
    fetch(tab) {
      getList(this.page.current, this.page.size, tab).then(response => {
        const { data } = response;
        this.records = data.records;
        this.page.current = data.current;
        this.page.size = data.size;
        this.page.total = data.total;
      });
    },
    handleTabChange(tab) {
      this.fetch(tab.name);
      this.page.current = 1;
    }
  }
};
</script>
