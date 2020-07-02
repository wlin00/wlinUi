<template>
  <button class="wlin-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <!-- button 点击后，注册一个click事件，被父级订阅 -->
    <wlin-icon v-if='loading'  class="icon spinner" name='spinner'></wlin-icon>  
    <wlin-icon v-if="icon && !loading " :name='icon'></wlin-icon>
    <div class="content"><slot/></div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value){
        // 进行接受父组件传来的iconPosition值，并进行校验其合法性
        return value === 'left' || value === 'right' //只可传入这两个字符串作参数
      }
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },


}
</script>

<style lang="scss" scoped>
/* button组件内部样式 */
.wlin-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  //button组件采用flex布局，方便设置icon的方向
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  //对子代icon、slot做位置的样式约定。默认icon放在左边
  > .icon{
    order:1;
    margin-right: .1em;
  }
  > .content{
    order:2
  }
  //用户若设置icon在右侧，则改变order顺序
  &.icon-right{
    > .icon{
      order:2;
      margin-right: 0;
      margin-left: .1em;
    }
    > .content{
      order:1
    }
  }
  //设置子代loading动画
  >.spinner{
    animation: spin 2s linear infinite;
  }
}
//声明按钮加载时的loading旋转动画
@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
  
}
</style>