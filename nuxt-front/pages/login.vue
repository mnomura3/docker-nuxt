<template>
  <div>
    <a-card
      style="width:35%; margin: auto"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <p v-if="noTitleKey === 'article'">
        <Login />
      </p>
      <p v-else-if="noTitleKey === 'app'">
        <Register />
      </p>
      <p v-else="noTitleKey === 'project'">
        <ForgotPassword />
      </p>
    </a-card>
  </div>
</template>

<script>
    import Login from '~/components/Login.vue'
    import Register from '~/components/Register.vue'
    import ForgotPassword from '~/components/ForgotPassword.vue'
    export default {
        layout: 'login_layout',
        components: {
            Login,
            Register,
            ForgotPassword,
        },
        data() {
            return {
                tabListNoTitle: [
                    {
                        key: 'article',
                        tab: 'Login',
                    },
                    {
                        key: 'app',
                        tab: 'Register',
                    },
                    {
                        key: 'project',
                        tab: 'Forgot',
                    },
                ],
                key: 'tab1',
                noTitleKey: 'article',
            };
        },
        methods: {
            onTabChange(key, type) {
                console.log(key, type);
                this[type] = key;
            },
        },
    };
</script>

<!--<template>-->
<!--  <section>-->
<!--    <div>-->
<!--      <a-tabs default-active-key="1" @change="callback">-->
<!--        <a-tab-pane key="1" tab="Tab 1">-->
<!--          <Login/>-->
<!--        </a-tab-pane>-->
<!--        <a-tab-pane key="2" tab="Tab 2" force-render>-->
<!--          Content of Tab Pane 2-->
<!--        </a-tab-pane>-->
<!--        <a-tab-pane key="3" tab="Tab 3">-->
<!--          Content of Tab Pane 3-->
<!--        </a-tab-pane>-->
<!--      </a-tabs>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->
<!--<script>-->
<!--    import Login from '~/components/Login.vue'-->

<!--    export default {-->
<!--        layout: 'login_layout',-->
<!--        components: {-->
<!--            Login,-->
<!--        },-->
<!--        data() {-->
<!--            return {};-->
<!--        },-->
<!--        methods: {-->
<!--            callback(key) {-->
<!--                console.log(key);-->
<!--            },-->
<!--        },-->
<!--    };-->
<!--</script>-->
