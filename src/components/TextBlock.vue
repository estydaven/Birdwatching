<template>
  <div class="text">
    <TextParagraph
      paragraph="Хочешь научиться узнавать 100 обычных видов птиц? Гродненское областное отделение АПБ объявляет набор в
      Школу бердвотчера."
    />
    <TextParagraph
      paragraph="Бердвотчинг, или наблюдение за птицами – хобби, которое становится в Беларуси всё более популярным. Школы
      бердвотчера по методике, разработанной специалистами АПБ, проходили в Минске, Бресте, Гомеле, Витебске,
      Борисове и других городах Беларуси. Теперь и жители Гродно смогут узнать о птицах больше."
    />
    <TextParagraph
      paragraph="Хочешь узнать, какие птицы поют в кустах, болит ли у дятла голова, какая сова носит штаны, а у каких птиц
      есть начесы? Записывайся в Школу бердвотчера в Гродно — и скоро ты заметишь, как много разных птиц вокруг
      тебя."
    />
    <p class="text__info text__info_last">
      Курс состоит из восьми теоретических занятий в помещении и двух субботних
      экскурсий в городе и за городом. Обучение продлится с
      <span class="span-document">27 июля по 28 августа</span>, начало занятий в
      18:00. Занятия будут проходить
      <span class="span-document">дважды в неделю</span> в детской библиотеке
      (г. Гродно, ул. Титова, 12). Все выпускники школы, сдавшие успешно
      финальный тест, <span class="span-document">получат сертификаты</span>.
    </p>
  </div>
</template>

<script>
import TextParagraph from "@/components/TextParagraph.vue";

export default {
  name: "Home",
  components: {
    TextParagraph,
  },
};
</script>


<style lang="scss">
.text__info {
  &_last {
    border-left: 10px solid #dc9d2e;
    padding: 10px;
    font-size: 20px;
    line-height: 30px;
    background: #f9b43b;
    background: -moz-linear-gradient(
      left,
      #f9b43b 0%,
      #ecca8c 50%,
      #e6cfaa 100%
    );
    background: -webkit-linear-gradient(
      left,
      #f9b43b 0%,
      #ecca8c 50%,
      #e6cfaa 100%
    );
    background: linear-gradient(
      to right,
      #f9b43b 0%,
      #ecca8c 50%,
      #e6cfaa 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9b43b', endColorstr='#e6cfaa',GradientType=1 );
  }
}
@import "../assets/styles/_media.scss";
</style>