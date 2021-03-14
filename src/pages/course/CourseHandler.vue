<template lang="pug">
  q-page

    q-card.bg-grey-1
      q-card-section.bg-pattern-comp
        div(v-if="!fetchingData")
          h4.text-weight-bolder.q-mb-sm {{ name }}

          q-chip(square)
            q-avatar(color="grey" text-color="white" icon="mdi-calendar").q-mx-md
            span.text-blue-8 {{ workload }} horas
          q-chip(square)
            q-avatar(color="grey" text-color="white" icon="mdi-pound").q-mx-md
            span.text-blue-8 {{ course }}
          q-chip(square)
            q-avatar(color="grey" text-color="white" icon="mdi-check").q-mx-md
            span.text-blue-8 {{ type }}
          br
          q-btn.q-ma-xs.bg-white(
            push
            v-if="drive_link"
            @click="openUrl(drive_link)"
            icon="mdi-google-drive"
            label="Acesse o drive"
            )
          q-btn.q-ma-xs.bg-white(
            push
            v-if="github_link"
            @click="openUrl(github_link)"
            icon="mdi-github"
            label="Conteúdo no Github"
            )
          q-btn.q-ma-xs.bg-white(
            push
            v-if="id"
            @click="openWhatsapp(whatsapp_link)"
            icon="mdi-whatsapp"
            label="Grupo no Whatsapp"
            )
        div(v-if="fetchingData")
          course-header-skeleton
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
        q-tab( name="lessons" label="Vídeo Aulas")

      q-separator

      q-tab-panels( v-model="tab" animated)
        q-tab-panel( name="overview")
          q-markdown( :src="courseData")
        q-tab-panel( name="lessons")
          course-lesson( :lessons="lessons" :course="course" :loading="fetchingLessons")
</template>

<script>
import { apiUrl } from 'boot/axios';
import CourseHeaderSkeleton from 'components/CourseHeaderSkeleton';
import CourseLesson from './CourseLesson';

export default {
  name: 'CourseHandler',
  components: {
    CourseLesson,
    CourseHeaderSkeleton,
  },
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
      import('!raw-loader!../../content/' + this.section + '/courses/' + this.course + '.md')
        .then((data) => {
          this.courseData = data.default;
        });
      this.fetchData();
      this.clear();
    },
    openUrl(url) {
      window.open(url, '_blank');
    },
    openWhatsapp() {
      const url = `${apiUrl}/redirect/subject/${this.id}/whatsapp/`;
      this.openUrl(url);
    },
    clear() {
      this.id = null;
      this.lessons.length = 0;
    },
    fetchData() {
      this.fetchingData = true;
      this.$api.get(`/v1/subject/${this.course}/code`)
        .then(({ data }) => {
          this.setPayloadData(data);
          this.fetchLessons(data.id);
        })
        .finally(() => {
          this.fetchingData = false;
        });
    },
    fetchLessons(id) {
      this.fetchingLessons = true;
      this.$api.get(`/v1/subject/${id}/lessons`)
        .then(({ data }) => {
          this.lessons = data;
        })
        .finally(() => {
          this.fetchingLessons = false;
        });
    },
    setPayloadData(data) {
      this.github_link = data.github_link;
      this.drive_link = data.drive_link;
      this.whatsapp_link = data.whatsapp_link;
      this.workload = data.workload || '-';
      this.amount_lessons = data.amount_lessons || '-';
      this.name = data.name;
      this.type = data.type || '-';
      this.id = data.id;
    },
  },
  data() {
    return {
      fetchingLessons: false,
      fetchingData: false,
      courseData: '::: :::',
      tab: 'overview',
      drive_link: '',
      github_link: '',
      whatsapp_link: '',
      workload: 0,
      amount_lessons: 0,
      type: '',
      id: null,
      name: '',
      lessons: [],
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
