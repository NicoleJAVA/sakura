<template>
  <ul id="fader">
    <li>
      <a href="#"><img src="../assets/img/fadeAnim/fade_item_1.png"/></a>
    </li>
    <li>
      <a href="#"><img src="../assets/img/fadeAnim/fade_item_2.png"/></a>
    </li>
    <li>
      <a href="#"><img src="../assets/img/fadeAnim/fade_item_3.png"/></a>
    </li>
    <li>
      <a href="#"><img src="../assets/img/fadeAnim/fade_item_4.png"/></a>
    </li>
    <li>
      <a href="#"><img src="../assets/img/fadeAnim/fade_item_5.png"/></a>
    </li>
  </ul>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#fader {
  position: relative;
  width: 400px;
  height: 400px;
}

#fader li {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.fade-in {
  animation: fadeInAnim 0.5s forwards;
  visibility: visible !important;
}

@keyframes fadeInAnim {
  0% {
    opacity: 0;
    left: 60px;
  }

  100% {
    opacity: 1;
    left: 0px;
  }
}

.fade-out {
  animation: fadeOutAnim 0.5s forwards;
}

@keyframes fadeOutAnim {
  0% {
    left: 0px;
    opacity: 1;
  }

  100% {
    opacity: 0;
    left: -60px;
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
