<template>
  <div class="home">
    <div>
      <img height="50" width="50" alt="Vue logo" src="../assets/logo.png">
    </div>

    <div>
      <input type="text" v-model="userToken" v-if="!user" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data () {
    return {
      userToken: null,
      user: null,
      loading: true,
    };
  },
  mounted() {
    this.$axi
  }
}
</script>
