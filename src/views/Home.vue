<template>
  <div class="d-flex justify-content-center primary-background">
    <div
      class="d-flex flex-column align-items-center"
    >
      <Navbar></Navbar>
      <router-view />
      <div class="slider-wrapper d-flex position-relative">
        <Slider ref="slider" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Slider,
    Navbar,
  },
  data () {
    return {
      animDuration: 1800,
    };
  },
  methods: {
    playAnim () {
      setTimeout(() => {
        this.$refs.slider.onNextArrowClicked();
        this.playAnim();
      }, this.animDuration);
    },
  },
  mounted () {
    this.playAnim();
  },
};
</script>
