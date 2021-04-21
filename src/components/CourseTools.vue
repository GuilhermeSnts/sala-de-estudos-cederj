<template lang="pug">
  div
    q-btn(
      v-for="(i, index) in tools.tools"
      :key="index"
      :to="i.route"
      :label="i.title"
      push
      color="blue"
      :icon="i.icon"
    )
</template>

<script>
export default {
  name: 'CourseTools',
  props: {
    tools: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
