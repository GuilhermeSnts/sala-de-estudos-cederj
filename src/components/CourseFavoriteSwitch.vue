<template lang="pug">
  favorite-switch(
    @click="setFavorited()"
    :favorited="favorited"
  )
</template>

<script>
import FavoriteSwitch from 'components/FavoriteSwitch';

export default {
  name: 'CourseFavoriteSwitch',
  components: {
    FavoriteSwitch,
  },
  created() {
    this.loadFavorited();
  },
  props: {
    code: String,
  },
  methods: {
    loadFavorited() {
      this.favorited = localStorage.getItem(`favorited-${this.code}`) === 'true';
    },
    setFavorited() {
      const favorited = !this.favorited;
      localStorage.setItem(`favorited-${this.code}`, favorited);
      this.favorited = favorited;
    },
  },
  data() {
    return {
      favorited: false,
    };
  },
};
</script>

<style>

</style>
