<template>
    <div class="wlin-button-group"><slot/></div>
</template>

<script>
    export default {
        mounted () {
            for(let item of this.$el.children){
                // if()
                if(item.nodeName.toLowerCase() !== 'button'){
                    console.warn(`buttonGroup组件内部需全部是button标签构成，当前您使用了错误的${item.nodeName.toLowerCase()}标签，请修改！`)
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>
  .wlin-button-group{
      display: inline-flex;
      vertical-align: middle;
      >.wlin-button{
          border-radius: 0;
          &:first-child{
              border-top-left-radius: var(--border-radius);
              border-bottom-left-radius: var(--border-radius);
          }
          &:last-child{
              border-top-right-radius: var(--border-radius);
              border-bottom-right-radius: var(--border-radius);
          }
          &:not(:first-child){
              margin-left: -1px;
          }
          &:hover{
              z-index: 1;
              border-color:var(--border-color-hover);
              position: relative;
          }
      }
  }

</style>