<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-button style="margin-bottom: 10px;" :loading="loading1" @click="loading1 = !loading1">默认按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" icon="settings">默认按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" :loading="true">默认按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" disabled>默认按钮</wlin-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/button'

  export default {
    name: 'wlinButtonDemo',
    components: {
      'wlin-button': Button
    },
    data () {
      return {
        loading1: false,
        content: `
          <wlin-button>默认按钮</wlin-button>
          <wlin-button icon="settings">默认按钮</wlin-button>
          <wlin-button :loading="true">默认按钮</wlin-button>
          <wlin-button disabled>默认按钮</wlin-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>