<template lang="html">
  <section class='hightlights'>
    <div class="container">
      <div class="social-icons">
        <template v-for='socialLink of socialLinks'>
          <a :href="socialLink.link" target="_blank"><i :class="socialLink.icon" aria-hidden="true"></i></a>
        </template>
      </div>
      <div class="store-logo">
        <img src="../../assets/logo.jpg" alt="">

        <h4>The only way to do great work, is to love what you do!</h4>
      </div>
      <h1>what makes phone repair florida <span class='stronger'> the best?</span></h1>

      <div class="highlight-container">
        <template id="" v-for="highlight of highlights">
          <a>
          <div class="highlight-item">
            <h3>{{highlight.title}}</h3>
              <div class="icon">
               <span class="fa-stack fa-4x">
                 <i class="fa fa-circle fa-stack-2x"></i>
                 <i :class="highlight.icon"></i>
               </span>
             </div>
            <p>{{highlight.description}}</p>
          </div>
          </a>
        </template>



      </div>
      <div class="call">
        <a href="tel:4079884101">Call Now!</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'highlights',
  data(){
    return {
      socialLinks: [
        {link: 'https://www.yelp.com/biz/1-phone-repair-kissimmee-12', icon: 'fa fa-yelp' },
        {link: 'https://plus.google.com/+PhoneScreenRepairKissimmee', icon: 'fa fa-google-plus' },
        {link: 'https://www.facebook.com/phonerepairkissimmee/', icon: 'fa fa-facebook' },
        {link: 'https://twitter.com/phoneRepairf', icon: 'fa fa-twitter' },
        {link: 'https://www.instagram.com/phonerepairkissimmee', icon: 'fa fa-instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'fa fa-youtube' },
      ],
      highlights: [
        {title: 'free diagnostics',
        description: "It's always free to see what's going on with your device or computer.",
        icon:'fa fa-wrench fa-stack-1x fa-inverse'},

        {title: 'LIGHTENING QUICK SERVICE',
        description: "Most repairs can be completed with 20 minutes while you wait.",
        icon:'fa fa-bolt fa-stack-1x fa-inverse'},

        {title: 'AFFORDABLE',
        description: "Our prices are always affordable! Click here to see our pricing list",
        icon:'fa fa-usd fa-stack-1x fa-inverse'},

        {title: 'TOP QUALITY SERVICE',
        description: "Quality replacement parts installed by professional technicians.",
        icon:'fa fa-trophy fa-stack-1x fa-inverse'}, ]
    }
  },
}
</script>

<style lang="sass" scoped>
  .hightlights
    padding: 30px 0
    .container
      max-width: 1200px
      margin: 0 auto
      h1
        font-weight: 400
        font-size: 2.2em
        text-align: center
        text-transform: capitalize
        margin: 24px 0
        .stronger
          font-weight: bold
          color: #bf0311
      .store-logo
        max-width: 960px
        margin: 0 auto
        text-align: center
        img
          width: 240px
          padding-bottom: 5px
          // @media screen and (max-width: 900px)
          //   display: none
        h4
          margin: 12px
          font-size: 0.8em
          text-align: center
          text-shadow: 1px 1px #000
        .social-icons
          @media screen and (min-width: 375px)
            display: none
          // padding: 40px 40px 0px 0px
          text-align: center
          margin-bottom: 10px
          a
            text-decoration: none
            color: red
            &:hover
              color: red
          i
            font-size: 1.6em
            padding: 0px 10px
      .highlight-container
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        align-items: start
        a
          text-decoration: none
          color: inherit
          .highlight-item
            transition: 0.4s
            width: 250px
            border: 1px solid black
            padding: 10px
            border-radius: 9px
            margin: 10px 10px
            &:hover
              box-shadow: 0px 0px 40px 0 #000
            h3
              text-transform: uppercase
              text-align: center
              margin: 20px 0
              font-size: 1.1em
            .icon
              text-align: center
              font-size: 12px
              margin: 0 auto
              margin-bottom: 20px
              span
                i
                  color: #ccc
                  &:hover
                    color: #fff
              .fa-circle
                color: rgb(232,29,98)






          p
            margin-left: 20px
            height: 80px

      .call
        padding: 20px 0
        text-align: center
        margin: 20px 0
        a
          padding: 17px
          background: rgb(0,191,168)
          margin: 40px auto
          margin-right: 20px
          border-radius: 6px
          text-decoration: none
          color: white
          &:hover
            box-shadow: 0px 0px 10px 0 #000








</style>
