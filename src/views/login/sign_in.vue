<template>
  <div class="login-page-container">
    <div class="login-page-body">
      <h2 class="login-page-title">登录</h2>
      <el-form ref="formEl" :model="form" :rules="rules">
        <el-form-item prop="username" label="登录账号">
          <el-input 
            type="text" 
            size="large"
            v-model="form.username"
            autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input 
            type="password" 
            size="large"
            v-model="form.password"
            autocomplete="on"
            @keyup.native.enter="handleSubmit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            :loading="loading"
            type="primary" 
            size="large"
            class="login-button"
            @click.native.prevent="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    data() {
      return {
        loading: false,
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: "登录账号不能为空", trigger: "blur" }
          ],
          password: [
            { required: true, message: "密码不能为空", trigger: "blur" }
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.formEl.validate(valid => {
          if (!valid || this.loading) return false;

          this.loading = true;

          this.$store.dispatch("login", this.form)
            .then(_ => {
              this.loading = false;

              const redirect_url = this.$route.query.redirect_url || '/';

              this.$router.push({ path: redirect_url });
            })
            .catch(_ => {
              this.loading = false;
            });
        });
      }
    }
  }
</script>

<style lang="scss">
  .login-page-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .el-form-item__label {
      &::before {
        display: none;
      }
    }
  }

  .login-page-body {
    min-width: 240px;
    max-width: 420px;
    width: 80%;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgba(#000, .1);
  }
  
  .login-page-title {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    color: #333;
  }

  .login-button {
    width: 100%;
    margin-top: 30px;
  }
</style>