<template lang="html">
  <section class='about'>
    <div class="container">
      <h1>about us</h1>

        <p class='intro'>PHONE REPAIR is located in Kissimmee, Florida, near Disney and just south of Orlando. We Speak both English & Spanish. We have been saving your electronics from the recycling bin for more than 6 years now. Saved over 10,000 devices while saving you money at the same time. From iPhone repairs, iPods, iPads, tablets, game console and computer repairs, we have quickly and proudly brought them back to life. As a certified technician, I believe there is never a reason to give up hope that your device cannot be saved. No matter the condition, have faith and call Phone Repair for the best service. All my work is 100% guaranteed & most repairs can be fixed while you wait in less than 20 minutes. Call Today! 407-988-4101
</p>

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
  name: 'about',

  data() {
    return {

      people: [
        {
          name: 'Suzanne Rodriguez',
          photo: 'https://randomuser.me/api/portraits/women/63.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit voluptatem cum soluta asperiores enim, fuga perspiciatis aperiam nihil iste perferendis ex, ea voluptates doloribus, ad error modi sed fugit!'
        },
        {
          name: 'Roland Frazier',
          photo: 'https://randomuser.me/api/portraits/men/31.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at ducimus nostrum sunt quasi vero doloremque architecto error. Alias nesciunt quia, quam consequuntur omnis cum architecto quos amet tempora magni.'
        },
        {
          name: 'Marcia Wilson',
          photo: 'https://randomuser.me/api/portraits/women/93.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repudiandae repellendus, ipsum officia! Error quod ratione repellendus ex id, adipisci, dolorum veritatis hic necessitatibus? Rerum vero aliquid quo ducimus omnis.'
        },
      ],

      socialLinks: [
        {link: 'tel:4079884101', icon: 'phone-square' },
        {link: 'https://www.yelp.com/biz/1-phone-repair-kissimmee-12', icon: 'yelp' },
        {link: 'https://plus.google.com/+PhoneScreenRepairKissimmee', icon: 'google-plus' },
        {link: 'https://www.facebook.com/phonerepairkissimmee/', icon: 'facebook' },
        {link: 'https://twitter.com/phoneRepairf', icon: 'twitter' },
        {link: 'https://www.instagram.com/phonerepairkissimmee', icon: 'instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'youtube' },
      ],

    }
  }
}
</script>

<style lang="sass" scoped>
  .about
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
      opacity: 0.3
      background: url('../../assets/about-bg.jpg')
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

      .intro
        line-height: 1.6em
        font-size: 1.1em
        padding: 0 40px
        &:first-letter
          font-weight: bold
          font-size: 4.5em
          color: #bf0311
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
