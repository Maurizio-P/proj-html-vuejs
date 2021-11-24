<template>
  <div>
    <Topbar />
    <Hero />
    <div id="background-white">
      <Section1 />
    </div>

    <MainService />

    <Logistical />

    <Results />

    <Trusted />

    <Contacts />

    <Footer />
  </div>
</template>

<script>
import Contacts from './Contacts.vue';
import Footer from './Footer.vue';
import Hero from "./Hero.vue";
import Logistical from "./Logistical.vue";
import MainService from "./MainService.vue";
import Results from "./Results.vue";
import Section1 from "./Section1.vue";
import Topbar from "./Topbar.vue";
import Trusted from "./Trusted.vue";
export default {
  components: {
    Topbar,
    Hero,
    Section1,
    MainService,
    Logistical,
    Results,
    Trusted,
    Contacts,
    Footer,
  },
  name,
  Results: "Page",
};
</script>

<style lang="scss" scoped>
#background-white {
  background-color: white;
}
</style>