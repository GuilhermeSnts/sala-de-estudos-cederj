<template lang="pug">
  .course-header-skeleton
    .row.q-my-md
      .col-4
        q-skeleton( type="rect" height="60px")
    .row.q-my-sm
      span.q-mr-sm
        q-skeleton( type="QBadge")
      span.q-mr-sm
        q-skeleton( type="QBadge")
      span.q-mr-sm
        q-skeleton( type="QBadge")
    .row.q-my-sm
      span
        q-skeleton( type="QBtn")
</template>

<script>
export default {
  name: 'CourseHeaderSkeleton',
};
</script>
