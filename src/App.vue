<template>
<div>
  <component :is="layout">
    <router-view></router-view>
  </component>

</div>
</template>

<script>
import ProductManager from "./components/ProductManager.vue"
import LayoutUser from '@/layouts/LayoutUser.vue'
const default_layout = 'User'

export default {
  name: 'App',
  components: {
    ProductManager,
    LayoutUser
  },
  computed: {
    layout() {
      return 'Layout' + (this.$route.meta.layout || default_layout)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
