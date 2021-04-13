<template>
  <div>
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
            <span
              class="tag is-hidden-mobile is-danger is-light mr-1"
              v-for="(tag, index) in post.tags"
              :key="index"
            >
              {{ tag.name }}
            </span>

            <span class="displayName mr-1">
              Posted by {{ post.alias || post.userName }}
            </span>

            <span class="createTime mr-1">
              {{ dayjs(post.createTime).fromNow() }}
            </span>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <span class="views is-size-7 is-hidden-mobile">
          Views: {{ post.view }}
        </span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["records"]
};
</script>
