// toast 插件，向外暴露一个install， 提供给使用者。使用者通过vue.use来安装插件
import Toast from './toast'
export default{
    install (Vue, options) {
        // message参数可以拿到用户创建toast实例时的传参
        Vue.prototype.$toast = function (message, toastOptions) {
            let toastConstructor = Vue.extend(Toast) // 获取Toast组件的一个构造器
            let toast = new toastConstructor({
                propsData: {
                    closeBtnOptions: toastOptions.closeBtnOptions,
                    showCloseBtn: toastOptions.showCloseBtn
                }
            }) // 获取一个toast实例
            
            // 给实例的：未包含在具名插槽中的节点属性赋值
            toast.$slots.default = [message]
            // 手动挂载一个未挂载的实例
            toast.$mount()
            console.log('el', toast)


            // toast 实例的根dom元素插入body
            document.body.appendChild(toast.$el)
        }
    }
}