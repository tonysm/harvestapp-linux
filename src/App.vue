<template>
  <div id="app">
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
