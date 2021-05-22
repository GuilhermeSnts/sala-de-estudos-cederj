<template lang="pug">
  q-avatar
    img( :src="userData.avatarUrl")
</template>

<script>
export default {
  name: 'userOptionsMenu',
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>
