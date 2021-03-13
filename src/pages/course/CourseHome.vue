<template lang="pug">
  .full-width
    q-markdown( :src="courseHome")
</template>

<script>
export default {
  name: 'PageIndex',
  props: {
    course: String,
  },
  mounted() {
    this.setCourseData();
  },
  methods: {
    async setCourseData() {
      // eslint-disable-next-line prefer-template
      import('!raw-loader!../../content/' + this.course + '/home.md').then((data) => {
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
