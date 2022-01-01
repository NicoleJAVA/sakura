<template>
  <Navbar></Navbar>
  <div class="container-fluid pt-3 position-relative bg-white">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    ToastMessages,
    Navbar,
  },
  provide () {
    return {
      emitter,
    };
  },
  created () {},
};
</script>
