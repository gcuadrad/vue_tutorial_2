<template lang="html">
  <h2>This is the {{text}} page id: {{id_top}}</h2>
</template>

<script>
export default {
  name: 'top',
  mounted(){
    this.id_top = this.$route.params.id
  },
  data() {
    return {
      text: 'Top',
      id_top: null
    }
  }
}
</script>

<style lang="css">
</style>
