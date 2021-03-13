<template lang="pug">
  q-page

    q-card.bg-grey-1
      q-card-section.bg-pattern-comp
        h4.text-weight-bolder.q-mb-sm {{ name }}

        q-chip(square)
          q-avatar(color="grey" text-color="white" icon="mdi-calendar").q-mx-md
          span.text-blue-8 {{ workload }} horas
        q-chip(square)
          q-avatar(color="grey" text-color="white" icon="mdi-pound").q-mx-md
          span.text-blue-8 {{ code }}
        q-chip(square)
          q-avatar(color="grey" text-color="white" icon="mdi-check").q-mx-md
          span.text-blue-8 {{ type }}
        br
        q-btn.q-ma-xs.bg-white(
          push
          @click="openUrl(gdriveUrl)"
          icon="mdi-google-drive"
          label="Acesse o drive"
          )
        q-btn.q-ma-xs.bg-white(
          push
          @click="openUrl(githubUrl)"
          icon="mdi-github"
          label="Conteúdo no Github"
          )
        q-btn.q-ma-xs.bg-white(
          push
          @click="openUrl(whatsappUrl)"
          icon="mdi-whatsapp"
          label="Grupo no Whatsapp"
          )
    q-card
      q-tabs(
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="left"
        narrow-indicator
      )
        q-tab( name="overview" label="Visão Geral")
        q-tab( name="lessions" label="Vídeo Aulas")

      q-separator

      q-tab-panels( v-model="tab" animated)
        q-tab-panel( name="overview")
          q-markdown( :src="courseData")
</template>

<script>
import { api, apiUrl } from 'boot/axios';

export default {
  name: 'CourseHandler',
  computed: {
    section() {
      return this.$route.params.section;
    },
    course() {
      return this.$route.params.course || 'home';
    },
  },
  mounted() {
    this.setCourseData();
  },
  watch: {
    section() {
      this.setCourseData();
    },
    course() {
      this.setCourseData();
    },
  },
  methods: {
    async setCourseData() {
      // eslint-disable-next-line prefer-template
      import('!raw-loader!../../content/' + this.section + '/courses/' + this.course + '.md').then((data) => {
        this.courseData = data.default;
      });
      this.fetchData();
    },
    openUrl(url) {
      window.open(url, '_blank');
    },
    openWhatsapp() {
      const url = `${apiUrl}/redirect/subject/${this.id}/whatsapp/`;
      this.openUrl(url);
    },
    fetchData() {
      api.get(`/v1/subjects/${this.course}`).then((data) => {
        // eslint-disable-next-line
        console.log(data);
      });
    },
  },
  data() {
    return {
      courseData: '::: :::',
      tab: 'overview',
      drive_link: '',
      github_link: '',
      whatsapp_link: '',
      workload: '80',
      type: 'OBRIGATÓRIA',
      name: 'Titulo',
      code: 'ead020005',
    };
  },
};
</script>

<style lang="sass" scoped>
.bg-pattern-comp
  background-image: url('../../assets/comp_pattern.png')
  background-repeat: repeat
  background-size: 280px
  background-blend-mode: hard-light
</style>
