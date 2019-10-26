<template>
  <div id="app" class="w-full lg:w-2/3  mx-auto">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import './assets/css/main.css';

export default {
  components: {
    Navigation,
  },
};
</script>
