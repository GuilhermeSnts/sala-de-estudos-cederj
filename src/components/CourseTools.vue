<template lang="pug">
  div
    q-card.tool-card(
        v-for="(i, index) in tools.tools"
        :key="index"
      )
      q-card-section
        .text-h5 {{ i.title }}
        .caption(v-html="i.text")
      q-card-actions
        q-btn(
          :to="i.route"
          :label="i.buttonText"
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

<style lang="sass" scoped>
.tool-card
  width: 100%
  max-width: 300px
</style>
