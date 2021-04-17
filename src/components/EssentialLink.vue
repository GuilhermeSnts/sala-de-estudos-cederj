<template>
  <q-item
    clickable
    exact
    tag="router-link"
    :to="link"
    :inset-level="insetLevel"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      default: '',
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },

    insetLevel: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="sass" scoped>
.my-menu-link
  color: white
  background: #F2C037
</style>
