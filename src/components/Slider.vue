<template>
  <div id="slider">
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
    initElements () {
      this.slider = document.getElementById('slider');
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

          if (this.autoplay) {
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
    this.initElements();
    this.initEvents();
    if (this.autoplay && !this.syncOtherAnim) {
      this.startAnimation();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

#slider,
.slide-container li ul,
.slide-container li a {
  width: 300px;
  height: 200px;
}

#slider {
  position: absolute;
  /*padding: 3px;*/
  margin: 10px 0 0 10px;
  /*overflow: hidden;*/
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.slide-container {
  position: absolute;
  list-style-type: none;
  width: 6000px;
  /*transition-duration: 0.3s;*/
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

#slider:hover .arrow-container {
  display: block;
}
.arrow-container {
  position: absolute;
  width: 100%;
  height: 50px;
  top: 50%;
  margin-top: -25px;
  display: none;
}

.arrow-container span {
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 40px;
  /*display: inline-block;*/
  text-align: center;
  line-height: 50px;
  background: rgba(0, 0, 0, 0.2);
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
  width: 150px;
  height: 30px;
  line-height: 30px;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  text-align: center;
}

.indicator {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: white;
  cursor: pointer;
}

.indicator.active {
  background: red;
}
</style>
