<template>
  <div class="primary-background">
    <RevealAnim ref="mainSlogan" id="main-slogan"/>
    <!-- street -->
    <div id="street" class="position-relative mx-auto">
      <div id="sakura-cafe" class="mx-auto">
        <img
          src="../assets/img/home/sakura_cafe.png"
          alt="cafe"
          class="w-100"
        />
      </div>

      <!-- yaki booth -->
      <img
        id="yaki-booth"
        src="../assets/img/home/sakura_yaki_booth.png"
        alt="yaki booth"
        class="position-absolute"
      />

      <!-- okashi booth -->
      <img
        id="okashi-booth"
        src="../assets/img/home/sakura_okashi_booth.png"
        alt="okashi booth"
        class="position-absolute"
      />

      <!-- menu fader animation -->
      <FadeAnim id="home-fade-anim" />

      <!-- sakura rotation animation -->
      <RotateAnim ref="rotateLarge" id="rotate-large" />
      <RotateAnim ref="rotateSmall" id="rotate-small" />
    </div>
  </div>
  <div class="slider-wrapper d-flex position-relative">
    <Slider ref="slider" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$street-width: 1370px;
$sakura-cafe-width: 800px;
$yaki-booth-width: 370px;
$yaki-booth-left-offset: 0px;
$yaki-booth-bottom-offset: 0px;
$okashi-booth-width: 271px;
$okashi-booth-right-offset: 60px;
$okashi-booth-bottom-offset: 0px;
$fade-anim-top-offset: 20px;
$fade-anim-right-offset: 360px;

$rotate-large-left-offset: -155px;
$rotate-large-top-offset: -280px;
$rotate-small-left-offset: -40px;
$rotate-small-top-offset: 290px;

#street {
  width: $street-width;
}

#sakura-cafe {
  width: $sakura-cafe-width;
  height: auto;
}

#yaki-booth {
  width: $yaki-booth-width;
  left: $yaki-booth-left-offset;
  bottom: $yaki-booth-bottom-offset;
}

#okashi-booth {
  width: $okashi-booth-width;
  right: $okashi-booth-right-offset;
  bottom: $okashi-booth-bottom-offset;
}

#rotate-large {
  position: absolute;
  left: $rotate-large-left-offset;
  top: $rotate-large-top-offset;
}

#rotate-small {
  position: absolute;
  left: $rotate-small-left-offset;
  top: $rotate-small-top-offset;
}

#home-fade-anim {
  position: absolute;
  top: $fade-anim-top-offset;
  right: $fade-anim-right-offset;
}
</style>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import FadeAnim from '../components/FadeAnim.vue';
import RotateAnim from '../components/RotateAnim.vue';
import sakuraSrc from '../assets/img/home/sakura_rotate_img.png';
import RevealAnim from '../components/RevealAnim';

const animDuration = 2800;

const lgRotateWidth = 600;
const smRotateWidth = 250;

export default {
  name: 'Home',
  components: {
    Slider,
    FadeAnim,
    RotateAnim,
    RevealAnim,
  },
  data () {
    return {
    };
  },
  methods: {
    initElements () {
      this.$refs.rotateLarge.init('rotate-large', lgRotateWidth, sakuraSrc, 1);
      this.$refs.rotateSmall.init('rotate-small', smRotateWidth, sakuraSrc, -1);
      this.$refs.mainSlogan.init('main-slogan');
    },
    playAnim () {
      setTimeout(() => {
        this.$refs.slider.onNextArrowClicked();
        this.$refs.rotateLarge.animate();
        this.$refs.rotateSmall.animate();
        this.$refs.mainSlogan.animate();
        this.playAnim();
      }, animDuration);
    },
  },
  mounted () {
    setTimeout(() => {
      this.initElements();
      this.playAnim();
    }, 100);
  },
};
</script>
