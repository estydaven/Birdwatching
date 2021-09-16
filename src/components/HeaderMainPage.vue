<template>
  <header class="header">
    <OverlayPage />
    <div class="container">
      <NavBar />
    </div>
    <div class="title">
      <h1 class="main-head">Школа бердвотчера</h1>
      <p class="subtitle">Узнай 100 видов птиц!</p>
    </div>
  </header>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import OverlayPage from "@/components/OverlayPage.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    OverlayPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.header {
  position: relative;
  background-image: url(../assets/images/backgrounds/school.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  z-index: 1;
}
.title {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Pacifico";
  color: $white;
}
.main-head {
  font-size: 80px;
  letter-spacing: 2px;
  padding-bottom: 30px;
}
.subtitle {
  font-size: 40px;
}

@import "../assets/styles/_media.scss";
</style>