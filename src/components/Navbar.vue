<template>
  <div class="header-container">
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#Logo"></use>
      </svg>
    </a>
    <div class="d-flex justify-content-center align-items-center">
      <div class="navbar-logo"></div>
      <div class="d-flex header-nav align-items-center justify-content-center w-100
      primary-font letter-spacing-md fw-300" ref="fixedNav">
        <router-link to="/" class="nav-link">HOME</router-link>
        <router-link to="/user/shop" class="nav-link">SHOP</router-link>
        <router-link to="/user/cart" class="nav-link">CART</router-link>
      </div>
    </div>
  </div>
</template>

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
