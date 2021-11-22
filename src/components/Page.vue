<template>
  <div>
      <Topbar />
      <Hero />
    <div id="background-white">
        <Section1 />
    </div>

  </div>
</template>

<script>
import Hero from './Hero.vue'
import Section1 from './Section1.vue'
import Topbar from './Topbar.vue'
export default {
  components: { Topbar, Hero, Section1 },
    name: "Page"
}
</script>

<style lang="scss" scoped>
    #background-white{
        background-color: white;
    }
</style>