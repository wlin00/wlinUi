<template>
  <div class="wlin-collapse-item">
    <div class="wlin-collapse-item__title" @click="visible = !visible">
      {{ title }}
    </div>
    <div class="wlin-collapse-item__content" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wlinCollapseItem',
    props: {
      title: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
.wlin-collapse-item{
  width: 100%;
  user-select: none;
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

  .slide-enter-active, .slide-leave-active {
    transition: opacity 2s;
  }
  .slide-enter, .slide-leave-to {
     transform: translateY(-100%);
  }
}
</style>