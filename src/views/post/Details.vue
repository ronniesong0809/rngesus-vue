<template>
  <div class="columns">
    <div class="column is-full">
      <el-card class="box-card">
        <div slot="header" class="has-text-centered">
          <p class="is-size-3 has-text-weight-bold">
            {{ post.title }}
          </p>
          <div class="has-text-grey is-size-6 mt-3">
            <span>
              {{ dayjs(post.createTime).format("D MMM YYYY") }}
            </span>
            <el-divider direction="vertical" />
            <span>Views: {{ post.view }}</span>
          </div>
        </div>

        <b-taglist>
          <span v-for="(tag, index) in tags" :key="index">
            <b-tag type="is-info is-light mr-2">
              {{ "#" + tag.name }}
            </b-tag>
          </span>
        </b-taglist>

        <div v-html="markdown"></div>

        <nav class="mt-6">
          <b-taglist>
            <span v-for="(tag, index) in tags" :key="index">
              <b-tag type="is-info is-light mr-2">
                {{ "#" + tag.name }}
              </b-tag>
            </span>
          </b-taglist>
        </nav>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getPost } from "@/api/post";
import { marked } from "marked";

export default {
  name: "PostDetail",
  data() {
    return {
      post: {
        content: "",
        id: this.$route.params.id
      },
      tags: []
    };
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    markdown() {
      return this.post.content;
    }
  },
  methods: {
    async fetchPost() {
      getPost(this.$route.params.id).then(response => {
        const { data } = response;
        this.post = data.post;
        this.post.content = marked(this.post.content);
        this.tags = data.tags;

        document.title = data.post.title;
      });
    }
  }
};
</script>
