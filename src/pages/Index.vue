<template lang="pug">
  q-page( class="flex flex-center")
    q-parallax(
      contain
      src="https://images.unsplash.com/photo-1530984794059-26f732e6b7ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
    )
      h4.text-center.text-white Um ambiente feito por estudantes para estudantes.
      .row
        q-btn(icon="mdi-github" push class="bg-white") Colabore com o projeto

    .bg-grey-4.q-pa-md.full-width
      h4.q-mb-sm Qual graduação está cursando?
      p os cursos estão sendo inserido aos poucos.
        span  Caso o seu ainda não esteja disponível,
        span  você pode nos ajudar a adicioná-lo mais rapidamente.
      .row
        .q-pa-sm.col-sm-6.col-xs-12.col-md-4.col-lg-2(
          v-for="(item, i) in items"
          :key="i"
        )
          degree-card(
            :title="item.title"
            :url="item.url"
            :icon="item.icon"
          )

    .bg-grey-2.q-pa-md.full-width
      q-markdown( :src="comoEstudar")
</template>

<script>
import DegreeCard from 'components/DegreeCard';
import comoEstudar from '../content/como-estudar.md';

export default {
  name: 'PageIndex',
  components: {
    DegreeCard,
  },
  data() {
    return {
      comoEstudar,
      items: [
        {
          title: 'Computação',
          icon: 'mdi-desktop-classic',
          url: '/course/comp',
        },
      ],
    };
  },
};
</script>
