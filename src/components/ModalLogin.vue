<template lang="pug">
  q-dialog(
    position="bottom"
    v-model="dialog"
  )
    q-card
      q-card-section
        h1 Login
        q-btn( label="login com google")
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
