<template>
  <b-taglist>
    <span v-for="(tag, index) in tags" :key="index">
      <b-tag type="is-info is-light is-size-6 mr-2">
        {{ "#" + tag.name }}
      </b-tag>
    </span>
  </b-taglist>
</template>

<script>
export default {
  name: "Tags",
  props: ["tags"]
};
</script>
