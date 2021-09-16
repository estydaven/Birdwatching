<template>
  <div>
    <p class="text__info">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: "TextParagraph",
  props: {
    paragraph: String,
  },
};
</script>

<style lang="scss">
.text__info {
  margin-bottom: 20px;
  font-weight: 600;
}
@import "../assets/styles/_media.scss";
</style>