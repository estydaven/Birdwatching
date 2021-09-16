<template>
  <div class="about__wrapper">
    <div class="about__image about__image_how">
      <img src="../assets/images/content-images/how-image.jpg" alt="" />
    </div>
    <div class="about__block about__block_how" id="sign">
      <div class="head head_about">
        <TitlePage msg="Как попасть в школу" />
      </div>
      <div class="text text_how">
        <p class="text__info">
          Быть членом АПБ. Если ты ещё не член АПБ, заполняй
          <a href="https://ptushki.org/helpus/friends" class="document-link"
            >анкету</a
          >
          и присоединяйся к организации.
        </p>
        <p class="text__info">
          Запись в Школу бердвотчера через
          <router-link to="/sign" class="document-link">форму</router-link>.
          Учитывай, что количество мест ограничено.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue";

export default {
  name: "HowSignSchool",
  components: {
    TitlePage,
  },
};
</script>