<template>
  <div class="gapped-dialog">
    <div class="dialog-left-part"></div>
    <div class="dialog-center-part"></div>
    <div class="dialog-right-part"></div>
    <div class="dialog-rotated-line"></div>
    <div class="dialog-text text-secondary">CHECKOUT</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- When the stroke width is 2px or 3px, dialog-rotated-line: left: 30px; top:43px-->
<style scoped lang="scss">
@import "~@/assets/scss/helpers/variables";

$dialog-width: 180px;
$dialog-height: 45px;
$dialog-border-radius: 10px;
$dialog-left-part-width: 40px;
$dialog-right-part-width: 119px;

$stroke-width: 3px;
$rotated-line-border-radius: 1px;
$dialog-frame-color: #b0b2e1;

$dialog-rotated-line-height: 26px;
$dialog-rotated-line-width: 10px;
$dialog-rotated-line-left: 30px;
$dialog-rotated-line-top: 43px;
$dialog-rotated-line-roation: -45deg;

.gapped-dialog {
  display: flex;
  width: $dialog-width;
  position: relative;
}

.dialog-left-part {
  border: $stroke-width solid $dialog-frame-color;
  border-radius: $dialog-border-radius 0 0 $dialog-border-radius;
  border-right: 0px solid transparent;
  width: $dialog-left-part-width;
  height: $dialog-height;
}

.dialog-center-part {
  height: $dialog-height;
  flex-grow: 1;
  border-top: $stroke-width solid $dialog-frame-color;
}

.dialog-right-part {
  border: $stroke-width solid $dialog-frame-color;
  border-radius: 0 $dialog-border-radius $dialog-border-radius 0;
  border-left: 0px solid transparent;
  width: $dialog-right-part-width;
  height: $dialog-height;
}

.dialog-rotated-line {
  position: absolute;
  border-right: $stroke-width solid $dialog-frame-color;
  height: $dialog-rotated-line-height;
  width: $dialog-rotated-line-width;
  left: $dialog-rotated-line-left;
  top: $dialog-rotated-line-top;
  transform: rotate($dialog-rotated-line-roation);
  transform-origin: top right;
  border-radius: 0 $rotated-line-border-radius 0 0;
}

.dialog-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  letter-spacing: 2px;
}
</style>

<script>
export default {
  name: 'GappedDialog',
  data () {
    return {};
  },
};
</script>
