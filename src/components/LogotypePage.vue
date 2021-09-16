<template>
  <div class="menu__image">
    <img src="../assets/images/content-images/logo.png" alt="" />
    <div class="menu-hidden">
      <img
        class="menu-hidden__picture menu-hidden__picture_one"
        src="../assets/images/content-images/free-icon-musical-note-727218.png"
        alt=""
      />
      <img
        class="menu-hidden__picture menu-hidden__picture_two"
        src="../assets/images/content-images/free-icon-musical-note-727218.png"
        alt=""
      />
      <img
        class="menu-hidden__picture menu-hidden__picture_three"
        src="../assets/images/content-images/free-icon-musical-note-727218.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu__image {
  position: relative;

  &:hover .menu-hidden {
    opacity: 1;
  }
}
.menu-hidden {
  width: 60px;
  position: absolute;
  top: 0;
  right: -57px;
  opacity: 0;
  transition: all 0.4s linear;
}
.menu-hidden__picture {
  position: absolute;

  &_one {
    left: -8px;
    top: 20px;
  }
  &_two {
    left: 8px;
    top: 0;
  }
  &_three {
    left: 25px;
    top: 11px;
  }
}

@import "../assets/styles/_media.scss";
</style>