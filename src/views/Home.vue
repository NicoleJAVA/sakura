<template>
  <div class="primary-background position-relative">
    <!-- sakura bush - left -->
    <img
      src="../assets/img/home/sakura_bush.png"
      class="sakura-bush absolute-bottom absolute-left"
      alt="sakura bush"
    />

    <!-- sakura bush - right -->
    <img
      src="../assets/img/home/sakura_bush.png"
      class="sakura-bush absolute-bottom absolute-right"
      alt="sakura bush"
    />

    <!-- sakura bush - middle -->
    <img
      src="../assets/img/home/sakura_bush_middle.png"
      class="sakura-bush-middle position-absolute absolute-bottom absolute-center"
    />

    <!-- street -->
    <div id="street" class="position-relative mx-auto">
      <!-- cafe -->
      <div
        id="sakura-cafe"
        class="position-absolute absolute-bottom absolute-center"
      >
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
      <FadeAnim
        ref="menuFadeAnim"
        id="home-fade-anim"
        class="absolute-bottom"
      />

      <!-- sakura rotation animation -->
      <RotateAnim ref="rotateLarge" id="rotate-large" />
      <RotateAnim ref="rotateSmall" id="rotate-small" />

      <!-- slogan - reveal anim-->
      <div id="home-slogan-wrap">
        <RevealAnim ref="mainSlogan" id="main-slogan" />
      </div>
    </div>

    <!-- bottom slider background -->
    <div
      class="slider-background-rectangle position-absolute absolute-center"
    ></div>
    <div
      class="slider-background-rounded position-absolute absolute-center"
    ></div>

    <!-- bottom slider -->
    <Slider
      id="home-slider"
      ref="slider"
      class="position-absolute absolute-center"
    />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$street-width: 1370px;
$street-height: 100%;
$street-min-height: 760px;

$street-building-bottom: 80px;

$sakura-cafe-width: 800px;

$yaki-booth-width: 363px;
$yaki-booth-left-offset: 0px;

$okashi-booth-width: 271px;
$okashi-booth-right-offset: 60px;

$fade-anim-right-offset: 360px;

$sakura-bush-width: 882px;
$sakura-bush-height: 472px;

$sakura-bush-middle-width: 746px;
$sakura-bush-middle-height: 570px;

$slogan-left-offset: 54px;
$slogan-top-offset: 20px;
$slogan-wrap-padding: 8px;
$slogan-wrap-width: 380px;
$slogan-wrap-height: 204px;
$slogan-wrap-bg-color: rgba(249, 239, 255, 0.31);
$slogan-wrap-bg: $slogan-wrap-bg-color content-box;
$slogan-wrap-padding-y: 60px;
$slogan-wrap-padding-x: 20px;

$home-slider-bottom: 50px;

$slider-background-bottom: 20px;
$slider-border-radius: 120px;
$slider-background-opacity: 0.2;
$slider-background-width: 860px;
$slider-background-height: 195px;
$slider-background-border-opacity: 0.6;
$slider-background-padding: 5px;

$slider-background-rounded-bottom: 40px;
$slider-background-rounded-width: 700px;
$slider-background-rounded-height: 90px;
$slider-background-rounded-opacity: 0.4;

$rotate-large-left-offset: -155px;
$rotate-large-top-offset: -280px;
$rotate-small-left-offset: -40px;
$rotate-small-top-offset: 290px;

#street {
  width: $street-width;
  height: $street-height;
  min-height: $street-min-height;
}

#sakura-cafe {
  width: $sakura-cafe-width;
  height: auto;
  bottom: $street-building-bottom;
}

#yaki-booth {
  width: $yaki-booth-width;
  left: $yaki-booth-left-offset;
  bottom: $street-building-bottom;
}

#okashi-booth {
  width: $okashi-booth-width;
  right: $okashi-booth-right-offset;
  bottom: $street-building-bottom;
}

.sakura-bush {
  position: absolute;
  width: $sakura-bush-width;
  height: $sakura-bush-height;
  object-fit: contain;
  bottom: $street-building-bottom;
}

.sakura-bush-middle {
  width: $sakura-bush-middle-width;
  height: $sakura-bush-middle-height;
  bottom: $street-building-bottom;
}

#home-slogan-wrap {
  position: absolute;
  left: $slogan-left-offset;
  top: $slogan-top-offset;
  width: $slogan-wrap-width;
  height: $slogan-wrap-height;
  background-image: url('../assets/img/home/slogan_bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: $slogan-wrap-padding-y $slogan-wrap-padding-x;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home-slider {
  bottom: $home-slider-bottom;
}

.slider-background-rectangle {
  bottom: $slider-background-bottom;
  width: $slider-background-width;
  height: $slider-background-height;
  border: 1px solid rgba(255, 255, 255, $slider-background-border-opacity);
  background: rgba(255, 255, 255, $slider-background-opacity) content-box;
  padding: $slider-background-padding;
}

.slider-background-rounded {
  bottom: $slider-background-rounded-bottom;
  width: $slider-background-rounded-width;
  height: $slider-background-rounded-height;
  background: rgba(255, 255, 255, $slider-background-rounded-opacity);
  border-radius: $slider-border-radius;
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
  right: $fade-anim-right-offset;
  bottom: $street-building-bottom;
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
const lgRotateHeight = 600;
const smRotateWidth = 250;
const smRotateHeight = 250;

export default {
  name: 'Home',
  components: {
    Slider,
    FadeAnim,
    RotateAnim,
    RevealAnim,
  },
  data () {
    return {};
  },
  methods: {
    initElements () {
      this.$refs.slider.init('home-slider');
      this.$refs.rotateLarge.init(
        'rotate-large',
        lgRotateWidth,
        lgRotateHeight,
        sakuraSrc,
        1
      );
      this.$refs.rotateSmall.init(
        'rotate-small',
        smRotateWidth,
        smRotateHeight,
        sakuraSrc,
        -1
      );
      this.$refs.mainSlogan.init('main-slogan');
    },
    playAnim () {
      setTimeout(() => {
        setTimeout(() => {
          this.$refs.slider.onNextArrowClicked();
        }, 50);
        this.$refs.rotateLarge.animate();
        this.$refs.rotateSmall.animate();
        this.$refs.mainSlogan.animate();
        this.$refs.menuFadeAnim.animate();
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
