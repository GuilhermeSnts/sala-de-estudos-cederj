<template lang="pug">
router-link( style="text-decoration: none; color: inherit;" :to="url")
  q-card( bordered)
    q-card-section( horizontal)
      q-avatar.q-my-auto
        q-icon( :name="icon" class="text-primary" style="font-size: 1.4em;")
      q-card-section(class="text-h6 text-center text-grey-9") {{ title }}
      q-space
      q-avatar.q-my-auto
        q-icon( name="mdi-chevron-right" class="text-primary" style="font-size: 1.4em;")
</template>

<script>
export default {
  name: 'DegreeCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Function],
      required: true,
    },
  },
};
</script>
