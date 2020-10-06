// app.js用以引入各个模块依赖
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Layout from './layout'
import Sider from './sider'
import Pager from './pager'
import Toast from './toast'

//测试其他组件
import MyTest from './myTest'
//toast
import ToastPlugin from './toast-plugin'




// 引入chai.js用于断言，进行单元测试;引入chai-spies进行mock
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)



//声明全局的组件
Vue.component('wlin-button', Button)
Vue.component('wlin-icon', Icon)
Vue.component('wlin-button-group', ButtonGroup)
Vue.component('wlin-input',Input)
Vue.component('wlin-row',Row)
Vue.component('wlin-col',Col)
Vue.component('wlin-header',Header)
Vue.component('wlin-content',Content)
Vue.component('wlin-footer',Footer)
Vue.component('wlin-layout',Layout)
Vue.component('wlin-sider',Sider)
Vue.component('wlin-pager',Pager)
Vue.component('wlin-toast',Toast)

Vue.component('wlin-my-test',MyTest)

// 安装toast插件
Vue.use(ToastPlugin)



new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    },
    methods:{
        showToast(){
            this.$toast('<a href="//www.baidu.com">11</a>hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大   的撒的撒dasdsad撒阿斯顿', {
            // 是否展示关闭按钮 - 默认为true
            // showCloseBtn: false,

            // 是否支持Html格式
            enableHtml: true,

            // 关闭按钮相关选项 - 对象的数据结构，供用户修改关闭按钮文本、关闭的回调。
            // closeBtnOptions: {
            //     text: '知道了',
            //     handleClose: this.handleClose
            // },

          })
        },
        // 关闭toast后的回调
        handleClose() {
          console.log('hhha')
        }
    }
})

// 单元测试语句
// try { 
//     //1-Button组件单元测试，利用chai.js断言来判断icon属性的正确性
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData: {
//                 icon: 'setting'
//             }
//         }).$mount()
//         //引入chai.js,使用expect进行断言
//         var expect = chai.expect
//         //获取需要断言的节点的xlink:href属性（svg链接属性)
//         var node = button.$el.querySelector('use')
//         var href = node.getAttribute('xlink:href')
//         expect(href).to.equal('#i-setting')
//         //断言成功后，删除页面元素和对象
//         button.$el.remove()
//         button.$destroy()
//     }

//     //2-Button组件单元测试，利用chai.js断言来判断icon、loading属性的正确性
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData: {
//                 icon: 'setting',
//                 loading: true
//             }
//         }).$mount('')
//         //引入chai.js,使用expect进行断言
//         var expect = chai.expect
//         //获取需要断言的节点的xlink:href属性（svg链接属性)
//         var node = button.$el.querySelector('use')
//         var href = node.getAttribute('xlink:href')
//         expect(href).to.equal('#i-spinner')
//         //断言成功后，删除页面元素和对象
//         button.$el.remove()
//         button.$destroy()
//     }

//     //3-Button组件单元测试，利用chai.js断言来判断order属性正确性（获取svg的order)
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData: {
//                 icon: 'setting',
//                 iconPosition: 'right'
//             }
//         }).$mount('')
//         //引入chai.js,使用expect进行断言
//         var expect = chai.expect
//         //获取需要断言的节点的xlink:href属性（svg链接属性)
//         var svg = button.$el.querySelector('svg')
//         var { order } = window.getComputedStyle(svg)
//         expect(order).to.equal('')
//         //断言成功后，删除页面元素和对象
//         button.$el.remove()
//         button.$destroy()
//     }

//     //4-Button组件单元测试，利用chai.js、chai-spies进行点击事件的单元测试，用spies间谍来监听点击事件，
//     //来验证一个事件是否执行过。 mock-click，模拟一个点击事件的发生并监听。
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData: {
//                 icon: 'setting',
//                 iconPosition: 'right'
//             }
//         }).$mount('#test')
//         //引入chai.js,使用expect进行断言
//         var expect = chai.expect

//         const spy = chai.spy(() => { })
//         button.$on('click', spy)//间谍监听组件实例的点击事件

//         //模拟按钮的点击
//         button.$el.click()
//         // 断言：点击事件发生过
//         expect(spy).to.have.been.called()



//         //断言成功后，删除页面元素和对象
//         button.$el.remove()
//         button.$destroy()
//     }
// }
// catch (err) {
//     window.errors = [err]
// }
// finally {
//     window.errors && window.errors.forEach(err => {
//         console.log(err)
//     })
// }
