// app.js用以引入各个模块依赖
import Vue from 'vue'

// 图标
import Icon from './components/icon/icon.vue'
// 按钮
import Button from './components/button/button.vue'
import ButtonGroup from './components/button/button-group'
// 输入框
import Input from './components/input/input.vue'
// layout布局组件
import Row from './components/layout/row.vue'
import Col from './components/layout/col.vue'
// 布局容器组件
import Header from './components/container/header.vue'
import Content from './components/container/content.vue'
import Footer from './components/container/footer.vue'
import Layout from './components/container/layout.vue'
import Sider from './components/container/sider.vue'
// 分页组件
import Pager from './components/pager/pager.vue'
// 轻提示组件
import Toast from './components/toast/toast-plugin'
// tab组件
import Tabs from './components/tabs/tabs.vue'
import TabsBody from './components/tabs/tabs-body.vue'
import TabsHead from './components/tabs/tabs-head.vue'
import TabsItem from './components/tabs/tabs-item.vue'
import TabsPane from './components/tabs/tabs-pane.vue'
// Popover组件
import Popover from './components/popover/popover.vue'


//测试其他组件
import MyTest from './myTest'
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
// Vue.component('wlin-toast',Toast)
Vue.component('wlin-tabs',Tabs)
Vue.component('wlin-tabs-head',TabsHead)
Vue.component('wlin-tabs-body',TabsBody)
Vue.component('wlin-tabs-item',TabsItem)
Vue.component('wlin-tabs-pane',TabsPane)
Vue.component('wlin-popover', Popover)


Vue.component('wlin-my-test',MyTest)

// 安装toast插件
Vue.use(Toast)



new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,

        // 当前选中的tab名
        selectedTab: 'video',
        page: 2
    },
    methods:{
        showToastTop(){
            this.$toast(`${Math.floor(Math.random()*10)}<a href="//www.baidu.com">11</a>hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大   的撒的撒dasdsad撒阿斯顿`, {
            // 是否展示关闭按钮 - 默认为true
            showCloseBtn: false,
            // 是否支持Html格式
            enableHtml: true,
            position: 'top',
            // 关闭按钮相关选项 - 对象的数据结构，供用户修改关闭按钮文本、关闭的回调。
            closeBtnOptions: {
                text: '知道了',
                handleClose: this.handleClose
            },
          })
        },
        showToastBottom(){
          this.$toast(`${Math.floor(Math.random()*10)}<a href="//www.baidu.com">11</a>hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大   的撒的撒dasdsad撒阿斯顿`, {
          // 是否展示关闭按钮 - 默认为true
          showCloseBtn: false,
          // 是否支持Html格式
          enableHtml: true,
          position: 'bottom',
          // 关闭按钮相关选项 - 对象的数据结构，供用户修改关闭按钮文本、关闭的回调。
          // closeBtnOptions: {
          //     text: '知道了',
          //     handleClose: this.handleClose
          // },
        })
      },
      showToastMiddle(){
        this.$toast(`${Math.floor(Math.random()*10)}<a href="//www.baidu.com">11</a>hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大hdsahdsaudhsaiudahiudsadsa的萨达达大师大师大师的撒打算的撒大   的撒的撒dasdsad撒阿斯顿`, {
        // 是否展示关闭按钮 - 默认为true
        // showCloseBtn: false,
        // 是否支持Html格式
        enableHtml: true,
        position: 'middle',
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
    },
  
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
