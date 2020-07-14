<template>
  <svg class="icon">
      <use :xlink:href='`#i-${name}`'></use>
  </svg>
</template>

<script>
    import './iconFont'
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
        },
        
    }
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'wlin-demo';  /* project id 1918365 */
  src: url('//at.alicdn.com/t/font_1918365_76etf97ersd.eot');
  src: url('//at.alicdn.com/t/font_1918365_76etf97ersd.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1918365_76etf97ersd.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1918365_76etf97ersd.woff') format('woff'),
  url('//at.alicdn.com/t/font_1918365_76etf97ersd.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1918365_76etf97ersd.svg#wlin-demo') format('svg');
}
.icon{
    width: 1em;
    height: 1em;
}

</style>