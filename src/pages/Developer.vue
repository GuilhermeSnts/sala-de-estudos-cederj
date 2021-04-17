<template lang="pug">
  q-page.bg-developer.flex
    .cube(v-for="i in 6" :key="i")
    .q-pa-md.full-width.bg-header-transparent
      h4.text-white.q-mb-sm Repositórios do projeto
      p.text-white Ajude a desenvolver novas ferramentas.
    .row.full-width.q-pa-md.justify-center
      .q-ma-md(v-for="(item, i) in projects" :key="i")
        project-card-info(
          :technologies="item.technologies"
          :repositoryUrl="item.repositoryUrl"
          :repositoryName="item.repositoryName"
          :maintainers="item.maintainers"
          :title="item.title"
          :projectIconUrl="item.projectIconUrl"
        )
</template>

<script>
import ProjectCardInfo from 'components/ProjectCardInfo';
import javascriptIcon from 'assets/javascript-icon.png';
import pythonIcon from 'assets/python-icon.png';

export default {
  name: 'PageIndex',
  components: {
    ProjectCardInfo,
  },
  data() {
    return {
      projects: [
        {
          title: 'Web server',
          technologies: ['Python', 'flask', 'Mysql'],
          maintainers: [
            {
              name: 'Thiago Borges',
              url: 'https://github.com/thcborges',
            },
          ],
          projectIconUrl: pythonIcon,
          repositoryName: 'Acessar o Repositório',
          repositoryUrl: 'https://github.com/compcederj/sala-de-estudos-flask',
        },
        {
          title: 'Aplicativo web',
          technologies: ['Javascript', 'Vue.js', 'Quasar', 'Pug', 'Webpack', 'Sass'],
          maintainers: [
            {
              name: 'Guilherme Santos',
              url: 'https://github.com/guilhermesnts',
            },
          ],
          projectIconUrl: javascriptIcon,
          repositoryName: 'Acessar o Repositório',
          repositoryUrl: 'https://github.com/GuilhermeSnts/sala-de-estudos-cederj',
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-header-transparent {
  background: #00000080;
}
.bg-developer {
  background: #6441A5;
  background: -webkit-linear-gradient(to right, #2a0845, #6441A5);
  background: linear-gradient(to right, #2a0845, #6441A5);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
