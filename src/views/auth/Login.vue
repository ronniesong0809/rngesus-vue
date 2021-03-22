<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          User Login
        </div>
        <div>
          <el-form
            ref="ruleForm"
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="ruleForm"
          >
            <el-form-item label="Username" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="Password" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="Save Me" prop="delivery">
              <el-switch v-model="ruleForm.rememberMe"></el-switch>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">
                Login
              </el-button>
              <el-button @click="resetForm('ruleForm')">
                Reset
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      redirect: undefined,
      ruleForm: {
        username: "",
        password: "",
        rememberMe: true
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter the username",
            trigger: "blur"
          },
          {
            min: 2,
            max: 15,
            message: "Must be 2 - 10 characters in length",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please enter the password",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "Must be 6 - 20 characters in length",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;

          this.$store
            .dispatch("user/Login", this.ruleForm)
            .then(() => {
              this.$message({
                message: "Login Success",
                type: "success",
                duration: 2000
              });

              setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: this.redirect || "/" });
              }, 0.1 * 1000);
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped></style>
