<template>
  <div>
    <HeaderMainPage />
    <section class="about" id="about">
      <div class="container">
        <AboutSchoolSection />
        <WhatAboutBird />
      </div>
    </section>
    <section class="banner banner_one">
      <OverlayPage />
      <div class="container">
        <TextBanner
          msg1="Бердвотчинг (англ. birdwatching) — одно из самых популярных увлечений в мире, связанных с дикой природой. Открывать для себя и для страны "
          msg2="новые виды птиц,"
          msg3=" следить за их поведением и получать удовольствие, наблюдая за ними – интересно и азартно, и делать это можно "
          msg4="даже в городах!"
        />
      </div>
    </section>
    <section class="teacher">
      <TeacherSection />
    </section>
    <section class="banner banner_two">
      <OverlayPage />
      <div class="container">
        <TextBanner
          msg1="На финальной экскурсии Школы бёрдвотчера в Витебске участники смогли наблюдать "
          msg2="более 30 видов птиц,"
          msg3=" среди которых были черный коршун, пустельга, болотный лунь, дубонос, полевой жаворонок, чибис. Кого "
          msg4="увидишь ты"
          msg5="? Записывайся, проверишь сам!"
        />
      </div>
    </section>
    <section class="reviews" id="reviews">
      <div class="container">
        <TitlePage msg="Отзывы выпускников прошлого потока Школы" />
        <ReviewsSection />
      </div>
    </section>
    <section class="how">
      <div class="container">
        <ModulesCourse />
        <HowSignSchool />
      </div>
    </section>
    <section class="banner banner_three">
      <OverlayPage />
      <div class="container">
        <TextBanner
          msg1="Школа начинающего бёрдвотчера рассчитана на слушателя, который "
          msg2="заинтересован в изучении"
          msg3=" птиц и дикой природы, но пока не обладает большими знаниями и опытом в этом деле. У нас "
          msg4="обучаются люди разных возрастов"
          msg5=", профессий и образования."
        />
      </div>
    </section>
    <PageFooter />
  </div>
</template>

<script>
import HeaderMainPage from "@/components/HeaderMainPage.vue";
import PageFooter from "@/components/PageFooter.vue";
import OverlayPage from "@/components/OverlayPage.vue";
import AboutSchoolSection from "@/components/AboutSchoolSection.vue";
import TitlePage from "@/components/TitlePage.vue";
import TextBanner from "@/components/TextBanner.vue";
import WhatAboutBird from "@/components/WhatAboutBird.vue";
import TeacherSection from "@/components/TeacherSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import ModulesCourse from "@/components/ModulesCourse.vue";
import HowSignSchool from "@/components/HowSignSchool.vue";

export default {
  name: "Home",
  components: {
    HeaderMainPage,
    PageFooter,
    OverlayPage,
    AboutSchoolSection,
    TitlePage,
    TextBanner,
    WhatAboutBird,
    TeacherSection,
    ReviewsSection,
    ModulesCourse,
    HowSignSchool,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
.about {
  background: url(../assets/images/content-images/bird1.png) -28% -17% no-repeat,
    url(../assets/images/content-images/bird2.png) 102% 100% no-repeat,
    url(../assets/images/backgrounds/wood.jpg) 100% 100% no-repeat;
  background-size: 47%, 16%, cover;
}
.banner {
  position: relative;
  padding: 120px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;

  &_one {
    background-image: url(../assets/images/backgrounds/bg4.jpg);
  }
  &_two {
    background-image: url(../assets/images/backgrounds/bg6.jpg);
  }
  &_three {
    background-image: url(../assets/images/backgrounds/bg5.jpg);
  }
}
.teacher__inner {
  display: flex;
}
.reviews {
  padding: 50px 0;
  background: url(../assets/images/content-images/bird6.png) -3% -4% no-repeat,
    url(../assets/images/content-images/bird7.png) 102% 100% no-repeat;
  background-size: 19%, 16%;
  background-color: $main-gray;

  h2 {
    color: $main-yellow;
  }
}
.how {
  padding: 50px 0 150px 0;
  background: url(../assets/images/content-images/bird3.png) 0% 0% no-repeat,
    url(../assets/images/content-images/bird4.png) 100% 100% no-repeat,
    url(../assets/images/backgrounds/wood.jpg) 100% 100% no-repeat;
  background-size: 32%, 15%, cover;
}
@import "../assets/styles/_media.scss";
</style>