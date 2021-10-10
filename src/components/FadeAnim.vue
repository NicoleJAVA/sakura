<template>
  <div class="d-flex flex-column align-items-center">
    <img id="street-lamp" src="../assets/img/home/street_lamp.png" />

    <div
      id="menu-layers-container"
      class="d-flex justify-content-center align-items-center"
    >
      <div id="fader-wrap">
        <ul id="fader">
          <li>
            <a href="#"
              ><img
                src="../assets/img/fadeAnim/fade_item_1.png"
                alt="featured product"
              />
            </a>
          </li>
          <li>
            <a href="#"
              ><img
                src="../assets/img/fadeAnim/fade_item_2.png"
                alt="featured product"
              />
            </a>
          </li>
          <li>
            <a href="#"
              ><img
                src="../assets/img/fadeAnim/fade_item_3.png"
                alt="featured product"
              />
            </a>
          </li>
          <li>
            <a href="#"
              ><img
                src="../assets/img/fadeAnim/fade_item_4.png"
                alt="featured product"
              />
            </a>
          </li>
          <li>
            <a href="#"
              ><img
                src="../assets/img/fadeAnim/fade_item_5.png"
                alt="featured product"
              />
            </a>
          </li>
        </ul>
      </div>

      <div id="menu-panel"></div>
    </div>

    <div id="street-lamp-bottom"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$street-lamp-width: 110px;
$street-lamp-height: 200px;
$menu-width: 140px;
$menu-height: 280px;
$anim-item-width: 100px;
$anim-item-height: 100px;
$fade-anim-duration: 0.5s;
$fade-in-start-position: 10px;
$fade-out-start-position: -10px;

#street-lamp {
  width: $street-lamp-width;
  height: auto;
}

#street-lamp-bottom {
  width: $street-lamp-width;
  height: $street-lamp-height;
  background-repeat: repeat-y;
  background-size: contain;
  background-image: url('../assets/img/home/street_lamp_bottom.png');
}

#menu-layers-container {
  position: relative;
  width: $menu-width;
  height: $menu-height;
}

#menu-panel {
  width: $menu-width;
  height: $menu-height;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('../assets/img/home/sakura_home_menu.png');
}

#fader-wrap {
  position: absolute;
  width: $anim-item-width;
  height: $anim-item-height;
}

#fader {
  position: relative;
  width: $anim-item-width;
  height: $anim-item-height;
}

#fader li {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

#fader li a img {
  width: $anim-item-width;
  height: $anim-item-height;
  object-fit: cover;
}

.fade-in {
  animation: fadeInAnim $fade-anim-duration forwards;
  visibility: visible !important;
}

@keyframes fadeInAnim {
  0% {
    opacity: 0;
    left: $fade-in-start-position;
  }

  100% {
    opacity: 1;
    left: 0px;
  }
}

.fade-out {
  animation: fadeOutAnim $fade-anim-duration forwards;
}

@keyframes fadeOutAnim {
  0% {
    left: 0px;
    opacity: 1;
  }

  100% {
    opacity: 0;
    left: $fade-out-start-position;
  }
}
</style>

<script>
export default {
  name: 'FadeAnim',
  data () {
    return {
      fader: null,
      animItems: null,
      autoplayId: 0,
      currIndex: 0,
    };
  },

  methods: {
    initElements () {
      this.fader = document.getElementById('fader');
      this.animItems = this.fader.getElementsByTagName('li');
    },

    startAnimation () {
      setInterval(this.animate, 1700);
    },

    animate () {
      const that = this;

      let nextIndex = this.currIndex + 1;
      if (nextIndex === this.animItems.length) nextIndex = 0;

      if (this.animItems[this.currIndex].classList.contains('fade-in')) {
        this.animItems[this.currIndex].classList.remove('fade-in');
      }
      this.animItems[this.currIndex].classList.add('fade-out');

      setTimeout(() => {
        that.animItems[nextIndex].style.left = '60px';
        that.animItems[nextIndex].classList.add('fade-in');
        if (that.animItems[nextIndex].classList.contains('fade-out')) {
          that.animItems[nextIndex].classList.remove('fade-out');
        }
        that.animItems[nextIndex].style.visibility = 'visible';

        that.currIndex = nextIndex;
      }, 450);
    },
  },

  mounted () {
    this.initElements();
    this.animItems[this.currIndex].classList.add('fade-in');
    this.startAnimation();
  },
};
</script>
