// app.js用以引入各个模块依赖
import Vue from 'vue'
import Button from './button'
import Icon from './icon'

//声明全局的组件
Vue.component('wlin-button',Button)
Vue.component('wlin-icon',Icon)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false
    }
})