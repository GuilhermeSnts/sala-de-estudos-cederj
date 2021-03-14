<template lang="pug">
  q-layout( view="lHh Lpr lFf")
    q-header( elevated)
      q-toolbar( class="text-primary bg-grey-3")
        q-avatar(square)
          img( src="../assets/saladeestudos-logo.png")

        q-toolbar-title Sala de estudos
        q-space
        q-btn(
          type="a"
          flat
          round
          dense
          icon="mdi-github"
          target="blank"
          :href="githubUrl"
        )

    q-page-container
      router-view
</template>

<script>

export default {
  name: 'HomeLayout',
  data() {
    return {
      githubUrl: 'https://github.com/GuilhermeSnts/sala-de-estudos-cederj',
    };
  },
};
</script>
