<template lang="html">

    <footer>
      <div class="container">
        <div class="social-icons">
          <template v-for='socialLink of socialLinks'>
            <a :href="socialLink.link" target="_blank"><i :class="socialLink.icon" aria-hidden="true"></i></a>
          </template>
        </div>
        <h3>Copyright 2017 Phone Repair Orlando, Phone Repair Kissimmee, 407-988-4101, 826 E. Vine Street, Kissimmee, FL 34744, All Rights Reserved.
        <h5>Designed / SEO by: <a href="http://crumpz.info" target="_blank">Gang Zhao</a></h5>
  </h3>
      </div>

    </footer>


</template>

<script>
export default {
  name: 'footers',
  data() {
    return {
      socialLinks: [
        {link: 'https://www.yelp.com/biz/1-phone-repair-kissimmee-12', icon: 'fa fa-yelp' },
        {link: 'https://plus.google.com/+PhoneScreenRepairKissimmee', icon: 'fa fa-google-plus' },
        {link: 'https://www.facebook.com/phonerepairkissimmee/', icon: 'fa fa-facebook' },
        {link: 'https://twitter.com/phoneRepairf', icon: 'fa fa-twitter' },
        {link: 'https://www.instagram.com/phonerepairkissimmee', icon: 'fa fa-instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'fa fa-youtube' },
      ],

    }
  }
}
</script>

<style lang="sass" scoped>
  footer
    padding: 0px 20px
    background: rgba(0,0,0,1)
    // height: 300px
    text-align: center
    .container
      max-width: 920px
      color: #fff
      margin: 0 auto
      padding: 20px 20px
      h3
        font-size: 0.8em
        padding: 20px 0
        line-height: 1.5em
        @media screen and (min-width: 375px)
          padding: 10px 0
        a
          text-decoration: underline
          color: white
      h5
        padding: 20px 0
        @media screen and (min-width: 375px)
          padding: 10px 0
      .social-icons
        padding: 40px 0px 0px 0px
        text-align: center
        a
          text-decoration: none
          color: #fff
          &:hover
            color: red
        i
          font-size: 1.2em
          padding: 0px 10px


</style>
