<template>
  <div class="pagination-container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :background="true"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :page-sizes="[10, 20, 50]"
      layout="prev, pager, next, jumper, sizes, total"
      :total="total"
    />
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "current", "size"],
  computed: {
    currentPage: {
      get() {
        return this.current;
      },
      set(val) {
        this.$emit("update:current", val);
      }
    },
    pageSize: {
      get() {
        return this.size;
      },
      set(val) {
        this.$emit("update:size", val);
      }
    }
  },
  methods: {
    handleSizeChange() {
      this.$emit("pagination");
    },
    handleCurrentChange() {
      this.$emit("pagination");
    }
  }
};
</script>
