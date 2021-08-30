<template>
    <div>
        <section class="pageheading">
            <div class="container">
                <h1>Message from us</h1>
            </div>
        </section>

        <section class="content">
            <div class="container">
                <br />
                <p>To our friends and family,</p>
                <p>
                    We are so excited to finally be getting married and to have the wedding we have been dreaming of and
                    planning for YEARS now! Who knew that our very long two year engagement would turn into 3 years! We
                    know how tough the beginning of this year was but it is finally feeling like everything is starting
                    to settle back into place. We are so grateful that we were easily able to reschedule this
                    celebration to this year, but as you know our wedding date now falls on a Tuesday. We know that this
                    makes it more difficult for everyone. Not only because we work, (yuck) but also because of travel.
                    We understands that some of you will not be able to make it because of this. We also understand that
                    we are still in a pandemic and there are uncertainties regarding COVID that may also make it more
                    difficult to attend. We love you all so much and would be thrilled to have you be with us on our
                    special day, but we are completely understanding of the realities of this very crazy year(s).
                </p>
                <p>
                    Even though COVID vaccines are not mandated, we are asking for everyone to take the proper safety
                    measures prior to coming. If you are vaxxed then you are ready to party! (Unless of course you are
                    feeling sick.) If you are not vaccinated, we are asking that you get tested before coming to keep
                    everyone as safe and as healthy as possible!
                </p>
                <br />
                <p>We love you all so much and can’t wait to celebrate with you all so soon!!</p>
                <br /><br />
                <p>Love,<br />Regina and Jess (Mini) xoxo</p>
            </div>
        </section>
    </div>
</template>

<script>
import { Meta } from '~/mixins/Meta.js'

export default {
    name: 'MessageFromUs',
    mixins: [Meta],
    data() {
        return {
            title: 'Message From Us',
            description: ''
        }
    }
}
</script>

<style lang="scss" scoped></style>
