<template lang="html">
  <section class='faqs'>
    <div class="container">
      <h1>FAQs</h1>
      <p class='intro'>These are the answers to questions we frequently get over the first time caller.</p>
      <div class="faqs-container">

        <template v-for="faq of faqs">

            <div class="faq-item">
              <h4><span class="stronger">Q: </span>{{faq.question}}</h4>
              <p><span class="stronger">A: </span> {{faq.answer}}</p>
            </div>

        </template>

        <p class='footnote'>If your question is not anwsered here. Please don't hesitate to call 407-883-2117</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'faqs',
  data() {
    return {
      faqs: [
      {
        question: 'Are the Repair Technicians at PHONE REPAIR able to repair a water damaged phone?',
        answer: "There is a high success rate in PHONE REPAIR technicians being able to restore electronic devices that have suffered water damage.  A water damaged phone should be brought in to be repaired as soon as possible after the damage occurs."
      },
      {
        question: 'If I really need my item repaired as quickly as possible, how can I be sure your mail-in services are fast enough?',
        answer: "Typically most mail-in repairs are completed within 48 hours.  If you need your item sent back in a faster manner than regular mail services, let our staff know and we will be able to send your item back to you by priority shipping, charges will apply accordingly."
      },
      {
        question: 'Am I expected to pay for the repair before or is payment due upon receipt?',
        answer: "Since every kind of repair we perform is different, payment is due upon receipt."
      },
      {
        question: 'Can PHONE REPAIR backup data on my device?',
        answer: "Yes!  If you want to backup data stored on your device, you have come to the right place!  IPHONE REPAIR technicians are fully capable of backing up date to ensure you don’t lose any of it."
      },
      {
        question: 'Can PHONE REPAIR technicians only repair cell phones or can they repair other electronic devices as well?',
        answer: "At PHONE REPAIR, we repair cell phones on a daily basis. However, we are fully able to handle all kinds of electronic repairs including tablets, laptops, desktop computers, and gaming systems.  We specialize in iPad, iPod, iPhone repair, Xbox & PlayStation Repairs."
      },
      {
        question: 'How much am I expected to pay for shipping when I choose to mail-in my device?',
        answer: "Customers are abel to pick the shipping method of their choice.  Customers are encouraged to use a shipping method that include both insurance and a tracking number.  If customers want their electronic device rushed back to they they have the option to pay the additional amount."
      },
      {
        question: ' If I currently have warranty protection on my device, will any repairs you do make my warranty void?',
        answer: "When your item becomes damaged, your warranty protection becomes void."
      },
      {
        question: 'My toddler dropped my phone in the toilet.  What do I do?',
        answer: "Remove the battery if possible, or turn off the phone if not already off immediately.  Bring your liquid damaged item to PHONE REPAIR and we will gladly take over from there!"
      },
      {
        question: 'What does the repair price estimate include?  Does it include just the labor?',
        answer: "The repair price estimate we give you includes parts and labor."
      },
      {
        question: 'Will my repair cause data loss on my device?',
        answer: "Sometimes certain damage your electronic device receives may cause data loss, but nothing that IPHONE REPAIR technicians do will cause loss of data."
      },

      ]

    }
  }
}
</script>

<style lang="sass" scoped>

  .faqs
    padding: 40px 0
    position: relative
    overflow: hidden
    background: rgba(0,0,0, 0.4)
    color: white

    &:after
      content: ' '
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      opacity: 0.5
      background: url('../../assets/faqs-bg.jpg')
      background-position: center
      background-size: cover
    .container
      max-width: 1200px
      // height: 50vh
      margin: 0 auto
      // color: white
      .intro
        line-height: 1.6em
        font-size: 1.1em
        padding: 40px 40px
        &:first-letter
          font-weight: bold
          font-size: 4.5em
          color: #bf0311

      .footnote
        line-height: 1.6em
        padding: 20px 60px
        text-align: center
        font-size: 1.4em
        // color: rgba(167, 25, 48, 1)
      h1
        font-weight: 700
        font-size: 2.2em
        text-align: center
        text-transform: capitalize
        margin: 24px 0
        padding-bottom: 20px
        // padding-bottom: 6px

      .faqs-container

        .faq-item
          width: 80%
          margin: 0 auto
          padding-top: 20px
          padding-bottom: 20px
          border-bottom: 1px dotted black
          &:last-child
            border-bottom: none
          h4
            font-size: 1.7em
            margin: 20px 0
            font-weight: 400
            // text-align: center
          p
            line-height: 1.4em
            font-size: 1.1em
            text-shadow: 1px 1px #000

</style>
