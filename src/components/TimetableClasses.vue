<template>
  <div>
    <ul class="question__list" v-for="item in classes" :key="item.id">
      <QuestionList :item="item" />
    </ul>
  </div>
</template>

<script>
import QuestionList from "@/components/QuestionList.vue";

export default {
  name: "TimetableClasses",
  components: {
    QuestionList,
  },
  data: function () {
    return {
      classes: [
        { name: "27.07 - 28.07 - теория", id: 1 },
        { name: "03.08 - 04.08 теория", id: 2 },
        { name: "13.08 - теория", id: 3 },
        { name: "14.08 - практика (в городе)", id: 4 },
        { name: "17.08 - 18.08 теория", id: 5 },
        { name: "27.08 - теория", id: 6 },
        { name: "28.08 - практика (за городом)", id: 7 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.question__list {
  font-size: 22px;
  margin-top: 30px;
}
.question__item {
  position: relative;
  margin-bottom: 20px;
  padding-left: 40px;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    left: 0;
    width: 30px;
    height: 30px;
    -webkit-mask: url(../assets/images/svg/mark.svg) no-repeat 100% 100%;
    mask: url(../assets/images/svg/mark.svg) no-repeat 100% 100%;
    -webkit-mask-size: 30px;
    mask-size: 30px;
    background-color: $main-yellow;
    z-index: -1;
  }
}
@import "../assets/styles/_media.scss";
</style>