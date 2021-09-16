<template>
  <div class="modules">
    <TitlePage msg="Модули курса" />
    <div class="what__inner what__inner_modules">
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img9.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы и люди</p>
      </div>
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img10.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы населенных пунктов</p>
      </div>
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img11.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы водоёмов</p>
      </div>
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img12.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы болот</p>
      </div>
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img13.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы леса</p>
      </div>
      <div class="what__block what__block_modules">
        <img class="what__image" src="../assets/images/content-images/img14.jpg" alt="" />
        <p class="what__text what__text_modules">Птицы открытых территорий</p>
      </div>
    </div>
  </div>
</template>
<script>
import TitlePage from "@/components/TitlePage.vue";

export default {
  name: "ModulesSection",
  components: {
    TitlePage,
  }
};
</script>