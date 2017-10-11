<template lang="html">
  <section class='testimonials'>
    <div class="container">
      <h1>Testimonials</h1>
      <div class="testimonials-container">
        <p class='intro'>Kind words from our customers</p>
        <div id="google-reviews"></div>
        <div class="review-buttons">
          <a href="https://www.google.com/search?q=1phone+repair&oq=1phone+repair&aqs=chrome..69i57j69i60l3j0l2.6616j0j4&sourceid=chrome&ie=UTF-8#lrd=0x88dd8426479cc64d:0x7b64eb356a6e1a30,1,," target="_blank">View All Google Reviews</a>
          <a href="https://www.google.com/search?q=1phone+repair&oq=1phone+repair&aqs=chrome..69i57j69i60l3j0l2.6616j0j4&sourceid=chrome&ie=UTF-8#lrd=0x88dd8426479cc64d:0x7b64eb356a6e1a30,3,," target="_blank">Wite A Review</a>
        </div>

      </div>


      <div class="social-icons">
        <a href="https://www.facebook.com/1phoneKissimmee/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://twitter.com/1phoneRepair?ref_src=twsrc%5Etfw"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://plus.google.com/+PhoneScreenRepairKissimmee"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q"><i class="fa fa-youtube" aria-hidden="true"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {


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
        // padding: 40px 40px 0px 0px
        text-align: right
        a
          text-decoration: none
          color: #fff
          &:hover
            color: red
        i
          font-size: 2em
          padding: 0px 10px
</style>
