<template>
  <div class="slider">
    <ul class="slide-container">
      <li>
        <a href="#"><img src="../assets/img/slider/slider_1.png"/></a>
      </li>
      <li>
        <a href="#"><img src="../assets/img/slider/slider_2.png"/></a>
      </li>
      <li>
        <a href="#"><img src="../assets/img/slider/slider_3.png"/></a>
      </li>
      <li>
        <a href="#"><img src="../assets/img/slider/slider_4.png"/></a>
      </li>
      <li>
        <a href="#"><img src="../assets/img/slider/slider_5.png"/></a>
      </li>
    </ul>
    <div v-show="!isSyncOtherAnim()" class="arrow-container">
      <span class="prev-arrow">
        <i class="bi bi-arrow-left-circle"></i>
      </span>
      <span class="next-arrow">
        <i class="bi bi-arrow-right-circle"></i>
      </span>
    </div>
    <div v-show="!isSyncOtherAnim()" class="indicator-container">
      <span class="indicator active"></span>
      <span class="indicator"></span>
      <span class="indicator"></span>
      <span class="indicator"></span>
      <span class="indicator"></span>
    </div>
  </div>
</template>

<script>
const WINDOW_SIZE = 3;
export default {
  name: 'Slider',
  props: {
    msg: String,
  },
  data () {
    return {
      sliderId: '',
      autoplay: true,
      autoplayDelay: 2000,
      autoplayId: 0,
      intervalId: 0,
      slider: null,
      slideContainer: null,
      slides: null,
      indicatorContainer: null,
      slideWidth: 0,
      curIndex: 0,
      syncOtherAnim: true,
    };
  },
  methods: {
    init (id) {
      this.sliderId = id;
      this.initElements();
      this.initEvents();
      if (this.autoplay && !this.syncOtherAnim) {
        this.startAnimation();
      }
    },
    initElements () {
      this.slider = document.getElementById(this.sliderId);
      this.slides = this.slider.getElementsByTagName('li');
      this.slideContainer = this.slider.getElementsByClassName(
        'slide-container'
      )[0];
      this.indicatorContainer = this.slider.getElementsByClassName(
        'indicator-container'
      )[0];

      for (let i = 0; i < WINDOW_SIZE; i++) {
        const clonedSlide = this.slides[i].cloneNode(true);
        this.slideContainer.appendChild(clonedSlide);
      }

      this.indicators = this.indicatorContainer.children;

      this.slideWidth = this.slides[0].offsetWidth;
    },
    initEvents () {
      if (this.syncOtherAnim) return;

      const that = this;

      this.slider.addEventListener('mouseover', function () {
        clearTimeout(that.autoplayId);
        that.autoplay = false;
      });
      this.slider.addEventListener('mouseout', function () {
        that.autoplay = true;
        that.startAnimation(that.slideContainer);
      });

      for (let i = 0; i < this.indicators.length; i++) {
        this.indicators[i].setAttribute('index', i);
        this.indicators[i].addEventListener('click', function () {
          const index = parseInt(this.getAttribute('index'));
          this.onIndicatorClicked(index);
        });
      }

      const prevArrow = this.slider.getElementsByClassName('prev-arrow')[0];
      const nextArrow = this.slider.getElementsByClassName('next-arrow')[0];
      prevArrow.addEventListener('click', function () {
        that.onPrevArrowClicked();
      });
      nextArrow.addEventListener('click', function () {
        that.onNextArrowClicked();
      });
    },
    animate (destinationX) {
      let speed = 10;
      let time = 10;
      const step =
        (destinationX - this.slideContainer.offsetLeft) / this.slideWidth;

      speed = speed * step;
      time = time / Math.abs(step);

      clearInterval(this.intervalId);
      this.setCurrentActiveIndicator(this.curIndex);

      this.intervalId = setInterval(() => {
        const isLeft = destinationX > this.slideContainer.offsetLeft + speed;

        if ((speed < 0 && isLeft) || (speed > 0 && !isLeft)) {
          clearInterval(this.intervalId);
          this.intervalId = -1;
          this.slideContainer.style.left = destinationX + 'px';

          if (this.autoplay && !this.syncOtherAnim) {
            this.startAnimation(this.slideContainer);
          }

          return;
        }

        this.slideContainer.style.left =
          this.slideContainer.offsetLeft + speed + 'px';
      }, time);
    },
    onPrevArrowClicked () {
      const li = this.slideContainer.children;
      this.curIndex = this.curIndex - 1;
      if (this.curIndex < 0) {
        this.slideContainer.style.left =
          -((li.length - 1) * this.slideWidth) + 'px';
        this.curIndex = li.length - 2;
      }
      this.animate(-(this.curIndex * this.slideWidth));
    },
    onNextArrowClicked (nextIndex) {
      const li = this.slideContainer.children;

      this.curIndex = this.curIndex + 1;

      if (this.curIndex > li.length - WINDOW_SIZE) {
        this.slideContainer.style.left = 0 + 'px';
        this.curIndex = 1;
      }

      this.animate(-(this.curIndex * this.slideWidth));
    },
    setCurrentActiveIndicator () {},
    startAnimation () {
      this.autoplayId = setTimeout(() => {
        this.onNextArrowClicked();
      }, this.autoplayDelay);
    },
    isSyncOtherAnim () {
      return this.syncOtherAnim;
    },
  },
  mounted () {
    if (!this.syncOtherAnim) this.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$slide-container-width: 6000px;

$slide-width: 300px;
$slide-height: 200px;
$window-size: 3;

$arrow-width: 50px;
$arrow-height: 50px;
$arrow-font-size: 40px;
$arrow-line-height: 50px;

$arrow-container-height: 50px;
$arrow-container-margin-top: -25px;

$indicator-container-width: 150px;
$indicator-container-height: 30px;
$indicator-container-line-height: 30px;
$indicator-container-margin-left: -75px;

$indicator-width: 15px;
$indicator-height: 15px;

* {
  margin: 0;
  padding: 0;
}

.slide-container li ul,
.slide-container li a {
  width: $slide-width;
  height: $slide-height;
}

.slider {
  position: absolute;
  margin: 10px 0 0 0px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: $slide-width * $window-size;
  height: $slide-height;
  overflow: hidden;
}

.slide-container {
  position: absolute;
  list-style-type: none;
  width: $slide-container-width;
}

.slide-container li {
  float: left;
}

.slide-container li a {
  display: inline-block;
}

.slide-container li a img {
  width: 100%;
  height: 100%;
}

.slider:hover .arrow-container {
  display: block;
}
.arrow-container {
  position: absolute;
  width: 100%;
  height: $arrow-container-height;
  top: 50%;
  margin-top: $arrow-container-margin-top;
  display: none;
}

.arrow-container span {
  position: absolute;
  width: $arrow-width;
  height: $arrow-height;
  font-size: $arrow-font-size;
  text-align: center;
  line-height: $arrow-line-height;
  background: rgba(0, 0, 0, 0);
  color: white;
}

.prev-arrow {
  left: 0px;
  cursor: pointer;
}

.next-arrow {
  right: 0px;
  cursor: pointer;
}

.indicator-container {
  position: absolute;
  width: $indicator-container-width;
  height: $indicator-container-height;
  line-height: $indicator-container-line-height;
  bottom: 0;
  left: 50%;
  margin-left: $indicator-container-margin-left;
  text-align: center;
}

.indicator {
  display: inline-block;
  width: $indicator-width;
  height: $indicator-height;
  border-radius: 100%;
  background: white;
  cursor: pointer;
}

.indicator.active {
  background: red;
}
</style>
