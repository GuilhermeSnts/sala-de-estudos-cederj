<template lang="pug">
  q-card( style="max-width: 300px")
    q-card-section
      .row.justify-center
        q-avatar( square)
          img( :src="projectIconUrl" size="100px")
      .text-h6.text-center {{ title }}
      .q-mt-md.text-subtitle2 Tecnologias usadas:
      q-chip(
        square
        color="green"
        text-color="white"
        v-for="item in technologies"
        :key="item"
      ) {{ item }}
      q-btn.q-my-md(
        icon="mdi-github"
        push class="bg-white"
        type="a"
        target="_blank"
        :href="repositoryUrl"
      ) {{ repositoryName }}
      .text-subtitle2 Colaboradores:
      q-btn.full-width(
        icon="mdi-open-in-new"
        target="_blank"
        type="a"
        flat
        v-for="(item, i) in maintainers"
        :key="i"
        :href="item.url"
        color="primary"
        :label="item.name"
      )

</template>

<script>
export default {
  name: 'ProjectCardInfo',
  props: {
    technologies: Array,
    repositoryUrl: String,
    repositoryName: String,
    maintainers: Array,
    title: String,
    projectIconUrl: [String, Function],
  },
};
</script>
