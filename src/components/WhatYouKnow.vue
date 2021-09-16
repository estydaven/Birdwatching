<template>
  <div>
    <img class="what__image" :src="item.image" />
    <p class="what__text">{{ item.name }}</p>
  </div>
</template>

<script>

export default {
  name: "WhatYouKnow",
  props: ["item"],
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
.what__inner {
  padding: 50px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;

  &_modules {
    row-gap: 60px;
  }
}
.what__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 calc((100% / 4) - 30px);
  text-align: center;
  border: 2px dashed $main-yellow;
  padding: 15px 10px;
  min-height: 354px;

  &_modules {
    flex: 1 1 calc((100% / 3) - 60px);
  }
}
.what__image {
  margin-bottom: 20px;
  clip-path: polygon(48% 0, 100% 25%, 100% 77%, 52% 100%, 0 76%, 0 27%);
  transition: transform 0.2s linear;

  &:hover {
    transform: rotate(15deg);
  }
}
.what__text {
  font-weight: 600;

  &_modules {
    font-size: 25px;
  }
}
@import "../assets/styles/_media.scss";
</style>