<template lang="pug">
  q-layout( view="lHh Lpr lFf")
    q-header( elevated)
      q-toolbar( class="text-white bg-primary")
        q-btn(
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        )
        q-toolbar-title Sala de estudos
        q-space
        q-btn(
          dense
          dark
          flat
          label="login"
          aria-label="Login"
          icon="login"
        )

    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    )
      q-toolbar( class="text-white bg-primary absolute-top" )
        q-icon(name="mdi-magnify")

      q-scroll-area(
        style="height: calc(100% - 50px); margin-top: 50px; border-right: 1px solid #ddd"
      )
        q-list(separator class="menu-list")
          EssentialLink(
            v-bind="homeLink"
          )
          q-expansion-item(
            v-if="courseLinks"
            v-for="(item, index) in courseLinks"
            :key="index"
            :label="item.title"
            :icon="item.icon"
            default-opened
          )
            EssentialLink.q-ml-md(
              v-for="link in item.items"
              :key="link.title"
              v-bind="link"
            )

    q-page-container
      router-view
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  mounted() {
    this.setCourseLinks();
  },
  watch: {
    section() {
      this.setCourseLinks();
    },
  },
  computed: {
    section() {
      return this.$route.params.section;
    },
    homeLink() {
      return {
        title: 'Início',
        icon: 'mdi-home',
        link: `/course/${this.section}`,
      };
    },
  },
  methods: {
    async setCourseLinks() {
      // eslint-disable-next-line prefer-template
      import('../content/' + this.section + '/index.json').then((data) => {
        // eslint-disable-next-line no-console
        this.courseLinks = data.default;
      });
    },
  },
  data() {
    return {
      leftDrawerOpen: false,
      courseLinks: null,
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 8px
</style>
