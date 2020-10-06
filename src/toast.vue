<template>
    <div class="wlin-toast">
        <slot></slot>

        <!-- toast关闭按钮, 点击后销毁组件，并触发用户回调（如果有的话) -->
        <span class="wlin-toast__close" v-if="showCloseBtn" @click="handleClickClose" >{{ closeBtnOptions.text }}</span>
    </div>
</template>

<script>
    export default {
      name: "wlinToast",
      props: {
          // toast是否自动关闭， 默认3秒自动关闭
          autoClose: {
              type: Boolean,
              default: true
          },
          autoCloseDelay: {
              type: Number,
              default: 3000
          },

          // 是否展示关闭按钮
          showCloseBtn: {
              type: Boolean,
              default: true
          },

          // 关闭按钮相关属性：接收一个对象， 里面包含关闭按钮的文字内容、 关闭后的回调
          closeBtnOptions:{
              type: Object,
              // 接收对象时， defalut写成函数来返回一个对象， 避免同一片内存的对象互相修改（避免浅拷贝问题）
              default () {
                  return {
                      text: '关闭', // 关闭按钮文字
                      handleClose: undefined // 关闭按钮的回调函数
                  }
              }
          }
      },
      data() {
          return {
              key: ''
          }
      },
      methods: {
          // 组件销毁函数
          close() {
            this.$el.remove() // 将组件从dom中移除
            this.$destroy() // 取消组件相关事件绑定  
          },

          // 点击关闭按钮
          handleClickClose() {
            // 销毁组件
            this.close()
            
            // 执行可能的回调 
            this.closeBtnOptions.handleClose && 
            typeof(this.closeBtnOptions.handleClose) === 'function' &&
            this.closeBtnOptions.handleClose()
            
          } 
      },
      mounted () {
        let { autoClose, autoCloseDelay } = this
        if (autoClose) {
            setTimeout(() => {
              this.close()
            }, autoCloseDelay)
        }
      },
        
    }
</script>

<style lang="scss" scoped>

$font-size: 14px;
$toast-height: 48px;
$toast-bg: rgba(0, 0, 0, .75);


.wlin-toast{
 
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.8;
  height: $toast-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: white;
  padding: 0 15px;
  transition: all 0.5s linear;

  &__close{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-left: 15px;
      margin-left: 15px;
      border-left: 1px solid aliceblue;
      cursor: pointer;
      &:hover{
          opacity: .85;
      }
  } 

}
</style>