<template>
    <div class="wlin-button-group"><slot/></div>
</template>

<script>
    export default {
        name:'wlinButtonGroup',
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

<style lang="css">
  .wlin-button-group{
    display: inline-flex;
    vertical-align: middle;
  }
  .wlin-butto-group>.wlin-button{
    border-radius: 0;
  }
  .wlin-butto-group>.wlin-button:first-child{
    border-top-left-radius: 14px;
    border-bottom-left-radius: 4px;
  }
  .wlin-butto-group>.wlin-button:last-child{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .wlin-butto-group>.wlin-button:not(:first-child){
    margin-left: -1px;
  }
  .wlin-butto-group>.wlin-button:hover{
    z-index: 1;
    border-color: #666;
    position: relative;
  }


</style>