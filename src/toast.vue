<template>
    <div class="wlin-toast" ref='parent' :class="computePosition">
        <!-- 若支持文本传入html， 需开启enableHtml，结合v-html实现 -->
        <div class="wlin-toast__msgbox">
          <slot v-if="!enableHtml"></slot>
          <div class="test" v-else v-html="$slots.default[0]"></div>
        </div>
       

        <!-- toast关闭按钮, 点击后销毁组件，并触发用户回调（如果有的话) -->
        <span class="wlin-toast__close" ref='child' v-if="showCloseBtn" @click="handleClickClose" >{{ closeBtnOptions.text }}</span>
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
              default: 300022
          },

          // 是否展示关闭按钮
          showCloseBtn: {
              type: Boolean,
              default: true
          },

          // 是否支持html形式的文本
          enableHtml: {
              type: Boolean,
              default: false
          },

          // 决定toast出现位置的属性，可接受left、right、top、bottom、center五个位置
          position: {
            type: String,
            default: 'center',
            validator(value){
              return ['left', 'right', 'top', 'bottom', 'center'].indexOf(value) >= 0
            }
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
            
          },

          // 调整开启min-height、flex的父盒子内部子盒子的高（子盒子height:100%失效)
          adjustHeight() {
              // 等待dom的挂载完成
              if (!this.showCloseBtn) return
              this.$nextTick(() => {
                this.$refs.child.style.height = `${this.$refs.parent.getBoundingClientRect().height}px`
              })
          },

          // 当autoClose存在时，定时器到点关闭toast实例
          execAutoClose() {
            let { autoClose, autoCloseDelay } = this
            if (autoClose) {
              setTimeout(() => {
                this.close()
              }, autoCloseDelay)
            }
          }
      },
      mounted () {
        this.adjustHeight()
        this.execAutoClose()
      },
      computed: {
        computePosition() {
          // 根据接收或默认的position属性决定toast出现的位置
          return {[`wlin-toast--${this.position}`]:true}
        }
      },
    }
</script>

<style lang="scss" scoped>

$font-size: 14px;
$toast-min-height: 48px;
$toast-line-height: 1.8;
$toast-bg: rgba(0, 0, 0, .75);


.wlin-toast{
 
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  line-height: $toast-line-height;
  min-height: $toast-min-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: white;
  padding: 0 15px;
  transition: all 0.5s linear;
  max-width: 800px;

  // toast位置
  &--left{
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &--right{
    top: 50%;
    right: 0;
    transform: translateY( -50%);
  }

  &--top{
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &--bottom{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &--center{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }



  &__close{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-left: 15px;
      margin-left: 15px;
      border-left: 1px solid aliceblue;
      // flex盒子的子盒子， 不受父盒子的挤压影响
      flex-shrink: 0;
      cursor: pointer;
      &:hover{
          opacity: .7;
      }
  } 

  &__msgbox{
      width: 100%;
      padding: 7px 0;
  }

}
</style>