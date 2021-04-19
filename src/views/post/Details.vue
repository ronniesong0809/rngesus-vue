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

        <Tags :tags="tags" />

        <div v-html="markdown"></div>

        <nav class="my-5">
          <Tags :tags="tags" />
        </nav>

        <router-link :to="{ name: 'Edit Post', params: { id: post.id } }">
          <b-button type="is-info is-light" rounded>
            Edit
          </b-button>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getPost } from "@/api/post";
import { marked } from "marked";
import Tags from "@/components/Tags";

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
  components: {
    Tags
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
