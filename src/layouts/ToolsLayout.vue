<template lang="pug">
  q-layout( view="lHh Lpr lFf")
    q-header( elevated)
      q-toolbar( class="text-white bg-primary")
        q-btn(
          flat
          dense
          round
          icon="mdi-arrow-left"
          aria-label="Voltar"
          @click="$router.go(-1)"
        )
        q-toolbar-title Sala de estudos

    q-page-container
      router-view
</template>

<script>

export default {
  name: 'ToolsLayout',
  data() {
    return {};
  },
};
</script>
