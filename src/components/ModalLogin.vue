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
          g-signin-button(
            :params="googleSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError"
          )
            q-btn(push label="Login com Google" icon="mdi-google" color="blue-8")
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ModalLogin',
  props: {
    value: {
      required: true,
      type: Boolean,
    },
  },
  data: () => ({
    googleSignInParams: {
      // this code will be replaced after the test has been finished
      client_id: '200741240586-4n0ud54mk3urkjbksgubr6a4h6s33apn.apps.googleusercontent.com',
    },
  }),
  methods: {
    ...mapMutations('userModule', ['setUserData']),
    onSignInSuccess(data) {
      this.setUserData({
        fullName: data.Et.Ue,
        email: data.Et.ou,
        firstName: data.Et.wV,
        lastName: data.Et.rT,
        avatarUrl: data.Et.uK,
        accessToken: data.qc.access_token,
        isLoggedIn: true,
      });
      sessionStorage.setItem('google-token', data.qc.access_token);
      console.log(data);
    },
    onSignInError(e) {
      alert('Ocorreu um erro ao fazer o login');
      console.log(e);
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
