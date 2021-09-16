<template>
  <div class="what">
    <div class="head">
      <TitlePage msg="Что ты узнаешь про сто видов птиц?" />
    </div>
    <div class="what__inner">
      <div class="what__block" v-for="item in birds" :key="item.id">
        <WhatYouKnow :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue";
import WhatYouKnow from "@/components/WhatYouKnow.vue";
import ImageOne from "../assets/images/content-images/img1.jpg";
import ImageTwo from "../assets/images/content-images/img2.jpg";
import ImageThree from "../assets/images/content-images/img3.jpg";
import ImageFour from "../assets/images/content-images/img4.jpg";
import ImageFive from "../assets/images/content-images/img5.jpg";
import ImageSix from "../assets/images/content-images/img6.jpg";
import ImageSeven from "../assets/images/content-images/img7.jpg";
import ImageEight from "../assets/images/content-images/img8.jpg";

export default {
  name: "WhatAboutBird",
  components: {
    TitlePage,
    WhatYouKnow,
  },
  data: function () {
    return {
      birds: [
        {
          name: "как отличать птиц по внешности (наряды самки и самца, брачные и внебрачные наряды, молодые птицы)",
          id: 1,
          image: ImageOne,
        },
        {
          name: "как отличить от похожих видов",
          id: 2,
          image: ImageTwo,
        },
        {
          name: "в какой сезон их можно встретить",
          id: 3,
          image: ImageThree,
        },
        {
          name: "как определить вид птицы по голосу",
          id: 4,
          image: ImageFour,
        },
        {
          name: "где можно встретить конкретные виды",
          id: 5,
          image: ImageFive,
        },
        { name: "особенности питания", id: 6, image: ImageSix },
        { name: "повадки", id: 7, image: ImageSeven },
        {
          name: "лайфхаки для бердвотчинга",
          id: 8,
          image: ImageEight,
        },
      ],
      ImageOne,
      ImageTwo,
      ImageThree,
      ImageFour,
      ImageFive,
      ImageSix,
      ImageSeven,
      ImageEight,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
.what__inner {
  padding: 50px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;

  &_modules {
    row-gap: 60px;
  }
}
.what__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 calc((100% / 4) - 30px);
  text-align: center;
  border: 2px dashed $main-yellow;
  padding: 15px 10px;
  min-height: 354px;

  &_modules {
    flex: 1 1 calc((100% / 3) - 60px);
  }
}
.what__image {
  margin-bottom: 20px;
  clip-path: polygon(48% 0, 100% 25%, 100% 77%, 52% 100%, 0 76%, 0 27%);
  transition: transform 0.2s linear;

  &:hover {
    transform: rotate(15deg);
  }
}
.what__text {
  font-weight: 600;

  &_modules {
    font-size: 25px;
  }
}
@import "../assets/styles/_media.scss";
</style>