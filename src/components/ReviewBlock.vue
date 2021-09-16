<template>
  <div>
    <img class="reviews__image" :src="item.image" />
    <p>{{ item.name }}</p>
  </div>
</template>

<script>

export default {
  name: "ReviewBlock",
  props: ["item"],
};
</script>