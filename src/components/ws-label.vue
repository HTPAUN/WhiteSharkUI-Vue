<template>
  <label
    :class="classNames"
    :disabled="disabled"
    :type="type"
    :style="design"
    class="ws-label"
  >
    <slot></slot>
  </label>
</template>

<script>

    export default {
      name: "ws-label",
      props: {
        type: {
          type: String,
          default: 'blue'
        },
        color: {
          type: String,
          default: ''
        },
        backgroundColor: {
          type: String,
          default: ''
        },
        block: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          show: false,
          design: {
            color: this.color,
            backgroundColor: this.backgroundColor,
          }
        }
      },
      computed: {
        classNames(){
          let type = this.type
          let block = this.block
          let disabled = this.disabled
          return {
            'ws-label-red':type === 'red',
            'ws-label-yellow':type === 'yellow',
            'ws-label-blue':type === 'blue',
            'ws-label-green':type === 'green',
            'ws-label-purple':type === 'purple',
            'ws-label':type === 'customize',
            'block': block,
            'disabled':disabled
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin";

  .ws-label {
    width: px2rem(500);
    height: px2rem(100);
    padding-left: px2rem(20);
    padding-right: px2rem(20);
    padding-bottom: px2rem(10);
    padding-top: px2rem(10);
    font-size: px2rem(50);
    font-family: "Microsoft YaHei UI", serif;
    text-space: 8px;
    font-weight: 600;
    border-radius: 5px;
    color: #295be6;
    background-color: rgba(41,91,230,0.1);
    margin: px2rem(20);
  }

  .ws-label-red{
    color:#EB4962;
    background-color: rgba(235,73,98,0.18);
    margin: px2rem(20);
  }

  .ws-label-green{
    color:#12b2b6;
    background-color: rgba(18,178,230,0.18);
  }

  .ws-label-purple{
    color:#774ee0;
    background-color: rgba(119,78,224,0.18);
  }

  .ws-label-yellow{
    color: #ffd700;
    background-color: rgba(255,215,0,0.18);
  }


</style>
