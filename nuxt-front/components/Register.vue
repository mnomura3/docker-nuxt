<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        Name&nbsp;
        <a-tooltip title="What do you want others to call you?">
          <a-icon type="question-circle-o"/>
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          'name',
          {
            rules: [
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true
              }
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="E-mail">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid email!',
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="">
          agreement
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        Register
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
    import axios from 'axios'
    import Cookies from 'universal-cookie'

    export default {
        data() {
            return {
                confirmDirty: false,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 8},
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 16},
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'register'});
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        const cookies = new Cookies()
                        console.log('Received values of form: ', values);
                        axios.post('http://laravel7.test/api/register', values)
                            .then(res => (
                                console.log('Received values of form: ', res),
                                    alert('登録しました。'),
                                    cookies.set('api_token', res.data.plainTextToken, {maxAge: 7200}),
                                    this.$router.push('/')
                            ))
                            .catch(err => (
                                alert('ログインに失敗しました。')
                            ))
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            },
        },
    };
</script>
