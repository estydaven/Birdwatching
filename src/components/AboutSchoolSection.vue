<template>
  <div class="about__wrapper">
    <div class="about__block">
      <div class="head head_about">
        <TitlePage msg="О школе" />
      </div>
      <TextBlock />
    </div>
    <div class="about__image">
      <img src="../assets/images/content-images/bg2.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue";
import TextBlock from "@/components/TextBlock.vue";

export default {
  name: "Home",
  components: {
    TitlePage,
    TextBlock,
  },
};
</script>

<style lang="scss">
.about__wrapper {
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.about__block {
  width: calc(100% - 450px);
  margin-right: 50px;

  &_how {
    margin-right: 0;
  }
}
.about__image {
  img {
    clip-path: polygon(48% 0, 100% 25%, 100% 77%, 52% 100%, 0 76%, 0 27%);
    transition: transform 0.2s linear;

    &:hover {
      transform: rotate(15deg);
    }
  }

  &_how {
    margin-right: 30px;
  }
}
@import "../assets/styles/_media.scss";
</style>