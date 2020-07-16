<template>
  <div
    class="row"
    :style="{
      marginLeft: gutter ? -gutter / 2 + 'px' : 0,
      marginRight: gutter ? -gutter / 2 + 'px' : 0,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wlinRow",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  mounted (e) {
      console.log(this.$children)
      this.$children.forEach(e=>{
          e.gutter = this.gutter
      })
      
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
