<template>

    <div class="code">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ws-code"
    }
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin.scss";
.code{
  display: block;
  padding-left: px2rem(50);
  padding-right: px2rem(50);
  padding-top: px2rem(50);
  padding-bottom: px2rem(50);
  background-color: #eeeeee;
  text-align: left;
  margin-left: px2rem(50);
  margin-right: px2rem(50);
  margin-top: px2rem(50);
  margin-bottom: px2rem(150);
  border-radius: 12px;
}

</style>
