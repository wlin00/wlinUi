<template>
    <div class="myTest">
      <wlin-pager 
          v-model="pageNo" 
          :total-page="pageSize" 
          :page-size-change="onPageSizeChange"
          @change="onPageChange"
          :warn-call-back="handleWarn"
          :hide-if-one-page="false"
          :simple="simple"
      ></wlin-pager>

      <wlin-tabs v-model="selectedTab" @change="handleTabChange">
          <wlin-tabs-head>
              <template slot="action"><!-- 顶部操作按钮 -->
                  <button>操作</button>
              </template>
              <wlin-tabs-item name="home">首页</wlin-tabs-item><!-- 顶部导航栏区域 -->
              <wlin-tabs-item name="video">视频</wlin-tabs-item>
              <wlin-tabs-item name="setting">
                  <wlin-icon style="position:relative;top:2px;left:2px;" name="setting"></wlin-icon>
                  设置
              </wlin-tabs-item>
          </wlin-tabs-head>
          <wlin-tabs-body>
              <wlin-tabs-pane name="home">首页内容</wlin-tabs-pane>
              <wlin-tabs-pane name="video">视频内容</wlin-tabs-pane>
              <wlin-tabs-pane name="setting">设置内容</wlin-tabs-pane>
          </wlin-tabs-body>
      </wlin-tabs>
    </div>
</template>

<script>
import Pager from './components/pager/pager'
import Tabs from './components/tabs/tabs'
import TabsHead from './components/tabs/tabs-head'
import TabsBody from './components/tabs/tabs-body'
import TabsItem from './components/tabs/tabs-item'
import TabsPane from './components/tabs/tabs-pane'

    export default {
        props: {
            simple: {
                type: Boolean,
                default: false
            },
        },
        components: {
          'wlin-pager':Pager,
          'wlin-tabs':Tabs,
          'wlin-tabs-head':TabsHead,
          'wlin-tabs-body':TabsBody,
          'wlin-tabs-item':TabsItem,
          'wlin-tabs-pane':TabsPane,
        },
        methods: {
            onPageSizeChange(e) {
                //pageSize改变的回调
                console.log('pageSize',e)
            },
            onPageChange(e){
                //pageNo改变的回调
                // this.pageNo = 1
                // console.log('page-parent',e)
                console.log(e)
            },
            handleWarn(){
              console.warn('currentPage should be greater than 1 and lower than totalPage')
            },
            handleTabChange(e) {
              console.log('tab-change', e)

            }
        },
        data() {
            return {
                pageNo: 1,
                pageSize: 150,
                selectedTab: 'video',
            }
        },
    }
</script>

<style lang="scss" scoped>
.myTest{
    // display: flex;
    width: 100%;
}
</style>