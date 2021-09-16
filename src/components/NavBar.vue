<template>
  <nav class="menu">
    <LogotypePage />
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#" v-scroll-to="'#about'">О школе</a>
      </li>
      <li class="menu__item">
        <a href="#" v-scroll-to="'#reviews'">Отзывы</a>
      </li>
      <li class="menu__item">
        <a href="#" v-scroll-to="'#sign'">Записаться</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import LogotypePage from "@/components/LogotypePage.vue";

export default {
  name: "Logo",
  components: {
    LogotypePage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.menu {
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
}
.menu__list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
.menu__item {
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }

  a {
    color: #ffffff;
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      border-bottom: 2px solid $main-yellow;
    }
  }
}

@import "../assets/styles/_media.scss";
</style>