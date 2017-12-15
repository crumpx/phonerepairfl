<template lang="html">
  <section class='hightlights'>

    <div class="container">
      <div class="social-icons">
        <template v-for='socialLink of socialLinks'>
          <a :href="socialLink.link" target="_blank"><icon :name='socialLink.icon' scale='1.5' class=''></icon></a>
        </template>
      </div>
      <div class="store-logo">
        <img src="../../assets/logo.jpg" alt="">

        <h4>The only way to do great work, is to love what you do!</h4>
      </div>
      <h1>what makes phone repair florida <span class='stronger'> the best?</span></h1>

      <div class="highlight-container">
        <template id="" v-for="highlight of highlights">

          <div class="highlight-item">
            <h1>{{highlight.title}}</h1>

              <icon label='icons'>
                <icon name="circle" scale="6" color='crimson' class='icons'></icon>
                <icon :name="highlight.icon" color="lightgray" scale=3 class='icon'></icon>
              </icon>

            <p>{{highlight.description}}</p>
          </div>
          <div class="contact-containter" v-if="showContact">
            <div class="contact-box">
              <label for="">First Name</label>
              <input type="text" name="firstname" v-model='firstname' placeholder="John">
              <label for="">Last Name</label>
              <input type="text" name='lastname' v-model='lastname'  placeholder="Smith">
              <label for="">Phone Number</label>
              <input type="tel" name='phonenumber' placeholder="123-4567-8901" v-model='phonenumber'>
              <label for="">Email</label>
              <input type="email" name='email' v-model='email'  placeholder="Optional">
              <div class='button-box'>
                <button v-if="firstname.length>=2 && lastname.length>=2 && phonenumber.length >= 10 " @click="enterContact">✓</button>
                <button @click='cancelInput'>✖</button></div>
            </div>
          </div>

        </template>
      </div>

      <div class='callbox'>
        <a class='call' href="tel:4078832117">Call Now!</a>
        <a class='signin' @click='showContact=true' >Already Here!</a>

      </div>



    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'highlights',
  data(){
    return {
      showContact: false,
      firstname: '',
      lastname: '',
      phonenumber: '',
      email:'',
      token: 'b1eedb27d8ee6ed61b100cc67be4bb81',
      socialLinks: [
        {link: 'https://www.yelp.com/biz/1-phone-repair-kissimmee-12', icon: 'yelp' },
        {link: 'https://plus.google.com/+PhoneScreenRepairKissimmee', icon: 'google-plus' },
        {link: 'https://www.facebook.com/phonerepairkissimmee/', icon: 'facebook' },
        {link: 'https://twitter.com/phoneRepairf', icon: 'twitter' },
        {link: 'https://www.instagram.com/phonerepairkissimmee', icon: 'instagram' },
        {link: 'https://www.youtube.com/channel/UCAdgI3zx0M6qJYJz9urrK1Q', icon: 'youtube' },
      ],
      highlights: [
        {title: 'free diagnostics',
        description: "It's always free to see what's going on with your device or computer.",
        icon:'wrench'},

        {title: 'Fast SERVICE',
        description: "Most repairs can be completed with 20 minutes while you wait.",
        icon:'bolt'},

        {title: 'AFFORDABLE',
        description: "Our prices are always affordable! Click here to see our pricing list",
        icon:'usd'},

        {title: 'TOP QUALITY SERVICE',
        description: "Quality replacement parts installed by professional technicians.",
        icon:'trophy'}, ]
    }
  },
  methods: {
    cancelInput: function(){
      this.showContact = false
      this.firstname = ''
      this.lastname = ''
      this.phonenumber = ''
      this.email = ''
    },
    enterContact: function() {
      let self = this
      const formData = new FormData()
      const data = {'contact_name': this.firstname + " " + this.lastname,
                    'is_taxable': true,
                  'contact_persons':[
                    {'first_name':this.firstname,
                      'last_name':this.lastname,
                      'email': this.email,
                    'phone': this.phonenumber,
                  }
                  ]}

      formData.append("JSONString", JSON.stringify(data) )

      const url = "https://books.zoho.com/api/v3/contacts?organization_id=658944375"
      // const headers = {
      //   "Authorization": 'Zoho-authtoken b1eedb27d8ee6ed61b100cc67be4bb81',
      //   "Content-Type" : "multipart/form-data"
      //   }
        axios.defaults.headers.common['Authorization'] = 'b1eedb27d8ee6ed61b100cc67be4bb81';
      axios.post(url, formData ).then(function(response) {
        console.log(response.data.message)
        if (response.data.code == 0) {
          self.showContact = false
        }
        self.firstname = ''
        self.lastname = ''
        self.phonenumber = ''
        self.email = ''
      }).catch(function (error) {
        if (response.data.code == 3062) {
          self.showContact = false
          self.firstname = ''
          self.lastname = ''
          self.phonenumber = ''
          self.email = ''
        }
  });


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
          padding: 0px 10px
          text-decoration: none
          color: red
      .highlight-container
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        align-items: start
        @media (orientation: landscape) and (min-width: 900px)
          flex-wrap: nowrap
        .highlight-item
          text-decoration: none
          color: inherit
          transition: 0.4s
          width: 250px
          border: 1px solid black
          padding: 10px
          border-radius: 9px
          margin: 10px 10px
          display: flex
          flex-direction: column
          align-items: center
          &:hover
            box-shadow: 0px 0px 40px 0 #000
          h1
            text-transform: uppercase
            text-align: center
            margin: 20px 0
            font-size: 1.1em
          p
            margin-left: 20px
            height: 80px
            margin-top: 15px
      .callbox
        padding: 20px 0
        text-align: center
        margin: 20px 0
        position: relative

        .call, .signin
          padding: 17px
          background: rgb(0,191,168)
          margin: 40px auto
          margin-right: 20px
          border-radius: 6px
          text-decoration: none
          color: white
          &:hover
            box-shadow: 0px 0px 10px 0 #000
        .signin
          background: rgb(220,20,60)
          cursor: pointer
          display: none
          @media (orientation: landscape) and (min-width: 1024px)
            display: inline
      .contact-containter
        position: absolute
        background: rgba(51,51,51,0.5)
        z-index: 9999
        display: flex
        justify-content: center
        height: 100vh
        top: 0
        bottom: 100
        left: 0
        right: 0
        .contact-box
          display: flex
          align-items: left
          flex-direction: column
          justify-content: center
          label
            font-size: 1.6em
            padding: 0.4em
            color: #fff
          input
            padding: 10px
            font-size: 1.2em
            border-radius: 15px
            margin-bottom: 10px
          .button-box
            width: 100%
            text-align: right
            margin-top: 40px
            button
              margin-left: 20px
              font-size: 2em
              background: transparent
              border: none
              color: #fff







</style>
