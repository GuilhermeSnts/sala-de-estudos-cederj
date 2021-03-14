<template lang="pug">
  .course-lesson-skeleton
    .row.items-start.no-wrap.q-mt-sm
      q-skeleton( size="56px" square )
      .col.q-pl-sm
        q-skeleton( type="text" square width="30%" )
        q-skeleton( type="text" square height="12px" )
        q-skeleton( type="text" square height="12px" width="75%" )
</template>

<script>
export default {
  name: 'CourseLessonSkeleton',
};
</script>
