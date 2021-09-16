<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
.head_about {
  h2 {
    text-align: left;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 15px;
      left: 0;
      width: 160px;
      height: 2px;
      background-color: $main-yellow;
      transition: 0.3s linear;
    }

    &:hover::after {
      width: 300px;
    }
  }
}
@import "../assets/styles/_media.scss";
</style>