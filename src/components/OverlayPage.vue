<template>
  <div class="overlay"></div>
</template>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

@import "../assets/styles/_media.scss";
</style>