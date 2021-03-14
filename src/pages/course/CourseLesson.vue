<template lang="pug">
  q-list
    q-item(
      v-for="(lesson, index) in lessons"
      :key="index"
      clickable
      v-ripple
      @click="openVideoUrl(lesson.lesson_index)"
    )
      q-item-section( thumbnail)
        img( :src="lesson.thumbnail")
      q-item-section
        q-item-label {{ lesson.lesson_index }}
        q-item-label( caption) {{ lesson.title }}
</template>

<script>
export default {
  name: 'CourseLesson',
  props: {
    lessons: {
      type: Array,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  methods: {
    openVideoUrl(lesson) {
      const lessonIndex = lesson.replace(/ /g, '_');
      const url = `http://videoaula.rnp.br/v.php?f=/cederj/sistemas_comp/${this.course}/${lessonIndex}/${lessonIndex}.xml`;
      window.open(url, '_blank');
    },
  },
};
</script>
