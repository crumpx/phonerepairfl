<template lang="html">
  <section class='testimonials'>
    <div class="container">
      <h1>Testimonials</h1>
      <div class="testimonials-container">
        <p class='intro'>Kind words from our customers</p>
        <div id="google-reviews"></div>

        <div class="review-buttons">
          <a href="https://goo.gl/aPyFNC" target="_blank">View All Google Reviews</a>
          <a href="https://goo.gl/kdQwtb" target="_blank">Wite A Review</a>
        </div>
      </div>
      <div class="social-icons">
        <template v-for='socialLink of socialLinks'>
          <a :href="socialLink.link" target="_blank"><icon :name='socialLink.icon' scale='1.5' class=''></icon></a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'testimonials',
  data() {
    return {
      socialLinks: [
        {link: 'tel:4078832117', icon: 'phone-square' },
        {link: 'https://www.yelp.com/biz/idoktorfixit-kissimmee-6', icon: 'yelp' },
        {link: 'https://plus.google.com/u/0/+iDoktorFixit', icon: 'google-plus' },
        {link: 'https://www.facebook.com/iDoktorfixit/', icon: 'facebook' },
        {link: 'https://twitter.com/iDoktorfixit', icon: 'twitter' },
        {link: 'https://www.instagram.com/idoktorfixit/?hl=en', icon: 'instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'youtube' },
      ],

    }
  }
}
</script>

<style lang="sass" scoped>
  .testimonials
    padding: 40px 0
    position: relative
    overflow: hidden
    background: rgba(0,0,0, 0.4)
    &:after
      content: ' '
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      opacity: 0.7
      background: url('https://static.pexels.com/photos/261470/pexels-photo-261470.jpeg')
      background-position: center
      background-size: cover
    .container
      max-width: 1200px
      margin: 0 auto
      color: white

      h1
        font-weight: 700
        font-size: 2.2em
        text-align: center
        text-transform: capitalize
        margin: 24px 0
      .testimonials-container
        .intro
          line-height: 1.6em
          font-size: 1.1em
          padding: 0 40px
          padding: 20px 0
          &:first-letter
            font-weight: bold
            font-size: 4.5em
            color: #bf0311
        .review-buttons
          padding-top: 20px
          text-align: center
          a
            display: inline-block
            padding: 17px
            background: rgb(0,191,168)
            margin: 20px 10px
            // margin-right: 10px
            border-radius: 6px
            text-decoration: none
            color: white


      .social-icons
        @media screen and (min-width: 375px)
          display: none
        padding: 40px 0px 0px 0px
        text-align: center
        a
          padding: 0px 10px
          text-decoration: none
          color: #fff
          &:hover
            color: red



</style>
