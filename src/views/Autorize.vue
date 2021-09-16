<template>
  <div class="sign">
    <SinglePageBanner />
    <div class="container">
      <div class="question">
        <div class="question__link">
          <router-link to="/" class="document-link"
            >Вернуться на главную</router-link
          >
        </div>
        <div class="head">
          <TitlePage msg="Поздравляем!" />
          <p class="question__text">
            Вы успешно записались в Школу Бёрдвотчера!
          </p>
          <p class="question__text">
            Совсем скоро мы вышлем вам на почту письмо со всеми
            <span class="span-document">подробностями курса</span>, а также
            дадим доступ в личный кабинет с материалами курса и тестами. Также
            при успешном прохождении занятий вы получите
            <span class="span-document">сертификат</span>, который появится в
            вашем личном кабинете.
          </p>
          <p class="question__text">
            Предварительное расписание занятий (будет обновлено к старту курса):
          </p>
          <TimetableClasses />
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import SinglePageBanner from "@/components/SinglePageBanner.vue";
import TitlePage from "@/components/TitlePage.vue";
import TimetableClasses from "@/components/TimetableClasses.vue";

export default {
  name: "Autorize",
  components: {
    PageFooter,
    SinglePageBanner,
    TitlePage,
    TimetableClasses,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/reset.css";
@import "../assets/styles/_common.scss";

.sign {
  background: url(../assets/images/content-images/bird9.png) 100% 78% no-repeat,
    url(../assets/images/backgrounds/wood.jpg) 100% 100% no-repeat;
  background-size: 22%, cover;
}
.sign__banner {
  background-image: url(../assets/images/backgrounds/bg2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 100px 0;
}
.question {
  padding-bottom: 50px;

  h2 {
    font-size: 60px;
    padding: 20px 0;
  }
}
.question__link {
  margin-top: 20px;
}
.question__text {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
}

@import "../assets/styles/_media.scss";
</style>