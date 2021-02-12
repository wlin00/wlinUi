<template>
  <div class="wlin-collapse">
   <slot>
   </slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'wlinCollapse',
    props: {
      value: {
        type: Number | String,
        require: true
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    methods: {
      handleChange (val) {
        this.$emit('change', val) // 监听tab事件的改变
      },
      handleValueChange (val) {
        console.log('v', val)
        this.$emit('input', val) // v-model 默认接收名为value的props、并监听名为input的方法
      }
    },
    mounted () {
        // 初始状态时， 将默认的tabs选中值发布给消息中心eventBus
        this.eventBus.$on('change', this.handleChange) // 监听tab改变的事件回调
        this.eventBus.$on('input', this.handleValueChange) // v-model：监听tab-value的改变
        this.eventBus.$emit('input', this.value) // 初始状态，将默认的tabs选中值发布给消息中心eventBus
        
        // 将用户设置的可选属性single传递给子组件
        this.$children.forEach((vm) => {
          vm.single = this.single
        })
    },
    provide() {
      return {
        eventBus: this.eventBus // 注入eventBus依赖
      }
    }    
  }
</script>

<style lang="scss" scoped>
.wlin-collapse{
  width: 100%;
  user-select: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  border-bottom: none;
  box-sizing: border-box;
}
</style>