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
          @click="showModalLogin = !showModalLogin"
        )

    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    )
      q-toolbar( class="text-white bg-primary absolute-top" )
        q-input(
          class="full-width"
          borderless
          dense
          dark
          placeholder="Pesquisar..."
          v-model="search"
        )
          template( v-slot:before)
            q-icon( name="mdi-magnify")
          template( v-if="search" v-slot:append)
            q-icon( name="cancel" @click.stop="search = ''" class="cursor-pointer")

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
              v-for="link in applySearch(item.items)"
              :key="link.title"
              :title="link.title"
              :icon="link.icon"
              :link="generateCourseLink(link.id)"
            )

    q-page-container
      router-view
    modal-login(v-model="showModalLogin")
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import ModalLogin from 'components/ModalLogin';

export default {
  name: 'MainLayout',
  components: { EssentialLink, ModalLogin },
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
    generateCourseLink(id) {
      return `/course/${this.section}/${id}`;
    },
    applySearch(items) {
      if (this.search.length) {
        return this.filterItems(this.search, items);
      }
      return items;
    },
    filterItems(string, options) {
      const p = Array.from(string.toLowerCase()).reduce(
        (a, v, i) => `${a}[^${string.substr(i)}]*?${v}`,
        '',
      );
      const regex = RegExp(p);
      return options.filter((v) => v.title.toLowerCase().match(regex));
    },
  },
  data() {
    return {
      leftDrawerOpen: false,
      courseLinks: null,
      search: '',
      showModalLogin: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 8px 0px 0px 8px
</style>
