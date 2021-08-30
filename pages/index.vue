<template>
    <div>
        <section class="hero">
            <div class="container">
                <div class="slider">
                    <Flickity ref="flickity" :options="flickityOptions">
                        <div class="slide-item">
                            <picture>
                                <img src="/carousel/TaraBethPhotography-196-min.jpg" alt="" />
                            </picture>
                            <div class="text text-center">
                                <div class="date">Oct 19, 2021</div>
                                <div class="location">
                                    Gilbertsville Farmhouse <br />
                                    South New Berlin, NY
                                </div>
                                <!--<div class="hashtag">#hastag</div>-->
                            </div>
                        </div>
                        <div class="slide-item">
                            <picture>
                                <img src="/carousel/IMG_0296-min.jpg" alt="" />
                            </picture>
                            <div class="text text-left">
                                <div class="date">Oct 19, 2021</div>
                                <div class="location">
                                    Gilbertsville Farmhouse <br />
                                    South New Berlin, NY
                                </div>
                                <!--<div class="hashtag">#hastag</div>-->
                            </div>
                        </div>
                        <div class="slide-item">
                            <picture>
                                <img src="/carousel/IMG_0394-min.jpg" alt="" />
                            </picture>
                            <div class="text text-right">
                                <div class="date">Oct 19, 2021</div>
                                <div class="location">
                                    Gilbertsville Farmhouse <br />
                                    South New Berlin, NY
                                </div>
                                <!--<div class="hashtag">#hastag</div>-->
                            </div>
                        </div>
                    </Flickity>
                </div>
            </div>
        </section>

        <section class="photos">
            <a name="Photos"></a>
            <div class="container">
                <div class="gallery">
                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/72_TaraBethPhotography_198_1_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/71_TaraBethPhotography_194_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/70_TaraBethPhotography_181_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/69_TaraBethPhotography_168_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/65_TaraBethPhotography_164_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/67_TaraBethPhotography_101_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/66_TaraBethPhotography_76_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/68_TaraBethPhotography_45_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/64_TaraBethPhotography_22_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/63_TaraBethPhotography_17_min.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/62_IMG_0419_1_.jpg" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/51_IMG_0394_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/53_IMG_0385_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/54_IMG_0381_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/60_IMG_0377_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/61_IMG_0346_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/59_IMG_0312_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/58_IMG_0061_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/57_IMG_0038_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/52_IMG_3239_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/56_IMG_3237_min.JPEG" alt="" />
                        </picture>
                    </a>

                    <a class="gallery-item">
                        <picture>
                            <img src="/gallery/55_IMG_3223_min.JPG" alt="" />
                        </picture>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Meta } from '~/mixins/Meta.js'

export default {
    name: 'Home',
    data() {
        return {
            flickityOptions: {
                cellSelector: '.slide-item',
                wrapAround: true,
                adaptiveHeight: false,
                //cellAlign: 'center',
                prevNextButtons: false,
                pageDots: false,
                autoPlay: 6000,
                fade: true,
                imagesLoaded: true
            },
            title: 'Exclusive',
            description: ''
        }
    },
    mixins: [Meta]
}
</script>
