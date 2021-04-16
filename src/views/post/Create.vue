<template>
  <div class="columns">
    <div class="column is-full">
      <el-card class="box-card">
        <div slot="header" class="is-size-4">
          Create a post
        </div>
        <div>
          <el-form ref="ruleForm" :model="ruleForm">
            <b-field>
              <b-input
                v-model="ruleForm.title"
                type="text"
                minlength="3"
                maxlength="100"
                placeholder="Title"
              />
            </b-field>

            <b-field>
              <b-input
                v-model="ruleForm.content"
                type="textarea"
                minlength="5"
                maxlength="20000"
                placeholder="Content..."
              />
            </b-field>

            <b-field>
              <b-taginput
                v-model="ruleForm.tags"
                maxtags="5"
                maxlength="30"
                ellipsis
                placeholder="Tags(optional)"
              />
            </b-field>

            <el-form-item class="mt-5 mb-0">
              <b-button
                @click="submitForm('ruleForm')"
                type="is-primary"
                rounded
              >
                Post
              </b-button>
              <b-button
                @click="resetForm('ruleForm')"
                type="is-light"
                rounded
                class="ml-3"
              >
                Reset
              </b-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createPost } from "@/api/post";
import { Message } from "element-ui";

export default {
  name: "Post",
  data() {
    return {
      ruleForm: {
        title: "",
        content: "",
        tags: []
      }
    };
  },
  methods: {
    showMessage(message, type) {
      Message({
        showClose: true,
        message: message,
        type: type,
        duration: 3000
      });
    },
    submitForm() {
      if (this.ruleForm.title === "" || this.ruleForm.content === "") {
        this.showMessage("title or content cannot be empty", "error");
        return false;
      }
      if (
        this.ruleForm.title.length < 3 ||
        this.ruleForm.title.length > 100 ||
        this.ruleForm.content.length < 5 ||
        this.ruleForm.content.length > 20000
      ) {
        this.showMessage("Please check your title", "error");
        return false;
      }
      createPost(this.ruleForm).then(res => {
        if (res.code === 200) {
          this.showMessage("Post created successfully", "success");
          this.$router.push({
            name: "Post Detail",
            params: {
              id: res.data.id
            }
          });
        } else {
          this.showMessage("Post failed", "error");
        }
      });
    },
    resetForm() {
      this.ruleForm.title = "";
      this.ruleForm.content = "";
      this.ruleForm.tags = [];
    }
  }
};
</script>
