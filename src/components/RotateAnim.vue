<template>
  <div class="rotater-wrap rotate-anim d-flex">
    <img ref="rotateImg" alt="rotation animation" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$rotater-default-height: 200px;
$rotater-default-width: 200px;

.rotater-wrap {
  width: $rotater-default-width;
}

.rotater-wrap img {
  width: 100%;
  height: auto;
}

.rotate-anim {
  transition: all 0.4s 0s ease-out;
}

.no-transition {
  transition: none;
}
</style>

<script>
import $ from 'jquery';

const ROTATE_CLASS_NAME = 'rotate-anim';
const NO_TRANSITION_CLASS_NAME = 'no-transition';

export default {
  name: 'RotateAnim',
  data () {
    return {
      autoplay: true,
      autoplayDelay: 2000,
      autoplayId: 0,
      intervalId: 0,
      rotater: null,
      rotaterId: '',
      currDegree: 0,
      removeTrasitionId: 0,
      syncOtherAnim: true,
      direction: 1,
    };
  },
  methods: {
    init (id, width, height, src, direction) {
      this.rotaterId = id;
      this.direction = direction;
      this.initElements(width, height, src);
      this.initEvents();
      if (this.autoplay && !this.syncOtherAnim) {
        this.startAnimation();
      }
    },
    initElements (width, height, src) {
      this.rotater = document.getElementById(this.rotaterId);
      this.rotater.style.width = width + 'px';
      this.rotater.style.height = height + 'px';
      this.$refs.rotateImg.src = src;
    },
    initEvents () {
      const that = this;
      if (!this.syncOtherAnim) {
        this.rotater.addEventListener('mouseover', function () {
          clearTimeout(that.autoplayId);
          that.autoplay = false;
        });
        this.rotater.addEventListener('mouseout', function () {
          that.autoplay = true;
          that.startAnimation();
        });
      }
    },
    animate () {
      this.currDegree = this.currDegree + this.direction * 72;
      const that = this;

      if (
        (that.direction === 1 && that.currDegree > 360) ||
        (that.direction === -1 && that.currDegree < -360)
      ) {
        that.rotater.classList.remove(ROTATE_CLASS_NAME);
        that.rotater.classList.add(NO_TRANSITION_CLASS_NAME);
        const newDegree = that.currDegree - this.direction * 360;
        this.currDegree = this.direction * 72;

        $('#' + that.rotaterId).css('transform', 'rotate(0deg)');
        that.startRotate(newDegree);
      } else {
        this.startRotate(this.currDegree);
      }
    },
    startRotate (degree) {
      if (this.rotater.classList.contains(NO_TRANSITION_CLASS_NAME)) {
        this.rotater.classList.remove(NO_TRANSITION_CLASS_NAME);
      }

      this.removeTrasitionId = setTimeout(() => {
        this.rotater.classList.add(ROTATE_CLASS_NAME);
        const degreeArg = 'rotate(' + degree + 'deg)';
        $('#' + this.rotaterId).css('transform', degreeArg);
      }, 30);
    },
    startAnimation () {
      this.autoplayId = setTimeout(() => {
        this.animate();
      }, this.autoplayDelay);
    },
    isSyncOtherAnim () {
      return this.syncOtherAnim;
    },
  },
};
</script>
