<template>
    <div class="wlin-tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    // 注册的事件中心
    export default {
        name: "wlinTabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator (value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                // 注册一个事件中心， 由provide提供给子代所有组件
                eventBus: new Vue()
            }
        },
        mounted () {
            // 初始状态时， 将默认的tabs选中值发布给消息中心eventBus
            this.eventBus.$emit('update:selected', this.selected)
        },
        // 向子代组件提供依赖
        provide(){
            return {
              eventBus: this.eventBus
            }
        }
    }
</script>

<style lang="scss" scoped>
.wlin-tabs{

}

</style>