<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          New User Signup
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
              <el-input v-model="ruleForm.username" />
            </el-form-item>

            <el-form-item label="Email" prop="email">
              <el-input v-model="ruleForm.email" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Password" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="Confirm" prop="confirm">
              <el-input
                v-model="ruleForm.confirm"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">
                Sign Up
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
import { userSignup } from "@/api/auth/auth";
export default {
  name: "Signup",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Passwords confirm your password"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        username: "",
        password: "",
        confirm: "",
        email: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter a username",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
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
        ],
        confirm: [
          {
            required: true,
            message: "Please enter a password",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please enter an email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter a valid email address",
            trigger: ["blur", "change"]
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

          userSignup(this.ruleForm)
            .then(value => {
              const { code, message } = value;

              if (code === 200) {
                this.$message({
                  message: "Signup Success",
                  type: "success"
                });

                setTimeout(() => {
                  this.loading = false;
                  this.$router.push({ path: this.redirect || "/login" });
                }, 0.1 * 1000);
              } else {
                this.$message.error("Signup Filed! " + message);
              }
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
