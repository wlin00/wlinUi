// app.js用以引入各个模块依赖
import Vue from 'vue'
import Button from './button'

//声明全局的组件
Vue.component('wlin-button',Button)

new Vue({
    el:'#app',
    data:{
    }
})