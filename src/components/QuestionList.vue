<template>
  <li class="question__item">
    {{ item.name }}
  </li>
</template>

<script>
export default {
  name: "QuestionList",
  props: ["item"],
};
</script>