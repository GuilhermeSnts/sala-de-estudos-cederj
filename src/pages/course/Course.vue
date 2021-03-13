<template lang="pug">
  q-page( class="flex flex-center")
    .q-pa-md.full-width
      router-view( :course="course")
</template>

<script>
import DegreeCard from 'components/DegreeCard';

export default {
  name: 'CourseHandler',
  components: {
    DegreeCard,
  },
  computed: {
    course() {
      return this.$route.params.course;
    },
  },
  data() {
    return {};
  },
};
</script>
