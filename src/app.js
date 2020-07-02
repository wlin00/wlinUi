// app.js用以引入各个模块依赖
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

//声明全局的组件
Vue.component('wlin-button',Button)
Vue.component('wlin-icon',Icon)
Vue.component('wlin-button-group',ButtonGroup)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})