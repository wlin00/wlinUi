<template>
  <div class="wlin-collapse">
   <slot>
   </slot>
  </div>
</template>

<script>
  export default {
    name: 'wlinCollapse',
    data() {
      return {
      }
    },
    methods: {
    },

    
  }
</script>

<style lang="scss" scoped>
.wlin-collapse{
  width: 100%;
  user-select: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  border-bottom: none;
}
</style>