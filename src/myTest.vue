<template>
    <div class="myTest">
        <!-- sync:父组件监听子组件的改变，同步改变 -->
     <wlin-pager 
         :current-page.sync="pageNo" 
         :total-page="pageSize" 
         :page-size-change="onPageSizeChange"
         :page-change="onPageChange"
         :warn-call-back="handleWarn"
         :hide-if-one-page="false"
         :simple="simple"
    ></wlin-pager>
    </div>
</template>

<script>
import Pager from './pager'
    export default {
        props: {
            simple: {
                type: Boolean,
                default: false
            },
        },
        components: {
            'wlin-pager':Pager,
        },
        methods: {
            onPageSizeChange(e) {
                //pageSize改变的回调
                // console.log('pageSize-parent',e)
            },
            onPageChange(e){
                //pageNo改变的回调
                // this.pageNo = 1
                // console.log('page-parent',e)
            },
            handleWarn(){
              console.warn('currentPage should be greater than 1 and lower than totalPage')
            }
        },
        data() {
            return {
                pageNo: 1,
                pageSize: 150
            }
        },
    }
</script>

<style lang="scss" scoped>
.myTest{
    display: inline-block;
}
</style>