<template>
  <a-row type="flex" justify="space-around" align="middle" class="component-wrapper">
    <div class="ant-card">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        @submit="handleSubmit"
        class="login-form"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              // 'userName',
              'email',
              { rules: [{ required: true, message: 'Please input your email!' }] },
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
      <nuxt />
    </div>
  </a-row>
</template>

<script>
import axios from 'axios'
import Cookies from 'universal-cookie'
import env from "~/nuxt.config";
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const cookies = new Cookies()
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
          // const cookies = new Cookies()
          // axios.get('http://laravel7.test/sanctum/csrf-cookie')
          axios.get(env.baseUrl + '/sanctum/csrf-cookie')
          // eslint-disable-next-line no-undef
            .then(response => (
              // console.log(res)
              axios.post(env.baseAPIUrl + '/login', values)
                .then(res => (
                    // console.log(res)
                    cookies.set('auth', res.data.auth, { maxAge: 3600, sameSite: true }),
                    this.$router.push('/')
                ))
                .catch(err => (
                    alert('ログインに失敗しました。')
                ))
            ))
            .catch(error => (
              // eslint-disable-next-line no-console
              console.log(error)
            ))
        }
      })
    }
  }
}
</script>
<style>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  .component-wrapper {
    margin: 200px 0 0 0;
  }
</style>
