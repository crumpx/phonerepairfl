<template lang="html">
  <header>
    <nav class='navbar '>
      <div class="container">
        <div class="top-bar-contact">
          <h5>826 E. Vine Street, Kissimmee, FL 34744</h5>
          <h5><i class="fa fa-phone" aria-hidden="true"></i> 407-988-4101</h5>
            <h5><i class="fa fa-envelope" aria-hidden="true"></i> phonerepairfl@gmail.com</h5>
        </div>
        <div class="top-bar-menu">
          <div class="social-icons">
            <template v-for='socialLink of socialLinks'>
              <a :href="socialLink.link" target="_blank"><i :class="socialLink.icon" aria-hidden="true"></i></a>
            </template>
          </div>

        <div class="nav-toggle" v-on:click="openMenu()">☰</div>

        <div v-bind:class="[ isOpen ? 'open' : 'close', 'nav-menu']">

          <ul>
              <li> <a href="#" v-scroll-to="'#highlights'" title='Home' v-on:click="openMenu()">Home</a></li>
              <li> <a href="#" v-scroll-to="'#about'" title='About' v-on:click="openMenu()">About</a></li>
              <li> <a href="#" v-scroll-to="'#services'" title='services' v-on:click="openMenu()">services</a></li>
              <li> <a href="#" v-scroll-to="'#faqs'" title='FAQs' v-on:click="openMenu()">FAQs</a></li>
              <li> <a href="#" v-scroll-to="'#contact'" title='Contact Us' v-on:click="openMenu()">Contact Us</a></li>
              <li> <a href="#" v-scroll-to="'#testimonials'" title='Testimonials' v-on:click="openMenu()">Testimonials</a></li>
          </ul>
        </div>
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
      isOpen: false,
      socialLinks: [
        {link: 'tel:4079884101', icon: 'fa fa-phone-square' },
        {link: 'https://www.yelp.com/biz/1-phone-repair-kissimmee-12', icon: 'fa fa-yelp' },
        {link: 'https://plus.google.com/+PhoneScreenRepairKissimmee', icon: 'fa fa-google-plus' },
        {link: 'https://www.facebook.com/1phoneKissimmee', icon: 'fa fa-facebook' },
        {link: 'https://twitter.com/phoneRepairf', icon: 'fa fa-twitter' },
        {link: 'https://www.instagram.com/phonerepairkissimmee', icon: 'fa fa-instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'fa fa-youtube' },
      ],

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
    transition: all 1s ease-in
  .close
    display: none
    transition: all 1s ease-in-out
    @media screen and (min-width: 900px)
      display: none

  .navbar
    z-index: 1
    position: fixed
    width: 100%
    background: rgba(0,0,0, 0.8)
    // background: rgba(255,255,255, 1)
    border-bottom: 1px solid black

    .container
      width: 100%
      margin: 0 auto

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
        @media screen and (min-width: 900px)
          justify-content: space-between
          padding: 10px 0px
      .top-bar-menu
        display: flex
        justify-content: space-between
        // justify-content: flex-end
        flex-wrap: wrap
        align-items: center

        @media screen and (min-width: 375px)
          // justify-content: space-between
          align-items: center
          margin: 0 auto

        .nav-toggle
          text-align: right
          line-height: 60px
          margin-right: 20px
          color: red

          @media screen and (min-width: 900px)
            display: none
        .nav-menu
          max-width: 1024px
          margin: 0 auto
          top: 81px
          border-bottom: 1px solid black
          width: 100%
          transition: all 0.3s ease-in

          ul
            display: inline-block
            width: 100%

            li
              @media screen and (min-width: 900px)
                display: inline-block
              a
                padding: 0 18px
                line-height: 60px
                display: block
                text-align: left
                text-decoration: none

                color: red
                transition: all 0.3s ease-in
                text-transform: capitalize
                &:hover
                  background: #999
                  color: #fff
          @media screen and (min-width: 900px)
            position: static
            margin-right: 40px
            display: block
            width: initial
            border: 0
            &:last-child
              margin-right: 0

        .social-icons
          // display: none
          @media screen and (min-width: 375px)
            display: block
            // margin-left: 40px
          // display: none
          a
            display: none
            text-decoration: none
            color: white
            &:hover
              color: red
            &:first-child
              margin-right: 30px
              display: inline
            @media screen and (min-width: 375px)
              display: inline
          i
            font-size: 1.6em
            padding: 0px 10px


</style>
