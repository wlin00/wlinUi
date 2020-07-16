<template>
  <div class="col" :class="[span && `col_${span}`,offset && `offset_${offset}`]"
   :style="{paddingLeft:gutter?gutter/2+'px':0,paddingRight:gutter?gutter/2+'px':0}" 
    >
      <div style="border: 1px solid green;height:100px"> 
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "wlinCol",
  props: {
      span: {
          type: [Number,String],
      },
      offset: {
          type: [Number,String]
      }
  },
  data() {
      return {
          gutter: 0
      }
  },
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;

  //使用scss-loops循环遍历，给每个指定class加样式
  $class: col_;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%; //计算每种col对应的宽度
    }
  }

   $class2: offset_;
  @for $n from 1 through 24 {
    &.#{$class2}#{$n} {
      margin-left: ($n/24) * 100%; //计算每种col对应的距离左边的偏移量
    }
  }
}
</style>
