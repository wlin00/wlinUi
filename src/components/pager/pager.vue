<template>
  <div class="wlin-pager" v-if="!(hideIfOnePage && totalPage === 1)">

 <template v-if="!simple">
    <span
      class="wlin-pager-nav prev"
      :class="{ disabled: value === 1 }"
      @click="updatePage(value - 1)"
    >
      <wlin-icon name="left"></wlin-icon>
    </span>
      <template v-for="(page, index) in pages">
        <template v-if="!simple">
          <template v-if="page === value">
            <span class="wlin-pager-item current" :key="index">{{ page }}</span>
          </template>
          <template v-else>
            <span
              class="wlin-pager-item"
              @click="updatePage(page)"
              :key="index"
              >{{ page }}</span
            >
          </template>
        </template>
      </template>
      <span
        class="wlin-pager-nav next"
        :class="{ disabled: value === totalPage }"
        @click="updatePage(value + 1)"
      >
        <wlin-icon name="right"></wlin-icon>
      </span>

      <div class="wlin-pager-select wlin-pager-box">
        <select @change="handleSelect">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div class="wlin-pager-jump">
        <input type="text" id="inp" :value.sync="inputValue" />
        <span @click="handleJump">跳转</span>
      </div>
    </template>

    <!-- 简易模式 -->
    <template v-else>
       <span
      class="wlin-pager-nav prev"
      :class="{ disabled: value === 1 }"
      @click="updatePage(value - 1)"
    >
      <wlin-icon name="left"></wlin-icon>
    </span>
      <template>
        <div>
          <span class="wlin-pager-item simple">{{ value }}</span>
          <span class="wlin-pager-item simple">/</span>
          <span class="wlin-pager-item simple">{{ totalPage }}</span>
        </div>
      </template>
      <span
        class="wlin-pager-nav next"
        :class="{ disabled: value === totalPage }"
        @click="updatePage(value + 1)"
      >
        <wlin-icon name="right"></wlin-icon>
      </span>
    </template>

    
  </div>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "wlinPager",
  components: {
    "wlin-icon": Icon,
  },
  props: {
    hideIfOnePage: {
      type: Boolean,
      default: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    value: { // v-model 会自动找到自定义组件中的名为‘value’的prop， 和对应的名为‘input’的emit事件发布
      type: Number,
      required: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    //pageSize改变时的回调
    pageSizeChange: {
      type: Function,
      validator(value){
        return typeof(value) === 'function'
      }
    },
    //pageNo改变时的回调 - v-model加入后只需要订阅change事件
    // pageChange: {
    //   type: Function,
    //   validator(value){
    //     return typeof(value) === 'function'
    //   }
    // },
    //错误捕获时的回调
    warnCallBack: {
      type: Function,
      validator(value){
        return typeof(value) === 'function'
      }
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  mounted() {
    // console.log(this.currentPage);
  },
  methods: {
    unique(arr) {
      //数组去重
      let map = {};
      arr.forEach((item) => {
        map[item] = true;
      });
      return Object.keys(map).map((e)=>parseInt(e,10));
    },
    updatePage(page) {
      if (page >= 1 && page <= this.totalPage) {
        //子组件通知父组件更新数据
        this.$emit("input", page);
        this.$emit('change', page)
        // this.$nextTick(()=>{
        //   this.pageChange && this.pageChange(page)
        //   console.log("change", this.pages);
        // })
      }
    },
    //处理分页组件点击的跳转
    handleJump(){
      if(!document.querySelector('#inp').value || !/^[0-9]+$/.test(Number(document.querySelector('#inp').value))){
        return
      }
      let pageNo = Number(document.querySelector('#inp').value)
      if(1 <= pageNo && pageNo <= this.totalPage){
      // this.$emit("update:currentPage",pageNo)
      // this.$nextTick(()=>{
      //     this.pageChange && this.pageChange(pageNo)
      //   })
      this.$emit('input', pageNo)
      this.$emit('change', pageNo)
      } else {
        this.warnCallBack && this.warnCallBack()
      }
    },
    //处理pagesize改变
    handleSelect(e){
      var currentSelect = Number(e.target.value)
      //pageSizeChange时，组件当前页码回到第一页
      // this.$emit("update:currentPage", 1);
      this.$emit('input', 1)
      this.pageSizeChange && this.pageSizeChange(currentSelect)

    },

  },
  computed: {
    //省略号模式（未限制页数）- 计算属性
    // pages() {
    //   //分页数据初始值
    //   let pages = [
    //     1,
    //     this.totalPage,
    //     this.currentPage,
    //     this.currentPage - 1,
    //     this.currentPage - 2,
    //     this.currentPage + 1,
    //     this.currentPage + 2,
    //   ];
    //   //对数据非法项筛选
    //   let pageFilter = pages.filter((e) => {
    //     return e >= 1 && e <= this.totalPage;
    //   });
    //   //对数据去重排序
    //   let pages2 = this.unique(pageFilter.sort((a, b) => a - b));
    //   //当数据前一项和后一项差值大于1，插入一条字符串
    //   //reduce,一参的回调方法，参数1--过去的值（可积累）；参数2--当前的值； 参数3 -- index ；参数4 -- 当前操作的数组
    //   //reduce，二参的值对应prev的初始值
    //   let pagesRes = pages2.reduce((prev, current, index, arr) => {
    //     prev.push(current);
    //     //判断前后差值
    //     arr[index + 1] !== undefined &&
    //       arr[index + 1] - arr[index] > 1 &&
    //       prev.push("...");
    //     return prev;
    //   }, []);
    //   console.log('currentArr: ',pagesRes)
    //   return pagesRes;
    // }, 

    //传统模式（限制每次展示页数） - 计算属性
    pages() {
      //分页数据初始值
      let pages = [
        // 1,
        // this.totalPage,
        this.value,
        this.value - 1,
        this.value - 2,
        this.value - 3,
        this.value - 4,

        this.value + 1,
        this.value + 2,
        this.value + 3,
        this.value + 4,

      ];
      //对数据非法项筛选，只保留[1,max]间的值
      let pageFilter = pages.filter((e) => {
        return e >= 1 && e <= this.totalPage;
      });
      //对数据去重排序
      let pages2 = this.unique(pageFilter.sort((a, b) => a - b));
      //console.log('current ',this.currentPage,pages2,pages2.indexOf(this.currentPage))

      //限制分页组件最大展示的数据总量
      let pageRes = this.value >= 3 && this.value <= this.totalPage -2 ? 
      [this.value-2,this.value-1,this.value,this.value+1,this.value+2]:
      (this.value<=3 ? pages2.slice(0,5) : pages2.slice(-5))
      
      return pageRes;
    }, 

  },
};
</script>

<style lang="scss" scoped>
.wlin-pager {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &-separator {
    width: 20px;
    font-size: 12px;
  }
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 0 4px;
    color: #000;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    min-width: 22.02px; //数字较长自动撑开
    height: 20px;
    margin: 0 4px;
    cursor: pointer;
    &:hover {
      border-color: rgb(56, 134, 165);
    }
    &.current {
      cursor: default;
      border-color: rgb(56, 134, 165);
    }
  }
  &-box {
    display: inline-block;
    >select{
      margin-left: 20px;
    }
  }
  &-select {
    width: 45px;
    > select {
      width: 100%;
    }
  }
  &-jump {
    display: inline-block;
    margin-left: 40px;
    >input{
      display: inline-block;
      width: 40px;
      // top: 50%;
      // transform: translateY(-50%);
    }
    >span{
      display: inline-block;
      width: 36px;
      color: #fff;
      background-color: rgb(20, 127, 214);
      line-height: 20px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      height: 20px;
      border-radius: 4px;
    }
    >span:hover{
      opacity: 0.7;
    }
  }
  &-nav {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: rgb(104, 122, 141);
    height: 20px;
    width: 20px;
    border-radius: 4px;
    font-size: 12px;
    margin: 8px 4px;
    &.disabled {
      fill: rgb(148, 162, 175);
      background: rgb(110, 122, 136);
      cursor: default;
    }
  }
}
</style>
