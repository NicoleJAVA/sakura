<template>
  <div class="d-flex justify-content-center primary-background">
    <div class="position-absolute">
      <div class="fade-anim-wrap">
        <FadeAnim id="home-fade-anim" />
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <img id="sakura-cafe" src="../assets/img/home/sakura_cafe.png" alt="cafe" />
      <router-view />
      <div class="slider-wrapper d-flex position-relative">
        <Slider ref="slider" />
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$sakura-cafe-width: 1000px;
$fade-anim-top-offset: 200px;
$fade-anim-right-offset: 30px;
$fade-anim-wrap-width: 1000px;

#sakura-cafe {
  width: $sakura-cafe-width;
  height: auto;
}

#home-fade-anim {
  position: absolute;
  top: $fade-anim-top-offset;
  right: $fade-anim-right-offset;
}

.fade-anim-wrap {
  width: $fade-anim-wrap-width;
  position: relative;
}

</style>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import FadeAnim from '../components/FadeAnim.vue';

export default {
  name: 'Home',
  components: {
    Slider,
    FadeAnim,
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
