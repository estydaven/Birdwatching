<template>
  <div>
    <p class="banner__text">
      {{ msg1 }}<span class="span-document">{{ msg2 }}</span
      >{{ msg3 }}<span class="span-document">{{ msg4 }}</span
      >{{ msg5 }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TextBanner",
  props: {
    msg1: String,
    msg2: String,
    msg3: String,
    msg4: String,
    msg5: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.banner__text {
  position: relative;
  font-size: 30px;
  color: $white;
  padding-left: 40px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    display: block;
    width: 32px;
    height: 32px;
    background-image: url(../assets/images/content-images/right-quote.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
}
@import "../assets/styles/_media.scss";
</style>