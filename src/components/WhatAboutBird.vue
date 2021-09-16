<template>
  <div class="what">
    <div class="head">
      <TitlePage msg="Что ты узнаешь про сто видов птиц?" />
    </div>
    <div class="what__inner">
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img1.jpg" alt="" />
        <p class="what__text">
          как отличать птиц по внешности (наряды самки и самца, брачные и
          внебрачные наряды, молодые птицы)
        </p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img2.jpg" alt="" />
        <p class="what__text">как отличить от похожих видов</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img3.jpg" alt="" />
        <p class="what__text">в какой сезон их можно встретить</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img4.jpg" alt="" />
        <p class="what__text">как определить вид птицы по голосу</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img5.jpg" alt="" />
        <p class="what__text">где можно встретить конкретные виды</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img8.jpg" alt="" />
        <p class="what__text">особенности питания</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img6.jpg" alt="" />
        <p class="what__text">повадки</p>
      </div>
      <div class="what__block">
        <img class="what__image" src="../assets/images/content-images/img7.jpg" alt="" />
        <p class="what__text">лайфхаки для бердвотчинга</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue";

export default {
  name: "WhatAboutBird",
  components: {
    TitlePage,
  }
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