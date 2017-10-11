<template lang="html">
  <section class='services'>
    <div class="container">
      <h1>repair service Done Right!</h1>
      <div class="services-container">
        <p class='intro'>We can fix all cell phones, computers, laptops, and game consoles you break or drop in water. We are affordable and quick. Call today or just bring your broken device in for repair today! 407-764-7460.</p>
        <template v-for="service of Services">
          <a>
            <div class="services-item">
                <img v-bind:src="service.img" alt="">
                <div class="service-desc">
                  <h4>{{service.title}}</h4>
                  <p>{{service.description}}</p>
                </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import idevices from '@/assets/idevices.jpg'
  import andorid from '@/assets/andorid.jpeg'
  import unlock from '@/assets/unlock.jpeg'
  import computer from '@/assets/computer.jpeg'
  import console from '@/assets/console.jpg'
export default {
  name: 'services',
  data() {
    return {
      Services: [
      {img: idevices,
       title: 'iDevices Repair',
description: "You bring us your iPhone, iPad or iPod and we provide you with a free estimate for the neccessary repairs. We then provide you with a quality replacement part installed by one of our professional technicians. Most repairs can be completed with 20 minutes while you wait."
       },
      {img: andorid,
       title: 'Andorid Devices Repair',
description: "You bring us your Phone or Tablet and we provide you with a free estimate for the neccessary repairs. We then provide you with a quality replacement part installed by one of our professional technicians. Most repairs can be completed with 20 minutes while you wait."
       },
      {img: unlock,
       title: 'Carrier Unlock Service',
description: "Don't you want to take your phone places? Your cellphone company thinks otherwise. That's something we can also help. Free your phones from any carrier company so you truely own your phone that you've paid for. Take your phone places with you."
       },
      {img: computer,
       title: 'Computer Serivce',
description: "Wide ranged of services are provided here in our shop or at your office/home. Our technicians are experienced, well-trained and certified to handle anything that could've happened to your home pc or your company's server. From viurs infection to disaster recovery, nothing is too small, or too big for us."
       },
      {img: console,
       title: 'Console Repair',
description: "A wise man once said: \"We don't stop playing because we grow old; we grow old because we stop playing\". We all want to stay young forever, but our game console will eventually break on us. The companies would only offer so much time for the warranty. Luckly, We are here to resurrect your broken game consoles that would otherwise ended up in landfill."
       },

      ]

    }
  }
}
</script>

<style lang="sass" scoped>
  $black: rbga(0,0,0,0.6)
  $dark-red: rgba(167, 25, 48, 0.5)
  $grey: rgba(165, 172, 175, 0.5)
  $white: rgba(255, 255, 255, 1)
  .services
    padding: 40px 0
    position: relative
    overflow: hidden
    // background: &black
    &:after
      content: ' '
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      opacity: 0.2
      background: url('../../assets/services-bg.jpg')
      background-position: center
      background-size: cover
    .container
      max-width: 1200px
      // height: 50vh
      margin: 0 auto
      // color: white
      h1
        font-weight: 700
        font-size: 2.2em
        text-align: center
        text-transform: capitalize
        margin: 24px 0
        padding-bottom: 20px
        // padding-bottom: 6px

      .services-container
        box-sizing: border-box
        display: flex
        flex-wrap: wrap

        // justify-content: space-around
        align-items: start
        .intro
          line-height: 1.6em
          font-size: 1.1em
          padding: 40px 40px
          &:first-letter
            font-weight: bold
            font-size: 4.5em
            color: #bf0311
        a
          text-decoration: none
          color: inherit
          padding: 40px
          border-bottom: 1px dotted black
          transition: 0.8s
          &:last-child
            border-bottom: none

          &:hover
            box-shadow: 0px 0px 40px 0 #000
            border-radius: 10px
            background: $white
          @media screen and (min-width: 1024px)
            width: 40%
            border-bottom: none
          .services-item
            display: flex
            align-items: center
            width: 100%
            border-radius: 4px
            transition: 0.4s
            img
              width: 120px
              height: 120px
              border-radius: 100%
              display: none
              border: 1px solid black
              @media screen and (min-width: 1024px)
                display: inline-block
            .service-desc
              padding-left: 0
              @media screen and (min-width: 1024px)
                padding-left: 40px
                padding-right: 40px
              h4
                font-size: 2.2em
                margin: 20px 0
                font-weight: 400
                // text-align: center
              p
                line-height: 1.4em
                font-size: 1.1em

</style>
