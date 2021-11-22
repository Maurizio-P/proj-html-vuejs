<template>
  <div>
      <Topbar />
      <Hero />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import Topbar from './Topbar.vue'
export default {
  components: { Topbar, Hero },
    name: "Page"
}
</script>

<style lang="scss">
</style>