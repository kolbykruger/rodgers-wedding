<template>
    <div>
        <section class="pageheading">
            <div class="container">
                <h1>Itinerary</h1>
            </div>
        </section>

        <section class="content">
            <div class="container">
                <p>
                    <img src="/itineraries/itinerary.jpg" alt="" width="1500" height="2100" />
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import { Meta } from '~/mixins/Meta.js'

export default {
    name: 'Itinerary',
    mixins: [Meta],
    data() {
        return {
            title: 'Itinerary',
            description: ''
        }
    }
}
</script>
