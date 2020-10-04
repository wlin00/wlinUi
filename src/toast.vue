<template>
    <div class="wlin-toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "wlinToast",
      data() {
          return {
              key: ''
          }
      },
      methods: {
          name() {
              
          }
      },

        
    }
</script>

<style lang="scss" scoped>

$font-size: 14px;
$toast-height: 48px;
$toast-bg: rgba(0, 0, 0, .75);


.wlin-toast{
 
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.8;
  height: $toast-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: white;
  padding: 0 15px;

}
</style>