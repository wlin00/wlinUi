<template>
  <div class="wlin-popover" @click="handleClick" ref="popover">
    <div class="wlin-popover__content" :class="{[`wlin-popover__content--${position}`]:true}" ref="contentWrapper" v-if="visible">
      <slot></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot name="reference"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'wlinPopover',
    components: {
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleClick(e) {
        // 若当前点击是在trigger-dom内
        if (this.$refs.triggerWrapper.contains(e.target)) {
          console.log('click')
          if (this.visible) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      open() {
        // 打开popover - 之后改变组件dom位置于document后，开启Dom内对于二次触发关闭的监听
        this.visible = true
        this.$nextTick(() => {
          this.locatePop()
          document.addEventListener('click', this.eventHandler)
        })
      },
      close() {
        // 关闭popover
        this.visible = false
        document.removeEventListener('click', this.eventHandler)
      },
      locatePop() {
        const { triggerWrapper, contentWrapper } = this.$refs
        // 将popover弹窗部位放置于document.body后面， 防止组件外层Dom加上overFlow:hidden后导致的样式遮盖
        document.body.appendChild(contentWrapper)
        // 获取当前的trigger-dom的位置
        let { width, height, top, left } = triggerWrapper.getBoundingClientRect()
        let { width: widthContent, height: heightContent } = contentWrapper.getBoundingClientRect()

        if (this.position === 'top') {
          contentWrapper.style.top = top + scrollY + 'px'
          contentWrapper.style.left = left + scrollX + 'px'
        } else if (this.position === 'bottom') {
          contentWrapper.style.top = top + height + scrollY + 'px'
          contentWrapper.style.left = left + scrollX + 'px'
        } else if (this.position === 'left') {
          contentWrapper.style.top = top + scrollY + (height - heightContent) / 2 + 'px'
          contentWrapper.style.left = left + scrollX +  'px'
        } else if (this.position === 'right') {
          contentWrapper.style.top = top + scrollY + (height - heightContent) / 2 + 'px'
          contentWrapper.style.left = left + scrollX + width + 'px'
        }

      },
      eventHandler(e) {
        // 事件处理器 - 用于监听页面中其他位置再次触发后的popover关闭
        if (this.$refs.popover && 
           (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
            return
        }
        if (this.$refs.contentWrapper.contains(e.target) || this.$refs.contentWrapper === e.target) {
          // 防止popover-content点击后的取消
          return
        }
        this.close()
      }
    },
    
  }
</script>

<style lang="scss" scoped>
  .wlin-popover{
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    &__content{
      position: absolute;
      box-sizing: border-box;
      padding: .5em 1em;
      max-width: 20em;
      word-break: break-all;
      border: 1px solid #000;
      border-radius: 3px;
      z-index: 10;
      background: #fff;
      &::before, &::after{
        // 三角形统一样式
        content: '';
        display: block;
        position: absolute;
        border: 10px solid transparent;// 四个角统一先透明
        width: 0;
        height: 0;
      }
      &--top{
        margin-top: -13px;
        transform: translateY(-100%); // 将popover弹层放置在trigger触发器上方
        &::before, &::after{
          left: 10px; // 三角形统一偏移量
        }
        &::before{
          // 构建遮盖小三角形， 和底色一致，用于抬高1px遮盖
          border-top-color:#000;
          top: 100%;
          border-radius: 5px;
        }
        &::after{
          // 构建着色小三角形
          border-top-color:white;
          top: calc(100% - 1px);
          border-radius: 5px;
        }
      }
      &--bottom{
        margin-top: 13px;
        // transform: translateY(100%); // 将popover弹层放置在trigger触发器上方
        &::before, &::after{
          left: 10px; // 三角形统一偏移量
        }
        &::before{
          // 构建着色小三角形
          border-bottom-color:#000;
          bottom: 100%;
        }
        &::after{
          // 构建遮盖小三角形， 和底色一致，用于抬高1px遮盖
          border-bottom-color:white;
          bottom: calc(100% - 1px);
        }
      }
      &--left{
        transform: translateX(-100%); // 将popover弹层放置在trigger触发器上方
        margin-left: -13px;
        &::before, &::after{
          // 三角形统一偏移量
          top: 50%;
          transform: translateY(-50%);
        }
        &::before{
         
           // 构建着色小三角形
          border-left-color:#000;
          left: 100%;
        }
        &::after{
          // 构建遮盖小三角形， 和底色一致，用于左移1px遮盖
          border-left-color:white;
          left: calc(100% - 1px);
        }
      }
      &--right{
        margin-left: 13px;
        &::before, &::after{
          // 三角形统一偏移量
          top: 50%;
          transform: translateY(-50%);
        }
        &::before{
           // 构建着色小三角形
          border-right-color:#000;
          right: 100%;
        }
        &::after{
          // 构建遮盖小三角形， 和底色一致，用于左移1px遮盖
          border-right-color:white;
          right: calc(100% - 1px);
        }
      }
  

    }
    
    
  }

</style>