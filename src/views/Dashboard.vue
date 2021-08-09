<template>
  Dashboard
</template>

<script>
export default {
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)sellerToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );

    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;

    this.$http.post(api, this.user).then(response => {
      if (!response.data.success) {
        this.$router.push('/login');
        console.warn(response.data.message);
      }
    });
  },
};
</script>
