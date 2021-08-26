<template>
  <AdminNavbar></AdminNavbar>
  <div class="container-fluid">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import AdminNavbar from '../components/AdminNavbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    AdminNavbar,
    ToastMessages,
  },

  provide () {
    return {
      emitter,
    };
  },

  inject: ['isApiSuccess'],

  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)sellerToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;

    this.$http.post(api, this.user).then(response => {
      if (!this.isApiSuccess(response, api)) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
