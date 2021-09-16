<template>
  <div class="modules">
    <TitlePage msg="Модули курса" />
    <div class="what__inner what__inner_modules">
      <div
        class="what__block what__block_modules"
        v-for="item in birds"
        :key="item.id"
      >
        <WhatYouKnow :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import TitlePage from "@/components/TitlePage.vue";
import WhatYouKnow from "@/components/WhatYouKnow.vue";
import ImageNine from "../assets/images/content-images/img9.jpg";
import ImageTen from "../assets/images/content-images/img10.jpg";
import ImageEleven from "../assets/images/content-images/img11.jpg";
import ImageTwelve from "../assets/images/content-images/img12.jpg";
import ImageThirteen from "../assets/images/content-images/img13.jpg";
import ImageFourteen from "../assets/images/content-images/img14.jpg";

export default {
  name: "ModulesSection",
  components: {
    TitlePage,
    WhatYouKnow,
  },
  data: function () {
    return {
      birds: [
        {
          name: "Птицы и люди",
          id: 1,
          image: ImageNine,
        },
        {
          name: "Птицы населенных пунктов",
          id: 2,
          image: ImageTen,
        },
        {
          name: "Птицы водоёмов",
          id: 3,
          image: ImageEleven,
        },
        {
          name: "Птицы болот",
          id: 4,
          image: ImageTwelve,
        },
        {
          name: "Птицы леса",
          id: 5,
          image: ImageThirteen,
        },
        { name: "Птицы открытых территорий", id: 6, image: ImageFourteen }
      ],
      ImageNine,
      ImageTen,
      ImageEleven,
      ImageTwelve,
      ImageThirteen,
      ImageFourteen,
    };
  },
};
</script>