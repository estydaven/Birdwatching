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
          <h2>Заявка на участие в Школе бёрдвотчера</h2>
          <p class="question__text">
            Точное время и все организационные детали будут предоставлены
            дополнительно.
          </p>
          <p class="question__text">
            ВАЖНО! Участвовать в Школе могут только сябры общественной
            организации "Ахова птушак Бацькаўшчыны". Если ты ещё не сябра АПБ,
            то заполняй
            <a href="https://ptushki.org/helpus/friends" class="document-link"
              >анкету</a
            >
            и присоединяйся.
          </p>
        </div>
        <FormQuestion />
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import SinglePageBanner from "@/components/SinglePageBanner.vue";
import FormQuestion from "@/components/FormQuestion.vue";

export default {
  name: "Sign",
  components: {
    PageFooter,
    SinglePageBanner,
    FormQuestion,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/reset.css";
@import "../assets/styles/_common.scss";

.sign {
  background: url(../assets/images/content-images/bird8.png) 100% 90% no-repeat,
    url(../assets/images/backgrounds/wood.jpg) 100% 100% no-repeat;
  background-size: 20%, cover;
}
.sign__banner {
  background-image: url(../assets/images/backgrounds/bg1.jpg);
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