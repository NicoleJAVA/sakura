<template>
  <h1 class="clip-text text-shorten-anim">櫻花商品/日韓星巴克櫻花杯代購</h1>
</template>

<script>
const TEXT_SHORTEN_ANIM = 'text-shorten-anim';
const TEXT_REVEAL_ANIM = 'text-reveal-anim';

export default {
  name: 'RevealAnim',
  data () {
    return {
      autoplay: true,
      autoplayDelay: 2000,
      autoplayId: 0,
      intervalId: 0,
      animator: null,
      animatorId: '',
      syncOtherAnim: true,
    };
  },
  methods: {
    init (id) {
      this.animatorId = id;
      this.initElements();
      this.initEvents();
      if (this.autoplay && !this.syncOtherAnim) {
        this.startAnimation();
      }
    },
    initElements (id) {
      this.animator = document.getElementById(this.animatorId);
    },
    initEvents () {
      const that = this;
      if (!this.syncOtherAnim) {
        this.animator.addEventListener('mouseover', function () {
          clearTimeout(that.autoplayId);
          that.autoplay = false;
        });
        this.animator.addEventListener('mouseout', function () {
          that.autoplay = true;
          that.startAnimation();
        });
      }
    },
    animate () {
      this.shortenText();
    },
    shortenText () {
      this.animator.classList.add(TEXT_SHORTEN_ANIM);
      setTimeout(() => {
        this.revealText();
      }, 700);

      // Delay 30 ms before the removal of the reveal animation class,
      // so that the animation won't flicker
      setTimeout(() => {
        if (this.animator.classList.contains(TEXT_REVEAL_ANIM)) {
          this.animator.classList.remove(TEXT_REVEAL_ANIM);
        }
      }, 30);
    },
    revealText () {
      this.animator.classList.add(TEXT_REVEAL_ANIM);

      setTimeout(() => {
        if (this.animator.classList.contains(TEXT_SHORTEN_ANIM)) {
          this.animator.classList.remove(TEXT_SHORTEN_ANIM);
        }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/assets/scss/helpers/variables';

$r: $peach-pink-r;
$g: $peach-pink-g;
$b: $peach-pink-b;
$slogan-color: $deep-dull-purple;
$reveal-anim-font-size: 16px;

body {
  overflow-x: hidden;
}

.clip-text {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  display: inline;
  background-image: linear-gradient(to right, transparent 0%, transparent 100%);
  background-size: 100% 100%;
}

@property --a {
  syntax: '<angle>';
  inherits: false;
  initial-value: 90deg;
}
@property --x1 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --c1 {
  syntax: '<color>';
  inherits: false;
  initial-value: $slogan-color;
}
@property --x2 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --c2 {
  syntax: '<color>';
  inherits: false;
  initial-value: $slogan-color;
}
@property --x3 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 1%;
}
@property --c3 {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}
@property --a3 {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --r3 {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --x4 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 1%;
}
@property --a4 {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --a5 {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.text-reveal-anim {
  background-image: linear-gradient(
    var(--a),
    var(--c1) var(--x1),
    var(--c2) var(--x2),
    rgba($r, $g, $b, var(--a3)) var(--x3),
    rgba($r, $g, $b, var(--a4)) var(--x4),
    rgba($r, $g, $b, var(--a5)) 100%
  );
  background-size: 100% 100%;
  animation: text-reveal-clip 0.9s ease-out 1 forwards;
}

@keyframes text-reveal-clip {
  0% {
    --x2: 0%;
    --x3: 0%;
    --a3: 0;
    --a4: 0;
  }
  75% {
    --x2: 75%;
    --x3: 75%;
    --a3: 0;
    --a4: 0;
    --a5: 0;
  }
  79% {
    --x2: 79%;
    --x3: 79%;
    --x4: 90%;
    --a3: 0.3;
    --a4: 0.3;
    --a5: 0.3;
  }
  100% {
    --x2: 100%;
    --x3: 100%;
    --x4: 100%;
    --a3: 0.7;
    --a4: 0.7;
    --a5: 0.7;
  }
}

.text-shorten-anim {
  background-image: linear-gradient(
    var(--a),
    $slogan-color 0%,
    var(--c1) var(--x1),
    var(--c2) var(--x2),
    transparent 100%
  );
  animation: text-shorten-clip 0.4s linear 1 forwards;
  background-size: 100% 100%;
}

@keyframes text-shorten-clip {
  0% {
    --x1: 99%;
    --x2: 100%;
    --c1: $slogan-color;
    --c2: transparent;
  }
  100% {
    --x1: 0%;
    --x2: 0%;
    --c1: $slogan-color;
    --c2: transparent;
  }
}

h1 {
  letter-spacing: 0.1em;
  font-family: Verdana, sans-serif;
  position: relative;
  font-size: $reveal-anim-font-size;
}
</style>
