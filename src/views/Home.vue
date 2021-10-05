<template>
  <div class="d-flex flex-column align-items-center" style="height: max-content;">
    <Navbar></Navbar>
    <router-view />
    <div class="slider-wrapper d-flex position-relative">
      <Slider/>
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
};
</script>
