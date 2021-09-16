<template>
  <div id="applicate">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/SinglelPageLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>


<style lang="scss">
@import 'assets/styles/fonts.css';
@import 'assets/styles/reset.css';
@import 'assets/styles/_common.scss';
@import 'assets/styles/_variables.scss';
@import 'assets/styles/_media.scss';
</style>
