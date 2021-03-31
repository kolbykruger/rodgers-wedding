<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="slider">
          <Flickity :options="flickityOptions">
            <div class="slide-item">
              <picture>
                <img
                  src="@/assets/images/TaraBethPhotography-196-min.jpg"
                  alt=""
                />
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
                <img src="@/assets/images/IMG_0296-min.jpg" alt="" />
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
                <img src="@/assets/images/IMG_0394-min.jpg" alt="" />
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
              <img
                src="@/assets/images/gallery/72_TaraBethPhotography_198_1_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/71_TaraBethPhotography_194_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/70_TaraBethPhotography_181_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/69_TaraBethPhotography_168_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/65_TaraBethPhotography_164_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/67_TaraBethPhotography_101_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/66_TaraBethPhotography_76_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/68_TaraBethPhotography_45_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/64_TaraBethPhotography_22_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img
                src="@/assets/images/gallery/63_TaraBethPhotography_17_min.jpg"
                alt=""
              />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/62_IMG_0419_1_.jpg" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/51_IMG_0394_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/53_IMG_0385_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/54_IMG_0381_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/60_IMG_0377_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/61_IMG_0346_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/59_IMG_0312_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/58_IMG_0061_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/57_IMG_0038_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/52_IMG_3239_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/56_IMG_3237_min.JPEG" alt="" />
            </picture>
          </a>

          <a class="gallery-item">
            <picture>
              <img src="@/assets/images/gallery/55_IMG_3223_min.jpg" alt="" />
            </picture>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        wrapAround: true,
        adaptiveHeight: false,
        //cellAlign: 'center',
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 6000,
        fade: true,
        imagesLoaded: true
      }
    };
  }
};
</script>
