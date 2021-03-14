<template lang="pug">
div
  div(v-if="!loading")
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
  div(v-if="loading")
    course-lesson-skeleton(v-for="i in 3" :key="i" )
  div(v-if="!loading && lessons.length === 0")
    .row.justify-center
      q-icon( style="font-size: 5em;" class="text-grey" name="mdi-movie-open-off")
    p.q-mt-md.text-grey.text-center(style="font-size: 1.2em;") Não há aulas disponíveis
</template>

<script>
import CourseLessonSkeleton from 'components/CourseLessonSkeleton';

export default {
  name: 'CourseLesson',
  components: {
    CourseLessonSkeleton,
  },
  props: {
    lessons: {
      type: Array,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
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
