<template>
  <div class="header-container bg-white">
    <a href="#/">
      <img
        class="sakura-logo mx-auto d-block"
        src="../assets/img/Navbar/sakura_logo.png"
        alt="sakura logo"
      />
    </a>
    <div class="d-flex justify-content-center align-items-center">
      <div class="navbar-logo"></div>
      <div
        class="d-flex header-nav align-items-center justify-content-center w-100
      primary-font letter-spacing-md fw-300"
        ref="fixedNav"
      >
        <router-link to="/" class="nav-link">HOME</router-link>
        <router-link to="/user/shop" class="nav-link">SHOP</router-link>
        <router-link to="/user/cart" class="nav-link">CART</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sakura-logo {
  height: 240px;
  object-fit: cover;
}

</style>

<script>
export default {
  data () {
    return {
      NavOffset: 0,
    };
  },
  methods: {
    setNabarFixed () {
      if (window.scrollY >= this.NavOffset) {
        this.$refs.fixedNav.classList.add('fixed-nav');
      } else {
        this.$refs.fixedNav.classList.remove('fixed-nav');
      }
    },
  },
  mounted () {
    this.NavOffset = this.$refs.fixedNav.offsetTop;
    window.addEventListener('scroll', this.setNabarFixed);
  },
};
</script>
