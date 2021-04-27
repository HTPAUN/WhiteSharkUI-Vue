<template>
    <div class="pageA">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ws-part"
    }
</script>

<style scoped lang="scss">
@import "@assets/styles/mixin";
  .pageA{
    padding-top: px2rem(100);
    padding-left: px2rem(50);
    padding-right: px2rem(50);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 6px 16px 0 #e1e4e7;
    margin-bottom: px2rem(200);
  }
</style>
