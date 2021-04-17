<template lang="pug">
  q-page.q-pa-md
    q-markdown( :src="courseHome")
</template>

<script>
export default {
  name: 'PageIndex',
  mounted() {
    this.setCourseData();
  },
  watch: {
    section() {
      this.setCourseData();
    },
  },
  computed: {
    section() {
      return this.$route.params.section;
    },
  },
  methods: {
    async setCourseData() {
      // eslint-disable-next-line prefer-template
      import('!raw-loader!../../content/' + this.section + '/home.md').then((data) => {
        this.courseHome = data.default;
      });
    },
  },
  data() {
    return {
      courseHome: '::: :::',
    };
  },
};
</script>
