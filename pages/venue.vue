<template>
    <div>
        <section class="pageheading">
            <div class="container">
                <h1>Venue</h1>
            </div>
        </section>
        <section class="venue">
            <a name="Venue"></a>
            <div class="container">
                <div class="photos">
                    <img src="/venue/grounds.jpg" alt="" />
                    <img src="/venue/barn-art.jpg" alt="" />
                    <img src="/venue/barn-night.jpg" alt="" />
                </div>
                <h2>Gilbertsville Farmhouse</h2>
                <h3 class="address">
                    <address>
                        336 Coye Brook Rd <br />
                        South New Berlin, NY 13843
                    </address>
                </h3>
                <div class="directions">
                    <div class="text">
                        <h3>Directions from NYC</h3>
                        <p><em>**For GPS, enter town as SOUTH NEW BERLIN, NY 13843</em></p>
                        <ol>
                            <li>Take George Washington Bridge UPPER LEVEL&nbsp;</li>
                            <li>Take Exit 74 towards Palisades Pkwy North&nbsp;</li>
                            <li>Stay on Palisades Pkwy North for about 34 miles&nbsp;</li>
                            <li>Take the US 6-W Exit, EXIT 18, on the left&nbsp;</li>
                            <li>
                                Enter next roundabout and take 1st exit onto US-6 W/LONG MOUNTAIN PKWY&nbsp;
                            </li>
                            <li>Follow US 6-W for about 7 miles&nbsp;</li>
                            <li>MERGE onto Rte 17 West&nbsp;</li>
                            <li>Stay on Rte 17 West for about 105 miles&nbsp;</li>
                            <li>Take the RT-8/RT-10 exit, EXIT 84, toward DEPOSIT/WALTON</li>
                            <li>Continue to follow NY-8 N for about 30 miles&nbsp;</li>
                            <li>Turn RIGHT onto NY-51 and follow for about 6 miles&nbsp;</li>
                            <li>Turn LEFT at Coye Brook Road (SEE NOTES BELOW)</li>
                        </ol>
                        <p>
                            Our farmhouse is the SECOND property you will see on your right. (It is actually the third
                            property on your right, but the first one is hidden, so you will not notice it when you come
                            up the road)&nbsp;
                        </p>
                        <p>
                            It is a gray house with a white front porch attached to a large white farmhouse and there
                            are dairy barns and 2 silos behind the house.&nbsp;
                        </p>
                        <p><strong>NOTES:&nbsp;</strong></p>
                        <p>
                            While you are driving on NY-51, you will see a wood sign on the road marking the beginning
                            of the Town of Gilbertsville - (very small town). Once you pass that sign, you are about a
                            mile from Coye Brook Road, so pay attention to your left side.&nbsp;
                        </p>
                        <p>
                            It is best to get there during daylight hours, because it will be hard to find for the first
                            time at night.
                        </p>
                    </div>
                    <div class="text">
                        <h3>Directions from Oneonta</h3>
                        <ol>
                            <li>
                                Take I-88 West toward Binghamton. Get off at Exit 13 (NY-205)
                            </li>
                            <li>Turn right onto NY-205. Follow NY-205 for about 2 miles.</li>
                            <li>
                                Turn left onto NY-23. Follow NY-23 for about 10 miles into the Town of Morris, NY.
                            </li>
                            <li>
                                Turn left at light onto NY-51 (Roma&rsquo;s Pizza is on your right and a bank on your
                                left).
                            </li>
                            <li>Follow NY-51 for about 6 miles.</li>
                        </ol>
                        <p>
                            You will notice a rusted antique car in a field close to the edge of road on your left
                            &ndash; start paying attention:
                        </p>
                        <p>Coye Brook Road is coming up soon on your right side.</p>
                        <p>
                            Make a right onto Coye Brook Road. We are the second house you will notice on your right
                            &ndash; we are theonly (former) dairy farm on the road.
                        </p>
                        <p>
                            If you made it to the village of Gilbertsville, then you passed Coye Brook Road by about a
                            half-mile.
                        </p>
                    </div>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.6898371121565!2d-75.32130988453933!3d42.49814617917782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89db957473918693%3A0x996eb4711ba8a962!2sGilbertsville%20Farmhouse%20%26%20NY%20Goat%20Yoga!5e0!3m2!1sen!2sus!4v1572202660007!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                    ></iframe>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Meta } from '~/mixins/Meta.js'

export default {
    name: 'Venue',
    mixins: [Meta],
    data() {
        return {
            title: 'Venue',
            description: ''
        }
    }
}
</script>
