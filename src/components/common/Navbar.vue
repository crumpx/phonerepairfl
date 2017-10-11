<template lang="html">
  <header>
    <nav class='navbar '>
      <div class="container">
        <div class="top-bar-contact">
          <h5>826 E. Vine Street, Kissimmee, FL 34744</h5>
          <h5><i class="fa fa-phone" aria-hidden="true"></i> 407-988-4101</h5>
            <h5><i class="fa fa-envelope" aria-hidden="true"></i> phonerepairfl@gmail.com</h5>
        </div>

      <div class="nav-toggle" v-on:click="openMenu()">☰</div>

      <div v-bind:class="[ isOpen ? 'open' : 'close', 'nav-menu']">
        <ul>
            <li> <a href="#" v-scroll-to="'#highlights'" title='Home' v-on:click="openMenu()">Home</a></li>
            <li> <a href="#" v-scroll-to="'#about'" title='About' v-on:click="openMenu()">About</a></li>
            <li> <a href="#" v-scroll-to="'#services'" title='services' v-on:click="openMenu()">services</a></li>
            <!-- <li> <a href="#" v-scroll-to="'#phone-repair'" title='Phone repair' v-on:click="openMenu()">Phone repair</a></li>
            <li> <a href="#" v-scroll-to="'#phone-unlock'" title='Phone unlock' v-on:click="openMenu()">Phone unlock</a></li>
            <li> <a href="#" v-scroll-to="'#computer-repair'" title='Computer repair' v-on:click="openMenu()">Computer repair</a></li>
            <li> <a href="#" v-scroll-to="'#game-console-repair'" title='Game Console Repair' v-on:click="openMenu()">Game Console Repair</a></li> -->
            <li> <a href="#" v-scroll-to="'#faqs'" title='FAQs' v-on:click="openMenu()">FAQs</a></li>
            <li> <a href="#" v-scroll-to="'#contact'" title='Contact Us' v-on:click="openMenu()">Contact Us</a></li>
            <li> <a href="#" v-scroll-to="'#testimonials'" title='Testimonials' v-on:click="openMenu()">Testimonials</a></li>


        </ul>
      </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: 'navbar',

  data() {
    return {
      isOpen: false
    }
  },
  methods: {
   openMenu: function(){
     this.isOpen = !this.isOpen
   },
 },
}
</script>

<style lang="sass" scoped>
  .open
    top: 0
    opacity: 1
    transition: all 0.2s ease-in-out
  .close
    display: none
    transition: all 0.2s ease-in-out
    @media screen and (min-width: 1024px)
      display: none

  .navbar
    z-index: 1
    position: fixed
    width: 100%
    background: rgba(0,0,0, 1)
    // background: rgba(255,255,255, 1)
    border-bottom: 1px solid black
    .container
      width: 100%
      margin: 0 auto
      position: relative
      .top-bar-contact
        display: flex
        justify-content: center
        background: #cde
        padding-left: 10px
        padding-right: 10px
        flex-wrap: wrap
        padding: 4px 0px
        h5
          margin: 0 10px
          font-size: 0.8em
        @media screen and (min-width: 790px)
          justify-content: space-between
          padding: 10px 0px
      .nav-toggle
        text-align: right
        line-height: 60px
        margin-right: 20px
        color: #bf0311
        @media screen and (min-width: 790px)
          display: none
      .nav-menu
        max-width: 1024px
        text-align: center
        margin: 0 auto
        top: 81px


        // text-align: right
        border-bottom: 1px solid black
        @media screen and (min-width: 790px)
          position: static
          margin-right: 40px
          display: block
          width: initial
          border: 0
        li
          @media screen and (min-width: 790px)
            display: inline-block
          a
            padding: 0 18px
            line-height: 60px
            display: block
            text-align: left
            text-decoration: none

            // font-weight: 600
            color: #bf0311
            transition: all 0.3s ease-in
            text-transform: capitalize
            &:hover
              background: #999
              color: #fff
</style>
