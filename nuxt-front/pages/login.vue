<template>
  <div>
    <a-card
      style="width:35%; margin: auto"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <p v-if="noTitleKey === 'login'">
        <Login />
      </p>
      <p v-else-if="noTitleKey === 'register'">
        <Register />
      </p>
    </a-card>
  </div>
</template>

<script>
    import Login from '~/components/Login.vue'
    import Register from '~/components/Register.vue'
    export default {
        layout: 'login_layout',
        components: {
            Login,
            Register,
        },
        data() {
            return {
                tabListNoTitle: [
                    {
                        key: 'login',
                        tab: 'Login',
                    },
                    {
                        key: 'register',
                        tab: 'Register',
                    },
                ],
                key: 'login',
                noTitleKey: 'login',
            };
        },
        methods: {
            onTabChange(key, type) {
                this[type] = key;
            },
        },
    };
</script>
