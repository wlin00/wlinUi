<template>
    <div class="wlin-collapse-item">
      <div class="wlin-collapse-item__title" @click="handleClick">
        {{ title }}
      </div>
      <div style="width:100%;overflow:hidden;">
        <transition name="slide">
          <div class="wlin-collapse-item__content" v-if="visible">
            <slot></slot>
          </div>
        </transition>
      </div>
  
    </div>
</template>

<script>
  export default {
    name: 'wlinCollapseItem',
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        visible: false,
        single: false
      }
    },
    methods: {
      handleClick() {

        if (this.single) { // 根据当前是否单选模式改变click方法
          this.eventBus.$emit('input', this.title)
          this.eventBus.$emit('change', this.title)
        } else {
          this.eventBus.$emit('input', this.title)
          this.eventBus.$emit('change', this.title)
        }
      
      }
    },
    created() {
      this.eventBus && this.eventBus.$on('input', (val) => {

        console.log('val',this.title, val, this.visible)

        if (this.single) {
          this.visible = val === this.title && !this.visible
        } else {
          if (val === this.title) {
            this.visible = !this.visible
          }
          // this.visible = val === this.title && !this.visible
        }

        console.log('res', this.visible)

      })
    
    }
  }
</script>

<style lang="scss" scoped>
.wlin-collapse-item{
  width: 100%;
  user-select: none;
  box-sizing: border-box;
  &__title{
    border: 1px solid #ddd;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    &:first-child{
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-top: -2px;
    }
    &:last-child{
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  &__content{
    padding: 8px;
    border: 1px solid #ddd;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    &:last-child{
      border-top: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  .slide-enter-active, .slide-leave-active{
    transition: transform .3s linear; 
  }
  .slide-enter{
    // top: -100%;
    transform: translate3d(0, -100%, 0)
  }
  .slide-leave-to{
    display: none;
  }
}
</style>