<template>
  <div class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-front
      </h1>
      <h2 class="subtitle">
        it is test.
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <button type="button" @click="getUser">ユーザー情報を取得</button>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Logo from '~/components/Logo.vue'
    import Cookies from 'universal-cookie'

    export default {
        components: {
            Logo
        },
        methods: {
            getUser() {
                const cookies = new Cookies()
                let api_token = cookies.get('api_token')
                axios.get('http://laravel7.test/api/user', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ` + api_token,
                    }
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        alert('nothing'),
                            console.log(err)
                    })
            }
        }
    }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
