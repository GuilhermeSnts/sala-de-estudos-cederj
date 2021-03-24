<template lang="pug">
  q-btn(
    :rounded="!favorited"
    :round="favorited"
    @click="$emit('click')"
    :push="!favorited"
    dark
    :label="favorited ? '': 'Favoritar'"
    :color="favorited ? 'yellow-8': 'white'"
    :text-color="favorited ? 'white': 'grey-8'"
    :icon="favorited ? 'mdi-star': 'mdi-star-outline'"
  )
</template>

<script>
export default {
  name: 'FavoriteSwitch',
  props: {
    favorited: Boolean,
  },
};
</script>

<style>

</style>
