<template lang="html">
  <content>
    <div class="spacer"></div>
    <Highlights id='highlights'></Highlights>
    <about id='about'></about>
    <Services id='services'></Services>
    <faqs id='faqs'></faqs>
    <testimonials id='testimonials'></testimonials>
    <contact id='contact'></contact>

<!-- <Carousel></Carousel>
<aboutme  id='aboutme'></aboutme>
<portfolio id='portfolio'></portfolio>
<contact id='contact'></contact> -->

</content>
</template>

<script>
import Highlights from '@/components/Landing/highlights'
import About from '@/components/Landing/about'
import Services from '@/components/Landing/services'
import Faqs from '@/components/Landing/faqs'
import Testimonials from '@/components/Landing/testimonials'
import Contact from '@/components/Landing/contact'


export default {
  name: 'landing',
  components: {
    Highlights,
    About,
    Services,
    Faqs,
    Testimonials,
    Contact
  }
}
</script>

<style lang="sass" scoped>
  .spacer
    height: 80px
    /*@media screen and (max-width: 790px)
      height: 81px*/

</style>
