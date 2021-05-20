<template lang="pug">
  q-dialog(
    position="bottom"
    v-model="dialog"
  )
    q-card
      q-toolbar
        q-space
        q-btn( @click="dialog = false" icon="mdi-close" flat round)
      q-card-section
        .text-center
          q-img( width="60px" src="../assets/saladeestudos-logo.png")
        h5.text-center.q-mt-sm Acesse sua conta
        .text-center.q-mb-md
          | Ao fazer login com seu email google, você terá acesso a ferramentas extras.
        .text-center.q-mb-lg
          q-btn( color="blue-8" push icon="mdi-google" label="entrar com google")
</template>

<script>
export default {
  name: 'ModalLogin',
  props: {
    value: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('change', value);
      },
    },
  },
};
</script>
