<template>
  <button class="wlin-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <!-- button 点击后，注册一个click事件，被父级订阅 -->
    <wlin-icon v-if='loading'  class="icon spinner" name='spinner'></wlin-icon>  
    <wlin-icon v-if="icon && !loading " :name='icon'></wlin-icon>
    <div class="content"><slot/></div>
  </button>
</template>

<script>
import Icon from '../icon/icon'
export default {
  name:'wlinButton',
  components: {
    'wlin-icon':Icon,
  },
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

<style lang="css">
  @keyframes spin{
    0%{
      transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
  .wlin-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 5px;
    border: 1px solid #999;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  .wlin-button:hover(:disabled) {
    /* cursor: no-drop; */
  }
  .wlin-button:hover:not(:disabled){
    border-color: #666;
  } 
  .wlin-button:active:not(:disabled) {
    background: #eee;
  }
  .wlin-button:focus {
    outline: none;
  }
  .wlin-button>.icon{
    order:1;
    margin-right: .1em;
  }
  .wlin-button>.content{
    order:2
  }
  .wlin-button.icon-right>.icon{
    order:2;
    margin-right: 0;
    margin-left: .1em;
  }
  .wlin-button.icon-right>.content{
      order:1
  }
  .wlin-button >.spinner{
    animation: spin 2s linear infinite;
  }
</style>