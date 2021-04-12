<template>
  <el-card>
    <div class="clearfix" slot="header">
      <article class="media" v-for="(post, index) in records" :key="index">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="`https://www.gravatar.com/avatar/${post.avatar}`"
              style="border-radius: 10px;"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content-title">
            <p class="ellipsis is-ellipsis-1">
              <span class="is-size-6">{{ post.title }}</span>
            </p>
          </div>
          <nav class="level has-text-grey is-mobile is-size-7 mt-3">
            <div class="level-left">
              <span class="displayName has-text-black mr-1">
                {{ post.alias || post.userName }}
              </span>
              <span class="createTime mr-1">
                {{ dayjs(post.createTime).format("YYYY/MM/DD") }}
              </span>

              <span
                class="tag is-hidden-mobile is-danger is-light mr-1"
                v-for="(tag, index) in post.tags"
                :key="index"
              >
                {{ tag.name }}
              </span>

              <span class="views is-hidden-mobile">
                views: {{ post.view }}
              </span>
            </div>
          </nav>
        </div>
        <div class="media-right" />
      </article>
    </div>
  </el-card>
</template>

<script>
import { getList } from "@/api/post";

export default {
  name: "List",
  data() {
    return {
      records: []
    };
  },
  created() {
    this.init("lasted");
  },
  methods: {
    init(tab) {
      getList(1, 10, tab).then(response => {
        const { data } = response;
        this.records = data.records;
      });
    }
  }
};
</script>
