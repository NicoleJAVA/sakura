<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      console.log('API', api);

      this.$http
        .post(api, this.user)
        .then(response => {
          const { token, expired } = response.data;
          console.log('token and expired: ', token, expired);

          // 請問助教： 以下這行印出 response 後，
          // response.data 所印出來的內容只有 message, success 和 uid，
          // 但是沒有 token 和 expired 。 謝謝助教！
          console.log('response: ', response);

          document.cookie = `sellerToken=${token}; expires=${new Date(expired)}`;
        })
        .catch(error => {
          console.log('Faild to sign in: ', error);
        });
    },
  },
};
</script>
