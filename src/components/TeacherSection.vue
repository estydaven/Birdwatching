<template>
  <div class="teacher__inner">
    <div class="teacher__image">
      <img src="../assets/images/content-images/teacher.jpg" alt="" />
    </div>
    <div class="teacher__text">
      <TitlePage msg="Преподаватель" class="title" />
      <p class="teacher__info">
        Занятия будет проводить профессиональный орнитолог Анастасия
        Кузьменкова.
      </p>
      <p class="teacher__info teacher__info_last">
        Учит различать птиц доходчиво и душевно.
      </p>
      <div class="teacher__picture">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 240.7 8.9"
          style="enable-background: new 0 0 240.7 8.9"
          xml:space="preserve"
        >
          <path
            d="M232.1,0c-3.2-0.1-6.3,1.3-9.3,4.1c-2.7,2.6-5.6,3.9-8.5,3.8c-4.6-0.2-7.8-3.8-7.9-3.8l0,0c-0.1-0.2-3.6-3.9-8.6-4.1
        c-3.2-0.1-6.3,1.3-9.3,4.1c-2.7,2.6-5.6,3.9-8.5,3.8c-4.6-0.2-7.8-3.7-7.9-3.8l0,0C172,4,168.6,0.2,163.5,0
        c-3.2-0.1-6.3,1.3-9.3,4.1c-2.7,2.6-5.6,3.9-8.5,3.8c-4.6-0.2-7.8-3.7-7.9-3.8l0,0c-0.1-0.2-3.6-3.9-8.6-4.1
        c-3.2-0.1-6.3,1.3-9.3,4.1c-2.7,2.6-5.6,3.9-8.5,3.8c-4.6-0.2-7.8-3.7-7.9-3.8l0,0C103.4,4,100,0.2,95,0c-3.2-0.1-6.3,1.3-9.3,4.1
        C83,6.8,80.1,8,77.2,7.9c-4.6-0.2-7.8-3.7-7.9-3.8l0,0C69.2,4,65.7,0.2,60.7,0c-3.2-0.1-6.3,1.3-9.3,4.1c-2.7,2.6-5.6,3.9-8.5,3.8
        c-4.6-0.2-7.8-3.7-7.9-3.8l0,0C34.9,4,31.5,0.2,26.4,0c-3.2-0.1-6.3,1.3-9.3,4.1C14.4,6.8,11.6,8,8.6,7.9C4,7.8,0.8,4.2,0.7,4.1
        L0,4.8C0.1,5,3.5,8.8,8.6,8.9c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.8,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.8,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1C89.1,2.2,92,0.9,94.9,1c4.6,0.2,7.8,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.8,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.8,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.9,3.7,7.9,3.8l0,0
        c0.1,0.2,3.5,3.9,8.6,4.1c0.1,0,0.3,0,0.4,0c3.1,0,6.1-1.4,8.9-4.1c2.7-2.6,5.6-3.9,8.5-3.8c4.6,0.2,7.9,3.8,7.9,3.8l0.7-0.7
        C240.5,4,237.1,0.2,232.1,0z"
          />
        </svg>
      </div>
      <div class="teacher__block">
        <div class="teacher__popup">
          Еще не друг АПБ?
          <a
            href="https://ptushki.org/helpus/friends"
            class="document-link document-link_teacher"
            >Присоединяйся!</a
          >
        </div>
        <img src="../assets/images/content-images/bird5.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue";

export default {
  name: "TeacherSection",
  components: {
    TitlePage,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
.teacher__image {
  width: 50%;

  img {
    display: block;
    width: 100%;
  }
}
.teacher__text {
  position: relative;
  background: $main-gray;
  width: 50%;
  padding: 50px 20px;

  h2 {
    color: $main-yellow;
    margin-bottom: 50px;
  }
}
.teacher__picture {
  overflow: hidden;
  width: 200px;

  svg {
    position: relative;
    fill: $main-yellow;
    left: -10px;
    width: 300px;
    animation: wave 4s linear infinite;
  }
}
.teacher__info {
  color: $white;
  margin-bottom: 20px;

  &_last {
    margin-bottom: 5px;
  }
}
.teacher__block {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 350px;
}
.teacher__popup {
  position: absolute;
  right: 295px;
  top: -170px;
  color: $white;
  width: 199px;
  height: 180px;
  text-align: center;
  padding: 46px 25px 25px 0px;
  font-size: 14px;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 180px;
    height: 180px;
    -webkit-mask: url(../assets/images/svg/thought.svg) no-repeat 100% 100%;
    mask: url(../assets/images/svg/thought.svg) no-repeat 100% 100%;
    -webkit-mask-size: 180px;
    mask-size: 180px;
    background-color: $main-yellow;
    z-index: -1;
  }
}
@keyframes wave {
  0% {
    left: -85px;
  }
  100% {
    left: 0;
  }
}
@import "../assets/styles/_media.scss";
</style>